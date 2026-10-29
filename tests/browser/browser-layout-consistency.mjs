import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";

const output = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-layout-consistency";
await mkdir(output, { recursive:true });
await withBrowserPage(async ({ base, send, evaluate, waitFor }) => {
  await send("Page.bringToFront");
  const settle = () => evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
  const viewport = async (width, height) => {
    await send("Emulation.setDeviceMetricsOverride", { width,height,deviceScaleFactor:1,mobile:width<=760 });
    if (await evaluate("location.protocol !== 'about:'")) await settle();
  };
  const click = selector => evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
  const fill = (name, value) => evaluate(`(() => {
    const input=document.querySelector('[name="${name}"]');
    input.value=${JSON.stringify(value)}; input.dispatchEvent(new Event('input',{bubbles:true}));
  })()`);
  const ready = async step => {
    await waitFor(`document.querySelector('[data-onboarding-step="${step}"]:not([hidden])') && !document.querySelector('.onboarding-step:is(.is-entering-forward,.is-entering-backward,.is-leaving-forward,.is-leaving-backward,.media-pending)')`);
    await waitFor("[document.querySelector('.auth-page'),document.querySelector('#visitor-flow-root')].every(element=>element.getAnimations().every(animation=>animation.playState==='finished'))");
    await settle();
  };
  const measure = () => evaluate(`(() => {
    const step=document.querySelector('[data-onboarding-step]:not([hidden])') || document.querySelector('.onboarding-complete');
    const rect=el=>{const r=el.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,height:r.height};};
    const control=step.querySelector('.auth-field input,.onboarding-choice-grid') || step.querySelector('.onboarding-step-fields>p');
    return {button:rect(step.querySelector('.visitor-primary')),heading:rect(step.querySelector('h1')),
      control:control ? rect(control) : null,frame:rect(step),
      overflow:document.documentElement.scrollWidth>innerWidth || document.documentElement.scrollHeight>innerHeight+1};
  })()`);
  const screenshot = async name => {
    const { data } = await send("Page.captureScreenshot", {format:"png"});
    await writeFile(`${output}/${name}.png`,Buffer.from(data,"base64"));
  };
  for (const [width,height] of [[390,844],[1440,900],[320,568],[844,390]]) {
    await viewport(width,height);
    await send("Emulation.setEmulatedMedia", {features:[{name:"prefers-reduced-motion",value:width===390 ? "no-preference" : "reduce"}]});
    await send("Page.navigate", {url:base+"?flow=register"});
    await waitFor("document.querySelector('[data-register-form]') && !document.body.hasAttribute('data-startup')");
    await ready("intro");
    const initial=await measure();
    for (const step of ["intro","0","1","2","3","4"]) {
      await ready(step);
      const current=await measure();
      assert.equal(current.overflow,false,`${width}/${step}: the page stays within the viewport`);
      assert.ok(Math.abs(current.button.top-initial.button.top)<1,`${width}/${step}: the primary action has a stable baseline`);
      assert.ok(Math.abs(current.button.height-initial.button.height)<1,`${width}/${step}: the primary action keeps its height`);
      if (height>=700) {
        assert.ok(Math.abs(current.heading.top-initial.heading.top)<1,`${width}/${step}: headings stay aligned`);
        assert.ok(Math.abs((current.frame.top+current.frame.bottom)/2-height/2)<=40,`${width}/${step}: the form is centred in the available page`);
        const actionGap=current.button.top-current.control.bottom;
        assert.ok(actionGap>=12 && actionGap<=128,`${width}/${step}: the action stays close to its content (${actionGap}px)`);
      }
      if (step!=="intro") {
        await click(`[data-onboarding-step="${step}"] .visitor-primary`);
        await waitFor("document.querySelector('[data-onboarding-step]:not([hidden]) [aria-invalid=true]')");
        const invalid=await measure();
        assert.ok(Math.abs(invalid.button.top-current.button.top)<1,`${width}/${step}: validation does not move the action`);
        assert.equal(await evaluate("Boolean(document.querySelector('[data-onboarding-step]:not([hidden]) [data-field-error]')?.textContent.trim())"),true);
      }
      if (step==="0") await fill("username",`layout-${width}`);
      if (step==="1") await click('input[name=curriculum][value=gaza]');
      if (step==="2") await click('input[name=path][value=scientific]');
      if (step==="3") await fill("phone",`059100${String(width).padStart(4,"0")}`);
      if (step==="4") {
        await fill("password","layout-pass-2026");
        if (width===390) {
          await viewport(390,400);
          await evaluate("document.querySelector('input[name=password]').blur();document.querySelector('input[name=password]').focus()");
          await settle();
          const focus=await evaluate(`(() => {
            const input=document.activeElement.getBoundingClientRect();
            const body=document.activeElement.closest('.onboarding-step-content').getBoundingClientRect();
            const footer=document.querySelector('[data-onboarding-step="4"] .onboarding-actions').getBoundingClientRect();
            return {visible:input.top>=body.top && input.bottom<=body.bottom,clear:input.bottom<=footer.top};
          })()`);
          assert.deepEqual(focus,{visible:true,clear:true},"resized viewport keeps the focused input clear of the action footer");
          await screenshot("onboarding-short-viewport");
          await viewport(width,height);
          await evaluate("document.querySelector('[data-onboarding-step=\"4\"] .onboarding-step-content').scrollTop=0");
        }
      }
      await screenshot(`onboarding-${width}-${step}`);
      await click(`[data-onboarding-step="${step}"] .visitor-primary`);
    }
    await waitFor("document.querySelector('[data-registration-continue]')");
    await settle();
    const complete=await measure();
    assert.equal(complete.overflow,false,"account completion fits the viewport");
    assert.ok(complete.button.top-complete.heading.bottom>=16 && complete.button.top-complete.heading.bottom<=32,"the completion action sits directly below its message");
    await screenshot(`complete-${width}`);
    await click('[data-registration-continue]');
    await waitFor("!document.body.classList.contains('product-flow-active') && document.querySelector('.learner-dashboard-root')?.getAttribute('aria-busy')==='false'");
    await click('[data-auth-sign-out]');
    await waitFor("document.querySelector('.visitor-landing')");
  }
  await viewport(390,844);
  await send("Page.navigate", {url:base+"?flow=sign-in"});
  await waitFor("document.querySelector('[data-sign-in-form]') && !document.body.hasAttribute('data-startup') && !document.querySelector('.media-pending')");
  const buttonY=()=>evaluate("document.querySelector('[data-sign-in-form] [type=submit]').getBoundingClientRect().top");
  const baseline=await buttonY();
  await click('[data-sign-in-form] [type=submit]');
  assert.ok(Math.abs(await buttonY()-baseline)<1,"inline sign-in errors preserve the button baseline");
  assert.equal(await evaluate("document.activeElement.name"),"identifier","validation focuses the first invalid field");
  await fill("identifier","layout-390");
  await fill("password","incorrect-pass-2026");
  await click('[data-sign-in-form] [type=submit]');
  await waitFor("!document.querySelector('[data-auth-error]').hidden");
  assert.ok(Math.abs(await buttonY()-baseline)<1,"server sign-in errors use the reserved status area");
  await screenshot("sign-in-error");
  await fill("password","layout-pass-2026");
  await click('[data-sign-in-form] [type=submit]');
  await waitFor("!document.body.classList.contains('product-flow-active') && document.querySelector('.subject-card') && !document.querySelector('.media-pending') && !document.querySelector('.subject-map').inert && document.querySelector('.learner-dashboard-root')?.getAttribute('aria-busy')==='false'");
  for (const width of [320,390,760,761,1024,1440]) {
    await viewport(width,900);
    await evaluate("scrollTo(0,0)");
    const home=await evaluate(`(() => {
      const cards=[...document.querySelectorAll('.subject-card')].map(el=>el.getBoundingClientRect());
      const columns=getComputedStyle(document.querySelector('.subject-map')).gridTemplateColumns.split(' ').length;
      return {overflow:document.documentElement.scrollWidth>innerWidth,columns,
        cards:cards.map(r=>({left:r.left,right:r.right,top:r.top,bottom:r.bottom})),
        stats:[...document.querySelectorAll('.dashboard-stat')].map(el=>el.getBoundingClientRect().top)};
    })()`);
    assert.equal(home.overflow,false,`${width}: Home fits its viewport`);
    assert.ok(home.cards.every(r=>r.left>=0 && r.right<=width),`${width}: cards stay inside page gutters`);
    if (home.columns===2) for (let i=1;i<home.cards.length-1;i+=2) {
      assert.ok(Math.abs(home.cards[i].top-home.cards[i+1].top)<1 && Math.abs(home.cards[i].bottom-home.cards[i+1].bottom)<1,`${width}: paired cards align at both edges`);
    }
    await screenshot(`home-${width}`);
    await click('[data-page=shop]');
    await waitFor("!document.querySelector('.coming-soon-toast').hidden");
    const toast=await evaluate("(()=>{const r=document.querySelector('.coming-soon-toast').getBoundingClientRect();const nav=document.querySelector('.topbar-wrap').getBoundingClientRect();return {viewportCenter:document.documentElement.clientLeft+document.documentElement.clientWidth/2,center:r.left+r.width/2,left:r.left,right:r.right,bottom:r.bottom,navTop:nav.top}})()");
    assert.ok(Math.abs(toast.center-toast.viewportCenter)<1 && toast.left>=0 && toast.right<=width,`${width}: RTL feedback is centered and contained`);
    if(width<=760) assert.ok(toast.bottom<toast.navTop,`${width}: feedback clears bottom navigation`);
  }
  // Use a real pointer hit, not only a programmatic click, for the signed-in route.
  const point=await evaluate("(()=>{const r=document.querySelector('.subject-card[data-subject=ict]').getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2}})()");
  await send("Input.dispatchMouseEvent", {type:"mousePressed",...point,button:"left",clickCount:1});
  await send("Input.dispatchMouseEvent", {type:"mouseReleased",...point,button:"left",clickCount:1});
  await waitFor("document.querySelector('.subject-roadmap')");
  for (const [width,height] of [[1440,900],[390,844],[320,568]]) {
    await viewport(width,height);
    await screenshot(`roadmap-${width}`);
    assert.equal(await evaluate("document.documentElement.scrollWidth<=innerWidth"),true,"roadmaps stay within shared page gutters");
  }
  // Mount supported lesson types to compare action placement independent of course content.
  await evaluate(`(async()=>{
    const [{renderAuthoredInteractiveLesson},{loadSubjectLesson},{parseLessonMarkdown}]=await Promise.all([
      import('./src/ui/lesson/authored.js'),import('./src/data/lessons/subject-lesson-registry.js'),import('./src/markdown/lesson-authoring.js')]);
    const lesson=await loadSubjectLesson('ict','database-management');
    const mcq=parseLessonMarkdown(lesson.authoringSource).steps.find(s=>s.type==='mcq');
    window.mountLayoutLesson=(type)=>{
      window.stopLayoutLesson?.();
      const step=type==='mcq' ? mcq : {id:'layout-flashcard',type:'exam-question',content:{body:'ما الخطوة التالية؟',finalAnswer:'راجع الإجابة ثم تابع.',solution:'راجع الإجابة ثم تابع.'}};
      window.stopLayoutLesson=renderAuthoredInteractiveLesson(document.querySelector('#lesson-content'),'الدرس',lesson,[step],{isLessonPart:true});
    };
  })()`);
  for (const [width,height] of [[390,844],[1440,900],[844,390]]) {
    await viewport(width,height);
    const baselines=[];
    for (const type of ['mcq','exam-question']) {
      await evaluate(`mountLayoutLesson(${JSON.stringify(type)})`);
      await evaluate("Promise.allSettled(document.getAnimations().filter(a=>a.effect.getTiming().iterations!==Infinity).map(a=>a.finished))");
      await settle();
      const action=()=>evaluate("(()=>{const r=document.querySelector('[data-template-primary]').getBoundingClientRect();return {top:r.top,bottom:r.bottom,height:r.height}})()");
      const before=await action();
      baselines.push(before.top);
      assert.ok(before.bottom<=height,"lesson action remains inside the viewport");
      if (type==='mcq') {
        await click('[data-ui-lab-answer]');
        await click('[data-template-primary]');
        await waitFor("document.querySelector('.level-feedback:is(.is-wrong,.is-correct)')");
      } else {
        await evaluate("document.querySelector('[data-exam-front] .lesson-flashcard-scroll').focus()");
        await send("Input.dispatchKeyEvent",{type:"keyDown",key:"Enter",code:"Enter",windowsVirtualKeyCode:13,text:"\r"});
        await send("Input.dispatchKeyEvent",{type:"keyUp",key:"Enter",code:"Enter",windowsVirtualKeyCode:13});
        await waitFor("document.querySelector('[data-exam-front]').hidden");
      }
      await evaluate("Promise.allSettled(document.getAnimations().filter(a=>a.effect.getTiming().iterations!==Infinity).map(a=>a.finished))");
      await settle();
      const after=await action();
      assert.ok(Math.abs(after.top-before.top)<1 && Math.abs(after.height-before.height)<1,`${width}/${type}: feedback keeps the primary action in place: ${JSON.stringify({before,after})}`);
      await screenshot(`${type}-feedback-${width}`);
    }
    assert.ok(Math.max(...baselines)-Math.min(...baselines)<1,`${width}: multiple choice and flashcards share the action baseline`);
  }
  await evaluate("stopLayoutLesson()");
  await evaluate(`(async()=>{
    const {mountLearnerDashboard}=await import('./src/ui/learner-dashboard.js');
    document.body.className='';
    document.body.innerHTML='<main class="page"><div id="dashboard-fixture"><div id="card-marker">المواد</div></div></main>';
    let loading=true;
    const snapshot={actor:'student',account:{type:'free'},learning:{dailyStreak:0,totalXp:0,currentQuestionsTotal:100,currentQuestionsSolved:0,subjects:{}}};
    const dashboard=mountLearnerDashboard({container:document.querySelector('#dashboard-fixture'),
      service:{getLearnerHomeSnapshot:()=>snapshot,getLearnerDisplayName:()=>'طالب',getLearnerProgressOwner:()=>'layout',subscribe:()=>()=>{}},
      progressStore:{getSaveState:()=>loading?'loading':'ready',subscribe:()=>()=>{}}});
    window.setDashboardLoading=value=>{loading=value;dashboard.update();};
  })()`);
  for (const [width,height] of [[390,844],[1440,900]]) {
    await viewport(width,height);
    await evaluate("setDashboardLoading(true)");
    const pending=await evaluate("document.querySelector('#card-marker').getBoundingClientRect().top");
    await evaluate("setDashboardLoading(false)");
    const loaded=await evaluate("document.querySelector('#card-marker').getBoundingClientRect().top");
    assert.ok(Math.abs(pending-loaded)<1,`${width}: loading progress does not displace the subject cards`);
  }
});
console.log("Layout consistency passed: real onboarding, validation, completion, short viewports, motion and sign-in errors.");
