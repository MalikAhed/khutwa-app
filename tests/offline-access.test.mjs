import test from 'node:test';
import assert from 'node:assert/strict';
import {createOfflineAccess, OFFLINE_ACCESS_KEY, OFFLINE_WINDOW_MS} from '../src/services/offline-access.js';
import {createLearnerSession} from '../src/services/learner-session.js';
const account = {id:'1',username:'learner',accountType:'subscribed',curriculum:'gaza',path:'scientific',isOwner:true};
function setup() {
  const values = new Map();
  const storage = {getItem:key=>values.get(key) ?? null,setItem:(key,value)=>values.set(key,value),removeItem:key=>values.delete(key)};
  let wall=1800000000000, mono=0;
  const options={storage,wallNow:()=>wall,monotonicNow:()=>mono};
  return {storage,values,options, advance:ms=>{wall+=ms;mono+=ms;},wall:ms=>{wall+=ms;},mono:ms=>{mono+=ms;}};
}
test('cached free identity verification expires after seven days including time closed',()=>{
 const x=setup();const grant=createOfflineAccess(x.options);grant.verify({...account,accountType:'free'},1700000000000);
 x.advance(3*86400000);assert.equal(grant.inspect().allowed,true);
 x.wall(4*86400000);const restarted=createOfflineAccess(x.options);
 assert.equal(restarted.inspect().allowed,false);
 x.wall(-4*86400000);assert.equal(createOfflineAccess(x.options).inspect().allowed,false);
});
test('rollback is sticky across restarts; only server verification unlocks it',()=>{
 const x=setup();const grant=createOfflineAccess(x.options);grant.verify(account,1700000000000);
 x.advance(3600000);grant.inspect();x.wall(-300000);
 assert.equal(grant.inspect().allowed,false);
 x.wall(300000);assert.equal(createOfflineAccess(x.options).inspect().allowed,false);
 grant.verify(account,1700003600000);assert.equal(grant.inspect().allowed,true);
});
test('monotonic elapsed time prevents freezing the phone clock while open',()=>{
 const x=setup();const grant=createOfflineAccess(x.options);grant.verify({...account,accountType:'free'},1700000000000);grant.inspect();
 x.mono(OFFLINE_WINDOW_MS);assert.equal(grant.inspect().allowed,false);
});
test('clock skew on first verification is allowed, minor corrections cannot refund time',()=>{
 const x=setup();const grant=createOfflineAccess(x.options);grant.verify(account,1700000000000);
 x.advance(60000);const first=grant.inspect();x.wall(-30000);
 assert.equal(grant.inspect().allowed,true);assert.ok(grant.inspect().now>=first.now);
 assert.equal(first.now,1700000060000);
});
test('known access expiry caps the lease and no credentials or owner role are cached',()=>{
 const x=setup();const grant=createOfflineAccess(x.options);grant.verify({...account,password:'secret',subscriptionExpiresAt:1700000060000},1700000000000);
 assert.ok(!x.storage.getItem(OFFLINE_ACCESS_KEY).includes('secret'));
 assert.equal(grant.inspect().account.isOwner,undefined);x.advance(60000);assert.equal(grant.inspect().allowed,false);
});
test('unavailable storage and malformed profiles do not grant offline access',()=>{
 assert.equal(createOfflineAccess().inspect().allowed,false);
 const x=setup();x.storage.setItem(OFFLINE_ACCESS_KEY,'{');assert.equal(createOfflineAccess(x.options).inspect().allowed,false);
});
test('HTTP identity survives offline restart but a server rejection revokes it without deleting pending work',async()=>{
 const x=setup();let mode='online';
 const fetchImpl=async()=>{
  if(mode==='offline')throw new Error('offline');
  return {ok:true,status:200,headers:new Headers({Date:new Date(1700000000000).toUTCString()}),json:async()=>({account:mode==='rejected'?null:account})};
 };
 const session=()=>createLearnerSession({apiBase:'/api/auth',offlineAccess:createOfflineAccess(x.options),fetchImpl,onError:()=>{}});
 assert.equal((await session().restoreSession()).status,'signed-in');
 x.values.set('pending-answers','keep');mode='offline';x.advance(10000);
 const resumed=session();assert.equal((await resumed.restoreSession()).status,'offline');assert.equal(resumed.getLearnerProgressOwner(),'account:1');assert.equal(resumed.isOwner(),false);
 mode='rejected';assert.equal((await resumed.restoreSession()).status,'guest');
 mode='offline';assert.equal((await session().restoreSession()).status,'unavailable');assert.equal(x.values.get('pending-answers'),'keep');
});
test('development cached offline responses cannot renew the seven-day window',async()=>{
 const x=setup();const grant=createOfflineAccess(x.options);grant.verify({...account,accountType:'free'},1700000000000);x.advance(OFFLINE_WINDOW_MS);
 const session=createLearnerSession({apiBase:'/api/auth',offlineAccess:grant,fetchImpl:async()=>({ok:true,status:200,headers:new Headers({Date:new Date().toUTCString()}),json:async()=>({account,offline:true})})});
 assert.equal((await session.restoreSession()).status,'unavailable');assert.equal(grant.inspect().allowed,false);
});
test('a late session read cannot resurrect an explicitly signed-out account',async()=>{
 const x=setup();let release;let delayed=false;
 const fetchImpl=async url=>{
  if(url.endsWith('/sign-out'))return {ok:true,status:200,json:async()=>({status:'signed-out'})};
  if(delayed)await new Promise(resolve=>{release=resolve;});
  return {ok:true,status:200,headers:new Headers({Date:new Date(1700000000000).toUTCString()}),json:async()=>({account})};
 };
 const service=createLearnerSession({apiBase:'/api/auth',offlineAccess:createOfflineAccess(x.options),fetchImpl});
 await service.restoreSession();delayed=true;const pending=service.restoreSession();
 await service.signOut();release();await pending;
 assert.equal(service.getAccountType(),'guest');assert.equal(createOfflineAccess(x.options).inspect().allowed,false);
});
test('another tab changing accounts does not authorize this tab with the wrong offline profile',async()=>{
 const x=setup();const grant=createOfflineAccess(x.options);
 const service=createLearnerSession({apiBase:'/api/auth',offlineAccess:grant,fetchImpl:async()=>({ok:true,status:200,headers:new Headers({Date:new Date(1700000000000).toUTCString()}),json:async()=>({account})})});
 await service.restoreSession();assert.equal(service.getAccessState().allowed,true);
 createOfflineAccess(x.options).verify({...account,id:'other'},1700000000000);
 assert.equal(service.getAccessState().allowed,false);assert.equal(service.getLearnerProgressOwner(),'account:1');
});

test('paid accounts must reconnect weekly for synchronization and updates, with earlier subscription expiry honored',()=>{
 const x=setup();const grant=createOfflineAccess(x.options);const start=1700000000000;
 grant.verify({...account,subscriptionExpiresAt:start+365*86400000},start);
 x.advance(OFFLINE_WINDOW_MS-1);assert.equal(createOfflineAccess(x.options).inspect().allowed,true);
 x.advance(1);assert.equal(createOfflineAccess(x.options).inspect().allowed,false);
 grant.verify(account,start+OFFLINE_WINDOW_MS);assert.equal(grant.inspect().allowed,true);
 const y=setup();const short=createOfflineAccess(y.options);short.verify({...account,subscriptionExpiresAt:start+86400000},start);
 y.advance(86400000);assert.equal(short.inspect().allowed,false);
});

test('free study requires a real online account check while cached identity and pending work survive outages',async()=>{
 const x=setup();let disconnected=false;
 const fetchImpl=async()=>{
  if(disconnected)throw Error('network unavailable');
  return {ok:true,status:200,headers:new Headers({Date:new Date(1700000000000).toUTCString()}),json:async()=>({account:{...account,accountType:'free'}})};
 };
 const service=createLearnerSession({apiBase:'/api/auth',offlineAccess:createOfflineAccess(x.options),fetchImpl,onError:()=>{}});
 await service.restoreSession();assert.equal(service.getAccessState().allowed,true);
 x.values.set('pending-answers','preserved');disconnected=true;
 assert.equal((await service.restoreSession()).status,'offline');
 assert.equal(service.getAccessState().allowed,false);
 assert.equal(service.getLearnerProgressOwner(),'account:1');
 assert.equal(createOfflineAccess(x.options).inspect().account.accountType,'free');
 disconnected=false;await service.restoreSession();assert.equal(service.getAccessState().allowed,true);
 assert.equal(x.values.get('pending-answers'),'preserved');
});

test('browser disconnect immediately gates free study; successful verification overrides a stale offline hint',async()=>{
 const previous=globalThis.window;const events=new EventTarget();globalThis.window=events;
 try {
  for(const accountType of ['free','subscribed']) {
   const x=setup();const service=createLearnerSession({apiBase:'/api/auth',offlineAccess:createOfflineAccess(x.options),fetchImpl:async()=>({ok:true,status:200,headers:new Headers({Date:new Date(1700000000000).toUTCString()}),json:async()=>({account:{...account,accountType}})})});
   await service.restoreSession();events.dispatchEvent(new Event('offline'));
   assert.equal(service.getAccessState().allowed,accountType==='subscribed');
   events.dispatchEvent(new Event('online'));
   assert.equal(service.getAccessState().allowed,accountType==='subscribed','online event does not verify the free account');
   await service.restoreSession();assert.equal(service.getAccessState().allowed,true);
  }
 } finally {if(previous===undefined)delete globalThis.window;else globalThis.window=previous;}
});
