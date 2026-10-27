import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { loadSubjectLesson, subjectLessonRegistry } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { questionExplanation } from "../../src/domain/question-explanations.js";
import { findChrome, getAvailablePort, rawRequest, delay, terminateProcess } from "./browser-session.mjs";

const evidence = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/learn-explanation-formats";
await mkdir(evidence, { recursive:true });
const publishedExplanations = [];
for (const key of subjectLessonRegistry.keys()) {
  const [subjectId, lessonId] = key.split(":");
  const bank = await loadSubjectLesson(subjectId, lessonId);
  for (const step of parseLessonMarkdown(bank.authoringSource).steps) {
    const markdown = questionExplanation(step)?.markdown;
    if (!markdown) continue;
    const tableCount = markdown.match(/^\|(?:\s*:?-+:?\s*\|)+\s*$/gm)?.length || 0;
    publishedExplanations.push({ id:`${subjectId}:${step.id}`, markdown, tableCount,
      locale:subjectId === "english" ? "en" : "ar" });
  }
}
const publishedTables = publishedExplanations.filter(sample => sample.id.startsWith("ict:") && sample.tableCount);
assert.ok(publishedTables.length > 0, "the published ICT bank contains authored comparison tables");
const comparison = publishedTables.find(sample => /Single/.test(sample.markdown) && /Integer/.test(sample.markdown));
assert.ok(comparison, "the reported Integer/Single comparison remains authored content");

const fixture = [
  "# مقارنة أنواع البيانات",
  "نوع Integer يشغل 2 بايت، ونوع Single يشغل 4 بايت.",
  "Integer and Single are numeric types.",
  "نختار `Integer` للأعداد الصحيحة و`Single` للأعداد الكسرية.",
  "==معلومة **مهمة**==: هذا تمييز مرئي.",
  "| النوع | الاسم في البرنامج | السعة | الاستخدام | مثال |",
  "| --- | --- | --- | --- | --- |",
  "| عدد صحيح | `Integer` | **2 بايت** | أعداد صحيحة | `1234` |",
  "| عدد كسري | `Single` | **4 بايت** | أعداد كسرية | `1.25` |",
  "صيغة داخل السطر: \\(x^2 + 1\\)، وصيغة قصيرة $x=2$.",
  "$$",
  "\\frac{1}{2} + \\frac{1}{2} = 1",
  "$$",
  '```sql title="استعلام SQL" highlight="2"',
  "SELECT student_id, student_name",
  "FROM الطلبة",
  "WHERE mark >= 50;",
  "```",
  "- نقرأ اسم النوع أولًا.",
  "- ثم نقارن الحجم التخزيني.",
  "## قائمة مختلطة\n\n- بند عربي مع Integer.\n- Another English item.\n- بند عربي آخر.",
  "## خطوات بالإنجليزية\n\n1. Choose Integer.\n2. Compare Single.",
  "## قائمة تحقق\n\n- [x] اختر Integer.\n- [ ] قارن Single.",
].join("\n\n").replaceAll("|\n\n|", "|\n|");

const port = await getAvailablePort();
const base = `http://127.0.0.1:${port}/`;
const server = spawn(process.execPath, ["dev-server.mjs"], {
  env:{ ...process.env, PORT:String(port), LIVE_RELOAD:"0", DEV_AUTO_LOGIN:"1", ACCOUNTS_DATABASE_PATH:":memory:" },
  stdio:"ignore",
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
  assert.ok(ready, "isolated explanation format server is ready");
  browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
  const page = await browser.newPage({ viewport:{ width:1440, height:1000 }, reducedMotion:"reduce" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  if (process.env.EXPLANATION_AUDIT_PROGRESS) page.on("console", message => console.log(message.text()));
  await page.goto(base);
  await page.waitForFunction(() => document.body.dataset.accountType === "free");
  let totalTables = 0;
  const formatFailures = [];
  for (let offset = 0; offset < publishedExplanations.length; offset += 250) {
    if (process.env.EXPLANATION_AUDIT_PROGRESS) console.log(`Rendering explanations ${offset + 1}–${Math.min(offset + 250, publishedExplanations.length)}.`);
    const results = await page.evaluate(async ({ samples, progress }) => {
      const { renderMarkdownDocument } = await import("./src/markdown/renderer.js");
      return samples.map(sample => {
        if (progress) console.log(sample.id);
        const host = document.createElement("div");
        host.innerHTML = renderMarkdownDocument(sample.markdown, { locale:sample.locale });
        return { id:sample.id, tableCount:host.querySelectorAll("table").length,
          expected:sample.tableCount, invalidMath:host.querySelectorAll(".lesson-math-error").length,
          leakedTable:[...host.querySelectorAll("p")].some(p => /^\|(?:[^\n|]*\|){2,}\s*$/m.test(p.textContent)) };
      });
    }, { samples:publishedExplanations.slice(offset, offset + 250), progress:process.env.EXPLANATION_AUDIT_PROGRESS === "verbose" });
    for (const result of results) {
      totalTables += result.tableCount;
      if (result.tableCount < result.expected || result.invalidMath || result.leakedTable) formatFailures.push(result);
    }
  }
  console.log(`Rendered ${publishedExplanations.length} canonical explanations and ${totalTables} tables.`);
  assert.deepEqual(formatFailures, [], "all canonical explanations render authored tables and formulas without leaking pipe syntax");
  const mountSource = markdown => page.evaluate(async markdown => {
    const { mountQuestionExplanation } = await import("./src/ui/lesson/question-explanation.js");
    const host = document.createElement("div");
    host.id = "explanation-format-fixture";
    host.innerHTML = '<div class="level-layout-actions"><button type="button" data-template-primary>متابعة</button></div>';
    document.body.append(host);
    const controller = new AbortController();
    mountQuestionExplanation({ host, locale:"ar", signal:controller.signal,
      explanation:{ isUnlocked:() => true, unlock:async () => ({ markdown }) } });
    window.explanationFormatCleanup = () => { controller.abort(); host.remove(); };
    host.querySelector("[data-question-explain]").click();
  }, markdown);
  await mountSource(comparison.markdown);
  const sheet = page.locator(".question-explanation-dialog");
  await sheet.locator('[data-explanation-body][aria-busy="false"]').waitFor();
  for (const width of [1440,390,320]) {
    await page.setViewportSize({ width, height:1000 });
    assert.ok(await sheet.evaluate(node => {
      const body = node.querySelector("[data-explanation-body]");
      return body.scrollWidth <= body.clientWidth + 1 && document.documentElement.scrollWidth <= innerWidth;
    }), `${width}px: the published Integer/Single explanation stays inside the screen`);
    await page.screenshot({ path:`${evidence}/published-integer-single-${width}.png` });
  }
  await page.keyboard.press("Escape");
  await sheet.waitFor({ state:"detached" });
  await page.evaluate(() => window.explanationFormatCleanup());
  await mountSource(fixture);
  await sheet.locator('[data-explanation-body][aria-busy="false"]').waitFor();
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await sheet.locator("table").count(), 1);
  assert.equal(await sheet.locator("tbody tr").count(), 2);
  assert.equal(await sheet.locator('thead th[scope="col"]').count(), 5);
  assert.equal(await sheet.locator("mark strong").textContent(), "مهمة");
  assert.equal(await sheet.locator("math").count(), 3);
  assert.equal(await sheet.locator(".lesson-math-error").count(), 0);
  assert.equal(await sheet.locator(".markdown-code-line.is-highlighted").count(), 1);
  const checklist = await sheet.locator('input[type="checkbox"]').evaluateAll(inputs => inputs.map(input => ({
    disabled:input.disabled, checked:input.checked, label:input.getAttribute("aria-label"), text:input.closest("li").textContent.trim(),
  })));
  assert.equal(checklist.length, 2);
  assert.deepEqual(checklist.map(input => input.checked), [true, false]);
  assert.ok(checklist.every(input => input.disabled && input.label === input.text), "rendered checklist items retain their accessible names and disabled state");
  const directions = await sheet.evaluate(node => {
    const prose = [...node.querySelectorAll("p")].find(p => p.textContent.startsWith("نوع Integer"));
    const englishParagraph = [...node.querySelectorAll("p")].find(p => p.textContent.startsWith("Integer and Single"));
    const english = [...prose.querySelectorAll('bdi[dir="ltr"]')].map(term => term.textContent);
    const code = [...node.querySelectorAll("p code")].map(term => getComputedStyle(term).direction);
    const sql = node.querySelector("pre");
    const arabic = sql.querySelector('bdi[dir="rtl"]');
    const font = getComputedStyle(node.querySelector(".markdown-rendered")).fontFamily;
    return { english, code, proseDirection:getComputedStyle(prose).direction, englishDirection:getComputedStyle(englishParagraph).direction,
      sql:getComputedStyle(sql).direction, arabic:arabic?.textContent, font,
      mathFont:[...node.querySelectorAll("math")].map(math => getComputedStyle(math).fontFamily) };
  });
  assert.ok(directions.english.includes("Integer") && directions.english.includes("Single"), "English terms are isolated inside Arabic prose");
  assert.ok(directions.code.every(direction => direction === "ltr"), "Latin inline code keeps LTR direction");
  assert.equal(directions.proseDirection, "rtl");
  assert.equal(directions.englishDirection, "ltr", "an English-only paragraph finds its own reading direction in an Arabic dialog");
  assert.equal(directions.sql, "ltr");
  assert.equal(directions.arabic, "الطلبة", "Arabic identifiers retain RTL inside SQL");
  assert.ok(directions.font.includes("Amiri"));
  assert.ok(directions.mathFont.every(font => /Math|Amiri/.test(font)), "equations retain a mathematical font");
  const emphasis = await page.evaluate(async () => {
    const { renderMarkdownDocument } = await import("./src/markdown/renderer.js");
    const { highlightEnglishText } = await import("./src/ui/lesson/english-text.js");
    const host = document.createElement("div");
    host.innerHTML = renderMarkdownDocument("اختر Integer أو Single.", { locale:"ar" });
    highlightEnglishText(host);
    highlightEnglishText(host);
    return { nested:host.querySelectorAll("bdi bdi").length,
      terms:[...host.querySelectorAll(".lesson-english-term")].map(term => term.textContent) };
  });
  assert.deepEqual(emphasis, { nested:0, terms:["Integer", "Single"] }, "question emphasis reuses existing direction wrappers and is idempotent");
  const safety = await page.evaluate(async () => {
    const { renderMarkdownDocument } = await import("./src/markdown/renderer.js");
    const host = document.createElement("div");
    host.innerHTML = renderMarkdownDocument('==safe== <img src="x" onerror="alert(1)"><script>alert(2)</script> [bad](javascript:alert(3))', { locale:"ar" });
    return { mark:host.querySelector("mark")?.textContent, scripts:host.querySelectorAll("script").length,
      unsafe:[...host.querySelectorAll("*")].some(node => [...node.attributes].some(attribute => /^on/i.test(attribute.name) || /javascript:/i.test(attribute.value))) };
  });
  assert.deepEqual(safety, { mark:"safe", scripts:0, unsafe:false }, "formatting preserves sanitizer protections");
  for (const width of [1440,390,320]) {
    await page.setViewportSize({ width, height:1000 });
    const layout = await sheet.evaluate(node => {
      const body = node.querySelector("[data-explanation-body]");
      const wrapper = node.querySelector(".markdown-table-scroll");
      const bounds = wrapper.getBoundingClientRect();
      return { pageOverflow:document.documentElement.scrollWidth > innerWidth,
        bodyOverflow:body.scrollWidth > body.clientWidth + 1, left:bounds.left, right:bounds.right,
        wrapperOverflow:wrapper.scrollWidth > wrapper.clientWidth, role:wrapper.getAttribute("role"),
        label:wrapper.getAttribute("aria-label"), tabIndex:wrapper.tabIndex };
    });
    await page.screenshot({ path:`${evidence}/formats-${width}.png` });
    assert.equal(layout.pageOverflow || layout.bodyOverflow, false, `${width}px: wide content scrolls within its own region: ${JSON.stringify(layout)}`);
    assert.ok(layout.left >= 0 && layout.right <= width + 1, `${width}px: tables stay inside the viewport`);
    assert.equal(layout.role, "region");
    assert.ok(layout.label);
    assert.equal(layout.tabIndex, 0);
    if (width < 400) assert.equal(layout.wrapperOverflow, true, "wide mobile tables can scroll without collapsing columns");
  }
  const lists = await sheet.evaluate(node => [...node.querySelectorAll("ul,ol")].map(list => ({
    direction:getComputedStyle(list).direction,
    items:[...list.children].filter(item => item.tagName === "LI").map(item => ({ direction:getComputedStyle(item).direction,
      text:item.textContent.trim(), englishReadable:Boolean(item.querySelector('bdi[dir="ltr"]')) || [...item.querySelectorAll('[dir="auto"]')].some(text => getComputedStyle(text).direction === "ltr") })),
  })));
  assert.ok(lists.every(list => list.items.every(item => item.direction === list.direction)), "tight and loose list markers align with their list padding");
  assert.ok(lists.flatMap(list => list.items).filter(item => /^(Another|Choose|Compare)/.test(item.text))
    .every(item => item.direction === "ltr" || item.englishReadable), "English list text retains its reading direction inside Arabic explanations");
  await sheet.locator("[data-explanation-body]").evaluate(node => { node.scrollTop = node.scrollHeight; });
  await page.screenshot({ path:`${evidence}/formats-lists-320.png` });
  const scroll = sheet.locator(".markdown-table-scroll");
  await scroll.focus();
  assert.equal(await scroll.evaluate(node => node === document.activeElement), true, "the table is keyboard reachable");
  await page.keyboard.press("ArrowLeft");
  await page.waitForFunction(() => document.querySelector(".markdown-table-scroll").scrollLeft !== 0);
  await page.keyboard.press("Escape");
  await sheet.waitFor({ state:"detached" });
  assert.equal(await page.locator("#explanation-format-fixture [data-question-explain]").evaluate(node => node === document.activeElement), true);
  await page.evaluate(() => window.explanationFormatCleanup());
  assert.deepEqual(errors, []);
  console.log(`${publishedExplanations.length} canonical explanations (${totalTables} tables; ${publishedTables.length} ICT table explanations), highlights, LaTex, bidi, sanitization, keyboard and desktop/mobile layouts passed. Evidence: ${evidence}`);
} finally {
  await browser?.close();
  await terminateProcess(server);
}
