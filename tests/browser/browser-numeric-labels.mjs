import assert from "node:assert/strict";
import { chromium, webkit } from "playwright";
import { startPreviewServer } from "../../scripts/preview-server.mjs";
import { findChrome } from "./browser-session.mjs";

const server = await startPreviewServer({ root:process.cwd(), prefix:"/" });
try {
  for (const [name, engine] of Object.entries({ chromium, webkit })) {
    const browser = await engine.launch(name === "chromium" ? { executablePath:await findChrome(), args:["--no-sandbox"] } : {});
    try {
      const page = await browser.newPage();
      await page.route("**/numeric-check", route => route.fulfill({ contentType:"text/html", body:
        '<!doctype html><html dir="rtl"><meta charset="utf-8"><style>body{font:32px sans-serif}button{display:block;margin:12px;font:inherit;direction:rtl}</style><body></body></html>' }));
      await page.goto(server.base + "numeric-check");
      for (const width of [390, 1440]) {
        await page.setViewportSize({ width, height:900 });
        const results = await page.evaluate(async () => {
          const { renderLessonInline } = await import("/src/markdown/renderer.js");
          const values = ["-5.5", "+12", "−12,5", "−١٢٫٥", "−۱۲٫۵", "5.5", "  -5.5  "];
          document.body.replaceChildren();
          const labels = values.map(value => {
            const button = document.createElement("button");
            button.innerHTML = renderLessonInline(value, { locale:"ar" });
            document.body.append(button);
            const bdi = button.querySelector("bdi");
            const text = bdi?.firstChild;
            const signIndex = value.search(/[+−-]/);
            const box = index => {
              const range = document.createRange();
              range.setStart(text, index); range.setEnd(text, index + 1);
              const rect = range.getBoundingClientRect();
              return { x:rect.x, width:rect.width };
            };
            return { value, text:button.textContent, direction:bdi && getComputedStyle(bdi).direction,
              sign:signIndex >= 0 && text ? box(signIndex) : null,
              digit:signIndex >= 0 && text ? box(signIndex + 1) : null };
          });
          const sentence = renderLessonInline("الناتج -5.5 متر.", { locale:"ar" });
          return { labels, sentence };
        });
        for (const label of results.labels) {
          assert.equal(label.text, label.value, `${name} ${width}: preserve authored number`);
          assert.equal(label.direction, "ltr", `${name} ${width}: isolate ${label.value}`);
          if (label.sign) {
            assert.ok(label.sign.width > 0, `${name} ${width}: sign has visible bounds`);
            assert.ok(label.sign.x < label.digit.x, `${name} ${width}: sign remains left of ${label.value.trim()}`);
          }
        }
        assert.equal(results.sentence, "الناتج -5.5 متر.", "whole sentences keep existing mixed-text handling");
      }
      console.log(`${name}: standalone numeric labels preserve sign placement at390/1440px.`);
    } finally { await browser.close(); }
  }
} finally { await server.close(); }
