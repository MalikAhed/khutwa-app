import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'node:http';
import { mkdtemp, rm } from 'node:fs/promises';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { DatabaseSync } from 'node:sqlite';
import { createHash } from 'node:crypto';
import { createAccountStore } from '../src/server/account-store.mjs';
import { createProgressApi } from '../src/server/progress-api.mjs';
import { readJsonBody } from '../src/server/http.mjs';
import { loadSubjectLessonPart } from '../src/data/lessons/subject-lesson-registry.js';
import { getQuestionXp } from '../src/domain/question-rewards.js';
import { SUPER_TRIAL_MS } from '../src/domain/learner-resources.js';
import { currentPartProgress, emptyPart, partKey } from '../src/domain/subject-progress.js';

const part={subjectId:'ict',lessonId:'database-management',partId:'access-basics'};
const lesson=await loadSubjectLessonPart(part.subjectId,part.lessonId,part.partId);
const steps=lesson.steps.map(step=>step.id);

async function fixture(t, {subscribed = false} = {}) {
  const directory=await mkdtemp(path.join(tmpdir(),'learn-progress-api-'));
  const databasePath=path.join(directory,'test.sqlite');
  const store=createAccountStore({databasePath});
  const accounts=[];
  for(const username of ['learner-a','learner-b']) {
    const {account}=await store.createAccount({username,email:username+'@example.com',curriculum:'gaza',path:'scientific',password:'Test123'});
    accounts.push({id:account.id,token:store.createSession(account.id).token});
  }
  if (subscribed) {
    const db = new DatabaseSync(databasePath);
    db.prepare("UPDATE accounts SET account_type='subscribed' WHERE id=?").run(Number(accounts[0].id));
    db.close();
  }
  const handler=createProgressApi({accountStore:store,readJsonBody});
  const server=createServer(handler);
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const url=`http://127.0.0.1:${server.address().port}/api/progress`;
  t.after(async()=>{await new Promise(resolve=>server.close(resolve));store.close();await rm(directory,{recursive:true,force:true});});
  const request=async(body,actor=accounts[0],headers={})=>{
    const response=await fetch(url,{method:body?'POST':'GET',headers:{'Content-Type':'application/json','X-Progress-Owner':`account:${actor.id}`,Cookie:`tawjihi_session=${actor.token}`,...headers},...(body?{body:JSON.stringify(body)}:{})});
    return {status:response.status,body:await response.json()};
  };
  return {request,store,accounts,databasePath};
}

test('progress requires its authenticated owner, origin and published identities; clients cannot set XP',async t=>{
  const {request,accounts}=await fixture(t);
  assert.equal((await request(null,accounts[0],{Cookie:''})).status,401);
  assert.equal((await request(null,accounts[1],{'X-Progress-Owner':`account:${accounts[0].id}`})).status,409);
  assert.equal((await request(null,accounts[0],{Origin:'https://other.example'})).status,403);
  const update={...part,id:'completion-1',type:'completion',completedStepIds:steps,isComplete:true};
  assert.equal((await request({...update,rewardXp:1000})).status,422);
  assert.equal((await request({...update,partId:'invented'})).status,422);
  assert.equal((await request({...update,completedStepIds:['invented']})).status,422);
  assert.equal((await request(update)).status,200);
  assert.deepEqual((await request(null,accounts[1])).body.records,[]);
});

test('current Access questions, mistake review and completion all save',async t=>{
  const {request}=await fixture(t, {subscribed:true});
  const key={subjectId:'ict',lessonId:'database-management',partId:'access-basics'};
  const current=await loadSubjectLessonPart(key.subjectId,key.lessonId,key.partId);
  const questions=current.steps.filter(step=>step.type==='question');
  assert.ok(questions.length >= 2, 'source MCQs support mistakes and review');
  assert.ok(questions.every(step=>/^(?:exam|past|book|classified|ict)-/.test(step.id)), 'only current source MCQs are graded');
  assert.ok(current.steps.some(step=>step.type==='activity' && /^(?:exam|past|book|classified|ict)-/.test(step.id)), 'written source work remains a self-review activity');
  for(const [index,step] of questions.entries()) {
    const response=await request({...key,id:`access-answer-${index}`,type:'answer',stepId:step.id,correct:false});
    assert.equal(response.status,200,`${step.id}: ${JSON.stringify(response.body)}`);
  }
  assert.equal((await request({...key,id:'access-review-answer',type:'answer',stepId:questions[0].id,correct:true,reviewing:true})).status,200);
  assert.equal((await request({...key,id:'access-completion',type:'completion',completedStepIds:current.steps.map(step=>step.id),isComplete:true})).status,200);
});

test('overlapping completions and retries preserve progress without awarding XP',async t=>{
  const {request,databasePath,accounts}=await fixture(t);
  const first={...part,id:'first-update',type:'completion',completedStepIds:steps.slice(0,3),isComplete:true};
  const second={...part,id:'second-update',type:'completion',completedStepIds:steps.slice(3),isComplete:true};
  const results=await Promise.all([request(first),request(second)]);
  assert.ok(results.every(result=>result.status===200));
  assert.equal((await request(second)).status,200);
  assert.equal((await request(Object.fromEntries(Object.entries(second).reverse()))).status,200, "JSON property order must not change an update identity");
  assert.equal((await request({...second,isComplete:false})).status,409);
  const record=(await request()).body.records[0][1];
  assert.equal(record.completed,true);
  assert.equal(record.rewardXp,0);
  assert.equal(record.completedStepIds.length,steps.length);
  const reopened=createAccountStore({databasePath});
  try {
    assert.equal(reopened.getAccountForSession(accounts[0].token).id,accounts[0].id);
    assert.equal(reopened.progress.read(accounts[0].id)[0][1].rewardXp,0);
  } finally {reopened.close();}
});

test('import is resumable and does not replay old reviews over newer answers',async t=>{
  const {request}=await fixture(t);
  const questionId = lesson.steps.find(step => step.type === 'question').id;
  const imported={...part,id:'legacy-import',type:'import',completedStepIds:steps,isComplete:true,date:'2026-09-01',review:[{stepId:questionId,misses:2,active:true}]};
  assert.equal((await request(imported)).status,200);
  const answer={...part,id:'review-answer',type:'answer',stepId:questionId,correct:true,reviewing:true,revision:1};
  assert.equal((await request(answer)).status,200);
  assert.equal((await request({...answer,id:'stale-review'})).status,409);
  assert.equal((await request(imported)).status,200);
  const record=(await request()).body.records[0][1];
  assert.equal(record.review[0].active,false);
  assert.equal(record.rewardXp,getQuestionXp({ ...part, stepId:questionId }));
  assert.equal(record.completedDate,'2026-09-01');
});

test('concurrent first answers, replayed updates and new attempts award once and claim one streak', async t => {
  const { request, databasePath, accounts } = await fixture(t);
  const stepId = lesson.steps.find(step => step.type === 'question').id;
  const answer = { ...part, type:'answer', stepId, correct:true, date:'2026-09-05' };
  const replies = await Promise.all(['answer-first', 'answer-second'].map(id => request({ ...answer, id })));
  assert.ok(replies.every(reply => reply.status === 200));
  await request({ ...answer, id:'answer-first' });
  await request({ ...answer, id:'answer-wrong', correct:false, date:'2026-09-06' });
  await request({ ...answer, id:'answer-again', date:'2026-09-06' });
  const record = (await request()).body.records[0][1];
  assert.equal(record.rewardXp, getQuestionXp({ ...part, stepId }));
  assert.deepEqual(record.activityDates, ['2026-09-05', '2026-09-06']);
  assert.equal(record.streakCelebration.id, 'answer-wrong');
  assert.equal((await request({ ...answer, id:'answer-future', date:'2099-01-01' })).status, 422);
  const reopened = createAccountStore({ databasePath });
  try {
    assert.equal(reopened.progress.read(accounts[0].id)[0][1].rewardXp, getQuestionXp({ ...part, stepId }));
  } finally { reopened.close(); }
});

test('written questions earn XP only after a correct self check, including retries', async t => {
  const { request } = await fixture(t);
  const key = { subjectId:'ict', lessonId:'database-management', partId:'access-basics' };
  const current = await loadSubjectLessonPart(key.subjectId, key.lessonId, key.partId);
  const stepId = current.steps.find(step => step.type === 'activity').id;
  const answer = { ...key, type:'answer', stepId, correct:null, id:'written-review' };
  assert.equal((await request(answer)).status, 200);
  const record = (await request()).body.records[0][1];
  assert.equal(record.rewardXp, 0);
  assert.equal(record.activityDates.length, 1);
  assert.equal((await request({ ...answer, id:'written-wrong', correct:false })).status, 200);
  assert.equal((await request()).body.records[0][1].rewardXp, 0);
  const replies = await Promise.all(['written-right-a','written-right-b'].map(id => request({ ...answer, id, correct:true })));
  assert.ok(replies.every(reply => reply.status === 200));
  assert.equal((await request()).body.records[0][1].rewardXp, getQuestionXp({ ...key, stepId }));
  assert.equal((await request({ ...answer, id:'written-wrong-after', correct:false })).status, 200);
  assert.equal((await request()).body.records[0][1].rewardXp, getQuestionXp({ ...key, stepId }));
});

test('answer hearts are atomic, idempotent, timed and unlimited for subscribers', async t => {
  const {request, accounts, databasePath} = await fixture(t);
  const initial = (await request()).body.resources;
  assert.equal(initial.hearts, 10);
  assert.equal(initial.gems, 200);
  const stepId = lesson.steps.find(step => step.type === 'question').id;
  const attempt = n => ({...part, id:`heart-answer-${n}`, type:'answer', stepId, correct:n % 2 === 0});
  for (let n = 0; n < 10; n++) {
    const saved = await request(attempt(n));
    assert.equal(saved.status, 200);
    assert.equal(saved.body.resources.hearts, 9 - n);
  }
  assert.equal((await request(attempt(9))).status, 200, 'a retry costs no extra heart');
  assert.equal((await request(attempt(10))).status, 429, 'an empty balance rejects the answer');
  assert.equal((await request(undefined, accounts[1])).body.resources.hearts, 10, 'accounts have independent balances');
  const db = new DatabaseSync(databasePath);
  t.after(() => db.close());
  db.prepare('UPDATE learner_resources SET refill_at=? WHERE account_id=?').run(Date.now() - 18 * 60 * 1000, Number(accounts[0].id));
  const restored = (await request()).body.resources;
  assert.equal(restored.hearts, 1, 'one heart is restored after 18 minutes');
  assert.ok(restored.nextHeartAt - Date.now() > 5 * 60 * 1000, 'the remaining six minutes are retained');
  assert.equal((await request(attempt(10))).status, 200);
  db.prepare("UPDATE accounts SET account_type='subscribed' WHERE id=?").run(Number(accounts[0].id));
  for (let n = 11; n < 23; n++) assert.equal((await request(attempt(n))).status, 200);
  assert.equal((await request()).body.resources.unlimited, true);
});

test('a Super trial is authenticated, durable, one-time and expires without billing', async t => {
  const {request,store,accounts,databasePath} = await fixture(t);
  assert.equal((await request({type:'super-trial'},accounts[0],{Cookie:''})).status,401);
  assert.equal((await request({type:'super-trial'},accounts[1],{'X-Progress-Owner':`account:${accounts[0].id}`})).status,409);
  assert.equal((await request({type:'super-trial'},accounts[0],{Origin:'https://other.example'})).status,403);
  assert.equal((await request({type:'super-trial',trialEndsAt:Date.now()+1e12})).status,422);
  const before = Date.now();
  const [first,duplicate] = await Promise.all([request({type:'super-trial'}),request({type:'super-trial'})]);
  assert.equal(first.status,200);
  assert.equal(duplicate.body.resources.trialEndsAt,first.body.resources.trialEndsAt);
  assert.ok(first.body.resources.trialEndsAt >= before + SUPER_TRIAL_MS);
  assert.ok(first.body.resources.trialEndsAt <= Date.now() + SUPER_TRIAL_MS);
  assert.equal((await request(undefined,accounts[1])).body.resources.unlimited,false);
  const reopened = createAccountStore({databasePath});
  try { assert.equal(reopened.progress.readResources(accounts[0].id).trialEndsAt,first.body.resources.trialEndsAt); }
  finally { reopened.close(); }
  const stepId = lesson.steps.find(step=>step.type==='question').id;
  for(let n=0;n<12;n++) assert.equal((await request({...part,id:`trial-answer-${n}`,type:'answer',stepId,correct:false})).status,200);
  assert.equal((await request()).body.resources.hearts,10);
  const db = new DatabaseSync(databasePath);
  try {
    const expired = Date.now()-1;
    db.prepare('UPDATE learner_super_trials SET ends_at=? WHERE account_id=?').run(expired,Number(accounts[0].id));
    const retried = (await request({type:'super-trial'})).body.resources;
    assert.equal(retried.unlimited,false);
    assert.equal(retried.trialEligible,false);
    assert.equal(retried.trialEndsAt,expired);
    for(let n=0;n<10;n++) assert.equal((await request({...part,id:`expired-answer-${n}`,type:'answer',stepId,correct:false})).status,200);
    assert.equal((await request({...part,id:'expired-answer-blocked',type:'answer',stepId,correct:false})).status,429);
    assert.equal(store.getAccountForSession(accounts[0].token).accountType,'free');
  } finally { db.close(); }
});

test('explanations cost 50 gems once, survive reopening and stay isolated from progress and other learners', async t => {
  const {request,accounts,databasePath} = await fixture(t);
  const purchase = {...part,type:'explanation-unlock',stepId:'exam-p09-q1-1'};
  assert.equal((await request(purchase,accounts[0],{Cookie:''})).status,401);
  assert.equal((await request(purchase,accounts[1],{'X-Progress-Owner':`account:${accounts[0].id}`})).status,409);
  assert.equal((await request({...purchase,cost:0})).status,422);
  const results = await Promise.all([request(purchase),request(purchase)]);
  for (const result of results) {
    assert.equal(result.status,200);
    assert.equal(result.body.resources.gems,150);
    assert.equal(result.body.resources.hearts,10);
    assert.equal(result.body.resources.explanationUnlocks.length,1);
    assert.match(result.body.explanation.markdown,/MySQL/);
  }
  assert.equal((await request(purchase)).body.resources.gems,150);
  const other = await request(undefined,accounts[1]);
  assert.equal(other.body.resources.gems,200);
  assert.deepEqual(other.body.resources.explanationUnlocks,[]);
  assert.deepEqual((await request()).body.records,[],'opening an explanation must not answer or complete its question');
  const reopened = createAccountStore({databasePath});
  try {
    const balance = reopened.progress.readResources(accounts[0].id);
    assert.equal(balance.gems,150);
    assert.equal(balance.explanationUnlocks.length,1);
    const alias = {subjectId:'mathematics',stepId:'math-book-p058-ex1-a'};
    reopened.progress.unlockExplanation(accounts[0].id,alias);
    assert.equal(reopened.progress.unlockExplanation(accounts[0].id,{...alias,subjectId:'mathematics-2'}).gems,100);
  } finally { reopened.close(); }
});

test('unavailable solutions and insufficient gems cannot debit the learner or create an unlock', async t => {
  const {request} = await fixture(t);
  const purchase = {...part,type:'explanation-unlock'};
  for (const stepId of ['invented-question']) {
    assert.equal((await request({...purchase,stepId})).status,422);
    assert.equal((await request()).body.resources.gems,200);
    assert.deepEqual((await request()).body.resources.explanationUnlocks,[]);
  }
  const bought = ['exam-p09-q1-1','exam-p57-q1-b2','exam-p59-q4-b2','exam-p71-q6-a3'];
  for (const stepId of bought) assert.equal((await request({...purchase,stepId})).status,200,stepId);
  assert.equal((await request()).body.resources.gems,0);
  const denied = await request({...purchase,stepId:'past-p6-q1-1'});
  assert.equal(denied.status,402);
  assert.equal(denied.body.resources.gems,0);
  assert.equal(denied.body.resources.explanationUnlocks.length,4);
  assert.equal((await request({...purchase,stepId:bought[0]})).status,200,'already purchased explanations stay readable at zero gems');
});

test('Super includes explanation unlocks, which remain available when the trial ends', async t => {
  const {request,databasePath,accounts} = await fixture(t);
  const db = new DatabaseSync(databasePath);
  try {
    db.prepare('INSERT INTO learner_resources VALUES(?,?,?,?)').run(Number(accounts[0].id),10,0,Date.now());
    await request({type:'super-trial'});
    const purchase = {...part,type:'explanation-unlock',stepId:'exam-p09-q1-1'};
    const result = await request(purchase);
    assert.equal(result.status,200);
    assert.equal(result.body.resources.gems,0);
    assert.equal(result.body.resources.explanationUnlocks.length,1);
    db.prepare('UPDATE learner_super_trials SET ends_at=? WHERE account_id=?').run(Date.now()-1,Number(accounts[0].id));
    assert.equal((await request(purchase)).status,200);
    assert.equal((await request({...purchase,stepId:'exam-p57-q1-b2'})).status,402);
  } finally { db.close(); }
});

test('retired duplicate requests retain their purchases and cannot earn XP twice', async t => {
  const {request,databasePath,accounts} = await fixture(t);
  const key = { subjectId:'arabic',lessonId:'arabic-u06-l01',partId:'arabic-u06-l01-practice' };
  const oldId = 'arabic-p157-mcq04-occurrence2';
  const canonicalId = 'arabic-p157-mcq04';
  const db = new DatabaseSync(databasePath);
  try {
    db.prepare('INSERT INTO learner_resources VALUES(?,?,?,?)').run(Number(accounts[0].id),10,150,Date.now());
    db.prepare('INSERT INTO question_explanation_unlocks VALUES(?,?,?)')
      .run(Number(accounts[0].id),JSON.stringify(['arabic',oldId]),Date.now());
    for (const stepId of [canonicalId,oldId]) {
      const result = await request({...key,type:'explanation-unlock',stepId});
      assert.equal(result.status,200);
      assert.equal(result.body.resources.gems,150);
    }
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM question_explanation_unlocks').get().count,1);
    for (const [index,stepId] of [oldId,canonicalId].entries())
      assert.equal((await request({...key,type:'answer',id:`duplicate-answer-${index}`,stepId,correct:true})).status,200);
    const record = (await request()).body.records[0][1];
    assert.equal(record.rewardXp,getQuestionXp({subjectId:'arabic',stepId:canonicalId}));
    assert.ok(record.review.some(item => item.stepId === oldId));
  } finally { db.close(); }
});

test('cross-part ICT aliases preserve database history, purchases, imports and replay receipts', async t => {
  const { request, databasePath, accounts } = await fixture(t);
  const db = new DatabaseSync(databasePath);
  t.after(() => db.close());
  const moves = [
    ['smartphone-operating-systems','ios-files','exam-p09-q1-7','android-features','ict-unit2-p069-mobile-q46'],
    ['my-mobile-app','calculator-events','classified-u2-p72-mcq-3','app-inventor-blocks','ict-unit2-p072-app-mcq-q03'],
  ];
  db.prepare('INSERT INTO learner_resources VALUES(?,?,?,?)').run(Number(accounts[0].id),10,100,Date.now());
  for (const [index, [lessonId, from, oldId, to, stepId]] of moves.entries()) {
    const source = { subjectId:'ict', lessonId, partId:from };
    const destination = { ...source, partId:to };
    const historical = { ...emptyPart(), completed:true, completedStepIds:[oldId], completedDate:'2026-09-01',
      activityDates:['2026-09-01'], review:[{ stepId:oldId, misses:2, active:true, solved:true }] };
    db.prepare('INSERT INTO subject_progress VALUES(?,?,?,?,?,?)')
      .run(Number(accounts[0].id),'ict',lessonId,from,JSON.stringify(historical),4);
    db.prepare('INSERT INTO question_explanation_unlocks VALUES(?,?,?)')
      .run(Number(accounts[0].id),JSON.stringify(['ict',oldId]),Date.now());
    const legacy = { ...source, id:`legacy-ict-${index}`, type:'answer', stepId:oldId, correct:true, date:'2026-09-01' };
    const digest = createHash('sha256').update(JSON.stringify(Object.keys(legacy).sort().map(key=>[key,legacy[key]]))).digest('hex');
    db.prepare('INSERT INTO progress_updates VALUES(?,?,?)').run(Number(accounts[0].id),legacy.id,digest);
    const before = await request();
    assert.ok(currentPartProgress(new Map(before.body.records),destination).completedStepIds.includes(stepId));
    assert.equal((await request(legacy)).status,200,'a pre-cleanup replay still matches its original digest');
    assert.equal((await request()).body.resources.hearts,before.body.resources.hearts);
    for (const key of [{...source,stepId:oldId},{...destination,stepId}]) {
      const result = await request({...key,type:'explanation-unlock'});
      assert.equal(result.status,200);
      assert.equal(result.body.resources.gems,100);
      assert.ok(result.body.explanation.markdown.length > 0);
    }
    assert.equal((await request({...destination,type:'explanation-unlock',stepId:oldId})).status,422,'an alias is invalid in another part');
    assert.equal((await request({...destination,type:'answer',id:`wrong-source-${index}`,stepId:oldId,correct:true})).status,422);
    const answer = {...source,type:'answer',id:`moved-review-${index}`,stepId:oldId,correct:true,reviewing:true,revision:4,date:'2026-09-02'};
    const saved = await request(answer);
    assert.equal(saved.status,200,JSON.stringify(saved.body));
    const review = currentPartProgress(new Map(saved.body.records),destination).review;
    assert.deepEqual(review,[{stepId,misses:0,active:false,solved:true}]);
    assert.equal(saved.body.resources.hearts,before.body.resources.hearts-1);
    assert.equal((await request(answer)).body.resources.hearts,saved.body.resources.hearts);
    assert.equal((await request({...answer,correct:false})).status,409);
    assert.equal((await request({...answer,id:`stale-moved-${index}`})).status,409,'a newer destination review cannot be reset from a stale part revision');
    assert.equal((await request({...destination,type:'answer',id:`canonical-ict-${index}`,stepId,correct:true})).status,200);
    const persisted = JSON.parse(db.prepare('SELECT record FROM subject_progress WHERE account_id=? AND subject_id=? AND lesson_id=? AND part_id=?')
      .get(Number(accounts[0].id),'ict',lessonId,from).record);
    assert.deepEqual(persisted,historical,'source row, historical identity and dates are not migrated');

    const sourceLesson = await loadSubjectLessonPart('ict',lessonId,from);
    const imported = {...source,id:`legacy-import-ict-${index}`,type:'import',completedStepIds:[...sourceLesson.steps.map(s=>s.id),oldId],
      isComplete:true,date:'2026-09-01',review:historical.review};
    const result = await request(imported,accounts[1]);
    assert.equal(result.status,200,JSON.stringify(result.body));
    const records = new Map(result.body.records);
    assert.equal(records.get(partKey(source)).completedDate,'2026-09-01');
    assert.ok(records.get(partKey(source)).completedStepIds.includes(oldId));
    assert.deepEqual(currentPartProgress(records,destination).review,[{stepId,misses:2,active:true,solved:true}]);
    assert.equal((await request(imported,accounts[1])).status,200);
  }
  const records = (await request()).body.records;
  const expected = moves.reduce((sum,[lessonId,,oldId,partId,stepId])=>sum+getQuestionXp({subjectId:'ict',lessonId,partId,stepId}),0);
  assert.equal(records.reduce((sum,[,record])=>sum+record.rewardXp,0),expected);
  assert.equal(db.prepare('SELECT COUNT(*) AS count FROM question_explanation_unlocks WHERE account_id=?').get(Number(accounts[0].id)).count,2);
});


test('answer commits include default ratings, survive retries and preserve manual choices', async t => {
  const {request,store,accounts,databasePath}=await fixture(t, {subscribed:true});
  const stepId=lesson.steps.find(step=>step.type==='question').id;
  const wrong={...part,id:'rating-wrong-answer',type:'answer',stepId,correct:false};
  const ratings=()=>store.questionFeedback.ratings(accounts[0].id);
  assert.equal((await request(wrong)).status,200);
  assert.equal(ratings()[0].rating,'hard','no separate feedback request is needed');
  assert.equal(ratings()[0].automatic,true);
  assert.equal((await request({...wrong,id:'rating-correct-answer',correct:true})).status,200);
  assert.equal(ratings()[0].rating,'easy');
  assert.equal((await request(wrong)).status,200);
  assert.equal(ratings()[0].rating,'easy','replaying an older receipt cannot change the newer rating');
  store.questionFeedback.save(accounts[0].id,{...part,stepId,type:'rating',rating:'medium'});
  assert.equal((await request({...wrong,id:'rating-later-wrong'})).status,200);
  assert.equal(ratings()[0].rating,'medium');
  assert.equal(ratings()[0].automatic,false);
  assert.deepEqual(store.questionFeedback.ratings(accounts[1].id),[]);
  // Reproduce a historical answer whose separate rating request never arrived.
  const db=new DatabaseSync(databasePath);
  db.prepare('DELETE FROM question_ratings WHERE account_id=?').run(Number(accounts[0].id));
  db.close();
  assert.equal(ratings()[0].rating,'hard');
  assert.equal(ratings()[0].automatic,true);
  assert.equal(ratings().length,1);
});


test('rated collection attempts sync independently while preserving lifetime XP', async t => {
  const {request}=await fixture(t, {subscribed:true});
  const stepId=lesson.steps.find(step=>step.type==='question').id;
  const answer={...part,id:'normal-before-rated',type:'answer',stepId,correct:true};
  assert.equal((await request(answer)).status,200);
  assert.equal((await request(null)).body.records[0][1].ratedProgress,undefined);
  const reviewed=await request({...answer,id:'rated-easy-attempt',correct:false,rating:'easy'});
  assert.equal(reviewed.status,200);
  assert.deepEqual(reviewed.body.records[0][1].ratedProgress,{easy:[stepId]});
  assert.equal(reviewed.body.records[0][1].rewardXp,getQuestionXp({...part,stepId}));
  assert.equal((await request({...answer,id:'invalid-rated-value',rating:'invented'})).status,422);
  const again=await request({...answer,id:'rated-easy-repeat',rating:'easy'});
  assert.deepEqual(again.body.records[0][1].ratedProgress,{easy:[stepId]});
  const other=await request({...answer,id:'rated-hard-attempt',rating:'hard'});
  assert.deepEqual(other.body.records[0][1].ratedProgress,{easy:[stepId],hard:[stepId]});
});
