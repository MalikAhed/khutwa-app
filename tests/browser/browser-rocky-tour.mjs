import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';
const root=process.cwd(),output=process.env.BROWSER_SCREENSHOT_DIR||'/tmp/khutwa-rocky-tour-v2';
await mkdir(output,{recursive:true});
const app=await createAppServer({root,config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root}),logger:()=>{}});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),headless:true,args:['--no-sandbox']});
async function learner(name,width=390,reduced=true,arm=true){
 const {account}=await app.accountStore.createAccount({username:name,curriculum:'gaza',path:'scientific',password:'Test-only-123'});
 const context=await browser.newContext({viewport:{width,height:width===1440?900:844},reducedMotion:reduced?'reduce':'no-preference'});
 await context.request.post(`${base}/api/auth/sign-in`,{data:{identifier:name,password:'Test-only-123'}});
 const page=await context.newPage(),errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.goto(base);await page.waitForFunction(()=>!document.querySelector('#app-splash'));
 if(width===390)assert.ok(await page.locator('.nav-links').evaluate(nav=>{const home=nav.querySelector('[data-page="learn"]'),x=home.getBoundingClientRect().left;return [...nav.children].filter(node=>node.getBoundingClientRect().width>0).every(node=>node.getBoundingClientRect().left<=x);}), 'Home is the rightmost mobile navigation item');
 if(arm)await page.evaluate(owner=>localStorage.setItem(`tawjihi:rocky-first-run:v1:${owner}`,JSON.stringify({version:3,status:'active',stage:'wait-question',seen:[]})),`account:${account.id}`);
 return {page,context,errors,owner:`account:${account.id}`};
}
const stage=async(page,id)=>{await page.locator(`.rocky-app-tour:not([hidden]):not(.is-leaving)[data-tour-step="${id}"]`).waitFor();await page.waitForTimeout(300);};
const next=page=>page.locator('[data-rocky-tour-next]:visible').click();
const savedTour=(page,owner)=>page.evaluate(owner=>JSON.parse(localStorage.getItem(`tawjihi:rocky-first-run:v1:${owner}`)),owner);
async function shot(page,name){
 await page.locator('.rocky-app-tour-bubble').click();
 const box=await page.locator('.rocky-app-tour-guide').boundingBox(),size=page.viewportSize();
 assert.ok(box.x>=0&&box.y>=0&&box.x+box.width<=size.width+1&&box.y+box.height<=size.height+1,JSON.stringify(box));
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 await page.screenshot({path:`${output}/${name}.png`});
}
async function swipeSlider(page){
 await stage(page,'slider');assert.equal(await page.locator('[data-rocky-tour-next]').isVisible(),false);
 const gesture=await page.locator('.rocky-tour-gesture').getAttribute('src');
 assert.match(gesture,/guidance-slide-right(?:-still)?\.svg$/,'slider guidance swipes toward the right, including reduced motion');
 const report=page.locator('[data-question-report]');
 assert.ok(await report.evaluate(node=>{const source=node.parentElement.querySelector('.lesson-question-source');return !source||node.getBoundingClientRect().left>source.getBoundingClientRect().right;}),'report flag is to the right of the question tag');
 await page.locator('.question-number-track').hover();await page.mouse.wheel(-320,0);await page.waitForTimeout(600);assert.equal(await page.locator('.rocky-app-tour:not([hidden]):not(.is-leaving)[data-tour-step=report]').count(),0,'report guidance waits while the slider is being explored');await stage(page,'report');
}
async function reportPreview(page){
 await page.locator('[data-question-report]').click();await stage(page,'report-send');
 assert.equal(await page.locator('[data-question-hide]').isDisabled(),true);
 assert.ok(await page.locator('[data-question-report-form] button[type=submit]').isEnabled(),'reporting is explained before optional hiding');
 await next(page);await stage(page,'report-hide');
 assert.equal(await page.locator('[data-question-hide]').isDisabled(),true);
 await page.locator('[data-question-hide]').evaluate(node=>node.click());
 assert.equal(await page.locator('[data-question-hide-form]').count(),0,'the walkthrough cannot hide a real question');
 assert.equal(await page.locator('.rocky-control-previews').evaluate(node=>node.children.length),0,'hide control is highlighted only in the real dialog');
 await shot(page,`${page.viewportSize().width}-report-hide`);
 await next(page);await stage(page,'report-close');await page.locator('[data-report-close]').click();
 await stage(page,'exit');assert.equal(await page.locator('.lesson-back.app-close').isDisabled(),true,'exit is locked only during its own tip');await page.locator('.lesson-back.app-close').evaluate(node=>node.click());assert.equal(await page.locator('.subject-completion').count(),0);await next(page);assert.equal(await page.locator('.lesson-back.app-close').isDisabled(),false,'the next coaching step restores exit');
 await page.locator('[data-question-report]').click();assert.equal(await page.locator('[data-question-hide]').isDisabled(),false,'later reports keep the real hide control available');await page.locator('[data-report-close]').click();
}
async function insertWideLine(page,selector){
 await page.locator(selector).evaluate(host=>{
   const line=document.createElement('div');line.className='lesson-math-scroll';line.style.cssText='width:180px;max-width:100%;overflow-x:auto';
   line.innerHTML='<span style="display:block;width:900px">سطر طويل للاختبار — ١ + ٢ + ٣ + ٤ + ٥ + ٦ + ٧ + ٨ + ٩</span>';
   host.prepend(line);
 });
}
async function scrollLine(page){
 await stage(page,'side-scroll');assert.equal(await page.locator('[data-rocky-tour-next]').isVisible(),false);
 const line=page.locator('.lesson-math-scroll').last();await line.hover();
 const direction=await line.evaluate(node=>getComputedStyle(node).direction),sign=direction==='rtl'?-1:1;
 const tourStage=()=>page.evaluate(()=>{const key=Object.keys(localStorage).find(key=>key.startsWith('tawjihi:rocky-first-run:'));return JSON.parse(localStorage.getItem(key)).stage;});
 await page.mouse.wheel(sign*160,0);await page.waitForTimeout(350);
 assert.equal(await tourStage(),'side-scroll','a partial swipe must not advance the guide');
 await line.hover();await page.mouse.wheel(sign*1600,0);await page.waitForTimeout(1000);
 assert.equal(await tourStage(),'side-scroll','the learner gets a reading pause after reaching the hidden end');
 await page.waitForFunction(()=>{const key=Object.keys(localStorage).find(key=>key.startsWith('tawjihi:rocky-first-run:'));return JSON.parse(localStorage.getItem(key)).stage!=='side-scroll';});
}

try{
 for(const width of [1440,390].filter(width=>!process.env.BROWSER_WIDTH||String(width)===process.env.BROWSER_WIDTH)){
  const {page,context,errors,owner}=await learner(`mcq-${width}`,width,width===390);
  await page.goto(`${base}/?subject=ict&lesson=smartphone-operating-systems&part=android-features`);await page.waitForFunction(()=>!document.querySelector('#app-splash'));
  assert.equal(await page.locator('.rocky-app-tour:visible').count(),0);
  await insertWideLine(page,'.ui-lab-mcq');await scrollLine(page);
  await page.locator('[data-ui-lab-answer][data-correct=true]').click();await page.locator('[data-ui-lab-check]').click();
  await stage(page,'easy');await shot(page,`${width}-easy`);
  assert.equal(await page.locator('#rocky-app-tour-message .rocky-inline-control').count(),1,'Easy appears inside the sentence');
  assert.equal(await page.locator('.rocky-control-previews').evaluate(node=>node.children.length),0);
  const actions=await page.locator('.rocky-coach-actions button').evaluateAll(buttons=>buttons.map(button=>({width:button.offsetWidth,height:button.offsetHeight,shadow:getComputedStyle(button).boxShadow})));
  assert.equal(actions[0].width,actions[1].width);assert.equal(actions[0].height,actions[1].height);assert.ok(actions.every(button=>button.shadow.includes('4px')),'both coaching buttons have the same raised edge');
  assert.equal(await page.locator('.rocky-app-tour[data-tour-step="rating"]').count(),0);
  assert.equal(await page.locator('.rocky-control-previews [data-question-rating]').count(),0,'visual copies have no live identity');
  await next(page);await swipeSlider(page);await reportPreview(page);
  await page.locator('[data-template-primary]').click();await page.locator('[data-ui-lab-answer][data-correct=false]').first().click();await page.locator('[data-ui-lab-check]').click();
  await stage(page,'hard');await next(page);await stage(page,'explain');
  assert.equal(await page.locator('[data-rocky-tour-next]').isVisible(),false);
  await page.locator('[data-question-explain]').click();await stage(page,'solution');
  assert.equal(await page.locator('.lesson-daily-streak').count(),0,'Explain is not a session exit');
  await insertWideLine(page,'[data-explanation-body] .markdown-rendered');await next(page);await scrollLine(page);
  await stage(page,'solution-close');await page.locator('[data-explanation-close]').click();
  await page.locator('.lesson-back.app-close').click();await stage(page,'rewards');await next(page);await stage(page,'session-leave');
  await page.locator('[data-authored-restart]').click();await page.locator('.lesson-daily-streak[open]').waitFor();
  assert.equal(new URL(page.url()).searchParams.has('lesson'),false);
  await page.locator('.lesson-daily-streak button').click({timeout:60000});await stage(page,'streak');await next(page);
  await stage(page,'rated-open');await shot(page,`${width}-rated-open`);
  const ratedLabel=await page.locator('.rocky-inline-navigation>span').evaluate(node=>{const range=document.createRange();range.selectNodeContents(node);return [...range.getClientRects()].filter(rect=>rect.width>0).length;});
  assert.equal(ratedLabel,1,'rated questions stays together inside the sentence');
  assert.equal(await page.locator('.rocky-control-previews').evaluate(node=>node.children.length),0);
  if(width===1440){await page.waitForTimeout(6200);assert.equal(await page.locator('.rocky-tour-gesture.is-visible').isVisible(),true,'action cues keep playing beyond the old five-second timeout');}
  await page.locator('[data-page="rated-questions"]').click();await stage(page,'rated-subject');
  assert.ok(await page.locator('.subject-card--rated').first().evaluate(card=>{const box=card.getBoundingClientRect();return [...document.querySelectorAll('.rocky-tour-rings rect')].some(rect=>{const x=+rect.getAttribute('x'),y=+rect.getAttribute('y'),w=+rect.getAttribute('width'),h=+rect.getAttribute('height');return x<=box.left+1&&y<=box.top+1&&x+w>=box.right-1&&y+h>=box.bottom-1;});}),'the spotlight includes the whole subject card');
  await page.locator('[data-rated-subject="ict"]').first().click();await stage(page,'rated-filter');assert.equal(await page.locator('.rocky-tour-gesture').isVisible(),true);
  await page.locator('[data-rated-filter="hard"]').check();await page.waitForTimeout(700);
  assert.equal(await page.locator('.rocky-tour-gesture').isVisible(),false,'the cue stops after the requested filter action');await next(page);
  for(const id of ['free','hearts','gems','companion','goodbye']){
   await stage(page,id);await shot(page,`${width}-${id}`);
   if(id==='hearts'||id==='gems'){
    assert.deepEqual(await page.locator('.rocky-inline-equation .ui-number').allTextContents(),[id==='hearts'?'1':'50','1']);
    assert.ok((await page.locator('.rocky-inline-equation img').getAttribute('src')).endsWith(id==='hearts'?'green_battery_icon_transparent.svg':'nav-gem.svg'));
   }
   if(id==='companion'||id==='goodbye'){
    assert.equal(await page.locator('.rocky-app-tour').getAttribute('data-layout'),'centered');
    assert.equal(await page.locator('.rocky-tour-rings rect').count(),0,'farewell never highlights a lesson');
    const hero=await page.locator('.rocky-app-tour-character').boundingBox();assert.ok(hero.width>=200);
    const guide=await page.locator('.rocky-app-tour-guide').boundingBox(),viewport=page.viewportSize();
    assert.ok(Math.abs(guide.x+guide.width/2-viewport.width/2)<2&&Math.abs(guide.y+guide.height/2-viewport.height/2)<2);
    assert.equal(await page.locator('.rocky-app-tour-character [data-part=shadow]').getAttribute('fill'),'#18212b');
    if(width===1440)assert.ok(await page.locator('.rocky-app-tour-character [data-part=arm-left]').evaluate(node=>node.getAnimations().length>0),'Rocky waves during the farewell');
   }
   await next(page);
  }
  const completed=await savedTour(page,owner);
  assert.equal(completed.seen.includes('flashcard'),false,'the first MCQ session never encountered flashcard guidance');
  assert.equal(completed.status,'complete','farewell completes the walkthrough even with unseen question types');
  await page.reload();await page.waitForFunction(()=>!document.querySelector('#app-splash'));
  await page.goto(`${base}/?subject=mathematics&lesson=average-change&part=average-change-practice`);await page.locator('[data-exam-card]').waitFor();
  await page.waitForTimeout(2300);
  assert.equal(await page.locator('.rocky-app-tour:visible').count(),0,'completed coaching never returns for a new question type');
  assert.equal((await savedTour(page,owner)).status,'complete');
  assert.deepEqual(errors,[]);await context.close();console.log(`${width}px: action gates, real-control previews, report protection, horizontal question/explanation scrolling, session-only streak, and permanent completion passed.`);
 }
 if(!process.env.BROWSER_WIDTH||process.env.BROWSER_WIDTH==='flash'){
  for(const width of [1440,390]){
   const {page,context,errors}=await learner(`flash-${width}`,width,width===390);
   await page.goto(`${base}/?subject=mathematics&lesson=average-change&part=average-change-practice`);await page.waitForFunction(()=>!document.querySelector('#app-splash'));
   const readingHeight=await page.locator('.level-layout-task').evaluate(node=>node.clientHeight);
   const beforeCard=await page.locator('[data-exam-card]').boundingBox();
   await page.locator('.rocky-app-tour:not([hidden]):not(.is-leaving)[data-tour-step="flashcard"]').waitFor();
   assert.ok(await page.locator('[data-question-report]').evaluate(node=>{const source=node.parentElement.querySelector('.lesson-question-source');return !source||node.getBoundingClientRect().left>source.getBoundingClientRect().right;}),'flashcard report flag is to the right of the source tag');
   const cue=page.locator('.rocky-tour-gesture');await page.waitForFunction(()=>document.querySelector('.rocky-tour-gesture').classList.contains('is-visible'));
   const entrance=await cue.evaluate(async node=>{const frames=[],start=performance.now();while(performance.now()-start<420){const style=getComputedStyle(node);frames.push({opacity:+style.opacity,scale:new DOMMatrixReadOnly(style.transform).a});await new Promise(requestAnimationFrame);}return frames;});
   if(width===1440)assert.ok(entrance.some(frame=>frame.opacity>0&&frame.opacity<1&&frame.scale>0&&frame.scale<1),'gesture fades and scales in');
   const afterCard=await page.locator('[data-exam-card]').boundingBox();assert.deepEqual(afterCard,beforeCard,'Rocky never shifts or resizes the card');
   assert.equal(await page.locator('.rocky-coach-slot').count(),0);
   await shot(page,`${width}-flashcard`);
   if(width===1440)assert.ok(await page.locator('.level-layout-task').evaluate(node=>node.clientHeight)>=readingHeight-2,'desktop coaching never reduces the card reading height');
   await page.locator('[data-exam-front] .lesson-flashcard-scroll').focus();await page.keyboard.press('Enter');
   if(width===1440){const exit=await cue.evaluate(async node=>{const frames=[],start=performance.now();while(performance.now()-start<160){const style=getComputedStyle(node);frames.push({hidden:node.hidden,opacity:+style.opacity,scale:new DOMMatrixReadOnly(style.transform).a});await new Promise(requestAnimationFrame);}return frames;});assert.ok(exit.some(frame=>!frame.hidden&&frame.opacity>0&&frame.opacity<1&&frame.scale<1),'gesture shrinks/fades before it is hidden');}
   await stage(page,'assess');assert.equal(await page.locator('.rocky-control-previews').evaluate(node=>node.children.length),0,'self-check buttons are not duplicated in the bubble');await shot(page,`${width}-assess`);
   assert.ok(await page.locator('[data-exam-self-check]').evaluate(group=>{const viewport=group.closest('.lesson-flashcard-scroll').getBoundingClientRect();return [...group.querySelectorAll('button')].every(button=>{const box=button.getBoundingClientRect();return box.top>=viewport.top&&box.bottom<=viewport.bottom+1;});}),'both assessment buttons stay visible together');
   assert.equal(await page.locator('[data-rocky-tour-next]').isVisible(),false);
   await page.locator('[data-exam-correct=true]').click();await stage(page,'easy');await next(page);
   await stage(page,'flip-back');await page.locator('[data-exam-solution] .lesson-flashcard-scroll').focus();await page.keyboard.press('Enter');
   await swipeSlider(page);await reportPreview(page);
   await page.locator('[data-template-primary]').click();
   await page.locator('[data-exam-front] .lesson-flashcard-scroll').click();await page.locator('[data-exam-correct=false]').click();
   await stage(page,'hard');await next(page);await stage(page,'explain');await page.locator('[data-question-explain]').click();await stage(page,'solution');
   assert.equal(await page.locator('.lesson-daily-streak').count(),0);
   await page.locator('[data-rocky-tour-skip]').click();await page.waitForTimeout(250);
   assert.equal(await page.locator('.lesson-daily-streak').count(),0,'skipping inside Explain cannot release the queued welcome animation');
   await page.locator('[data-explanation-close]').click();await page.locator('.lesson-back.app-close').click();
   await page.locator('[data-authored-restart]').click();await page.locator('.lesson-daily-streak[open]').waitFor();
   assert.equal(new URL(page.url()).searchParams.has('lesson'),false);
   assert.deepEqual(errors,[]);await context.close();console.log(`${width}px: reveal → self-check → one outcome tip → flip back, desktop height, and skip/explanation streak regression passed.`);
  }
 }
 if(!process.env.BROWSER_WIDTH||process.env.BROWSER_WIDTH==='persistence'){
  const {page,context,owner,errors}=await learner('tour-tabs');
  const route=`${base}/?subject=mathematics&lesson=average-change&part=average-change-practice`;
  await page.goto(route);await stage(page,'flashcard');
  const second=await context.newPage();second.on('pageerror',error=>errors.push(error.message));
  await second.goto(route);await stage(second,'flashcard');
  await page.locator('[data-rocky-tour-skip]').click();
  await second.waitForFunction(()=>!document.querySelector('.rocky-app-tour:not([hidden])'));
  assert.equal((await savedTour(second,owner)).status,'complete','another tab cannot overwrite skipped guidance');
  await second.reload();await second.locator('[data-exam-card]').waitFor();await second.waitForTimeout(2300);
  assert.equal(await second.locator('.rocky-app-tour:visible').count(),0,'skipping remains complete after reload');
  assert.deepEqual(errors,[]);await context.close();

  const returning=await learner('tour-returning',390,true,false);
  await returning.page.goto(route);await returning.page.locator('[data-exam-card]').waitFor();await returning.page.waitForTimeout(2300);
  assert.equal(await savedTour(returning.page,returning.owner),null,'sign-in never enrolls an existing student');
  assert.equal(await returning.page.locator('.rocky-app-tour:visible').count(),0);
  const switched=await returning.page.evaluate(async()=>{
    const {createRockyTour}=await import('/src/ui/rocky-tour.js');
    const saved=new Map();let owner='account:tour-first',notify;
    const tour=createRockyTour({service:{getLearnerProgressOwner:()=>owner,subscribe:callback=>{notify=callback;return()=>{};}},storage:{getItem:key=>saved.get(key),setItem:(key,value)=>saved.set(key,value)},onHome:()=>{}});
    tour.arm();tour.lessonEvent({type:'question',step:{id:'switch-card',type:'exam-question'}});
    await new Promise(resolve=>setTimeout(resolve,2900));
    const oldGuide=document.querySelector('.rocky-app-tour:not([hidden])');
    const wasVisible=Boolean(oldGuide);
    owner='account:tour-second';notify();tour.arm();
    oldGuide?.querySelector('[data-rocky-tour-skip]').click();
    document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
    const secondStatus=JSON.parse(saved.get(`tawjihi:rocky-first-run:v1:${owner}`)).status;
    owner='account:tour-first';notify();
    const firstStatus=JSON.parse(saved.get(`tawjihi:rocky-first-run:v1:${owner}`)).status;
    tour.destroy();return {wasVisible,firstStatus,secondStatus};
  });
  assert.deepEqual(switched,{wasVisible:true,firstStatus:'active',secondStatus:'active'},'a leaving guide cannot skip a newly selected learner');
  assert.deepEqual(returning.errors,[]);await returning.context.close();

  const report=await learner('tour-submit-report');
  await report.page.goto(`${base}/?subject=ict&lesson=smartphone-operating-systems&part=android-features`);
  await report.page.locator('[data-question-report]').click();await stage(report.page,'report-send');
  await report.page.locator('[data-question-report-form] button[type=submit]').click();await stage(report.page,'report-close');
  assert.equal((await savedTour(report.page,report.owner)).seen.includes('report-hide'),true,'a submitted report does not leave the walkthrough waiting for its removed hide control');
  await report.page.locator('[data-report-close]').click();await stage(report.page,'slider');
  await report.page.locator('.question-number-track').hover();await report.page.mouse.wheel(-320,0);await stage(report.page,'exit');
  assert.deepEqual(report.errors,[]);await report.context.close();
  console.log('Cross-tab skip, reload, account switches, existing-student enrollment and submitted-report progression passed.');
 }
}finally{await browser.close();await app.close();}
