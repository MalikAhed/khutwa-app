import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium, firefox, webkit } from "playwright";
import { findChrome, getAvailablePort, rawRequest, delay, terminateProcess } from "./browser-session.mjs";
import { MATH_SYMBOL_SAMPLES, mathSymbolsMarkdown } from "../fixtures/math-symbols.js";

const evidence = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-arabic-math";
await mkdir(evidence, { recursive:true });
const port = await getAvailablePort();
const base = `http://127.0.0.1:${port}/`;
const server = spawn(process.execPath, ["dev-server.mjs"], {
  env:{ ...process.env, PORT:String(port), LIVE_RELOAD:"0", DEV_AUTO_LOGIN:"1", ACCOUNTS_DATABASE_PATH:":memory:" },
  stdio:"ignore",
});

function inspectSymbols() {
  const cards = [...document.querySelectorAll(".lesson-math-sample")];
  const card = title => cards.find(node => node.querySelector("figcaption").textContent === title);
  const exponent = card("أس موجب على يسار المتغير").querySelector("msup");
  const limitWord = card("نهاية عند الصفر").querySelector("munder").firstElementChild.firstChild;
  const wordPositions = [0,2].map(index => {
    const range = document.createRange();
    range.setStart(limitWord, index); range.setEnd(limitWord, index + 1);
    return range.getBoundingClientRect().left;
  });
  const cases = card("دالة متعددة التعريف");
  const brace = [...cases.querySelectorAll("mo")].find(node => node.textContent === "{");
  const digits = card("كسر مع عدد من ثلاث خانات").querySelector("mn").firstChild;
  const integral = [...card("تكامل محدد").querySelectorAll("mo")].find(node => node.textContent === "∫");
  const integralBox = integral.getBoundingClientRect();
  const lowerLimit = integral.closest("msubsup").children[1].getBoundingClientRect();
  const positions = [0,1,2].map(index => {
    const range = document.createRange();
    range.setStart(digits, index); range.setEnd(digits, index + 1);
    return range.getBoundingClientRect().left;
  });
  return {
    cards:cards.length, math:document.querySelectorAll("math").length,
    errors:document.querySelectorAll(".lesson-math-error").length,
    namespaces:[...new Set([...document.querySelectorAll("math,math *")].map(node => node.namespaceURI))],
    fonts:[...document.fonts].filter(font => font.family.replaceAll('"', "") === "Amiri").map(font => ({ family:font.family, status:font.status })),
    exponentOnLeft:exponent.children[1].getBoundingClientRect().right <= exponent.children[0].getBoundingClientRect().left + 1,
    digitPositions:positions,
    arabicWordPositions:wordPositions,
    braceHeight:brace.getBoundingClientRect().height,
    casesHeight:cases.querySelector("mtable").getBoundingClientRect().height,
    integralHeight:integralBox.height / parseFloat(getComputedStyle(integral).fontSize),
    integralLowerGap:Math.abs(lowerLimit.right - integralBox.right) / integralBox.width,
    glyphs:[...new Set([...cards.map(node => node.querySelector("math").textContent).join("")])].join(""),
    captionsMatch:cards.every(node => node.querySelector("math").getAttribute("aria-label") === node.querySelector("figcaption").textContent),
    formulaSizes:cards.every(node => {
      const rect = node.querySelector("math").getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }),
  };
}

try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try { ready = await rawRequest(port, "/__codex_dev_ready") === 204; }
    catch (error) { if (error.code !== "ECONNREFUSED") throw error; }
    if (ready) break;
    await delay(50);
  }
  assert.ok(ready, "isolated math preview server is ready");
  for (const [name, engine] of Object.entries({ chromium, firefox, webkit })) {
    const browser = await engine.launch(name === "chromium"
      ? { executablePath:await findChrome(), args:["--no-sandbox"] } : {});
    try {
      const context = await browser.newContext({ viewport:{ width:1440, height:900 }, reducedMotion:"reduce" });
      const page = await context.newPage();
      const errors = [];
      const failedRequests = [];
      const progressWrites = [];
      page.on("pageerror", error => errors.push(error.message));
      page.on("response", response => {
        if (response.status() >= 400 && response.url().startsWith(base)) failedRequests.push(`${response.status()} ${response.url()}`);
      });
      page.on("request", request => {
        if (request.url().includes("/api/progress") && !["GET", "HEAD"].includes(request.method())) progressWrites.push(request.url());
      });
      await page.goto(base);
      await page.waitForFunction(() => document.body.dataset.accountType === "free");
      const session = await (await page.request.get(base + "api/auth/session")).json();
      await page.evaluate(id => localStorage.setItem(`tawjihi:rocky-first-run:v1:account:${id}`,
        JSON.stringify({ version:2, status:"complete" })), session.account.id);
      await page.goto(base + "?subject=mathematics");
      await page.locator("[data-roadmap-lesson]").first().waitFor();
      await page.evaluate(async source => {
        const { renderMarkdownDocument, mountMarkdownFeatures } = await import("./src/markdown/renderer.js");
        const controller = new AbortController();
        const content = document.querySelector("#lesson-content");
        content.innerHTML = '<style>.math-symbols-preview .markdown-rendered { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }.math-symbols-preview .markdown-rendered > :is(h1,h2,p) { grid-column:1 / -1; }.math-symbols-preview .markdown-rendered > h2 { margin:18px 0 0; } @media(max-width:760px) { .math-symbols-preview .markdown-rendered { grid-template-columns:minmax(0,1fr); } }</style><article class="math-symbols-preview"><div class="markdown-rendered">' + renderMarkdownDocument(source, { locale:"ar" }) + '</div></article>';
        mountMarkdownFeatures(content, { locale:"ar", signal:controller.signal });
        window.mathPreviewCleanup = () => controller.abort();
      }, mathSymbolsMarkdown());
      await page.locator(".math-symbols-preview .lesson-math-sample").first().waitFor();
      await page.evaluate(() => document.fonts.ready);
      const symbols = await page.evaluate(inspectSymbols);
      assert.equal(symbols.cards, MATH_SYMBOL_SAMPLES.length);
      assert.equal(symbols.math, MATH_SYMBOL_SAMPLES.length + 1);
      assert.equal(symbols.errors, 0);
      assert.deepEqual(symbols.namespaces, ["http://www.w3.org/1998/Math/MathML"]);
      const leftToRight = await page.evaluate(async () => {
        const { renderMarkdownDocument } = await import("./src/markdown/renderer.js");
        const host = document.createElement("div");
        host.dir = "rtl";
        host.style.cssText = "position:fixed;left:-1000px;top:0;width:180px;visibility:hidden";
        host.innerHTML = renderMarkdownDocument('```mathml\n<math dir="ltr"><mn>123456789012345678901234567890</mn></math>\n```');
        document.body.append(host);
        const scroll = host.querySelector(".lesson-math-scroll");
        const result = { direction:scroll.dir, tabIndex:scroll.tabIndex, overflow:scroll.scrollWidth > scroll.clientWidth,
          initial:scroll.scrollLeft, start:scroll.querySelector("math").getBoundingClientRect().left - scroll.getBoundingClientRect().left };
        host.remove();
        return result;
      });
      assert.equal(leftToRight.direction, "ltr");
      assert.equal(leftToRight.tabIndex, 0);
      assert.ok(leftToRight.overflow);
      assert.equal(leftToRight.initial, 0);
      assert.ok(leftToRight.start >= 0, "long Latin equations open at their beginning inside Arabic content");
      assert.equal(symbols.fonts.length, 1);
      assert.ok(symbols.fonts.every(font => font.status === "loaded"));
      assert.equal(symbols.exponentOnLeft, true, `${name}: Arabic powers belong on the left`);
      assert.ok(symbols.digitPositions[0] < symbols.digitPositions[1] && symbols.digitPositions[1] < symbols.digitPositions[2], `${name}: digit order must remain LTR`);
      assert.ok(symbols.arabicWordPositions[0] > symbols.arabicWordPositions[1], `${name}: joined Arabic function names must read RTL`);
      assert.ok(symbols.braceHeight >= symbols.casesHeight * 0.9, `${name}: the cases bracket must span both rows`);
      assert.ok(symbols.integralHeight >= 1.8 && symbols.integralHeight < 2.8,
        `${name}: the integral uses the visible display glyph, without an empty stretched assembly`);
      assert.ok(symbols.integralLowerGap < .65, `${name}: the lower integral limit attaches near the lower tip`);
      assert.equal(symbols.captionsMatch && symbols.formulaSizes, true);
      await writeFile(`${evidence}/${name}-symbols.json`, JSON.stringify(symbols, null, 2));
      for (const width of [1440,390]) {
        await page.setViewportSize({ width, height:900 });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
        assert.equal(await page.evaluate(() => [...document.querySelectorAll(".lesson-math-sample")].every(node => {
          const box = node.getBoundingClientRect();
          return box.left >= 0 && box.right <= innerWidth;
        })), true);
        await page.screenshot({ path:`${evidence}/${name}-${width}.png` });
      }
      // Inspect the mathematical shapes independently of the lesson's scrolling viewport.
      await page.setViewportSize({ width:1100, height:900 });
      await page.evaluate(() => {
        const gallery = document.createElement("div");
        gallery.id = "math-shape-evidence";
        Object.assign(gallery.style, { position:"absolute", top:"0", left:"0", width:"1100px", padding:"24px", boxSizing:"border-box", display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:"16px", background:"#fff", zIndex:"999" });
        for (const title of ["أس موجب على يسار المتغير", "جذر تربيعي عربي", "جذر تكعيبي", "المقارنات", "نهاية عند الصفر", "تكامل محدد", "مجموع بحدود", "مصفوفة عربية", "دالة متعددة التعريف"]) {
          const original = [...document.querySelectorAll(".lesson-math-sample")].find(node => node.querySelector("figcaption").textContent === title);
          gallery.append(original.cloneNode(true));
        }
        document.body.append(gallery);
      });
      await page.locator("#math-shape-evidence").screenshot({ path:`${evidence}/${name}-shapes.png` });
      await page.evaluate(() => document.querySelector("#math-shape-evidence").remove());
      assert.equal(await page.evaluate(async () => {
        const { renderMathML } = await import("./src/markdown/math.js");
        return !/onclick|onload|style=|<script|<img/.test(renderMathML('<math onclick="alert(1)"><mi style="color:red">س</mi></math>'))
          && renderMathML("<math><msup><mi>س</mi></math>").includes("lesson-math-error")
          && renderMathML('<math><mtext><img src="x" onerror="alert(1)"/></mtext></math>').includes("lesson-math-error");
      }), true);
      // Exercise real MCQ buttons using a disposable fixture, without publishing math questions.
      await page.evaluate(async () => {
        const { renderLesson } = await import("./src/ui/lesson-view.js");
        window.mathPreviewCleanup?.();
        window.mathUnexpectedSaves = 0;
        const formula = '<math dir="rtl"><msup><mi>س</mi><mn>٢</mn></msup></math>';
        const source = [":::mcq", "id: math-render-fixture", "title: اختبار العرض", 'question: الصيغة داخل السؤال: `mathml: ' + formula + '`',
          '- [x] square | `mathml: ' + formula + '`', '- [ ] root | `mathml: <math dir="rtl"><msqrt><mi>س</mi></msqrt></math>`',
          'explanation: صيغة داخل الشرح: `mathml: ' + formula + '`', "hint: اختبار العرض فقط.", ":::"].join("\n");
        window.mathFixtureCleanup = renderLesson(document.querySelector("#lesson-content"), "تجربة", { title:"اختبار العرض", language:"ar", authoringSource:source },
          {}).destroy;
      });
      await page.locator('[data-ui-lab-answer="square"] math').waitFor();
      assert.equal(await page.locator("[data-ui-lab-answer] math").count(), 2);
      for (const width of [1440,390]) {
        await page.setViewportSize({ width, height:900 });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
        await page.screenshot({ path:`${evidence}/${name}-choices-${width}.png` });
      }
      await page.locator('[data-ui-lab-answer="square"]').focus();
      await page.keyboard.press("Space");
      assert.equal(await page.locator('[data-ui-lab-answer="square"]').getAttribute("aria-pressed"), "true");
      await page.locator("[data-template-primary]").click();
      assert.equal(await page.evaluate(() => window.mathUnexpectedSaves), 0);
      await page.locator("[data-template-primary]").click();
      await page.locator('[data-completion-step="0"]').waitFor();
      assert.deepEqual(progressWrites, [], "the rendering preview must not write progress");
      await page.evaluate(() => window.mathFixtureCleanup());
      await page.goto(base + "?subject=ict&lesson=database-management&part=access-basics");
      await page.locator("[data-ui-lab-answer]").first().waitFor();
      assert.equal(await page.locator(".math-symbols-preview").count(), 0, "ICT retains its original first question");
      assert.deepEqual(errors, []);
      assert.deepEqual(failedRequests, []);
      console.log(`${name} ${browser.version()}: ${symbols.cards} symbols, RTL layout, digit order, desktop/mobile, MCQ keyboard selection and fixture isolation passed`);
      await context.close();
    } finally { await browser.close(); }
  }
  console.log(`Math rendering evidence: ${evidence}`);
} finally { await terminateProcess(server); }
