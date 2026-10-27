import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";
import { delay } from "./browser-session.mjs";

const evidence = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-ui-fixes";
await mkdir(evidence, { recursive:true });
const dialogueSource = `<!-- step-id: dialogue-fixture -->
<!-- presentation: rocky-dialogue -->
# تعرّف إلى روكي

![روكي يلوّح مرحبًا بالطالب](assets/mascot/rocky-wave.svg)

:::note مرحبًا، أنا روكي!
مرحبًا، أنا روكي! سأساعدك ونتعلّم معًا خطوة بخطوة.
:::

<!-- lesson-step -->
<!-- step-id: callout-fixture -->
# تعلّم على راحتك

:::note خطوة واحدة في كل مرة
خطوة واحدة في كل مرة.
:::
`;
const overflowSolution = ["```mathml", `<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow>${'<mi>س</mi><mo>+</mo><mn>1</mn>'.repeat(100)}<mi>ص</mi></mrow></math>`, "```", "",
  "$$", `${"c + ".repeat(100)}d`, "$$", "",
  "$$", "\\begin{aligned}", ...Array.from({length:18},(_,i)=>`x_{${i}} &= \\frac{${i}+1}{2} + ${'a + '.repeat(30)} b \\\\`), "\\end{aligned}", "$$", "",
  `صيغة داخل السطر: \\(${'a + '.repeat(100)}b\\).`, "",
  ...Array.from({length:24},(_,i)=>`الخطوة ${i+1}: قارن القيم ثم راجع النتيجة بالترتيب المطلوب.\n`),
].join("\n");
await withBrowserPage(async ({ base, send, evaluate:runEvaluation, waitFor }) => {
  const evaluate = async expression => {
    try { return await runEvaluation(expression); }
    catch (error) { console.error("Failed layout evaluation:", expression.slice(0,2000));throw error; }
  };
  // Keep the fixture independent of the app startup gate.
  await send("Network.setBlockedURLs", {urls:["*fonts.googleapis.com*","*fonts.gstatic.com*","*/src/bootstrap.js","*/src/main.js"]});
  await send("Page.navigate", { url:base + "?page=learn" });
  await waitFor("document.readyState==='complete'");
  await evaluate(`(async () => {
    document.querySelectorAll('[data-app-style]').forEach(link=>link.media='all');
    const [{ renderAuthoredInteractiveLesson }, { parseLessonMarkdown }, { loadSubjectLesson }] = await Promise.all([
      import('./src/ui/lesson/authored.js'), import('./src/markdown/lesson-authoring.js'), import('./src/data/lessons/subject-lesson-registry.js')]);
    const lesson=await loadSubjectLesson('ict','database-management');
    document.body.innerHTML='<main class="page lesson-mode"><section class="lesson-view is-visible"><div class="lesson-shell"><div class="lesson-top"><button class="lesson-back">×</button><div class="lesson-top-title"></div><div class="lesson-status"></div></div><article class="lesson-card" id="fixture-lesson"></article></div></section></main>';
    document.body.removeAttribute('data-startup');
    document.body.removeAttribute('data-account-type');
    window.lessonFixture={ destroy:()=>{}, progress:0, answers:0, lesson, dialogueSource:${JSON.stringify(dialogueSource)}, steps:parseLessonMarkdown(lesson.authoringSource).steps };
    lessonFixture.mount=(type, { steps, beforeAnswer }={}) => {
      lessonFixture.destroy();
      const selected=steps || lessonFixture.steps.filter(step => step.type===type).slice(0,1);
      lessonFixture.destroy=renderAuthoredInteractiveLesson(document.querySelector('#fixture-lesson'),'الدرس',lesson,selected,{
        isLessonPart:true,
        beforeAnswer,
        onProgress:()=>lessonFixture.progress++, onAnswer:()=>lessonFixture.answers++,
        getCompletionOutcome:()=>({ xpGain:10, totalXp:10, progress:3, completed:1, totalParts:29, streak:1 }),
      });
    };
    await document.fonts.ready;
  })()`);
  for (const width of [390, 761]) {
    await send("Emulation.setDeviceMetricsOverride", { width,height:844,deviceScaleFactor:1,mobile:false });
    const optionBaselines = [];
    for (const count of [2, 3, 4]) {
      await evaluate(`(() => {
        const base=lessonFixture.steps.find(step=>step.type==='mcq' && step.content.answers.length>=${count} && step.content.prompt.length<=105 && step.content.answers.every(answer=>answer.text.length<=48));
        const answers=base.content.answers.slice(0,${count});
        const prompt=${count}===3 ? base.content.prompt+' اقرأ السؤال جيدًا ثم اختر الإجابة المناسبة.'.repeat(2) : base.content.prompt;
        lessonFixture.mount('mcq',{steps:[{...base,id:'mcq-${count}',content:{...base.content,prompt,answers}}]});
      })()`);
      await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
      const layout=await evaluate(`(() => {
        const list=document.querySelector('.lesson-answer-list');
        const buttons=[...list.children];
        return {
          count:list.dataset.answerCount,
          columns:getComputedStyle(list).gridTemplateColumns.split(' ').length,
          distinctRows:new Set(buttons.map(button=>Math.round(button.getBoundingClientRect().top))).size,
          kicker:Boolean(document.querySelector('.ui-lab-mcq .level-layout-kicker')),
          textAlign:getComputedStyle(buttons[0]).textAlign,
          bottom:list.getBoundingClientRect().bottom,
        };
      })()`);
      assert.equal(layout.count,String(count));
      assert.equal(layout.kicker,false,"lesson question category title is removed");
      assert.equal(layout.textAlign,"right","Arabic MCQ option text aligns to the right");
      const expectedColumns=width<=760 ? 1 : count===3 ? 1 : 2;
      assert.equal(layout.columns,expectedColumns,`${count} answers use ${expectedColumns} columns at ${width}px`);
      assert.equal(layout.distinctRows,width<=760 ? count : count===4 ? 2 : count===3 ? 3 : 1);
      optionBaselines.push(layout.bottom);
      if (count===4) {
        await evaluate("document.querySelector('[data-template-back]').hidden=false;new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
        const withBack=await evaluate("document.querySelector('.lesson-answer-list').getBoundingClientRect().bottom");
        assert.ok(Math.abs(withBack-layout.bottom)<1,"first and later questions reserve the same footer height");
      }
    }
    assert.ok(Math.max(...optionBaselines)-Math.min(...optionBaselines)<1,"the last option row shares a bottom baseline across answer counts");
    const mcqScreenshot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`${evidence}/mcq-baseline-${width}.png`,Buffer.from(mcqScreenshot.data,"base64"));
  }
  await send("Emulation.setDeviceMetricsOverride", { width:390,height:480,deviceScaleFactor:1,mobile:false });
  await send("Emulation.setEmulatedMedia", { features:[{ name:"prefers-reduced-motion", value:"reduce" }] });
  await evaluate("lessonFixture.mount('mcq')");
  await waitFor("document.querySelector('[data-content-scroll]')?.hidden===false && !document.querySelector('[data-content-scroll]').closest('[inert]') && !document.querySelector('.media-pending')");
  const cue=await evaluate(`(() => {
    const button=document.querySelector('[data-content-scroll]');
    const rect=button.getBoundingClientRect();
    const surface=document.querySelector('.level-layout-task');
    return {text:button.textContent.trim(),height:rect.height,animation:getComputedStyle(button).animationName,scrollBehavior:getComputedStyle(surface).scrollBehavior,controls:button.getAttribute('aria-controls')===surface.id,fullWidth:Math.abs(rect.width-surface.getBoundingClientRect().width)<1,atBottom:Math.abs(rect.bottom-surface.getBoundingClientRect().bottom)<1,background:getComputedStyle(button).backgroundImage,borderRadius:getComputedStyle(button).borderRadius};
  })()`);
  assert.equal(cue.text,"المزيد بالأسفل");
  assert.ok(cue.height>=44,"the scroll cue has a clear touch target");
  assert.equal(cue.animation,"none","the cue does not continuously move");
  assert.equal(cue.scrollBehavior,"auto","reduced motion disables smooth scrolling");
  assert.equal(cue.controls,true);
  assert.equal(cue.fullWidth,true,"the fade spans the full reading area");
  assert.equal(cue.atBottom,true,"the fade stays at the bottom edge");
  assert.match(cue.background,/linear-gradient/);
  assert.equal(cue.borderRadius,"0px","the scroll cue is an edge fade");
  await evaluate("document.querySelector('[data-content-scroll]').focus()");
  assert.equal(await evaluate("document.activeElement===document.querySelector('[data-content-scroll]')"),true,"the scroll cue is keyboard reachable");
  await send("Input.dispatchKeyEvent", { type:"keyDown",key:"Enter",code:"Enter",windowsVirtualKeyCode:13,text:"\r" });
  await send("Input.dispatchKeyEvent", { type:"keyUp",key:"Enter",code:"Enter",windowsVirtualKeyCode:13 });
  await waitFor("document.querySelector('.level-layout-task').scrollTop>0");
  await evaluate("document.querySelector('.level-layout-task').scrollTo({top:100000,behavior:'instant'})");
  await waitFor("document.querySelector('[data-content-scroll]').hidden");
  assert.equal(await evaluate("document.activeElement===document.querySelector('.level-layout-task')"),true,"focus stays in the reading area when the cue disappears");
  await evaluate("document.querySelector('.level-layout-task').scrollTo({top:0,behavior:'instant'})");
  await waitFor("document.querySelector('[data-content-scroll]').hidden===false");
  for (const correct of [false,true]) {
    await evaluate(`lessonFixture.mount('mcq'); document.querySelector('[data-ui-lab-answer][data-correct="${correct}"]').click(); document.querySelector('[data-template-primary]').click()`);
    await waitFor("document.querySelector('[data-content-scroll]').hidden===false");
    const resultColors = await evaluate(`(() => {
      const cue = document.querySelector('[data-content-scroll]');
      const footer = document.querySelector('.level-layout-actions');
      return {fade:getComputedStyle(cue).backgroundImage,footer:getComputedStyle(footer).backgroundColor};
    })()`);
    assert.ok(resultColors.fade.includes(resultColors.footer), "the scroll fade matches the answer result surface");
  }
  await evaluate("lessonFixture.mount('mcq')");
  await send("Emulation.setDeviceMetricsOverride", { width:1440,height:1000,deviceScaleFactor:1,mobile:false });
  await waitFor("document.querySelector('[data-content-scroll]').hidden");
  assert.equal(await evaluate("document.querySelector('.level-layout-task').tabIndex"),-1,"fitting content does not add an unnecessary tab stop");
  for (const width of [1440,390]) {
    await send("Emulation.setDeviceMetricsOverride", { width,height:844,deviceScaleFactor:1,mobile:false });
    const attempts = await evaluate("lessonFixture.answers");
    await evaluate("lessonFixture.mount('mcq',{beforeAnswer:()=> 'نفدت القلوب. حاول مجددًا لاحقًا.'})");
    const existingRatings = await evaluate("document.querySelectorAll('.level-question-rating-panel').length");
    await evaluate("document.querySelector('[data-ui-lab-answer]').click(); document.querySelector('[data-template-primary]').click()");
    const blocked = await evaluate(`(() => {
      const feedback=document.querySelector('.level-feedback');
      return {visible:getComputedStyle(feedback).display!=='none',text:feedback.textContent,
        separate:[...document.querySelectorAll('.level-action:not([hidden])')].every(button=>button.getBoundingClientRect().top>=feedback.getBoundingClientRect().bottom),
        ratings:document.querySelectorAll('.level-question-rating-panel').length};
    })()`);
    assert.equal(blocked.visible,true,"a blocked answer displays its reason");
    assert.match(blocked.text,/نفدت القلوب/);
    assert.equal(blocked.separate,true,"the blocked reason stays above the footer actions");
    assert.equal(blocked.ratings,existingRatings,"a blocked answer keeps the existing difficulty controls in place");
    assert.equal(await evaluate("lessonFixture.answers"),attempts,"a blocked answer never records correctness");
  }
  for (const width of [1440,320]) {
    await send("Emulation.setDeviceMetricsOverride", { width,height:1000,deviceScaleFactor:1,mobile:false });
    await evaluate(`(() => {
      const base=lessonFixture.steps.find(step=>step.type==='mcq');
      const formula=dir=>'\x60mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="'+dir+'"><mrow>'+Array.from({length:20},(_,index)=>'<mi>n</mi><mo>+</mo><mn>'+index+'</mn>').join('')+'</mrow></math>\x60';
      lessonFixture.mount('mcq',{steps:[{...base,id:'scrolling-math-options',content:{...base.content,
        prompt:'اختر المعادلة الصحيحة. '+formula('ltr'),example:'',
        answers:base.content.answers.map((answer,index)=>({...answer,text:formula(index===1?'rtl':'ltr'),correct:index===0})),
      }}]});
    })()`);
    await waitFor("document.querySelector('[data-ui-lab-answer]')?.hasAttribute('aria-keyshortcuts')");
    const mathAccessibility = await send("Accessibility.getFullAXTree");
    await writeFile(`${evidence}/math-accessibility-${width}.json`,JSON.stringify(mathAccessibility,null,2));
    const mathButtons=mathAccessibility.nodes.filter(node => node.role?.value === "button" && node.name?.value.includes("0"));
    assert.equal(mathButtons.length,await evaluate("document.querySelectorAll('[data-ui-lab-answer]').length"),"answer names include native formula content instead of a generic equation label");
    const accessibilityNodes=new Map(mathAccessibility.nodes.map(node=>[node.nodeId,node]));
    const descendants=node=>[node,...(node.childIds || []).flatMap(id=>accessibilityNodes.has(id)?descendants(accessibilityNodes.get(id)):[])];
    assert.ok(mathButtons.every(button=>descendants(button).some(node=>node.name?.value==='19')),"complete native MathML remains accessible beyond the bounded computed button name");
    const mathHeading=mathAccessibility.nodes.find(node=>node.role?.value==='heading' && node.name?.value.includes('اختر المعادلة الصحيحة'));
    assert.ok(mathHeading?.name?.value.includes('0') && descendants(mathHeading).some(node=>node.name?.value==='19'),"the prompt heading retains native equation naming and its full structured MathML");
    const attempts=await evaluate("lessonFixture.answers");
    for (const [index,direction] of [[0,'ltr'],[1,'rtl']]) {
      await evaluate(`document.querySelectorAll('[data-ui-lab-answer]')[${index}].focus()`);
      const before=await evaluate(`(() => {
        const answer=document.activeElement,scroll=answer.querySelector('.lesson-math-scroll'),math=scroll.querySelector('math');
        const bounds=scroll.getBoundingClientRect(),formula=math.getBoundingClientRect(),button=answer.getBoundingClientRect();
        return {nested:answer.querySelectorAll('[tabindex="0"]').length,direction:getComputedStyle(scroll).direction,
          starts:${index}===0?formula.left>=bounds.left-1:formula.right<=bounds.right+1,
          contained:bounds.left>=button.left && bounds.right<=button.right,
          scale:parseFloat(getComputedStyle(math).fontSize)/parseFloat(getComputedStyle(answer.querySelector('b')).fontSize)};
      })()`);
      assert.equal(before.nested,0,"scrollable math never adds a nested answer tab stop");
      assert.equal(before.direction,direction);
      assert.equal(before.starts,true,"the beginning of each directed formula is reachable");
      assert.equal(before.contained,true);
      assert.ok(Math.abs(before.scale-1.35)<.01,`inline math retains its native reading size: ${JSON.stringify(before)}`);
      const key=index===0?'ArrowRight':'ArrowLeft';
      const code=index===0?39:37;
      for (let press=0;press<16;press++) {
        await send("Input.dispatchKeyEvent", {type:"keyDown",key,windowsVirtualKeyCode:code});
        await send("Input.dispatchKeyEvent", {type:"keyUp",key,windowsVirtualKeyCode:code});
      }
      assert.equal(await evaluate(`(() => {
        const answer=document.activeElement,scroll=answer.querySelector('.lesson-math-scroll'),math=scroll.querySelector('math');
        const bounds=scroll.getBoundingClientRect(),formula=math.getBoundingClientRect();
        return Math.abs(scroll.scrollLeft)>0 && (${index}===0?formula.right<=bounds.right+1:formula.left>=bounds.left-1)
          && answer.getAttribute('aria-pressed')==='false' && document.querySelector('[data-template-primary]').disabled;
      })()`),true,"arrow keys reveal the formula end without selecting or submitting an answer");
    }
    assert.equal(await evaluate("lessonFixture.answers"),attempts);
    await evaluate("document.querySelector('[data-ui-lab-answer]').click();document.querySelector('.ui-lab-mcq > h1 .lesson-math-scroll').focus()");
    for (const [key,code,text] of [['Enter',13,'\r'],[' ',32,' ']]) {
      await send("Input.dispatchKeyEvent", {type:"keyDown",key,windowsVirtualKeyCode:code,text});
      await send("Input.dispatchKeyEvent", {type:"keyUp",key,windowsVirtualKeyCode:code});
    }
    assert.equal(await evaluate("lessonFixture.answers"),attempts,"reading a prompt equation does not trigger the global answer shortcut");
    await evaluate("document.querySelector('[data-template-primary]').click()");
    assert.equal(await evaluate("document.querySelector('[data-ui-lab-answer]').classList.contains('is-correct')"),true);
    assert.equal(await evaluate("getComputedStyle(document.querySelector('[data-ui-lab-answer]'),'::before').pointerEvents"),'none');
    const screenshot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`${evidence}/math-options-${width}.png`,Buffer.from(screenshot.data,"base64"));
  }
  for (const [width,height] of [[1440,1200], [390,844]]) {
    await send("Emulation.setDeviceMetricsOverride", { width,height,deviceScaleFactor:1,mobile:false });
    await evaluate(`lessonFixture.mount('exam-question',{steps:[{id:'overflow-card',type:'exam-question',content:{
      body:${JSON.stringify('اذكر خطوات الحل.\n\n'+overflowSolution)},
      solution:${JSON.stringify(overflowSolution)},
    }}]})`);
    await waitFor("!document.querySelector('[data-exam-front] [data-content-scroll]').hidden");
    const frontCues=await evaluate(`(() => {
      const face=document.querySelector('[data-exam-front]');
      const cards=[...face.querySelectorAll('.lesson-math-sample')].map(card=>{
        const cue=card.querySelector('[data-content-scroll-left]'),box=cue.getBoundingClientRect(),bounds=card.getBoundingClientRect();
        return {height:box.height,cardHeight:card.clientHeight,top:box.top,cardTop:bounds.top+card.clientTop,hidden:cue.hidden};
      });
      return {cards,bottomFill:getComputedStyle(face.querySelector('[data-content-scroll] svg')).fill,
        sideFill:getComputedStyle(face.querySelector('[data-content-scroll-left] svg')).fill};
    })()`);
    assert.equal(frontCues.cards.length,3);
    assert.ok(frontCues.cards.every(cue=>!cue.hidden && Math.abs(cue.height-cue.cardHeight)<1 && Math.abs(cue.top-cue.cardTop)<1),"question-side cues span every full formula card, including tall equations");
    assert.equal(frontCues.bottomFill,frontCues.sideFill,"bottom and side hints share the filled arrow style");
    const frontScreenshot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`${evidence}/flashcard-front-fades-${width}.png`,Buffer.from(frontScreenshot.data,"base64"));
    await evaluate("document.querySelector('[data-exam-front] .lesson-flashcard-scroll').focus()");
    await send("Input.dispatchKeyEvent", { type:"keyDown",key:"Enter",code:"Enter",windowsVirtualKeyCode:13,text:"\r" });
    await send("Input.dispatchKeyEvent", { type:"keyUp",key:"Enter",code:"Enter",windowsVirtualKeyCode:13 });
    await waitFor("document.querySelector('[data-exam-front]').hidden && !document.querySelector('[data-exam-solution] [data-content-scroll]').hidden");
    const fade=await evaluate(`(() => {
      const face=document.querySelector('[data-exam-solution]');
      const cue=face.querySelector('[data-content-scroll]');
      return {width:cue.getBoundingClientRect().width,faceWidth:face.clientWidth,radius:getComputedStyle(cue).borderRadius};
    })()`);
    assert.ok(Math.abs(fade.width-fade.faceWidth)<1,"card bottom fade spans the face");
    assert.equal(fade.radius,"0px");
    const readingLayout=await evaluate(`(() => {
      const face=document.querySelector('[data-exam-solution]'),scroll=face.querySelector('.lesson-flashcard-scroll');
      const footer=document.querySelector('.lesson-exam-actions');
      const rating=footer.querySelector('.level-question-ratings').getBoundingClientRect();
      const action=footer.querySelector('[data-template-primary]').getBoundingClientRect();
      return {horizontal:scroll.scrollWidth>scroll.clientWidth+1,
        formulas:[...face.querySelectorAll('.lesson-math-scroll')].map(box=>({vertical:box.scrollHeight>box.clientHeight+1,height:box.clientHeight,scrollHeight:box.scrollHeight,mathHeight:box.querySelector('math').getBoundingClientRect().height})),
        cardHeight:face.clientHeight,gap:action.top-rating.bottom,rows:getComputedStyle(footer).gridTemplateRows,
        rowGap:getComputedStyle(footer).rowGap,actionBottom:action.bottom};
    })()`);
    assert.equal(readingLayout.horizontal,false,"horizontal scrolling stays inside formula boxes");
    assert.ok(readingLayout.formulas.every(box=>!box.vertical),`formula boxes grow to fit their full height: ${JSON.stringify(readingLayout)}`);
    assert.ok(Math.max(...readingLayout.formulas.map(box=>box.height))>500,"the tall formula keeps its natural height");
    assert.ok(readingLayout.gap<=8,`ratings sit close to flashcard actions: ${JSON.stringify(readingLayout)}`);
    assert.ok(readingLayout.actionBottom<=height,"flashcard actions remain within the viewport");
    if (height>1000) assert.ok(readingLayout.cardHeight>640,"long flashcards use the available desktop height");
    await waitFor("!document.querySelector('[data-exam-solution] [data-content-scroll-left]').hidden");
    assert.equal(await evaluate("document.querySelectorAll('[data-exam-solution] [data-content-scroll-left]:not([hidden])').length"),4,"each wide formula has its own independent side cue");
    const leftFade=await evaluate(`(() => {
      const face=document.querySelector('[data-exam-solution]');
      const cue=face.querySelector('[data-content-scroll-left]').getBoundingClientRect();
      const card=face.querySelector('.lesson-math-sample');
      const formula=card.getBoundingClientRect();
      return {height:cue.height,top:cue.top,left:cue.left,formulaHeight:card.clientHeight,formulaTop:formula.top+card.clientTop,formulaLeft:formula.left+card.clientLeft,
        motion:getComputedStyle(face.querySelector('[data-content-scroll-left] svg')).animationName};
    })()`);
    assert.ok(Math.abs(leftFade.height-leftFade.formulaHeight)<1,"side fade spans the full formula card height, including padding");
    assert.ok(Math.abs(leftFade.top-leftFade.formulaTop)<1 && Math.abs(leftFade.left-leftFade.formulaLeft)<1,`side fade follows the outer formula card edge: ${JSON.stringify(leftFade)}`);
    assert.equal(leftFade.motion,"none","reduced motion keeps the side arrow still");
    const rightFade=await evaluate(`(() => {
      const card=document.querySelectorAll('[data-exam-solution] .lesson-math-sample')[1];
      const cue=card.querySelector('.lesson-scroll-cue--right'),bounds=cue.getBoundingClientRect(),box=card.getBoundingClientRect();
      return {height:bounds.height,cardHeight:card.clientHeight,right:bounds.right,cardRight:box.right-card.clientLeft,label:cue.getAttribute('aria-label')};
    })()`);
    assert.ok(Math.abs(rightFade.height-rightFade.cardHeight)<1 && Math.abs(rightFade.right-rightFade.cardRight)<1,"LTR physics uses the full right edge of its formula card");
    assert.equal(rightFade.label,"المزيد إلى اليمين");
    await send("Emulation.setEmulatedMedia", { features:[{ name:"prefers-reduced-motion", value:"no-preference" }] });
    await waitFor("document.querySelector('[data-exam-solution] [data-content-scroll-left] svg').getAnimations().length>0");
    const arrowMotion=await evaluate(`(() => {
      const svg=document.querySelector('[data-exam-solution] [data-content-scroll-left] svg');
      const animation=svg.getAnimations()[0];
      animation.pause();
      animation.currentTime=0;
      const start=new DOMMatrix(getComputedStyle(svg).transform);
      animation.currentTime=animation.effect.getTiming().duration/2;
      const end=new DOMMatrix(getComputedStyle(svg).transform);
      return {dx:end.m41-start.m41,dy:end.m42-start.m42};
    })()`);
    assert.ok(arrowMotion.dx<0 && arrowMotion.dy===0,"the side arrow moves from right to left without vertical motion");
    await send("Emulation.setEmulatedMedia", { features:[{ name:"prefers-reduced-motion", value:"reduce" }] });
    const cardScreenshot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`${evidence}/flashcard-fades-${width}.png`,Buffer.from(cardScreenshot.data,"base64"));
    const otherFormulaScroll=await evaluate("document.querySelectorAll('[data-exam-solution] .lesson-math-scroll')[1].scrollLeft");
    await evaluate("document.querySelector('[data-exam-solution] [data-content-scroll-left]').focus()");
    await send("Input.dispatchKeyEvent", { type:"keyDown",key:"Enter",code:"Enter",windowsVirtualKeyCode:13,text:"\r" });
    await send("Input.dispatchKeyEvent", { type:"keyUp",key:"Enter",code:"Enter",windowsVirtualKeyCode:13 });
    assert.equal(await evaluate("document.querySelector('[data-exam-solution]').getAttribute('aria-hidden')"),"false","using the fade never flips the card");
    assert.equal(await evaluate("document.querySelectorAll('[data-exam-solution] .lesson-math-scroll')[1].scrollLeft"),otherFormulaScroll,"a side cue scrolls only its own formula");
    assert.ok(await evaluate("document.querySelector('[data-exam-solution] .lesson-math-scroll').scrollLeft<0"),"the RTL cue scrolls toward the left");
    await evaluate("document.querySelector('[data-exam-solution] .lesson-scroll-cue--right').click()");
    assert.ok(await evaluate("document.querySelectorAll('[data-exam-solution] .lesson-math-scroll')[1].scrollLeft>0"),"the LTR physics cue scrolls toward the right");
    await evaluate("document.querySelectorAll('[data-exam-solution] .lesson-math-scroll').forEach(box=>box.scrollLeft=getComputedStyle(box).direction==='rtl' ? -box.scrollWidth : box.scrollWidth)");
    await waitFor("document.querySelector('[data-exam-solution] [data-content-scroll-left]').hidden");
    await evaluate("document.querySelector('[data-exam-solution] [data-content-scroll]').focus();document.querySelector('[data-exam-solution] .lesson-flashcard-scroll').scrollTop=100000");
    await waitFor("document.querySelector('[data-exam-solution] [data-content-scroll]').hidden");
    assert.equal(await evaluate("document.activeElement===document.querySelector('[data-exam-solution] .lesson-flashcard-scroll')"),true,"card focus returns to its content when the fade disappears");
  }
  await send("Emulation.setEmulatedMedia", { features:[{ name:"prefers-reduced-motion", value:"no-preference" }] });
  await send("Emulation.setDeviceMetricsOverride", { width:390,height:844,deviceScaleFactor:1,mobile:false });
  await evaluate(`lessonFixture.mount('markdown',{steps:[{id:'localized-reference',type:'markdown',title:'مصطلحات',source:${JSON.stringify('# مصطلحات\n\n[[term: قاعدة البيانات | مجموعة من البيانات المرتبطة ببعضها.]]\n\n| الحقل | النوع |\n| --- | --- |\n| رمز | نص |')}}]})`);
  assert.equal(await evaluate("document.querySelector('.markdown-tech-card small').textContent"),"مصطلح تقني");
  assert.equal(await evaluate("document.querySelector('.markdown-table-scroll').getAttribute('aria-label')"),"جدول قابل للتمرير");
  await evaluate(`(async()=>{
    const {parseLessonMarkdown}=await import('./src/markdown/lesson-authoring.js');
    const calloutStep=parseLessonMarkdown(lessonFixture.dialogueSource).steps.find(step=>step.source?.includes('خطوة واحدة في كل مرة'));
    lessonFixture.mount('markdown',{steps:[calloutStep]});
  })()`);
  assert.deepEqual(await evaluate("(() => {const style=getComputedStyle(document.querySelector('.markdown-callout'));return {right:style.borderRightWidth,left:style.borderLeftWidth};})()"),{right:"5px",left:"0px"},"Arabic lesson callout accent appears on the right");
  await evaluate(`(async()=>{
    const {parseLessonMarkdown}=await import('./src/markdown/lesson-authoring.js');
    const first=parseLessonMarkdown(lessonFixture.dialogueSource).steps[0];
    lessonFixture.mount('markdown',{steps:[{...first,id:'different-persisted-id',dialogue:{...first.dialogue,source:'مرحبًا بك في هذا الدرس. '.repeat(16)}}]});
  })()`);
  await waitFor("document.querySelector('[data-rocky-dialogue] .rocky-dialogue-word')");
  const before=await evaluate("document.querySelector('.rocky-dialogue').getBoundingClientRect().height");
  await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"reduce"}]});
  await waitFor("document.querySelectorAll('.rocky-dialogue-word').length===0");
  assert.equal(await evaluate("document.querySelectorAll('.rocky-dialogue-word').length"),0,"changing reduced motion finishes dialogue immediately");
  assert.ok(Math.abs(await evaluate("document.querySelector('.rocky-dialogue').getBoundingClientRect().height")-before)<1,"dialogue height is reserved");
  const screenshot=await send("Page.captureScreenshot",{format:"png"});
  await writeFile(`${evidence}/dialogue-long-390.png`,Buffer.from(screenshot.data,"base64"));
  await evaluate("lessonFixture.destroy();document.querySelector('#fixture-lesson').textContent='Navigation completed'");
  await delay(250);
  assert.equal(await evaluate("document.querySelector('#fixture-lesson').textContent"),"Navigation completed","disposed lesson cannot repaint after navigation");
});
console.log(`MCQ layouts, locale and dialogue motion passed. Evidence: ${evidence}`);
