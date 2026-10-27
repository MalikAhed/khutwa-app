import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { MATHEMATICS_LESSONS } from "../../src/data/lessons/mathematics/math-course.js";
import { findChrome, getAvailablePort, rawRequest, delay, terminateProcess } from "./browser-session.mjs";

const evidence = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-arabic-math-formatting";
await mkdir(evidence, { recursive:true });
const port = await getAvailablePort();
const base = `http://127.0.0.1:${port}/`;
const server = spawn(process.execPath, ["dev-server.mjs"], {
  env:{ ...process.env, PORT:String(port), LIVE_RELOAD:"0", DEV_AUTO_LOGIN:"1", ACCOUNTS_DATABASE_PATH:":memory:" }, stdio:"ignore",
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
  assert.ok(ready, "isolated math formatting server is ready");
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  const page = await browser.newPage({ viewport:{ width:1440, height:1000 }, reducedMotion:"reduce" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(base);
  await page.waitForFunction(() => document.body.dataset.accountType === "free");
  const session = await (await page.request.get(base + "api/auth/session")).json();
  await page.evaluate(id => localStorage.setItem(`tawjihi:rocky-first-run:v1:account:${id}`,
    JSON.stringify({ version:2, status:"complete" })), session.account.id);
  await page.goto(base + "?subject=mathematics");
  await page.locator("[data-roadmap-lesson]").first().waitFor();
  await page.evaluate(() => document.querySelectorAll("link[data-app-style]").forEach(link => { link.media = "all"; }));
  let formulaCount = 0;
  for (const { subjectId, id } of MATHEMATICS_LESSONS) {
    formulaCount += await page.evaluate(async ({ subjectId, id }) => {
      const [{ loadSubjectLesson }, { renderMathML }] = await Promise.all([
        import("./src/data/lessons/subject-lesson-registry.js"), import("./src/markdown/math.js"),
      ]);
      const lesson = await loadSubjectLesson(subjectId, id);
      const formulas = lesson.authoringSource.match(/<math\b[\s\S]*?<\/math>/g) || [];
      const host = document.createElement("div");
      for (const source of formulas) {
        host.innerHTML = renderMathML(source);
        const math = host.querySelector("math");
        if (!math || math.getAttribute("dir") !== "rtl" || /\p{Script=Latin}|[0-9]/u.test(math.textContent)) {
          throw new Error(`${id}: invalid or non-Arabic formula`);
        }
      }
      return formulas.length;
    }, { subjectId, id });
  }
  const mount = async (lessonId, questionId) => {
    await page.evaluate(async ({ lessonId, questionId }) => {
      window.arabicMathCleanup?.();
      const [{ loadSubjectLesson }, { parseLessonMarkdown }, { mountQuestionExplanation }] = await Promise.all([
        import("./src/data/lessons/subject-lesson-registry.js"), import("./src/markdown/lesson-authoring.js"),
        import("./src/ui/lesson/question-explanation.js"),
      ]);
      const lesson = await loadSubjectLesson("mathematics", lessonId);
      const step = parseLessonMarkdown(lesson.authoringSource).steps.find(step => step.id === questionId);
      if (!step) throw new Error(questionId);
      const host = document.createElement("div");
      host.innerHTML = '<div class="level-layout-actions"><button data-template-primary>متابعة</button></div>';
      document.body.append(host);
      const controller = new AbortController();
      mountQuestionExplanation({ host, locale:"ar", signal:controller.signal,
        explanation:{ isUnlocked:() => true, unlock:async () => ({
          markdown:[step.content.body || step.content.prompt, step.content.solution || step.content.correctFeedback].join("\n\n"),
        }) } });
      window.arabicMathCleanup = () => { controller.abort(); host.remove(); };
      host.querySelector("[data-question-explain]").click();
    }, { lessonId, questionId });
    await page.locator('[data-explanation-body][aria-busy="false"]').waitFor();
    await page.evaluate(() => document.fonts.ready);
  };
  const cases = [
    ["matrices", "math-book-p058-ex1-b"],
    ["matrix-operations", "math-book-p062-ex1-a"],
    ["matrix-inverse", "math-book-p072-ex1"],
    ["determinants", "math-book-p068-ex1-a-i"],
    ["indefinite-integral", "math-book-p084-activity1-table"],
    ["fundamental-theorem", "math-book-p111-ex1-a"],
    ["integral-area", "math-book-p122-ex5"],
    ["integral-area", "math-kamel-u5-p062-r5"],
  ];
  for (const [lessonId, questionId] of cases) {
    await mount(lessonId, questionId);
    for (const width of [1440,390]) {
      await page.setViewportSize({ width, height:1000 });
      const result = await page.locator(".question-explanation-dialog").evaluate(dialog => {
        const body = dialog.querySelector("[data-explanation-body]");
        const tables = [...dialog.querySelectorAll("mtable")].filter(table => table.previousElementSibling?.localName === "mo"
          && table.nextElementSibling?.localName === "mo");
        return {
          overflow:body.scrollWidth > body.clientWidth + 1 || document.documentElement.scrollWidth > innerWidth,
          invalid:dialog.querySelectorAll(".lesson-math-error, pre").length,
          foreign:/\p{Script=Latin}|[0-9]/u.test(body.textContent),
          matrices:tables.map(table => ({
            fences:table.previousElementSibling.textContent + table.nextElementSibling.textContent,
            tall:Math.min(table.previousElementSibling.getBoundingClientRect().height, table.nextElementSibling.getBoundingClientRect().height)
              >= table.getBoundingClientRect().height * .9,
            rtl:[...table.querySelectorAll(":scope > mtr")].every(row => row.children.length < 2
              || row.firstElementChild.getBoundingClientRect().left > row.lastElementChild.getBoundingClientRect().left),
          })),
          integrals:[...dialog.querySelectorAll("mo")].filter(node => node.textContent === "∫").map(node => ({
            height:node.getBoundingClientRect().height / parseFloat(getComputedStyle(node).fontSize),
            rtl:getComputedStyle(node).direction === "rtl",
            lower:(() => {
              const script = node.parentElement.parentElement;
              if (!["msub", "msubsup"].includes(script.localName)) return null;
              const bound = script.children[1].getBoundingClientRect();
              const sign = node.getBoundingClientRect();
              return Math.abs(bound.right - sign.right) / sign.width;
            })(),
          })),
          fences:[...dialog.querySelectorAll("mrow")].filter(row => row.firstElementChild?.localName === "mo"
            && row.lastElementChild?.localName === "mo" && row.querySelector("mfrac")
            && ["()", "[]"].includes(row.firstElementChild.textContent + row.lastElementChild.textContent))
            .map(row => ({ height:Math.min(row.firstElementChild.getBoundingClientRect().height,
              row.lastElementChild.getBoundingClientRect().height), fraction:row.querySelector("mfrac").getBoundingClientRect().height })),
        };
      });
      assert.equal(result.overflow, false, `${questionId}/${width}: fits the screen`);
      assert.equal(result.invalid, 0, `${questionId}/${width}: native math, no leaked code blocks`);
      assert.equal(result.foreign, false, `${questionId}/${width}: entirely Arabic`);
      for (const matrix of result.matrices) {
        assert.ok(["[]", "||"].includes(matrix.fences), questionId);
        assert.ok(matrix.tall && matrix.rtl, `${questionId}: tall fences and first column on the right`);
      }
      for (const integral of result.integrals) {
        assert.ok(integral.height >= 1.8 && integral.rtl, `${questionId}: large RTL integral`);
        if (integral.lower !== null) assert.ok(integral.lower < .65, `${questionId}: lower bound sits by the lower tip`);
      }
      for (const fence of result.fences) assert.ok(fence.height >= fence.fraction * .9,
        `${questionId}: paired fences span the enclosed fraction`);
      if (questionId === "math-book-p122-ex5") {
        assert.ok(result.fences.length > 0, "evaluation brackets enclose the complete fraction");
        assert.equal(await page.locator(".question-explanation-dialog").evaluate(dialog => {
          const sentence = [...dialog.querySelectorAll("p")].find(p => p.textContent.includes("نبسط ونضرب في"));
          return sentence?.querySelector("mfrac")?.textContent === "٣٤";
        }), true, "the reported 3/4 instruction uses a stacked fraction");
      }
      if (questionId === "math-kamel-u5-p062-r5") {
        assert.equal(await page.locator(".question-explanation-dialog").evaluate(dialog =>
          [...dialog.querySelectorAll("p math")].some(math => math.textContent === "ص"
            && /التكعيبي ل\s*$/.test(math.previousSibling?.textContent || ""))), true,
        "the preposition remains prose and ص is a separate mathematical variable");
      }
      if (questionId === "math-book-p122-ex5") await page.locator(".question-explanation-dialog msubsup")
        .last().evaluate(node => node.closest("figure").scrollIntoView({ block:"center" }));
      await page.screenshot({ path:`${evidence}/${questionId}-${width}.png` });
    }
    if (questionId === "math-book-p058-ex1-b") {
      const positions = await page.locator(".question-explanation-dialog").evaluate(dialog => {
        const rows = [...dialog.querySelector("mtable").children];
        const index = [...dialog.querySelectorAll("msub")].find(node => node.firstElementChild.textContent === "أ");
        const digits = index.lastElementChild.children;
        return { values:rows.map(row => [...row.children].map(cell => cell.textContent)),
          rowIndexOnRight:digits[0].getBoundingClientRect().left > digits[1].getBoundingClientRect().left };
      });
      // Ministry book PDF p58: logical row/column order, read from the right.
      assert.deepEqual(positions.values, [["٤", "−٢"], ["٥", "١"], ["٧", "٠"]]);
      assert.equal(positions.rowIndexOnRight, true);
    }
    if (["matrix-operations", "matrix-inverse", "determinants"].includes(lessonId)) {
      const matrices = await page.locator(".question-explanation-dialog").evaluate(dialog =>
        [...dialog.querySelectorAll("mtable")].map(table => [...table.children].map(row => [...row.children].map(cell => {
          const value = cell.textContent.replace(/[٠-٩]/g, digit => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit))).replaceAll("−", "-");
          return /^-?\d+$/.test(value) ? Number(value) : null;
        }))).filter(rows => rows.every(row => row.every(value => value !== null))));
      if (lessonId === "matrix-operations") {
        // Ministry PDF p62: logical rows run from the right; matching entries add.
        assert.deepEqual(matrices[0], [[2,3],[5,4]]);
        assert.deepEqual(matrices[1], [[5,-7],[3,-4]]);
        assert.deepEqual(matrices.at(-1), [[7,-4],[8,0]]);
      } else if (lessonId === "matrix-inverse") {
        // Ministry PDF p72: verify both orders using the displayed logical entries.
        assert.deepEqual(matrices[0], [[1,2],[1,3]]);
        assert.deepEqual(matrices[1], [[3,-2],[-1,1]]);
        const product = (a,b) => a.map(row => b[0].map((_, col) => row.reduce((sum,value,k) => sum + value * b[k][col],0)));
        assert.deepEqual(product(matrices[0],matrices[1]), [[1,0],[0,1]]);
        assert.deepEqual(product(matrices[1],matrices[0]), [[1,0],[0,1]]);
        assert.deepEqual(matrices.at(-1), [[1,0],[0,1]]);
      } else {
        assert.deepEqual(matrices[0], [[2,3],[5,1]]);
        const [[a,b],[c,d]] = matrices[0];
        assert.equal(a*d-b*c, -13);
        assert.ok((await page.locator(".question-explanation-dialog").textContent()).includes("−١٣"));
      }
    }
    await page.keyboard.press("Escape");
    await page.locator(".question-explanation-dialog").waitFor({ state:"detached" });
  }
  await page.evaluate(() => window.arabicMathCleanup?.());
  assert.deepEqual(errors, []);
  console.log(`Arabic math: ${formulaCount} formulas validated; book matrix positions, Arabic indices, tall matrix brackets/determinant bars, enlarged RTL integrals and desktop/mobile explanations passed.`);
} finally {
  await browser?.close();
  await terminateProcess(server);
}
