import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { startPreviewServer } from '../../scripts/preview-server.mjs';
import { findChrome } from './browser-session.mjs';
import { backgroundFiles } from '../../src/app/background-loading.js';

const server=await startPreviewServer({root:process.env.PREVIEW_ROOT});
const browser=await chromium.launch({headless:true,executablePath:await findChrome(),args:['--no-sandbox']});
try {
 const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
 await context.addInitScript(()=>{
  window.backgroundRequests=[];
  const fetch=window.fetch;
  window.fetch=(url,options)=>{
   if(options?.headers?.['X-Learn-Download'])window.backgroundRequests.push(new URL(url,location.href).href);
   return fetch(url,options);
  };
  Object.defineProperty(navigator,'connection',{value:{saveData:true,addEventListener(){}},configurable:true});
 });
 const page=await context.newPage();
 await page.goto(server.base+'?flow=sign-in');
 await page.waitForFunction(()=>!document.querySelector('#app-splash'));
 await page.locator('[name=identifier]').fill('free');
 await page.locator('[name=password]').fill('Learn123');
 await page.locator('[data-sign-in-form] [type=submit]').click();
 await page.locator('[data-learner-dashboard]').waitFor();
 await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
 for(const width of [390,1440]) {
  await page.setViewportSize({width,height:900});
  assert.equal(await page.locator('[data-offline-download-status]').isVisible(),false);
 }
 await page.waitForTimeout(1500);
 assert.deepEqual(await page.evaluate(()=>window.backgroundRequests),[],'free Home never downloads the complete catalog');
 const manifest=await page.evaluate(()=>fetch('content-manifest.json').then(r=>r.json()));
 const target=manifest.lessons.find(x=>x.subjectId==='physics');
 const allowed=backgroundFiles(manifest,{accountType:'free',selectedLesson:target,connection:{saveData:true}}).map(file=>new URL(file,server.base).href);
 const cdp=await context.newCDPSession(page);
 await cdp.send('Network.enable');
 await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:128*1024,uploadThroughput:64*1024,connectionType:'cellular3g'});
 const start=Date.now();
 await page.locator('[data-subject=physics]').click();
 await page.locator('.subject-roadmap').waitFor();
 await page.locator(`[data-roadmap-lesson="${target.lessonId}"][data-roadmap-part]`).first().click();
 if(await page.locator('[data-bubble-start]').count())await page.locator('[data-bubble-start]').click();
 await page.locator('[data-live-authored-step]').waitFor({timeout:30000});
 await page.waitForFunction(()=>!document.querySelector('.media-pending'));
 const entered=Date.now()-start;
 const cacheDeadline=Date.now()+60000;
 while(!await page.evaluate(async({files,version})=>{
  const cache=await caches.open(`khutwa-content:${new URL('./',document.baseURI).pathname}:${version}`);
  return (await Promise.all(files.map(file=>cache.match(new URL(file,document.baseURI))))).every(Boolean);
 },{files:target.files,version:manifest.version})) {
  assert.ok(Date.now()<cacheDeadline,'selected lesson finishes caching');
  await page.waitForTimeout(100);
 }
 await page.waitForTimeout(1800);
 const requests=await page.evaluate(()=>window.backgroundRequests);
 assert.deepEqual(requests.filter(file=>!allowed.includes(file)),[],'data-saving free connection downloads only the selected lesson');
 assert.equal(await page.evaluate(()=>document.documentElement.dataset.offlineReady),undefined);
 const warmed=await page.evaluate(async files=>{
  const start=performance.now();
  for(const file of files){const response=await fetch(file);if(!response.ok)throw Error(file);await response.arrayBuffer();}
  return Math.round(performance.now()-start);
 },target.files);
 console.log(`Free slow-link check passed: 150ms latency, 128KiB/s; lesson interactive in ${entered}ms; ${target.files.length} warmed files replayed in ${warmed}ms. Free status stays hidden at 390/1440px; no unrelated catalog downloads.`);
 await context.close();
} finally {await browser.close();await server.close();}
