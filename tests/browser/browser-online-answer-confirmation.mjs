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
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  const registration=await context.request.post(`${base}/api/auth/register`,{data:{username:'online-answer',phone:'0591234567',password:'Hearts123',curriculum:'gaza',path:'scientific'}});
  assert.equal(registration.status(),201);
  const {account}=await registration.json();
  const page=await context.newPage();
  let drop=true;
  const ids=[];
  await page.route('**/api/progress',async route=>{
    const request=route.request();
    const body=request.method()==='POST'?request.postDataJSON():null;
    if(body?.type==='answer') {
      ids.push(body.id);
      if(drop) {drop=false;await route.fetch();await route.abort();return;}
    }
    await route.continue();
  });
  await page.goto(`${base}/?subject=ict&lesson=database-management&part=access-basics&question=exam-p09-q1-1`);
  await page.locator('[data-ui-lab-answer][data-correct=true]').waitFor();
  await page.waitForFunction(()=>!document.querySelector('#app-splash,.media-pending'));
  await page.locator('[data-ui-lab-answer][data-correct=true]').click();
  await page.locator('[data-ui-lab-check]').click();
  await page.waitForFunction(()=>document.querySelector('.level-feedback.is-blocked')?.textContent.includes('احتُفظ'));
  assert.equal(await page.locator('.level-feedback.is-correct').count(),0,'a lost acknowledgement must not authorize the result');
  assert.equal(await page.locator('.lesson-top-title').getAttribute('aria-valuenow'),'0','unconfirmed answers do not enter lesson progress or result totals');
  const balance=async()=> (await (await context.request.get(`${base}/api/progress`,{headers:{'X-Progress-Owner':`account:${account.id}`}})).json()).resources.hearts;
  assert.equal(await balance(),7,'starter lessons do not consume hearts even when the reply is lost');
  await page.locator('[data-ui-lab-check]').click();
  await page.locator('.level-feedback.is-correct').waitFor();
  assert.equal(await page.locator('.lesson-top-title').getAttribute('aria-valuenow'),'1','the retained answer enters lesson progress after acknowledgement');
  assert.ok(ids.length>=2);
  assert.equal(new Set(ids).size,1,'the UI retries the original persisted answer ID');
  assert.equal(await balance(),7,'retry does not cost a heart');
  await context.close();
  console.log('Free-answer UI waits for server confirmation and retries a lost receipt without losing the answer or spending twice.');
} finally {await browser.close();await app.close();}
