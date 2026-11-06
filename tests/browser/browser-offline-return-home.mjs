import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';

const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
let accountNumber=0;
try {
 for(const width of [1440,390]) {
  for(const scenario of ['entry','jump']) {
   const context=await browser.newContext({viewport:{width,height:844},reducedMotion:'reduce'});
   try {
    const registration=await context.request.post(`${base}/api/auth/register`,{data:{username:`offline-home-${++accountNumber}`,phone:`05910000${String(accountNumber).padStart(2,'0')}`,password:'Home1234',curriculum:'gaza',path:'scientific'}});
    assert.equal(registration.status(),201);
    const {account}=await registration.json();
    const page=await context.newPage();
    await page.goto(`${base}/?page=learn`);
    await page.locator('[data-learner-dashboard]').waitFor();
    await page.waitForFunction(()=>!document.querySelector('#app-splash'));
    if(scenario==='jump') {
     await page.goto(`${base}/?subject=ict&lesson=database-management&part=access-basics`);
     await page.locator('[data-question-slider]').waitFor();
     await page.waitForFunction(()=>!document.querySelector('#app-splash,.media-pending')&&document.querySelector('.lesson-card')?.getAttribute('aria-busy')!=='true');
    }
    await page.route('**/api/progress',route=>route.abort());
    if(scenario==='entry') {
     // A real pending IndexedDB answer must survive leaving the failed view.
     await page.evaluate(async ownerId=>{
      const {createIndexedDbProgressAdapter}=await import('/src/services/indexeddb-progress.js');
      window.offlineReturnStore=createIndexedDbProgressAdapter();
      await window.offlineReturnStore.enqueue({id:'offline-return-pending',type:'answer',value:{ownerId,subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1',correct:false}});
     },`account:${account.id}`);
     await page.evaluate(()=>{history.pushState(null,'','?subject=ict&lesson=database-management&part=access-basics');dispatchEvent(new PopStateEvent('popstate'));});
    } else await page.locator('[data-question-jump]').nth(1).click();
    await page.locator('[data-question-slider]').waitFor();
    await page.waitForFunction(()=>!document.querySelector('#app-splash,.media-pending')&&document.querySelector('.lesson-card')?.getAttribute('aria-busy')!=='true');
    await page.locator('[data-ui-lab-answer]').first().click();
    await page.locator('[data-ui-lab-check]').click();
    const sheet=page.locator('.super-invitation[open][data-mode="connection"]');
    await sheet.waitFor();
    const message=page.getByText('تعذّر فتح هذا السؤال. حسابك وتقدّمك محفوظان.',{exact:true});
    assert.equal(await message.isVisible(),false);
    assert.equal(await sheet.locator('[data-heart-resume]').textContent(),'العودة إلى مسار المادة');
    await sheet.locator('[data-heart-resume]').click();
    await page.locator('.subject-roadmap').waitFor({state:'visible'});
    await page.waitForFunction(()=>!document.body.querySelector('.main.lesson-mode')&&!document.querySelector('.super-invitation[open]'));
    const url=new URL(page.url());
    assert.equal(url.searchParams.get('subject'),'ict');
    for(const key of ['lesson','part','question'])assert.equal(url.searchParams.has(key),false);
    if(scenario==='entry') {
     assert.equal(await page.evaluate(owner=>window.offlineReturnStore.pending(owner).then(updates=>updates.some(update=>update.id==='offline-return-pending')),`account:${account.id}`),true);
     await page.evaluate(()=>window.offlineReturnStore.close());
    }
    console.log(`${width}px/${scenario}: offline browsing stays available; a new answer requires connection, Back returns to the subject home, and pending work is preserved.`);
   } finally {await context.close();}
  }
 }
} finally {await browser.close();await app.close();}
