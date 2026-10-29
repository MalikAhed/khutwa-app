import assert from "node:assert/strict";
import { mkdir, readFile } from "node:fs/promises";
import { chromium } from "playwright";
import { startPreviewServer } from "../../scripts/preview-server.mjs";
import { findChrome } from "./browser-session.mjs";
import { loadSubjectLesson, subjectLessonRegistry } from "../../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../../src/markdown/lesson-authoring.js";
import { questionExplanation } from "../../src/domain/question-explanations.js";

const samples = [];
for (const key of subjectLessonRegistry.keys()) {
  const [subject, lessonId] = key.split(":");
  const lesson = await loadSubjectLesson(subject, lessonId);
  for (const step of parseLessonMarkdown(lesson.authoringSource, { published:true }).steps) {
    const markdown = questionExplanation(step)?.markdown;
    if (markdown?.includes("«")) samples.push({ key:`${key}:${step.id}`, markdown, locale:subject === "english" ? "en" : "ar" });
  }
}
assert.ok(samples.length, "published explanations exercise angle quotations");
const server = await startPreviewServer({ root:process.cwd(), prefix:"/" });
const browser = await chromium.launch({ executablePath:await findChrome(), args:["--no-sandbox"] });
try {
  const page = await browser.newPage({ reducedMotion:"reduce" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  const index = await readFile("index.html", "utf8");
  const links = [...index.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(match => match[0].replace(/media="print"/g, 'media="all"')).join("");
  await page.route("**/explanation-highlight-check", route => route.fulfill({ contentType:"text/html", body:
    `<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><head>${links}</head><body><main><footer class="level-layout-actions"><button data-template-primary>متابعة</button></footer></main></body></html>` }));
  await page.goto(server.base + "explanation-highlight-check");
  const normalQuestion = await page.evaluate(async () => {
    const { renderMarkdownDocument } = await import("/src/markdown/renderer.js");
    const root = document.createElement("div");
    root.innerHTML = renderMarkdownDocument("معنى «المقاومية»", { locale:"ar" });
    return { text:root.textContent.trim(), highlights:root.querySelectorAll("mark").length };
  });
  assert.deepEqual(normalQuestion, { text:"معنى «المقاومية»", highlights:0 }, "question prose keeps its authored quotations");
  const failures = await page.evaluate(async samples => {
    const { renderMarkdownDocument } = await import("/src/markdown/renderer.js");
    return samples.flatMap(sample => {
      const original = document.createElement("div"), highlighted = document.createElement("div");
      original.innerHTML = renderMarkdownDocument(sample.markdown, { locale:sample.locale });
      highlighted.innerHTML = renderMarkdownDocument(sample.markdown, { locale:sample.locale, highlightQuotes:true });
      const preserved = root => [...root.querySelectorAll("code,math,a,img")].map(node => node.outerHTML);
      const unchanged = JSON.stringify(preserved(original)) === JSON.stringify(preserved(highlighted));
      const walker = document.createTreeWalker(original, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.parentElement.closest("code,pre,math")) node.textContent = node.textContent.replace(/[«»]/g, "");
      }
      const copy = highlighted.cloneNode(true);
      copy.querySelectorAll("code,pre,math").forEach(node => node.remove());
      return original.textContent === highlighted.textContent && unchanged && !/[«»]/.test(copy.textContent)
        ? [] : [{ key:sample.key, unchanged, remaining:copy.textContent.match(/.{0,50}[«»].{0,50}/g) }];
    });
  }, samples);
  assert.deepEqual(failures, [], "every affected explanation preserves its wording, code, math and links while highlighting quotations");
  const fixture = 'المقاومية تصف «نوع مادته»، ونميّزها عن «مقاومة السلك».\n\n«مصطلح **مهم** مع \\(x<5\\)» و«تعريف مع «مصطلح داخلي»».\n\n`«قيمة حرفية»`\n\n```sql\nSELECT Name FROM Student WHERE Name = \'«سارة»\';\n```';
  await page.evaluate(async markdown => {
    const { mountQuestionExplanation } = await import("/src/ui/lesson/question-explanation.js");
    mountQuestionExplanation({ host:document.querySelector("main"), signal:new AbortController().signal,
      explanation:{ isUnlocked:() => true, isIncluded:() => true, unlock:async () => ({ markdown }) } });
  }, fixture);
  await page.locator("[data-question-explain]").click();
  await page.locator('[data-explanation-body][aria-busy="false"]').waitFor();
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height:900 });
    await page.evaluate(() => document.fonts.ready);
    const result = await page.locator("[data-explanation-body]").evaluate(body => ({
      marks:[...body.querySelectorAll("mark")].map(node => node.textContent),
      color:getComputedStyle(body.querySelector("mark")).backgroundColor,
      code:[...body.querySelectorAll("code")].map(node => node.textContent),
      overflow:body.scrollWidth > body.clientWidth + 1,
    }));
    assert.ok(result.marks.includes("نوع مادته") && result.marks.includes("مقاومة السلك"));
    assert.equal(result.color, "rgb(255, 240, 163)");
    assert.ok(result.code.includes("«قيمة حرفية»") && result.code.some(text => text.includes("'«سارة»'")));
    assert.equal(result.overflow, false, `${width}px: explanation remains inside its reading surface`);
    if (process.env.BROWSER_SCREENSHOT_DIR) {
      await mkdir(process.env.BROWSER_SCREENSHOT_DIR, { recursive:true });
      await page.screenshot({ path:`${process.env.BROWSER_SCREENSHOT_DIR}/highlights-${width}.png` });
    }
  }
  await page.keyboard.press("Escape");
  await page.locator(".question-explanation-dialog").waitFor({ state:"detached" });
  assert.equal(await page.locator("[data-question-explain]").evaluate(node => node === document.activeElement), true);
  assert.deepEqual(errors, []);
  console.log(`${samples.length} published explanations checked; highlighted prose, literal code/math preservation, 390/1440px dialog and keyboard close passed.`);
} finally {
  await browser.close();
  await server.close();
}
