import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { ARABIC_UNITS, ARABIC_LESSONS } from "../src/data/lessons/arabic/arabic-course.js";
import { getCourseSubject } from "../src/data/course.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { loadSubjectLesson, loadSubjectLessonPart, subjectLessonRegistry } from "../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { getSubjectPartAccess } from "../src/domain/subject-access.js";
import { readRoute } from "../src/app/route.js";
import { lessonLocale } from "../src/ui/lesson/shared.js";

const coverage = JSON.parse(await readFile(new URL("../src/data/lessons/arabic/source-coverage.json", import.meta.url)));
const loaded = await Promise.all(ARABIC_LESSONS.filter(lesson => lesson.questionCount).map(async catalog => {
  const lesson = await loadSubjectLesson("arabic", catalog.id);
  return { catalog, lesson, parsed:parseLessonMarkdown(lesson.authoringSource, { published:true }) };
}));
const steps = loaded.flatMap(item => item.parsed.steps);

test("Arabic opens in the six Gaza units with the answered lessons in the supplied order", () => {
  assert.equal(getCourseSubject("arabic").status, "available");
  const roadmap = getSubjectRoadmap("arabic");
  assert.equal(roadmap.questionsOnly, true);
  assert.deepEqual(ARABIC_UNITS.map(unit => unit.number), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(roadmap.units.map(unit => unit.lessons.length), [3, 3, 3, 2, 3, 2]);
  assert.deepEqual(roadmap.units.flatMap(unit => unit.lessons.map(lesson => lesson.label)), coverage.lessonSlots.filter(slot => slot.source_status === "matched").map(slot => slot.title));
  assert.deepEqual(ARABIC_LESSONS.map(lesson => lesson.questionCount), [35, 28, 12, 29, 31, 18, 33, 36, 26, 0, 33, 24, 25, 29, 22, 20, 11, 0]);
  for (const lesson of ARABIC_LESSONS.filter(lesson => !lesson.questionCount)) {
    assert.equal(lesson.label, "التعبير");
    assert.equal(getSubjectPartAccess(roadmap, { lessonId:lesson.id, partId:lesson.parts[0].id }), null);
    assert.equal(subjectLessonRegistry.has(`arabic:${lesson.id}`), false);
  }
});

test("Arabic retains 412 canonical source questions, original formats and native question links", async () => {
  assert.equal(loaded.length, 16);
  assert.equal(steps.length, 412);
  assert.equal(new Set(steps.map(step => step.id)).size, 412);
  assert.equal(steps.filter(step => step.type === "mcq").length, 99);
  assert.equal(steps.filter(step => step.type === "exam-question").length, 313);
  for (const { catalog, lesson, parsed } of loaded) {
    assert.equal(lessonLocale(lesson), "ar");
    assert.deepEqual(parsed.issues, []);
    const expected = coverage.questions.filter(question => question.unit === catalog.unit && question.lesson_order === catalog.order);
    assert.deepEqual(parsed.steps.map(step => [step.id, step.type]), expected.map(question => [question.id, question.type]));
    assert.deepEqual(parsed.steps.map(step => step.id), catalog.parts.flatMap(part => part.questionIds));
    assert.equal(parsed.steps.length, catalog.questionCount);
    assert.doesNotMatch(lesson.authoringSource, /\.\.\/\.\.\/|source-reference\.md/);
    for (const step of parsed.steps) {
      assert.match(step.content.reference, /صفحة PDF \d+/);
      if (step.type === "mcq") {
        assert.equal(step.content.answers.length, 4);
        assert.equal(step.content.answers.filter(answer => answer.correct).length, 1);
      } else {
        assert.ok(step.content.body.trim() && step.content.solution.trim());
      }
    }
    const part = catalog.parts[0];
    assert.deepEqual((await loadSubjectLessonPart("arabic", catalog.id, part.id)).steps.map(step => step.id), part.questionIds);
    assert.equal(readRoute(`?subject=arabic&lesson=${catalog.id}&part=${part.id}&question=${part.questionIds.at(-1)}`).question, part.questionIds.at(-1));
  }
  const ids = new Set(steps.map(step => step.id));
  assert.equal(coverage.sourceQuestionCount, steps.length + coverage.excludedQuestions.length);
  assert.equal(coverage.excludedQuestions.length, 14);
  for (const item of [...coverage.excludedQuestions, ...coverage.outOfScopeItems]) assert.equal(ids.has(item.id), false);
  const duplicates = coverage.excludedQuestions.filter(item => item.disposition === "duplicate");
  assert.equal(duplicates.length, 2);
  for (const item of duplicates) assert.ok(ids.has(item.canonicalId));
});

test("Arabic keeps every shared passage on its dependent written-question fronts", () => {
  assert.equal(coverage.passages.length, 55);
  for (const passage of coverage.passages) {
    const lesson = loaded.find(({ catalog }) => catalog.unit === passage.unit && catalog.order === passage.lesson_order);
    assert.ok(lesson.parsed.steps.some(step => (step.content.body || step.content.example || "").includes(passage.text)), passage.id);
  }
  const first = steps.find(step => step.id === "arabic-p007-written-q01-a");
  assert.match(first.content.body, /لَقَدْ كَانَ فِي يُوسُفَ[\s\S]*فَاعِلِينَ/);
});

test("Arabic preserves the 11 scansion crops and the corrected explanation evidence", async () => {
  const manifest = JSON.parse(await readFile(new URL("../assets/lessons/arabic/source-crops/sources.json", import.meta.url)));
  const referenced = new Set(loaded.flatMap(({ lesson }) => [...lesson.authoringSource.matchAll(/!\[[^\]]*\]\((assets\/[^)]+)\)/g)].map(match => match[1])));
  assert.equal(manifest.crops.length, 11);
  const evidence = JSON.parse(await readFile(new URL("../assets/lessons/curriculum-evidence/sources.json", import.meta.url)));
  const known = new Set([...manifest.crops.map(crop => crop.file), ...evidence.assets.map(asset => asset.file)]);
  for (const file of referenced) assert.ok(known.has(file), file);
  for (const crop of manifest.crops) {
    const bytes = await readFile(new URL(`../${crop.file}`, import.meta.url));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), crop.sha256);
    assert.ok(crop.clips.every(clip => clip.page > 0 && clip.rect.length === 4));
  }
});
