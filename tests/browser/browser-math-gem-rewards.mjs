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
    window.summaryStore=createSubjectProgressStore({resourceStore:summaryResources,adapter:createServerProgressAdapter({local:createIndexedDbProgressAdapter({name:'session-summary-check'}),requiresOnlineAnswer:()=>true,fetchImpl:(...args)=>fetch(...args),onResources:summaryResources.confirm})});
    window.summaryController=createSubjectLearningController({
      elements:{lessonContent:document.querySelector('#lesson-content'),lessonShell:document.querySelector('.lesson-shell'),lessonTitle:document.querySelector('.current-view-title'),lessonStatus:document.querySelector('.lesson-status')},
      productService:{getAccountType:()=> 'free',getLearnerProgressOwner:()=>summaryOwner},progressStore:summaryStore,resourceStore:summaryResources,appTitle:'Test',viewLifecycle:summaryLifecycle,
      setViewMode:()=>{},showContentView:()=>{},writeRoute:params=>history.replaceState(null,'','?'+new URLSearchParams(params)),onComingSoon:()=>{},onRequireAccount:()=>{throw new Error('Unexpected account redirect');}
    });
    document.querySelector('.lesson-back').addEventListener('click',()=>summaryController.returnToRoadmap());
    window.openSummaryLesson=(reviewStepId=null)=>summaryController.openSubject('mathematics',null,{lessonId:'average-change',partId:'average-change-practice',reviewStepId});
    await document.fonts.ready;
  })()`);


  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  const first='math-book-p005-activity1';
  for(const [index,correct,gems,session] of [[0,false,200,0],[1,true,207,7],[2,true,207,0]]){
    await send('Emulation.setDeviceMetricsOverride',{width:index===1?390:1440,height:844,deviceScaleFactor:1,mobile:index===1});
    await evaluate(`openSummaryLesson(${JSON.stringify(first)})`);
    await waitFor("document.querySelector('[data-exam-card]') && !document.querySelector('.media-pending')");
    await evaluate("document.querySelector('[data-exam-card]').click()");
    await waitFor("!document.querySelector('[data-exam-solution]').hidden");
    if(index===1) await evaluate(`(()=>{
      const originalFetch=window.fetch;let dropped=false;
      window.fetch=async(...args)=>{const response=await originalFetch(...args);
        if(!dropped && args[0]==='/api/progress' && args[1]?.method==='POST' && JSON.parse(args[1].body).type==='answer'){
          dropped=true;await response.text();throw new Error('Lost answer receipt after commit');
        }return response;};
    })()`);
    await evaluate(`document.querySelector('[data-exam-correct=${correct}]').click();document.querySelector('.lesson-back').click()`);
    if(index===1){
      await waitFor("document.querySelector('[data-heart-message]') && !document.querySelector('#lesson-content').inert");
      assert.equal(await evaluate("Boolean(document.querySelector('[data-session-gems]'))"),false,'failed confirmation keeps the question open');
      await evaluate("document.querySelector('.lesson-back').click();document.querySelector('.lesson-back').click()");
    }

    await waitFor("document.querySelector('[data-session-gems]')");
    const actual=await evaluate("({gems:summaryResources.get(summaryOwner).gems,session:Number(document.querySelector('[data-session-gems]').textContent)})");
    assert.deepEqual(actual,{gems,session},'ending a written-question session saves the selected answer and credits only its first correct solve');
    if(index===1){const shot=await send('Page.captureScreenshot',{format:'png'});await writeFile('/tmp/khutwa-math-gem-session.png',Buffer.from(shot.data,'base64'));}
    await evaluate("document.querySelector('.lesson-daily-streak')?.close();document.querySelector('[data-authored-restart]').click()");
    await waitFor("document.querySelector('.subject-roadmap')");
  }
});
console.log('First free math lesson: wrong answer = 0, first correct = 7, repeated correct = 0, including ending directly after selection.');
