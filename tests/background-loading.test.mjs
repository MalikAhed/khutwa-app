import test from 'node:test';
import assert from 'node:assert/strict';
import { backgroundFiles } from '../src/app/background-loading.js';
const catalog={onboarding:['welcome'],helpers:['shell','mascot'],lessons:[
  {subjectId:'a',lessonId:'1',first:['a1','a1-first'],files:['a1','a1-image']},
  {subjectId:'b',lessonId:'1',first:['b1'],files:['b1','b1-image']},
  {subjectId:'a',lessonId:'2',first:['a2'],files:['a2','a2-image']},
  {subjectId:'a',lessonId:'3',first:['a3'],files:['a3','a3-image']},
]};
const selectedLesson={subjectId:'a',lessonId:'1'};
test('free downloads cover the current lesson and one neighboring first step on a healthy connection',()=>{
 assert.deepEqual(backgroundFiles(catalog,{accountType:'free',selectedLesson,connection:{effectiveType:'4g'}}),['a1','a1-first','a1-image','a2']);
 assert.deepEqual(backgroundFiles(catalog,{accountType:'free'}),[]);
 assert.deepEqual(backgroundFiles(catalog,{accountType:'guest',selectedLesson}),[]);
});
test('constrained free connections skip speculative neighboring downloads',()=>{
 for(const connection of [{saveData:true},{effectiveType:'2g'},{downlink:0.5},{rtt:700}])
  assert.deepEqual(backgroundFiles(catalog,{accountType:'free',selectedLesson,connection}),['a1','a1-first','a1-image']);
});
test('paid installs include every catalog file even with data saver; the current lesson comes first',()=>{
 const files=backgroundFiles(catalog,{accountType:'subscribed',selectedLesson,connection:{saveData:true}});
 assert.deepEqual(files.slice(0,3),['a1','a1-first','a1-image']);
 assert.deepEqual(new Set(files),new Set(['a1','a1-first','a1-image','welcome','shell','mascot','b1','b1-image','a2','a2-image','a3','a3-image']));
});


test('free accounts prepare only paywall artwork before selecting a lesson',()=>{
 const art='assets/illustrations/sky-mobile.webp';
 const withPaywall={...catalog,helpers:[...catalog.helpers,art]};
 assert.deepEqual(backgroundFiles(withPaywall,{accountType:'free'}),[art]);
 assert.deepEqual(backgroundFiles(withPaywall,{accountType:'guest'}),[]);
 assert.ok(backgroundFiles(withPaywall,{accountType:'free',selectedLesson}).includes(art));
});
