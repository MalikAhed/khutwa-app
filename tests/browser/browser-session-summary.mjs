import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";

await withBrowserPage(async ({ base, send, evaluate, waitFor }) => {
  // Exercise the real lesson controller and HTTP store without the unrelated
  // account/startup animation; each check uses disposable browser/server state.
  await send("Network.setBlockedURLs", {urls:["*/src/bootstrap.js"]});
  await send("Page.navigate", {url:base});
  await waitFor("document.readyState === 'complete'");
  await evaluate(`(async()=>{
    document.querySelectorAll('link[rel=stylesheet]').forEach(link=>link.media='all');
    document.body.removeAttribute('data-startup');
    document.body.innerHTML='<main class="page lesson-mode"><section class="lesson-view is-visible"><div class="lesson-shell"><div class="lesson-top"><button type="button" class="lesson-back">×</button><div class="lesson-top-title"><span class="current-view-title"></span></div><span class="lesson-status"></span></div><div class="lesson-card" id="lesson-content" tabindex="-1"></div></div></section></main>';
    const [{createSubjectLearningController},{createViewLifecycle},{createSubjectProgressStore},{createIndexedDbProgressAdapter},{createServerProgressAdapter},{createLearnerResources}]=await Promise.all([
      import('/src/ui/subject-learning.js'),import('/src/app/view-lifecycle.js'),import('/src/services/subject-progress-store.js'),import('/src/services/indexeddb-progress.js'),import('/src/services/server-progress.js'),import('/src/services/learner-resources.js')]);
    const stamp=Date.now();
    const response=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'summary-'+stamp,phone:'059'+String(stamp%10000000).padStart(7,'0'),curriculum:'gaza',path:'scientific',password:'Learn123'})});
    const {account}=await response.json();
    if(!account)throw new Error('The isolated summary account was not created');
    window.summaryOwner='account:'+account.id;
    window.summaryLifecycle=createViewLifecycle();
    window.summaryResources=createLearnerResources({getAccountType:()=> 'free',apiBase:'/api/progress'});
    window.summaryStore=createSubjectProgressStore({resourceStore:summaryResources,adapter:createServerProgressAdapter({local:createIndexedDbProgressAdapter({name:'session-summary-check'}),requiresOnlineAnswer:()=>true,onResources:summaryResources.confirm})});
    window.summaryController=createSubjectLearningController({
      elements:{lessonContent:document.querySelector('#lesson-content'),lessonShell:document.querySelector('.lesson-shell'),lessonTitle:document.querySelector('.current-view-title'),lessonStatus:document.querySelector('.lesson-status')},
      productService:{getAccountType:()=> 'free',getLearnerProgressOwner:()=>summaryOwner},progressStore:summaryStore,resourceStore:summaryResources,appTitle:'Test',viewLifecycle:summaryLifecycle,
      setViewMode:()=>{},showContentView:()=>{},writeRoute:params=>history.replaceState(null,'','?'+new URLSearchParams(params)),onComingSoon:()=>{},onRequireAccount:()=>{throw new Error('Unexpected account redirect');}
    });
    document.querySelector('.lesson-back').addEventListener('click',()=>summaryController.returnToRoadmap());
    window.openSummaryLesson=()=>summaryController.openSubject('ict',null,{lessonId:'database-management',partId:'access-basics'});
    await document.fonts.ready;
  })()`);
  const route = "?subject=ict&lesson=database-management&part=access-basics";
  const open = async () => {
    await evaluate("openSummaryLesson()");
    await waitFor("document.querySelector('[data-ui-lab-answer], [data-exam-card]') && !document.querySelector('.media-pending')");
  };
  const finish = async () => {
    await evaluate("document.querySelector('.lesson-back').focus();document.querySelector('.lesson-back').click()");
    await waitFor("document.querySelector('.subject-completion--result') && !document.querySelector('.media-pending')");
    assert.match(await evaluate("document.querySelector('.subject-completion h1').textContent"), /جلستك/);
    assert.equal(await evaluate("location.search"), route, "summary keeps the lesson URL until the learner leaves");
  };
  const gain = selector => evaluate(`Number(document.querySelector('${selector} [data-gain-count]')?.dataset.gainCount)`);
  await open();
  const firstId = await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep");
  const expectedXp = await evaluate(`import('/src/domain/question-rewards.js').then(({getQuestionXp})=>getQuestionXp({subjectId:'ict',stepId:${JSON.stringify(firstId)}}))`);
  await evaluate("document.querySelector('[data-ui-lab-answer][data-correct=true]').click();document.querySelector('[data-template-primary]').click()");
  await waitFor("document.querySelector('.lesson-daily-streak[open]')");
  await evaluate("document.querySelector('.lesson-daily-streak').close()");
  await waitFor("!document.querySelector('.lesson-daily-streak')");
  await evaluate("document.querySelector('[data-question-explain]').click()");
  await waitFor("document.querySelector('.question-explanation-dialog[open]')");
  await evaluate("document.querySelector('.question-explanation-dialog').close()");
  await waitFor("!document.querySelector('.question-explanation-dialog')");
  await evaluate("document.querySelector('[data-template-primary]').click()");
  await waitFor(`document.querySelector('[data-live-authored-step]')?.dataset.lessonStep !== ${JSON.stringify(firstId)}`);
  const nextId = await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep");
  await finish();
  assert.equal(await gain('.subject-gain--xp'), expectedXp);
  assert.equal(await gain('.subject-gain--accuracy'), 100);
  assert.equal(await evaluate("Number(document.querySelector('[data-session-gems]').textContent)"),7,'session gems come from its acknowledged answer receipt');
  assert.equal(await evaluate("summaryResources.get(summaryOwner).gems"),207,'the reward increases the spendable balance');
  assert.equal(await evaluate("fetch('/api/progress',{headers:{'X-Progress-Owner':summaryOwner}}).then(response=>response.json()).then(data=>data.resources.gems)"),207,'the API retains the credited gems');
  for(const [width,height] of [[390,844],[320,568]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:true});
    const layout=await evaluate(`(()=>{const gems=document.querySelector('.subject-session-gems').getBoundingClientRect(),task=document.querySelector('.level-layout-task').getBoundingClientRect();return {visible:gems.top>=task.top&&gems.bottom<=task.bottom,overflow:document.documentElement.scrollWidth>innerWidth};})()`);
    assert.equal(layout.visible,true,'session gems stay visible on mobile');assert.equal(layout.overflow,false);
    const shot=await send('Page.captureScreenshot',{format:'png'});
    await writeFile(`/tmp/khutwa-session-gems-${width}.png`,Buffer.from(shot.data,'base64'));
  }
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
  const elapsed = await gain('.subject-gain--quick');
  await waitFor("document.querySelector('.subject-completion').dataset.animationState === 'complete'");
  await evaluate("window.resumedAt=performance.now();document.querySelector('[data-authored-review]').click()");
  assert.equal(await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep"), nextId);
  await finish();
  assert.equal(await gain('.subject-gain--xp'), expectedXp, "continuing the same session keeps its XP total");
  const resumedSeconds = await evaluate('(performance.now()-resumedAt)/1000');
  assert.ok(await gain('.subject-gain--quick') <= elapsed + Math.ceil(resumedSeconds) + 1, "summary viewing time is excluded");
  await evaluate("document.querySelector('[data-authored-restart]').focus()");
  await send("Input.dispatchKeyEvent", { type:"keyDown", key:"Enter", code:"Enter", windowsVirtualKeyCode:13, text:"\r" });
  await send("Input.dispatchKeyEvent", { type:"keyUp", key:"Enter", code:"Enter", windowsVirtualKeyCode:13 });
  await waitFor("document.querySelector('.subject-roadmap') && location.search === '?subject=ict'");
  assert.equal(await evaluate("Number(document.querySelector('.roadmap-question-ring').getAttribute('aria-valuenow'))"), 1, "stopping early never completes unanswered questions");
  await open();
  assert.equal(await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep"), nextId, "reopening resumes the saved question");
  await evaluate("document.querySelector('.lesson-back').click()");
  await waitFor("document.querySelector('.subject-roadmap') && location.search === '?subject=ict'");
  assert.equal(await evaluate("Boolean(document.querySelector('.subject-completion--result'))"), false, "an empty session exits without a completion screen");

  // Written answers count toward accuracy, including a save still in flight.
  await evaluate(`(async()=>{
    summaryLifecycle.clear();
    const {renderAuthoredInteractiveLesson}=await import('/src/ui/lesson/authored.js');
    window.writtenSaved=false;window.writtenSaving=false;window.writtenXp=0;
    const step={id:'written-session',type:'exam-question',title:'سؤال',content:{body:'سؤال',finalAnswer:'حل',solution:'حل'}};
    window.stopWrittenCheck=renderAuthoredInteractiveLesson(document.querySelector('#lesson-content'),'جلسة',{title:'جلسة',locale:'ar'},[step,{...step,id:'written-next'}],{
      isLessonPart:true,
      onAnswer:({correct})=>new Promise(resolve=>{window.writtenSaving=true;setTimeout(()=>{window.writtenSaved=true;window.writtenXp=correct?7:0;resolve({status:'saved'});},120);}),
      getCompletionOutcome:()=>({xpGain:writtenXp,totalXp:writtenXp})
    });
  })()`);
  await waitFor("document.querySelector('[data-exam-card]')");
  await evaluate("document.querySelector('[data-exam-card]').click();document.querySelector('[data-exam-correct=true]').click();document.querySelector('[data-template-primary]').click()");
  await waitFor('writtenSaving');
  await evaluate("document.querySelector('.lesson-back').click()");
  await waitFor("document.querySelector('.subject-completion--result') && !document.querySelector('.media-pending')");
  assert.equal(await gain('.subject-gain--accuracy'),100,"written self checks contribute to session accuracy");
  assert.equal(await gain('.subject-gain--xp'),7);
  assert.equal(await evaluate('writtenSaved'),true,'summary waits for an in-flight answer save');
  await evaluate(`(async()=>{
    stopWrittenCheck();
    const {renderAuthoredInteractiveLesson}=await import('/src/ui/lesson/authored.js');
    window.failedAnswerEvents=[];
    const step={id:'rejected-mcq',type:'mcq',title:'سؤال',content:{prompt:'اختر الإجابة الصحيحة',answers:[{id:'a',text:'صحيحة',correct:true},{id:'b',text:'خاطئة',correct:false}]}};
    window.stopRejectedQuestion=renderAuthoredInteractiveLesson(document.querySelector('#lesson-content'),'جلسة',{title:'جلسة',locale:'ar'},[step],{
      isLessonPart:true,onAnswer:()=>Promise.reject(new Error('Interrupted save')),
      onLessonEvent:event=>failedAnswerEvents.push(event.type)
    });
  })()`);
  await waitFor("document.querySelector('[data-ui-lab-answer]') && !document.querySelector('.media-pending')");
  await evaluate("document.querySelector('[data-ui-lab-answer][data-correct=true]').click();document.querySelector('[data-ui-lab-check]').click()");
  await waitFor("document.querySelector('[data-ui-lab-feedback]').classList.contains('is-blocked')");
  assert.equal(await evaluate("failedAnswerEvents.includes('answer')"),false,'a rejected answer does not start coaching');
  await evaluate("stopRejectedQuestion();summaryStore.close()");
}, { baseUrl:process.env.BROWSER_BASE_URL || null });
console.log("Session summary passed: early exit, saved resume, session statistics, keyboard exit, empty sessions and in-flight written answer saves.");
