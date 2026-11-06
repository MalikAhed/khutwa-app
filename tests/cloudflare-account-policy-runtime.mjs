import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const [bundlePath,runtimeModule]=process.argv.slice(2);
if(!bundlePath||!runtimeModule)throw new Error('Usage: node tests/cloudflare-account-policy-runtime.mjs <candidate-bundle.mjs> <miniflare-module-path>');
const {Miniflare,convertV4MiniflareOptions}=await import(pathToFileURL(path.resolve(runtimeModule)).href);
import {initializeAccountSchema} from '../src/server/account-schema.mjs';
import {getPartQuestionIds} from '../src/domain/question-rewards.js';
import {digestDeviceToken,readCookie} from '../src/server/browser-registration.mjs';
const location={subjectId:'ict',lessonId:'smartphone-operating-systems',partId:'android-features'};
const freeLocation={subjectId:'ict',lessonId:'database-management',partId:'access-basics'};
const freeIds=getPartQuestionIds(freeLocation);
const questionIds=getPartQuestionIds(location);
const source=readFileSync(bundlePath,'utf8');
const assets={
 '/content/catalog.ba1d0a1e6782f489.json':{lessons:{'ict:smartphone-operating-systems':'lesson.json','ict:database-management':'free.json'}},
 '/lesson.json':{status:'published',parts:[{id:location.partId,stepIds:questionIds}],steps:questionIds.map(id=>({id,type:'mcq'}))},
 '/free.json':{status:'published',parts:[{id:freeLocation.partId,stepIds:freeIds}],steps:freeIds.map(id=>({id,type:'mcq'}))}
};
const mf=new Miniflare(convertV4MiniflareOptions({script:source,modules:true,compatibilityDate:'2026-10-23',compatibilityFlags:['nodejs_compat'],
 d1Databases:{ACCOUNTS:'isolated-accounts'},durableObjects:{AUTH:{className:'Authentication',useSQLite:true},STUDENTS:{className:'StudentProgress',useSQLite:true}},
 serviceBindings:{ASSETS:async request=>new Response(JSON.stringify(/\/catalog\.[a-f0-9]+\.json$/.test(new URL(request.url).pathname)?Object.values(assets)[0]:assets[new URL(request.url).pathname]||{}),{headers:{'Content-Type':'application/json'}})}
}));
try {
 const db=await mf.getD1Database('ACCOUNTS');
 const sqlite=new DatabaseSync(':memory:');initializeAccountSchema(sqlite);
 const schema=sqlite.prepare("SELECT sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY type DESC").all().map(x=>x.sql+';').join('\n');sqlite.close();
 await db.exec(schema.replaceAll('\n',' '));
 for(const sql of ["ALTER TABLE accounts ADD COLUMN subscription_subjects TEXT","ALTER TABLE accounts ADD COLUMN access_disabled INTEGER NOT NULL DEFAULT 0","ALTER TABLE accounts ADD COLUMN subscription_expires_at TEXT","ALTER TABLE accounts ADD COLUMN version INTEGER NOT NULL DEFAULT 0"])await db.exec(sql);
 const ua={computer:'Mozilla/5.0 (X11; Linux x86_64) Chrome/143.0.0.0 Safari/537.36',phone:'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Mobile/15E148 Safari/604.1'};
 const request=(path,{agent=ua.computer,cookie='',body,ip='192.0.2.1',owner}={})=>mf.dispatchFetch('https://app.test'+path,{method:body?'POST':'GET',headers:{'User-Agent':agent,'CF-Connecting-IP':ip,...(cookie?{Cookie:cookie}:{}),...(body?{'Content-Type':'application/json'}:{}),...(owner?{'X-Progress-Owner':owner}:{})},...(body?{body:JSON.stringify(body)}:{})});
 const cookies=response=>response.headers.getSetCookie().map(x=>x.split(';')[0]).join('; ');
 const preflight=await request('/api/auth/session');
 assert.equal((await preflight.clone().json()).account,null);
 assert.match(cookies(preflight),/tawjihi_device=/);
 const registered=await request('/api/auth/register',{cookie:cookies(preflight),body:{username:'runtime-student',phone:'0591234567',password:'Runtime123',curriculum:'gaza',path:'scientific'}});
 assert.equal(registered.status,201,await registered.clone().text());const account=(await registered.json()).account;const computerCookies=cookies(registered);
 assert.match(computerCookies,/tawjihi_device=/);
 const credentials={identifier:'runtime-student',password:'Runtime123'};
 const phone=await request('/api/auth/sign-in',{agent:ua.phone,ip:'192.0.2.2',body:credentials});assert.equal(phone.status,200,await phone.clone().text());
 const denied=await request('/api/auth/sign-in',{ip:'192.0.2.3',body:credentials});assert.equal(denied.status,403);assert.equal((await denied.json()).status,'device-limit');assert.equal(denied.headers.getSetCookie().length,0);
 assert.equal((await request('/api/auth/sign-in',{cookie:computerCookies,body:credentials})).status,200);
 const part={...location,stepId:questionIds[0],correct:false,type:'answer'};
 const owner=`account:${account.id}`;
 const navigationBody=(stepId,id,kind='jump')=>({...location,stepId,id,kind,type:'question-navigation'});
 const initialNavigation=await request('/api/progress',{cookie:computerCookies,owner,body:navigationBody(questionIds[0],'nav-runtime-entry','continue')});
 assert.equal(initialNavigation.status,200,await initialNavigation.clone().text());
 assert.equal((await initialNavigation.json()).resources.navigationRemaining,5);
 const jumps=await Promise.all(questionIds.slice(1,7).map((stepId,n)=>request('/api/progress',{
   cookie:n%2?cookies(phone):computerCookies,owner,body:navigationBody(stepId,`nav-runtime-${n}`)})));
 assert.equal(jumps.filter(response=>response.status===402).length,6);
 assert.equal(jumps.filter(response=>response.status===429).length,0);
 assert.equal((await request('/api/progress',{cookie:computerCookies,owner,body:navigationBody(questionIds[0],'nav-runtime-reentry','enter')})).status,200,'re-entry is unrestricted for every browser');
 const requests=Array.from({length:12},(_,n)=>request('/api/progress',{cookie:n%2?cookies(phone):computerCookies,owner,body:{...part,id:`runtime-heart-${n}`}}));
 const results=await Promise.all(requests);const statuses=results.map(x=>x.status);
 assert.equal(statuses.filter(x=>x===200).length,7,JSON.stringify(await Promise.all(results.map(x=>x.clone().text()))));
 assert.equal(statuses.filter(x=>x===429).length,5);
 const state=await request('/api/progress',{cookie:computerCookies,owner});assert.equal((await state.json()).resources.hearts,0);
 assert.equal((await request('/api/progress',{cookie:computerCookies,owner,body:{type:'super-trial'}})).status,403);
 assert.equal((await db.prepare('SELECT COUNT(*) AS count FROM sessions').first()).count,3,'denied attempts do not retain newly issued sessions');
 const blockedRegistration=await request('/api/auth/register',{cookie:computerCookies,body:{username:'blocked-student',phone:'0591234599',password:'Runtime123',curriculum:'gaza',path:'scientific'}});
 assert.equal(blockedRegistration.status,403);assert.equal((await blockedRegistration.json()).status,'browser-account-limit');
 const sharedRegistration=await request('/api/auth/register',{agent:ua.phone,ip:'192.0.2.5',body:{username:'shared-student',phone:'0591234588',password:'Runtime123',curriculum:'gaza',path:'scientific'}});
 assert.equal(sharedRegistration.status,201);
 const sharedOwner=`account:${(await sharedRegistration.json()).account.id}`;
 const sharedLogin=await request('/api/auth/sign-in',{cookie:computerCookies,ip:'192.0.2.6',body:{identifier:'shared-student',password:'Runtime123'}});
 assert.equal(sharedLogin.status,200);
 const used=Number((await db.prepare('SELECT COUNT(*) AS used FROM browser_heart_attempts WHERE token_hash=?').bind(digestDeviceToken(readCookie(computerCookies))).first()).used);
 const sharedResponses=await Promise.all(Array.from({length:8},(_,n)=>request('/api/progress',{cookie:cookies(sharedLogin),owner:sharedOwner,body:{...part,id:`shared-runtime-${n}`}})));
 assert.equal(sharedResponses.filter(response=>response.status===200).length,7-used,'D1 browser allowance is shared across account Durable Objects');
 assert.equal((await(await request('/api/progress',{cookie:cookies(sharedLogin),owner:sharedOwner})).json()).resources.hearts,0);
 const rewardRegistration=await request('/api/auth/register',{ip:'192.0.2.4',body:{username:'reward-student',phone:'0591234568',password:'Runtime123',curriculum:'gaza',path:'scientific'}});
 assert.equal(rewardRegistration.status,201);
 const rewardOwner=`account:${(await rewardRegistration.json()).account.id}`,rewardCookies=cookies(rewardRegistration);
 let finalReward;
 for(const [n,stepId] of freeIds.slice(0,10).entries()) {
   const answer=await request('/api/progress',{cookie:rewardCookies,owner:rewardOwner,body:{...part,...freeLocation,stepId,correct:true,id:`runtime-gem-${n}`}});
   assert.equal(answer.status,200,await answer.clone().text());finalReward=await answer.json();assert.equal(finalReward.gemReward,7);
 }
 assert.equal(finalReward.resources.gems,270);
 const rewardRetry=await request('/api/progress',{cookie:rewardCookies,owner:rewardOwner,body:{...part,...freeLocation,stepId:freeIds[9],correct:true,id:'runtime-gem-9'}});
 assert.equal((await rewardRetry.json()).resources.gems,270);
 console.log('Recovered Worker passed: one-account browser registration, seven-heart quota across browsers, Super-only jumps, free starter lessons, unique rewards and idempotent retries.');
}finally{await mf.dispose();}
