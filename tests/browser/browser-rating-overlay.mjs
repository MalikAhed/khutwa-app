import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';

const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
const html=await readFile('index.html','utf8');
const styles=[...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(match=>match[0].replace(/media="print"/g,'media="all"')).join('');
try {
 for(const [width,height,motion] of [[1440,900,'no-preference'],[390,844,'reduce'],[390,568,'no-preference']]) {
  for(const type of ['written','mcq'])for(const strip of [false,true]) {
   const page=await browser.newPage({viewport:{width,height},reducedMotion:motion});
   try {
    const errors=[];page.on('pageerror',error=>errors.push(error.message));
    await page.route('**/rating-overlay-fixture',route=>route.fulfill({contentType:'text/html',body:`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${styles}</head><body class="ui-lab-open ready-lesson-open"><section class="lesson-shell lesson-shell--ui-lab"><header class="lesson-top"><button class="lesson-back app-close" type="button" aria-label="إغلاق"></button><span class="lesson-top-title" style="--lesson-progress:40%">بطاقة مراجعة</span></header><div class="lesson-card lesson-card--ui-lab lesson-card--ready-lesson"><section id="fixture" class="ready-lesson-stage" data-lesson-step="fixture"></section></div></section></body></html>`}));
    await page.goto(`${base}/rating-overlay-fixture`);
    await page.evaluate(async({type,strip})=>{
     const [{renderExamQuestion},{renderQuestion},{mountQuestionNavigation},{mountQuestionFeedback}]=await Promise.all([
      import('/src/ui/lesson/exam-question.js'),import('/src/ui/lesson/question.js'),import('/src/ui/lesson/question-navigation.js'),import('/src/ui/question-feedback.js')]);
     const host=document.querySelector('#fixture'),shell=document.querySelector('.lesson-shell');
     const controller=new AbortController();window.overlayController=controller;
     const long=Array.from({length:14},(_,index)=>`الفقرة ${index+1}: اقرأ الإجابة وراجع خطوات الحل بعناية.`).join('\n\n');
     window.overlayCleanup=type==='written'
      ?renderExamQuestion(host,{id:'fixture',content:{title:'الكتاب المدرسي',body:'ما المقصود بقاعدة البيانات؟',finalAnswer:long}})
      :renderQuestion(host,{locale:'ar',definition:{id:'fixture',type:'mcq',content:{title:'الكتاب المدرسي',prompt:'اختر الإجابة الصحيحة.',example:long,answers:[{id:'right',text:'الإجابة الصحيحة',correct:true},{id:'wrong',text:'إجابة أخرى',correct:false}]}}});
     if(strip)window.navigationCleanup=mountQuestionNavigation({shell,signal:controller.signal,locale:'ar',getQuestions:()=>[{id:'fixture'}],getCurrentId:()=> 'fixture',getRating:()=>undefined});
     mountQuestionFeedback({host,shell,signal:controller.signal,feedback:{getRating:()=>undefined,subscribe:()=>()=>{},saveRating:()=>new Promise(resolve=>{window.resolveRating=resolve;})}});
     await document.fonts.ready;
    },{type,strip});
    const settle=()=>page.evaluate(async()=>{await Promise.all(document.getAnimations().filter(a=>Number.isFinite(a.effect.getComputedTiming().endTime)).map(a=>a.finished.catch(()=>{})));});
    const panel=page.locator('.level-question-rating-panel');
    assert.equal(await panel.isVisible(),false);
    if(type==='written') {
     const initial=await page.evaluate(()=>{
      const header=document.querySelector('.lesson-top');
      const scroll=document.querySelector('[data-exam-front] .lesson-flashcard-scroll');
      header.style.marginBottom='0px';
      scroll.style.paddingTop=getComputedStyle(scroll).paddingBottom;
      const original=document.querySelector('[data-exam-front] h1').getBoundingClientRect().top;
      header.style.removeProperty('margin-bottom');
      scroll.style.removeProperty('padding-top');
      return {original,expanded:document.querySelector('[data-exam-front] h1').getBoundingClientRect().top};
     });
     assert.ok(Math.abs(initial.original-initial.expanded)<1,`flashcard starts in its original position: ${JSON.stringify(initial)}`);
    }
    if(type==='written') {
     await page.locator('[data-exam-front] .lesson-flashcard-scroll').press('Enter');
     await page.locator('[data-exam-front]').waitFor({state:'hidden'});
    } else {
     // Read to the end before choosing an answer covered by the More content cue.
     await page.locator('.level-layout-task').evaluate(node=>node.scrollTo({top:node.scrollHeight,behavior:'instant'}));
     await page.locator('.level-layout-content > [data-content-scroll]').waitFor({state:'hidden'});
     await page.locator('[data-ui-lab-answer="wrong"]').click();
     assert.equal(await page.locator('[data-ui-lab-answer="wrong"]').getAttribute('aria-pressed'),'true');
    }
    const surface=page.locator(type==='written'?'[data-exam-solution] .lesson-flashcard-scroll':'.level-layout-task');
    await surface.evaluate(node=>node.scrollTo({top:node.scrollHeight,behavior:'instant'}));
    const bounds=()=>page.evaluate(type=>{
     const rect=selector=>{const box=document.querySelector(selector).getBoundingClientRect();return {top:box.top,bottom:box.bottom,height:box.height};};
     const surface=document.querySelector(type==='written'?'[data-exam-solution] .lesson-flashcard-scroll':'.level-layout-task');
     return {content:rect('.level-layout-content'),action:rect('[data-template-primary]'),copy:rect(type==='written'?'[data-exam-final-answer]':'.ui-lab-mcq h1'),scroll:surface.scrollTop};
    },type);
    await page.mouse.move(0,0);await settle();
    const before=await bounds();
    await page.locator(type==='written'?'[data-exam-correct="false"]':'[data-template-primary]').click();
    await panel.waitFor({state:'visible'});
    await page.waitForFunction(()=>parseFloat(document.querySelector('.level-layout-preview').style.getPropertyValue('--question-rating-overlap'))>0);
    await settle();
    await page.mouse.move(0,0);await settle();
    const after=await bounds();
    const topLine=await page.evaluate(()=>({bar:document.querySelector('.lesson-top-title').getBoundingClientRect().bottom,content:document.querySelector('.level-layout-content').getBoundingClientRect().top}));
    assert.ok(Math.abs(topLine.bar-topLine.content)<1,`reading starts at progress bottom: ${JSON.stringify(topLine)}`);
    for(const part of ['content','action','copy'])for(const property of ['top','bottom','height'])assert.ok(Math.abs(before[part][property]-after[part][property])<1,`${width}/${height}/${type}/${strip}: ${part}.${property} stays in place (${before[part][property]} vs ${after[part][property]})`);
    assert.ok(Math.abs(before.scroll-after.scroll)<1,'revealing ratings does not scroll the question');
    assert.equal(await page.locator('.question-rating-save-status').count(),0);
    await surface.evaluate(node=>node.scrollTo({top:0,behavior:'instant'}));
    const cue=page.locator(type==='written'?'[data-exam-solution] [data-content-scroll]':'.level-layout-content > [data-content-scroll]');
    await cue.waitFor({state:'visible'});
    const cueBox=await cue.boundingBox(),panelBox=await panel.boundingBox();
    assert.ok(cueBox.y+cueBox.height<=panelBox.y+1,'the More content indicator stays above the controls');
    await cue.click();
    await page.waitForFunction(selector=>document.querySelector(selector).scrollTop>0,type==='written'?'[data-exam-solution] .lesson-flashcard-scroll':'.level-layout-task');
    await surface.evaluate(node=>node.scrollTo({top:node.scrollHeight,behavior:'instant'}));
    await cue.waitFor({state:'hidden'});
    const last=page.locator(type==='written'?'[data-exam-correct="false"]':'[data-ui-lab-answer="wrong"]');
    const lastBox=await last.boundingBox(),ratingBox=await panel.boundingBox();
    assert.ok(lastBox.y+lastBox.height<=ratingBox.y+1,'scrolling exposes the final answer/control above the overlay');
    if(type==='written') {
     await page.mouse.move(0,0);await settle();
     const resting=await last.boundingBox();
     await last.hover();await settle();
     assert.ok(Math.abs((await last.boundingBox()).y-resting.y)<.5,'hovering a selected answer does not lift it');
     await page.mouse.down();await settle();
     assert.ok(Math.abs((await last.boundingBox()).y-resting.y)<.5,'pressing a selected answer does not lift it');
     await page.mouse.up();await settle();
     assert.ok(Math.abs((await last.boundingBox()).y-resting.y)<.5,'reclicking a selected answer keeps its position');
    }
    await page.locator('[data-question-rating="easy"]').check();
    assert.equal(await page.locator('.question-rating-save-status').count(),0,'a pending save creates no status markup');
    await page.evaluate(()=>window.resolveRating({status:'saved'}));
    assert.equal(await page.locator('.question-rating-save-status').count(),0,'a successful save stays silent');
    await page.locator('[data-question-rating="medium"]').check();
    await page.evaluate(()=>window.resolveRating({status:'unavailable'}));
    await page.locator('.question-rating-save-status').waitFor();
    assert.match(await page.locator('.question-rating-save-status').textContent(),/تعذّر حفظ/,'failed saves retain the existing retry message');
    await page.locator('[data-question-rating="easy"]').check();
    assert.equal(await page.locator('.question-rating-save-status').count(),0,'retrying clears the previous failure without showing Saving');
    await page.evaluate(()=>window.resolveRating({status:'saved'}));
    await page.locator('[data-question-rating="easy"]').focus();
    await page.keyboard.press('ArrowLeft');
    assert.equal(await page.locator('[data-question-rating]:checked').count(),1,'native rating keyboard selection stays exclusive');
    if(type==='written'&&strip)await page.screenshot({path:`/tmp/khutwa-rating-overlay-${width}-${height}.png`});
    await page.evaluate(()=>{window.overlayCleanup();window.overlayController.abort();window.navigationCleanup?.();});
    assert.deepEqual(errors,[]);
    console.log(`${width}x${height}/${type}/${strip?'number strip':'plain footer'}: stable question, scrolling, silent saves and pressed states passed.`);
   }finally{await page.close();}
  }
 }
}finally{await browser.close();await app.close();}
