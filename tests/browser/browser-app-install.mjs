import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {startPreviewServer} from '../../scripts/preview-server.mjs';
import {findChrome} from './browser-session.mjs';

const server=await startPreviewServer({root:process.cwd(),prefix:'/'});
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox','--disable-gpu']});
const android='Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130.0.0.0 Mobile Safari/537.36';
const iphone='Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1';
async function fixture(userAgent,width=390,installed=false) {
 const context=await browser.newContext({userAgent,hasTouch:userAgent!=='Desktop',viewport:{width,height:844}});
 await context.addInitScript(installed=>{Object.defineProperty(navigator,'standalone',{value:installed});},installed);
 const page=await context.newPage();
 await page.route('**/install-fixture',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><html dir="rtl" lang="ar"><head><link rel="stylesheet" href="/src/styles/app-install.css"><style>*{box-sizing:border-box}body{font-family:Arial;--app-bottom-space:65px}</style></head><body><main id="main"></main></body></html>'}));
 await page.goto(server.base+'install-fixture');
 await page.evaluate(async()=>{const {mountAppInstall}=await import('/src/ui/app-install.js');mountAppInstall();});
 return {page,context};
}
async function cardCount(page){await page.locator('.app-install[data-exiting]').waitFor({state:'detached'});return page.locator('.app-install').count();}
async function ready(page){await page.evaluate(()=>document.dispatchEvent(new Event('app:ready')));}
async function nativeEvent(page,outcome='accepted',reject=false){
 await page.evaluate(({outcome,reject})=>{
  const event=new Event('beforeinstallprompt',{cancelable:true});
  window.promptCalls=0;
  event.prompt=()=>{window.promptCalls++;return reject?Promise.reject(new Error('Unavailable')):Promise.resolve();};
  event.userChoice=Promise.resolve({outcome});
  window.dispatchEvent(event);window.wasPrevented=event.defaultPrevented;
 },{outcome,reject});
}
try {
 const {page,context}=await fixture(android);
 await nativeEvent(page);assert.equal(await cardCount(page),0,'waits for startup');
 await ready(page);assert.equal(await page.locator('.app-install__action').textContent(),'تثبيت التطبيق');
 await page.locator('.app-install__action').click();
 assert.equal(await page.evaluate(()=>window.promptCalls),1);assert.equal(await cardCount(page),0);
 await context.close();
 for(const outcome of ['dismissed','error']) {
  const {page,context}=await fixture(android);await ready(page);await nativeEvent(page,'dismissed',outcome==='error');
  await page.locator('.app-install__action').click();
  if(outcome==='dismissed') {
   assert.equal(await cardCount(page),0);
   assert.ok(await page.evaluate(()=>localStorage.getItem('khutwa:install-dismissed-day:v1')));
   await page.reload();
   await page.evaluate(async()=>{const {mountAppInstall}=await import('/src/ui/app-install.js');mountAppInstall();document.dispatchEvent(new Event('app:ready'));});
   assert.equal(await cardCount(page),0,'dismissal survives a reload');
  } else {
   await page.locator('.app-install__action').click();assert.equal(await page.locator('.app-install__help').isVisible(),true);
   assert.equal(await page.evaluate(()=>window.promptCalls),1,'consumed prompt is never reused');
  }
  await context.close();
 }
 for(const width of [320,390,820]) {
  const {page,context}=await fixture(iphone,width);await ready(page);
  await page.locator('.app-install__action').focus();await page.keyboard.press('Enter');
  assert.match(await page.locator('.app-install__help').innerText(),/Safari.*مشاركة.*إضافة إلى الشاشة الرئيسية/s);
  assert.equal(await page.locator('.app-install__action').getAttribute('aria-expanded'),'true');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  assert.ok((await page.locator('.app-install').boundingBox()).y<30,'notification sits at the top');
  if(process.env.BROWSER_INSTALL_SCREENSHOTS==='1') await page.screenshot({path:`/tmp/khutwa-install-${width}.png`});
  await page.evaluate(()=>{const dialog=document.createElement('dialog');document.body.append(dialog);dialog.showModal();});
  assert.equal(await page.locator('.app-install').isVisible(),false,'never covers an active dialog');
  await page.evaluate(()=>document.querySelector('dialog').remove());
  await page.evaluate(()=>document.querySelector('#main').classList.add('lesson-mode'));
  assert.equal(await page.locator('.app-install').isVisible(),false);
  await page.evaluate(()=>document.querySelector('#main').classList.remove('lesson-mode'));
  await page.locator('.app-install__close').click();await nativeEvent(page);
  assert.equal(await cardCount(page),0,'dismissal survives later browser prompts');
  await context.close();
 }
 const installed=await fixture(iphone,390,true);await ready(installed.page);assert.equal(await cardCount(installed.page),0);await installed.context.close();
 const desktop=await fixture('Desktop',1440);await ready(desktop.page);assert.equal(await cardCount(desktop.page),0);await desktop.context.close();
 const fallback=await fixture(android);await ready(fallback.page);
 assert.equal(await cardCount(fallback.page),0,'Android waits for browser installation availability');
 await nativeEvent(fallback.page,'dismissed',true);await fallback.page.locator('.app-install__action').click();
 await fallback.page.locator('.app-install__action').click();assert.match(await fallback.page.locator('.app-install__help').innerText(),/Chrome/);
 await fallback.page.evaluate(()=>window.dispatchEvent(new Event('appinstalled')));assert.equal(await cardCount(fallback.page),0);await fallback.context.close();
 const denied=await fixture(iphone);
 await denied.page.evaluate(()=>{Storage.prototype.setItem=()=>{throw new Error('Storage denied');};});
 await ready(denied.page);await denied.page.locator('.app-install__close').click();
 assert.equal(await cardCount(denied.page),0,'dismissal still works when storage is blocked');await denied.context.close();

 const daily=await fixture(android);
 await daily.page.evaluate(()=>{Date.now=()=>Date.parse('2026-11-08T21:59:00Z');});
 await nativeEvent(daily.page);await ready(daily.page);await daily.page.locator('.app-install__close').click();
 await daily.page.evaluate(()=>{Date.now=()=>Date.parse('2026-11-08T21:59:59Z');window.dispatchEvent(new Event('pageshow'));});
 assert.equal(await cardCount(daily.page),0,'stays dismissed before Palestine midnight');
 await daily.page.evaluate(()=>{Date.now=()=>Date.parse('2026-11-08T22:00:00Z');document.dispatchEvent(new Event('visibilitychange'));});
 assert.equal(await daily.page.locator('.app-install').isVisible(),true,'returns on the first opening after midnight');
 await nativeEvent(daily.page);await daily.page.locator('.app-install__action').click();
 assert.equal(await daily.page.evaluate(()=>localStorage.getItem('khutwa:app-installed:v1')),null,'accepting alone is not installation confirmation');
 await daily.page.evaluate(()=>{Date.now=()=>Date.parse('2026-11-09T22:00:00Z');window.dispatchEvent(new Event('pageshow'));});
 assert.equal(await daily.page.locator('.app-install').isVisible(),true,'unfinished installation can be reminded tomorrow');
 await daily.page.evaluate(()=>window.dispatchEvent(new Event('appinstalled')));
 assert.equal(await daily.page.evaluate(()=>localStorage.getItem('khutwa:app-installed:v1')),'true');
 await daily.page.reload();
 await daily.page.evaluate(async()=>{const {mountAppInstall}=await import('/src/ui/app-install.js');mountAppInstall();document.dispatchEvent(new Event('app:ready'));});
 await nativeEvent(daily.page);assert.equal(await cardCount(daily.page),0,'confirmed installation survives reload and later install prompts');
 await daily.context.close();
 for (const [dx,dy] of [[75,0],[-75,0],[0,65],[0,-65]]) {
  const {page,context}=await fixture(iphone);await ready(page);
  const card=page.locator('.app-install');
  await page.evaluate(()=>Promise.all(document.querySelector('.app-install').getAnimations().map(a=>a.finished)));
  const box=await card.boundingBox();const x=box.x+box.width-55,y=box.y+box.height/2;
  const touch=await context.newCDPSession(page);
  await touch.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});
  for(let step=1;step<=6;step++) await touch.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x+dx*step/6,y:y+dy*step/6}]});
  await touch.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  assert.equal(await cardCount(page),0,`swipe ${dx},${dy} dismisses`);
  assert.ok(await page.evaluate(()=>localStorage.getItem('khutwa:install-dismissed-day:v1')));
  await context.close();
 }
 const gentle=await fixture(iphone);await ready(gentle.page);
 await gentle.page.evaluate(()=>Promise.all(document.querySelector('.app-install').getAnimations().map(a=>a.finished)));
 const box=await gentle.page.locator('.app-install').boundingBox();const x=box.x+box.width-55,y=box.y+box.height/2;
 await gentle.page.mouse.move(x,y);await gentle.page.mouse.down();await gentle.page.mouse.move(x+15,y+10);await gentle.page.mouse.up();
 await gentle.page.evaluate(()=>Promise.all(document.querySelector('.app-install').getAnimations().map(a=>a.finished)));
 assert.equal(await cardCount(gentle.page),1,'a short drag returns instead of dismissing');
 assert.equal(await gentle.page.evaluate(()=>getComputedStyle(document.querySelector('.app-install')).opacity),'1');
 await gentle.page.mouse.move(x,y);await gentle.page.mouse.down();await gentle.page.mouse.move(x-70,y);
 await gentle.page.locator('.app-install').dispatchEvent('pointercancel',{pointerId:1});await gentle.page.mouse.up();
 assert.equal(await cardCount(gentle.page),1,'interrupted gestures keep the card');
 await gentle.page.locator('.app-install__close').focus();await gentle.page.keyboard.press('Enter');
 assert.equal(await cardCount(gentle.page),0,'keyboard close animates and dismisses');await gentle.context.close();
 const reduced=await fixture(iphone);await reduced.page.emulateMedia({reducedMotion:'reduce'});await ready(reduced.page);
 assert.equal(await reduced.page.evaluate(()=>document.querySelector('.app-install').getAnimations().every(a=>a.effect.getKeyframes().every(k=>k.transform==='none'))),true,'reduced motion uses opacity only');
 await reduced.page.locator('.app-install__close').click();assert.equal(await cardCount(reduced.page),0);await reduced.context.close();
 console.log('Install notification passed: early native prompt, acceptance/dismissal/error, fallback, iOS instructions, responsive layout, keyboard, lesson suppression, installed/desktop suppression.');
}finally{await browser.close();await server.close();}
