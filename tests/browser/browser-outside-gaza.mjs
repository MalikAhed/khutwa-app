import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { chromium } from "playwright";
import { createAppServer } from "../../src/server/app-server.mjs";
import { readRuntimeConfig } from "../../src/server/runtime-config.mjs";
import { getSubjectRoadmap } from "../../src/data/subject-roadmaps.js";
import { loadSubjectLesson } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { findChrome } from "./browser-session.mjs";

const directory = await mkdtemp(path.join(tmpdir(), "khutwa-outside-gaza-"));
const root = process.cwd();
const app = await createAppServer({ root, logger:() => {}, config:readRuntimeConfig({
  PORT:"0", LIVE_RELOAD:"0", LEARN_BACKEND:"local", ACCOUNTS_DATABASE_PATH:path.join(directory, "accounts.sqlite"),
}, { root }) });
const base = `http://127.0.0.1:${await app.listen()}`;
let browser;

try {
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  for (const [width, track, subject, count, phone] of [
    [1440, "scientific", "physics", 9, "+962790123456"],
    [390, "literary", "geography", 10, "0598000071"],
  ]) {
    const context = await browser.newContext({ viewport:{ width, height:900 }, reducedMotion:"reduce" });
    try {
      const page = await context.newPage();
      page.setDefaultTimeout(20000);
      const errors = [];
      page.on("pageerror", error => errors.push(error.message));
      const next = () => page.locator("[data-step-next]:visible").click();
      await page.goto(`${base}/?flow=register`);
      await page.locator("#app-splash").waitFor({ state:"detached" });
      await next();
      await page.locator('[name="username"]').fill(`bank-test-${track}`);
      await next();
      await page.locator('label:has([name="curriculum"][value="full-palestinian"])').click();
      await next();
      await page.locator(`label:has([name="path"][value="${track}"])`).click();
      await next();
      await page.locator('[name="phone"]').fill(phone);
      await next();
      await page.locator('[name="password"]').fill("Student123");
      const registration = page.waitForResponse(response => response.url().endsWith("/api/auth/register") && response.request().method() === "POST");
      await page.locator('[data-register-form] [type="submit"]:visible').click();
      const registered = await registration;
      assert.equal(registered.status(), 201, await registered.text());

      await page.goto(`${base}/?page=learn`);
      const map = page.locator(`.subject-map[data-curriculum="full-palestinian"][data-path="${track}"]`);
      await map.waitFor();
      await page.locator("#app-splash").waitFor({ state:"detached" });
      assert.equal(await map.locator(`[data-subject^="outside-gaza-${track}-"]`).count(), count);
      assert.equal(await map.locator(".subject-card").count(), count);
      const subjectId = `outside-gaza-${track}-${subject}`;
      await map.locator(`[data-subject="${subjectId}"]`).click();
      await page.locator("[data-roadmap-part]").first().click();
      await page.locator("[data-bubble-start]").click();
      await page.locator("[data-question-slider]").waitFor();
      const roadmap = getSubjectRoadmap(subjectId);
      assert.equal(roadmap.units.length, subject === "physics" ? 4 : 5);
      const lesson = roadmap.units[0].lessons[track === "scientific" ? 0 : 1];
      const native = await loadSubjectLesson(subjectId, lesson.id);
      const { steps } = parseLessonMarkdown(native.authoringSource);
      const step = steps.find(step => track === "scientific" ? step.type === "mcq" : step.type === "exam-question");
      assert.ok(step);
      const route = new URLSearchParams({ subject:subjectId, lesson:lesson.id, part:"practice", question:step.id });
      await page.goto(`${base}/?${route}`);
      await page.locator(`[data-live-authored-step][data-lesson-step="${step.id}"]`).waitFor();

      await page.locator("[data-question-explain]").click();
      const body = page.locator('.question-explanation-dialog[open] [data-explanation-body][aria-busy="false"]');
      assert.ok((await body.innerText()).trim());
      assert.equal(await body.locator(".lesson-math-error").count(), 0);
      await page.keyboard.press("Escape");
      await page.locator(".question-explanation-dialog").waitFor({ state:"detached" });

      if (step.type === "exam-question") {
        await page.locator("[data-exam-front] .lesson-flashcard-scroll").press("Enter");
        assert.ok((await page.locator("[data-exam-final-answer]").innerText()).trim());
      } else await page.locator('[data-ui-lab-answer][data-correct="true"]').click();
      const saved = page.waitForResponse(response => response.url().endsWith("/api/progress") && response.request().method() === "POST"
        && response.request().postDataJSON()?.type === "answer");
      if (step.type === "exam-question") {
        await page.locator('[data-exam-correct="true"]').click();
        await page.locator("[data-template-primary]").click();
      } else await page.locator("[data-ui-lab-check]").click();
      assert.equal((await saved).status(), 200);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
      assert.deepEqual(errors, []);
      console.log(`${track} ${width}px browser: registration, question catalog, roadmap, ${step.type}, explanation and saved answer passed.`);
    } finally {
      await context.close();
    }
  }
} finally {
  await browser?.close();
  await app.close();
  await rm(directory, { recursive:true, force:true });
}
