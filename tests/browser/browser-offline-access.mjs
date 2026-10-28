import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {gzipSync} from 'node:zlib';
import {chromium,webkit} from 'playwright';
const engine=process.env.OFFLINE_BROWSER==='webkit'?webkit:chromium;
import {findChrome} from './browser-session.mjs';
import {packageApp} from '../../scripts/package-app.mjs';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';

// Packaged, versioned files with disposable HTTP accounts; never production data.
const root=await packageApp();
assert.ok((await readFile(path.join(root,'assets/lessons/ict/exams/classified-p127-nic.jpg'))).length,'legacy lesson image URL remains published');
const htmlPath=path.join(root,'index.html');
await writeFile(htmlPath,(await readFile(htmlPath,'utf8')).replace('name="learn-account-mode" content="fixture"','name="learn-account-mode" content="http"'));
const compressedHtml=gzipSync(await readFile(htmlPath));
const catalog=JSON.parse(await readFile(path.join(root,'content-manifest.json'),'utf8'));
const core=[...new Set([...catalog.onboarding,...catalog.helpers])];
const heldFiles=new Set(core.slice(Math.ceil(core.length*.86)).map(file=>'/'+file));
let holdPreparation=true, disconnected=false, startupFailures=0;
const app=await createAppServer({root,logger:()=>{},remoteBackend:async(request,response)=>{if(holdPreparation&&request.headers['x-learn-download']&&heldFiles.has(request.url)){response.writeHead(503).end();return true;}if(request.url==='/assets/app/icon-maskable-512.png'&&request.headers['x-learn-download']&&startupFailures<4){startupFailures++;response.writeHead(503).end();return true;}if(disconnected){request.socket.destroy();return true;}if(request.url.split('?')[0]==='/index.html'){response.writeHead(301,{Location:'/'}).end();return true;}if(request.url.split('?')[0]==='/'){response.writeHead(200,{'Content-Type':'text/html','Content-Encoding':'gzip','Content-Length':compressedHtml.length});response.end(compressedHtml);return true;}return false;},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',DEV_AUTO_LOGIN:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
await app.accountStore.createAccount({username:'offline-test',phone:'0591234567',curriculum:'gaza',path:'scientific',password:'Test-only-123'});
const base=`http://127.0.0.1:${await app.listen()}`;
const profile=await mkdtemp(path.join(tmpdir(),'khutwa-offline-'));
const options={...(engine===chromium?{executablePath:await findChrome(),args:['--no-sandbox']}:{isMobile:true,hasTouch:true}),headless:true,viewport:{width:390,height:844},reducedMotion:'reduce'};
let context;
// Playwright 1.63 WebKit kills service-worker responses with setOffline(true).
// Deny every origin connection instead; no API or asset can reach the server.
const disconnect=async value=>{disconnected=value;};
const ready=async page=>{await page.locator('[data-learner-dashboard]').waitFor({timeout:60000});await page.waitForFunction(()=>!document.querySelector('#app-splash'),{timeout:60000});};
try {
 context=await engine.launchPersistentContext(profile,options);
 await context.addInitScript(()=>{const nativeNow=Date.now;window.clockOffset=0;Date.now=()=>nativeNow()+window.clockOffset;});
 const login=await context.request.post(`${base}/api/auth/sign-in`,{data:{identifier:'offline-test',password:'Test-only-123'}});assert.equal(login.status(),200);
 const account=(await login.json()).account,owner=`account:${account.id}`;
 await context.addInitScript(()=>{
   window.offlineConfirmationDrops=0;
   window.downloadRequests=[];
   const nativeFetch=window.fetch;
   window.fetch=(url,options)=>{
     if(options?.headers?.['X-Learn-Download'])window.downloadRequests.push(new URL(url,location.href).href);
     return nativeFetch(url,options);
   };
   // Core preparation must continue with data saver; optional bulk lessons can wait.
   Object.defineProperty(navigator,'connection',{configurable:true,value:{saveData:true,addEventListener(){}}});
   const post=ServiceWorker.prototype.postMessage;
   ServiceWorker.prototype.postMessage=function(message,...rest){
     if(message?.type==='OFFLINE_READY'&&window.offlineConfirmationDrops++===0)return;
     return post.call(this,message,...rest);
   };
 });
 let page=await context.newPage();
 page.on('pageerror',error=>console.error('browser:',error.message));
 await page.goto(base);await ready(page);
 await page.waitForFunction(()=>Number(document.querySelector('[data-offline-download-status] [role=progressbar]')?.getAttribute('aria-valuenow'))>=85);
 const checkpoint=await page.evaluate(async()=>{
   const version=document.querySelector('meta[name=learn-release]').content;
   return (await (await caches.open(`khutwa-content:/:${version}`)).keys()).map(request=>request.url);
 });
 // Slow image decoding must never hide the section or disable its controls.
 const navigation=await page.evaluate(()=>{
   const decode=HTMLImageElement.prototype.decode;
   HTMLImageElement.prototype.decode=()=>new Promise(()=>{});
   const started=performance.now();
   let interactive=true;
   for(const section of ['rated-questions','learn','rated-questions','learn']){
     document.querySelector(`.nav-item[data-page="${section}"]`).click();
     const surface=document.querySelector('.course-units');
     interactive&&=surface.dataset.page===section&&!surface.classList.contains('media-pending')
       &&!surface.querySelector('[inert]')&&Boolean(surface.querySelector('.subject-card'));
   }
   HTMLImageElement.prototype.decode=decode;
   return {interactive,elapsed:performance.now()-started};
 });
 assert.ok(navigation.interactive,'navigation remains visible and clickable while images are delayed');
 assert.ok(navigation.elapsed<1000,`four section changes took ${navigation.elapsed}ms`);
 await page.reload();await ready(page);
 await page.waitForFunction(()=>Number(document.querySelector('[data-offline-download-status] [role=progressbar]')?.getAttribute('aria-valuenow'))>=85);
 const repeated=await page.evaluate(saved=>window.downloadRequests.filter(url=>saved.includes(url)),checkpoint);
 assert.deepEqual(repeated,[],'reopening must skip every already saved file');
 holdPreparation=false;
 await page.evaluate(()=>window.dispatchEvent(new Event('online')));
 const originalDocument=await page.evaluate(()=>performance.timeOrigin);
 await page.waitForFunction(()=>document.querySelector('[data-offline-download-status] [role=progressbar]')?.getAttribute('aria-valuenow')==='99');
 await page.screenshot({path:'/tmp/khutwa-preparing-mobile.png'});
 await page.waitForFunction(()=>document.documentElement.dataset.offlineReady==='true',{timeout:120000});
 assert.match(await page.locator('[data-offline-download-status]').innerText(),/جاهز للفتح/);
 assert.equal(startupFailures,4,'repeated startup failures recovered automatically');
 assert.equal(await page.evaluate(()=>performance.timeOrigin),originalDocument,'completion must not need a reload');
 assert.ok(await page.evaluate(()=>window.offlineConfirmationDrops)>=2,'lost confirmation is automatically retried');
 assert.equal(await page.locator('[data-offline-download-status] [role=progressbar]').getAttribute('aria-valuenow'),'100');
 for(const width of [320,390,1440]) {
   await page.setViewportSize({width,height:900});
   const geometry=await page.locator('[data-offline-download-status]').evaluate(card=>{
     const a=card.getBoundingClientRect(),b=card.closest('.learner-dashboard__hero').getBoundingClientRect(),c=card.closest('.learner-dashboard__hero').querySelector('header').getBoundingClientRect();
     const lines=[...card.querySelector('.offline-download-status__copy').children].every(el=>el.getBoundingClientRect().height<=parseFloat(getComputedStyle(el).lineHeight)+1&&el.scrollWidth<=el.clientWidth);
     return {height:a.height,lines,color:getComputedStyle(card.querySelector('.offline-download-status__ring')).color,headerInside:c.bottom<=b.bottom,inside:a.left>=b.left&&a.right<=b.right&&a.top>=b.top&&a.bottom<=b.bottom,overlap:a.left<c.right&&a.right>c.left&&a.top<c.bottom&&a.bottom>c.top,animation:getComputedStyle(card.querySelector('.offline-download-status__ring')).animationName};
   });
   assert.ok(geometry.inside);assert.ok(geometry.headerInside);assert.equal(geometry.overlap,false);assert.ok(geometry.lines,'exactly two text rows');assert.equal(geometry.color,'rgb(21, 155, 117)');if(width<700)assert.equal(geometry.height,52);assert.equal(geometry.animation,'none');
   await page.screenshot({path:`/tmp/khutwa-offline-ready-${width}.png`});
 }
 console.log(`Navigation stayed interactive (${Math.round(navigation.elapsed)}ms for four switches); partial preparation resumed without redownloading saved files.`);
 console.log('Repeated startup failures and a lost confirmation recovered to 100% without reload; responsive card fits.');
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
 // Buy one explanation online, then read it with every network connection denied.
 const explanationKey={subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1'};
 const purchased=await context.request.post(`${base}/api/progress`,{headers:{'X-Progress-Owner':owner},data:{type:'explanation-unlock',...explanationKey}});
 assert.equal(purchased.status(),200);
 const purchaseReceipt=await purchased.json();
 const questionUrl=stepId=>`${base}/?${new URLSearchParams({subject:'ict',lesson:'database-management',part:'access-basics',question:stepId})}`;
 await page.goto(questionUrl(explanationKey.stepId));
 await page.locator('[data-question-explain]').waitFor();
 let explanationRequests=0;
 const trackExplanation=request=>{if(request.method()==='POST'&&request.postData()?.includes('explanation-unlock'))explanationRequests++;};
 page.on('request',trackExplanation);
 await disconnect(true);
 await page.locator('[data-question-explain]').click();
 await page.locator('.question-explanation-dialog .markdown-rendered').waitFor({timeout:3000});
 assert.match(await page.locator('.question-explanation-dialog').innerText(),/MySQL/);
 assert.equal(explanationRequests,0);
 await page.locator('[data-explanation-close]').click();
 await disconnect(false);
 const trial=await context.request.post(`${base}/api/progress`,{headers:{'X-Progress-Owner':owner},data:{type:'super-trial'}});
 assert.equal(trial.status(),200);
 await page.goto(`${base}/?page=learn`);await ready(page);
 // Reproduce an existing production cache created through Pages' HTML redirect.
 await page.evaluate(async version=>{const response=await fetch('/index.html');if(!response.redirected)throw new Error('Expected production redirect');await(await caches.open(`khutwa-content:/:${version}`)).put(new URL('/index.html',location.href),response);},version);
 await disconnect(true);
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
 if(engine===chromium) await (await context.newCDPSession(page)).send('Network.clearBrowserCache');
 await context.close();
 context=await engine.launchPersistentContext(profile,options);
 await context.addInitScript(()=>{const nativeNow=Date.now;window.clockOffset=0;Date.now=()=>nativeNow()+window.clockOffset;});await disconnect(true);
 page=await context.newPage();page.on('pageerror',error=>console.error('browser:',error.message));
 await page.goto(`${base}/?page=learn`);await ready(page);
 assert.equal(await page.locator('.offline-access[open]').count(),0);
 const pending=()=>page.evaluate(async({version,owner})=>{
  const {createIndexedDbProgressAdapter}=await import(`/src/services/indexeddb-progress.js?v=${version}`);
  const local=createIndexedDbProgressAdapter();const rows=await local.pending(owner);local.close();return rows;
 },{version,owner});
 assert.equal((await pending()).length,1);
 console.log('Browser closed and reopened offline; identity and pending answer survived.');
 page.on('request',trackExplanation);
 // A never-opened explanation in a downloaded lesson is available through active Super.
 await page.goto(questionUrl('exam-p57-q1-b2'));
 await page.locator('[data-question-explain]').waitFor();
 assert.equal(await page.locator('[data-question-explain] .explanation-included').count(),1);
 await page.locator('[data-question-explain]').click();
 await page.locator('.question-explanation-dialog .markdown-rendered').waitFor({timeout:3000});
 assert.match(await page.locator('.question-explanation-dialog').innerText(),/النماذج/);
 assert.equal(explanationRequests,0,'offline explanations never send purchase requests');
 await page.screenshot({path:'/tmp/khutwa-explanation-offline.png'});
 await page.locator('[data-explanation-close]').click();
 assert.equal((await pending()).length,1,'reading explanations preserves pending answers');
 await page.goto(`${base}/?page=learn`);await ready(page);
 console.log('Purchased and first-open Super explanations render offline, including after browser restart.');
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
 await page.waitForFunction(()=>!document.querySelector('.offline-access button').disabled && document.querySelector('.offline-access [role=status]').textContent.includes('لم نتمكّن'));
 assert.equal(await page.locator('.offline-access[open]').count(),1,'retry without connectivity stays locked');
 await page.evaluate(()=>{Object.defineProperty(navigator,'onLine',{configurable:true,get:()=>false});});
 await disconnect(false);
 await page.locator('.offline-access button').click();
 await page.waitForFunction(()=>!document.querySelector('.offline-access[open]'),{timeout:30000});
 await page.waitForFunction(async({version,owner})=>{
  const {createIndexedDbProgressAdapter}=await import(`/src/services/indexeddb-progress.js?v=${version}`);const local=createIndexedDbProgressAdapter();
  const rows=await local.pending(owner);local.close();return rows.length===0;
 },{version,owner},{timeout:30000});
 const progress=await (await context.request.get(`${base}/api/progress`,{headers:{'X-Progress-Owner':owner}})).json();
 assert.ok(JSON.stringify(progress.records).includes(stepId),'server received the offline answer');
 assert.equal(progress.resources.gems,purchaseReceipt.resources.gems,'offline reading never charges gems');
 console.log('Clock rollback gate and reconnect preserved and synchronized the answer.');
 // A tab that stays open beyond seven days must also pause.
 await disconnect(true);
 await page.evaluate(()=>{window.clockOffset=8*86400000;window.dispatchEvent(new Event('focus'));});
 await page.locator('.offline-access[open]').waitFor();
 await page.reload();
 await page.locator('.app-splash__recovery:not([hidden])').waitFor({timeout:30000});
 assert.match(await page.locator('.app-splash__recovery').innerText(),/اتصل بالإنترنت/);
 const cachedUrls=await page.evaluate(async()=>{const urls=[];for(const name of await caches.keys())for(const request of await (await caches.open(name)).keys())urls.push(request.url);return urls;});
 assert.ok(!cachedUrls.some(url=>new URL(url).pathname.startsWith('/api/')||new URL(url).pathname==='/students'));
 console.log('Seven-day expiry survives reload; APIs and student pages never enter the cache.');
} catch(error) {
 const current=context?.pages().at(-1);
 if(current&&!current.isClosed())console.error(await current.evaluate(()=>({status:document.querySelector('[data-offline-download-status]')?.textContent,downloads:window.downloadRequests?.slice(-6)})).catch(()=>null));
 throw error;
} finally {await context?.close();await app.close();await rm(profile,{recursive:true,force:true});}
