import test from "node:test";
import assert from "node:assert/strict";
import { ISLAMIC_LESSONS, ISLAMIC_UNIT_BANK } from "../src/data/lessons/islamic-education/islamic-bank.js";
import { ISLAMIC_LESSONS as CATALOG_LESSONS, ISLAMIC_LEGACY_LESSONS } from "../src/data/subject-catalog.js";
import { loadSubjectLesson } from "../src/data/lessons/subject-lesson-registry.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";

const EXPECTED_SOURCE_LESSONS = [1, 3, 4, 5, 7, 8, 9, 10, 12, 13, 16, 17, 20, 21, 22, 23, 24, 26];
const EXPECTED_QUESTION_COUNTS = [38, 30, 28, 26, 43, 21, 30, 26, 30, 41, 29, 29, 34, 28, 25, 25, 18, 31];
const RETAINED_SOURCE_LESSONS = [21, 22, 23, 24, 26];

test("Islamic course orders the 405 ZIP questions and preserves the five later lessons", async () => {
  assert.equal(ISLAMIC_LESSONS.length, 18);
  assert.deepEqual(ISLAMIC_LESSONS.map(lesson => lesson.sourceLesson), EXPECTED_SOURCE_LESSONS);
  assert.deepEqual(ISLAMIC_LESSONS.map(lesson => lesson.questionIds.length), EXPECTED_QUESTION_COUNTS);
  assert.deepEqual(CATALOG_LESSONS, ISLAMIC_LESSONS);
  assert.deepEqual(getSubjectRoadmap("islamic-education").units.map(unit => unit.lessons.length), [8, 2, 2, 2, 4]);

  const questions = Object.values(ISLAMIC_UNIT_BANK).flatMap(unit => unit.questions);
  const ids = new Set(questions.map(question => question.id));
  assert.equal(questions.length, 532);
  assert.equal(ids.size, questions.length);
  assert.equal(questions.every(question => ["mcq", "exam-question"].includes(question.type)), true);
  const imported = questions.filter(question => question.sourceId);
  const retained = questions.filter(question => RETAINED_SOURCE_LESSONS.includes(question.sourceLesson));
  assert.equal(imported.length, 405);
  assert.equal(retained.length, 127);
  assert.equal(imported.every(question => question.type === "mcq" && question.choices.length === 4 && question.answer >= 0 && question.answer < 4), true);
  assert.equal(imported.every(question => question.id === question.sourceId.replace("islamic-alawwal-", "islamic-2022-")), true);
  assert.equal(questions.filter(question => !RETAINED_SOURCE_LESSONS.includes(question.sourceLesson)).every(question => question.sourceId), true);
  assert.equal(ids.has("islamic-2022-p035-q10"), false, "the missing-stem source question stays excluded");
  assert.equal(questions.every(question => question.id.startsWith("islamic-2022-") || question.id.startsWith("islamic-book-") || question.id.startsWith("islamic-tasneef-2025-")), true);
  assert.equal(questions.every(question => EXPECTED_SOURCE_LESSONS.includes(question.sourceLesson)), true);

  for (const lesson of ISLAMIC_LESSONS) {
    const loaded = await loadSubjectLesson("islamic-education", lesson.id);
    assert.equal(loaded.status, "published");
    assert.equal(loaded.steps.length, lesson.questionIds.length || 1);
    assert.deepEqual(loaded.steps.map(step => step.id), lesson.questionIds);
    if (lesson.questionIds.length) {
      assert.ok(loaded.authoringSource.includes(":::mcq"));
      assert.equal(loaded.authoringSource.includes("reference: undefined"), false);
    } else {
      assert.match(loaded.authoringSource, /لا توجد أسئلة مطابقة/);
    }
  }

  for (const sourceLesson of EXPECTED_SOURCE_LESSONS.slice(0, 13)) {
    const lessonQuestions = imported.filter(question => question.sourceLesson === sourceLesson);
    const numbers = lessonQuestions.map(question => Number(question.sourceId.match(/-q(\d+)$/)[1]));
    const expected = Array.from({ length:lessonQuestions.length + (sourceLesson === 8 ? 1 : 0) }, (_, index) => index + 1)
      .filter(number => sourceLesson !== 8 || number !== 10);
    assert.deepEqual(numbers, expected, `source lesson ${sourceLesson} retains the question order`);
  }

  for (const legacy of ISLAMIC_LEGACY_LESSONS) {
    const loaded = await loadSubjectLesson("islamic-education", legacy.id);
    assert.deepEqual(loaded.steps.map(step => step.id), legacy.parts[0].questionIds);
  }
});
