import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { access, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright";
import { loadSubjectLesson, subjectLessonRegistry } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { findChrome, getAvailablePort, rawRequest, delay, terminateProcess } from "./browser-session.mjs";

const evidence = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-question-surfaces";
await mkdir(evidence, { recursive:true });
const questions = [];
for (const key of subjectLessonRegistry.keys()) {
  const [subjectId, lessonId] = key.split(":");
  const lesson = await loadSubjectLesson(subjectId, lessonId);
  const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
  assert.deepEqual(parsed.issues, [], `${key}: published authoring parses`);
  for (const step of parsed.steps.filter(step => ["mcq", "exam-question"].includes(step.type))) {
    questions.push({ id:`${key}:${step.id}`, subjectId, lessonId, title:lesson.title,
      locale:subjectId === "english" ? "en" : "ar", step });
  }
}

const port = await getAvailablePort();
const base = `http://127.0.0.1:${port}/`;
const server = spawn(process.execPath, ["dev-server.mjs"], {
  env:{ ...process.env, PORT:String(port), LIVE_RELOAD:"0", DEV_AUTO_LOGIN:"1", ACCOUNTS_DATABASE_PATH:":memory:" },
  stdio:"ignore",
});
let browser;
try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try { ready = await rawRequest(port, "/__codex_dev_ready") === 204; }
    catch (error) { if (error.code !== "ECONNREFUSED") throw error; }
    if (ready) break;
    await delay(50);
  }
  assert.ok(ready, "isolated question surface server is ready");
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  const page = await browser.newPage({ viewport:{ width:1440, height:1000 }, reducedMotion:"reduce" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(base);
  await page.waitForFunction(() => document.body.dataset.accountType === "free");
  await page.goto(base + "?subject=ict");
  await page.locator("[data-roadmap-lesson]").first().waitFor();
  const inlineSafety = await page.evaluate(async () => {
    const { renderLessonInline } = await import("./src/markdown/renderer.js");
    const host = document.createElement("div");
    host.innerHTML = renderLessonInline('<img src="javascript:alert(1)" alt="&quot; onmouseover=&quot;bad" onerror="alert(1)">');
    return { alternative:host.querySelector("img")?.alt,
      unsafe:[...host.querySelectorAll("*")].some(node => [...node.attributes].some(attribute => /^on/i.test(attribute.name) || /^javascript:/i.test(attribute.value))) };
  });
  assert.deepEqual(inlineSafety, { alternative:'" onmouseover="bad', unsafe:false }, "inline panes preserve safe image alternatives and sanitizer protection");
  await page.evaluate(() => {
    window.questionSurfaceDiagnostics = root => {
      const active = root.querySelector("[data-exam-front]:not([hidden]),[data-exam-solution]:not([hidden]),.ui-lab-mcq");
      const overflow = [...active.querySelectorAll("h1,.lesson-answer,.lesson-answer>b,.markdown-rendered,.markdown-table-scroll,.lesson-inline-scroll,.lesson-math-sample,math,img")].filter(node => {
        if (node.closest(".lesson-flashcard-scroll") || node.parentElement?.closest(".lesson-inline-scroll,.lesson-math-scroll,.markdown-table-scroll")) return false;
        const bounds = node.getBoundingClientRect();
        const scrollable = ["auto", "scroll"].includes(getComputedStyle(node).overflowX);
        if (bounds.left < -1 || bounds.right > innerWidth + 1 || (!scrollable && node.scrollWidth > node.clientWidth + 1)) return true;
        if (node.localName === "math") {
          const owner = node.closest("h1,.lesson-answer>b,.lesson-question-example");
          const ownerBounds = owner?.getBoundingClientRect();
          if (ownerBounds && (bounds.left < ownerBounds.left - 2 || bounds.right > ownerBounds.right + 2)) return true;
        }
        return false;
      }).map(node => ({ tag:node.tagName, className:typeof node.className === "string" ? node.className : "", scroll:node.scrollWidth, width:node.clientWidth }));
      const inaccessibleTables = [...active.querySelectorAll(".markdown-rendered table")].filter(table => {
        const wrapper = table.closest(".markdown-table-scroll");
        return !wrapper || wrapper.tabIndex !== 0 || wrapper.getAttribute("role") !== "region" || !wrapper.getAttribute("aria-label")
          || [...table.querySelectorAll("thead th")].some(header => header.getAttribute("scope") !== "col");
      }).length;
      const inaccessibleMath = [...active.querySelectorAll(".lesson-inline-scroll")].filter(region => region.closest("button")
        ? ["tabindex", "role", "aria-label", "aria-description"].some(attribute => region.hasAttribute(attribute))
        : region.getAttribute("role") !== "group" || region.hasAttribute("aria-label")
          || region.tabIndex !== (region.scrollWidth > region.clientWidth + 1 ? 0 : -1)
          || region.hasAttribute("aria-description") !== (region.scrollWidth > region.clientWidth + 1)).length;
      return { pageOverflow:document.documentElement.scrollWidth > innerWidth + 1, overflow,
        invalidMath:root.querySelectorAll(".lesson-math-error").length,
        missingImages:[...active.querySelectorAll("img")].filter(image => !image.complete || !image.naturalWidth).length, inaccessibleTables, inaccessibleMath,
        hiddenSurface:active.getBoundingClientRect().width === 0 };
    };
  });
  const failures = [];
  const images = new Set();
  let fieldCount = 0, formulaCount = 0, tableCount = 0;
  const risks = [];
  for (let offset = 0; offset < questions.length; offset += 100) {
    const results = await page.evaluate(async questions => {
      const [{ renderMarkdownDocument, renderMarkdownInline, renderLessonInline }, { renderQuestionContent }] = await Promise.all([
        import("./src/markdown/renderer.js"), import("./src/ui/lesson/question-layout.js"),
      ]);
      return questions.map(question => {
        const { step, locale } = question;
        const content = step.content;
        const surfaces = step.type === "mcq"
          ? [["prompt", content.prompt, true], ["example", content.example], ["explanation", content.correctFeedback],
            ["hint", content.wrongFeedback, true], ...content.answers.map((answer, index) => [`option-${index + 1}`, answer.text, true])]
          : [["body", content.body], ["solution", content.solution]];
        const issues = [], images = [];
        const frontImageSources = [];
        let fieldCount = 0, formulas = 0, tables = 0, textLength = 0;
        let frontLength = 0, optionLength = 0, frontFormulas = 0, frontTables = 0, frontImages = 0, solutionLength = 0;
        // Inspect markup without starting thousands of incidental image loads.
        // The bounded decode pass below verifies every image in the live document.
        const host = document.implementation.createHTMLDocument("").createElement("div");
        if (step.type === "mcq") {
          // Exercise the same complete prompt/options markup used by the runtime.
          host.innerHTML = renderQuestionContent(content, { locale });
          if (host.querySelectorAll("[data-ui-lab-answer]").length !== content.answers.length) issues.push("lost answer control");
        }
        for (const [name, source, inline] of surfaces) {
          if (!source) continue;
          fieldCount++;
          host.innerHTML = inline ? (step.type === "mcq" ? renderLessonInline(source) : renderMarkdownInline(source, { locale }))
            : renderMarkdownDocument(source, { locale });
          const expectedMath = source.match(/<math\b/g)?.length || 0;
          const expectedTables = source.match(/^\|(?:\s*:?-+:?\s*\|)+\s*$/gm)?.length || 0;
          const renderedMath = host.querySelectorAll("math").length;
          const renderedTables = host.querySelectorAll("table").length;
          if (host.querySelector(".lesson-math-error")) issues.push(`${name}: invalid math`);
          if (renderedMath < expectedMath) issues.push(`${name}: lost MathML (${renderedMath}/${expectedMath})`);
          if (renderedTables < expectedTables) issues.push(`${name}: lost table (${renderedTables}/${expectedTables})`);
          if ([...host.querySelectorAll("p")].some(node => /^\|(?:[^\n|]*\|){2,}\s*$/m.test(node.textContent))) issues.push(`${name}: leaked table syntax`);
          if (host.querySelector("script,iframe,object,embed") || [...host.querySelectorAll("*")].some(node => [...node.attributes].some(attr => /^on/i.test(attr.name) || /^javascript:/i.test(attr.value)))) issues.push(`${name}: unsafe markup`);
          if (!host.textContent.trim() && !host.querySelector("math,img")) issues.push(`${name}: empty rendered content`);
          host.querySelectorAll("img").forEach(image => {
            images.push(image.getAttribute("src"));
            if (!image.alt.trim()) issues.push(`${name}: missing image alternative`);
          });
          formulas += renderedMath;
          tables += renderedTables;
          textLength += host.textContent.length;
          if (!["explanation", "hint", "solution"].includes(name)) {
            frontLength += host.textContent.length;
            frontFormulas += renderedMath;
            frontTables += renderedTables;
            frontImages += host.querySelectorAll("img").length;
            host.querySelectorAll("img").forEach(image => frontImageSources.push(image.getAttribute("src")));
          }
          if (name.startsWith("option-")) optionLength = Math.max(optionLength, host.textContent.length);
          if (name === "solution") solutionLength = host.textContent.length;
        }
        return { id:question.id, issues, images, fieldCount, formulas, tables, textLength,
          frontLength, optionLength, frontFormulas, frontTables, frontImages, frontImageSources, solutionLength };
      });
    }, questions.slice(offset, offset + 100));
    for (const result of results) {
      fieldCount += result.fieldCount;
      formulaCount += result.formulas;
      tableCount += result.tables;
      result.images.forEach(source => images.add(source));
      risks.push(result);
      if (result.issues.length) failures.push(result);
    }
    if (offset % 1000 === 0) console.log(`Question surfaces: ${Math.min(offset + 100, questions.length)}/${questions.length}`);
  }
  console.log(`Rendered ${questions.length} questions, ${fieldCount} fields, ${formulaCount} formulas and ${tableCount} tables; ${images.size} unique images; ${failures.length} field failures.`);
  // Validate every rendered local image URL before the visual risk sample.
  const missingImages = [];
  for (const source of images) {
    assert.ok(source && !/^https?:|^data:/i.test(source), `published question image is local: ${source}`);
    const url = new URL(source, base);
    assert.equal(url.origin, new URL(base).origin);
    try { await access(resolve(process.cwd(), "." + decodeURIComponent(url.pathname))); }
    catch { missingImages.push(source); }
  }
  const decodedImages = await page.evaluate(async sources => {
    const failures = [], dimensions = [];
    for (let offset = 0; offset < sources.length; offset += 4) {
      await Promise.all(sources.slice(offset, offset + 4).map(async source => {
        const image = new Image();
        image.src = source;
        try {
          await image.decode();
          if (!image.naturalWidth || !image.naturalHeight) failures.push(source);
          else dimensions.push({ source, width:image.naturalWidth, height:image.naturalHeight });
        }
        catch { failures.push(source); }
      }));
    }
    return { failures, dimensions };
  }, [...images]);

  // Real runtime layouts: select each subject/type, its longest reading surface,
  // and global table, formula and image outliers. This is risk sampling, not a
  // claim of visually inspecting every one of the 7,229 questions.
  const selected = new Map();
  const byId = new Map(questions.map(question => [question.id, question]));
  const add = risk => { if (risk) selected.set(risk.id, byId.get(risk.id)); };
  failures.forEach(add);
  for (const subjectId of new Set(questions.map(question => question.subjectId))) {
    for (const type of ["mcq", "exam-question"]) {
      const group = risks.filter(risk => byId.get(risk.id).subjectId === subjectId && byId.get(risk.id).step.type === type);
      add(group[0]);
      add(group.toSorted((a, b) => b.frontLength - a.frontLength)[0]);
      add(group.toSorted((a, b) => b[type === "mcq" ? "optionLength" : "solutionLength"] - a[type === "mcq" ? "optionLength" : "solutionLength"])[0]);
    }
  }
  for (const metric of ["formulas", "frontFormulas", "frontTables", "frontImages"]) risks.toSorted((a, b) => b[metric] - a[metric]).slice(0, 3).forEach(add);
  const frontSources = new Set(risks.flatMap(risk => risk.frontImageSources));
  for (const score of [image => image.width / image.height, image => image.height / image.width, image => image.width * image.height]) {
    const image = decodedImages.dimensions.filter(image => frontSources.has(image.source)).toSorted((a, b) => score(b) - score(a))[0];
    if (image) add(risks.find(risk => risk.frontImageSources.includes(image.source)));
  }
  const layoutFailures = [];
  await page.locator("[data-roadmap-lesson]").first().click();
  await page.locator("[data-bubble-start]").click();
  await page.locator("#lesson-content .level-layout-preview").waitFor();
  const mcqs = questions.filter(question => question.step.type === "mcq");
  for (const width of [1440,320]) {
    await page.setViewportSize({ width, height:1000 });
    for (let offset = 0; offset < mcqs.length; offset += 50) {
      const results = await page.evaluate(async questions => {
        const { renderQuestion } = await import("./src/ui/lesson/question.js");
        const root = document.querySelector("#lesson-content");
        const failures = [];
        for (const question of questions) {
          document.querySelector(".lesson-shell").dataset.subject = question.subjectId;
          const cleanup = renderQuestion(root, { definition:question.step, locale:question.locale });
          root.getBoundingClientRect();
          await document.fonts.ready;
          await Promise.allSettled([...root.querySelectorAll("img")].map(image => image.decode()));
          const result = window.questionSurfaceDiagnostics(root);
          if (result.pageOverflow || result.overflow.length || result.invalidMath || result.missingImages || result.inaccessibleTables || result.inaccessibleMath || result.hiddenSurface) failures.push({ id:question.id, ...result });
          cleanup();
        }
        return failures;
      }, mcqs.slice(offset, offset + 50));
      layoutFailures.push(...results.map(result => ({ ...result, width, face:"mcq" })));
      if (offset % 500 === 0) console.log(`Mounted MCQ layouts ${width}px: ${Math.min(offset + 50, mcqs.length)}/${mcqs.length}; ${layoutFailures.length} collected failures.`);
    }
  }
  // Authored fixtures need their own shell: the live route controller would
  // otherwise compete with each fixture controller for the same footer.
  await page.locator(".lesson-shell").evaluate(shell => {
    const fixture = shell.cloneNode(true);
    fixture.querySelectorAll('[data-question-slider]').forEach(slider => slider.remove());
    shell.replaceWith(fixture);
  });
  // Keep representative screenshots of discovered layout failures as well.
  layoutFailures.slice(0, 6).forEach(failure => add(risks.find(risk => risk.id === failure.id)));
  for (const question of selected.values()) {
    await page.evaluate(async question => {
      window.questionSurfaceCleanup?.();
      const [{ loadSubjectLesson }, { renderAuthoredInteractiveLesson }] = await Promise.all([
        import("./src/data/lessons/subject-lesson-registry.js"), import("./src/ui/lesson/authored.js"),
      ]);
      const lesson = await loadSubjectLesson(question.subjectId, question.lessonId);
      document.querySelector(".lesson-shell").dataset.subject = question.subjectId;
      window.questionSurfaceCleanup = renderAuthoredInteractiveLesson(document.querySelector("#lesson-content"), lesson.title, lesson, [question.step], {});
    }, question);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.allSettled([...document.querySelectorAll("#lesson-content img")].map(image => image.decode()));
    });
    for (const width of [1440,320]) {
      await page.setViewportSize({ width, height:1000 });
      for (const face of question.step.type === "mcq" ? ["mcq"] : ["front", "solution"]) {
        if (face === "solution") {
          await page.locator("[data-exam-front] .lesson-flashcard-scroll").focus();
          await page.keyboard.press("Enter");
        } else if (face === "front" && await page.locator("[data-exam-front]").isHidden()) {
          await page.locator("[data-exam-solution] .lesson-flashcard-scroll").focus();
          await page.keyboard.press("Enter");
        }
        const layout = await page.locator("#lesson-content").evaluate(root => window.questionSurfaceDiagnostics(root));
        if (layout.pageOverflow || layout.overflow.length || layout.invalidMath || layout.missingImages || layout.inaccessibleTables || layout.inaccessibleMath || layout.hiddenSurface) layoutFailures.push({ id:question.id, width, face, ...layout });
        await page.screenshot({ path:`${evidence}/${question.subjectId}-${question.step.id}-${face}-${width}.png` });
      }
    }
  }
  await page.evaluate(() => window.questionSurfaceCleanup?.());
  console.log(`Audit results: ${failures.length} field failures; ${missingImages.length} missing images; ${decodedImages.failures.length} image decode failures; ${layoutFailures.length} layout failures.`);
  for (const failure of layoutFailures) console.error("Question layout failure:", JSON.stringify(failure));
  const diagnostics = `${evidence}/diagnostics.json`;
  await writeFile(diagnostics, JSON.stringify({ questions:questions.length, fields:fieldCount, formulas:formulaCount, tables:tableCount,
    images:images.size, mcqs:mcqs.length, riskSamples:selected.size, failures, missingImages, decodeFailures:decodedImages.failures, layoutFailures }, null, 2));
  assert.equal(failures.length, 0, `canonical question fields render without formatting loss; see ${diagnostics}`);
  assert.equal(missingImages.length, 0, `every local question image exists; see ${diagnostics}`);
  assert.equal(decodedImages.failures.length, 0, `every question image decodes; see ${diagnostics}`);
  assert.equal(layoutFailures.length, 0, `all MCQ layouts and risk samples remain readable at desktop/320px; see ${diagnostics}`);
  assert.deepEqual(errors, []);
  console.log(`Question surfaces passed: ${questions.length} canonical questions; ${fieldCount} fields; ${images.size} decoded images; all ${mcqs.length} MCQ layouts and ${selected.size} real runtime risk samples at 1440px/320px. Evidence: ${evidence}`);
} finally {
  await browser?.close();
  await terminateProcess(server);
}
