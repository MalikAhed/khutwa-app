import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';

const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
let count=0;
const route='/?subject=ict&lesson=database-management&part=access-basics';
try {
 for(const width of [1440,390])for(const scenario of ['entry','jump']) {
  const context=await browser.newContext({viewport:{width,height:844},reducedMotion:'reduce'});
  try {
   const registered=await context.request.post(`${base}/api/auth/register`,{data:{username:`api-error-${++count}`,phone:`05910000${String(count).padStart(2,'0')}`,password:'Preview123',curriculum:'gaza',path:'scientific'}});
   assert.equal(registered.status(),201);
   const page=await context.newPage();
   let current,target;
   if(scenario==='jump') {
    await page.goto(base+route);
    await page.locator('[data-question-slider]').waitFor();
    await page.waitForFunction(()=>!document.querySelector('#app-splash,.media-pending')&&document.querySelector('.lesson-card')?.getAttribute('aria-busy')!=='true');
    current=await page.locator('[data-live-authored-step]').getAttribute('data-lesson-step');
    target=await page.locator('[data-question-jump]').nth(1).getAttribute('data-question-jump');
   }
   let navigationCalls=0;
   const rejectLegacyNavigation=async request=>{
    const payload=request.request().postDataJSON();
    if(payload?.type==='question-navigation'){navigationCalls++;await request.fulfill({status:422,contentType:'application/json',body:JSON.stringify({error:'Invalid progress update.'})});}
    else await request.continue();
   };
   await page.route('**/api/progress',rejectLegacyNavigation);
   if(scenario==='entry')await page.goto(base+route);
   else await page.locator(`[data-question-jump="${target}"]`).click();
   await page.locator('[data-question-slider]').waitFor();
   if(scenario==='jump')await page.waitForFunction(id=>document.querySelector('[data-live-authored-step]')?.dataset.lessonStep===id,target);
   assert.equal(navigationCalls,0,'unlimited navigation never reaches the incompatible action');
   assert.equal(await page.locator('.super-invitation[data-mode="connection"][open]').count(),0);
   assert.equal(await page.locator('[data-navigation-error],[data-question-skips]').count(),0);
   console.log(`${width}px/${scenario}: legacy navigation API is never called; questions remain freely available.`);
  }finally{await context.close();}
 }
}finally{await browser.close();await app.close();}
