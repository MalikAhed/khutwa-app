import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";

const output = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-rocky-tour";
await mkdir(output,{ recursive:true });
await withBrowserPage(async ({ base,send,evaluate,waitFor,onEvent }) => {
  const exceptions = [];
  onEvent(event => { if (event.method === "Runtime.exceptionThrown") exceptions.push(event.params.exceptionDetails.text); });
  const click = selector => evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
  const realClick = async selector => {
    const point = await evaluate(`(() => {
      const e=document.querySelector(${JSON.stringify(selector)}),r=e.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
      return {x,y,available:x>=0&&x<innerWidth&&y>=0&&y<innerHeight&&e.contains(document.elementFromPoint(x,y))};
    })()`);
    assert.ok(point.available,`${selector} is visible and not covered by Rocky`);
    delete point.available;
    await send("Input.dispatchMouseEvent",{ type:"mousePressed",button:"left",clickCount:1,...point });
    await send("Input.dispatchMouseEvent",{ type:"mouseReleased",button:"left",clickCount:1,...point });
  };
  const fill = (name,value) => evaluate(`(() => { const e=document.querySelector('[name="${name}"]'); e.value=${JSON.stringify(value)}; e.dispatchEvent(new Event('input',{bubbles:true})); })()`);
  const ready = step => waitFor(`document.querySelector('[data-onboarding-step="${step}"]:not([hidden])') && !document.querySelector('.onboarding-step:is(.media-pending,.is-entering-forward,.is-entering-backward,.is-leaving-forward,.is-leaving-backward)')`);
  const stage = async step => {
    await waitFor(`document.querySelector('.rocky-app-tour:not([hidden]):not(.is-flying):not(.is-moving)[data-tour-step="${step}"]') && !document.querySelector('.media-pending')`);
    await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
  };
  const snapshot = async name => {
    const { data } = await send("Page.captureScreenshot",{ format:"png" });
    await writeFile(`${output}/${name}.png`,Buffer.from(data,"base64"));
  };
  const key = async value => {
    const windowsVirtualKeyCode = { Enter:13, Escape:27, Tab:9 }[value];
    await send("Input.dispatchKeyEvent",{ type:"keyDown",key:value,code:value,windowsVirtualKeyCode });
    await send("Input.dispatchKeyEvent",{ type:"keyUp",key:value,code:value,windowsVirtualKeyCode });
  };
  const layout = async () => {
    await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
    const result = await evaluate(`(() => {
      const guide=document.querySelector('.rocky-app-tour-guide').getBoundingClientRect();
      const slot=document.querySelector('.rocky-coach-slot')?.getBoundingClientRect();
      return {fits:guide.left>=0&&guide.top>=0&&guide.right<=innerWidth&&guide.bottom<=innerHeight,
        overflow:document.documentElement.scrollWidth>innerWidth,
        separated:!slot||Math.abs(slot.bottom-guide.bottom)<2||guide.right<=document.querySelector('#lesson-content').getBoundingClientRect().left,
        rounded:[...document.querySelectorAll('.rocky-tour-rings rect')].every(e=>Number(e.getAttribute('rx'))>=14),
        rocky:document.querySelector('.rocky-app-tour-character').getBoundingClientRect().width};
    })()`);
    assert.ok(result.fits && result.separated && result.rounded && !result.overflow,JSON.stringify(result));
    assert.ok(result.rocky >= 110,"Rocky remains large enough to read on mobile");
    assert.ok(await evaluate("Math.abs(document.querySelector('.rocky-tour-shade').getScreenCTM().a-1)<.001"),"SVG coordinates remain exact with desktop scrollbars");
  };
  for (const [width,height,reduced] of [[1440,900,false],[390,844,true]]) {
    await send("Emulation.setDeviceMetricsOverride",{ width,height,deviceScaleFactor:1,mobile:width<760 });
    await send("Emulation.setEmulatedMedia",{ features:[{ name:"prefers-reduced-motion",value:reduced ? "reduce" : "no-preference" }] });
    await send("Page.navigate",{ url:base+"?flow=register" });
    await waitFor("document.querySelector('[data-register-form]') && !document.querySelector('#app-splash')");
    for (const step of ["intro","0","1","2","3","4"]) {
      await ready(step);
      if (step === "0") await fill("username",`rocky-tour-${width}`);
      if (step === "1") await click("input[name=curriculum][value=gaza]");
      if (step === "2") await click("input[name=path][value=scientific]");
      if (step === "3") await fill("phone",width === 390 ? "0591004002" : "0591004001");
      if (step === "4") await fill("password","Tour-pass-123");
      await click(`[data-onboarding-step="${step}"] .visitor-primary`);
    }
    await stage("answer"); await layout();
    assert.equal(await evaluate("new URLSearchParams(location.search).get('subject')"),"ict","signup opens ICT without a subject choice");
    assert.equal(await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep"),"exam-p09-q1-1","the demo begins with the first source MCQ");
    await send("Page.reload"); await stage("answer"); await layout();
    assert.equal(await evaluate("!!document.querySelector('.lesson-view').closest('[inert]')"),false,"reload does not leave the lesson inert");
    assert.equal(await evaluate("document.querySelector('.lesson-top-title').getAttribute('aria-valuemax')"),"2");
    assert.equal(await evaluate("document.querySelector('[data-rocky-tour-next]').hidden"),true,"lesson controls replace explanation Next gates");
    await waitFor("document.querySelector('.rocky-app-tour-character svg')");
    if (reduced) assert.equal(await evaluate("document.querySelector('.rocky-app-tour-character').getAnimations({subtree:true}).length"),0);
    else {
      await waitFor("document.querySelector('.rocky-app-tour-character').dataset.pose==='attentive' && !document.querySelector('.rocky-app-tour').classList.contains('is-speaking')");
      assert.equal(await evaluate("document.querySelector('.rocky-app-tour-character').getAnimations({subtree:true}).length"),0,"gestures finish while the learner thinks");
    }
    assert.equal(await evaluate("!!document.querySelector('[data-tour-count],[data-rocky-tour-skip]')"),false,"coaching has no extra labels or Skip link");
    if (width < 760) assert.ok(await evaluate(`(() => {
      const answers=[...document.querySelectorAll('.level-answer-list button')].map(e=>e.getBoundingClientRect());
      return answers.every((r,i)=>!i||(r.top>=answers[i-1].bottom&&Math.abs(r.left-answers[0].left)<1));
    })()`),"mobile answers are stacked in a single column");
    await snapshot(`${width}-mcq`);
    const geometry = await evaluate(`(() => {
      const question=document.querySelector('.ui-lab-mcq'),r=question.getBoundingClientRect();
      const highlight=document.querySelector('.rocky-tour-rings rect');
      const answers=question.querySelector('.level-answer-list').getBoundingClientRect();
      const prompt=question.querySelector('h1').getBoundingClientRect();
      return Math.abs(Number(highlight.getAttribute('x'))-(r.left-4))<2 &&
        Math.abs(Number(highlight.getAttribute('width'))-(r.width+8))<2 && answers.top-prompt.bottom<60;
    })()`);
    assert.ok(geometry,"the rounded highlight follows the question and answers stay close to the prompt");
    const openingTop = await evaluate("document.querySelector('.rocky-app-tour-guide').getBoundingClientRect().top");
    if (!reduced) await evaluate(`(() => { window.rockyTravelFrames=[]; const until=performance.now()+800;
      const record=()=>{window.rockyTravelFrames.push(Math.round(document.querySelector('.rocky-app-tour-guide').getBoundingClientRect().top));if(performance.now()<until)requestAnimationFrame(record);};requestAnimationFrame(record);
    })()`);
    await realClick("[data-ui-lab-answer][data-correct=true]"); await stage("check"); await layout();
    assert.ok(await evaluate(`(() => {const guide=document.querySelector('.rocky-app-tour-guide').getBoundingClientRect(),target=document.querySelector('[data-ui-lab-check]').getBoundingClientRect();return guide.top>${openingTop}+100&&target.top-guide.bottom>=0&&target.top-guide.bottom<70;})()`),"Rocky moves down beside Check without covering it");
    if (reduced) assert.equal(await evaluate("document.querySelector('.rocky-app-tour-guide').getAnimations().length"),0,"reduced motion relocates Rocky without travel animation");
    if (!reduced) assert.ok(await evaluate("new Set(window.rockyTravelFrames).size>3"),"Rocky visibly travels between the question and Check");
    await snapshot(`${width}-check`);
    await realClick("[data-ui-lab-check]"); await stage("rating"); await layout();
    await realClick("[data-question-rating=easy]");
    await waitFor("document.querySelector('.question-rating-save-status')?.textContent === '' && document.querySelector('[data-question-rating=easy]').checked");
    await snapshot(`${width}-rating`);
    await realClick("[data-template-primary]"); await stage("flashcard"); await layout();
    await snapshot(`${width}-flashcard`);
    assert.equal(await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonPresentation"),"flashcard");
    await evaluate("document.querySelector('[data-exam-front] .lesson-flashcard-scroll').focus()");
    await key("Enter"); await stage("flashcard-answer"); await layout();
    assert.ok(await evaluate("(() => {const rocky=document.querySelector('.rocky-app-tour-character').getBoundingClientRect(),flag=document.querySelector('[data-question-report]').getBoundingClientRect();return rocky.left<flag.right+16&&rocky.top-flag.bottom<45;})()"),"Rocky moves to the left beside the report flag");
    await snapshot(`${width}-report`);
    await realClick("[data-question-report]"); await waitFor("document.querySelector('.question-report-dialog[open]')");
    await key("Escape"); await waitFor("!document.querySelector('.question-report-dialog')");
    assert.equal(await evaluate("document.querySelector('.rocky-app-tour').dataset.tourStep"),"flashcard-answer","closing the report dialog does not skip the tour");
    await realClick("[data-question-report]"); await fill("details","Guided tour browser report.");
    await click("[data-question-report-form] [type=submit]");
    await waitFor("document.querySelector('.question-report-dialog')?.textContent.includes('تم إرسال بلاغك')");
    await click(".question-report-dialog button"); await waitFor("!document.querySelector('.question-report-dialog')");
    await realClick("[data-template-primary]");
    await waitFor("document.querySelector('.subject-completion')?.dataset.animationState==='complete'");
    assert.equal(await evaluate("document.querySelector('.rocky-app-tour').hidden && !document.querySelector('.rocky-coach-slot')"),true);
    assert.equal(await evaluate("document.querySelector('[data-gain-count]').textContent"),"10","only the correct MCQ earns XP");
    await snapshot(`${width}-complete`);
    await realClick("[data-authored-restart]");
    for (const name of ["level","streak","navigation"]) {
      await stage(name); await layout(); await snapshot(`${width}-${name}`);
      if (name === "streak") assert.ok(await evaluate("document.querySelector('#rocky-app-tour-message').textContent.includes('قريبًا')"));
      await realClick("[data-rocky-tour-next]");
    }
    await waitFor("!document.querySelector('.rocky-app-tour')");
    const saved = await evaluate(`(async () => {
      const session=await fetch('/api/auth/session').then(response=>response.json()),owner='account:'+session.account.id;
      const body=await fetch('/api/progress',{headers:{'X-Progress-Owner':owner}}).then(response=>response.json());
      return {owner,records:body.records};
    })()`);
    assert.equal(saved.records.reduce((sum,[,record])=>sum+record.rewardXp,0),10);
    assert.equal(saved.records.flatMap(([,record])=>record.completedStepIds).length,2);
    assert.ok(saved.records.every(([,record])=>record.completed===false),"the demo does not complete a full part");
    await send("Page.reload"); await waitFor("document.querySelector('.learner-dashboard') && !document.querySelector('#app-splash')");
    assert.equal(await evaluate("!!document.querySelector('.rocky-app-tour')"),false,"completed tours do not restart");
    await click(".subject-card[data-subject=ict]"); await waitFor("document.querySelector('.subject-roadmap')");
    await click("[data-roadmap-part]"); await click("[data-bubble-start]");
    await waitFor("document.querySelector('[data-live-authored-step]') && !document.querySelector('.media-pending')");
    assert.ok(Number(await evaluate("document.querySelector('.lesson-top-title').getAttribute('aria-valuemax')"))>2);
    assert.equal(await evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep"),"exam-p57-q1-b2","normal source order resumes at the next unanswered question");
    if (reduced) {
      await evaluate("localStorage.setItem('tawjihi:rocky-first-run:v1:'+"+JSON.stringify(saved.owner)+",JSON.stringify({version:2,status:'active',stage:'pick-subject'}))");
      await send("Page.navigate",{url:base+"?page=learn"}); await stage("answer");
      await send("Emulation.setDeviceMetricsOverride",{width:320,height:640,deviceScaleFactor:1,mobile:true});
      await layout(); await snapshot("320-ict");
      await send("Page.reload"); await stage("answer"); await layout();
      await realClick("[data-ui-lab-answer][data-correct=false]"); await stage("check");
      await realClick("[data-ui-lab-check]"); await stage("rating");
      assert.ok(await evaluate("document.querySelector('#rocky-app-tour-title').textContent.includes('لا بأس')"),"a wrong answer receives reassurance");
      await send("Emulation.setDeviceMetricsOverride",{width:844,height:390,deviceScaleFactor:1,mobile:true});
      await waitFor("document.querySelector('.rocky-app-tour-guide').getBoundingClientRect().right <= document.querySelector('#lesson-content').getBoundingClientRect().left");
      await layout(); await snapshot("landscape-ict");
      assert.ok(await evaluate("(() => {const answers=[...document.querySelectorAll('.level-answer-list button')].map(e=>e.getBoundingClientRect());return answers.every((r,i)=>!i||r.top>=answers[i-1].bottom);})()"),"phone landscape also keeps one answer per row");
      assert.ok(await evaluate("document.querySelector('[data-template-primary]').getBoundingClientRect().width>=120"),"landscape retains a readable Continue action");
      await realClick("[data-template-primary]"); await stage("flashcard"); await layout();
      await key("Escape"); await waitFor("!document.querySelector('.rocky-app-tour') && document.querySelector('[data-live-authored-step]')");
      assert.equal(await evaluate("!!document.querySelector('.rocky-coach-slot')"),false,"skipping removes the reserved guide space");
      await waitFor("Number(document.querySelector('.lesson-top-title').getAttribute('aria-valuemax'))>2 && !document.querySelector('.media-pending')");
      assert.ok(Number(await evaluate("document.querySelector('.lesson-top-title').getAttribute('aria-valuemax')"))>2,"skipping restores the full lesson");
      await send("Emulation.setDeviceMetricsOverride",{width,height,deviceScaleFactor:1,mobile:true});
    }
    await send("Page.navigate",{url:base+"?page=learn"});
    await waitFor("document.querySelector('.learner-dashboard') && !document.querySelector('#app-splash')");
    await click("[data-auth-sign-out]"); await waitFor("document.querySelector('.visitor-landing')");
    console.log(`${width}x${height}: lesson-first coaching, finite gestures, rounded highlights, keyboard, reporting, ratings, real XP, normal lesson restoration and reload passed${reduced ? ' with reduced motion' : ''}.`);
  }
  assert.deepEqual(exceptions,[]);
});
