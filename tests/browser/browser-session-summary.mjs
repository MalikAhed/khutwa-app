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
    const [{createSubjectLearningController},{createViewLifecycle},{createSubjectProgressStore},{createIndexedDbProgressAdapter},{createServerProgressAdapter}]=await Promise.all([
      import('/src/ui/subject-learning.js'),import('/src/app/view-lifecycle.js'),import('/src/services/subject-progress-store.js'),import('/src/services/indexeddb-progress.js'),import('/src/services/server-progress.js')]);
    const stamp=Date.now();
    const response=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'summary-'+stamp,phone:'059'+String(stamp%10000000).padStart(7,'0'),curriculum:'gaza',path:'scientific',password:'Learn123'})});
    const {account}=await response.json();
    if(!account)throw new Error('The isolated summary account was not created');
    window.summaryOwner='account:'+account.id;
    window.summaryLifecycle=createViewLifecycle();
    window.summaryStore=createSubjectProgressStore({adapter:createServerProgressAdapter({local:createIndexedDbProgressAdapter({name:'session-summary-check'})})});
    window.summaryController=createSubjectLearningController({
      elements:{lessonContent:document.querySelector('#lesson-content'),lessonShell:document.querySelector('.lesson-shell'),lessonTitle:document.querySelector('.current-view-title'),lessonStatus:document.querySelector('.lesson-status')},
      productService:{getAccountType:()=> 'free',getLearnerProgressOwner:()=>summaryOwner},progressStore:summaryStore,appTitle:'Test',viewLifecycle:summaryLifecycle,
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
  await evaluate("document.querySelector('[data-template-primary]').click()");
  await waitFor(`document.querySelector('[data-live-authored-step]')?.dataset.lessonStep !== ${JSON.stringify(firstId)}`);
  const nextId = await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep");
  await finish();
  assert.equal(await gain('.subject-gain--xp'), expectedXp);
  assert.equal(await gain('.subject-gain--accuracy'), 100);
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
    window.writtenSaved=false;window.writtenXp=0;
    const step={id:'written-session',type:'exam-question',title:'سؤال',content:{body:'سؤال',solution:'حل'}};
    window.stopWrittenCheck=renderAuthoredInteractiveLesson(document.querySelector('#lesson-content'),'جلسة',{title:'جلسة',locale:'ar'},[step,{...step,id:'written-next'}],{
      isLessonPart:true,
      onAnswer:({correct})=>new Promise(resolve=>setTimeout(()=>{window.writtenSaved=true;window.writtenXp=correct?7:0;resolve({status:'saved'});},120)),
      getCompletionOutcome:()=>({xpGain:writtenXp,totalXp:writtenXp})
    });
  })()`);
  await waitFor("document.querySelector('[data-exam-card]')");
  await evaluate("document.querySelector('[data-exam-card]').click();document.querySelector('[data-exam-correct=true]').click();document.querySelector('[data-template-primary]').click();document.querySelector('.lesson-back').click()");
  await waitFor("document.querySelector('.subject-completion--result') && !document.querySelector('.media-pending')");
  assert.equal(await gain('.subject-gain--accuracy'),100,"written self checks contribute to session accuracy");
  assert.equal(await gain('.subject-gain--xp'),7);
  assert.equal(await evaluate('writtenSaved'),true,'summary waits for an in-flight answer save');
  await evaluate("stopWrittenCheck();summaryStore.close()");
}, { baseUrl:process.env.BROWSER_BASE_URL || null });
console.log("Session summary passed: early exit, saved resume, session statistics, keyboard exit, empty sessions and in-flight written answer saves.");
