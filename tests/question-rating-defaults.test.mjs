import assert from "node:assert/strict";
import test from "node:test";
import { createSubjectProgressStore } from "../src/services/subject-progress-store.js";
import { createQuestionFeedback } from "../src/services/question-feedback.js";
import { createAccountStore } from "../src/server/account-store.mjs";
import { getRatedSubjectQuestions, filterRatedRoadmap } from "../src/domain/question-ratings.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { getPartQuestionIds } from "../src/domain/question-rewards.js";

test("automatic answer ratings persist, move difficulty and yield permanently to the learner's choice",async () => {
  const values = new Map();
  const storage = { getItem:key => values.get(key),setItem:(key,value) => values.set(key,value) };
  let owner = "account:one";
  const service = {getLearnerProgressOwner:() => owner};
  let feedback = createQuestionFeedback({service,storage});
  const key = {subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:getPartQuestionIds({subjectId:"ict",lessonId:"database-management",partId:"access-basics"})[0]};
  await feedback.saveRating(key,"hard",{automatic:true});
  assert.equal(getRatedSubjectQuestions("ict",feedback)[0].rating,"hard");
  await feedback.saveRating(key,"easy",{automatic:true});
  assert.equal(getRatedSubjectQuestions("ict",feedback)[0].rating,"easy");
  // A wrong answer may still be explicitly rated easy, including a choice
  // racing an automatic write from the same answer.
  await Promise.all([feedback.saveRating(key,"hard",{automatic:true}),feedback.saveRating(key,"easy")]);
  feedback = createQuestionFeedback({service,storage});
  await feedback.saveRating(key,"hard",{automatic:true});
  assert.equal(feedback.getRating(key),"easy");
  await feedback.saveRating(key,"medium");
  assert.equal(getRatedSubjectQuestions("ict",feedback)[0].rating,"medium");
  const roadmap = filterRatedRoadmap(getSubjectRoadmap("ict"),getRatedSubjectQuestions("ict",feedback),"medium");
  assert.equal(roadmap.units.flatMap(unit => unit.lessons).length,1);
  assert.deepEqual(roadmap.units[0].lessons[0].parts[0].questionIds,[key.stepId]);
  assert.equal(filterRatedRoadmap(getSubjectRoadmap("ict"),getRatedSubjectQuestions("ict",feedback),"hard").units.length,0);
  await feedback.hide(key);
  assert.deepEqual(getRatedSubjectQuestions("ict",feedback),[]);
  owner = "account:two";
  assert.equal(feedback.getRating(key),null);
});

test("the server protects explicit ratings from automatic writes across sessions and question aliases",async () => {
  const store = createAccountStore({databasePath:":memory:"});
  try {
    const {account} = await store.createAccount({username:"auto-rating",curriculum:"gaza",path:"scientific",password:"Password123"});
    const key = {subjectId:"mathematics",lessonId:"lesson",partId:"part",stepId:"question",type:"rating"};
    const save = (rating,automatic = false,subjectId = key.subjectId) => store.questionFeedback.save(account.id,{...key,subjectId,rating,automatic});
    save("hard",true);
    assert.equal(store.questionFeedback.ratings(account.id)[0].automatic,true);
    save("easy");
    save("hard",true,"mathematics-2");
    assert.deepEqual(store.questionFeedback.ratings(account.id).map(item => item.rating),["easy"]);
    save("medium",false,"mathematics-2");
    assert.ok(store.questionFeedback.ratings(account.id).every(item => item.rating === "medium" && !item.automatic));
  } finally { store.close(); }
});


test("late rating refreshes cannot overwrite newer counts or a manual choice", async () => {
  const pending = [];
  const key = {subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"exam-p09-q1-1"};
  const feedback = createQuestionFeedback({service:{getLearnerProgressOwner:()=>"account:one"},apiBase:"/api",
    fetchImpl:async (_url,options) => options.method === "POST"
      ? Response.json({rating:{rating:JSON.parse(options.body).rating,automatic:false}})
      : new Promise(resolve=>pending.push(resolve))});
  const first = feedback.ready();
  await new Promise(resolve=>setImmediate(resolve));
  const second = feedback.ready();
  await new Promise(resolve=>setImmediate(resolve));
  pending[1](Response.json({ratings:[{...key,rating:"hard",automatic:true}]}));
  await second;
  pending[0](Response.json({ratings:[{...key,rating:"easy",automatic:true}]}));
  await first;
  assert.equal(feedback.getRating(key),"hard");
  const stale = feedback.ready();
  await new Promise(resolve=>setImmediate(resolve));
  await feedback.saveRating(key,"medium");
  pending[2](Response.json({ratings:[{...key,rating:"hard",automatic:true}]}));
  await stale;
  assert.equal(feedback.getRating(key),"medium");
});


test("Pages ratings recover missing defaults from local progress without inheriting review completion", async () => {
  const saved = new Map();
  const storage = {getItem:key=>saved.get(key),setItem:(key,value)=>saved.set(key,value)};
  const ownerId = "account:pages";
  const key = {ownerId,subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"exam-p09-q1-1"};
  let progressStore = createSubjectProgressStore({storage});
  await progressStore.ready(ownerId);
  let feedback = createQuestionFeedback({service:{getLearnerProgressOwner:()=>ownerId},storage,progressStore});
  assert.equal(feedback.getRating(key),null);
  await progressStore.recordAnswer({...key,correct:false});
  assert.equal(feedback.getRating(key),"hard");
  assert.equal(getRatedSubjectQuestions("ict",feedback).filter(item=>item.rating==="hard").length,1);
  assert.deepEqual(progressStore.getRatedProgress(key,"hard").completedStepIds,[]);
  progressStore = createSubjectProgressStore({storage});
  await progressStore.ready(ownerId);
  feedback = createQuestionFeedback({service:{getLearnerProgressOwner:()=>ownerId},storage,progressStore});
  assert.equal(feedback.getRating(key),"hard");
  await feedback.saveRating(key,"easy");
  await progressStore.recordAnswer({...key,correct:false});
  assert.equal(feedback.getRating(key),"easy","explicit learner ratings win over answer defaults");
});
