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
 for(const width of [390,1440]) {
  const context=await browser.newContext({viewport:{width,height:844},hasTouch:true,isMobile:width===390,colorScheme:'dark',reducedMotion:'reduce'});
  assert.equal((await context.request.post(base+'/api/auth/register',{data:{username:`presentation-${width}`,phone:width===390?'0591234511':'0591234512',password:'Policy123',curriculum:'gaza',path:'scientific'}})).status(),201);
  const page=await context.newPage();await page.goto(base);
  await page.locator('[data-learner-dashboard]').waitFor();await page.waitForFunction(()=>!document.querySelector('#app-splash'));
  assert.equal(await page.locator('html').evaluate(node=>getComputedStyle(node).colorScheme),'light only');
  const palette=()=>page.locator('body').evaluate(node=>({background:getComputedStyle(node).backgroundColor,color:getComputedStyle(node).color}));
  const darkPreference=await palette();await page.emulateMedia({colorScheme:'light'});assert.deepEqual(await palette(),darkPreference,'OS preference cannot change the app palette');
  const card=page.locator('.subject-card[data-subject=physics]');await card.tap();await page.locator('.subject-roadmap').waitFor();
  await page.locator('.lesson-top .lesson-back').tap();await card.waitFor();
  await card.focus();assert.equal(await card.evaluate(node=>getComputedStyle(node).outlineStyle),'none','touch-return focus has no ring');
  await page.keyboard.press('Tab');await card.focus();assert.notEqual(await card.evaluate(node=>getComputedStyle(node).outlineStyle),'none','keyboard focus remains visible on touch devices');
  await card.tap();await page.locator('.subject-roadmap').waitFor();
  let release;const gate=new Promise(resolve=>{release=resolve;});
  await page.route('**/src/data/lessons/physics/**',async route=>{await gate;await route.continue();});
  try {
   await page.locator('[data-roadmap-lesson][data-roadmap-part]').first().tap();
   if(await page.locator('[data-bubble-start]:visible').count())await page.locator('[data-bubble-start]').tap();
   await page.locator('.lesson-loading').waitFor();
   assert.equal(await page.locator('.lesson-top').isVisible(),false,'unready controls do not flash above the loading message');
   assert.equal(await page.locator('#lesson-content').evaluate(node=>getComputedStyle(node).backgroundColor),'rgba(0, 0, 0, 0)');
   await page.screenshot({path:`/tmp/khutwa-loading-clean-${width}.png`});
  } finally {release();}
  await page.locator('[data-live-authored-step]').waitFor({timeout:30000});
  assert.equal(await page.locator('.lesson-top').isVisible(),true,'ready lesson controls return');
  await context.close();console.log(`${width}px: light-only palette, touch and keyboard focus, clean loading transition passed.`);
 }
}finally{await browser.close();await app.close();}
