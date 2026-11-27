import assert from "node:assert/strict";
import test from "node:test";
import katex from "katex";
import { PHYSICS_LESSONS } from "../src/data/lessons/physics/physics-course.js";
import { OUTSIDE_GAZA_LOADERS } from "../src/data/lessons/outside-gaza-loaders.js";
import { loadSubjectLesson } from "../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { renderLessonInline } from "../src/markdown/renderer.js";
import { usesWesternLessonNotation } from "../src/ui/lesson/shared.js";

test("Gaza and full Palestinian science questions isolate Western numerical choices", () => {
  const notationFor = subject => ({
    locale:"ar",
    westernNotation:usesWesternLessonNotation({ closest:() => ({ getAttribute:() => subject }) }),
  });
  for (const subject of ["physics", "outside-gaza-scientific-physics", "chemistry", "outside-gaza-scientific-chemistry"]) {
    const notation = notationFor(subject);
    assert.equal(renderLessonInline("−١٢٫٥", notation), '<bdi dir="ltr">−12.5</bdi>', subject);
    assert.equal(renderLessonInline("۳.۷", notation), '<bdi dir="ltr">3.7</bdi>', subject);
    assert.equal(renderLessonInline("75", notation), '<bdi dir="ltr">75</bdi>', subject);
  }
  assert.equal(renderLessonInline("75", notationFor("mathematics")), '<bdi dir="ltr">٧٥</bdi>');
});

test("Both physics banks use Western digits and valid notation on every question surface", async () => {
  let questions = 0, formulas = 0;
  const gaza = PHYSICS_LESSONS.map(({ id }) => ({ id, load:() => loadSubjectLesson("physics", id) }));
  const outside = [...OUTSIDE_GAZA_LOADERS].filter(([key]) => key.startsWith("outside-gaza-scientific-physics:"))
    .map(([id, loader]) => ({ id, load:async () => (await loader()).default }));
  const latex = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\x60\x60\x60latex[^\n]*\n([\s\S]*?)\x60\x60\x60/g;
  for (const { id, load } of [...gaza, ...outside]) {
    const lesson = await load();
    const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
    assert.deepEqual(parsed.issues, [], id);
    for (const step of parsed.steps) {
      questions++;
      const content = step.content;
      const surfaces = step.type === "mcq"
        ? [content.prompt, content.example, content.correctFeedback, content.wrongFeedback, ...content.answers.map(answer => answer.text)]
        : [content.body, content.finalAnswer, content.solution];
      for (const source of surfaces.filter(Boolean)) {
        assert.doesNotMatch(source, /[٠-٩۰-۹]/u, step.id);
        for (const [, inline, display, fenced] of source.matchAll(latex)) {
          const tex = inline ?? display ?? fenced;
          assert.doesNotThrow(() => katex.renderToString(tex, { output:"mathml", throwOnError:true, strict:"error" }), step.id);
          formulas++;
        }
        for (const [math] of source.matchAll(/<math\b[\s\S]*?<\/math>/g)) {
          assert.match(math, /^<math\b[^>]*\bdir="ltr"/, step.id);
          assert.doesNotMatch(math, /<mi\b[^>]*>[^<]*\p{Script=Arabic}/u, step.id);
          formulas++;
        }
        const prose = source.replace(latex, "").replace(/```mathml[\s\S]*?```|`mathml:[\s\S]*?`|!\[[^\]]*\]\([^)]*\)|\]\([^)]*\)/g, "")
          .replace(/^\s*(?:-\s+)?\d+[.)-](?=\s)/gm, "");
        // Written prompts can also use inline list markers before the lesson lays them out.
        const withoutListMarkers = step.type === "exam-question" && source === content.body && /:\s+1\.\s/.test(prose)
          ? prose.replace(/(?<=[:.]\s)\d+\.(?=\s)/g, "") : prose;
        assert.doesNotMatch(withoutListMarkers, /[A-Za-z0-9α-ωΑ-Ω⁰¹²³⁴⁵⁶⁷⁸⁹₀-₉ℓ]/u,
          `${step.id}: unformatted notation in ${withoutListMarkers.slice(0, 160)}`);
      }
    }
  }
  assert.equal(questions, 1_180);
  assert.ok(formulas > 8000);
});
