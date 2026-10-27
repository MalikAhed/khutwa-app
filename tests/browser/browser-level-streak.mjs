import assert from "node:assert/strict";
import { getQuestionXp } from "../../src/domain/question-rewards.js";
import { writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";

// Exercise the real lesson/dashboard components and HTTP progress adapter in an
// isolated host. Cold-start performance belongs to the standard browser suite.
await withBrowserPage(async ({ base, send, evaluate, waitFor }) => {
  await send("Network.setBlockedURLs", { urls:["*/src/bootstrap.js"] });
  await send("Page.navigate", { url:base });
  await waitFor("document.readyState === 'complete'");
  await evaluate(`(async () => {
    document.querySelectorAll('link[rel=stylesheet]').forEach(link=>link.media='all');
    document.body.removeAttribute('data-startup');
    document.body.innerHTML='<main id="fixture" class="column" dir="rtl"></main>';
    const [{renderAuthoredInteractiveLesson},{renderLearnerDashboardMarkup},{createSubjectProgressStore},{createIndexedDbProgressAdapter},{createServerProgressAdapter},{loadSubjectLessonPart},{compileLessonMarkdown},{getSubjectRoadmap}] = await Promise.all([
      import('/src/ui/lesson/authored.js'), import('/src/ui/learner-dashboard.js'), import('/src/services/subject-progress-store.js'),
      import('/src/services/indexeddb-progress.js'), import('/src/services/server-progress.js'), import('/src/data/lessons/subject-lesson-registry.js'),
      import('/src/markdown/lesson-model.js'), import('/src/data/subject-roadmaps.js')]);
    const response=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'level-streak',phone:'0598000031',curriculum:'gaza',path:'scientific',password:'Learn123'})});
    const account=(await response.json()).account;
    window.rewardKey={ownerId:'account:'+account.id,subjectId:'ict',lessonId:'database-management',partId:'access-basics'};
    const lesson=await loadSubjectLessonPart('ict','database-management','access-basics');
    const steps=compileLessonMarkdown(lesson.authoringSource).parsed.steps.filter(step=>step.type==='mcq').slice(0,2);
    window.reopenRewards=async()=>{
      await window.rewardStore?.close();
      window.rewardStore=createSubjectProgressStore({adapter:createServerProgressAdapter({local:createIndexedDbProgressAdapter({name:'level-streak-check'})})});
      await rewardStore.ready(rewardKey.ownerId);
    };
    await reopenRewards();
    window.mountRewardLesson=(complete=false)=>{
      window.stopRewardLesson?.();
      document.querySelector('#fixture').removeAttribute('style');
      document.querySelector('#fixture').innerHTML='<section class="lesson-view is-visible"><div class="lesson-shell"><div class="lesson-top"><button class="lesson-back">×</button><div class="lesson-top-title"></div><div class="lesson-status"></div></div><article class="lesson-card"></article></div></section>';
      window.stopRewardLesson=renderAuthoredInteractiveLesson(document.querySelector('.lesson-card'),'الدرس',lesson,steps,{
        isLessonPart:true,
        progress:complete?{completedStepIds:steps.map(step=>step.id),completedAt:'2026-09-06'}:{completedStepIds:[]},
        onAnswer:answer=>rewardStore.recordAnswer({...rewardKey,...answer}),
        getCompletionOutcome:()=>({...rewardStore.getOutcome({...rewardKey,totalParts:1}),xpGain:0,alreadyCompleted:complete}),
        onFinishLesson:()=>{window.previewFinished=true;stopRewardLesson();}
      });
    };
    window.mountRewardHome=()=>{
      window.stopRewardLesson?.();window.stopRewardLesson=null;
      document.querySelector('#fixture').style.cssText='max-width:1100px;margin:24px auto;padding:16px';
      document.querySelector('#fixture').innerHTML=renderLearnerDashboardMarkup({actor:'student',account:{type:'free'},learning:rewardStore.getHomeLearning(rewardKey.ownerId,[getSubjectRoadmap('ict')])},'طالب');
    };
    mountRewardLesson();
    await document.fonts.ready;
  })()`);
  const answer = correct => evaluate(`document.querySelector('[data-ui-lab-answer][data-correct="${correct}"]').click();document.querySelector('[data-template-primary]').focus();document.querySelector('[data-template-primary]').click()`);
  const xp = () => evaluate("rewardStore.getOutcome({...rewardKey,totalParts:1}).totalXp");
  const firstId = await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep");
  await answer(false);
  await waitFor("document.querySelector('.lesson-daily-streak[open]')");
  assert.deepEqual(await evaluate("({count:document.querySelector('.completion-streak-count strong').dataset.gainCount,focused:document.querySelector('.lesson-daily-streak').contains(document.activeElement)})"), {count:"1",focused:true});
  assert.equal(await evaluate("getComputedStyle(document.querySelector('.lesson-daily-streak')).borderRadius"), "0px");
  await waitFor("document.querySelector('.completion-streak-count strong').textContent === '1' && document.querySelector('.completion-streak-rocky').currentSrc.includes('happy-jump')");
  await waitFor("document.querySelector('.lesson-daily-streak').dataset.streakReady === 'true'");
  assert.equal(await evaluate("document.querySelector('.lesson-daily-streak').open"), true, "the celebration stays open until Continue");
  await evaluate("document.querySelector('.lesson-daily-streak button').click()");
  await waitFor("!document.querySelector('.lesson-daily-streak')");
  assert.equal(await xp(), 0);
  assert.equal(await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep"), firstId);
  assert.equal(await evaluate("document.querySelector('[data-ui-lab-feedback]').classList.contains('is-wrong')"), true);
  assert.equal(await evaluate("document.activeElement.matches('[data-template-primary]')"), true);

  for (let repeat=0; repeat<2; repeat+=1) {
    await evaluate("reopenRewards().then(()=>mountRewardLesson())");
    await answer(true);
    await waitFor("rewardStore.getSaveState(rewardKey.ownerId)==='saved'");
    assert.equal(await xp(), getQuestionXp({subjectId:"ict",stepId:firstId}));
    assert.equal(await evaluate("Boolean(document.querySelector('.lesson-daily-streak'))"), false);
  }
  await evaluate("mountRewardHome()");
  for (const width of [1440,390,320]) {
    await send("Emulation.setDeviceMetricsOverride", {width,height:900,deviceScaleFactor:1,mobile:width<600});
    const layout=await evaluate(`(() => {
      const bar=document.querySelector('.dashboard-level-progress'), fill=bar.firstElementChild;
      const track=bar.getBoundingClientRect(), rect=fill.getBoundingClientRect();
      return {right:Math.abs(rect.right-track.right),ratio:rect.width/track.width,shine:getComputedStyle(fill,'::before').backgroundColor,
        cards:[...document.querySelectorAll('.dashboard-stat')].map(node=>node.getBoundingClientRect().height),
        overflow:document.documentElement.scrollWidth>innerWidth,level:document.querySelector('.dashboard-stat--level strong').textContent};
    })()`);
    assert.equal(layout.overflow,false);
    assert.ok(layout.right<1,"XP starts at the right edge");
    assert.ok(Math.abs(layout.ratio-getQuestionXp({subjectId:"ict",stepId:firstId})/100)<.01);
    assert.equal(layout.shine,"rgb(255, 240, 163)");
    assert.equal(layout.level,"Lv.1");
    assert.ok(Math.abs(layout.cards[0]-layout.cards[1])<1);
    const shot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`/tmp/level-streak-home-${width}.png`,Buffer.from(shot.data,"base64"));
  }

  // A separate learner has a separate daily celebration, including reduced motion.
  await evaluate(`(async()=>{
    await fetch('/api/auth/sign-out',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});
    const response=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'level-streak-second',phone:'0598000032',curriculum:'gaza',path:'scientific',password:'Learn123'})});
    rewardKey.ownerId='account:'+(await response.json()).account.id;
    await reopenRewards();mountRewardLesson();
  })()`);
  await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"reduce"}]});
  await answer(false);
  await waitFor("document.querySelector('.lesson-daily-streak[open]') && document.querySelector('.completion-streak-fire')?.complete");
  assert.equal(await evaluate("document.querySelector('.completion-streak-fire').currentSrc.endsWith('streak-fire-burning-reduced.svg')"),true);
  assert.equal(await evaluate("document.querySelector('.lesson-daily-streak').scrollWidth<=document.querySelector('.lesson-daily-streak').clientWidth"),true);
  const streakShot=await send("Page.captureScreenshot",{format:"png"});
  await writeFile("/tmp/level-streak-mobile.png",Buffer.from(streakShot.data,"base64"));
  await send("Input.dispatchKeyEvent",{type:"keyDown",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
  await send("Input.dispatchKeyEvent",{type:"keyUp",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
  await waitFor("!document.querySelector('.lesson-daily-streak')");
  assert.equal(await evaluate("document.querySelector('[data-ui-lab-feedback]').classList.contains('is-wrong')"),true);
  await evaluate("mountRewardLesson(true)");
  await waitFor("document.querySelector('.subject-completion--result')");
  assert.equal(await evaluate("document.querySelector('.subject-gain--xp [data-gain-count]').dataset.gainCount"),"0");
  assert.equal(await evaluate("document.querySelector('.level-layout-action-group').firstElementChild.matches('[data-authored-restart]')"), true, "keyboard order follows the stacked actions");
  for (const width of [1440,390]) {
    await send("Emulation.setDeviceMetricsOverride", {width,height:900,deviceScaleFactor:1,mobile:width<600});
    const buttons = await evaluate(`(() => {
      const map = document.querySelector('[data-authored-restart]').getBoundingClientRect();
      const learn = document.querySelector('[data-authored-review]').getBoundingClientRect();
      return {mapBottom:map.bottom,learnTop:learn.top,mapWidth:map.width,learnWidth:learn.width};
    })()`);
    assert.ok(buttons.mapBottom < buttons.learnTop, "the map action sits above returning to learning");
    assert.ok(Math.abs(buttons.mapWidth-buttons.learnWidth)<1, "completion actions share the same width");
  }
  await evaluate("document.querySelector('[data-authored-restart]').click()");
  assert.equal(await evaluate("window.previewFinished && !document.querySelector('.subject-completion--streak')"),true);
  const concurrent = await evaluate(`(async()=>{
    const [{createSubjectProgressStore},{createIndexedDbProgressAdapter}]=await Promise.all([
      import('/src/services/subject-progress-store.js'),import('/src/services/indexeddb-progress.js')]);
    const stores=[0,1].map(()=>createSubjectProgressStore({adapter:createIndexedDbProgressAdapter({name:'level-streak-concurrency'})}));
    const key={...rewardKey,ownerId:'fixture-learner',stepId:'exam-p09-q1-1',correct:true};
    await Promise.all(stores.map(store=>store.ready(key.ownerId)));
    const answers=await Promise.all(stores.map(store=>store.recordAnswer(key)));
    await stores[0].refresh(key.ownerId);
    const result={claims:answers.filter(answer=>answer.dailyStreak).length,xp:stores[0].getOutcome({...key,totalParts:1}).totalXp};
    await Promise.all(stores.map(store=>store.close()));
    return result;
  })()`);
  assert.deepEqual(concurrent,{claims:1,xp:getQuestionXp({subjectId:"ict",stepId:"exam-p09-q1-1"})});
});
console.log("Level/streak UI passed: RTL shine at desktop/mobile widths, first wrong answer, manual Continue, reload, repeat XP, keyboard, reduced motion and completion.");
