import assert from 'node:assert/strict';
import test from 'node:test';
import { createFirstRunTourState } from '../src/services/first-run-tour.js';

test('coaching is dormant until armed, learner scoped, resumable and never restarts completed tours',()=>{
  const saved=new Map(),storage={getItem:key=>saved.get(key),setItem:(key,value)=>saved.set(key,value)};
  let owner='account:1';const service={getLearnerProgressOwner:()=>owner};
  const state=createFirstRunTourState({service,storage});
  assert.equal(state.active(),false);
  state.start();assert.equal(state.read().stage,'wait-question');
  state.mark('rating');state.advance('wait-answer');state.patch({pendingStreak:{streak:1},sessionDone:false});
  const restored=createFirstRunTourState({service,storage});
  assert.equal(restored.read().stage,'wait-answer');assert.equal(restored.has('rating'),true);
  assert.deepEqual(restored.read().pendingStreak,{streak:1});
  owner='account:2';assert.equal(state.active(),false);state.start();state.finish();state.start();
  assert.equal(state.active(),false,'a completed learner cannot be armed again');
  owner='account:1';assert.equal(state.active(),true);
  owner='guest';state.start();assert.equal(state.active(),false);
});

test('corrupt or denied tour storage never blocks studying and unknown stages cannot advance',()=>{
  const state=createFirstRunTourState({service:{getLearnerProgressOwner:()=> 'account:1'},storage:{getItem:()=>'{',setItem:()=>{throw Error('denied');}}});
  state.start();state.advance('invalid');assert.equal(state.read().stage,'wait-question');
  state.mark('flashcard');state.mark('flashcard');assert.deepEqual(state.read().seen,['flashcard']);
  state.finish();assert.equal(state.active(),false);
});

test('older tours and previously acknowledged farewells never enroll students again',()=>{
  let value={version:1,status:'complete'};
  const state=createFirstRunTourState({service:{getLearnerProgressOwner:()=> 'account:1'},storage:{getItem:()=>JSON.stringify(value)}});
  assert.equal(state.active(),false);
  for(const version of [1,2,3]){
    value={version,status:'active',stage:'wait-question',seen:['easy'],homeDone:version===3,pendingStreak:{streak:1},firstSessionPending:true,sessionDone:false,extra:'preserved'};
    state.start();
    assert.deepEqual(state.read(),{...value,status:'complete'});
    assert.equal(state.active(),false);
  }
});

test('completion in another tab overrides cached active guidance and cannot be reopened',()=>{
  const saved=new Map(),storage={getItem:key=>saved.get(key),setItem:(key,value)=>saved.set(key,value)};
  const service={getLearnerProgressOwner:()=> 'account:1'};
  const first=createFirstRunTourState({service,storage}),second=createFirstRunTourState({service,storage});
  first.start();first.mark('easy');second.mark('hard');
  first.patch({pendingStreak:{streak:1}});second.finish();
  first.start();first.advance('flashcard');first.mark('flashcard');first.patch({status:'active'});
  assert.equal(first.active(),false);
  const restored=createFirstRunTourState({service,storage});
  assert.equal(restored.active(),false);
  assert.equal(restored.has('flashcard'),false);
  assert.deepEqual(restored.read().pendingStreak,{streak:1});
  assert.equal(restored.read().firstSessionPending,true);
});

test('denied writes preserve this visit even when storage still contains an older active record',()=>{
  const previous={version:3,status:'active',stage:'wait-question',seen:[]};
  const state=createFirstRunTourState({service:{getLearnerProgressOwner:()=> 'account:1'},storage:{getItem:()=>JSON.stringify(previous),setItem:()=>{throw Error('quota');}}});
  state.mark('easy');state.advance('slider');state.patch({pendingStreak:{streak:1}});
  assert.equal(state.read().stage,'slider');assert.equal(state.has('easy'),true);
  state.finish();state.start();
  assert.equal(state.active(),false);
  assert.deepEqual(state.read().pendingStreak,{streak:1});
});

test('a racing active write cannot undo the monotonic completion marker',()=>{
  const saved=new Map();let beforeWrite;
  const storage={getItem:key=>saved.get(key),setItem:(key,value)=>{const callback=beforeWrite;beforeWrite=null;callback?.();saved.set(key,value);}};
  const service={getLearnerProgressOwner:()=> 'account:1'};
  const first=createFirstRunTourState({service,storage}),second=createFirstRunTourState({service,storage});
  first.start();second.mark('easy');
  beforeWrite=()=>first.finish();
  second.advance('flashcard');
  assert.equal(JSON.parse(saved.get('tawjihi:rocky-first-run:v1:account:1')).status,'active','the fixture reproduces a stale write after completion');
  const restored=createFirstRunTourState({service,storage});
  restored.start();
  assert.equal(first.active(),false);assert.equal(second.active(),false);assert.equal(restored.active(),false);
});

test('terminal state retains a newer queued streak instead of an older completed cache',()=>{
  const saved=new Map(),storage={getItem:key=>saved.get(key),setItem:(key,value)=>saved.set(key,value)};
  const state=createFirstRunTourState({service:{getLearnerProgressOwner:()=> 'account:1'},storage});
  state.start();state.finish();
  const key='tawjihi:rocky-first-run:v1:account:1';
  storage.setItem(key,JSON.stringify({...JSON.parse(saved.get(key)),status:'active',pendingStreak:{streak:1},extra:'newer'}));
  assert.equal(state.active(),false);
  assert.deepEqual(state.read().pendingStreak,{streak:1});assert.equal(state.read().extra,'newer');
});


test('skipping guidance preserves an earned streak until the first session actually closes',()=>{
 const state=createFirstRunTourState({service:{getLearnerProgressOwner:()=> 'account:1'}});
 state.start();state.patch({pendingStreak:{streak:1}});state.finish();
 assert.equal(state.active(),false);assert.equal(state.read().firstSessionPending,true);
 assert.deepEqual(state.read().pendingStreak,{streak:1});
 state.patch({sessionDone:true,firstSessionPending:false});
 assert.equal(state.read().sessionDone,true);
});
