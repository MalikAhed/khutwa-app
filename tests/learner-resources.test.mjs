import assert from "node:assert/strict";
import test from "node:test";
import { HEART_REFILL_MS, SUPER_TRIAL_MS, nextHeartReset, heartDay, refillResources, resourceSnapshot, spendHeart } from "../src/domain/learner-resources.js";
import { createLearnerResources } from "../src/services/learner-resources.js";
import { questionRewardKey } from "../src/domain/question-rewards.js";

test('versioned gem rewards can increase the balance and stale receipts cannot undo rewards or refund purchases',()=>{
  const resources=createLearnerResources({getAccountType:()=>"free",apiBase:'/api/progress',now:()=>1_000_000});
  resources.confirm('account:1',{hearts:7,gems:100,refillAt:1_000_000,gemRevision:0});
  resources.confirm('account:1',{hearts:0,gems:350,refillAt:1_000_000,gemRevision:1});
  assert.equal(resources.get('account:1').gems,350);
  resources.confirm('account:1',{hearts:0,gems:300,refillAt:1_000_000,gemRevision:2});
  resources.confirm('account:1',{hearts:0,gems:300,refillAt:1_000_000,gemRevision:2,correctTowardGems:3});
  resources.confirm('account:1',{hearts:0,gems:350,refillAt:1_000_000,gemRevision:1});
  resources.confirm('account:1',{hearts:6,gems:100,refillAt:1_000_000,gemRevision:0});
  assert.equal(resources.get('account:1').gems,300);
  assert.equal(resources.get('account:1').correctTowardGems,3);
});

test("a purchase on a removed duplicate remains unlocked without another charge", async () => {
  const owner = "demo:retired-question";
  const canonical = { subjectId:"arabic", stepId:"arabic-p157-mcq04" };
  const saved = { hearts:7, gems:150, refillAt:1_000_000,
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
  const saved = { hearts:7, gems:100, refillAt:1_000_000,
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

test("all seven hearts reset together at Palestine midnight, including DST boundaries", () => {
  for (const start of [Date.parse('2026-11-05T12:00:00Z'), Date.parse('2026-03-27T12:00:00Z'), Date.parse('2026-10-23T12:00:00Z')]) {
    let balance = refillResources(null, start);
    for (let i=0;i<7;i++) balance=spendHeart(balance,start);
    const midnight=nextHeartReset(start);
    assert.equal(heartDay(midnight-1),heartDay(start));
    assert.notEqual(heartDay(midnight),heartDay(start));
    assert.equal(refillResources(balance,midnight-1).hearts,0);
    assert.equal(refillResources(balance,midnight).hearts,7);
    assert.equal(refillResources(balance,start-86400000).hearts,0,'clock rollback never refills');
    assert.equal(refillResources(balance,midnight+86400000,{allowRefill:false}).hearts,0,'offline clients cannot grant another day');
    assert.equal(resourceSnapshot(balance,false,start).nextHeartAt,midnight);
  }
});

test("fixture balances survive reopening, stay isolated and regenerate while closed", () => {
  const values = new Map();
  const storage = { getItem:key => values.get(key), setItem:(key,value) => values.set(key,value) };
  let time = 1_000_000;
  let type = "free";
  const create = () => createLearnerResources({ storage, now:() => time, getAccountType:() => type });
  const resources = create();
  resources.spend("demo:a", "answer-1");
  assert.equal(create().get("demo:a").hearts, 6);
  assert.equal(resources.get("demo:b").hearts, 7);
  time += HEART_REFILL_MS;
  assert.equal(create().get("demo:a").hearts, 7);
  type = "subscribed";
  for (let i = 0; i < 20; i++) resources.spend("demo:a", `pro-${i}`);
  assert.equal(resources.get("demo:a").unlimited, true);
  type = "free";
  assert.equal(resources.get("demo:a").hearts, 7);
});

test("server receipts acknowledge once and preserve other pending heart reservations", () => {
  const resources = createLearnerResources({ now:() => 1_000_000, getAccountType:() => "free" });
  resources.spend("account:1", "answer-1");
  resources.spend("account:1", "answer-2");
  resources.confirm("account:1", { hearts:7, gems:200, refillAt:1_000_000 });
  assert.equal(resources.get("account:1").hearts, 5);
  resources.confirm("account:1", { hearts:6, gems:200, refillAt:1_000_000 }, "answer-1");
  assert.equal(resources.get("account:1").hearts, 5);
  resources.confirm("account:1", { hearts:5, gems:200, refillAt:1_000_000 }, "answer-2");
  resources.confirm("account:1", { hearts:5, gems:200, refillAt:1_000_000 }, "answer-2");
  assert.equal(resources.get("account:1").hearts, 5);
});

test("retired trials never grant unlimited hearts, including saved active trials", async () => {
  const time=Date.parse('2026-11-05T12:00:00Z');
  const saved={hearts:0,gems:200,refillAt:time,trialEndsAt:time+SUPER_TRIAL_MS};
  const resources=createLearnerResources({storage:{getItem:()=>JSON.stringify(saved)},getAccountType:()=>"free",now:()=>time});
  assert.equal(resources.get("account:1").unlimited,false);
  assert.equal(resources.get("account:1").trialEligible,false);
  assert.equal(resources.get("account:1").trialEndsAt,saved.trialEndsAt,'historical data is retained');
  await assert.rejects(resources.startTrial("account:1"),/no longer available/);
});

test("HTTP balances never refill from device time or reopening and new answers need internet", async () => {
  let time=Date.parse('2026-11-05T12:00:00Z'), online=true;
  const values=new Map();
  const storage={getItem:key=>values.get(key),setItem:(key,value)=>values.set(key,value)};
  const create=()=>createLearnerResources({storage,getAccountType:()=>"free",now:()=>time,apiBase:"/api/progress",
    fetchImpl:async()=>{if(!online)throw new Error('Offline');return {ok:true,json:async()=>({accountId:'1',resources:{hearts:0,gems:200,refillAt:Date.parse('2026-11-05T12:00:00Z')}})};}});
  const resources=create();
  resources.confirm('account:1',{hearts:0,gems:200,refillAt:time});
  time+=10*86400000;
  assert.equal(create().get('account:1').hearts,0);
  time-=20*86400000;
  assert.equal(create().get('account:1').hearts,0);
  assert.match(await resources.checkAnswerAccess('account:1'),/نفدت/);
  online=false;
  assert.match(await resources.checkAnswerAccess('account:1'),/اتصل بالإنترنت/);
});

test('a reachable API rejection is not reported as an internet outage and never permits an answer',async()=>{
  for(const response of [
    Response.json({error:'Sign in first.'},{status:401}),
    Response.json({error:'Unsupported policy.'},{status:422}),
    Response.json({accountId:'different',resources:{hearts:7}}),
    new Response('<html>Upstream error</html>',{status:502}),
  ]) {
    const resources=createLearnerResources({getAccountType:()=> 'free',apiBase:'/api/progress',fetchImpl:async()=>response});
    const blocked=await resources.checkAnswerAccess('account:1');
    assert.equal(typeof blocked,'string');
    assert.doesNotMatch(blocked,/اتصل بالإنترنت/);
  }
  const resources=createLearnerResources({getAccountType:()=> 'free',apiBase:'/api/progress',fetchImpl:async()=>Response.json({error:'Invalid progress update.'},{status:422})});
  await resources.navigate('account:1',{subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1'},{kind:'continue'});
});

test('normal continuation stays free and jumping requires Super without touching retired counters',async()=>{
  const saved={hearts:0,gems:0,refillAt:Date.now(),navigationRemaining:0,navigationRefillAt:Date.now(),navigationCursors:{'ict:database-management':'old-question'}};
  for(const accountType of ['free','subscribed']) {
    const resources=createLearnerResources({storage:{getItem:()=>JSON.stringify(saved),setItem:assert.fail},getAccountType:()=>accountType,apiBase:'/api/progress',fetchImpl:assert.fail});
    for(let n=0;n<20;n++)await resources.navigate('account:1',{subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:`question-${n}`},{kind:'continue'});
    if(accountType === 'free') await assert.rejects(resources.navigate('account:1',{}),{code:'super-required'});
    else await resources.navigate('account:1',{});
    await resources.navigate('account:1',{}, {kind:'jump',solved:true});
    assert.equal(resources.getNavigationCursor('account:1',{subjectId:'ict',lessonId:'database-management'}),undefined);
    assert.equal(resources.get('account:1').navigationUnlimited,accountType==='subscribed');
    assert.equal(resources.get('account:1').hearts,0);
    assert.equal(resources.get('account:1').unlimited,accountType==='subscribed','free hearts and explanations stay limited');
  }
});

test("explanation receipts update balances without letting older progress receipts refund purchases", async () => {
  const key = {subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"exam-p09-q1-1"};
  const unlock = JSON.stringify([key.subjectId,key.stepId]);
  const time = 1_000_000;
  const receipt = {hearts:7,gems:150,refillAt:time,explanationUnlocks:[unlock]};
  const resources = createLearnerResources({getAccountType:() => "free",now:() => time,apiBase:"/api/progress",
    fetchImpl:async () => ({ok:true,json:async () => ({accountId:"1",resources:receipt,explanation:{markdown:"شرح السؤال"}})})});
  assert.equal((await resources.unlockExplanation("account:1",key)).markdown,"شرح السؤال");
  assert.equal(resources.hasExplanation("account:1",key),true);
  resources.confirm("account:1",{hearts:6,gems:200,refillAt:time,explanationUnlocks:[]});
  assert.equal(resources.get("account:1").gems,150);
  assert.equal(resources.get("account:1").hearts,6);
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


test("downloaded paid-lesson explanations open offline for confirmed purchases and active Super only", async () => {
  const values = new Map();
  const storage = {getItem:key=>values.get(key),setItem:(key,value)=>values.set(key,value)};
  const key = {subjectId:"ict",lessonId:"smartphone-operating-systems",partId:"android-features",stepId:"exam-p09-q1-9"};
  const step = {type:"mcq",content:{correctFeedback:"شرح محفوظ مع الدرس"}};
  let time=1_000_000, requests=0, type="free";
  const create=()=>createLearnerResources({storage,now:()=>time,getAccountType:()=>type,apiBase:"/api/progress",
    fetchImpl:async()=>{requests++;throw new TypeError("Offline");}});
  const resources=create();
  resources.confirm("account:purchased",{hearts:7,gems:150,refillAt:time,explanationUnlocks:[questionRewardKey(key)]});
  resources.confirm("account:trial",{hearts:7,gems:200,refillAt:time,trialEndsAt:time+SUPER_TRIAL_MS});
  const saved=new Map(values);
  const reopened=create();
  assert.equal((await reopened.unlockExplanation("account:purchased",key,{step})).markdown,step.content.correctFeedback);
  await assert.rejects(reopened.unlockExplanation("account:trial",key,{step}),{code:"connection-required"});
  type="subscribed";
  assert.equal((await reopened.unlockExplanation("account:subscribed",key,{step})).markdown,step.content.correctFeedback);
  type="free";
  assert.equal(requests,1,"retired trials cannot grant offline explanations; purchased and subscribed explanations stay offline");
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


test('lowering legacy hearts preserves gems, purchased solutions and reward versions',()=>{
  const saved={hearts:10,gems:631,refillAt:1_000_000,gemRevision:12,explanationUnlocks:['["ict","exam-p09-q1-1"]']};
  const balance=refillResources(saved,1_000_000);
  assert.equal(balance.hearts,7); assert.equal(balance.gems,631); assert.equal(balance.gemRevision,12);
  assert.deepEqual(balance.explanationUnlocks,saved.explanationUnlocks);
});

test('starter lesson jumps are free even with no hearts, including persisted Math 2 identities',async()=>{
  const resources=createLearnerResources({getAccountType:()=> 'free',apiBase:'/api/progress',fetchImpl:assert.fail});
  resources.confirm('account:1',{hearts:0,gems:0,refillAt:Date.now(),gemRevision:0});
  for(const key of [{subjectId:'ict',lessonId:'database-management'},{subjectId:'mathematics',lessonId:'average-change'},{subjectId:'mathematics',lessonId:'indefinite-integral'},{subjectId:'mathematics',lessonId:'indefinite-integral-rules'}])
    await resources.navigate('account:1',key,{kind:'jump',solved:false});
});


test('starter explanations are included for free and partial subscribers without gems or purchase requests',async()=>{
 for(const accountType of ['free','subscribed']) {
  let requests=0;
  const resources=createLearnerResources({getAccountType:()=>accountType,hasSuperAccess:()=>false,apiBase:'/api/progress',fetchImpl:async()=>{requests++;throw Error('offline');}});
  const key={subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1'};
  resources.confirm('account:starter',{hearts:0,gems:0,refillAt:Date.now()});
  const explanation=await resources.unlockExplanation('account:starter',key,{step:{type:'mcq',content:{correctFeedback:'Free full-trial solution'}}});
  assert.equal(explanation.markdown,'Free full-trial solution');assert.equal(requests,0);
  assert.equal(resources.get('account:starter').gems,0);assert.equal(resources.hasExplanation('account:starter',key),false);
 }
});
