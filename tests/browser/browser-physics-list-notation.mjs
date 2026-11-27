import assert from "node:assert/strict";
import { chromium } from "playwright";
import { createAppServer } from "../../src/server/app-server.mjs";
import { readRuntimeConfig } from "../../src/server/runtime-config.mjs";
import { findChrome } from "./browser-session.mjs";

const root = process.cwd();
const config = readRuntimeConfig({ PORT:"0", LIVE_RELOAD:"0", ACCOUNTS_DATABASE_PATH:":memory:" }, { root });
const app = await createAppServer({ root, config, logger:() => {} });
const base = `http://127.0.0.1:${await app.listen()}/`;
const scenarios = [
  {
    curriculum:"gaza", phone:"0591234533", subject:"physics", lesson:"momentum-impulse", part:"momentum-impulse-practice",
    questions:[
      ["physics-tawjihi-2025-p010-q067", 77, ["1.", "2."]],
      ["physics-tawjihi-2025-p011-q072", 81, ["1.", "2."]],
      ["physics-tawjihi-2025-p011-q073", 82, ["1.", "2."]],
    ],
  },
  {
    curriculum:"full-palestinian", phone:"+962790123463", subject:"outside-gaza-scientific-physics",
    lesson:"unit-1-lesson-2", part:"unit-1-practice-7",
    questions:[["outside-gaza-scientific-physics-book-chapter-p035-q08", null, ["1.", "2."]]],
  },
];

let browser;
try {
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  for (const { curriculum, phone, subject, lesson, part, questions } of scenarios) {
    const context = await browser.newContext({ reducedMotion:"reduce" });
    try {
      const registration = await context.request.post(base + "api/auth/register", {
        data:{ username:`list-notation-${curriculum}`, phone, password:"Notation1234", curriculum, path:"scientific" },
      });
      assert.equal(registration.status(),201,await registration.text());
      const page = await context.newPage();
      for (const width of [1440,390]) {
        await page.setViewportSize({ width, height:900 });
        for (const [question, position, expected] of questions) {
          await page.goto(base + "?" + new URLSearchParams({ subject, lesson, part, question }), { waitUntil:"domcontentloaded" });
          const step = page.locator(`[data-live-authored-step][data-lesson-step="${question}"]`);
          await step.waitFor();
          if (position) assert.equal(await page.locator("[data-question-jump]").nth(position-1).getAttribute("data-question-jump"),question);
          const checkMarkers = async (surface) => {
            const list = surface.locator('ol[data-math-list-markers][role="list"]').first();
            await list.waitFor();
            const markers = list.locator(':scope > li > .lesson-math-list-marker math[dir="ltr"]');
            assert.deepEqual(await markers.allTextContents(),expected,question);
            assert.equal(await list.evaluate(node => getComputedStyle(node).listStyleType),"none");
            assert.ok(await markers.evaluateAll(nodes => nodes.every(marker => {
              const box = marker.getBoundingClientRect();
              return box.width > 0 && box.left >= 0 && box.right <= innerWidth + 1;
            })));
          };
          await checkMarkers(step.locator("[data-exam-front]"));
          await step.locator("[data-exam-front] .lesson-flashcard-scroll").press("Enter");
          await checkMarkers(step.locator("[data-exam-final-answer]"));
          await page.locator("[data-question-explain]:visible").click();
          const recap = page.locator("dialog[open] .question-explanation-recap");
          await checkMarkers(recap);
          assert.equal(await page.locator(".lesson-math-error").count(),0,question);
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth),width);
        }
      }
    } finally {
      await context.close();
    }
  }
  console.log("Physics subpart numbers render as LaTeX on question fronts, answers and explanation recaps at desktop and mobile widths.");
} finally {
  await browser?.close();
  await app.close();
}
