import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { chromium } from "playwright";
import { createAppServer } from "../../src/server/app-server.mjs";
import { readRuntimeConfig } from "../../src/server/runtime-config.mjs";
import { getSubjectRoadmap } from "../../src/data/subject-roadmaps.js";
import { ADABI_SUBJECTS } from "../../src/data/course.js";
import { loadSubjectLesson } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { findChrome } from "./browser-session.mjs";

// Isolated rendering checks: no live accounts, answers or progress requests.
const evidence = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/khutwa-subject-presentation";
await mkdir(evidence, { recursive:true });
const temporary = await mkdtemp(path.join(tmpdir(), "khutwa-presentation-"));
const root = process.cwd();
const app = await createAppServer({ root, logger:() => {}, config:readRuntimeConfig({
  PORT:"0", LIVE_RELOAD:"0", LEARN_BACKEND:"local",
  ACCOUNTS_DATABASE_PATH:path.join(temporary, "accounts.sqlite"),
}, { root }) });
const localBase = `http://127.0.0.1:${await app.listen()}`;
const base = process.env.PRESENTATION_URL || localBase;
let browser;
try {
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  const page = await browser.newPage({ viewport:{ width:1440, height:1000 }, reducedMotion:"reduce" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.route("**/src/bootstrap.js*", route => route.fulfill({ contentType:"text/javascript", body:"" }));
  await page.goto(base);
  await page.evaluate(() => {
    document.querySelectorAll("link[data-app-style]").forEach(link => { link.media = "all"; });
    document.body.removeAttribute("data-startup");
    document.body.innerHTML = '<main style="width:min(940px,calc(100% - 32px));margin:20px auto" id="presentation"></main>';
  });
  for (const width of [1440,390]) {
    await page.setViewportSize({ width, height:1000 });
    const cards = await page.evaluate(async () => {
      const { renderCourseMapMarkup } = await import("/src/ui/course-map.js");
      const host = document.querySelector("#presentation");
      host.innerHTML = renderCourseMapMarkup() + renderCourseMapMarkup({ selection:{ path:"literary" } });
      await Promise.all([...host.querySelectorAll("img")].map(image => image.decode()));
      return [...host.querySelectorAll(".subject-card")].map(card => ({
        id:card.dataset.subject, color:getComputedStyle(card).getPropertyValue("--subject-color").trim(),
        surface:getComputedStyle(card).getPropertyValue("--card-surface").trim(),
        pattern:getComputedStyle(card,"::before").backgroundImage,
        artwork:card.querySelector("img").getAttribute("src"),
        overflow:card.scrollWidth > card.clientWidth + 1,
      }));
    });
    const byId = new Map(cards.map(card => [card.id,card]));
    for (const [adabi, scientific] of [["mathematics","mathematics"],["arabic-1","arabic"],
      ["arabic-2","arabic"],["english","english"],["islamic-education","islamic-education"],
      ["information-technology","ict"]]) {
      for (const key of ["color","surface","pattern","artwork"])
        assert.equal(byId.get(`adabi-${adabi}`)[key], byId.get(scientific)[key], `${width}: ${adabi} shares ${key}`);
    }
    const fresh = ["history","geography","scientific-culture"].map(id => byId.get(`adabi-${id}`));
    assert.equal(new Set(fresh.map(card => card.color)).size,3);
    assert.equal(new Set(fresh.map(card => card.artwork)).size,3);
    assert.ok(fresh.every(card => card.color !== byId.get("ict").color));
    assert.ok(cards.every(card => !card.overflow));
    await page.locator('.subject-map[data-path="literary"]').screenshot({ path:`${evidence}/adabi-subjects-${width}.png` });
  }

  const localized = await page.evaluate(async () => {
    const { renderMarkdownDocument, renderLessonInline } = await import("/src/markdown/renderer.js");
    const source = 'القيمة 123 والعدد 12.5، ورمز CO2. [المصدر 25](/source-25?q=123) و`SELECT x FROM t WHERE id = 12;`';
    const host = document.createElement("div"); host.innerHTML = renderMarkdownDocument(source,{locale:"ar"});
    return { text:host.textContent, code:host.querySelector("code").textContent,
      href:host.querySelector("a").getAttribute("href"), numeric:renderLessonInline("-123.5",{locale:"ar"}),
      english:renderMarkdownDocument("The value is 123.5.",{locale:"en"}),
      math:renderMarkdownDocument('`mathml: <math dir="rtl"><msup><mi>س</mi><mrow><mn>2</mn><mi>/</mi><mn>5</mn></mrow></msup></math>`',{locale:"ar"}),
      arithmetic:renderLessonInline('$3(-1)^2 + \\sqrt{5}$',{locale:"ar"}),
      physics:renderLessonInline('\\(v^2=2gh\\)',{locale:"ar"}),
      fraction:renderLessonInline('الناتج **٥⁄٣**',{locale:"ar"}),
      negativeFraction:renderLessonInline('`mathml: <math dir="rtl"><msup><mi>س</mi><mrow><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></math>`',{locale:"ar"}) };
  });
  assert.match(localized.text,/القيمة ١٢٣ والعدد ١٢.٥/);
  assert.match(localized.text,/CO2/);
  assert.equal(localized.code.replace(/\s+/g," "),"SELECT x FROM t WHERE id = 12;");
  assert.equal(localized.href,"/source-25?q=123");
  assert.match(localized.numeric,/-١٢٣.٥/);
  assert.match(localized.english,/123.5/);
  assert.match(localized.math,/<mfrac><mn[^>]*>٢<\/mn><mn[^>]*>٥<\/mn><\/mfrac>/);
  assert.match(localized.arithmetic,/<math[^>]*dir="rtl"/);
  assert.match(localized.physics,/<math[^>]*dir="ltr"/);
  assert.match(localized.fraction,/<mfrac><mn[^>]*>٥<\/mn><mn[^>]*>٣<\/mn><\/mfrac>/);
  assert.match(localized.negativeFraction,/<mfrac><mrow><mo>−<\/mo><mn[^>]*>١<\/mn><\/mrow><mn[^>]*>٢<\/mn><\/mfrac>/);

  let questions = 0, fields = 0, formulas = 0;
  const samples = [];
  const failures = [];
  for (const subject of ["physics","mathematics","mathematics-2","adabi-mathematics"]) {
    const lessons = getSubjectRoadmap(subject).units.flatMap(unit => unit.lessons).filter(lesson => !lesson.hidden && !lesson.optional);
    for (const entry of lessons) {
      const lesson = await loadSubjectLesson(subject,entry.id);
      const steps = parseLessonMarkdown(lesson.authoringSource,{published:true}).steps;
      const batch = [];
      for (const step of steps) {
        if (!["mcq","exam-question"].includes(step.type)) continue;
        questions++;
        const c = step.content;
        for (const [kind,text,inline] of [["prompt",c.prompt,true],["body",c.body],
          ["example",c.example],["answer",c.finalAnswer],["solution",c.solution||c.correctFeedback],
          ...(c.answers||[]).map(answer => ["option",answer.text,true])]) {
          if (text) batch.push({id:`${subject}/${step.id}/${kind}`,text,inline});
        }
        const visualLessons = {physics:["momentum-impulse","dc-circuits"],mathematics:["average-change","trigonometric-derivatives"],
          "mathematics-2":["matrices","integral-area"],"adabi-mathematics":["matrix","first-derivative","indefinite-integral"]};
        if (visualLessons[subject].includes(entry.id) && !samples.some(sample => sample.subject === subject && sample.lessonId === entry.id)
          && (c.solution||c.correctFeedback)?.includes("math"))
          samples.push({subject,lessonId:entry.id,step});
      }
      const result = process.env.PRESENTATION_LAYOUT_ONLY === "1" ? {failures:[],formulas:0} : await page.evaluate(async batch => {
        const [{renderMarkdownDocument,renderLessonInline},{spaceWorkedEquations}] = await Promise.all([
          import("/src/markdown/renderer.js"),import("/src/ui/lesson/shared.js"),
        ]);
        const host = document.createElement("div");
        const failures = []; let formulas = 0;
        for (const field of batch) {
          host.innerHTML = (field.inline ? renderLessonInline : renderMarkdownDocument)(field.text,{locale:"ar"});
          if (field.id.endsWith("/solution")) {
            const original=host.textContent;
            spaceWorkedEquations(host);
            if (host.textContent !== original) failures.push({id:field.id,problem:"worked-step layout changed the calculation"});
          }
          formulas += host.querySelectorAll("math").length;
          if (host.querySelector(".lesson-math-error") || /(?:mathml:|\\(?:frac|dfrac|sqrt|begin|mathrm)\b)/.test(host.textContent))
            failures.push({id:field.id,problem:"unrendered formula",text:host.textContent.slice(0,220)});
          if ([...host.querySelectorAll("math mn")].some(node => /[0-9]/.test(node.textContent)))
            failures.push({id:field.id,problem:"Western digits in Arabic formula"});
          if ([...host.querySelectorAll("math")].some(node => node.namespaceURI !== "http://www.w3.org/1998/Math/MathML"))
            failures.push({id:field.id,problem:"invalid math namespace"});
        }
        return {failures,formulas};
      },batch);
      fields += batch.length; formulas += result.formulas; failures.push(...result.failures);
    }
    console.log(`${subject}: ${process.env.PRESENTATION_LAYOUT_ONLY === "1" ? "layout samples selected" : "all question, answer and solution fields rendered"}.`);
  }
  assert.deepEqual(failures,[],"published Physics and both math paths render without leaked syntax or Western numerals");

  for (const subject of ADABI_SUBJECTS.filter(subject => subject.id !== "adabi-mathematics")) {
    const first = getSubjectRoadmap(subject.id).units.flatMap(unit=>unit.lessons).find(lesson=>!lesson.hidden&&!lesson.optional);
    const lesson = await loadSubjectLesson(subject.id,first.id);
    const step = parseLessonMarkdown(lesson.authoringSource).steps.find(step=>["mcq","exam-question"].includes(step.type));
    samples.push({subject:subject.id,step,locale:subject.id === "adabi-english" ? "en" : "ar"});
  }

  for (const {subject,step,locale="ar"} of samples) {
    await page.evaluate(async ({subject,step,locale}) => {
      window.presentationCleanup?.();
      document.body.className = "ui-lab-open ready-lesson-open";
      document.body.innerHTML = `<main class="page lesson-mode"><section class="lesson-view is-visible"><div class="lesson-shell lesson-shell--ui-lab" data-subject="${subject}"><div class="lesson-card lesson-card--ui-lab"><div class="ready-lesson-stage" id="fixture"></div></div></div></section></main>`;
      const [{renderQuestion},{renderExamQuestion},{mountQuestionExplanation}] = await Promise.all([
        import("/src/ui/lesson/question.js"),import("/src/ui/lesson/exam-question.js"),import("/src/ui/lesson/question-explanation.js"),
      ]);
      const host = document.querySelector("#fixture");
      host.lang=locale;host.dir=locale==="ar"?"rtl":"ltr";
      const cleanup = step.type === "mcq" ? renderQuestion(host,{definition:step,locale}) : renderExamQuestion(host,step,{locale});
      const controller = new AbortController();
      mountQuestionExplanation({host,locale,signal:controller.signal,
        explanation:{isUnlocked:()=>true,unlock:async()=>({markdown:step.content.solution||step.content.correctFeedback})}});
      window.presentationCleanup = () => {controller.abort();cleanup();};
    },{subject,step,locale});
    for (const width of [1440,390]) {
      await page.setViewportSize({width,height:1000});
      await page.evaluate(() => document.fonts.ready);
      const fonts = await page.evaluate(() => ({
        question:getComputedStyle(document.querySelector('.ui-lab-mcq > h1,[data-exam-front] h1')).fontFamily,
        answers:[...document.querySelectorAll('.lesson-answer > b')].map(node=>getComputedStyle(node).fontFamily),
        control:getComputedStyle(document.querySelector('[data-template-primary]')).fontFamily,
        amiriLoaded:[...document.fonts].some(font=>font.family.replaceAll('"','') === "Amiri" && font.status === "loaded"),
        overflow:document.documentElement.scrollWidth > innerWidth+1,
      }));
      assert.match(fonts.question,/Amiri/); assert.doesNotMatch(fonts.question,/Noto/);
      assert.ok(fonts.answers.every(font=>/Amiri/.test(font)&&!/Noto/.test(font)));
      assert.match(fonts.control,/Noto Sans Arabic/); assert.equal(fonts.overflow,false);
      assert.equal(fonts.amiriLoaded,true,"the actual Amiri font file is loaded");
      await page.locator('[data-question-explain]').click();
      const dialog=page.locator('.question-explanation-dialog[open]');
      await dialog.locator('[data-explanation-body][aria-busy="false"]').waitFor();
      await page.evaluate(() => document.fonts.ready);
      const solution = await dialog.evaluate(dialog=>({
        font:getComputedStyle(dialog.querySelector('.markdown-rendered')).fontFamily,
        header:getComputedStyle(dialog.querySelector('header h2')).fontFamily,
        overflow:dialog.querySelector('[data-explanation-body]').scrollWidth > dialog.querySelector('[data-explanation-body]').clientWidth+1,
        errors:dialog.querySelectorAll('.lesson-math-error').length,
        empty:[...dialog.querySelectorAll('math')].some(math=>!math.getBoundingClientRect().height),
      }));
      assert.match(solution.font,/Amiri/); assert.doesNotMatch(solution.font,/Noto/);
      assert.match(solution.header,/Noto Sans Arabic/);
      assert.equal(solution.overflow,false);assert.equal(solution.errors,0);assert.equal(solution.empty,false);
      await dialog.screenshot({path:`${evidence}/${subject}-${step.id}-${width}.png`});
      await page.keyboard.press('Escape');
    }
  }
  await page.evaluate(()=>window.presentationCleanup?.());
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({questions,fields,formulas,screenshots:evidence}));
} finally {
  await browser?.close(); await app.close(); await rm(temporary,{recursive:true,force:true});
}
