import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { createAppServer } from '../../src/server/app-server.mjs';
import { readRuntimeConfig } from '../../src/server/runtime-config.mjs';
import { findChrome } from './browser-session.mjs';

const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
try {
 for(const width of [1440,390]) {
  const context=await browser.newContext({viewport:{width,height:844},reducedMotion:'reduce'});
  try {
   const registration=await context.request.post(`${base}/api/auth/register`,{data:{username:`navigation-confirmation-${width}`,phone:width===390?'0591234567':'0591234568',password:'Hearts123',curriculum:'gaza',path:'scientific'}});
   assert.equal(registration.status(),201);
   const {account}=await registration.json();
   const page=await context.newPage();
   await page.goto(`${base}/?subject=ict&lesson=database-management&part=access-basics`);
   await page.locator('[data-question-jump="exam-p09-q1-1"]').click();
   await page.locator('[data-ui-lab-answer][data-correct=true]').waitFor();
   await page.waitForFunction(()=>!document.querySelector('#app-splash,.media-pending'));
   await page.locator('[data-ui-lab-answer][data-correct=true]').click();
   await page.locator('[data-ui-lab-check]').click();
   await page.locator('.level-feedback.is-correct').waitFor();
   const readState=async()=>await(await context.request.get(`${base}/api/progress`,{headers:{'X-Progress-Owner':`account:${account.id}`}})).json();
   const moves=[];
   await page.route('**/api/progress',async route=>{
    const request=route.request();
    const body=request.method()==='POST'?request.postDataJSON():null;
    if(body?.type==='question-navigation') {moves.push(body);await route.abort();return;}
    await route.continue();
   });
   await page.evaluate(()=>{const button=document.querySelector('[data-ui-lab-check]');button.click();button.click();});
   await page.waitForFunction(()=>document.querySelector('[data-live-authored-step]')?.dataset.lessonStep==='exam-p57-q1-b2');
   assert.equal(moves.length,0,'Continue needs no navigation permission');
   assert.equal(await page.locator('[data-question-skips]').count(),0);
   const state=await readState();
   assert.equal(state.resources.hearts,9,'only the answer spends a heart');
   console.log(`${width}px: rapid Continue clicks move once without any navigation API request.`);
  } finally {await context.close();}
 }
} finally {await browser.close();await app.close();}
