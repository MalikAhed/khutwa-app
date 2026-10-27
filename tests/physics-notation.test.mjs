import assert from "node:assert/strict";
import test from "node:test";
import katex from "katex";
import { PHYSICS_LESSONS } from "../src/data/lessons/physics/physics-course.js";
import { loadSubjectLesson } from "../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";

test("Physics numbers, SI units and Latin notation use valid LTR math on every question surface", async () => {
  let questions = 0, formulas = 0;
  for (const { id } of PHYSICS_LESSONS) {
    const lesson = await loadSubjectLesson("physics", id);
    const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
    assert.deepEqual(parsed.issues, [], id);
    for (const step of parsed.steps) {
      questions++;
      const content = step.content;
      const surfaces = step.type === "mcq"
        ? [content.prompt, content.example, content.correctFeedback, content.wrongFeedback, ...content.answers.map(answer => answer.text)]
        : [content.body, content.solution];
      for (const source of surfaces.filter(Boolean)) {
        for (const [, tex] of source.matchAll(/\\\(([\s\S]*?)\\\)/g)) {
          assert.doesNotThrow(() => katex.renderToString(tex, { output:"mathml", throwOnError:true, strict:"error" }), step.id);
          formulas++;
        }
        for (const [math] of source.matchAll(/<math\b[\s\S]*?<\/math>/g)) {
          assert.match(math, /^<math\b[^>]*\bdir="ltr"/, step.id);
          assert.doesNotMatch(math, /[٠-٩]/u, step.id);
          formulas++;
        }
        // Keep source links, image alternatives and list markers out of the
        // notation audit; their IDs/URLs and ordinary prose retain their format.
        const prose = source.replace(/```mathml[\s\S]*?```|`mathml:[\s\S]*?`|\\\([\s\S]*?\\\)|!\[[^\]]*\]\([^)]*\)|\]\([^)]*\)/g, "")
          .replace(/^\s*\d+[.)-](?=\s)/gm, "");
        assert.doesNotMatch(prose, /[A-Za-z0-9٠-٩α-ωΑ-Ω⁰¹²³⁴⁵⁶⁷⁸⁹₀-₉ℓ]/u,
          `${step.id}: unformatted notation in ${prose.slice(0, 160)}`);
      }
    }
  }
  assert.equal(questions, 560);
  assert.ok(formulas > 8000);
});
