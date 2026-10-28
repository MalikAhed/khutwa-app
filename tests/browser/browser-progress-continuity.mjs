import assert from 'node:assert/strict';
import {mkdtemp, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {chromium} from 'playwright';
import {findChrome} from './browser-session.mjs';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {loadSubjectLessonPart} from '../../src/data/lessons/subject-lesson-registry.js';

// Real browser IndexedDB + HTTP adapters, isolated SQLite and a disposable
// persistent browser profile. No live account or production backend is used.
const directory=await mkdtemp(path.join(tmpdir(),'khutwa-progress-continuity-'));
const root=path.resolve('.'), databasePath=path.join(directory,'accounts.sqlite');
const start=port=>createAppServer({root,config:readRuntimeConfig({PORT:String(port),LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:databasePath},{root}),logger:()=>{}});
let app=await start(0), context;
const port=await app.listen(), base=`http://127.0.0.1:${port}`;
const launch=()=>chromium.launchPersistentContext(path.join(directory,'browser'),{headless:true,executablePath:chrome,args:['--no-sandbox']});
const chrome=await findChrome();
try {
  const {account}=await app.accountStore.createAccount({username:'continuity-student',phone:'0598000067',curriculum:'gaza',path:'scientific',password:'Student123'});
  const owner=`account:${account.id}`;
  const session=app.accountStore.createSession(account.id);
  const key={subjectId:'ict',lessonId:'database-management',partId:'access-basics'};
  const lesson=await loadSubjectLessonPart(key.subjectId,key.lessonId,key.partId);
  const questions=lesson.steps.filter(step=>step.type==='question').slice(0,2).map(step=>step.id);
  assert.equal(questions.length,2);
  const open=async()=>{
    const page=await context.newPage();
    await page.route('**/src/bootstrap.js',route=>route.fulfill({contentType:'application/javascript',body:'// Adapter-focused test; the app shell is not started.'}));
    await page.goto(base,{waitUntil:'domcontentloaded'});
    await page.evaluate(async owner=>{
      window.owner=owner;
      window.continuity=(await import('/src/services/server-data-reset.js')).applyServerDataReset;
      await continuity();
      window.local=(await import('/src/services/indexeddb-progress.js')).createIndexedDbProgressAdapter();
      window.remote=(await import('/src/services/server-progress.js')).createServerProgressAdapter({local,onError:()=>{}});
    },owner);
    return page;
  };
  context=await launch();
  await context.addCookies([{name:'tawjihi_session',value:session.token,url:base,httpOnly:true,sameSite:'Strict',expires:Date.now()/1000+3600}]);
  let page=await open();
  const answer=(id,stepId,correct)=>({id,type:'answer',value:{ownerId:owner,...key,stepId,correct}});
  await page.evaluate(async update=>{await remote.update(update);await remote.sync(owner);},answer('confirmed-before-release',questions[0],true));
  const confirmed=app.accountStore.students.get(account.id);
  assert.equal(confirmed.questionsSolved,1);
  await context.setOffline(true);
  await page.evaluate(async update=>{await remote.update(update);await remote.sync(owner);},answer('pending-through-release',questions[1],false));
  assert.equal(await page.evaluate(()=>local.pending(owner).then(rows=>rows.length)),1);
  await context.close(); context=null;
  await app.close(); app=await start(port); await app.listen();
  context=await launch(); page=await open();
  assert.equal(await page.evaluate(()=>local.pending(owner).then(rows=>rows[0].id)),'pending-through-release','pending answer survives browser/server restart and continuity check');
  assert.equal(app.accountStore.students.get(account.id).totalXp,confirmed.totalXp,'confirmed XP survives restart');
  // Simulate losing the acknowledgement after the server durably saves it.
  await page.route('**/api/progress',async route=>{
    if(route.request().method()==='POST') {const response=await route.fetch();assert.equal(response.status(),200);await route.abort('failed');}
    else await route.continue();
  });
  assert.equal(await page.evaluate(()=>remote.sync(owner).then(()=>false,()=>true)),true);
  assert.equal(await page.evaluate(()=>local.pending(owner).then(rows=>rows.length)),1,'lost response cannot discard pending work');
  await page.unroute('**/api/progress');
  await page.evaluate(()=>remote.sync(owner));
  await page.evaluate(()=>remote.sync(owner));
  assert.equal(await page.evaluate(()=>local.pending(owner).then(rows=>rows.length)),0,'outbox clears only after acknowledgement');
  const saved=app.accountStore.students.get(account.id);
  assert.equal(saved.totalXp,confirmed.totalXp,'retry cannot inflate or erase XP');
  assert.equal(saved.questionsSolved,1);
  assert.equal(saved.parts[0].review.find(item=>item.stepId===questions[1]).misses,1,'lost-response retry applies the answer once');
  console.log('Progress continuity passed: confirmed answers and XP, offline outbox, browser/server restart, lost acknowledgement and idempotent reconnect.');
} finally {
  await context?.close();
  await app.close();
  await rm(directory,{recursive:true,force:true});
}
