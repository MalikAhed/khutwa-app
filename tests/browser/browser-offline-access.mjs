import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {chromium} from 'playwright';
import {findChrome} from './browser-session.mjs';
import {packageApp} from '../../scripts/package-app.mjs';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';

// Packaged, versioned files with disposable HTTP accounts; never production data.
const root=await packageApp();
const htmlPath=path.join(root,'index.html');
await writeFile(htmlPath,(await readFile(htmlPath,'utf8')).replace('name="learn-account-mode" content="fixture"','name="learn-account-mode" content="http"'));
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',DEV_AUTO_LOGIN:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
await app.accountStore.createAccount({username:'offline-test',phone:'0591234567',curriculum:'gaza',path:'scientific',password:'Test-only-123'});
const base=`http://127.0.0.1:${await app.listen()}`;
const profile=await mkdtemp(path.join(tmpdir(),'khutwa-offline-'));
const options={executablePath:await findChrome(),headless:true,args:['--no-sandbox'],viewport:{width:390,height:844},reducedMotion:'reduce'};
let context;
const ready=async page=>{await page.locator('[data-learner-dashboard]').waitFor({timeout:60000});await page.waitForFunction(()=>!document.querySelector('#app-splash'),{timeout:60000});};
try {
 context=await chromium.launchPersistentContext(profile,options);
 await context.addInitScript(()=>{const nativeNow=Date.now;window.clockOffset=0;Date.now=()=>nativeNow()+window.clockOffset;});
 const login=await context.request.post(`${base}/api/auth/sign-in`,{data:{identifier:'offline-test',password:'Test-only-123'}});assert.equal(login.status(),200);
 const account=(await login.json()).account,owner=`account:${account.id}`;
 let page=await context.newPage();
 page.on('pageerror',error=>console.error('browser:',error.message));
 await page.goto(base);await ready(page);
 await page.waitForFunction(()=>document.documentElement.dataset.offlineReady==='true',{timeout:120000});
 console.log('Complete offline shell saved.');
 const version=await page.locator('meta[name=learn-release]').getAttribute('content');
 await page.evaluate(async version=>{
  const {prioritizeLesson}=await import(`/src/app/background-loading.js?v=${version}`);
  prioritizeLesson('ict','database-management');
  const manifest=await (await fetch('/content-manifest.json')).json();
  const files=manifest.lessons.find(x=>x.subjectId==='ict'&&x.lessonId==='database-management').files;
  const cache=await caches.open(`khutwa-content:/:${version}`);
  for(let attempts=0;attempts<600;attempts++){
   if((await Promise.all(files.map(file=>cache.match(new URL(file,location.href))))).every(Boolean))return;
   await new Promise(resolve=>setTimeout(resolve,100));
  }
  throw new Error('Lesson not downloaded');
 },version);
 await context.setOffline(true);
 const stepId=await page.evaluate(async({version,owner})=>{
  const {createIndexedDbProgressAdapter}=await import(`/src/services/indexeddb-progress.js?v=${version}`);
  const {createSubjectProgressStore}=await import(`/src/services/subject-progress-store.js?v=${version}`);
  const {createServerProgressAdapter}=await import(`/src/services/server-progress.js?v=${version}`);
  const {loadSubjectLessonPart}=await import(`/src/data/lessons/subject-lesson-registry.js?v=${version}`);
  const lesson=await loadSubjectLessonPart('ict','database-management','access-basics');
  const stepId=lesson.steps.find(step=>step.type==='question').id;
  const local=createIndexedDbProgressAdapter();
  const store=createSubjectProgressStore({adapter:createServerProgressAdapter({local}),onError:()=>{}});
  await store.ready(owner);
  const result=await store.recordAnswer({ownerId:owner,subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId,correct:true});
  if(result.status!=='saved'||(await local.pending(owner)).length!==1)throw new Error('Answer not durable');
  store.close();return stepId;
 },{version,owner});
 await (await context.newCDPSession(page)).send('Network.clearBrowserCache');
 await context.close();
 context=await chromium.launchPersistentContext(profile,options);
 await context.addInitScript(()=>{const nativeNow=Date.now;window.clockOffset=0;Date.now=()=>nativeNow()+window.clockOffset;});await context.setOffline(true);
 page=await context.newPage();page.on('pageerror',error=>console.error('browser:',error.message));
 await page.goto(`${base}/?page=learn`);await ready(page);
 assert.equal(await page.locator('.offline-access[open]').count(),0);
 const pending=()=>page.evaluate(async({version,owner})=>{
  const {createIndexedDbProgressAdapter}=await import(`/src/services/indexeddb-progress.js?v=${version}`);
  const local=createIndexedDbProgressAdapter();const rows=await local.pending(owner);local.close();return rows;
 },{version,owner});
 assert.equal((await pending()).length,1);
 console.log('Browser closed and reopened offline; identity and pending answer survived.');
 // Ordinary wall-clock rollback must immediately block learning and stay blocked.
 await page.evaluate(()=>{window.clockOffset=-3600000;window.dispatchEvent(new Event('focus'));});
 await page.locator('.offline-access[open]').waitFor();
 await page.screenshot({path:'/tmp/khutwa-offline-mobile.png'});
 await page.keyboard.press('Escape');assert.equal(await page.locator('.offline-access[open]').count(),1);
 assert.equal((await pending()).length,1);
 await page.evaluate(()=>{window.clockOffset=0;window.dispatchEvent(new Event('focus'));});
 assert.equal(await page.locator('.offline-access[open]').count(),1);
 await page.setViewportSize({width:1440,height:900});
 assert.ok(await page.locator('.offline-access').evaluate(el=>el.getBoundingClientRect().width<=innerWidth));
 await page.screenshot({path:'/tmp/khutwa-offline-desktop.png'});
 await page.locator('.offline-access button').click();
 assert.equal(await page.locator('.offline-access[open]').count(),1,'retry without connectivity stays locked');
 await context.setOffline(false);
 await page.waitForFunction(()=>!document.querySelector('.offline-access[open]'),{timeout:30000});
 await page.waitForFunction(async({version,owner})=>{
  const {createIndexedDbProgressAdapter}=await import(`/src/services/indexeddb-progress.js?v=${version}`);const local=createIndexedDbProgressAdapter();
  const rows=await local.pending(owner);local.close();return rows.length===0;
 },{version,owner},{timeout:30000});
 const progress=await (await context.request.get(`${base}/api/progress`,{headers:{'X-Progress-Owner':owner}})).json();
 assert.ok(JSON.stringify(progress.records).includes(stepId),'server received the offline answer');
 console.log('Clock rollback gate and reconnect preserved and synchronized the answer.');
 // A tab that stays open beyond seven days must also pause.
 await context.setOffline(true);
 await page.evaluate(()=>{window.clockOffset=8*86400000;window.dispatchEvent(new Event('focus'));});
 await page.locator('.offline-access[open]').waitFor();
 await page.reload();
 await page.locator('.app-splash__recovery:not([hidden])').waitFor({timeout:30000});
 assert.match(await page.locator('.app-splash__recovery').innerText(),/اتصل بالإنترنت/);
 const cachedUrls=await page.evaluate(async()=>{const urls=[];for(const name of await caches.keys())for(const request of await (await caches.open(name)).keys())urls.push(request.url);return urls;});
 assert.ok(!cachedUrls.some(url=>new URL(url).pathname.startsWith('/api/')||new URL(url).pathname==='/students'));
 console.log('Seven-day expiry survives reload; APIs and student pages never enter the cache.');
} finally {await context?.close();await app.close();await rm(profile,{recursive:true,force:true});}
