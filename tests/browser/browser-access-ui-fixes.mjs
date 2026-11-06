import assert from 'node:assert/strict';
import { chromium, webkit } from 'playwright';
import { createAppServer } from '../../src/server/app-server.mjs';
import { readRuntimeConfig } from '../../src/server/runtime-config.mjs';
import { findChrome } from './browser-session.mjs';

const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',DEV_AUTO_LOGIN:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
try {
 for(const [engine,width] of [[chromium,1440],[chromium,390],[webkit,390]]) {
  const browser=await engine.launch(engine===chromium?{executablePath:await findChrome(),args:['--no-sandbox']}:{headless:true});
  const context=await browser.newContext({viewport:{width,height:844},isMobile:width<700,hasTouch:width<700,reducedMotion:'reduce'});
  try {
   const page=await context.newPage();
   await context.route('**/api/auth/sign-in',route=>route.fulfill({status:403,json:{status:'device-limit',error:'هذا الحساب مرتبط بمتصفح كمبيوتر ومتصفح هاتف فقط. تسجيل الخروج لا يغيّر الأجهزة المسجّلة. تواصل مع إدارة خطوة إذا فقدت الوصول إلى متصفحك.'}}));
   await page.goto(`${base}/?flow=sign-in`);
   await page.locator('[data-sign-in-form]').waitFor();
   await page.locator('[name=identifier]').fill('test-student');
   await page.locator('[name=password]').fill('test-password');
   await page.locator('[data-sign-in-form] [type=submit]').click();
   const error=page.locator('[data-auth-error]');await error.waitFor({state:'visible'});
   assert.match(await error.textContent(),/وصلت للحدّ/);
   const fits=()=>error.evaluate(el=>{
    const card=el.closest('.auth-card').getBoundingClientRect(),box=el.getBoundingClientRect();
    return el.scrollWidth<=el.clientWidth+1&&box.left>=card.left&&box.right<=card.right&&document.documentElement.scrollWidth<=innerWidth;
   });
   assert.equal(await fits(),true);
   await error.evaluate(el=>{el.textContent='هذا الحساب مرتبط بمتصفح كمبيوتر ومتصفح هاتف فقط. تسجيل الخروج لا يغيّر الأجهزة المسجّلة. تواصل مع إدارة خطوة إذا فقدت الوصول إلى متصفحك.';});
   assert.equal(await fits(),true,'long server messages wrap inside the card');
   await page.screenshot({path:`/tmp/khutwa-sign-in-${engine.name()}-${width}.png`});
   await context.unroute('**/api/auth/sign-in');
   const registration=await context.request.post(`${base}/api/auth/register`,{data:{username:`scope-${engine.name()}-${width}`,phone:`05912345${width===1440?'61':engine===chromium?'62':'63'}`,password:'Scope-test-123',curriculum:'gaza',path:'scientific'}});
   assert.equal(registration.status(),201);const {account}=await registration.json();
   const headers={'X-Progress-Owner':`account:${account.id}`};
   const key={subjectId:'ict',lessonId:'smartphone-operating-systems',partId:'android-features',stepId:'exam-p26-q1-1'};
   const {loadSubjectLessonPart}=await import('../../src/data/lessons/subject-lesson-registry.js');
   key.stepId=(await loadSubjectLessonPart(key.subjectId,key.lessonId,key.partId)).steps.find(step=>step.type==='question').id;
   for(let n=0;n<7;n++)assert.equal((await context.request.post(`${base}/api/progress`,{headers,data:{...key,id:`ui-scope-${n}`,type:'answer',correct:false}})).status(),200);
   await context.route('**/api/auth/session',async route=>{
    const response=await route.fetch();const body=await response.json();
    if(body.account)Object.assign(body.account,{accountType:'subscribed',subscriptionSubjects:['ict']});
    await route.fulfill({response,json:body});
   });
   await page.goto(`${base}/?subject=ict`);
   await page.locator('[data-roadmap-part]').first().click();
   const start=page.locator('[data-bubble-start]');await start.waitFor({state:'visible'});
   const colors=()=>start.evaluate(el=>({background:getComputedStyle(el).backgroundColor,ink:getComputedStyle(el).color,subject:getComputedStyle(el).getPropertyValue('--subject-color').trim()}));
   const before=await colors();assert.equal(before.background,'rgb(255, 255, 255)');
   await start.hover();await page.mouse.down();
   const pressed=await colors();assert.equal(pressed.ink,before.ink);assert.notEqual(pressed.background,'rgb(88, 204, 2)');
   await page.screenshot({path:`/tmp/khutwa-roadmap-button-${engine.name()}-${width}.png`});
   await page.mouse.up();
   await page.goto(`${base}/?subject=ict&lesson=${key.lessonId}&part=${key.partId}`);
   await page.locator('[data-ui-lab-check]').waitFor();
   assert.equal(await page.locator('.heart-depletion[open]').count(),0,'zero free hearts cannot block a purchased subject');
   await page.goto(`${base}/?subject=physics&lesson=momentum&part=momentum`);
   // Directly exercise the invitation owner with a non-covered subject as well.
   const unpurchased=await page.evaluate(async()=>{
    const {mountHeartDepletion}=await import('/src/ui/heart-depletion.js');
    const controller=new AbortController();
    const mounted=mountHeartDepletion({ownerId:'test',studyKey:{subjectId:'physics'},signal:controller.signal,resourceStore:{get:(_owner,key)=>({unlimited:key?.subjectId==='ict',hearts:0,gems:200}),subscribe:()=>()=>{}}});
    const shown=Boolean(document.querySelector('.heart-depletion[open]'));mounted.destroy();return shown;
   });
   assert.equal(unpurchased,true);
   console.log(`${engine.name()} ${width}px: sign-in wrapping, pressed button colors and purchased-subject paywall checks passed.`);
  } finally {await context.close();await browser.close();}
 }
} finally {await app.close();}
