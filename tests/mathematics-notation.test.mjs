import assert from "node:assert/strict";
import test from "node:test";
import { readdir, readFile } from "node:fs/promises";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";

test("every mathematics question and worked solution uses Arabic notation and RTL MathML", async () => {
  const directory = new URL("../src/data/lessons/mathematics/", import.meta.url);
  const files = (await readdir(directory)).filter(name => name.endsWith(".js") && name !== "math-course.js");
  let questions = 0, formulas = 0;
  for (const name of files) {
    const { lessonSource } = await import(new URL(name, directory));
    const parsed = parseLessonMarkdown(lessonSource, { published:true });
    assert.deepEqual(parsed.issues, [], name);
    questions += parsed.steps.length;
    for (const [formula] of lessonSource.matchAll(/<math\b[\s\S]*?<\/math>/g)) {
      formulas++;
      assert.match(formula, /^<math\b[^>]*\bdir="rtl"/, name);
      const text = formula.replace(/<[^>]+>|&[^;]+;/g, "");
      assert.doesNotMatch(text, /\p{Script=Latin}|[0-9]/u, `${name}: ${text}`);
      assert.doesNotMatch(text, /[/⁄∕÷]/u, `${name}: fractions must use mfrac: ${text}`);
    }
    const prose = lessonSource.replace(/<math\b[\s\S]*?<\/math>/g, "")
      .split("\n").filter(line => !/^(?:id|title|kicker|reference|answer-label):|^!\[/.test(line)).join("\n");
    assert.doesNotMatch(prose, /[٠-٩⁰¹²³⁴⁵⁶⁷⁸⁹₋₀₁₂₃₄₅₆₇₈₉′″]|(?<![\p{Script=Arabic}\p{Mark}])[سص](?![\p{Script=Arabic}\p{Mark}])/u,
      `${name}: numbers and variables in prose must use native MathML`);
    const visible = lessonSource
      .replace(/^id:.*$/gm, "")
      .replace(/^:::(?:mcq|exam-question)?$/gm, "")
      .replace(/^- \[[ x]\] [^|]+\|/gm, "")
      .replace(/^[a-z-]+:/gm, "")
      .replace(/\]\([^)]*\)/g, "]")
      .replace(/<[^>]+>|&[^;]+;|mathml/g, "");
    const foreign = visible.match(/\p{Script=Latin}|[0-9]/u);
    assert.ok(!foreign, `${name}: unexpected ${foreign?.[0]} near ${visible.slice(Math.max(0, foreign?.index - 40), (foreign?.index || 0) + 60)}`);
    // Source IDs remain ordinary stable identifiers; they are never localized.
    assert.match(await readFile(new URL(name, directory), "utf8"), /^id: math-/m);
  }
  assert.equal(files.length, 25);
  assert.ok(questions > 1500);
  assert.ok(formulas > 18000);
});
