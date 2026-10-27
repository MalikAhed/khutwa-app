import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { CHEMISTRY_LESSONS } from "../../src/data/lessons/chemistry/chemistry-course.js";
import { findChrome, getAvailablePort, waitForServer, terminateProcess } from "./browser-session.mjs";

const port = await getAvailablePort();
const base = `http://127.0.0.1:${port}/`;
const output = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/chemistry-course-check";
const formulas = [];
for (const lesson of CHEMISTRY_LESSONS) {
  const { source } = await import(`../../src/data/lessons/chemistry/${lesson.id}.js`);
  for (const match of source.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$/g)) {
    formulas.push({ lesson:lesson.id, formula:match[1] ?? match[2] ?? match[3], display:match[1] === undefined });
  }
}
await mkdir(output, { recursive:true });
const server = spawn(process.execPath, ["dev-server.mjs"], { env:{ ...process.env, PORT:String(port), LIVE_RELOAD:"0", ACCOUNTS_DATABASE_PATH:":memory:" }, stdio:"ignore" });
let browser;
try {
  await waitForServer(port);
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  const page = await browser.newPage({ viewport:{ width:1440, height:900 }, reducedMotion:"reduce" });
  const errors = [];
  const requests = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("response", response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  page.on("request", request => requests.push(new URL(request.url()).pathname));
  const noOverflow = async () => {
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const layout = await page.evaluate(() => ({ viewport:innerWidth, width:document.documentElement.scrollWidth }));
    assert.ok(layout.width <= layout.viewport + 1, `${page.url()}: ${JSON.stringify(layout)}`);
    assert.equal(await page.locator(".lesson-math-error").count(), 0, page.url());
  };
  const openStep = async (lesson, question) => {
    const query = new URLSearchParams({ subject:"chemistry", lesson, part:`${lesson}-practice`, question });
    await page.goto(`${base}?${query}`);
    await page.locator(`[data-live-authored-step][data-lesson-step="${question}"]`).waitFor();
    await noOverflow();
  };

  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height:900 });
    await page.goto(base + "?page=learn");
    const card = page.locator('.subject-card[data-subject="chemistry"]');
    await card.waitFor();
    assert.equal((await card.locator('[data-subject-count]').textContent()).trim(), "0 / 912");
    assert.equal(requests.some(path => CHEMISTRY_LESSONS.some(lesson => path.endsWith(`/chemistry/${lesson.id}.js`))), false);
    await card.click();
    await page.locator('.subject-roadmap[data-subject="chemistry"]').waitFor();
    assert.equal(await page.locator('.roadmap-unit').count(), 3);
    assert.deepEqual(await page.locator('[data-roadmap-lesson]').evaluateAll(nodes => nodes.map(node => node.dataset.roadmapLesson)), CHEMISTRY_LESSONS.map(lesson => lesson.id));
    assert.deepEqual(await page.locator('.roadmap-question-ring').evaluateAll(nodes => nodes.map(node => Number(node.getAttribute('aria-valuemax')))), CHEMISTRY_LESSONS.map(lesson => lesson.questionCount));
    await noOverflow();
    await page.screenshot({ path:`${output}/roadmap-${width}.png`, fullPage:true });
  }

  const imagePaths = await page.evaluate(async () => {
    const manifest = await (await fetch("assets/lessons/chemistry/source-crops/sources.json")).json();
    return Promise.all(manifest.crops.map(async ({ file }) => {
      const image = new Image();
      image.src = file;
      await image.decode();
      return image.naturalWidth > 0 && image.naturalHeight > 0;
    }));
  });
  assert.equal(imagePaths.length, 76);
  assert.ok(imagePaths.every(Boolean));
  const invalidFormulas = await page.evaluate(async formulas => {
    const { renderLatex } = await import("/src/markdown/math.js");
    return formulas.filter(({ formula, display }) => renderLatex(formula, { display }).includes("lesson-math-error"));
  }, formulas);
  assert.deepEqual(invalidFormulas, []);
  for (const lesson of CHEMISTRY_LESSONS) {
    await openStep(lesson.id, lesson.questionIds[0]);
    assert.ok(await page.locator('[data-ui-lab-answer], [data-exam-card]').count() > 0, lesson.id);
  }

  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height:900 });
    await openStep("u01-l02-electron-configuration", "chemistry-oj-p027-q03");
    assert.equal(await page.locator('[data-ui-lab-answer] img').count(), 4);
    await page.locator('[data-ui-lab-answer][data-correct="true"]').click();
    await page.locator('[data-template-primary]').click();
    await noOverflow();
    await page.screenshot({ path:`${output}/mcq-${width}.png`, fullPage:true });
    await openStep("u01-l02-electron-configuration", "chemistry-gaza-p015-q08-b");
    await page.locator('[data-exam-front] math').first().waitFor();
    await page.screenshot({ path:`${output}/flashcard-front-${width}.png`, fullPage:true });
    const front = page.locator('[data-exam-front] .lesson-flashcard-scroll');
    await front.focus();
    await front.press("Enter");
    await page.locator('[data-exam-solution]').waitFor({ state:"visible" });
    assert.equal(await page.locator('[data-exam-solution] img').count(), 4);
    assert.equal(await page.locator('[data-template-primary]').isDisabled(), false);
    await noOverflow();
    await page.screenshot({ path:`${output}/flashcard-${width}.png`, fullPage:true });
    await openStep("u01-l01-quantum-model", "chemistry-oj-p041-q01-a3");
    const formulaCard = page.locator('[data-exam-front] .lesson-flashcard-scroll');
    await formulaCard.focus();
    await formulaCard.press("Enter");
    await page.locator('[data-exam-solution]').waitFor({ state:"visible" });
    assert.ok((await page.locator('[data-exam-solution] mtext').allTextContents()).some(text => text.includes("فوتون")));
    await noOverflow();
    await page.screenshot({ path:`${output}/arabic-formula-${width}.png`, fullPage:true });
    await openStep("u01-l01-quantum-model", "chemistry-oj-p042-q13-a4");
    const orbitalCard = page.locator('[data-exam-front] .lesson-flashcard-scroll');
    await orbitalCard.focus();
    await orbitalCard.press("Enter");
    await page.locator('[data-exam-solution]').waitFor({ state:"visible" });
    const boxes = page.locator('[data-exam-solution] .lesson-math-box');
    assert.equal(await boxes.count(), 5);
    assert.ok(await boxes.evaluateAll(nodes => nodes.every(node => node.getBoundingClientRect().width > 0 && parseFloat(getComputedStyle(node).borderTopWidth) > 0)));
    await noOverflow();
    await page.screenshot({ path:`${output}/orbital-boxes-${width}.png`, fullPage:true });
  }
  assert.deepEqual(errors, []);
  console.log("Chemistry browser check passed: 3 units, 21 lessons, 912 questions, 76 original crops; desktop/mobile MCQ and flashcard flows.");
} finally {
  await browser?.close();
  await terminateProcess(server);
}
