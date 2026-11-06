import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';
const root=process.cwd(),app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
const html=await readFile('index.html','utf8');
const styles=[...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(x=>x[0].replace('media="print"','media="all"')).join('');
try {
 for(const width of [390,1440])for(const answer of ['right','wrong']) {
  const page=await browser.newPage({viewport:{width,height:844},reducedMotion:'reduce'});
  await page.route('**/rating-banner-fixture',route=>route.fulfill({contentType:'text/html',body:`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${styles}</head><body class="ui-lab-open ready-lesson-open"><section class="lesson-shell lesson-shell--ui-lab"><header class="lesson-top"><button class="lesson-back app-close" aria-label="إغلاق"></button><span class="lesson-top-title" style="--lesson-progress:40%"></span></header><div class="lesson-card lesson-card--ui-lab lesson-card--ready-lesson"><section id="fixture" class="ready-lesson-stage" data-lesson-step="fixture"></section></div></section></body></html>`}));
  await page.goto(base+'/rating-banner-fixture');
  await page.evaluate(async()=>{
   const {renderQuestion}=await import('/src/ui/lesson/question.js');const {mountQuestionNavigation}=await import('/src/ui/lesson/question-navigation.js');
   renderQuestion(document.querySelector('#fixture'),{locale:'ar',definition:{id:'fixture',type:'mcq',content:{title:'الكتاب المدرسي',prompt:'ما المقصود بقاعدة البيانات؟',answers:[{id:'right',text:'مجموعة من البيانات المرتبطة والمنظّمة.',correct:true},{id:'wrong',text:'مجموعة من الصور فقط.',correct:false}]}}});
   mountQuestionNavigation({shell:document.querySelector('.lesson-shell'),signal:new AbortController().signal,locale:'ar',getQuestions:()=>Array.from({length:10},(_,i)=>({id:i?'question-'+i:'fixture'})),getCurrentId:()=> 'fixture',getRating:()=>undefined});
   await document.fonts.ready;
  });
  await page.locator(`[data-ui-lab-answer="${answer}"]`).click();await page.locator('[data-template-primary]').click();
  await page.locator('.level-question-rating-panel').waitFor();
  await page.waitForFunction(()=>parseFloat(document.querySelector('.level-layout-preview').style.getPropertyValue('--question-rating-overlap'))>0);
  const geometry=await page.evaluate(()=>{
   const footer=document.querySelector('.level-layout-actions'),panel=footer.querySelector('.level-question-rating-panel'),rating=panel.querySelector('.level-question-ratings'),slider=footer.querySelector('.question-number-slider');
   return {footer:getComputedStyle(footer).backgroundColor,panel:getComputedStyle(panel).backgroundColor,extension:getComputedStyle(footer,'::before').backgroundColor,extensionHeight:parseFloat(getComputedStyle(footer,'::before').height),overlap:parseFloat(document.querySelector('.level-layout-preview').style.getPropertyValue('--question-rating-overlap')),gap:slider.getBoundingClientRect().top-rating.getBoundingClientRect().bottom,overflow:document.documentElement.scrollWidth>innerWidth};
  });
  assert.equal(geometry.panel,geometry.footer);assert.equal(geometry.extension,geometry.footer);assert.ok(Math.abs(geometry.extensionHeight-geometry.overlap)<1);assert.ok(geometry.gap<=4.1&&geometry.gap>=0);assert.equal(geometry.overflow,false);
  await page.screenshot({path:`/tmp/khutwa-rating-${answer}-${width}.png`});
  // Overflow cue keeps its own straight strip corners, despite shared button rounding.
  await page.evaluate(()=>{const cue=document.createElement('button');cue.className='lesson-scroll-cue';document.querySelector('.level-layout-content').append(cue);});
  assert.equal(await page.locator('.lesson-scroll-cue').last().evaluate(node=>getComputedStyle(node).borderRadius),'0px');
  await page.close();console.log(`${width}px ${answer}: continuous result banner, four-pixel rating gap, square scroll cue passed.`);
 }
}finally{await browser.close();await app.close();}
