import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { chromium } from "playwright";
import { ADABI_COURSES } from "../../src/data/lessons/adabi/catalog.js";
import { loadSubjectLesson } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { getQuestionXp } from "../../src/domain/question-rewards.js";
import { CORRECT_ANSWER_GEM_REWARD } from "../../src/domain/learner-resources.js";
import { createAppServer } from "../../src/server/app-server.mjs";
import { readRuntimeConfig } from "../../src/server/runtime-config.mjs";
import { findChrome } from "./browser-session.mjs";

// Full application + HTTP progress, using disposable accounts and SQLite only.
// This never starts the default development proxy or contacts live students.
const routes = [];
const renderSamples = [];
for (const course of ADABI_COURSES) {
  const samples = { subjectId:course.subjectId, total:0 };
  for (const catalog of course.lessons) {
    samples.total += catalog.questionCount;
    const lesson = await loadSubjectLesson(course.subjectId, catalog.id);
    const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
    assert.deepEqual(parsed.issues, [], `${course.subjectId}/${catalog.id}`);
    for (const step of parsed.steps) {
      const part = catalog.parts.find(part => part.questionIds.includes(step.id));
      const sample = { subjectId:course.subjectId, lessonId:catalog.id, partId:part.id, step };
      const content = step.content;
      renderSamples.push({ id:`${course.subjectId}/${step.id}`, locale:course.subjectId === "adabi-english" ? "en" : "ar",
        fields:step.type === "mcq"
          ? [["prompt", content.prompt, true], ["example", content.example], ["explanation", content.correctFeedback],
            ...content.answers.map((answer, index) => [`option-${index + 1}`, answer.text, true])]
          : [["body", content.body], ["final-answer", content.finalAnswer], ["solution", content.solution]] });
      if (!samples.mcq && step.type === "mcq") samples.mcq = sample;
      if (!samples.flashcard && step.type === "exam-question") samples.flashcard = sample;
      if (step.type === "exam-question" && !samples.multilineAnswer
        && (content.finalAnswer.match(/^[-*] /gm)?.length || 0) >= 2) samples.multilineAnswer = sample;
      if (course.subjectId === "adabi-mathematics" && !samples.workedCalculation
        && ((content.correctFeedback || content.solution || "").match(/^```(?:mathml|latex)/gm)?.length || 0) >= 2)
        samples.workedCalculation = sample;
      if (!samples.readingFlashcard && step.type === "exam-question" && /\n### /.test(content.body) && content.body.length > 1000) samples.readingFlashcard = sample;
      if (course.subjectId === "adabi-english" && ["en-t-p033-q08", "en-t-p035-q15"].includes(step.id))
        (samples.contextRepairs ||= []).push(sample);
      if (course.subjectId === "adabi-english" && ["en-t-p009-q03", "en-t-p009-q03-blank-2"].includes(step.id))
        (samples.pairedBlanks ||= []).push(sample);
      const front = step.type === "mcq" ? `${step.content.prompt}\n${step.content.example || ""}` : step.content.body;
      if (!samples.figure && /!\[[^\]]*\]\(assets\/lessons\/adabi\//.test(front)) samples.figure = sample;
    }
  }
  assert.ok(samples.mcq && samples.flashcard, `${course.subjectId} supplies both native formats`);
  routes.push(samples);
}
assert.equal(routes.length, 9);
assert.equal(routes.reduce((total, course) => total + course.total, 0), 5038);
const directory = await mkdtemp(path.join(tmpdir(), "khutwa-adabi-browser-"));
const databasePath = path.join(directory, "accounts.sqlite");
const root = process.cwd();
const app = await createAppServer({ root, logger:() => {}, config:readRuntimeConfig({
  PORT:"0", LIVE_RELOAD:"0", LEARN_BACKEND:"local", ACCOUNTS_DATABASE_PATH:databasePath,
}, { root }) });
const base = `http://127.0.0.1:${await app.listen()}`;
let browser;
const questionUrl = sample => `${base}/?${new URLSearchParams({
  subject:sample.subjectId, lesson:sample.lessonId, part:sample.partId, question:sample.step.id,
})}`;
const ready = page => page.waitForFunction(() => document.querySelector("[data-question-slider]")
  && !document.querySelector("#app-splash,.media-pending")
  && document.querySelector(".lesson-card")?.getAttribute("aria-busy") !== "true");
const activeId = page => page.locator("[data-live-authored-step]").getAttribute("data-lesson-step");
const noLocalPdfLinks = async (scope, label) => {
  const targets = await scope.locator("a[href]").evaluateAll(anchors => anchors.map(anchor => {
    try {
      const target = new URL(anchor.getAttribute("href"), location.href);
      return target.origin === location.origin && /\.pdf$/i.test(target.pathname) ? target.href : null;
    } catch { return null; }
  }).filter(Boolean));
  assert.deepEqual(targets, [], `${label}: compiled questions retain citations without private PDF dependencies`);
};
const openQuestion = async (page, sample) => {
  await page.goto(questionUrl(sample), { waitUntil:"commit" });
  await ready(page);
  assert.equal(await activeId(page), sample.step.id);
  assert.equal(await page.locator(".super-invitation[open]").count(), 0);
  await noLocalPdfLinks(page.locator(".level-layout-preview"), sample.step.id);
};
const layout = async (page, label) => {
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `${label}: page width`);
  assert.equal(await page.locator(".lesson-math-error").count(), 0, `${label}: formulas`);
};
const flashcardHeading = async (page, sample) => {
  const actual = (await page.locator("[data-exam-front] h1").textContent()).trim();
  const expected = await page.evaluate(async ({ source, locale }) => {
    const { renderLessonInline } = await import("/src/markdown/renderer.js");
    const host = document.createElement("div");
    host.innerHTML = renderLessonInline(source.split("\n")[0], { locale });
    return host.textContent.trim();
  }, { source:sample.step.content.body, locale:sample.subjectId === "adabi-english" ? "en" : "ar" });
  assert.doesNotMatch(actual, /^(?:#{1,6}\s|>\s|[-*+]\s)/, `${sample.step.id}: flashcard heading contains source block syntax`);
  assert.equal(actual, expected, `${sample.step.id}: flashcard heading must show the question's first line`);
};
const explanation = async (page, sample) => {
  const opener = page.locator("[data-question-explain]");
  await opener.click();
  const dialog = page.locator(".question-explanation-dialog[open]");
  const body = dialog.locator('[data-explanation-body][aria-busy="false"]');
  await body.waitFor();
  await noLocalPdfLinks(dialog, `${sample.step.id} explanation`);
  assert.ok((await body.innerText()).trim(), `${sample.step.id}: explanation is readable`);
  const expected = await page.evaluate(async ({ markdown, locale }) => {
    const { renderMarkdownDocument } = await import("/src/markdown/renderer.js");
    const host = document.createElement("div");
    host.innerHTML = renderMarkdownDocument(markdown, { locale, highlightQuotes:true });
    return host.textContent.replace(/\s+/g, " ").trim();
  }, { markdown:sample.step.type === "mcq" ? sample.step.content.correctFeedback : sample.step.content.solution,
    locale:sample.subjectId === "adabi-english" ? "en" : "ar" });
  assert.equal(await body.locator(".markdown-rendered").textContent().then(text => text.replace(/\s+/g, " ").trim()), expected,
    `${sample.step.id}: the explanation belongs to this exact question`);
  assert.equal(await dialog.locator(".lesson-math-error").count(), 0, `${sample.step.id}: explanation formulas`);
  assert.equal(await dialog.evaluate(node => node.scrollWidth > innerWidth + 1), false, `${sample.step.id}: explanation width`);
  await page.keyboard.press("Escape");
  await dialog.waitFor({ state:"detached" });
};
async function auditRenderedCorpus(browser) {
  const context = await browser.newContext({ extraHTTPHeaders:{ "Accept-Encoding":"identity" } });
  try {
    await context.route("**/src/bootstrap.js", route => route.fulfill({ contentType:"text/javascript", body:"" }));
    const page = await context.newPage();
    await page.goto(base, { waitUntil:"commit" });
    await page.locator(".lesson-shell").waitFor({ state:"attached" });
    const failures = [];
    const sourceImages = new Set();
    for (let offset = 0; offset < renderSamples.length; offset += 100) {
      const results = await page.evaluate(async samples => {
        const { renderMarkdownDocument, renderLessonInline } = await import("/src/markdown/renderer.js");
        const host = document.implementation.createHTMLDocument("").createElement("div");
        const problems = [];
        const images = new Set();
        for (const sample of samples) for (const [field, source, inline] of sample.fields) {
          if (!source) continue;
          if (typeof source !== "string") {
            problems.push({ id:sample.id, field, issues:["non-string authored field"] });
            continue;
          }
          if (field === "body") {
            host.innerHTML = renderLessonInline(source.split("\n")[0], { locale:sample.locale });
            if (/^(?:#{1,6}\s|>\s|[-*+]\s)/.test(host.textContent.trim())) problems.push({ id:sample.id, field:"heading", issues:["literal Markdown block prefix in flashcard heading"] });
          }
          host.innerHTML = inline ? renderLessonInline(source, { locale:sample.locale }) : renderMarkdownDocument(source, { locale:sample.locale });
          const expectedTables = source.match(/^\|(?:\s*:?-+:?\s*\|)+\s*$/gm)?.length || 0;
          const expectedUnderlines = source.match(/<u>/g)?.length || 0;
          const issues = [];
          if (/\[object (?:Object|Array)\]/.test(host.textContent)) issues.push("coerced object placeholder instead of source content");
          if (host.querySelector(".lesson-math-error")) issues.push("invalid formula");
          if (host.querySelectorAll("table").length < expectedTables) issues.push("lost table");
          if (host.querySelectorAll("u").length < expectedUnderlines) issues.push("lost source underline");
          if ([...host.querySelectorAll("p")].some(node => /^\|(?:[^\n|]*\|){2,}\s*$/m.test(node.textContent))) issues.push("leaked table syntax");
          if (!host.textContent.trim() && !host.querySelector("img,math")) issues.push("empty rendered field");
          host.querySelectorAll("img").forEach(image => images.add(image.getAttribute("src")));
          if (issues.length) problems.push({ id:sample.id, field, issues });
        }
        return { problems, images:[...images] };
      }, renderSamples.slice(offset, offset + 100));
      failures.push(...results.problems);
      results.images.forEach(image => sourceImages.add(image));
    }
    assert.equal(failures.length, 0, `Adabi render failures: ${JSON.stringify(failures.slice(0, 15))}`);
    const images = [...sourceImages];
    const failedImages = [];
    for (let offset = 0; offset < images.length; offset += 8) {
      failedImages.push(...await page.evaluate(async sources => (await Promise.all(sources.map(async source => {
        const image = new Image();
        image.src = source;
        try { await image.decode(); return image.naturalWidth > 0 ? null : source; }
        catch { return source; }
      }))).filter(Boolean), images.slice(offset, offset + 8)));
    }
    assert.deepEqual(failedImages, [], "every referenced Adabi source crop must decode in the browser");
    assert.ok(images.length >= 62);
    console.log(`Rendered all ${renderSamples.length} Adabi question fronts, choices, answers and explanations; formulas, source underlines and tables passed.`);
    console.log(`Decoded all ${images.length} referenced Adabi source images.`);
  } finally { await context.close(); }
}

try {
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  // A focused retry can reuse the separately completed full render/image audit.
  if (process.env.ADABI_UI_ONLY !== "1") await auditRenderedCorpus(browser);
  const widths = process.env.ADABI_VIEWPORT ? [Number(process.env.ADABI_VIEWPORT)] : [1440, 390];
  assert.ok(widths.every(width => [1440, 390].includes(width)));
  for (const width of widths) {
    const context = await browser.newContext({ viewport:{ width, height:900 }, reducedMotion:"reduce",
      extraHTTPHeaders:{ "Accept-Encoding":"identity" } });
    let page;
    const errors = [];
    const warnings = [];
    const pendingRequests = new Map();
    const recentRequests = [];
    const httpFailures = new Set();
    const pdfRequests = new Set();
    try {
      await context.route(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\//, route => route.abort());
      const { account } = await app.accountStore.createAccount({ username:`adabi-browser-${width}`,
        phone:width === 390 ? "0598000071" : "0598000072", password:"Student123", curriculum:"gaza", path:"literary" });
      const db = new DatabaseSync(databasePath);
      db.prepare("UPDATE accounts SET account_type='subscribed' WHERE id=?").run(Number(account.id));
      db.close();
      const session = app.accountStore.createSession(account.id);
      await context.addCookies([{ name:"tawjihi_session", value:session.token, url:base,
        httpOnly:true, sameSite:"Strict", expires:Date.now() / 1000 + 3600 }]);
      assert.equal((await context.request.get(`${base}/api/app-state`)).status(), 200, "disposable backend is ready before browser startup");
      page = await context.newPage();
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => { if (["warning", "error"].includes(message.type())) warnings.push(message.text()); });
      page.on("request", request => {
        pendingRequests.set(request, { url:request.url(), method:request.method(), started:Date.now() });
        const target = new URL(request.url());
        if (target.origin === new URL(base).origin && /\.pdf$/i.test(target.pathname)) pdfRequests.add(request.url());
      });
      page.on("response", response => {
        const pending = pendingRequests.get(response.request());
        if (pending) pending.status = response.status();
        if (response.status() >= 400) httpFailures.add(`${response.status()} ${response.url()}`);
      });
      const finishRequest = request => {
        const pending = pendingRequests.get(request);
        if (!pending) return;
        if (/\/api\/|main\.js|bootstrap\.js|manifest\.json|release\.json/.test(pending.url) || request.failure()) {
          recentRequests.push({ ...pending, durationMs:Date.now() - pending.started,
            ...(request.failure() ? { failure:request.failure().errorText } : {}) });
          if (recentRequests.length > 40) recentRequests.shift();
        }
        pendingRequests.delete(request);
      };
      page.on("requestfinished", finishRequest);
      page.on("requestfailed", finishRequest);
      const capture = async name => {
        if (!process.env.BROWSER_SCREENSHOT_DIR) return;
        await mkdir(process.env.BROWSER_SCREENSHOT_DIR, { recursive:true });
        await page.screenshot({ path:path.join(process.env.BROWSER_SCREENSHOT_DIR, `adabi-${width}-${name}.png`) });
      };
      const getSaved = () => app.accountStore.students.get(account.id);
      const getResources = () => app.accountStore.progress.readResources(account.id);
      const progressResponse = (type, completedStepId = null) => page.waitForResponse(response => {
        if (!response.url().endsWith("/api/progress") || response.request().method() !== "POST") return false;
        const payload = response.request().postDataJSON();
        return payload?.type === type && (!completedStepId || payload.completedStepIds?.includes(completedStepId));
      });
      const answerResponse = () => progressResponse("answer");
      const waitSolved = async count => {
        await assert.doesNotReject(async () => {
          for (let attempt = 0; attempt < 100; attempt++) {
            if (getSaved().questionsSolved === count) return;
            await page.waitForTimeout(50);
          }
          assert.equal(getSaved().questionsSolved, count, "answer must be confirmed by the disposable HTTP backend");
        });
      };

      await page.goto(`${base}/?page=learn`, { waitUntil:"commit" });
      await page.locator('.subject-map[data-path="literary"] .subject-card').first().waitFor();
      await page.locator('#app-splash').waitFor({ state:"detached" });
      assert.equal(await page.locator('.subject-map .subject-card[data-subject^="adabi-"]').count(), 9);
      assert.equal(await page.locator('.subject-map .subject-card:not([data-subject^="adabi-"])').count(), 0);
      for (const course of routes) {
        const text = await page.locator(`.subject-card[data-subject="${course.subjectId}"] [data-subject-count]`).innerText();
        assert.equal(Number(text.split("/").at(-1).trim()), course.total, `${course.subjectId}: visible question count`);
      }
      for (const course of routes) {
        await page.goto(`${base}/?subject=${course.subjectId}`, { waitUntil:"commit" });
        await page.locator("[data-roadmap-lesson]:visible").first().waitFor();
        await openQuestion(page, course.mcq);
        assert.equal(await page.locator("[data-ui-lab-answer]").count(), course.mcq.step.content.answers.length);
        for (const label of await page.locator("[data-ui-lab-answer] > b").allTextContents())
          assert.doesNotMatch(label.trim(), /^(?:[أاابجدa-dA-D])[.)]\s/u, "source option letters appear only in the native choice marker");
        const english = course.subjectId === "adabi-english";
        assert.equal(await page.locator(".level-layout-preview").getAttribute("lang"), english ? "en" : "ar");
        assert.equal(await page.locator(".level-layout-preview").getAttribute("dir"), english ? "ltr" : "rtl");
        await layout(page, `${width}px ${course.subjectId}`);
        await capture(course.subjectId);
        await explanation(page, course.mcq);
      }

      // Real subject answers must retain separate rows inside a stable card.
      for (const course of routes) {
        const sample = course.multilineAnswer || course.flashcard;
        await openQuestion(page, sample);
        await page.evaluate(async () => {
          await document.fonts.ready;
          await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        });
        const card = page.locator("[data-exam-card]");
        const before = await card.boundingBox();
        await page.locator("[data-exam-front] .lesson-flashcard-scroll").press("Enter");
        await page.waitForFunction(() => document.querySelector("[data-exam-front]")?.hidden);
        const after = await card.boundingBox();
        assert.ok(Math.abs(before.height - after.height) <= 1 && Math.abs(before.y - after.y) <= 1,
          `${width}px ${course.subjectId}: flipping keeps the answer card in place: ${JSON.stringify({before,after})}`);
        if (course.multilineAnswer) {
          const rows = await page.locator("[data-exam-final-answer]").evaluate(answer =>
            [...answer.querySelectorAll("ul,ol")].map(list => [...list.children].filter(item => item.tagName === "LI")
              .map(item => item.getBoundingClientRect().top)));
          assert.ok(rows.some(list => list.length >= 2), `${sample.step.id}: explicit subanswers render as list rows`);
          assert.ok(rows.every(list => list.every((top,index) => index === 0 || top > list[index - 1])),
            `${sample.step.id}: consecutive subanswers occupy separate lines`);
        }
        await layout(page, `${width}px ${course.subjectId} formatted answer`);
        await capture(`${course.subjectId}-answer-rows`);
      }
      const calculation = routes.find(course => course.subjectId === "adabi-mathematics").workedCalculation;
      assert.ok(calculation, "Adabi math includes separately boxed worked steps");
      await openQuestion(page, calculation);
      await page.locator("[data-question-explain]").click();
      const worked = page.locator('.question-explanation-dialog [data-explanation-body][aria-busy="false"]');
      await worked.waitFor();
      assert.ok(await worked.locator(".lesson-math-sample").count() >= 2, "worked steps use the shared formula boxes");
      assert.equal(await worked.locator(".lesson-math-error").count(), 0);
      assert.equal(await worked.evaluate(node => node.scrollWidth > node.clientWidth + 1), false,
        `${width}px: worked formulas scroll inside their boxes`);
      await capture("math-worked-boxes");
      await page.keyboard.press("Escape");
      await worked.waitFor({ state:"detached" });

      const english = routes.find(course => course.subjectId === "adabi-english");
      assert.equal(english.contextRepairs.length, 2);
      for (const sample of english.contextRepairs) {
        await openQuestion(page, sample);
        const front = page.locator(sample.step.type === "mcq" ? ".ui-lab-mcq" : "[data-exam-front]");
        const text = await front.innerText();
        assert.ok(text.length > 1500, `${sample.step.id}: restored complete reading context`);
        assert.doesNotMatch(text, /\[object (?:Object|Array)\]/);
        const source = sample.step.type === "mcq" ? `${sample.step.content.prompt}\n${sample.step.content.example}` : sample.step.content.body;
        assert.equal(await front.locator("u").count(), (source.match(/<u>/g) || []).length);
        if (sample.step.id === "en-t-p035-q15") {
          const figure = front.locator('img[src^="assets/lessons/adabi/"]').first();
          await figure.evaluate(image => image.decode());
          assert.ok(await figure.evaluate(image => image.naturalWidth > 0));
        }
        await layout(page, `${width}px ${sample.step.id} reading context`);
        await capture(sample.step.id);
      }
      assert.equal(english.pairedBlanks.length, 2);
      for (const sample of english.pairedBlanks) {
        if (sample.step.id.endsWith("-blank-2")) {
          assert.match(sample.step.content.correctFeedback, /am enjoying/);
          assert.doesNotMatch(sample.step.content.correctFeedback, /don['’]t enjoy/);
        } else {
          assert.match(sample.step.content.correctFeedback, /don['’]t enjoy/);
          assert.doesNotMatch(sample.step.content.correctFeedback, /am enjoying/);
        }
        await openQuestion(page, sample);
        await explanation(page, sample);
      }

      const mcq = routes.find(course => course.subjectId === "adabi-history").mcq;
      // A question deep link is a single-question review that returns to the map.
      // Start the normal part to verify Continue and its saved resume position.
      const studyUrl = new URL(questionUrl(mcq));
      studyUrl.searchParams.delete("question");
      await page.goto(studyUrl.href, { waitUntil:"commit" });
      await ready(page);
      assert.equal(await activeId(page), mcq.step.id);
      const initialGems = getResources().gems;
      await page.locator('[data-ui-lab-answer][data-correct="true"]').click();
      const firstSaved = answerResponse();
      await page.locator("[data-ui-lab-check]").click();
      await page.locator(".level-feedback.is-correct").waitFor();
      assert.equal((await firstSaved).status(), 200);
      await waitSolved(1);
      const firstXp = getQuestionXp({ subjectId:mcq.subjectId, stepId:mcq.step.id });
      assert.equal(getSaved().totalXp, firstXp);
      assert.equal(getResources().gems, initialGems + CORRECT_ANSWER_GEM_REWARD);
      await page.locator(".lesson-daily-streak[open] button:not(:disabled)").click();
      await page.locator(".lesson-daily-streak[open]").waitFor({ state:"detached" });
      const continuedSaved = progressResponse("completion", mcq.step.id);
      await page.locator("[data-ui-lab-check]").click();
      assert.equal((await continuedSaved).status(), 200);
      await page.waitForFunction(previous => {
        const step = document.querySelector("[data-live-authored-step]");
        return step && step.dataset.lessonStep !== previous;
      }, mcq.step.id);
      const nextId = await activeId(page);
      await page.reload({ waitUntil:"commit" });
      await ready(page);
      assert.equal(await activeId(page), nextId, "refresh resumes at the current question");
      assert.equal(getSaved().totalXp, firstXp, "refresh preserves confirmed XP");

      await openQuestion(page, mcq);
      await page.locator('[data-ui-lab-answer][data-correct="true"]').click();
      const repeatedSaved = answerResponse();
      await page.locator("[data-ui-lab-check]").click();
      await page.locator(".level-feedback.is-correct").waitFor();
      assert.equal((await repeatedSaved).status(), 200);
      assert.equal(getSaved().questionsSolved, 1, "repeating a solved question remains one solve");
      assert.equal(getSaved().totalXp, firstXp, "repeating a solved question earns no duplicate XP");
      assert.equal(getResources().gems, initialGems + CORRECT_ANSWER_GEM_REWARD, "repeating a solved question earns no duplicate gems");

      const flashcard = routes.find(course => course.subjectId === "adabi-history").flashcard;
      await openQuestion(page, flashcard);
      await flashcardHeading(page, flashcard);
      assert.equal(await page.locator("[data-exam-solution]").getAttribute("aria-hidden"), "true");
      assert.equal(getSaved().questionsSolved, 1, "opening a written question cannot solve it");
      const front = page.locator("[data-exam-front] .lesson-flashcard-scroll");
      await front.focus();
      await front.press("Enter");
      await page.waitForFunction(() => document.querySelector("[data-exam-solution]")?.getAttribute("aria-hidden") === "false");
      await page.waitForFunction(() => !document.querySelector(".lesson-flashcard-rotor")?.classList.contains("is-flipping"));
      assert.ok((await page.locator("[data-exam-final-answer]").innerText()).trim());
      await capture("flashcard-answer");
      assert.equal(getSaved().questionsSolved, 1, "revealing the answer cannot claim correctness");
      await explanation(page, flashcard);
      await page.locator('[data-exam-correct="true"]').click();
      const flashcardSaved = answerResponse();
      await page.locator("[data-template-primary]").click();
      assert.equal((await flashcardSaved).status(), 200);
      await waitSolved(2);
      const finalXp = firstXp + getQuestionXp({ subjectId:flashcard.subjectId, stepId:flashcard.step.id });
      assert.equal(getSaved().totalXp, finalXp);
      assert.equal(getResources().gems, initialGems + 2 * CORRECT_ANSWER_GEM_REWARD);

      const reading = routes.find(course => course.subjectId === "adabi-english").readingFlashcard;
      assert.ok(reading, "the English reading bank retains a shared passage");
      await openQuestion(page, reading);
      await flashcardHeading(page, reading);
      assert.ok(await page.locator("[data-exam-front] .markdown-rendered h3").count(), "passage heading renders below the question");
      await page.locator("[data-exam-front] .lesson-flashcard-scroll").focus();
      await page.keyboard.press("Space");
      await page.waitForFunction(() => document.querySelector("[data-exam-solution]")?.getAttribute("aria-hidden") === "false");
      await page.waitForFunction(() => !document.querySelector(".lesson-flashcard-rotor")?.classList.contains("is-flipping"));
      assert.equal(await page.locator(".level-layout-preview").getAttribute("lang"), "en");
      assert.equal(getSaved().questionsSolved, 2, "reading-card reveal leaves progress unchanged");
      await capture("english-reading-answer");

      const arabicReading = routes.find(course => course.subjectId === "adabi-arabic-1").flashcard;
      await openQuestion(page, arabicReading);
      await flashcardHeading(page, arabicReading);
      const readingScroll = page.locator("[data-exam-front] .lesson-flashcard-scroll");
      const readingText = await readingScroll.innerText();
      assert.ok(readingText.length > 500, "Arabic reading questions retain their full accessible source passage");
      assert.equal(await readingScroll.locator('img[src^="assets/lessons/adabi/arabic-1/"]').count(), 0,
        "the accessible passage does not depend on a tiny full-page scan");
      assert.ok(await readingScroll.locator(".markdown-rendered").evaluate(node => parseFloat(getComputedStyle(node).fontSize) >= 16),
        "Arabic source passages retain readable native text size");
      const scrollPosition = await readingScroll.evaluate(node => { node.scrollTop = node.scrollHeight; return node.scrollTop; });
      assert.ok(scrollPosition > 0, "long Arabic passages scroll inside the flashcard");
      await readingScroll.focus();
      await page.keyboard.press("Enter");
      await page.waitForFunction(() => document.querySelector("[data-exam-front]")?.hidden);
      await page.locator("[data-exam-solution] .lesson-flashcard-scroll").press("Space");
      await page.waitForFunction(() => document.querySelector("[data-exam-solution]")?.hidden);
      assert.equal(await readingScroll.innerText(), readingText, "keyboard flipping preserves the complete Arabic source text");
      assert.equal(await readingScroll.evaluate(node => node.scrollTop), scrollPosition, "flipping preserves passage scroll position");
      assert.equal(getSaved().questionsSolved, 2, "passage reading and flipping do not claim a solved answer");
      await capture("arabic-reading-text");

      for (const course of routes.filter(course => course.figure)) {
        await openQuestion(page, course.figure);
        const active = page.locator(course.figure.step.type === "mcq" ? ".ui-lab-mcq" : "[data-exam-front]");
        const image = active.locator('img[src^="assets/lessons/adabi/"]').first();
        await image.waitFor();
        await image.evaluate(node => node.decode());
        assert.ok(await image.evaluate(node => node.naturalWidth > 0), `${course.subjectId}: source crop decoded`);
        const zoom = active.locator("[data-summary-scan-zoom]").first();
        if (await zoom.count()) {
          await zoom.focus();
          await zoom.press("Enter");
          const viewer = page.locator(".lesson-question-image-viewer[open]");
          await viewer.waitFor();
          assert.equal(await viewer.locator("img").getAttribute("src"), await image.getAttribute("src"));
          await page.keyboard.press("Escape");
          await viewer.waitFor({ state:"detached" });
        }
        await layout(page, `${width}px ${course.subjectId} source crop`);
        await capture(`${course.subjectId}-figure`);
      }
      await page.goto(`${base}/?page=learn`, { waitUntil:"commit" });
      await page.locator('.subject-map[data-path="literary"] .subject-card').first().waitFor();
      await page.locator('#app-splash').waitFor({ state:"detached" });
      const historyCount = await page.locator('.subject-card[data-subject="adabi-history"] [data-subject-count]').innerText();
      assert.equal(Number(historyCount.split("/")[0].trim()), 2, "home question count reflects saved solves");
      assert.equal(getSaved().totalXp, finalXp);
      assert.deepEqual([...pdfRequests], [], "public Adabi journeys do not request private textbooks");
      assert.deepEqual(errors, [], `${width}px application errors`);
      if (process.env.BROWSER_SCREENSHOT_DIR) {
        await mkdir(process.env.BROWSER_SCREENSHOT_DIR, { recursive:true });
        await page.screenshot({ path:path.join(process.env.BROWSER_SCREENSHOT_DIR, `adabi-${width}.png`) });
      }
      console.log(`${width}px: nine Adabi subjects, counts, deep links, explanations, source crops, MCQ/keyboard flashcard, refresh, XP and gem idempotence passed.`);
    } catch (error) {
      if (page && process.env.BROWSER_SCREENSHOT_DIR) {
        await mkdir(process.env.BROWSER_SCREENSHOT_DIR, { recursive:true });
        await page.screenshot({ path:path.join(process.env.BROWSER_SCREENSHOT_DIR, `adabi-${width}-failure.png`) }).catch(() => {});
        console.error(JSON.stringify({ viewport:width, pageErrors:errors, warnings, httpFailures:[...httpFailures],
          pendingRequests:[...pendingRequests.values()].map(request => ({ ...request, elapsedMs:Date.now() - request.started })),
          recentRequests, url:page.url(),
          visibleState:await page.locator("body").innerText().then(text => text.slice(0, 1600)).catch(() => "Page unavailable") }));
      }
      throw error;
    } finally { await context.close(); }
  }
} finally {
  await browser?.close();
  await app.close();
  await rm(directory, { recursive:true, force:true });
}
