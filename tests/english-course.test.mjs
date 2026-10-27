import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { ENGLISH_UNITS, ENGLISH_LESSONS } from "../src/data/lessons/english/english-course.js";
import { getCourseSubject } from "../src/data/course.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { loadSubjectLesson, loadSubjectLessonPart } from "../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { readRoute } from "../src/app/route.js";
import { lessonLocale } from "../src/ui/lesson/shared.js";

const coverage = JSON.parse(await readFile(new URL("../src/data/lessons/english/source-coverage.json", import.meta.url)));
const lessons = await Promise.all(ENGLISH_LESSONS.map(async catalog => {
  const lesson = await loadSubjectLesson("english", catalog.id);
  const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
  return { catalog, lesson, parsed };
}));

test("English is unlocked with the supplied original units and distinct curriculum lessons", () => {
  assert.equal(getCourseSubject("english").status, "available");
  const roadmap = getSubjectRoadmap("english");
  assert.equal(roadmap.questionsOnly, true);
  assert.deepEqual(ENGLISH_UNITS.map(unit => unit.number), [1, 2, 3, 4, 7, 8, 9, 10, 11]);
  assert.deepEqual(roadmap.units.map(unit => unit.id), ENGLISH_UNITS.map(unit => unit.id));
  assert.equal(ENGLISH_LESSONS.length, 22);
  for (const unit of ENGLISH_UNITS) {
    assert.deepEqual(roadmap.units.find(candidate => candidate.id === unit.id).lessons.map(lesson => lesson.id),
      ENGLISH_LESSONS.filter(lesson => lesson.unit === unit.number).map(lesson => lesson.id));
  }
});

test("all available source tasks retain unique IDs, original formats and native question bookmarks", async () => {
  const ids = [];
  const types = { mcq:0, "exam-question":0 };
  for (const { catalog, lesson, parsed } of lessons) {
    assert.deepEqual(parsed.issues, [], catalog.id);
    assert.equal(lessonLocale(lesson), "en");
    assert.equal(parsed.steps.length, catalog.questionCount);
    assert.deepEqual(parsed.steps.map(step => step.id), catalog.parts.flatMap(part => part.questionIds));
    for (const step of parsed.steps) {
      ids.push(step.id);
      assert.ok(step.type in types);
      types[step.type] += 1;
      assert.ok(step.content.reference.includes("PDF p."));
      assert.doesNotMatch(JSON.stringify(step.content), /source\/english-collection-2023\.pdf/);
      assert.doesNotMatch(JSON.stringify(step.content), /\*\*(?:Answer review|Provenance):/);
      if (step.type === "exam-question") assert.equal(step.content.answerLabel, "Reviewed answer and explanation");
    }
    for (const part of catalog.parts) {
      const selected = await loadSubjectLessonPart("english", catalog.id, part.id);
      assert.deepEqual(selected.steps.map(step => step.id), part.questionIds);
      const route = readRoute(`?subject=english&lesson=${catalog.id}&part=${part.id}&question=${part.questionIds[0]}`);
      assert.equal(route.question, part.questionIds[0]);
    }
  }
  assert.equal(ids.length, 1229);
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(types, { mcq:339, "exam-question":890 });
  assert.equal(ids.length, coverage.publishedQuestionCount);
  assert.equal(ids.length + coverage.excludedQuestions.length, coverage.sourceQuestionCount);
  assert.equal(coverage.excludedQuestions.filter(item => item.category === "diagram").length, 7);
  assert.equal(coverage.excludedQuestions.filter(item => item.category === "uncertain").length, 107);
  for (const excluded of coverage.excludedQuestions) {
    assert.equal(ids.includes(excluded.id), false);
    assert.ok(excluded.reason);
  }
});

test("reading questions carry complete shared passages on their own fronts", () => {
  for (const { catalog, parsed } of lessons.filter(item => item.catalog.kind === "reading")) {
    for (const step of parsed.steps) {
      const front = step.type === "mcq" ? step.content.example : step.content.body;
      assert.ok(front.length > 400, `${catalog.id}:${step.id} has its complete passage`);
    }
  }
  const find = id => lessons.flatMap(item => item.parsed.steps).find(step => step.id === id);
  const email = find("eng-2023-p007-qtext1-3-1");
  assert.match(email.content.example, /Hi everyone[\s\S]*Love\nMahmoud/);
  const stories = find("eng-2023-p033-qr1-a-1");
  for (const text of ["bananas", "Jan", "complete stranger"]) assert.ok(stories.content.body.includes(text));
  const fullFootball = find("eng-2023-p094-qsuggested-a-2");
  assert.match(fullFootball.content.body, /Gareth Bale[\s\S]*250,000/);
  assert.match(fullFootball.content.solution, /young footballers get very high salaries/);
});
