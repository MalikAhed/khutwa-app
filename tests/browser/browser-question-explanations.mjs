import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { getSubjectRoadmap } from "../../src/data/subject-roadmaps.js";
import { loadSubjectLesson } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { questionExplanation } from "../../src/domain/question-explanations.js";
import { findChrome, getAvailablePort, rawRequest, delay, terminateProcess } from "./browser-session.mjs";

const evidence = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-question-explanations";
await mkdir(evidence,{recursive:true});
const port = await getAvailablePort();
const base = `http://127.0.0.1:${port}/`;
const server = spawn(process.execPath,["dev-server.mjs"],{
  env:{...process.env,PORT:String(port),LIVE_RELOAD:"0",DEV_AUTO_LOGIN:"1",ACCOUNTS_DATABASE_PATH:":memory:"},stdio:"ignore",
});
let browser;
try {
  // Auto-login redirects unauthenticated root requests; its readiness route does not.
  let ready = false;
  for (let attempt=0;attempt<100;attempt++) {
    try { ready = await rawRequest(port,"/__codex_dev_ready") === 204; }
    catch (error) { if (error.code !== "ECONNREFUSED") throw error; }
    if (ready) break;
    await delay(50);
  }
  assert.ok(ready,"isolated development server is ready");
  browser = await chromium.launch({executablePath:await findChrome(),args:["--no-sandbox"]});
  const page = await browser.newPage({viewport:{width:1440,height:900}});
  const errors = [];
  page.on("pageerror",error => errors.push(error.message));
  const open = async key => {
    await page.goto(base + "?" + new URLSearchParams({subject:key.subjectId,lesson:key.lessonId,part:key.partId,...(key.stepId ? {question:key.stepId} : {})}));
    await page.locator("[data-question-explain]").waitFor();
  };
  const key = {subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"exam-p09-q1-1"};
  await page.goto(base);
  await page.waitForFunction(() => document.body.dataset.accountType === "free");
  // Continue through the part below; a question URL intentionally opens a one-question review.
  await open({ ...key, stepId:null });
  const session = await (await page.request.get(base + "api/auth/session")).json();
  const balance = async () => (await (await page.request.get(base + "api/progress",{
    headers:{"X-Progress-Owner":`account:${session.account.id}`},
  })).json()).resources;
  const button = page.locator("[data-question-explain]");
  const sheet = page.locator(".question-explanation-dialog");
  const close = async escape => {
    if (escape) await page.keyboard.press("Escape");
    else await page.locator("[data-explanation-close]").click();
    await sheet.waitFor({state:"detached"});
    assert.equal(await button.evaluate(node => node === document.activeElement),true);
  };
  const assertFooter = async () => {
    await page.waitForFunction(() => [...document.querySelectorAll(".level-action")].every(node =>
      node.getAnimations().filter(animation => animation instanceof CSSTransition).every(animation => animation.playState === "finished")));
    const boxes = await page.evaluate(() => ["[data-template-back]","[data-question-explain]","[data-template-primary]"]
      .map(selector => {
        const node = document.querySelector(selector);
        if (node.hidden) return null;
        const {left,right,top,bottom} = node.getBoundingClientRect();
        return {left,right,top,bottom,layoutTop:node.offsetTop};
      }).filter(Boolean));
    assert.ok(boxes.every(box => box.left >= 0 && box.right <= page.viewportSize().width));
    for (let index=1;index<boxes.length;index++) {
      assert.ok(boxes[index].left >= boxes[index-1].right,"footer controls must not overlap");
      if (Math.abs(boxes[index].layoutTop - boxes[index-1].layoutTop) > 1)
        await page.screenshot({path:`${evidence}/footer-failure.png`});
      assert.ok(Math.abs(boxes[index].layoutTop - boxes[index-1].layoutTop) <= 1,`footer controls share the last row: ${JSON.stringify(boxes)}`);
    }
  };
  assert.equal((await balance()).gems,200);
  assert.equal(await button.locator(".explanation-price").textContent(),"50");
  const shimmer = await button.evaluate(node => {
    const style = getComputedStyle(node,"::before");
    return {duration:style.animationDuration,band:style.backgroundColor,fill:getComputedStyle(node).backgroundColor,image:getComputedStyle(node).backgroundImage};
  });
  assert.equal(shimmer.duration,"2.5s");
  assert.equal(shimmer.band,"rgb(255, 244, 193)");
  assert.equal(shimmer.image,"none");
  for (const width of [1440,390,320]) {
    await page.setViewportSize({width,height:900});
    await assertFooter();
    await page.screenshot({path:`${evidence}/button-${width}.png`});
  }
  await button.focus();
  await page.keyboard.press("Space");
  await sheet.locator('[data-explanation-body][aria-busy="false"]').waitFor();
  assert.match(await sheet.textContent(),/MySQL/);
  await page.waitForFunction(() => document.querySelector(".question-explanation-dialog")?.getAnimations().every(animation => animation.playState === "finished"));
  const section = await sheet.evaluate(node => {
    const box = node.getBoundingClientRect();
    return {left:box.left,top:box.top,width:box.width,height:box.height,border:getComputedStyle(node).borderWidth,
      font:getComputedStyle(node.querySelector(".markdown-rendered")).fontFamily};
  });
  assert.equal(section.border,"0px");
  assert.ok(section.font.includes("Amiri"));
  assert.ok(Math.abs(section.top) < 1 && Math.abs(section.left) < 1);
  assert.equal(section.width,320);
  assert.equal(section.height,900);
  assert.equal((await balance()).gems,150);
  assert.equal(await page.locator("[data-template-primary]").isDisabled(),true,"explanations never answer the MCQ");
  await page.screenshot({path:`${evidence}/section-320.png`});
  await close(true);
  await button.click();
  await sheet.locator('[data-explanation-body][aria-busy="false"]').waitFor();
  assert.equal((await balance()).gems,150);
  await close(false);
  await page.reload();
  await button.waitFor();
  assert.equal(await button.locator(".explanation-price").count(),0,"reopening restores the permanent unlock");
  assert.equal(await button.textContent(),"اشرح","unlocked free explanations show only the action label");
  await page.emulateMedia({reducedMotion:"reduce"});
  await page.locator('[data-ui-lab-answer][data-correct="true"]').click();
  await page.locator("[data-template-primary]").click();
  await page.locator('.lesson-daily-streak button').click();
  await page.emulateMedia({reducedMotion:"no-preference"});
  const assertRatingWidth = async () => {
    assert.ok(await page.locator(".level-question-rating-panel").evaluate(node => {
      const footer = node.closest(".level-layout-actions");
      const style = getComputedStyle(footer);
      const bar = node.querySelector('.level-question-ratings').getBoundingClientRect();
      const primary = footer.querySelector('[data-template-primary]').getBoundingClientRect();
      return Math.abs(bar.width - (footer.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight))) < 2 && primary.top >= bar.bottom;
    }),"the question rating bar spans the footer content width");
  };
  for (const width of [1440,1000,390,320]) {
    await page.setViewportSize({width,height:900});
    await assertFooter();
    await assertRatingWidth();
    // Also exercise lesson layouts which do not provide explanations.
    await page.locator('.level-layout-actions').evaluate(node => {
      node.classList.remove('level-layout-actions--explanations');
      node.querySelector('[data-question-explain]').hidden = true;
    });
    await assertRatingWidth();
    await page.locator('.level-layout-actions').evaluate(node => {
      node.classList.add('level-layout-actions--explanations');
      node.querySelector('[data-question-explain]').hidden = false;
    });
  }
  await page.locator("[data-template-primary]").click();
  await page.waitForFunction(() => !document.querySelector('[data-template-back]').hidden);
  await assertFooter();
  await page.screenshot({path:`${evidence}/three-buttons-320.png`});
  const mathLesson = getSubjectRoadmap("mathematics").units[0].lessons.find(lesson => !lesson.hidden);
  const mathBank = await loadSubjectLesson("mathematics",mathLesson.id);
  const parsedMath = parseLessonMarkdown(mathBank.authoringSource).steps;
  const explanationIds = new Set(parsedMath.filter(step => questionExplanation(step)?.markdown).map(step => step.id));
  const mathKey = stepId => ({subjectId:"mathematics",lessonId:mathLesson.id,
    partId:mathLesson.parts.find(part => part.questionIds.includes(stepId)).id,stepId});
  assert.equal(explanationIds.size, parsedMath.length,"every canonical mathematics question has an explanation");
  const written = mathBank.steps.find(step => step.type === "activity" && explanationIds.has(step.id));
  await open(mathKey(written.id));
  await page.locator("[data-exam-card]").waitFor();
  await button.click();
  await sheet.locator('[data-explanation-body][aria-busy="false"]').waitFor();
  assert.ok((await sheet.locator(".markdown-rendered").textContent()).trim());
  assert.equal(await page.locator("[data-exam-solution]").getAttribute("aria-hidden"),"true");
  await close(false);
  await page.locator('[data-exam-card]').evaluate(node => node.click());
  await page.locator('[data-exam-solution][aria-hidden="false"]').waitFor();
  for (const width of [1440,390,320]) {
    await page.setViewportSize({width,height:900});
    await assertRatingWidth();
  }
  for (const subjectId of ["physics","mathematics"]) {
    const lesson = getSubjectRoadmap(subjectId).units.flatMap(unit => unit.lessons).find(lesson => !lesson.hidden);
    await open({subjectId,lessonId:lesson.id,partId:lesson.parts[0].id});
    await button.click();
    await sheet.locator('[data-explanation-body][aria-busy="false"]').waitFor();
    assert.ok(await sheet.locator("math").count(),`${subjectId}: existing worked equations render as MathML`);
    assert.equal(await sheet.locator(".lesson-math-error").count(),0);
    if (subjectId === "mathematics") assert.ok(await sheet.evaluate(node => {
      const rows = node.querySelectorAll("mtable > mtr");
      return rows.length < 2 || rows[1].getBoundingClientRect().top - rows[0].getBoundingClientRect().bottom >= 18;
    }),"stacked calculation lines have readable vertical spacing");
    for (const width of [1440,390]) {
      await page.setViewportSize({width,height:900});
      assert.ok(await sheet.evaluate(node => node.scrollWidth <= innerWidth));
      await page.screenshot({path:`${evidence}/${subjectId}-${width}.png`});
    }
    await close(false);
  }
  const beforeSuper = (await balance()).gems;
  const trial = await page.request.post(base + "api/progress",{headers:{"X-Progress-Owner":`account:${session.account.id}`},data:{type:"super-trial"}});
  assert.equal(trial.status(),200);
  const newMathQuestion = mathBank.steps.find(step => step.id !== mathBank.steps[0].id && step.id !== written.id && explanationIds.has(step.id));
  await open(mathKey(newMathQuestion.id));
  assert.equal(await button.locator(".explanation-price").count(),0,"Super includes new explanations");
  assert.equal(await button.locator(".explanation-included").textContent(),"∞");
  assert.equal(await page.locator(".lesson-top [data-super-trial-countdown]").count(),0,"the countdown belongs on Home");
  await button.click();
  await sheet.locator('[data-explanation-body][aria-busy="false"]').waitFor();
  assert.ok(await sheet.locator("math").count());
  assert.equal((await balance()).gems,beforeSuper);
  await close(false);
  assert.equal(await button.textContent(),"اشرح∞","Super keeps the infinity sign after opening");
  await page.emulateMedia({reducedMotion:"reduce"});
  assert.equal(await button.evaluate(node => getComputedStyle(node,"::before").animationName),"none");
  await button.click();
  await sheet.locator('[data-explanation-body][aria-busy="false"]').waitFor();
  assert.equal(await sheet.evaluate(node => getComputedStyle(node).animationName),"none");
  await page.goto(base + '?page=learn');
  assert.equal(await sheet.count(),0,"navigation removes the explanation section");
  const countdown = page.locator('.learner-dashboard__header [data-super-trial-countdown]:not([hidden])');
  await countdown.waitFor();
  const tick = await countdown.textContent();
  await page.waitForFunction(previous => document.querySelector('[data-super-trial-countdown]')?.textContent !== previous,tick);
  for (const width of [1440,390,320]) {
    await page.setViewportSize({width,height:900});
    assert.ok(await countdown.evaluate(node => {
      const badge = node.getBoundingClientRect();
      const header = node.closest('header').getBoundingClientRect();
      const welcome = node.closest('header').querySelector('.learner-dashboard__identity').getBoundingClientRect();
      return Math.abs(badge.left-header.left) < 2 && badge.right <= welcome.left && badge.top < welcome.bottom && badge.bottom > welcome.top && document.documentElement.scrollWidth <= innerWidth;
    }),"the countdown sits on the left beside the welcome message without overflow");
    await page.screenshot({path:`${evidence}/home-countdown-${width}.png`});
  }
  // Hold an unlock locally so dismiss/reopen races do not depend on API timing.
  await page.emulateMedia({reducedMotion:"no-preference"});
  await page.evaluate(async () => {
    const { mountQuestionExplanation } = await import("/src/ui/lesson/question-explanation.js");
    const host = document.createElement("div");
    host.dataset.explanationFixture = "";
    host.innerHTML = '<nav class="level-layout-actions"><button data-template-primary>Continue</button></nav>';
    document.body.append(host);
    const controller = new AbortController();
    const requests = [];
    mountQuestionExplanation({host,signal:controller.signal,explanation:{
      isUnlocked:() => true,
      unlock:({signal}) => {
        requests.push(signal);
        return new Promise((resolve,reject) => signal.addEventListener("abort",() => reject(new DOMException("Cancelled","AbortError")),{once:true}));
      },
    }});
    window.explanationLifecycle = {host,controller,requests,closed:false};
    host.querySelector("[data-question-explain]").click();
  });
  assert.equal(await page.evaluate(() => {
    document.querySelector("[data-explanation-close]").click();
    return window.explanationLifecycle.requests.at(-1).aborted;
  }),true,"Close cancels pending reading work before the exit animation finishes");
  await sheet.waitFor({state:"detached"});
  assert.equal(await page.locator("[data-explanation-fixture] [data-question-explain]").evaluate(node => node === document.activeElement),true);
  await page.evaluate(() => {
    const fixture = window.explanationLifecycle;
    fixture.host.querySelector("[data-question-explain]").click();
    const old = document.querySelector(".question-explanation-dialog");
    old.addEventListener("close",() => { fixture.closed = true; },{once:true});
    old.close();
    fixture.host.querySelector("[data-question-explain]").click();
  });
  await page.waitForFunction(() => window.explanationLifecycle.closed);
  assert.equal(await sheet.count(),1,"a queued close event cannot remove the reopened explanation");
  assert.equal(await sheet.evaluate(node => node.open),true);
  assert.equal(await page.evaluate(() => window.explanationLifecycle.requests.at(-2).aborted),true);
  assert.equal(await page.evaluate(() => window.explanationLifecycle.requests.at(-1).aborted),false);
  assert.equal(await sheet.locator("[data-explanation-close]").evaluate(node => node === document.activeElement),true,"reopening keeps focus inside the new modal");
  await page.evaluate(() => {
    const fixture = window.explanationLifecycle;
    document.querySelector("[data-explanation-close]").click();
    fixture.controller.abort();
    fixture.host.remove();
    const nextView = document.createElement("button");
    nextView.dataset.explanationNextView = "";
    nextView.textContent = "Next view";
    document.body.append(nextView);
    nextView.focus();
  });
  assert.equal(await sheet.count(),0,"navigation removes a pending explanation immediately");
  assert.equal(await page.evaluate(() => window.explanationLifecycle.requests.every(signal => signal.aborted)),true);
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  assert.equal(await page.locator("[data-explanation-next-view]").evaluate(node => node === document.activeElement),true,"aborting an exit animation cannot steal the next view's focus");
  await page.locator("[data-explanation-next-view]").evaluate(node => node.remove());
  assert.deepEqual(errors,[]);
  console.log(`Explanation purchases, permanent unlocks, ready ICT/math/physics content, full-screen motion, keyboard, reduced motion and desktop/mobile passed. Evidence: ${evidence}`);
} finally {
  await browser?.close();
  await terminateProcess(server);
}
