import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';

const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
try {
 const context=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,reducedMotion:'reduce'});
 const registration=await context.request.post(base+'/api/auth/register',{data:{username:'مالك',phone:'0591234511',password:'Policy123',curriculum:'gaza',path:'scientific'}});
 assert.equal(registration.status(),201);
 const page=await context.newPage();await page.goto(base);
 await page.locator('[data-learner-dashboard]').waitFor();await page.waitForFunction(()=>!document.querySelector('#app-splash'));
 const profile=page.locator('[data-mobile-profile]');
 assert.equal(await profile.locator('b').textContent(),'م');
 for(const width of [390,320]) {
  await page.setViewportSize({width,height:844});
  const items=await page.locator('.nav-links .nav-item:visible').evaluateAll(nodes=>nodes.map(node=>{const r=node.getBoundingClientRect();return {top:r.top,left:r.left,right:r.right};}));
  assert.equal(items.length,5);
  assert.ok(items.every(r=>Math.abs(r.top-items[0].top)<1&&r.left>=0&&r.right<=width),'five navigation icons fit on one row');
  await profile.tap();await page.locator('.mobile-profile-card[open]').waitFor();
  assert.equal(await page.locator('#mobile-profile-name').textContent(),'مالك');
  assert.equal(await page.locator('[data-profile-plan]').textContent(),'حساب مجاني');
  await page.screenshot({path:`/tmp/khutwa-mobile-profile-${width}.png`});
  await page.locator('[data-profile-close]').tap();await page.locator('.mobile-profile-card').waitFor({state:'detached'});
  assert.equal(await profile.evaluate(node=>document.activeElement===node),true,'X restores focus to profile');
 }
 await profile.focus();await page.keyboard.press('Enter');await page.locator('.mobile-profile-card[open]').waitFor();
 await page.keyboard.press('Escape');await page.locator('.mobile-profile-card').waitFor({state:'detached'});
 await page.setViewportSize({width:1440,height:900});
 assert.equal(await profile.isVisible(),false);
 assert.equal(await page.locator('[data-auth-sign-out]').isVisible(),true);
 await page.setViewportSize({width:390,height:844});
 await profile.tap();
 await page.route('**/api/auth/sign-out',route=>route.fulfill({status:503,contentType:'application/json',body:'{"error":"unavailable"}'}));
 await page.locator('[data-profile-sign-out]').tap();
 await page.waitForFunction(()=>document.querySelector('.mobile-profile-card [role="status"]')?.textContent.includes('تعذّر'));
 assert.equal(await page.locator('body').getAttribute('data-account-type'),'free');
 assert.equal(await page.locator('[data-profile-sign-out]').isEnabled(),true,'failed logout allows retry');
 await page.unroute('**/api/auth/sign-out');
 const session=await (await context.request.get(base+'/api/auth/session')).json();
 const ownerId=`account:${session.account.id}`;
 await page.route('**/api/progress/**',route=>route.abort());
 await page.evaluate(async ownerId=>{
  const {createIndexedDbProgressAdapter}=await import('/src/services/indexeddb-progress.js');
  const adapter=createIndexedDbProgressAdapter();
  await adapter.enqueue({id:'profile-unsynced-answer',type:'answer',value:{ownerId,subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1',correct:true}});
  adapter.close();
 },ownerId);
 await page.locator('[data-profile-sign-out]').tap();
 await page.waitForFunction(()=>document.body.dataset.accountType==='guest');
 assert.equal(await profile.isVisible(),false);
 assert.equal((await (await context.request.get(base+'/api/auth/session')).json()).account,null);
 await page.reload();await page.waitForFunction(()=>document.body.dataset.accountType==='guest');
 const pending=await page.evaluate(async ownerId=>{
  const {createIndexedDbProgressAdapter}=await import('/src/services/indexeddb-progress.js');
  const adapter=createIndexedDbProgressAdapter();const pending=await adapter.pending(ownerId);adapter.close();return pending;
 },ownerId);
 assert.ok(pending.some(update=>update.id==='profile-unsynced-answer'&&update.value.ownerId===ownerId),'logout and reload preserve the original owner’s unsynced answers');
 console.log('Mobile profile: 320/390px layout, desktop visibility, X/Escape, failed logout retry, real logout and unsynced answer preservation passed.');
 await context.close();
} finally {await browser.close();await app.close();}
