import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {chromium} from 'playwright';
import {findChrome} from './browser-session.mjs';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';

// Layout and motion use a supplied outcome, never a learner account or progress write.
const root=process.cwd();
const app=await createAppServer({root,config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',DEV_AUTO_LOGIN:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root}),logger:()=>{}});
const browser=await chromium.launch({headless:true,executablePath:await findChrome(),args:['--no-sandbox']});
try {
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  const base=`http://127.0.0.1:${await app.listen()}`;
  const styles=(await readFile('index.html','utf8')).match(/<link[^>]+rel="stylesheet"[^>]*>/g).join('\n').replaceAll('media="print"','media="all"');
  // Use the app's full stylesheet set without loading its account/startup flow.
  await page.route(base+'/',route=>route.fulfill({contentType:'text/html',body:`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${styles}</head><body></body></html>`}));
  await page.goto(base,{waitUntil:'domcontentloaded'});
  await page.evaluate(async()=>{
    document.querySelectorAll('link[rel=stylesheet]').forEach(link=>link.media='all');
    document.body.removeAttribute('data-startup');
    document.body.innerHTML='<button id="launch">عرض السلسلة</button><div id="fixture"></div>';
    const {showDailyStreak}=await import('/src/ui/subject-completion.js');
    window.openStreak=()=>{
      window.streakController?.abort();window.streakController=new AbortController();
      document.querySelector('#launch').focus();
      showDailyStreak(document.querySelector('#fixture'),{streak:4,activeToday:true,date:'2026-10-28T12:00:00'},streakController.signal);
    };
    await document.fonts.ready;
    openStreak();
  });
  await page.waitForFunction(()=>document.querySelector('.lesson-daily-streak')?.dataset.streakStage==='wave');
  await page.screenshot({path:'/tmp/daily-streak-greeting-desktop.png'});
  await page.waitForFunction(()=>document.querySelector('.lesson-daily-streak')?.dataset.streakReady==='true');
  for(const [width,height] of [[1440,900],[390,844],[320,568],[844,390]]) {
    await page.setViewportSize({width,height});
    await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    await page.waitForFunction(()=>!document.querySelector('.completion-streak-mascot').getAnimations().some(animation=>animation.playState==='running'));
    const layout=await page.evaluate(()=>{
      const dialog=document.querySelector('.lesson-daily-streak'), rect=node=>node.getBoundingClientRect();
      const content=rect(dialog.querySelector('.subject-completion')), button=rect(dialog.querySelector('button'));
      const days=[...dialog.querySelectorAll('.completion-week li')].map(day=>{
        const label=rect(day.querySelector('span')), circle=rect(day.querySelector('i'));
        const svg=day.querySelector('i > svg:not(.completion-day-particles)'), check=svg&&rect(svg);
        return {round:Math.abs(circle.width-circle.height),labelCenter:Math.abs(label.x+label.width/2-circle.x-circle.width/2),
          checkCenter:check?Math.max(Math.abs(check.x+check.width/2-circle.x-circle.width/2),Math.abs(check.y+check.height/2-circle.y-circle.height/2)):0};
      });
      return {scrollX:dialog.scrollWidth-dialog.clientWidth,scrollY:dialog.scrollHeight-dialog.clientHeight,top:content.top,bottom:content.bottom,
        buttonTop:button.top,buttonBottom:button.bottom,pageOverflow:document.documentElement.scrollWidth>innerWidth,days};
    });
    assert.ok(layout.scrollX<=1&&layout.scrollY<=1,`${width}×${height}: no scrollable overflow: ${JSON.stringify(layout)}`);
    assert.equal(layout.pageOverflow,false);
    assert.ok(layout.top>=0&&layout.bottom<=layout.buttonTop&&layout.buttonBottom<=height,'the full composition and Continue fit');
    assert.ok(layout.days.every(day=>day.round<1&&day.labelCenter<1&&day.checkCenter<1),'weekday labels and SVG checks remain centered');
    const original=await page.evaluate(()=>({page:scrollY,dialog:document.querySelector('dialog').scrollTop}));
    await page.mouse.move(width/2,height/2);await page.mouse.wheel(0,500);
    await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(resolve)));
    assert.deepEqual(await page.evaluate(()=>({page:scrollY,dialog:document.querySelector('dialog').scrollTop})),original,'wheel input cannot scroll the celebration or background');
    await page.screenshot({path:`/tmp/daily-streak-${width}x${height}.png`});
  }
  await page.locator('.lesson-daily-streak button').click();
  await page.waitForFunction(()=>!document.querySelector('.lesson-daily-streak'));
  assert.equal(await page.locator('#launch').evaluate(node=>node===document.activeElement),true,'Continue restores focus');
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.setViewportSize({width:390,height:844});
  await page.evaluate(()=>openStreak());
  await page.waitForFunction(()=>document.querySelector('.lesson-daily-streak')?.dataset.streakReady==='true');
  await page.waitForFunction(()=>document.querySelector('.completion-streak-fire')?.complete&&document.querySelector('.completion-streak-fire')?.naturalWidth>0);
  assert.equal(await page.locator('.completion-streak-fire').evaluate(image=>image.currentSrc.endsWith('streak-fire-burning-reduced.svg')),true);
  await page.keyboard.press('Escape');
  await page.waitForFunction(()=>!document.querySelector('.lesson-daily-streak'));
  assert.equal(await page.locator('#launch').evaluate(node=>node===document.activeElement),true,'Escape restores focus');
  assert.deepEqual(errors,[]);
  console.log('Daily streak layout passed: desktop, mobile, short portrait, landscape, no scrolling, weekday/check alignment, Continue, Escape and reduced motion.');
} finally {await browser.close();await app.close();}
