import assert from "node:assert/strict";
import { readFile, mkdir } from "node:fs/promises";
import { chromium, webkit } from "playwright";
import { startPreviewServer } from "../../scripts/preview-server.mjs";
import { findChrome } from "./browser-session.mjs";

const server = await startPreviewServer({ root:process.cwd(), prefix:"/" });
const browser = process.env.BROWSER_ENGINE === "webkit" ? await webkit.launch()
  : await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
try {
  const page = await browser.newPage({ reducedMotion:"reduce" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  const html = await readFile("index.html","utf8");
  const links = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(match => match[0].replace(/media="print"/g,'media="all"')).join("");
  await page.route("**/reading-controls-check", route => route.fulfill({ contentType:"text/html", body:
    `<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><head>${links}</head><body><main class="page lesson-mode"><section class="lesson-view is-visible"><div class="lesson-shell"><div class="lesson-top"><button class="lesson-back">رجوع</button><div class="lesson-top-title"></div><div class="lesson-status"></div></div><article class="lesson-card"></article></div></section></main></body></html>` }));
  await page.goto(server.base + "reading-controls-check");
  await page.evaluate(async () => {
    const { renderAuthoredInteractiveLesson } = await import("/src/ui/lesson/authored.js");
    const { parseLessonMarkdown } = await import("/src/markdown/lesson-authoring.js");
    let cleanup;
    window.readingFixture = {
      mount(subject,type) {
        cleanup?.();
        const shell = document.querySelector(".lesson-shell"); shell.dataset.subject = subject;
        const copy = 'اختر ==المصطلح== في Access أو `SQL`.';
        const table = '| النوع | القيمة |\n| --- | --- |\n| عدد | `Integer` |\n| نص | `Text` |';
        const source = type === "mcq"
          ? `:::mcq\nid: themed-mcq\ntitle: سؤال\nquestion: ${copy}\n- [x] a | ==قيمة== Access \`Integer\`\n- [ ] b | خيار آخر\nexplanation: الشرح\nhint: اختر المصطلح المناسب.\nexample:\n${table}\n:::`
          : `:::exam-question\nid: themed-written\ntitle: سؤال\nquestion: سؤال\nreference: مصدر\nanswer-label: الإجابة\nbody:\n${copy}\n\n${table}\nfinal-answer:\n==جواب== Access \`Integer\`\nsolution:\nالشرح\n:::`;
        const parsed = parseLessonMarkdown(source,{published:true});
        if (parsed.issues.length) throw new Error(parsed.issues.join("; "));
        cleanup = renderAuthoredInteractiveLesson(document.querySelector(".lesson-card"),"الدرس",{title:"تدريب",summary:""},parsed.steps);
      },
      clear() { cleanup?.(); },
    };
  });
  for (const subject of ["ict","mathematics","mathematics-2","physics","chemistry","biology","arabic","english","islamic-education"]) {
    for (const width of [390,1440]) {
      await page.setViewportSize({width,height:900});
      for (const type of ["mcq","exam-question"]) {
        await page.evaluate(({subject,type}) => window.readingFixture.mount(subject,type),{subject,type});
        await page.evaluate(() => document.fonts.ready);
        const colors = await page.locator(type === "mcq" ? ".lesson-question" : "[data-exam-front]").evaluate(root => {
          const bg = selector => getComputedStyle(root.querySelector(selector)).backgroundColor;
          return {mark:bg("h1 mark"),term:bg("h1 .lesson-english-term"),code:bg("h1 code"),table:bg("th"),
            option:root.querySelector(".lesson-answer mark") ? bg(".lesson-answer mark") : null,
            optionCode:root.querySelector(".lesson-answer code") ? bg(".lesson-answer code") : null,
            overflow:document.documentElement.scrollWidth > innerWidth + 1};
        });
        assert.equal(colors.mark,colors.term,`${subject}/${type}: heading terms use the highlight tint`);
        assert.equal(colors.mark,colors.table,`${subject}/${type}: heading and table use the same subject`);
        if (colors.option) { assert.equal(colors.option,colors.mark);assert.equal(colors.optionCode,colors.code); }
        assert.notEqual(colors.code,"rgb(241, 243, 245)","inline code no longer uses fixed gray");
        assert.equal(colors.overflow,false,`${subject}/${type}/${width}: no page overflow`);
        assert.equal(await page.locator(".lesson-back").evaluate(button => button.classList.contains("app-close")),true);
        if (process.env.BROWSER_SCREENSHOT_DIR && ((subject === "physics" && width === 390 && type === "mcq") || (subject === "chemistry" && width === 1440 && type === "exam-question"))) {
          await mkdir(process.env.BROWSER_SCREENSHOT_DIR,{recursive:true});
          await page.screenshot({path:`${process.env.BROWSER_SCREENSHOT_DIR}/question-${subject}-${width}.png`});
        }
      }
    }
  }
  await page.evaluate(async () => {
    window.readingFixture.clear();
    const { mountQuestionExplanation } = await import("/src/ui/lesson/question-explanation.js");
    const host = document.querySelector(".lesson-card");
    host.innerHTML = '<footer class="level-layout-actions"><button data-template-primary>متابعة</button></footer>';
    const rtl = `<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow>${"<mi>س</mi><mo>+</mo><mn>١</mn>".repeat(80)}<mi>ص</mi></mrow></math>`;
    const markdown = ['## خطوات الحل','```mathml',rtl,'```','', '$$', 'a + '.repeat(80)+'b', '$$','',
      ...Array.from({length:30},(_,i)=>`الخطوة ${i+1}: نقرأ المعطيات ونقارن القيم ثم نراجع النتيجة.`)].join('\n\n').replace('```mathml\n\n','```mathml\n');
    mountQuestionExplanation({host,signal:new AbortController().signal,
      explanation:{isIncluded:()=>true,isUnlocked:()=>true,unlock:async()=>({markdown})}});
  });
  for (const width of [390,1440]) {
    await page.setViewportSize({width,height:900});
    await page.locator("[data-question-explain]").click();
    await page.locator('[data-explanation-body][aria-busy="false"]').waitFor();
    const body = page.locator("[data-explanation-body]");
    const vertical = page.locator(".question-explanation-reading > [data-content-scroll]");
    await vertical.waitFor({state:"visible"});
    if (process.env.BROWSER_SCREENSHOT_DIR) {
      await mkdir(process.env.BROWSER_SCREENSHOT_DIR,{recursive:true});
      await page.screenshot({path:`${process.env.BROWSER_SCREENSHOT_DIR}/explanation-scroll-${width}.png`});
    }
    await vertical.click();
    assert.ok(await body.evaluate(node=>node.scrollTop)>0,`${width}: bottom cue scrolls the explanation`);
    const formulas = page.locator(".question-explanation-dialog .lesson-math-sample");
    assert.equal(await formulas.count(),2);
    for (let index=0;index<2;index++) {
      const formula=formulas.nth(index),target=formula.locator(".lesson-math-scroll"),cue=formula.locator("[data-content-scroll-left]");
      await cue.scrollIntoViewIfNeeded();await cue.waitFor({state:"visible"});
      const before=await body.evaluate(node=>node.scrollTop);
      await cue.click();
      const offset=await target.evaluate(node=>node.scrollLeft);
      assert.ok(index===0 ? offset<0 : offset>0,`${width}: RTL/LTR cue scrolls its own formula`);
      assert.equal(await body.evaluate(node=>node.scrollTop),before,"formula cue leaves vertical reading position intact");
      await cue.focus();
      await target.evaluate(node=>node.scrollTo({left:getComputedStyle(node).direction==='rtl'?-1e6:1e6,behavior:'instant'}));
      await cue.waitFor({state:"hidden"});
      assert.equal(await target.evaluate(node=>node===document.activeElement),true,"finished cue returns focus to its formula");
    }
    await vertical.focus();await body.evaluate(node=>node.scrollTop=1e6);
    await vertical.waitFor({state:"hidden"});
    assert.equal(await body.evaluate(node=>node===document.activeElement),true,"bottom cue returns focus to the reading area");
    await body.evaluate(node=>{const copy=node.querySelector('.markdown-rendered');copy.replaceChildren('محتوى قصير يتجاوز أسفل الشاشة قليلًا.');copy.style.height=`${node.clientHeight-36}px`;node.scrollTop=0;});
    await vertical.waitFor({state:"visible"});
    assert.ok(await body.evaluate(node=>node.scrollHeight-node.clientHeight)>0,"small vertical overflow still has a cue");
    const close=page.locator("[data-explanation-close]");
    const inspect=()=>close.evaluate(button=>{const s=getComputedStyle(button),r=button.getBoundingClientRect(),icon=getComputedStyle(button,'::before');return {background:s.backgroundColor,outline:s.outlineStyle,shadow:s.boxShadow,transform:s.transform,color:s.color,x:r.x,y:r.y,width:r.width,height:r.height,icon:icon.width,mask:icon.maskImage};});
    const normal=await inspect();await close.hover();await close.focus();
    const focused=await inspect();
    assert.equal(focused.background,"rgba(0, 0, 0, 0)");assert.equal(focused.outline,"none");assert.equal(focused.shadow,"none");assert.equal(focused.transform,"none");
    assert.ok(normal.width>=48&&normal.height>=48&&parseFloat(normal.icon)>=34&&normal.mask.includes('stroke-linecap'));
    await page.mouse.down();await page.waitForFunction(color=>getComputedStyle(document.querySelector("[data-explanation-close]")).color!==color,normal.color);const pressed=await inspect();assert.equal(pressed.y,normal.y);assert.notEqual(pressed.color,normal.color,"press darkens only the close icon");
    await page.mouse.move(0,890);await page.mouse.up();
    if(process.env.BROWSER_SCREENSHOT_DIR){await mkdir(process.env.BROWSER_SCREENSHOT_DIR,{recursive:true});await page.screenshot({path:`${process.env.BROWSER_SCREENSHOT_DIR}/reading-controls-${width}.png`});}
    await close.click();await page.locator(".question-explanation-dialog").waitFor({state:"detached"});
  }
  await page.evaluate(() => {
    const fixture=document.createElement('aside');fixture.id='close-fixtures';
    fixture.style.cssText='position:fixed;inset:100px 40px auto;z-index:100;display:flex;flex-wrap:wrap;gap:12px;background:white';
    const owners=[['heart-depletion__layout','heart-depletion__close'],['question-report-heading',''],['math-question-filter-dialog-head','math-question-filter-close'],['roadmap-guide','roadmap-guide-close'],['roadmap-lesson-bubble','roadmap-bubble-close'],['lesson-question-image-viewer','lesson-question-image-close'],['lesson-shell--subject lesson-shell--ui-lab','lesson-back']];
    fixture.innerHTML=owners.map(([owner,button])=>`<section class="${owner}" style="position:relative;inset:auto;width:100px;height:90px;min-height:0;padding:10px"><button class="${button} app-close" type="button" aria-label="إغلاق">×</button></section>`).join('');
    document.body.append(fixture);
  });
  const closeFixtures=page.locator('#close-fixtures .app-close');
  for(let index=0;index<await closeFixtures.count();index++) {
    const close=closeFixtures.nth(index);await close.hover();await close.focus();
    const before=await close.evaluate(button=>{const s=getComputedStyle(button),r=button.getBoundingClientRect();return {x:r.x,y:r.y,background:s.backgroundColor,outline:s.outlineStyle,shadow:s.boxShadow,transform:s.transform,font:s.fontSize};});
    assert.deepEqual({background:before.background,outline:before.outline,shadow:before.shadow,transform:before.transform,font:before.font},
      {background:'rgba(0, 0, 0, 0)',outline:'none',shadow:'none',transform:'none',font:'0px'},`close context ${index} uses only the rounded X icon`);
    await page.mouse.down();
    const position=await close.evaluate(button=>{const r=button.getBoundingClientRect();return {x:r.x,y:r.y};});
    assert.deepEqual(position,{x:before.x,y:before.y},`close context ${index} stays still during press`);
    await page.mouse.up();
  }
  assert.deepEqual(errors,[]);
  console.log("Nine subjects: MCQ/written question tints; RTL/LTR formula and page cues; stationary, unoutlined close buttons passed at390/1440px.");
} finally {await browser.close();await server.close();}
