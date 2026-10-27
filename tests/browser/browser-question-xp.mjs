import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";
import { getQuestionXp } from "../../src/domain/question-rewards.js";
import { getSubjectRoadmap } from "../../src/data/subject-roadmaps.js";
import { loadSubjectLesson } from "../../src/data/lessons/subject-lesson-registry.js";

await withBrowserPage(async ({ base, send, evaluate, waitFor }) => {
  const lesson = getSubjectRoadmap("mathematics").units[0].lessons[0];
  const key = { subjectId:"mathematics",lessonId:lesson.id,partId:lesson.parts[0].id };
  const stepId = (await loadSubjectLesson(key.subjectId,key.lessonId)).steps.find(step => step.type === "activity").id;
  const route = `?subject=${key.subjectId}&lesson=${key.lessonId}&part=${key.partId}&question=${stepId}`;
  const reward = getQuestionXp({ ...key,stepId });
  const openQuestion = async () => {
    await send("Page.navigate", { url:base+"?page=learn" });
    await waitFor("document.querySelector('.dashboard-stat--level') && !document.querySelector('#app-splash')");
    await evaluate(`history.pushState({},'',${JSON.stringify(route)});dispatchEvent(new PopStateEvent('popstate'))`);
    await waitFor(`document.querySelector('[data-live-authored-step]')?.dataset.lessonStep === ${JSON.stringify(stepId)} && !document.querySelector('.media-pending')`);
  };
  const saved = () => waitFor("document.querySelector('.progress-feedback')?.hidden");
  const totalXp = () => evaluate("fetch('/api/auth/session').then(r=>r.json()).then(({account})=>fetch('/api/progress',{headers:{'X-Progress-Owner':'account:'+account.id}})).then(r=>r.json()).then(({records})=>records.reduce((sum,[,record])=>sum+record.rewardXp,0))");
  const buttonColors = () => evaluate(`(() => {
    const context=document.createElement('canvas').getContext('2d');
    return [...document.querySelectorAll('[data-exam-correct]')].map(button=>{
      context.fillStyle=getComputedStyle(button).backgroundColor;
      context.fillRect(0,0,1,1);
      return {fill:[...context.getImageData(0,0,1,1).data].slice(0,3),ink:getComputedStyle(button).color};
    });
  })()`);
  const flip = async () => {
    await evaluate("document.querySelector('[data-exam-front] .lesson-flashcard-scroll').focus()");
    await send("Input.dispatchKeyEvent", { type:"keyDown",key:"Enter",code:"Enter",windowsVirtualKeyCode:13,text:"\r" });
    await send("Input.dispatchKeyEvent", { type:"keyUp",key:"Enter",code:"Enter",windowsVirtualKeyCode:13 });
    await waitFor("document.querySelector('[data-exam-front]').hidden");
  };
  for (const [index,width,reduced] of [[1,1440,false],[2,390,true]]) {
    await send("Emulation.setDeviceMetricsOverride", { width,height:844,deviceScaleFactor:1,mobile:width<760 });
    await send("Emulation.setEmulatedMedia", { features:[{ name:"prefers-reduced-motion",value:reduced ? "reduce" : "no-preference" }] });
    await send("Page.navigate", { url:base });
    await waitFor("document.querySelector('.visitor-landing') && !document.querySelector('#app-splash')");
    // Seed today's activity so this check can focus on scoring and written controls.
    await evaluate(`(async()=>{
      const response=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'written-xp-${index}',phone:'059100610${index}',password:'Written123',curriculum:'gaza',path:'scientific'})});
      const {account}=await response.json();
      const saved=await fetch('/api/progress',{method:'POST',headers:{'Content-Type':'application/json','X-Progress-Owner':'account:'+account.id},body:JSON.stringify({id:'first-wrong-answer',type:'answer',subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1',correct:false})});
      if(!saved.ok)throw new Error('Could not seed question activity');
    })()`);
    await openQuestion();
    assert.equal(await totalXp(),0);
    // A failed standalone feedback request must not lose the answer's Hard rating.
    await evaluate(`window.originalFetch=window.fetch;window.fetch=(url,options)=>String(url).includes('/question-feedback') && options?.method==='POST'
      ? Promise.resolve(new Response('{}',{status:503,headers:{'Content-Type':'application/json'}})) : window.originalFetch(url,options)`);
    await evaluate("document.querySelector('[data-template-primary]').click()");
    await waitFor("document.querySelector('[data-exam-front]').hidden && !document.querySelector('[data-exam-choice-error]').hidden");
    assert.match(await evaluate("document.querySelector('[data-exam-choice-error]').textContent"),/اختر أولًا/);
    assert.equal(await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep"),stepId,"Continue requires a choice and stays on this question");
    assert.equal(await evaluate("document.querySelectorAll('[data-exam-correct][aria-pressed=true]').length"),0);
    assert.equal(await totalXp(),0,"the reminder does not award XP");
    const baseColors = await buttonColors();
    assert.deepEqual(baseColors[1].fill,[255,75,75],"wrong uses the saturated bright red");
    await evaluate("document.querySelector('[data-exam-correct=true]').click();document.querySelector('[data-exam-correct=false]').click()");
    assert.equal(await evaluate("document.querySelector('[data-exam-choice-error]').hidden"),true,"choosing an answer clears the reminder");
    const selectedRed = (await buttonColors())[1].fill;
    assert.ok(selectedRed.every((value,index)=>value<baseColors[1].fill[index] && value>=baseColors[1].fill[index]*0.94),"selection only slightly darkens red");
    assert.equal(await totalXp(),0,"changing a choice does not award XP");
    assert.equal(await evaluate("document.querySelector('[data-template-primary]').disabled"),false);
    await evaluate("document.querySelector('[data-template-primary]').click()");
    await saved();
    assert.equal(await totalXp(),0,"the final wrong answer earns zero XP");
    await send("Page.navigate", { url:base+"?page=learn" });
    await waitFor("document.querySelector('.dashboard-stat--level') && !document.querySelector('#app-splash')");
    await waitFor("document.querySelector('[data-subject=mathematics] [data-subject-count]')?.textContent.startsWith('1 /')");
    assert.equal(await evaluate("Number(document.querySelector('.dashboard-level-progress').getAttribute('aria-valuenow'))"),0);
    assert.ok(await evaluate("parseFloat(document.querySelector('[data-subject=mathematics] [data-subject-progress]').style.getPropertyValue('--subject-progress')) > 0"));
    await evaluate("document.querySelector('[data-subject=mathematics]').click()");
    await waitFor("document.querySelector('.roadmap-question-ring')");
    assert.equal(await evaluate(`document.querySelector('[data-roadmap-lesson="${lesson.id}"]').parentElement.querySelector('.roadmap-question-ring').getAttribute('aria-valuenow')`),"1");
    await send("Page.navigate", { url:base+"?page=rated-questions" });
    await waitFor("document.querySelector('[data-rated-subject=mathematics][data-rating=hard] [data-rating-count]')?.textContent === '1'");
    await send("Page.navigate", { url:base+"?page=rated-questions" });
    await waitFor("document.querySelector('[data-rated-subject=mathematics][data-rating=hard] [data-rating-count]')?.textContent === '1'");
    for (let attempt=0;attempt<2;attempt++) {
      await openQuestion();
      await flip();
      await evaluate("document.querySelector('[data-exam-correct=false]').click();document.querySelector('[data-exam-correct=true]').focus()");
      await send("Input.dispatchKeyEvent", { type:"keyDown",key:" ",code:"Space",windowsVirtualKeyCode:32,text:" " });
      await send("Input.dispatchKeyEvent", { type:"keyUp",key:" ",code:"Space",windowsVirtualKeyCode:32 });
      assert.equal(await evaluate("document.querySelector('[data-exam-correct=true]').getAttribute('aria-pressed')"),"true");
      assert.equal(await evaluate("document.querySelector('[data-exam-correct=false]').getAttribute('aria-pressed')"),"false");
      assert.equal(await evaluate("document.querySelectorAll('[data-exam-correct]:disabled').length"),0,"both buttons stay available for toggling");
      const colors = await buttonColors();
      const [green,red] = colors.map(color=>color.fill);
      assert.ok(green[1]>green[0] && red[0]>red[1],JSON.stringify(colors));
      assert.ok(green.every((value,index)=>value<=baseColors[0].fill[index] && value>=baseColors[0].fill[index]*0.94),"selection only slightly darkens green");
      assert.ok(colors.every(color=>color.ink==='rgb(255, 255, 255)'));
      assert.equal(await totalXp(),attempt ? reward : 0,"a selection is not saved before Continue");
      assert.equal(await evaluate("document.documentElement.scrollWidth<=innerWidth"),true);
      const { data } = await send("Page.captureScreenshot", { format:"png" });
      await writeFile(`/tmp/learn-written-xp-${width}.png`,Buffer.from(data,"base64"));
      await evaluate("document.querySelector('[data-template-primary]').click()");
      await saved();
      assert.equal(await totalXp(),reward,"correct self checks award once across revisits");
    }
    await send("Page.navigate", { url:base+"?page=learn" });
    await waitFor("document.querySelector('.dashboard-stat--level') && !document.querySelector('.media-pending,#app-splash')");
    assert.equal(await evaluate("Number(document.querySelector('.dashboard-level-progress').getAttribute('aria-valuenow'))"),reward);
    await evaluate("document.querySelector('[data-auth-sign-out]').click()");
    await waitFor("document.querySelector('.visitor-landing')");
    console.log(`${width}px: wrong=0 XP, first correct only, reload, keyboard and written self-check controls passed${reduced ? ' with reduced motion' : ''}.`);
  }
});
