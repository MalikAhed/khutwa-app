import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { firefox, webkit } from "playwright";
import { getAvailablePort, waitForServer, terminateProcess } from "./browser-session.mjs";

/** Exercise the production MCQ controller in each compatibility engine. */
export async function verifyMcqMathOverflow(browser, engine, base) {
  const evidence = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-mcq-math-overflow";
  await mkdir(evidence, { recursive:true });
  const context = await browser.newContext({ viewport:{ width:320, height:1000 }, reducedMotion:"reduce" });
  await context.route("**/src/bootstrap.js", route => route.fulfill({ contentType:"text/javascript", body:"" }));
  const page = await context.newPage();
  const errors = [];
  const diagnostics = [];
  let failure = null;
  page.on("pageerror", error => errors.push(error.message));
  try {
    await page.goto(base);
    await page.evaluate(async () => {
      document.querySelectorAll("link[data-app-style]").forEach(link => { link.media = "all"; });
      const [{ loadSubjectLesson }, { parseLessonMarkdown }, { renderAuthoredInteractiveLesson }] = await Promise.all([
        import("/src/data/lessons/subject-lesson-registry.js"), import("/src/markdown/lesson-authoring.js"), import("/src/ui/lesson/authored.js"),
      ]);
      const chemistry = await loadSubjectLesson("chemistry", "u01-l01-quantum-model");
      const orbitals = await loadSubjectLesson("chemistry", "u01-l02-electron-configuration");
      const mathematics = await loadSubjectLesson("mathematics", "implicit-differentiation");
      const tuple = parseLessonMarkdown(chemistry.authoringSource).steps.find(step => step.id === "chemistry-gaza-p014-q01-a5");
      const tall = parseLessonMarkdown(mathematics.authoringSource).steps.find(step => step.id === "math-kamel-u1-p065-r6");
      const images = parseLessonMarkdown(orbitals.authoringSource).steps.find(step => step.id === "chemistry-oj-p027-q03");
      const rtl = '`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow>'
        + Array.from({ length:20 }, (_, index) => `<mi>n</mi><mo>+</mo><mn>${index}</mn>`).join("") + '</mrow></math>`';
      const shell = document.querySelector(".lesson-shell");
      document.body.replaceChildren(shell);
      document.body.removeAttribute("data-startup");
      let cleanup = () => {};
      window.mcqMathProbe = {
        answers:[],
        cases:[
          { name:"quantum-tuple", subject:"chemistry", lesson:chemistry, step:tuple },
          { name:"rtl-formula", subject:"chemistry", lesson:chemistry, step:{ ...tuple, id:"rtl-math-probe", content:{ ...tuple.content,
            prompt:"اختر المعادلة الصحيحة. " + rtl, example:"", answers:tuple.content.answers.map(answer => ({ ...answer, text:rtl })),
          } } },
          { name:"tall-fraction", subject:"mathematics", lesson:mathematics, step:tall },
          { name:"orbital-images", subject:"chemistry", lesson:orbitals, step:images },
        ],
        mount(index) {
          cleanup();
          const entry = this.cases[index];
          shell.dataset.subject = entry.subject;
          cleanup = renderAuthoredInteractiveLesson(shell.querySelector(".lesson-card"), "تدريب", entry.lesson, [entry.step], {
            onAnswer:answer => this.answers.push(answer),
          });
        },
        destroy:() => cleanup(),
      };
    });
    for (let index = 0; index < 4; index += 1) {
      await page.evaluate(index => window.mcqMathProbe.mount(index), index);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => Promise.all([...document.querySelectorAll(".ui-lab-mcq img")].map(image => {
        image.loading = "eager";
        return image.decode();
      })));
      await page.waitForFunction(() => !document.querySelector(".media-pending"));
      const geometry = await page.evaluate(() => [...document.querySelectorAll(".ui-lab-mcq .lesson-inline-scroll")].map(region => {
        const box = region.getBoundingClientRect();
        const media = region.querySelector("math,img");
        const formula = media.getBoundingClientRect();
        const button = region.closest("button");
        const bound = (button || region.parentElement).getBoundingClientRect();
        return { kind:media.localName, direction:getComputedStyle(region).direction, overflow:region.scrollWidth > region.clientWidth + 1,
          nested:Boolean(button && (region.hasAttribute("tabindex") || region.hasAttribute("role") || region.hasAttribute("aria-label"))),
          contained:box.left >= bound.left - 1 && box.right <= bound.right + 1,
          vertical:formula.top >= box.top - 1 && formula.bottom <= box.top + region.clientHeight + 1,
          size:parseFloat(getComputedStyle(media).fontSize) / parseFloat(getComputedStyle(region).fontSize),
          nativeImage:media.localName !== "img" || Math.abs(formula.width - media.naturalWidth) < 1,
          width:region.clientWidth, scrollWidth:region.scrollWidth, height:region.clientHeight, mathHeight:formula.height,
        };
      }));
      const name = await page.evaluate(index => window.mcqMathProbe.cases[index].name, index);
      diagnostics.push({ engine, name, geometry });
      assert.ok(geometry.length && geometry.every(region => region.contained && region.vertical && !region.nested), `${engine}/${name}: math stays inside its reading region without nested controls`);
      assert.ok(geometry.every(region => region.kind !== "math" || Math.abs(region.size - 1.35) < .01), `${engine}/${name}: native math size is preserved`);
      assert.ok(geometry.every(region => region.nativeImage), `${engine}/${name}: source image pixels retain their original size`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true);
      const target = await page.evaluate(() => [...document.querySelectorAll("[data-ui-lab-answer]")].map((answer, answerIndex) => ({ answerIndex,
        regionIndex:[...answer.querySelectorAll(".lesson-inline-scroll")].findIndex(region => region.scrollWidth > region.clientWidth + 1),
      })).find(choice => choice.regionIndex >= 0));
      assert.ok(target, `${engine}/${name}: fixture includes an overflowing answer`);
      const answer = page.locator("[data-ui-lab-answer]").nth(target.answerIndex);
      const region = answer.locator(".lesson-inline-scroll").nth(target.regionIndex);
      const rtl = await region.evaluate(node => getComputedStyle(node).direction === "rtl");
      const attempts = await page.evaluate(() => window.mcqMathProbe.answers.length);
      await answer.focus();
      const reading = { name, target, positions:[] };
      diagnostics[diagnostics.length - 1].reading = reading;
      // Observe each real keyboard scroll before sending the next key. A burst
      // can outrun Firefox's scroll updates on a fast CI runner, and extra keys
      // at the edge exercise native page scrolling instead of formula reading.
      for (let press = 0; press < 24; press += 1) {
        const position = await region.evaluate(node => ({ left:node.scrollLeft, max:node.scrollWidth - node.clientWidth }));
        reading.positions.push(position);
        const focused = await answer.evaluate(node => node === document.activeElement);
        assert.equal(focused, true, `${engine}/${name}: answer retains keyboard focus${focused ? "" : ": " + await page.evaluate(() => document.activeElement?.outerHTML.slice(0, 1200))}`);
        if (Math.abs(position.left) >= position.max - 1) break;
        await page.keyboard.press(rtl ? "ArrowLeft" : "ArrowRight");
        await page.waitForFunction(({ answerIndex, regionIndex, previous }) => {
          const answer = document.querySelectorAll('[data-ui-lab-answer]')[answerIndex];
          const region = answer.querySelectorAll('.lesson-inline-scroll')[regionIndex];
          return Math.abs(region.scrollLeft) > Math.abs(previous);
        }, { ...target, previous:position.left });
      }
      await page.waitForFunction(({answerIndex,regionIndex}) => {
        const answer=document.querySelectorAll('[data-ui-lab-answer]')[answerIndex];
        const region=answer.querySelectorAll('.lesson-inline-scroll')[regionIndex];
        return Math.abs(region.scrollLeft) >= region.scrollWidth - region.clientWidth - 1;
      },target);
      assert.equal(await answer.getAttribute("aria-pressed"), "false");
      assert.equal(await page.locator("[data-template-primary]").isDisabled(), true);
      assert.equal(await page.evaluate(() => window.mcqMathProbe.answers.length), attempts);
      if (name === "rtl-formula") {
        assert.equal(await page.getByRole("button", { name:/0/ }).count(), await page.locator("[data-ui-lab-answer]").count(), "answer names retain native formula content");
        assert.ok((await answer.locator("math").textContent()).includes("19"), "full native MathML remains present beyond the bounded computed name");
        await answer.press("Space");
        const prompt = page.locator("h1 .lesson-math-scroll");
        await prompt.focus();
        await prompt.press("Enter");
        await prompt.press("Space");
        assert.equal(await page.evaluate(() => window.mcqMathProbe.answers.length), attempts);
      }
      await page.screenshot({ path:path.join(evidence, `${engine}-${name}.png`) });
    }
    await page.evaluate(() => window.mcqMathProbe.destroy());
    assert.deepEqual(errors, []);
    console.log(`${engine}: 320px quantum tuples, RTL math, tall fractions, original orbital images, keyboard reading and answer isolation passed.`);
  } catch (error) {
    failure = error.message;
    await page.screenshot({ path:path.join(evidence, `${engine}-failure.png`) }).catch(() => {});
    throw error;
  } finally {
    await writeFile(path.join(evidence, `${engine}-checks.json`), JSON.stringify({ engine, checked:diagnostics.length, failure, diagnostics, errors }, null, 2));
    await context.close();
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const port = await getAvailablePort();
  const server = spawn(process.execPath, ["dev-server.mjs"], { env:{ ...process.env, PORT:String(port), LIVE_RELOAD:"0", ACCOUNTS_DATABASE_PATH:":memory:" }, stdio:"ignore" });
  try {
    await waitForServer(port);
    for (const [engine, browserType] of Object.entries({ firefox, webkit })) {
      const browser = await browserType.launch({ headless:true });
      try { await verifyMcqMathOverflow(browser, engine, `http://127.0.0.1:${port}/`); }
      finally { await browser.close(); }
    }
  } finally { await terminateProcess(server); }
}
