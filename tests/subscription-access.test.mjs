import assert from 'node:assert/strict';
import test from 'node:test';
import { DatabaseSync } from 'node:sqlite';
import { normalizeSubscriptionSubjects, readSubscriptionSubjects, subscriptionCovers } from '../src/domain/subscription-access.js';
import { createDatabaseProgressStore } from '../src/server/progress-store.mjs';
import { createLearnerResources } from '../src/services/learner-resources.js';
import { createOfflineAccess } from '../src/services/offline-access.js';
import { getPartQuestionIds } from '../src/domain/question-rewards.js';

test('legacy subscriptions retain all subjects; malformed and selected scopes never broaden access',()=>{
  assert.equal(subscriptionCovers(readSubscriptionSubjects(null),'physics'),true);
  assert.deepEqual(normalizeSubscriptionSubjects(['ict','ict']),['ict']);
  for(const input of [[],['unknown'],{},true]) assert.throws(()=>normalizeSubscriptionSubjects(input));
  assert.equal(subscriptionCovers(readSubscriptionSubjects('broken'),'ict'),false);
  assert.equal(subscriptionCovers(['mathematics-2'],{subjectId:'mathematics',lessonId:'matrices'}),true);
  assert.equal(subscriptionCovers(['mathematics'],{subjectId:'mathematics',lessonId:'matrices'}),false);
});

test('selected subjects control server heart charges, question jumps and explanation costs without changing progress',()=>{
  const db=new DatabaseSync(':memory:');
  db.exec("CREATE TABLE accounts(id INTEGER PRIMARY KEY,account_type TEXT,subscription_expires_at TEXT,access_disabled INTEGER); INSERT INTO accounts VALUES(1,'subscribed',NULL,0)");
  const store=createDatabaseProgressStore(db);
  db.prepare('INSERT INTO account_subscription_scopes VALUES(?,?)').run(1,'["physics"]');
  const key={subjectId:'ict',lessonId:'smartphone-operating-systems',partId:'android-features'};
  const ids=getPartQuestionIds(key);
  const answer=(id,stepId)=>store.update(1,{...key,id,type:'answer',stepId,correct:false},ids);
  assert.equal(store.readResources(1,{subjectId:'physics'}).unlimited,true);
  assert.equal(store.readResources(1,key).unlimited,false);
  answer('scope-free-001',ids[0]);
  assert.equal(store.readResources(1).hearts,6);
  assert.throws(()=>store.navigate(1,{...key,kind:'jump',id:'scope-jump-001',stepId:ids[1]}),e=>e.code==='super-required');
  const before=store.read(1);
  db.prepare('UPDATE account_subscription_scopes SET subjects=? WHERE account_id=1').run('["ict"]');
  store.navigate(1,{...key,kind:'jump',id:'scope-jump-002',stepId:ids[1]});
  assert.deepEqual(store.read(1),before);
  answer('scope-paid-001',ids[1]);
  assert.equal(store.readResources(1).hearts,6,'purchased subjects do not consume shared account hearts');
  const gems=store.readResources(1).gems;
  store.unlockExplanation(1,{...key,stepId:ids[2]});
  assert.equal(store.readResources(1).gems,gems);
  db.prepare('UPDATE account_subscription_scopes SET subjects=? WHERE account_id=1').run('["physics"]');
  store.unlockExplanation(1,{...key,stepId:ids[3]});
  assert.ok(store.readResources(1).gems<gems,'unpurchased explanations retain their normal gem price');
  db.exec("UPDATE accounts SET subscription_expires_at='2000-01-01T00:00:00Z'");
  assert.equal(store.readResources(1,{subjectId:'physics'}).unlimited,false);
  assert.ok(store.read(1).length);db.close();
});

test('partial Super uses paid behavior only inside selected subjects and retains scope offline',async()=>{
  const owner='account:1',key={subjectId:'ict',lessonId:'smartphone-operating-systems'};
  const resources=createLearnerResources({getAccountType:()=> 'subscribed',hasSuperAccess:key=>subscriptionCovers(['ict'],key),apiBase:'/api/progress',fetchImpl:async()=>{throw new Error('offline');}});
  assert.equal(resources.get(owner,key).unlimited,true);
  assert.equal(resources.get(owner,{subjectId:'physics'}).unlimited,false);
  await resources.navigate(owner,key);
  await assert.rejects(resources.navigate(owner,{subjectId:'physics'}),e=>e.code==='super-required');
  assert.equal(await resources.checkAnswerAccess(owner,{key}),undefined);
  let needsConnection=false;
  assert.equal(typeof await resources.checkAnswerAccess(owner,{key:{subjectId:'physics'},onConnectionRequired:()=>{needsConnection=true;}}),'string');
  assert.equal(needsConnection,true);
  resources.spend(owner,'scope-paid',key);
  resources.confirm(owner,{hearts:7,gems:200,refillAt:Date.now(),gemRevision:0});
  assert.equal(resources.get(owner).hearts,7,'paid pending answers do not subtract free hearts on confirmation');
  const saved=new Map(),storage={getItem:key=>saved.get(key)||null,setItem:(key,value)=>saved.set(key,value)};
  const offline=createOfflineAccess({storage});
  offline.verify({id:'1',username:'scope-student',accountType:'subscribed',subscriptionSubjects:['ict']},Date.now());
  assert.deepEqual(createOfflineAccess({storage}).inspect().account.subscriptionSubjects,['ict']);
});


test('partial subscribers answer free starter lessons offline without making other subjects Super',async()=>{
 const resources=createLearnerResources({getAccountType:()=> 'subscribed',hasSuperAccess:key=>subscriptionCovers(['ict'],key),apiBase:'/api/progress',fetchImpl:async()=>{throw Error('offline');}});
 const owner='account:starter',key={subjectId:'physics',lessonId:'momentum-impulse'};
 resources.confirm(owner,{hearts:0,gems:0,refillAt:Date.now()});
 assert.equal(await resources.checkAnswerAccess(owner,{key}),undefined);
 await resources.navigate(owner,key);
 resources.spend(owner,'offline-starter-answer',key);
 assert.equal(resources.get(owner,key).hearts,0);
 assert.equal(resources.get(owner,key).unlimited,false,'starter access does not grant Super to the entire unpurchased subject');
 assert.equal(typeof await resources.checkAnswerAccess(owner,{key:{subjectId:'physics',lessonId:'electric-current-resistance'}}),'string');
});
