import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { BIOLOGY_LESSONS } from "../../src/data/lessons/biology/biology-course.js";
import { loadSubjectLesson } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { findChrome, getAvailablePort, waitForServer, terminateProcess } from "./browser-session.mjs";

const port = await getAvailablePort();
const base = `http://127.0.0.1:${port}/`;
const output = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/biology-course-check";
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
    const layout = await page.evaluate(() => ({
      viewport:innerWidth, width:document.documentElement.scrollWidth,
      overflow:[...document.querySelectorAll('#lesson-content *')].map(node => ({
        tag:node.tagName, class:node.className, text:node.textContent.slice(0, 100),
        left:node.getBoundingClientRect().left, right:node.getBoundingClientRect().right,
      })).filter(node => node.right > innerWidth + 1 || node.left < -1).slice(0, 8),
    }));
    if (layout.width > layout.viewport + 1) await page.screenshot({ path:`${output}/overflow.png`, fullPage:true });
    assert.ok(layout.width <= layout.viewport + 1, `${page.url()}: ${JSON.stringify(layout)}`);
  };
  const openStep = async (catalog, id) => {
    const part = catalog.parts.find(part => part.questionIds.includes(id));
    const query = new URLSearchParams({ subject:"biology", lesson:catalog.id, part:part.id, question:id });
    await page.goto(`${base}?${query}`);
    await page.locator(`[data-live-authored-step][data-lesson-step="${id}"]`).waitFor();
    await noOverflow();
  };

  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height:900 });
    await page.goto(base + "?page=learn");
    const card = page.locator('.subject-card[data-subject="biology"]');
    await card.waitFor();
    assert.equal((await card.locator('[data-subject-count]').textContent()).trim(), "0 / 1227");
    assert.equal(requests.some(path => BIOLOGY_LESSONS.some(lesson => path.endsWith(`/biology/${lesson.id}.js`))), false);
    await card.click();
    await page.locator('.subject-roadmap[data-subject="biology"]').waitFor();
    assert.equal(await page.locator('.roadmap-unit').count(), 3);
    assert.deepEqual(await page.locator('[data-roadmap-lesson]').evaluateAll(nodes => nodes.map(node => node.dataset.roadmapLesson)), BIOLOGY_LESSONS.map(lesson => lesson.id));
    assert.deepEqual(await page.locator('.roadmap-question-ring').evaluateAll(nodes => nodes.map(node => Number(node.getAttribute('aria-valuemax')))), BIOLOGY_LESSONS.map(lesson => lesson.questionCount));
    await noOverflow();
    await page.screenshot({ path:`${output}/roadmap-${width}.png`, fullPage:true });
  }

  const allImages = new Set();
  const parsedLessons = [];
  for (const catalog of BIOLOGY_LESSONS) {
    const lesson = await loadSubjectLesson("biology", catalog.id);
    const parsed = parseLessonMarkdown(lesson.authoringSource).steps;
    parsedLessons.push({ catalog, parsed });
    for (const match of lesson.authoringSource.matchAll(/!\[[^\]]*\]\((assets\/[^)]+)\)/g)) allImages.add(match[1]);
  }
  const images = await page.evaluate(async paths => Promise.all(paths.map(async path => {
    const image = new Image();
    image.src = path;
    await image.decode();
    return image.naturalWidth > 0 && image.naturalHeight > 0;
  })), [...allImages]);
  assert.equal(images.length, 100);
  assert.ok(images.every(Boolean));

  await page.setViewportSize({ width:1440, height:900 });
  for (const { catalog, parsed } of parsedLessons) {
    await openStep(catalog, parsed[0].id);
    assert.ok(await page.locator('[data-ui-lab-answer], [data-exam-card]').count() > 0, catalog.id);
  }

  const energy = parsedLessons[0];
  const mcq = energy.parsed.find(step => step.type === "mcq" && step.content.example?.includes("!["));
  const skeleton = parsedLessons.find(item => item.catalog.id === "skeletal-system");
  const flashcard = skeleton.parsed.find(step => step.type === "exam-question" && step.content.body.includes("!["));
  assert.ok(mcq && flashcard);
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height:900 });
    await openStep(energy.catalog, mcq.id);
    await page.locator('[data-ui-lab-answer][data-correct="true"]').click();
    await page.locator('[data-template-primary]').click();
    await page.screenshot({ path:`${output}/mcq-${width}.png`, fullPage:true });
    await openStep(skeleton.catalog, flashcard.id);
    await page.locator('[data-exam-front] img').waitFor();
    await page.screenshot({ path:`${output}/flashcard-front-${width}.png`, fullPage:true });
    const zoom = page.locator('[data-exam-front] [data-summary-scan-zoom]').first();
    await zoom.click();
    assert.equal(await zoom.getAttribute('aria-expanded'), "true");
    await noOverflow();
    await page.keyboard.press('Escape');
    await page.waitForFunction(() => !document.querySelector('.lesson-question-image-viewer[open]'));
    await page.waitForFunction(() => document.querySelector('[data-exam-front] [data-summary-scan-zoom]')?.getAttribute('aria-expanded') === 'false');
    assert.equal(await zoom.getAttribute('aria-expanded'), "false");
    const front = page.locator('[data-exam-front] .lesson-flashcard-scroll');
    await front.focus();
    await front.press('Enter');
    await page.locator('[data-exam-solution]').waitFor({ state:"visible" });
    assert.equal(await page.locator('[data-template-primary]').isDisabled(), false);
    await noOverflow();
    await page.screenshot({ path:`${output}/flashcard-${width}.png`, fullPage:true });
  }
  assert.deepEqual(errors, []);
  console.log("Biology browser check passed: 3 units, 9 chapters, 1227 questions, 100 original crops; desktop/mobile MCQ, flashcard and zoom flows.");
} finally {
  await browser?.close();
  await terminateProcess(server);
}
