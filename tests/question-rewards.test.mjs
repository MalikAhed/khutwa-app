import assert from "node:assert/strict";
import test from "node:test";
import { COURSE_SUBJECTS } from "../src/data/course.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { getIctPartQuestionIds } from "../src/data/lessons/ict/question-index.js";
import { loadSubjectLesson } from "../src/data/lessons/subject-lesson-registry.js";
import { MAX_LEVEL, MAX_LEVEL_XP, getLevelProgress } from "../src/domain/progression.js";
import { QUESTION_REWARDS, getQuestionXp, questionRewardKey, resolveQuestionLocation } from "../src/domain/question-rewards.js";
import { createRouteUrl, readRoute } from "../src/app/route.js";
import { emptyPart, partKey, recalculateQuestionRewards, restorePartEntries } from "../src/domain/subject-progress.js";

test("cross-part aliases redirect only from their declared lesson and part and share one reward", () => {
  for (const [lessonId, partId, stepId, destinationPartId, canonicalId] of [
    ["smartphone-operating-systems", "ios-files", "exam-p09-q1-7", "android-features", "ict-unit2-p069-mobile-q46"],
    ["my-mobile-app", "calculator-events", "classified-u2-p72-mcq-3", "app-inventor-blocks", "ict-unit2-p072-app-mcq-q03"],
  ]) {
    const old = { subjectId:"ict", lessonId, partId, stepId };
    const canonical = { ...old, partId:destinationPartId, stepId:canonicalId };
    assert.deepEqual(resolveQuestionLocation(old), canonical);
    assert.equal(resolveQuestionLocation({ ...old, partId:destinationPartId }), null);
    assert.equal(resolveQuestionLocation({ ...old, lessonId:"database-management" }), null);
    assert.equal(getQuestionXp(old), getQuestionXp(canonical));
    assert.ok(getQuestionXp(old) > 0);
    const url = createRouteUrl("https://learn.example/?page=learn", {
      subject:"ict", lesson:lessonId, part:partId, question:stepId,
    });
    assert.equal(url.searchParams.get("part"), destinationPartId);
    assert.equal(url.searchParams.get("question"), canonicalId);
    assert.deepEqual(readRoute(url.search), { page:"learn", subject:"ict", lesson:lessonId,
      part:destinationPartId, question:canonicalId, flow:null });
    const invalid = readRoute(`?subject=ict&lesson=${lessonId}&part=${destinationPartId}&question=${stepId}`);
    assert.equal(invalid.question, undefined);
  }
});

test("every unique question is needed to reach level 500 and the integer XP adds up exactly", () => {
  assert.equal(MAX_LEVEL, 500);
  assert.equal(MAX_LEVEL_XP, 49900);
  const rewards = QUESTION_REWARDS.map(question => question.xp);
  assert.ok(rewards.every(xp => Number.isSafeInteger(xp) && xp > 0));
  assert.ok(Math.max(...rewards) - Math.min(...rewards) <= 1);
  assert.equal(new Set(QUESTION_REWARDS.map(questionRewardKey)).size, rewards.length);
  let total = 0;
  for (const [index, xp] of rewards.entries()) {
    total += xp;
    assert.equal(getLevelProgress(total).level === MAX_LEVEL, index === rewards.length - 1);
  }
  assert.equal(total, MAX_LEVEL_XP);
  const allCorrect = new Map();
  for (const question of QUESTION_REWARDS) {
    const key = partKey({ subjectId:question.subjectId, lessonId:"all", partId:"all" });
    if (!allCorrect.has(key)) allCorrect.set(key, emptyPart());
    allCorrect.get(key).review.push({ stepId:question.stepId, misses:0, active:false, solved:true });
  }
  assert.equal([...recalculateQuestionRewards(allCorrect).values()].reduce((sum, record) => sum + record.rewardXp, 0), MAX_LEVEL_XP);
  for (const xp of rewards) assert.ok(getLevelProgress(total - xp).level < MAX_LEVEL);
  assert.equal(getQuestionXp({ subjectId:"physics", stepId:"physics-latex-mcq" }), 0);
  assert.equal(getQuestionXp({ subjectId:"ict", stepId:"retired-teaching-question" }), 0);
});

test("the reward pool exactly matches all current graded and written question identities", async () => {
  const expected = new Set();
  let written = 0, graded = 0;
  for (const subject of COURSE_SUBJECTS.filter(subject => subject.status === "available")) {
    for (const lesson of getSubjectRoadmap(subject.id).units.flatMap(unit => unit.lessons).filter(lesson => !lesson.hidden && !lesson.optional)) {
      const published = await loadSubjectLesson(subject.id, lesson.id);
      const steps = new Map(published.steps.map(step => [step.id, step]));
      for (const part of lesson.parts) {
        for (const stepId of part.questionIds || getIctPartQuestionIds(part.id)) {
          const step = steps.get(stepId);
          assert.ok(step && ["question", "activity"].includes(step.type), `${subject.id}/${lesson.id}/${stepId}`);
          if (step.type === "activity") written++; else graded++;
          expected.add(questionRewardKey({ subjectId:subject.id, stepId }));
        }
      }
    }
  }
  assert.ok(written > 0 && graded > 0);
  assert.deepEqual(new Set(QUESTION_REWARDS.map(questionRewardKey)), expected);
});

test("saved correct answers are repriced once across aliases without losing completion or activity", () => {
  const question = QUESTION_REWARDS.find(question => question.subjectId === "mathematics");
  const old = { ...emptyPart(), completed:true, completedStepIds:[question.stepId], rewardXp:1000,
    activityDates:["2026-09-01"], review:[{ stepId:question.stepId, misses:2, active:false, solved:true }] };
  const first = partKey({ subjectId:"mathematics", lessonId:"old", partId:"old-part" });
  const second = JSON.stringify(["mathematics-2", "new", "new-part"]);
  const onlyCompleted = partKey({ subjectId:"ict", lessonId:"old", partId:"completed-only" });
  const records = restorePartEntries({ version:1, records:[[first,old], [second,old],
    [onlyCompleted,{ ...emptyPart(), completed:true, rewardXp:10 }]] }, assert.fail);
  assert.equal([...records.values()].reduce((sum, record) => sum + record.rewardXp, 0), question.xp);
  assert.equal(records.get(first).completed, true);
  assert.deepEqual(records.get(first).completedStepIds, old.completedStepIds);
  assert.deepEqual(records.get(first).activityDates, old.activityDates);
  assert.deepEqual(records.get(first).review, old.review);
  assert.equal(records.get(onlyCompleted).rewardXp, 0);
  assert.deepEqual(recalculateQuestionRewards(records), records);
  assert.equal(getQuestionXp({ ...question, subjectId:"mathematics-2" }), question.xp);
});
