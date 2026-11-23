import assert from 'node:assert/strict';
import { mkdtemp,mkdir,rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright';
import { findChrome } from './browser-session.mjs';
import { createAppServer } from '../../src/server/app-server.mjs';
import { readRuntimeConfig } from '../../src/server/runtime-config.mjs';
import { provisionOwner } from '../../scripts/owner-account.mjs';

const directory = await mkdtemp(path.join(tmpdir(),'khutwa-reports-browser-'));
const databasePath = path.join(directory,'accounts.sqlite'),root = path.resolve('.');
const app = await createAppServer({root,config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:databasePath},{root}),logger:()=>{}});
const base = `http://127.0.0.1:${await app.listen()}`;
const browser = await chromium.launch({executablePath:await findChrome(),headless:true,args:['--no-sandbox']});
const output = '/tmp/khutwa-student-reports';await mkdir(output,{recursive:true});
try {
  await provisionOwner({databasePath,username:'report-owner',password:'Owner1234'});
  // Leave a sparse first account page, then a real reported flashcard question.
  for (let index=0;index<21;index++) await app.accountStore.createAccount({username:`report-student-${index}`,password:'Student123',curriculum:'gaza',path:'scientific'});
  const {account} = await app.accountStore.createAccount({username:'سارة-تجربة',password:'Student123',curriculum:'gaza',path:'scientific'});
  const location = {subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1'};
  app.accountStore.questionFeedback.save(account.id,{...location,type:'report',reason:'answer',details:'أرجو مراجعة الإجابة. <script>window.reportInjected=true</script>'});
  app.accountStore.questionFeedback.save(account.id,{...location,type:'report',reason:'display',details:''});
  for (const width of [1440,390]) {
    const context = await browser.newContext({viewport:{width,height:900},isMobile:width<600,
      userAgent:width<600 ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Mobile/15E148 Safari/604.1' : 'Mozilla/5.0 (X11; Linux x86_64) Chrome/143.0.0.0 Safari/537.36'});
    const signIn = await context.request.post(base+'/api/auth/sign-in',{data:{identifier:'report-owner',password:'Owner1234'}});
    assert.equal(signIn.status(),200,await signIn.text());
    const page = await context.newPage(),errors = [];page.on('pageerror',error => errors.push(error.message));
    let failing = false;
    await page.route('**/api/owner/question-reports?*',async route => {
      if (failing) return route.fulfill({status:404,contentType:'application/json',body:JSON.stringify({error:'البلاغات غير متاحة الآن. حاول لاحقًا.'})});
      await route.continue();
    });
    await page.goto(base+'/students');
    try {await page.locator('.student').first().waitFor({timeout:10000});}
    catch (error) {throw new Error(`${error.message}\nBrowser errors: ${JSON.stringify(errors)}\nPage: ${(await page.locator('body').innerText()).slice(0,1500)}`);}
    await page.locator('[data-dashboard-page="reports"]').click();
    await page.locator('.report-card').first().waitFor();
    assert.equal(await page.locator('.report-card').count(),2,'the UI follows sparse account pages');
    assert.equal(await page.locator('#students-panel').isVisible(),false);
    assert.equal(await page.locator('#student-search').isVisible(),false);
    assert.equal(await page.evaluate(() => window.reportInjected),undefined,'student notes are escaped');
    assert.ok(await page.locator('.report-note').first().textContent());
    await page.locator('[data-report-preview]').first().locator('summary').click();
    await page.locator('.report-published-question').waitFor();
    assert.ok((await page.locator('.report-published-question').textContent()).includes('الإجابة'));
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),false);
    assert.equal(await page.locator('.report-card').first().evaluate(node => node.scrollWidth > node.clientWidth),false);
    await page.screenshot({path:`${output}/${width}-reported-questions.png`,fullPage:true});
    failing = true;await page.locator('#refresh-reports').click();
    await page.waitForFunction(() => document.querySelector('#report-status').textContent.includes('تعذّر'));
    assert.equal(await page.locator('.report-card').count(),2,'a failed refresh preserves shown reports');
    await page.reload();await page.locator('[data-dashboard-page="reports"]').click();
    await page.waitForFunction(() => document.querySelector('#question-reports').textContent.includes('تعذّر تحميل البلاغات'));
    assert.equal(await page.locator('#question-reports').textContent().then(text => text.includes('لا توجد بلاغات')),false,'unsupported backends are an error, never an empty report list');
    failing = false;await page.locator('#refresh-reports').click();await page.locator('.report-card').first().waitFor();
    await page.locator('[data-filter="all"]').click();await page.locator('.student').first().waitFor();
    assert.equal(await page.locator('#reports-panel').isVisible(),false);
    assert.equal(await page.locator('#student-search').isVisible(),true);
    assert.deepEqual(errors,[]);
    await context.close();
  }
  console.log('Reported questions passed: owner data, sparse paging, safe notes, question/answer preview, failed refresh/retry, unsupported backend and desktop/mobile layout.');
} finally {await browser.close();await app.close();await rm(directory,{recursive:true,force:true});}
