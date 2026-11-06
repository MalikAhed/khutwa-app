import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { createAppServer } from '../../src/server/app-server.mjs';
import { readRuntimeConfig } from '../../src/server/runtime-config.mjs';
import { loadSubjectLessonPart } from '../../src/data/lessons/subject-lesson-registry.js';
import { findChrome } from './browser-session.mjs';

const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
try {
  for(const width of [1440,390]) {
    const context=await browser.newContext({viewport:{width,height:844},reducedMotion:'reduce'});
    try {
      const registration=await context.request.post(`${base}/api/auth/register`,{data:{username:`daily-${width}`,phone:width===1440?'0591234567':'0591234568',password:'Hearts123',curriculum:'gaza',path:'scientific'}});
      assert.equal(registration.status(),201);
      const {account}=await registration.json();
      const headers={'X-Progress-Owner':`account:${account.id}`};
      const part={subjectId:'ict',lessonId:'smartphone-operating-systems',partId:'android-features'};
      const stepId=(await loadSubjectLessonPart(part.subjectId,part.lessonId,part.partId)).steps.find(step=>step.type==='question').id;
      for(let n=0;n<7;n++)assert.equal((await context.request.post(`${base}/api/progress`,{headers,data:{...part,id:`daily-seed-${n}`,type:'answer',stepId,correct:false}})).status(),200);
      const page=await context.newPage();
      await page.goto(`${base}/?page=learn`);
      await page.locator('[data-learner-dashboard]').waitFor();
      await page.waitForFunction(()=>!document.querySelector('#app-splash'));
      assert.equal(await page.locator('[data-super-trial-offer]:visible,[data-super-trial-countdown]:visible').count(),0);
      await page.goto(`${base}/?subject=ict&lesson=${part.lessonId}&part=${part.partId}&question=${stepId}`);
      const dialog=page.locator('.heart-depletion[open]');
      await dialog.waitFor();
      await page.waitForFunction(()=>document.querySelector('.heart-depletion')?.classList.contains('is-ready'));
      assert.match(await dialog.locator('[data-heart-status]').textContent(),/منتصف الليل بتوقيت فلسطين/);
      assert.equal(await dialog.locator('[data-heart-trial]').isVisible(),false);
      assert.match(await dialog.locator('[data-heart-timer]').textContent(),/^\d{2}:\d{2}:\d{2}$/);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
      await dialog.locator('[data-heart-close]').click();
      await page.locator('[data-learner-dashboard]').waitFor();
      await page.goto(`${base}/?subject=ict&lesson=${part.lessonId}&part=${part.partId}&question=${stepId}`);
      await dialog.waitFor();
      // Bypass the modal only to test hostile client clock changes against the server.
      await dialog.evaluate(node=>node.close());
      await page.evaluate(()=>{Date.now=()=>new Date('2036-01-01T12:00:00Z').getTime();});
      await page.locator('[data-ui-lab-answer]').first().click();
      await page.locator('[data-ui-lab-check]').click();
      await page.waitForFunction(()=>document.querySelector('.level-feedback')?.textContent.includes('نفدت'));
      assert.equal((await (await context.request.get(`${base}/api/progress`,{headers})).json()).resources.hearts,0);
      assert.equal((await context.request.post(`${base}/api/progress`,{headers,data:{...part,id:'clock-forged-answer',type:'answer',stepId,correct:true,date:'2026-01-01'}})).status(),429);
      await page.locator('.heart-depletion').evaluate(node=>node.close());
      await context.route('**/api/progress',route=>route.abort());
      await page.locator('[data-ui-lab-check]').click();
      await page.waitForFunction(()=>document.querySelector('.level-feedback')?.textContent.includes('اتصل بالإنترنت'));
      assert.equal(await page.locator('[data-ui-lab-check]').isDisabled(),false);
      // Logout keeps the device identity, and signing in again uses that slot.
      const before=(await context.cookies()).find(c=>c.name==='tawjihi_device');
      assert.equal((await context.request.post(`${base}/api/auth/sign-out`)).status(),200);
      assert.equal((await context.cookies()).find(c=>c.name==='tawjihi_device')?.value,before.value);
      assert.equal((await context.request.post(`${base}/api/auth/sign-in`,{data:{identifier:`daily-${width}`,password:'Hearts123'}})).status(),200);
      console.log(`${width}px: retired trial hidden, midnight message, clock tampering, offline answer block and persistent browser registration passed.`);
    } finally {await context.close();}
  }
} finally {await browser.close();await app.close();}
