import assert from "node:assert/strict";
import test from "node:test";
import { getCourseSubjects } from "../src/data/course.js";
import { getCurrentSubjectRoadmap, getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { loadSubjectLesson, loadSubjectLessonPart } from "../src/data/lessons/subject-lesson-registry.js";
import { getQuestionXp, resolveQuestionLocation } from "../src/domain/question-rewards.js";
import { emptyPart, homeLearningSummary, partKey } from "../src/domain/subject-progress.js";
import { readRoute } from "../src/app/route.js";
import { isOutsideGazaMath } from "../src/data/lessons/outside-gaza/math-roadmaps.js";
import { getLessonQuestionProgress } from "../src/domain/subject-question-progress.js";
import { subscriptionCovers } from "../src/domain/subscription-access.js";
import { SHARED_DUPLICATE_QUESTIONS } from "../src/data/lessons/outside-gaza/shared-duplicate-questions.js";
import { FULL_BOOK_HYDROGEN_QUESTIONS } from "../src/data/lessons/chemistry/chemistry-course.js";
import { DUPLICATE_LOCATIONS } from "../src/data/question-duplicate-locations.js";
import { resolveDuplicateQuestionLink } from "../src/data/question-duplicates.js";

const trackSubjects = path => getCourseSubjects({ curriculum:"full-palestinian", path });
const lessons = roadmap => roadmap.units.flatMap(unit => unit.lessons);

test("both full Palestinian tracks show textbook lessons with valid saved question and reward locations", async () => {
  for (const track of ["scientific", "literary"]) {
    const active = new Set();
    for (const { id:subjectId } of trackSubjects(track)) {
      const imported = [];
      for (const lesson of lessons(getCurrentSubjectRoadmap(subjectId))) {
        assert.doesNotMatch(lesson.label, /المجموعة|^[٠-٩0-9]+[-.][٠-٩0-9]+ ·/);
        assert.ok(lesson.parts.length, lesson.id);
        const ids = lesson.parts.flatMap(part => part.questionIds);
        assert.deepEqual((await loadSubjectLesson(subjectId, lesson.id)).steps.map(step => step.id), ids);
        if (lesson.bookNumber) assert.match(lesson.pages, /^\d+(?:–\d+)?$/);
        for (const part of lesson.parts) {
          if (part.source.subjectId === subjectId) imported.push(...part.questionIds);
          for (const stepId of part.questionIds) {
            const published = { ...part.source, stepId };
            assert.deepEqual(resolveQuestionLocation(published), published);
            assert.ok(getQuestionXp(published) > 0);
            assert.ok(!active.has(stepId), stepId);
            active.add(stepId);
          }
        }
      }
      if (!isOutsideGazaMath(subjectId)) {
        const publishedSteps = lessons(getSubjectRoadmap(subjectId)).flatMap(lesson => lesson.parts.flatMap(part =>
          part.questionIds.filter(stepId => !resolveDuplicateQuestionLink({ subjectId, lessonId:lesson.id, partId:part.id, stepId }))));
        assert.deepEqual(new Set(imported), new Set(publishedSteps));
      }
    }
  }
});

test("Elmi Math 2 reuses Gaza questions and keeps prior imports addressable with their original rewards", async () => {
  const before = "outside-gaza-scientific-math";
  const after = "outside-gaza-scientific-math-2";
  assert.deepEqual(getCurrentSubjectRoadmap(before).units.map(unit => unit.id), ["unit-1", "unit-2"]);
  const math2 = getCurrentSubjectRoadmap(after);
  assert.deepEqual(math2.units.map(unit => unit.id), ["unit-3", "unit-4", "unit-5"]);
  const [matrixLesson] = math2.units[0].lessons;
  assert.match(matrixLesson.label, /المصفوفة/);
  assert.equal(matrixLesson.pages, "88–92");
  const [part] = matrixLesson.parts;
  const stepId = part.questionIds[0];
  const shared = { ...part.source, stepId };
  assert.equal(shared.subjectId, "mathematics-2");
  assert.equal(subscriptionCovers([after], shared), true);
  const route = new URLSearchParams({ subject:after, lesson:matrixLesson.id, part:part.id, question:stepId });
  assert.equal(readRoute(route.toString()).question, stepId);
  assert.deepEqual((await loadSubjectLessonPart(after, matrixLesson.id, part.id)).steps.map(step => step.id), part.questionIds);
  const raw = getSubjectRoadmap(before).units[2].lessons[0];
  const earlierId = raw.parts[0].questionIds.find(id => /-p005-/.test(id));
  const archived = { subjectId:before, lessonId:raw.id, partId:"practice", stepId:earlierId };
  const previousRoute = { subject:after, lesson:matrixLesson.id, part:raw.id, question:earlierId };
  const destination = readRoute(new URLSearchParams(previousRoute).toString());
  assert.equal(destination.subject, before);
  assert.equal(destination.lesson, archived.lessonId);
  assert.equal(destination.part, archived.partId);
  assert.equal(destination.question, earlierId);
  const xp = getQuestionXp(shared), archivedXp = getQuestionXp(archived);
  const records = new Map([[partKey(shared), { ...emptyPart(), rewardXp:xp, completedStepIds:[stepId],
    review:[{ stepId, misses:2, active:true, solved:true }] }],
  [partKey(archived), { ...emptyPart(), rewardXp:archivedXp, completedStepIds:[earlierId],
    review:[{ stepId:earlierId, misses:0, active:false, solved:true }] }]]);
  const snapshot = homeLearningSummary(records, [getSubjectRoadmap(before), getSubjectRoadmap(after)]);
  assert.equal(snapshot.subjects[before].currentQuestionsTotal, 997);
  assert.equal(snapshot.subjects[after].currentQuestionsTotal, 1025);
  assert.equal(snapshot.subjects[before].currentQuestionsSolved, 0);
  assert.equal(snapshot.subjects[after].currentQuestionsSolved, 1);
  assert.equal(snapshot.questionsSolved, 1);
  assert.equal(snapshot.mustReviewCount, 1);
  assert.equal(snapshot.totalXp, xp + archivedXp);
});

test("the full curriculum restores partial fractions and omits Christian Education from all four paths", () => {
  const fullMath2 = getCurrentSubjectRoadmap("outside-gaza-scientific-math-2");
  const partial = lessons(fullMath2).find(lesson => lesson.id === "unit-4-partial-fractions");
  assert.equal(partial.pages, "148–152");
  assert.equal(getLessonQuestionProgress(partial).total, 35);
  const gazaMethods = lessons(getCurrentSubjectRoadmap("mathematics-2")).find(lesson => lesson.id === "integration-methods");
  assert.equal(getLessonQuestionProgress(gazaMethods).total, 168);
  const literaryMath = getCurrentSubjectRoadmap("outside-gaza-literary-math");
  assert.equal(lessons(literaryMath).reduce((sum, lesson) => sum + getLessonQuestionProgress(lesson).total, 0), 527);
  for (const curriculum of ["gaza", "full-palestinian"]) for (const path of ["scientific", "literary"]) {
    assert.equal(getCourseSubjects({ curriculum, path }).some(subject => subject.id.endsWith("-christian-education")), false);
  }
});

test("full practice reuses the missing Gaza questions with their original part, rewards and access", async () => {
  for (const [sourceId, fullIds] of [
    ["chemistry", ["outside-gaza-scientific-chemistry"]],
    ["physics", ["outside-gaza-scientific-physics"]],
    ["biology", ["outside-gaza-scientific-biology"]],
    ["adabi-arabic-1", ["outside-gaza-literary-arabic-1"]],
    ["adabi-arabic-2", ["outside-gaza-literary-arabic-2"]],
    ["adabi-english", ["outside-gaza-literary-english", "outside-gaza-literary-english-reading-plus"]],
    ["adabi-mathematics", ["outside-gaza-literary-math"]],
  ]) {
    const duplicateIds = new Set(fullIds.flatMap(subjectId => (DUPLICATE_LOCATIONS[subjectId] || []).map(([id]) => id)));
    const expected = new Set(lessons(getSubjectRoadmap(sourceId)).flatMap(lesson =>
      lesson.parts.flatMap(part => part.questionIds.filter(id => !SHARED_DUPLICATE_QUESTIONS.has(id) && !duplicateIds.has(id)))));
    const added = new Set();
    for (const subjectId of fullIds) for (const lesson of lessons(getCurrentSubjectRoadmap(subjectId))) {
      for (const part of lesson.parts.filter(part => part.source.subjectId === sourceId)) {
        const loaded = await loadSubjectLessonPart(subjectId, lesson.id, part.id);
        assert.deepEqual(loaded.steps.map(step => step.id), part.questionIds, `${subjectId}/${lesson.id}/${part.id}`);
        for (const stepId of part.questionIds) {
          assert.equal(subscriptionCovers([subjectId], { ...part.source, stepId }), true);
          assert.ok(!added.has(stepId), stepId);
          added.add(stepId);
        }
      }
    }
    assert.deepEqual(added, expected, sourceId);
  }

  const gaza = getCurrentSubjectRoadmap("chemistry");
  const gazaQuantum = gaza.units[0].lessons[0];
  assert.equal(getLessonQuestionProgress(gazaQuantum).total, 121);
  const full = getCurrentSubjectRoadmap("outside-gaza-scientific-chemistry");
  FULL_BOOK_HYDROGEN_QUESTIONS.forEach((ids, index) => {
    const lesson = full.units[0].lessons[index];
    assert.ok(lesson.parts.some(part => ids.every(id => part.questionIds.includes(id))));
  });
});

test("duplicate links open the retained exercise while old question IDs can still receive pending progress", () => {
  for (const [subjectId, rows] of Object.entries(DUPLICATE_LOCATIONS)) for (const row of rows) {
    const [stepId, lessonId, partId, retainedId, retainedLesson, retainedPart, retainedSubject = subjectId] = row;
    const active = lessons(getCurrentSubjectRoadmap(subjectId)).find(lesson => lesson.id === lessonId);
    assert.ok(!active?.parts.find(part => part.id === partId)?.questionIds?.includes(stepId), stepId);
    const target = lessons(getCurrentSubjectRoadmap(retainedSubject)).find(lesson => lesson.id === retainedLesson);
    const part = target?.parts.find(part => part.id === retainedPart);
    assert.ok(part?.questionIds?.includes(retainedId), retainedId);
    const oldLink = new URLSearchParams({ subject:subjectId, lesson:lessonId, part:partId, question:stepId });
    assert.deepEqual(readRoute(oldLink.toString()), { page:"learn", subject:retainedSubject,
      lesson:retainedLesson, part:retainedPart, question:retainedId, flow:null });
  }
  const prior = { subjectId:"physics", lessonId:"momentum-impulse", partId:"momentum-impulse-practice", stepId:"physics-tawjihi-2025-p004-q001" };
  assert.deepEqual(resolveQuestionLocation(prior), prior);
  assert.ok(lessons(getCurrentSubjectRoadmap("physics")).some(lesson =>
    lesson.parts.some(part => part.questionIds.includes(prior.stepId))));
  // These two exercises share a stem and side lengths, with different field directions in their diagrams.
  const physics = lessons(getCurrentSubjectRoadmap("outside-gaza-scientific-physics")).flatMap(lesson =>
    lesson.parts.flatMap(part => part.questionIds));
  assert.ok(physics.includes("physics-tawjihi-2025-p084-q503"));
  assert.ok(physics.includes("outside-gaza-scientific-physics-book-a-p143-q1-03"));
  const xp = getQuestionXp(prior);
  assert.ok(xp > 0);
  const records = new Map([[partKey(prior), { ...emptyPart(), rewardXp:xp,
    completedStepIds:[prior.stepId], review:[{ stepId:prior.stepId, solved:true, misses:0, active:false }] }]]);
  assert.equal(homeLearningSummary(records, [getSubjectRoadmap("outside-gaza-scientific-physics")]).totalXp, xp);
});
