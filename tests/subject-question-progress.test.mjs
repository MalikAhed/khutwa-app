import assert from "node:assert/strict";
import test from "node:test";
import { getLessonQuestionProgress } from "../src/domain/subject-question-progress.js";

const lesson = { parts:[{ id:"first" }, { id:"second" }] };
const questions = (_lesson, part) => part.id === "first" ? ["a", "b"] : ["c", "d"];

test("the lesson ring counts unique current attempted questions across old part records", () => {
  const progress = getLessonQuestionProgress(lesson, (_lesson, part) => part.id === "first"
    ? { completed:true, completedStepIds:["video", "retired-question", "a", "a"], review:[{ stepId:"a", solved:true }, { stepId:"b", solved:true }] }
    : { completedStepIds:["c", "d"], review:[{ stepId:"d", misses:2, active:true }] }, questions);
  assert.equal(progress.solved, 4);
  assert.equal(progress.total, 4);
  assert.equal(progress.percent, 100);
  assert.equal(progress.completed, true);
  assert.equal(progress.nextPart.id, "first", "an answer without Continue resumes at that question");
});

test("historical completed flags cannot complete new questions, and full completion is exactly 100%", () => {
  assert.equal(getLessonQuestionProgress(lesson, () => ({ completed:true }), questions).percent, 0);
  const done = getLessonQuestionProgress(lesson, (lesson, part) => ({ completedStepIds:questions(lesson, part) }), questions);
  assert.equal(done.percent, 100);
  assert.equal(done.completed, true);
  assert.equal(getLessonQuestionProgress({ parts:[] }).percent, 0);
});

test("a removed duplicate credits its retained question while keeping historical records intact", () => {
  const original = { completedStepIds:["old"], review:[{stepId:"old",solved:true}] };
  const current = { parts:[{id:"practice",questionIds:["retained"],questionAliases:{old:"retained"}}] };
  const progress = getLessonQuestionProgress(current, () => original);
  assert.equal(progress.total,1);
  assert.equal(progress.solved,1);
  assert.equal(progress.percent,100);
  assert.deepEqual(original.completedStepIds,["old"]);
  assert.equal(original.review[0].stepId,"old");
});

test("cross-part completion and solved credit fill only the canonical question's ring", () => {
  const current = { parts:[
    { id:"source", questionIds:["remaining"], questionAliases:{ old:"retained" } },
    { id:"destination", questionIds:["retained"] },
  ] };
  const historical = { completedStepIds:["old"], review:[] };
  const read = (_lesson, part) => part.id === "source" ? historical : undefined;
  assert.equal(getLessonQuestionProgress(current, read).solved, 1);
  assert.equal(getLessonQuestionProgress(current, read).total, 2);
  historical.review = [{ stepId:"old", solved:false }];
  assert.equal(getLessonQuestionProgress(current, read).solved, 1, "an incorrect attempt counts toward progress");
  historical.review[0].solved = true;
  assert.equal(getLessonQuestionProgress(current, read).solved, 1);
  assert.deepEqual(historical.completedStepIds, ["old"]);
});
