import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { ENGLISH_LESSONS } from "../../src/data/lessons/english/english-course.js";
import { loadSubjectLesson } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { findChrome, getAvailablePort, waitForServer, terminateProcess } from "./browser-session.mjs";

const port = await getAvailablePort();
const base = `http://127.0.0.1:${port}/`;
const output = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/english-course-check";
await mkdir(output, { recursive:true });
const server = spawn(process.execPath, ["dev-server.mjs"], { env:{ ...process.env, PORT:String(port), LIVE_RELOAD:"0", ACCOUNTS_DATABASE_PATH:":memory:" }, stdio:"ignore" });
let browser;
try {
  await waitForServer(port);
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  const page = await browser.newPage({ viewport:{ width:1440, height:900 }, reducedMotion:"reduce" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("response", response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  const noOverflow = async () => assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true, page.url());
  const openQuestion = async (catalog, id) => {
    const part = catalog.parts.find(part => part.questionIds.includes(id));
    await page.goto(base + "?" + new URLSearchParams({ subject:"english", lesson:catalog.id, part:part.id, question:id }));
    const host = page.locator(`[data-live-authored-step][data-lesson-step="${id}"]`);
    await host.waitFor();
    await page.locator("#app-splash").waitFor({ state:"detached" });
    assert.equal(await host.getAttribute("dir"), "ltr");
    assert.equal(await host.getAttribute("lang"), "en");
    await noOverflow();
  };
  const reading = ENGLISH_LESSONS.find(lesson => lesson.id === "english-u01-reading");
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height:900 });
    await page.goto(base + "?page=learn");
    const card = page.locator('.subject-card[data-subject="english"]');
    await card.waitFor();
    assert.equal(await card.isEnabled(), true);
    assert.equal((await card.locator("[data-subject-count]").textContent()).trim(), "0 / 1229");
    await card.click();
    await page.locator('.subject-roadmap[data-subject="english"]').waitFor();
    assert.equal(await page.locator(".roadmap-unit").count(), 9);
    assert.deepEqual(await page.locator("[data-roadmap-lesson]").evaluateAll(nodes => nodes.map(node => node.dataset.roadmapLesson)), ENGLISH_LESSONS.map(lesson => lesson.id));
    await noOverflow();
    await page.screenshot({ path:`${output}/roadmap-${width}.png`, fullPage:true });

    await openQuestion(reading, "eng-2023-p007-qtext1-3-1");
    assert.match(await page.locator(".lesson-question-example").textContent(), /Hi everyone[\s\S]*Mahmoud/);
    await page.screenshot({ path:`${output}/mcq-${width}.png`, fullPage:true });
    await page.locator('[data-ui-lab-answer][data-correct="true"]').click();
    await page.locator("[data-template-primary]").click();
    await page.locator("[data-template-primary]").filter({ hasText:"CONTINUE" }).waitFor();
    await noOverflow();

    await openQuestion(reading, "eng-2023-p007-qtext1-2-1");
    assert.match(await page.locator("[data-exam-front]").textContent(), /Hi everyone[\s\S]*Where is Mahmoud now/);
    assert.equal(await page.locator("[data-exam-solution]").isVisible(), false);
    await page.screenshot({ path:`${output}/flashcard-front-${width}.png`, fullPage:true });
    const front = page.locator("[data-exam-front] .lesson-flashcard-scroll");
    await front.focus();
    await front.press("Enter");
    await page.locator("[data-exam-solution]").waitFor({ state:"visible" });
    assert.match(await page.locator("[data-exam-solution]").textContent(), /Mahmoud is in an English-speaking country/);
    await page.locator("[data-template-primary]").click();
    assert.equal(await page.locator("[data-exam-choice-error]").isVisible(), true);
    await page.locator("[data-exam-correct=true]").click();
    assert.equal(await page.locator("[data-template-primary]").isEnabled(), true);
    await noOverflow();
    await page.screenshot({ path:`${output}/flashcard-answer-${width}.png`, fullPage:true });
  }
  await page.setViewportSize({ width:1440, height:900 });
  for (const catalog of ENGLISH_LESSONS) {
    await openQuestion(catalog, catalog.parts[0].startStepId);
    assert.ok(await page.locator("[data-ui-lab-answer], [data-exam-card]").count() > 0, catalog.id);
  }
  const stories = ENGLISH_LESSONS.find(lesson => lesson.id === "english-u03-reading");
  await openQuestion(stories, "eng-2023-p033-qr1-a-1");
  const source = await loadSubjectLesson("english", stories.id);
  const content = parseLessonMarkdown(source.authoringSource).steps[0].content.body;
  for (const word of ["bananas", "Jan", "complete stranger"]) assert.ok(content.includes(word));
  assert.deepEqual(errors, []);
  console.log("English browser check passed: unlocked subject; 9 original units, 22 lessons, 1229 questions; complete reading passages; English LTR MCQ and flashcard interactions on desktop/mobile.");
} finally {
  await browser?.close();
  await terminateProcess(server);
}
