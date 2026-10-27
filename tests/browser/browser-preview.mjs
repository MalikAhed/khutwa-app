import assert from "node:assert/strict";
import { getSubjectRoadmap } from "../../src/data/subject-roadmaps.js";
import { getIctPartQuestions } from "../../src/data/lessons/ict/exam-lessons.js";

const lessonActionLimit = getSubjectRoadmap("ict").units.flatMap(unit=>unit.lessons)
  .find(lesson=>lesson.id === "database-management").parts
  .reduce((count, part)=>count + getIctPartQuestions(part.id).length, 0) * 3 + 10;
import { access } from "node:fs/promises";
import path from "node:path";
import { previewDirectory } from "../../scripts/package-app.mjs";
import { startPreviewServer } from "../../scripts/preview-server.mjs";
import { withBrowserPage } from "./browser-page.mjs";

for (const forbidden of ["src/server", "data", "scripts", "tests", "node_modules/typescript", "node_modules/playwright", "node_modules/axe-core"]) {
  await assert.rejects(access(path.join(previewDirectory, forbidden)), `Artifact must exclude ${forbidden}`);
}
const server = await startPreviewServer();
try {
  await withBrowserPage(async ({ base, send, evaluate, waitFor, onEvent }) => {
    await send("Emulation.setEmulatedMedia", { features:[{ name:"prefers-reduced-motion", value:"reduce" }] });
    const failures = [];
    onEvent(({ method, params }) => {
      if (method === "Network.requestWillBeSent" && new URL(params.request.url).pathname.includes("/api/")) failures.push("Unexpected API request: " + params.request.url);
      if (method === "Network.responseReceived" && params.response.url.startsWith(base) && params.response.status >= 400) failures.push(`${params.response.status}: ${params.response.url}`);
      if (method === "Runtime.exceptionThrown") failures.push(params.exceptionDetails.exception?.description || params.exceptionDetails.text);
    });
    const navigate = async (route) => {
      const previous = await evaluate("performance.timeOrigin");
      await send("Page.navigate", { url:base + route });
      await waitFor(`performance.timeOrigin !== ${previous} && document.querySelector('.visitor-shell, .course-units, .current-system')`);
    };
    await navigate("");
    await waitFor("document.querySelector('.visitor-landing') && !document.querySelector('.media-pending')");
    assert.equal(await evaluate("document.querySelector('meta[name=learn-account-mode]').content"), "fixture");
    await evaluate("document.querySelector('[data-flow=register]').click()");
    await waitFor("document.querySelector('[data-register-form]') && !document.querySelector('.media-pending')");
    assert.equal(await evaluate("Boolean(document.querySelector('[data-guest-start]'))"), false);
    await navigate("?subject=ict&lesson=database-management&part=access-basics");
    await waitFor("document.querySelector('.visitor-landing')");
    assert.equal(await evaluate("Boolean(document.querySelector('[data-live-authored-step]'))"), false);
    await navigate("?flow=sign-in");
    await waitFor("document.querySelector('[data-sign-in-form]') && !document.querySelector('.media-pending')");
    await evaluate("document.querySelector('[name=identifier]').value='subscribed';document.querySelector('[name=password]').value='Learn123';document.querySelector('[data-sign-in-form]').requestSubmit()");
    await waitFor("document.querySelector('[data-learner-dashboard]') && !document.body.classList.contains('product-flow-active') && document.querySelector('.learner-dashboard-root[aria-busy=false]')");
    await evaluate("document.querySelector('[data-subject=ict]').click()");
    await waitFor("document.querySelector('[data-roadmap-part]')");
    const openLesson = async () => {
      await evaluate("document.querySelector('[data-roadmap-lesson=database-management]').click();document.querySelector('[data-bubble-start]').click()");
      await waitFor("document.querySelector('[data-live-authored-step]') && !document.querySelector('.media-pending')");
    };
    const completeLesson = async () => {
      for (let index = 0; index < lessonActionLimit; index += 1) {
        await waitFor("document.querySelector('[data-authored-restart],.lesson-daily-streak[open],.heart-depletion[open]') || document.querySelector('[data-template-primary]') && !document.querySelector('.media-pending,.app-loading')");
        if (await evaluate("Boolean(document.querySelector('.lesson-daily-streak[open]'))")) {
          await waitFor("document.querySelector('.lesson-daily-streak button:not(:disabled)')");
          await evaluate("document.querySelector('.lesson-daily-streak button').click()");
          await waitFor("!document.querySelector('.lesson-daily-streak[open]')");
          continue;
        }
        if (await evaluate("Boolean(document.querySelector('.heart-depletion[open]'))")) {
          await waitFor("document.querySelector('.heart-depletion [data-heart-activate]:not(:disabled)')");
          await evaluate("document.querySelector('[data-heart-activate]').click()");
          await waitFor("document.querySelector('.heart-depletion[data-state=super]')");
          await evaluate("document.querySelector('[data-heart-resume]').click()");
          await waitFor("!document.querySelector('.heart-depletion[open]')");
          continue;
        }
        if (await evaluate("Boolean(document.querySelector('[data-authored-restart]'))")) return;
        await evaluate(`(() => {
          const correct=document.querySelector('[data-ui-lab-answer][data-correct=true]');
          if(correct && !document.querySelector('[data-ui-lab-feedback]')?.classList.contains('is-correct')) correct.click();
          if(document.querySelector('[data-exam-card]') && document.querySelector('[data-exam-solution]').inert) document.querySelector('[data-exam-card]').click();
          document.querySelector('[data-exam-correct=true]:not(:disabled)')?.click();
          document.querySelector('[data-template-primary]').click();
        })()`);
      }
      throw new Error("Static question lesson did not complete");
    };
    const exitCompletion = async () => {
      await evaluate("document.querySelector('[data-authored-restart]').click()");
      await waitFor("document.querySelector('.subject-roadmap') && !document.querySelector('.media-pending')");
    };
    await openLesson();
    await completeLesson();
    await exitCompletion();
    assert.ok(await evaluate("Number(document.querySelector('.roadmap-question-ring').getAttribute('aria-valuenow')) > 0"), "Member question answers are saved");
    await navigate("?flow=sign-in");
    const signIn = async () => {
      await waitFor("document.querySelector('[data-sign-in-form]') && !document.querySelector('.media-pending')");
      await evaluate("document.querySelector('[name=identifier]').value='free';document.querySelector('[name=password]').value='Learn123';document.querySelector('[data-sign-in-form]').requestSubmit()");
      await waitFor("document.body.dataset.accountType === 'free' && !document.body.classList.contains('product-flow-active') && document.querySelector('[data-learner-dashboard]') && !document.querySelector('.media-pending') && document.querySelector('.learner-dashboard-root[aria-busy=false]')");
    };
    await signIn();
    assert.ok(await evaluate("document.querySelector('[data-subject=ict] [data-subject-count]').textContent.startsWith('0 /')"));
    await evaluate("document.querySelector('[data-subject=ict]').click()");
    await waitFor("document.querySelector('.subject-roadmap')");
    await openLesson();
    await completeLesson();
    await exitCompletion();
    await waitFor("document.querySelector('.subject-roadmap')");
    await evaluate("document.querySelector('.lesson-back').click()");
    await waitFor("!document.querySelector('.progress-feedback:not([hidden])') && document.querySelector('[data-learner-dashboard]')");
    assert.ok(await evaluate("!document.querySelector('[data-subject=ict] [data-subject-count]').textContent.startsWith('0 /')"));
    await navigate("?page=learn");
    await waitFor("document.querySelector('[data-learner-dashboard]') && !document.querySelector('.media-pending')");
    assert.ok(await evaluate("!document.querySelector('[data-subject=ict] [data-subject-count]').textContent.startsWith('0 /')"));
    for (const route of ["design-system", "ship-ready-code-lab", "ui-lab"]) {
      await navigate(`?view=${route}`);
      await waitFor("document.querySelector('[data-learner-dashboard]') && !document.querySelector('.media-pending')");
      assert.equal(await evaluate("location.search"), "?page=learn", "Removed development routes normalize to Home");
    }
    assert.deepEqual(failures, []);
  }, { baseUrl:server.base });
} finally { await server.close(); }
console.log("Packaged-static Chromium checks passed under /learn-preview/: required account, fixture login, Home consistency, persistent login, removed development routes; zero API requests.");
