import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "node:http";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createAccountStore } from "../src/server/account-store.mjs";
import { createQuestionFeedbackApi } from "../src/server/question-feedback-api.mjs";
import { readJsonBody } from "../src/server/http.mjs";
import { loadSubjectLessonPart } from "../src/data/lessons/subject-lesson-registry.js";
import { createQuestionFeedback } from "../src/services/question-feedback.js";

test("reports, ratings and personal hiding validate ownership and published questions, deduplicate and persist",async t => {
  const directory = await mkdtemp(path.join(tmpdir(),"learn-question-feedback-"));
  const databasePath = path.join(directory,"accounts.sqlite");
  let store = createAccountStore({ databasePath });
  const actors = [];
  for (const username of ["feedback-one","feedback-two"]) {
    const { account } = await store.createAccount({ username,curriculum:"gaza",path:"scientific",password:"Password123" });
    actors.push({ id:account.id,token:store.createSession(account.id).token });
  }
  const server = createServer(createQuestionFeedbackApi({ accountStore:store,readJsonBody }));
  await new Promise(resolve => server.listen(0,"127.0.0.1",resolve));
  t.after(async () => { await new Promise(resolve => server.close(resolve)); store.close(); await rm(directory,{ recursive:true,force:true }); });
  const key = { subjectId:"ict",lessonId:"database-management",partId:"access-basics" };
  const lesson = await loadSubjectLessonPart(key.subjectId,key.lessonId,key.partId);
  key.stepId = lesson.steps.find(step => step.type === "question").id;
  const send = async (value,actor = actors[0],headers = {}) => {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/api/question-feedback`,{
      method:value ? "POST" : "GET",headers:{ "Content-Type":"application/json",Cookie:`tawjihi_session=${actor.token}`,"X-Progress-Owner":`account:${actor.id}`,...headers },
      ...(value ? { body:JSON.stringify(value) } : {}),
    });
    return { status:response.status,body:await response.json() };
  };
  const report = { ...key,type:"report",reason:"answer",details:"Please check the answer." };
  assert.equal((await send(report,actors[0],{ Cookie:"" })).status,401);
  assert.equal((await send(report,actors[0],{ Origin:"https://other.example" })).status,403);
  assert.equal((await send(report,actors[1],{ "X-Progress-Owner":`account:${actors[0].id}` })).status,409);
  assert.equal((await send({ ...report,stepId:"invented" })).status,422);
  assert.equal((await send({ ...report,details:"a".repeat(1001) })).status,422);
  assert.equal((await send(report)).status,200);
  assert.equal((await send(report)).status,200);
  assert.equal(store.questionFeedback.reports(actors[0].id).length,1);
  assert.equal(store.questionFeedback.reports(actors[1].id).length,0);
  assert.equal((await send({ ...key,type:"rating",rating:"hard" })).status,200);
  assert.equal((await send()).body.ratings[0].rating,"hard");
  assert.deepEqual((await send(null,actors[1])).body.ratings,[]);
  assert.equal((await send({ ...key,type:"rating",rating:"easy" })).status,200);
  assert.equal((await send()).body.ratings.length,1);
  assert.equal((await send()).body.ratings[0].rating,"easy");
  const hidden = { ...key,type:"hide" };
  assert.equal((await send(hidden,actors[0],{ Cookie:"" })).status,401);
  assert.equal((await send(hidden,actors[0],{ Origin:"https://other.example" })).status,403);
  assert.equal((await send(hidden,actors[1],{ "X-Progress-Owner":`account:${actors[0].id}` })).status,409);
  assert.equal((await send({ ...hidden,stepId:"invented" })).status,422);
  assert.equal((await send(hidden)).status,200);
  assert.equal((await send(hidden)).status,200);
  assert.deepEqual((await send()).body.hiddenQuestions,[{ subjectId:key.subjectId,stepId:key.stepId }]);
  assert.deepEqual((await send(null,actors[1])).body.hiddenQuestions,[]);
  assert.deepEqual(store.progress.read(actors[0].id),[]);
  assert.equal(store.progress.readResources(actors[0].id).hearts,10);
  assert.equal(store.questionFeedback.reports(actors[0].id).length,1);
  store.close();
  store = createAccountStore({ databasePath });
  assert.deepEqual(store.questionFeedback.hidden(actors[0].id).map(row => ({ ...row })),[{ subjectId:key.subjectId,stepId:key.stepId }]);
  assert.equal(store.questionFeedback.ratings(actors[0].id)[0].rating,"easy");
});

test("a rating survives Continue, while queued feedback cannot move to a different learner",async () => {
  let owner = "account:1";
  const requests = [];
  let release;
  const pending = new Promise(resolve => { release = resolve; });
  const feedback = createQuestionFeedback({ service:{ getLearnerProgressOwner:() => owner },apiBase:"http://app.example/api",
    fetchImpl:async (_url,options) => {
      requests.push(options);
      await pending;
      return new Response(JSON.stringify({ status:"saved" }),{ status:200,headers:{ "Content-Type":"application/json" } });
    },
  });
  const key = { subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"question" };
  const step = new AbortController();
  const saving = feedback.saveRating(key,"easy",{ signal:step.signal });
  await Promise.resolve(); step.abort(); release();
  assert.equal((await saving).status,"saved");
  assert.equal(feedback.getRating(key),"easy");
  const first = feedback.saveRating(key,"hard");
  const queued = feedback.saveRating(key,"medium");
  owner = "account:2";
  await Promise.all([first,queued]);
  assert.equal(feedback.getRating(key),null);
  assert.equal(requests.length,1);
});

test("personal hiding survives reload and follows the question across placements and mathematics aliases",async () => {
  const saved = new Map();
  const storage = { getItem:key => saved.get(key),setItem:(key,value) => saved.set(key,value) };
  let owner = "account:1";
  const service = { getLearnerProgressOwner:() => owner };
  let feedback = createQuestionFeedback({ service,storage });
  const key = { subjectId:"mathematics",lessonId:"lesson-one",partId:"part-one",stepId:"question-one" };
  assert.equal(feedback.isHidden(key),false);
  assert.equal((await feedback.hide(key)).status,"saved");
  feedback = createQuestionFeedback({ service,storage });
  assert.equal(feedback.isHidden({ ...key,subjectId:"mathematics-2",lessonId:"lesson-two",partId:"part-two" }),true);
  assert.equal(feedback.isHidden({ ...key,subjectId:"physics" }),false);
  owner = "account:2";
  assert.equal(feedback.isHidden(key),false);
  owner = "guest";
  assert.equal((await feedback.hide(key)).status,"aborted");
});

test("confirmed hiding survives navigation and is awaited before loading the next lesson",async () => {
  let release;
  const pending = new Promise(resolve => { release = resolve; });
  const requests = [];
  const key = { subjectId:"ict",lessonId:"lesson",partId:"part",stepId:"question" };
  const feedback = createQuestionFeedback({ service:{ getLearnerProgressOwner:() => "account:1" },apiBase:"http://app.example/api",
    fetchImpl:async (_url,options) => {
      requests.push(options);
      if (options.method === "POST") {
        await pending;
        return Response.json({ status:"saved" });
      }
      return Response.json({ ratings:[],hiddenQuestions:[{ subjectId:"physics",stepId:"other-question" }] });
    },
  });
  const controller = new AbortController();
  const saving = feedback.hide(key,{ signal:controller.signal });
  const ready = feedback.ready();
  await Promise.resolve();
  controller.abort();
  assert.equal(requests.length,1);
  release();
  assert.equal((await saving).status,"saved");
  await ready;
  assert.equal(requests.length,2);
  assert.deepEqual(JSON.parse(requests[0].body),{ ...key,type:"hide" });
  assert.equal(feedback.isHidden(key),true);
  assert.equal(feedback.isHidden({ subjectId:"physics",stepId:"other-question" }),true);
});

test("failed personal hiding leaves the question visible",async () => {
  const key = { subjectId:"ict",lessonId:"lesson",partId:"part",stepId:"question" };
  const service = { getLearnerProgressOwner:() => "account:1" };
  const remote = createQuestionFeedback({ service,apiBase:"http://app.example/api",fetchImpl:async () => Response.json({}, { status:503 }) });
  assert.equal((await remote.hide(key)).status,"unavailable");
  assert.equal(remote.isHidden(key),false);
  const local = createQuestionFeedback({ service,storage:{ setItem() { throw new Error("Quota exceeded"); } } });
  assert.equal((await local.hide(key)).status,"unavailable");
  assert.equal(local.isHidden(key),false);
});

test("navigation reuses recent preferences without bypassing pending writes or account ownership", async t => {
  let now = 100000, owner = "account:1", reads = 0, release;
  t.mock.method(Date, "now", () => now);
  const pending = new Promise(resolve => { release = resolve; });
  const feedback = createQuestionFeedback({ service:{ getLearnerProgressOwner:() => owner },apiBase:"http://app.example/api",
    fetchImpl:async (_url,options) => {
      if (options.method === "POST") { await pending; return Response.json({status:"saved"}); }
      reads += 1;
      return Response.json({ratings:[],hiddenQuestions:[]});
    },
  });
  await feedback.ready({maxAge:30000});
  await feedback.ready({maxAge:30000});
  assert.equal(reads,1, "nearby navigation avoids a redundant network round trip");
  const key = {subjectId:"ict",lessonId:"lesson",partId:"part",stepId:"question"};
  const saving = feedback.hide(key);
  let settled = false;
  const ready = feedback.ready({maxAge:30000}).then(() => { settled = true; });
  await Promise.resolve(); await Promise.resolve();
  assert.equal(settled,false, "pending hiding still settles before lesson content is chosen");
  release(); await saving; await ready;
  assert.equal(feedback.isHidden(key),true);
  assert.equal(reads,1);
  now += 30001;
  await feedback.ready({maxAge:30000});
  assert.equal(reads,2, "expired preferences are refreshed");
  owner = "account:2";
  await feedback.ready({maxAge:30000});
  assert.equal(reads,3, "another learner cannot reuse the previous learner's read");
  assert.equal(feedback.isHidden(key),false);
});
