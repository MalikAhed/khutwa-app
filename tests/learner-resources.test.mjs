import assert from "node:assert/strict";
import test from "node:test";
import { HEART_REFILL_MS, SUPER_TRIAL_MS, refillResources, resourceSnapshot, spendHeart } from "../src/domain/learner-resources.js";
import { createLearnerResources } from "../src/services/learner-resources.js";
import { questionRewardKey } from "../src/domain/question-rewards.js";

test("a purchase on a removed duplicate remains unlocked without another charge", async () => {
  const owner = "demo:retired-question";
  const canonical = { subjectId:"arabic", stepId:"arabic-p157-mcq04" };
  const saved = { hearts:10, gems:150, refillAt:1_000_000,
    explanationUnlocks:[JSON.stringify(["arabic", "arabic-p157-mcq04-occurrence2"])] };
  const storage = { getItem:() => JSON.stringify(saved), setItem:assert.fail };
  const resources = createLearnerResources({ storage, now:() => 1_000_000, getAccountType:() => "free" });
  assert.equal(resources.hasExplanation(owner, canonical), true);
  const explanation = await resources.unlockExplanation(owner, canonical,
    { step:{ type:"mcq", content:{ correctFeedback:"Retained explanation" } } });
  assert.equal(explanation.markdown, "Retained explanation");
  assert.equal(resources.get(owner).gems, 150);
  assert.deepEqual(resources.get(owner).explanationUnlocks, [questionRewardKey(canonical)]);
  assert.equal(saved.explanationUnlocks[0], JSON.stringify(["arabic", "arabic-p157-mcq04-occurrence2"]));
});

test("fixture purchases follow both cross-part ICT aliases without rewriting stored receipts", async () => {
  const moves = [
    ["smartphone-operating-systems","ios-files","exam-p09-q1-7","android-features","ict-unit2-p069-mobile-q46"],
    ["my-mobile-app","calculator-events","classified-u2-p72-mcq-3","app-inventor-blocks","ict-unit2-p072-app-mcq-q03"],
  ];
  const saved = { hearts:10, gems:100, refillAt:1_000_000,
    explanationUnlocks:moves.map(([, , oldId])=>JSON.stringify(["ict",oldId])) };
  const original = structuredClone(saved);
  const resources = createLearnerResources({storage:{getItem:()=>JSON.stringify(saved),setItem:assert.fail},now:()=>1_000_000,getAccountType:()=>"free"});
  for (const [lessonId,from,oldId,to,stepId] of moves) {
    const old = {subjectId:"ict",lessonId,partId:from,stepId:oldId};
    const canonical = {...old,partId:to,stepId};
    assert.equal(resources.hasExplanation("demo:moved",old),true);
    assert.equal(resources.hasExplanation("demo:moved",canonical),true);
    assert.equal((await resources.unlockExplanation("demo:moved",canonical,
      {step:{type:"mcq",content:{correctFeedback:"Retained explanation"}}})).markdown,"Retained explanation");
  }
  assert.equal(resources.get("demo:moved").gems,100);
  assert.deepEqual(saved,original);
});

test("ten hearts refill individually over two hours, retaining partial intervals", () => {
  const start = 1_000_000;
  let balance = refillResources(null, start);
  assert.equal(balance.hearts, 10);
  assert.equal(balance.gems, 200);
  for (let i = 0; i < 10; i++) balance = spendHeart(balance, start);
  assert.equal(spendHeart(balance, start), null);
  assert.equal(refillResources(balance, start + HEART_REFILL_MS - 1).hearts, 0);
  balance = spendHeart(balance, start + HEART_REFILL_MS * 1.5);
  assert.equal(balance.hearts, 0);
  assert.equal(refillResources(balance, start + HEART_REFILL_MS * 2).hearts, 1);
  assert.equal(refillResources(balance, start + 2 * 60 * 60 * 1000).hearts, 9);
  assert.equal(refillResources(balance, start + 3 * 60 * 60 * 1000).hearts, 10);
  const spent = spendHeart(refillResources(balance, start + HEART_REFILL_MS * 20), start + HEART_REFILL_MS * 20);
  assert.equal(resourceSnapshot(spent, false, start + HEART_REFILL_MS * 20).nextHeartAt, start + HEART_REFILL_MS * 21);
});

test("fixture balances survive reopening, stay isolated and regenerate while closed", () => {
  const values = new Map();
  const storage = { getItem:key => values.get(key), setItem:(key,value) => values.set(key,value) };
  let time = 1_000_000;
  let type = "free";
  const create = () => createLearnerResources({ storage, now:() => time, getAccountType:() => type });
  const resources = create();
  resources.spend("demo:a", "answer-1");
  assert.equal(create().get("demo:a").hearts, 9);
  assert.equal(resources.get("demo:b").hearts, 10);
  time += HEART_REFILL_MS;
  assert.equal(create().get("demo:a").hearts, 10);
  type = "subscribed";
  for (let i = 0; i < 20; i++) resources.spend("demo:a", `pro-${i}`);
  assert.equal(resources.get("demo:a").unlimited, true);
  type = "free";
  assert.equal(resources.get("demo:a").hearts, 10);
});

test("server receipts acknowledge once and preserve other pending heart reservations", () => {
  const resources = createLearnerResources({ now:() => 1_000_000, getAccountType:() => "free" });
  resources.spend("account:1", "answer-1");
  resources.spend("account:1", "answer-2");
  resources.confirm("account:1", { hearts:10, gems:200, refillAt:1_000_000 });
  assert.equal(resources.get("account:1").hearts, 8);
  resources.confirm("account:1", { hearts:9, gems:200, refillAt:1_000_000 }, "answer-1");
  assert.equal(resources.get("account:1").hearts, 8);
  resources.confirm("account:1", { hearts:8, gems:200, refillAt:1_000_000 }, "answer-2");
  resources.confirm("account:1", { hearts:8, gems:200, refillAt:1_000_000 }, "answer-2");
  assert.equal(resources.get("account:1").hearts, 8);
});

test("a free week survives reloads, expires and cannot restart or cross accounts", async () => {
  const values = new Map();
  const storage = { getItem:key => values.get(key), setItem:(key,value) => values.set(key,value) };
  let time = 1_000_000;
  const create = () => createLearnerResources({ storage, now:() => time, getAccountType:() => "free" });
  const resources = create();
  for (let n=0;n<10;n++) resources.spend("demo:trial",`answer-${n}`);
  assert.equal(resources.get("demo:trial").hearts,0);
  const started = await resources.startTrial("demo:trial");
  assert.equal(started.trialEndsAt,time + SUPER_TRIAL_MS);
  assert.equal(started.unlimited,true);
  assert.equal(started.trialEligible,false);
  resources.spend("demo:trial","unlimited-answer");
  assert.equal(resources.get("demo:trial").hearts,0);
  assert.equal(create().get("demo:trial").unlimited,true);
  assert.equal(create().get("demo:other").unlimited,false);
  assert.equal(create().get("demo:other").trialEligible,true);
  time = started.trialEndsAt;
  assert.equal(create().get("demo:trial").unlimited,false);
  assert.equal(create().get("demo:trial").trialEligible,false);
  assert.equal((await create().startTrial("demo:trial")).trialEndsAt,started.trialEndsAt);
  assert.equal(create().get("demo:trial").hearts,10);
});

test("trial requests require a confirmed owner and keep an in-flight old receipt from erasing activation", async () => {
  const time = 1_000_000;
  const receipt = { hearts:0,gems:200,refillAt:time,trialEndsAt:time + SUPER_TRIAL_MS };
  const resources = createLearnerResources({ getAccountType:() => "free", now:() => time, apiBase:"/api/progress",
    fetchImpl:async (_url,options) => {
      assert.equal(options.headers["X-Progress-Owner"],"account:1");
      assert.deepEqual(JSON.parse(options.body),{type:"super-trial"});
      return { ok:true,json:async () => ({accountId:"1",resources:receipt}) };
    } });
  await resources.startTrial("account:1");
  resources.confirm("account:1",{hearts:0,gems:200,refillAt:time});
  assert.equal(resources.get("account:1").unlimited,true);
  const wrongOwner = createLearnerResources({ getAccountType:() => "free", now:() => time, apiBase:"/api/progress",
    fetchImpl:async () => ({ok:true,json:async () => ({accountId:"2",resources:receipt})}) });
  await assert.rejects(wrongOwner.startTrial("account:1"));
  assert.equal(wrongOwner.get("account:1").unlimited,false);
  const aborted = new AbortController();aborted.abort();
  await assert.rejects(resources.startTrial("account:1",{signal:aborted.signal}));
});

test("explanation receipts update balances without letting older progress receipts refund purchases", async () => {
  const key = {subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"exam-p09-q1-1"};
  const unlock = JSON.stringify([key.subjectId,key.stepId]);
  const time = 1_000_000;
  const receipt = {hearts:10,gems:150,refillAt:time,explanationUnlocks:[unlock]};
  const resources = createLearnerResources({getAccountType:() => "free",now:() => time,apiBase:"/api/progress",
    fetchImpl:async () => ({ok:true,json:async () => ({accountId:"1",resources:receipt,explanation:{markdown:"شرح السؤال"}})})});
  assert.equal((await resources.unlockExplanation("account:1",key)).markdown,"شرح السؤال");
  assert.equal(resources.hasExplanation("account:1",key),true);
  resources.confirm("account:1",{hearts:9,gems:200,refillAt:time,explanationUnlocks:[]});
  assert.equal(resources.get("account:1").gems,150);
  assert.equal(resources.get("account:1").hearts,9);
  assert.equal(resources.hasExplanation("account:1",key),true);
  assert.equal(resources.hasExplanation("account:2",key),false);
});

test("fixture explanation purchases persist atomically and reopen without another charge", async () => {
  const values = new Map();
  const storage = {getItem:key => values.get(key),setItem:(key,value) => values.set(key,value)};
  const key = {subjectId:"biology",lessonId:"lesson",partId:"part",stepId:"question"};
  const step = {type:"mcq",content:{correctFeedback:"نشرح السبب المعتمد في السؤال."}};
  const create = () => createLearnerResources({storage,getAccountType:() => "free"});
  const resources = create();
  await Promise.all([resources.unlockExplanation("demo:a",key,{step}),resources.unlockExplanation("demo:a",key,{step})]);
  assert.equal(resources.get("demo:a").gems,150);
  const reopened = create();
  assert.equal(reopened.hasExplanation("demo:a",key),true);
  await reopened.unlockExplanation("demo:a",key,{step});
  assert.equal(reopened.get("demo:a").gems,150);
  assert.equal(reopened.get("demo:b").gems,200);
  const broken = createLearnerResources({getAccountType:() => "free",storage:{getItem:() => null,setItem:() => {throw new Error("Full storage");}}});
  await assert.rejects(broken.unlockExplanation("demo:a",key,{step}),/Full storage/);
  assert.equal(broken.get("demo:a").gems,200);
  assert.equal(broken.hasExplanation("demo:a",key),false);
});


test("downloaded HTTP explanations open offline for confirmed purchases and active Super only", async () => {
  const values = new Map();
  const storage = {getItem:key=>values.get(key),setItem:(key,value)=>values.set(key,value)};
  const key = {subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"exam-p09-q1-1"};
  const step = {type:"mcq",content:{correctFeedback:"شرح محفوظ مع الدرس"}};
  let time=1_000_000, requests=0, type="free";
  const create=()=>createLearnerResources({storage,now:()=>time,getAccountType:()=>type,apiBase:"/api/progress",
    fetchImpl:async()=>{requests++;throw new TypeError("Offline");}});
  const resources=create();
  resources.confirm("account:purchased",{hearts:10,gems:150,refillAt:time,explanationUnlocks:[questionRewardKey(key)]});
  resources.confirm("account:trial",{hearts:10,gems:200,refillAt:time,trialEndsAt:time+SUPER_TRIAL_MS});
  const saved=new Map(values);
  const reopened=create();
  assert.equal((await reopened.unlockExplanation("account:purchased",key,{step})).markdown,step.content.correctFeedback);
  assert.equal((await reopened.unlockExplanation("account:trial",key,{step})).markdown,step.content.correctFeedback);
  type="subscribed";
  assert.equal((await reopened.unlockExplanation("account:subscribed",key,{step})).markdown,step.content.correctFeedback);
  type="free";
  assert.equal(requests,0,"reading installed explanations must not contact the server");
  assert.deepEqual(values,saved,"offline reading neither spends gems nor creates permanent purchases");
  assert.equal(reopened.hasExplanation("account:trial",key),false);
  await assert.rejects(reopened.unlockExplanation("account:other",key,{step}),{code:"connection-required"});
  time+=SUPER_TRIAL_MS;
  await assert.rejects(reopened.unlockExplanation("account:trial",key,{step}),{code:"connection-required"});
  assert.equal(reopened.get("account:trial").gems,200);
  assert.equal((await reopened.unlockExplanation("account:purchased",key,{step})).markdown,step.content.correctFeedback);
  const aborted=new AbortController();aborted.abort();
  await assert.rejects(reopened.unlockExplanation("account:purchased",key,{step,signal:aborted.signal}),{name:"AbortError"});
});
