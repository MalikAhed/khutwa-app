import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {DatabaseSync} from 'node:sqlite';
import {createAppServer} from '../src/server/app-server.mjs';
import {readRuntimeConfig} from '../src/server/runtime-config.mjs';
import {getPartQuestionIds} from '../src/domain/question-rewards.js';
import {getSubjectRoadmap} from '../src/data/subject-roadmaps.js';
import {hasFreeLessonPractice} from '../src/domain/free-practice.js';

const later={subjectId:'ict',lessonId:'smartphone-operating-systems',partId:'android-features'};
const first={subjectId:'ict',lessonId:'database-management',partId:'access-basics'};
const answer=(part,id)=>({...part,stepId:getPartQuestionIds(part)[0],type:'answer',correct:false,id});
async function fixture(t) {
 const directory=await mkdtemp(path.join(tmpdir(),'khutwa-browser-policy-'));
 const databasePath=path.join(directory,'accounts.sqlite');
 const config=readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:databasePath},{root:process.cwd()});
 let app=await createAppServer({root:process.cwd(),config,logger:()=>{}});
 let base=`http://127.0.0.1:${await app.listen()}`;
 t.after(async()=>{await app.close();await rm(directory,{recursive:true,force:true});});
 const call=async(route,{cookie='',body,owner}={})=>{
   const response=await fetch(base+route,{method:body?'POST':'GET',headers:{Cookie:cookie,...(body?{'Content-Type':'application/json'}:{}),...(owner?{'X-Progress-Owner':owner}:{})},...(body?{body:JSON.stringify(body)}:{})});
   return {status:response.status,json:await response.json(),cookie:response.headers.getSetCookie().map(x=>x.split(';')[0]).join('; ')};
 };
 return {call,databasePath,get store(){return app.accountStore;},async restart(){await app.close();app=await createAppServer({root:process.cwd(),config,logger:()=>{}});base=`http://127.0.0.1:${await app.listen()}`;}};
}
const registration=name=>({username:name,phone:name==='browser-one'?'0591234501':'0591234502',password:'Policy123',curriculum:'gaza',path:'scientific'});

test('one browser can create one account, including simultaneous registrations and restart',async t=>{
 const f=await fixture(t);
 const preflight=await f.call('/api/auth/session');
 const results=await Promise.all(['browser-one','browser-two'].map(name=>f.call('/api/auth/register',{cookie:preflight.cookie,body:registration(name)})));
 assert.deepEqual(results.map(x=>x.status).sort(),[201,403]);
 assert.equal(results.find(x=>x.status===403).json.status,'browser-account-limit');
 const created=results.find(x=>x.status===201);
 const db=new DatabaseSync(f.databasePath);assert.equal(db.prepare('SELECT COUNT(*) AS n FROM accounts').get().n,1);db.close();
 await f.call('/api/auth/sign-out',{cookie:created.cookie,body:{}});
 await f.restart();
 assert.equal((await f.call('/api/auth/register',{cookie:preflight.cookie,body:registration('browser-three')})).json.status,'browser-account-limit');
 const signIn=await f.call('/api/auth/sign-in',{cookie:preflight.cookie,body:{identifier:created.json.account.username,password:'Policy123'}});
 assert.equal(signIn.status,200,'existing sign-in survives the new registration restriction');
});

test('a duplicate identifier does not consume a fresh browser registration',async t=>{
 const f=await fixture(t);
 await f.store.createAccount(registration('browser-one'));
 const cookie=(await f.call('/api/auth/session')).cookie;
 assert.equal((await f.call('/api/auth/register',{cookie,body:registration('browser-one')})).status,409);
 assert.equal((await f.call('/api/auth/register',{cookie,body:registration('browser-two')})).status,201);
});

test('seven browser hearts are shared atomically across existing accounts, with free lessons and paid access exempt',async t=>{
 const f=await fixture(t),actors=[];
 const device=(await f.call('/api/auth/session')).cookie;
 for(const name of ['browser-one','browser-two']) {
   await f.store.createAccount(registration(name)); // Historical accounts remain valid.
   const signed=await f.call('/api/auth/sign-in',{cookie:device,body:{identifier:name,password:'Policy123'}});
   assert.equal(signed.status,200);
   actors.push({cookie:signed.cookie,owner:`account:${signed.json.account.id}`,id:signed.json.account.id});
 }
 const request=(actor,body)=>f.call('/api/progress',{...actor,body});
 assert.equal((await request(actors[0],{...answer(later,'invalid-question'),stepId:'missing'})).status,422);
 assert.equal((await request(actors[0])).json.resources.hearts,7,'invalid answers release their reservation');
 const results=await Promise.all(Array.from({length:12},(_,n)=>request(actors[n%2],answer(later,`shared-attempt-${n}`))));
 assert.equal(results.filter(x=>x.status===200).length,7);
 assert.equal(results.filter(x=>x.status===429).length,5);
 for(const actor of actors)assert.equal((await request(actor)).json.resources.hearts,0);
 const index=results.findIndex(x=>x.status===200);
 assert.equal((await request(actors[index%2],answer(later,`shared-attempt-${index}`))).status,200,'accepted retries remain valid at zero');
 const changed=await request(actors[index%2],{...answer(later,`shared-attempt-${index}`),correct:true});
 assert.equal(changed.status,409);
 for(let n=0;n<12;n++)assert.equal((await request(actors[n%2],answer(first,`free-practice-${n}`))).status,200);
 assert.equal((await request(actors[0])).json.resources.hearts,0,'free lessons never refill or debit the shared allowance');
 await f.restart();
 assert.equal((await request(actors[1])).json.resources.hearts,0,'browser quota survives a server restart');
 const db=new DatabaseSync(f.databasePath);
 db.prepare("UPDATE accounts SET account_type='subscribed' WHERE id=?").run(Number(actors[0].id));
 for(let n=0;n<9;n++)assert.equal((await request(actors[0],answer(later,`paid-attempt-${n}`))).status,200);
 assert.equal((await request(actors[1])).json.resources.hearts,0,'paid answers do not affect free accounts');
 db.prepare("UPDATE browser_heart_attempts SET day='2000-01-01'").run();
 db.prepare('UPDATE learner_resources SET refill_at=?').run(Date.now()-86400000*2);
 assert.equal((await request(actors[1])).json.resources.hearts,7,'both quotas reset at the server day boundary');
 assert.equal((await request(actors[1],answer(later,'next-day-answer'))).status,200);
 assert.ok(db.prepare('SELECT COUNT(*) AS n FROM subject_progress').get().n>=2,'progress stays separate and intact');
 db.close();
});

test('the first two visible published lessons in each subject are heart-free, including persisted math identities',()=>{
 for(const subjectId of ['ict','mathematics','mathematics-2','physics','chemistry','biology','english','arabic','islamic-education']) {
  const lessons=getSubjectRoadmap(subjectId).units.flatMap(unit=>unit.lessons).filter(lesson=>!lesson.hidden&&!lesson.optional&&lesson.parts.some(part=>part.startStepId));
  for(const [index,lesson] of lessons.entries())assert.equal(hasFreeLessonPractice({subjectId,lessonId:lesson.id}),index<2,`${subjectId}:${lesson.id}`);
  if(subjectId==='mathematics-2')for(const [index,lesson] of lessons.entries())assert.equal(hasFreeLessonPractice({subjectId:'mathematics',lessonId:lesson.id}),index<2);
 }
 assert.equal(hasFreeLessonPractice({subjectId:'ict',lessonId:'course-introduction'}),false);
});
