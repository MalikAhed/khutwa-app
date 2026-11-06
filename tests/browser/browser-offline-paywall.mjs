import assert from 'node:assert/strict';
import {readFile,writeFile,mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {DatabaseSync} from 'node:sqlite';
import {chromium,webkit} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';
import {getSubjectRoadmap} from '../../src/data/subject-roadmaps.js';
import {SUPER_PAYWALL_ASSETS} from '../../src/domain/super-plans.js';
const root=path.resolve(process.env.PREVIEW_ROOT||'_site');
const htmlPath=path.join(root,'index.html');
await writeFile(htmlPath,(await readFile(htmlPath,'utf8')).replace('name="learn-account-mode" content="fixture"','name="learn-account-mode" content="http"'));
const directory=await mkdtemp(path.join(tmpdir(),'khutwa-paywall-'));
const databasePath=path.join(directory,'accounts.sqlite');
let disconnected=false;
const app=await createAppServer({root,logger:()=>{},remoteBackend:async(request)=>{if(disconnected){request.socket.destroy();return true;}return false;},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',DEV_AUTO_LOGIN:'0',ACCOUNTS_DATABASE_PATH:databasePath},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const starter=getSubjectRoadmap('physics').units.flatMap(u=>u.lessons).find(l=>l.id==='momentum-impulse');
const route=key=>`/?${new URLSearchParams(key)}`;
const paid={subject:'ict',lesson:'smartphone-operating-systems',part:'android-features'};
const freeStarter={subject:'physics',lesson:starter.id,part:starter.parts[0].id};
const later=getSubjectRoadmap('physics').units.flatMap(u=>u.lessons).find(l=>l.id==='electric-current-resistance');
const unpurchased={subject:'physics',lesson:later.id,part:later.parts[0].id};
const ready=async page=>{await page.waitForFunction(()=>!document.querySelector('#app-splash'));};
const navigate=async(page,key)=>page.evaluate(url=>{history.pushState({},'',url);dispatchEvent(new PopStateEvent('popstate'));},route(key));
try {
 for(const [engine,width] of [[chromium,1440],[webkit,390]]) {
  const browser=await engine.launch(engine===chromium?{executablePath:await findChrome(),args:['--no-sandbox']}:{headless:true});
  try {
   for(const type of ['free','subscribed']) {
    disconnected=false;
    const context=await browser.newContext({viewport:{width,height:900},isMobile:width<700,hasTouch:width<700,reducedMotion:'reduce'});
    try {
     const created=await app.accountStore.createAccount({username:`offline-${engine.name()}-${type}`,phone:`0591234${engine===chromium?'1':'2'}${type==='free'?'01':'02'}`,password:'Offline123',curriculum:'gaza',path:'scientific'});
     const account=created.account;
     const db=new DatabaseSync(databasePath);
     if(type==='subscribed') {
      db.prepare("UPDATE accounts SET account_type='subscribed' WHERE id=?").run(account.id);
      db.prepare('INSERT INTO account_subscription_scopes VALUES(?,?)').run(account.id,'["ict"]');
     }
     db.prepare('INSERT OR REPLACE INTO learner_resources(account_id,hearts,gems,refill_at) VALUES(?,0,0,?)').run(account.id,Date.now());db.close();
     const login=await context.request.post(`${base}/api/auth/sign-in`,{data:{identifier:account.username,password:'Offline123'}});assert.equal(login.status(),200);
     await context.route('**/api/auth/session',async request=>{
      if(disconnected){await request.abort();return;}
      const response=await request.fetch();const body=await response.json();if(body.account)body.account.subscriptionSubjects=['ict'];await request.fulfill({response,json:body});
     });
     const page=await context.newPage();
     page.on('pageerror',error=>console.error('browser:',error.message));
     await page.goto(base+'/?page=learn');await ready(page);
     await page.locator('[data-learner-dashboard]').waitFor();
     const deadline=Date.now()+60000;
     while(true) {
      const missing=await page.evaluate(async files=>{
       const version=document.querySelector('meta[name=learn-release]').content;
       const cache=await caches.open(`khutwa-content:/:${version}`);
       const saved=await Promise.all(files.map(file=>cache.match(new URL(file,location.href))));
       return files.filter((_file,index)=>!saved[index]);
      },SUPER_PAYWALL_ASSETS);
      if(!missing.length)break;
      assert.ok(Date.now()<deadline,`Offline invitation preparation stalled: ${missing.join(', ')}`);
      await page.waitForTimeout(100);
     }
     await page.waitForFunction(()=>Boolean(navigator.serviceWorker.controller));
     if(type==='subscribed') {
      for(const key of [freeStarter,paid]) {await navigate(page,key);await page.locator('[data-ui-lab-check]').waitFor();}
     }
     console.log(engine.name(),type,'prepared offline invitation');
     disconnected=true;await page.evaluate(()=>dispatchEvent(new Event('offline')));
     if(type==='free') {
      assert.equal(await page.locator('.heart-depletion[open]').count(),0,'Home remains usable offline');
      await page.locator('.subject-card[data-subject=ict]').click();
     } else {
      assert.equal(await page.locator('.heart-depletion[open]').count(),0);
      const included=page.locator('[data-question-explain]');assert.equal(await included.locator('.explanation-included').count(),1);
      await included.click();await page.locator('.question-explanation-dialog .markdown-rendered').waitFor();await page.locator('[data-explanation-close]').click();
      await page.locator('[data-question-jump]').nth(2).click();
      assert.equal(await page.locator('.heart-depletion[open]').count(),0,'paid skipping works offline at zero hearts and gems');
      await navigate(page,freeStarter);await page.locator('[data-ui-lab-check]').waitFor();
      await page.locator('[data-ui-lab-answer]').first().click();await page.locator('[data-ui-lab-check]').click();
      await page.locator('.level-feedback').waitFor();
      assert.doesNotMatch(await page.locator('.level-feedback').innerText(),/اتصل بالإنترنت|نفدت قلوب/);
      assert.equal(await page.locator('.heart-depletion[open]').count(),0,'unpaid starter answers work offline without hearts');
      await navigate(page,unpurchased);
     }
     const paywall=page.locator('.heart-depletion[data-mode=offline][open]');await paywall.waitFor();
     assert.match(await paywall.locator('[data-heart-status]').innerText(),/ميزة مدفوعة/);
     assert.equal(await paywall.locator('[data-heart-status]').isVisible(),true);
     assert.equal(await paywall.locator('[data-super-choose-subjects]').isVisible(),false);
     await page.waitForFunction(()=>[...document.querySelectorAll('.heart-depletion img')].filter(img=>img.getClientRects().length).every(img=>img.complete&&img.naturalWidth>0));
     await page.screenshot({path:`/tmp/khutwa-offline-paywall-${engine.name()}-${type}.png`});
     if(type==='free')await page.keyboard.press('Escape');else await paywall.locator('[data-heart-close]').click();
     await page.locator('[data-learner-dashboard]').waitFor();
     assert.equal(await page.locator('.offline-access[open],.heart-depletion[open]').count(),0,'closing the paywall returns to usable Home');
     console.log(`${engine.name()} ${type}: offline paywall artwork/copy/close passed; purchased access and subscriber starter exception preserved.`);
    } finally {disconnected=false;await context.close();}
   }
  } finally {await browser.close();}
 }
} finally {await app.close();await rm(directory,{recursive:true,force:true});}
