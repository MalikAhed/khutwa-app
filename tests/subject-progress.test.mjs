import assert from "node:assert/strict";
import test from "node:test";
import { createSubjectProgressStore, getUnitPartProgress } from "../src/services/subject-progress-store.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { applyProgressUpdate, emptyPart, homeLearningSummary, partKey } from "../src/domain/subject-progress.js";
import { getQuestionXp } from "../src/domain/question-rewards.js";

function memoryStorage() {
  const values = new Map();
  return { getItem:(key) => values.get(key), setItem:(key, value) => values.set(key, value) };
}
const key = { ownerId:"student-a", subjectId:"ict", lessonId:"database-management", partId:"access-basics" };
const steps = ["intro", "check"];
const firstQuestion = "exam-p09-q1-1";
const secondQuestion = "exam-p57-q1-b2";
const questionXp = stepId => getQuestionXp({ subjectId:"ict", stepId });

test("math and ICT question counts and solved records stay separate on Home", () => {
  const roadmaps = ["ict", "mathematics"].map(subjectId => ({ subjectId, questionsOnly:true, units:[{ lessons:[{
    id:"lesson", parts:[{ id:"part", startStepId:`${subjectId}-1`, questionIds:[`${subjectId}-1`, `${subjectId}-2`] }],
  }] }] }));
  const records = new Map([[partKey({ subjectId:"mathematics", lessonId:"lesson", partId:"part" }), {
    ...emptyPart(), completedStepIds:["mathematics-1", "retired-math-id"],
  }]]);
  const summary = homeLearningSummary(records, roadmaps);
  assert.equal(summary.currentQuestionsTotal, 4);
  assert.equal(summary.currentQuestionsSolved, 1);
  assert.equal(summary.subjects.mathematics.currentQuestionsSolved, 1);
  assert.equal(summary.subjects.mathematics.progress, 50);
  assert.equal(summary.subjects.ict.currentQuestionsSolved, 0);
  assert.equal(summary.subjects.ict.progress, 0);
});

test("replacing practice retains historical IDs without granting completion to new questions", () => {
  const previous = { ...emptyPart(), completedStepIds:["intro", "old-question"] };
  const next = applyProgressUpdate(previous, { type:"completion", value:{ ...key,
    stepIds:["intro", "exam-p2-q1"], completedStepIds:["intro", "unknown"], isComplete:true } });
  assert.deepEqual(next.completedStepIds, ["intro", "old-question"]);
  assert.equal(next.completed, false);
  const finished = applyProgressUpdate(next, { type:"completion", value:{ ...key,
    stepIds:["intro", "exam-p2-q1"], completedStepIds:["exam-p2-q1"], isComplete:true } });
  assert.deepEqual(finished.completedStepIds, ["intro", "old-question", "exam-p2-q1"]);
  assert.equal(finished.completed, true);
});
async function openStore(options) {
  const store = createSubjectProgressStore(options);
  await store.ready(key.ownerId);
  return store;
}

test("progress resumes after reload, completion needs every step and a confirmed finish", async () => {
  const storage = memoryStorage();
  const store = await openStore({ storage });
  assert.deepEqual(store.get(key), { completedStepIds:[], completed:false });
  await store.record({ ...key, stepIds:steps, completedStepIds:["intro", "invalid"], isComplete:true });
  const restored = await openStore({ storage });
  assert.deepEqual(restored.get(key), { completedStepIds:["intro"], completed:false });
  await restored.record({ ...key, stepIds:steps, completedStepIds:steps, isComplete:false });
  assert.equal(restored.get(key).completed, false);
  await restored.record({ ...key, stepIds:steps, completedStepIds:steps, isComplete:true });
  assert.equal((await openStore({ storage })).get(key).completed, true);
});

test("retries and repeated completions cannot decrease or inflate unit progress", async () => {
  const store = await openStore();
  const update = (completedStepIds, isComplete) => store.record({ ...key, stepIds:steps, completedStepIds, isComplete });
  await update(steps, true);
  await update([], false);
  await update(steps, true);
  assert.deepEqual(store.get(key), { completedStepIds:steps, completed:true });
  const unit = getSubjectRoadmap("ict").units[0];
  const progress = getUnitPartProgress(unit, (lesson, part) => store.get({ ...key, lessonId:lesson.id, partId:part.id }));
  assert.deepEqual(progress, { completed:1, total:19, percent:5 });
});

test("progress is isolated by learner, lesson, and part", async () => {
  const store = await openStore();
  await store.record({ ...key, stepIds:steps, completedStepIds:steps, isComplete:true });
  for (const alternative of [{ ownerId:"student-b" }, { ownerId:"guest" }, { lessonId:"other" }, { partId:"tables-and-types" }]) {
    assert.deepEqual(store.get({ ...key, ...alternative }), { completedStepIds:[], completed:false });
  }
});

test("unpublished parts cannot create unit completion and empty units have zero progress", async () => {
  const roadmap = getSubjectRoadmap("ict");
  assert.deepEqual(getUnitPartProgress(roadmap.units[0], () => ({ completed:true })), { completed:19, total:19, percent:100 });
  assert.deepEqual(getUnitPartProgress(roadmap.units[1], () => ({ completed:true })), { completed:8, total:8, percent:100 });
  const draftUnit = { lessons:[{ id:"lesson", parts:[{ id:"ready", startStepId:"ready-step" }, { id:"draft" }] }] };
  assert.deepEqual(getUnitPartProgress(draftUnit, () => ({ completed:true })), { completed:1, total:2, percent:50 });
  assert.deepEqual(getUnitPartProgress({ lessons:[] }), { completed:0, total:0, percent:0 });
});

test("corrupt or unavailable storage keeps the lesson usable with memory progress", async () => {
  let errors = 0;
  const store = await openStore({
    storage:{ getItem:() => "{broken", setItem:() => { throw new Error("quota"); } },
    onError:() => { errors += 1; },
  });
  assert.equal(store.get(key).completed, false);
  await store.record({ ...key, stepIds:steps, completedStepIds:steps, isComplete:true });
  assert.equal(store.get(key).completed, true);
  assert.equal(errors, 2);
});

test("repeated mistakes create one persistent review item without changing completion", async () => {
  const storage = memoryStorage();
  const store = await openStore({ storage });
  await store.recordAnswer({ ...key, stepId:"check", correct:false });
  assert.equal(store.getReview(key)[0].active, false);
  await store.recordAnswer({ ...key, stepId:"check", correct:false });
  await store.recordAnswer({ ...key, stepId:"check", correct:true });
  await store.record({ ...key, stepIds:steps, completedStepIds:steps, isComplete:true });
  const restored = await openStore({ storage });
  assert.deepEqual(restored.getReview(key), [{ stepId:"check", misses:2, active:true, solved:true }]);
  assert.deepEqual(restored.getReview({ ...key, ownerId:"other" }), []);
  await restored.recordAnswer({ ...key, stepId:"check", correct:false, reviewing:true });
  assert.equal(restored.getReview(key)[0].active, true);
  await restored.recordAnswer({ ...key, stepId:"check", correct:true, reviewing:true });
  assert.equal(restored.getReview(key)[0].active, false);
  assert.equal(restored.get(key).completed, true);
  await restored.recordAnswer({ ...key, stepId:"check", correct:false });
  await restored.recordAnswer({ ...key, stepId:"check", correct:false });
  assert.equal(restored.getReview(key).length, 1);
  assert.equal(restored.getReview(key)[0].active, true);
});

test("only first correct answers award XP; daily activity includes wrong answers and spans subjects", async () => {
  const storage = memoryStorage();
  const store = await openStore({ storage });
  const totalParts = getSubjectRoadmap("ict").units.flatMap(unit => unit.lessons.flatMap(lesson => lesson.parts)).length;
  const outcomeKey = { ...key, totalParts, date:"2026-09-05" };
  assert.equal(store.get(key).completed, false);
  assert.equal(store.getOutcome(outcomeKey).totalXp, 0);
  const finish = (partId, date) => store.record({ ...key, partId, date, stepIds:steps, completedStepIds:steps, isComplete:true });
  await finish(key.partId, "2026-09-05");
  await finish(key.partId, "2026-09-05");
  assert.equal(store.getOutcome(outcomeKey).totalXp, 0);
  assert.equal(store.getOutcome(outcomeKey).streak, 0);
  assert.equal(store.getOutcome(outcomeKey).progress, Math.round(100 / totalParts));
  const answer = (correct, extras = {}) => store.recordAnswer({ ...key, stepId:firstQuestion, correct, date:"2026-09-05", ...extras });
  assert.equal((await answer(false)).dailyStreak.streak, 1);
  assert.equal(store.getOutcome(outcomeKey).totalXp, 0);
  assert.equal((await answer(true)).dailyStreak, undefined);
  await answer(true);
  await answer(false);
  await answer(true, { reviewing:true });
  assert.equal(store.getOutcome(outcomeKey).totalXp, questionXp(firstQuestion));
  await answer(true, { stepId:secondQuestion });
  assert.equal(store.getOutcome(outcomeKey).streak, 1);
  await answer(false, { subjectId:"physics", date:"2026-09-05" });
  assert.equal((await answer(false, { subjectId:"physics", date:"2026-09-06" })).dailyStreak.streak, 2);
  const restored = await openStore({ storage });
  assert.equal((await restored.recordAnswer({ ...key, stepId:firstQuestion, correct:true, date:"2026-09-06" })).dailyStreak, undefined);
  assert.equal(restored.getOutcome({ ...outcomeKey, date:"2026-09-06" }).streak, 2);
  assert.equal(restored.getOutcome({ ...outcomeKey, date:"2026-09-08" }).streak, 0);
  assert.equal(restored.getOutcome(outcomeKey).totalXp, questionXp(firstQuestion) + questionXp(secondQuestion));
  assert.equal(restored.getOutcome({ ...outcomeKey, ownerId:"other" }).totalXp, 0);
});

test("unassessed written review is daily activity without correctness XP or mistakes", async () => {
  const store = await openStore();
  const result = await store.recordAnswer({ ...key, stepId:"card", correct:null });
  assert.equal(result.dailyStreak.streak, 1);
  assert.equal(store.getOutcome({ ...key, totalParts:1 }).totalXp, 0);
  assert.deepEqual(store.getReview(key), []);
});

test("overlapping stores claim one daily celebration and one question reward", async () => {
  const storage = memoryStorage();
  const first = await openStore({ storage });
  const second = await openStore({ storage });
  const responses = await Promise.all([first, second].map(store =>
    store.recordAnswer({ ...key, stepId:firstQuestion, correct:true })));
  assert.equal(responses.filter(result => result.dailyStreak).length, 1);
  assert.equal((await openStore({ storage })).getOutcome({ ...key, totalParts:1 }).totalXp, questionXp(firstQuestion));
});

test("written self checks award once for right, never for wrong or a duplicate placement", async () => {
  const storage = memoryStorage();
  const store = await openStore({ storage });
  const stepId = "exam-p11-q3-a1-components";
  await store.recordAnswer({ ...key, stepId, correct:false });
  assert.equal(store.getOutcome({ ...key, totalParts:1 }).totalXp, 0);
  await store.recordAnswer({ ...key, stepId, correct:true });
  await store.recordAnswer({ ...key, partId:"older-link", stepId, correct:true });
  const restored = await openStore({ storage });
  await restored.recordAnswer({ ...key, stepId, correct:false });
  await restored.recordAnswer({ ...key, stepId, correct:true });
  assert.equal(restored.getOutcome({ ...key, totalParts:1 }).totalXp, questionXp(stepId));
});

test("invalid stored neighbors do not discard valid progress", async () => {
  const storage = memoryStorage();
  storage.setItem("tawjihi:subject-parts:v1:student-a", JSON.stringify({ version:1, records:[
    null, [JSON.stringify([key.subjectId, key.lessonId, key.partId]), { completedStepIds:steps, completed:true }],
  ] }));
  assert.equal((await openStore({ storage })).get(key).completed, true);
});

test("interleaved stores preserve independent completions and same-part steps", async () => {
  const storage = memoryStorage();
  const first = await openStore({ storage });
  const second = await openStore({ storage });
  first.get(key);
  second.get(key);
  await first.record({ ...key, stepIds:steps, completedStepIds:steps, isComplete:true });
  await second.record({ ...key, partId:"second", stepIds:steps, completedStepIds:steps, isComplete:true });
  const restored = await openStore({ storage });
  assert.equal(restored.get(key).completed, true);
  assert.equal(restored.get({ ...key, partId:"second" }).completed, true);
});

test("unsupported versions are retained and saving does not claim success", async () => {
  const storage = memoryStorage();
  const source = JSON.stringify({ version:2, records:["future"] });
  storage.setItem("tawjihi:subject-parts:v1:student-a", source);
  const store = await openStore({ storage, onError:() => {} });
  assert.equal(store.getSaveState(key.ownerId), "failed");
  assert.equal((await store.record({ ...key, stepIds:steps, completedStepIds:steps, isComplete:true })).status, "failed");
  assert.equal(store.get(key).completed, true);
  assert.equal(storage.getItem("tawjihi:subject-parts:v1:student-a"), source);
});

test("a denied write retains answers in memory and retry applies each answer once", async () => {
  const storage = memoryStorage();
  const write = storage.setItem;
  const store = await openStore({ storage, onError:() => {} });
  storage.setItem = () => { throw new Error("quota"); };
  await store.recordAnswer({ ...key, stepId:"check", correct:false });
  assert.equal(store.getSaveState(key.ownerId), "failed");
  assert.equal(store.getReview(key)[0].misses, 1);
  storage.setItem = write;
  await store.retry(key.ownerId);
  assert.equal(store.getSaveState(key.ownerId), "saved");
  assert.equal((await openStore({ storage })).getReview(key)[0].misses, 1);
});


test("recoverable legacy errors expose a dismissible warning without losing valid progress", async () => {
  const storage=memoryStorage();
  storage.setItem("tawjihi:subject-parts:v1:student-a",JSON.stringify({version:1,records:[null,[JSON.stringify([key.subjectId,key.lessonId,key.partId]),{completedStepIds:steps,completed:true,rewardXp:10}]]}));
  const store=await openStore({storage,onError:()=>{}});
  assert.equal(store.get(key).completed,true);
  assert.equal(store.getSaveState(key.ownerId),"saved");
  assert.equal(store.hasRecoveryWarning(key.ownerId),true);
  assert.equal(store.hasRecoveryWarning("student-b"),false);
  store.dismissRecoveryWarning(key.ownerId);
  assert.equal(store.hasRecoveryWarning(key.ownerId),false);
});

test("a delayed refresh cannot overwrite a newly saved completion", async () => {
  let finishRead;
  const persisted = new Map();
  const store = createSubjectProgressStore({
    adapter:{
      read:() => new Promise((resolve) => { finishRead = () => resolve(new Map()); }),
      async update(update) {
        const id = partKey(update.value);
        persisted.set(id, applyProgressUpdate(persisted.get(id) || emptyPart(), update));
        return new Map(persisted);
      },
      close() {},
    },
  });
  const refresh = store.refresh(key.ownerId);
  const save = store.record({ ...key, stepIds:steps, completedStepIds:steps, isComplete:true });
  // Let a write overtake the suspended read if the store does not order its IO.
  await new Promise((resolve) => setImmediate(resolve));
  finishRead();
  await Promise.all([refresh, save]);
  assert.deepEqual(store.get(key), { completedStepIds:steps, completed:true });
  assert.equal(store.getSaveState(key.ownerId), "saved");
});

test("a stalled or offline server never blocks durable local answers", async () => {
  const persisted = new Map();
  const errors = [];
  let failSync;
  let offline = false;
  const store = createSubjectProgressStore({ onError:error => errors.push(error), adapter:{
    read:() => new Map(persisted),
    async update(update) {
      const id = partKey(update.value);
      persisted.set(id, applyProgressUpdate(persisted.get(id) || emptyPart(), update));
      return new Map(persisted);
    },
    sync:() => offline ? new Promise((_, reject) => { failSync = reject; }) : Promise.resolve(),
    close() {},
  } });
  await store.ready(key.ownerId);
  offline = true;
  const first = store.recordAnswer({ ...key, stepId:"check", correct:false });
  await new Promise(resolve => setImmediate(resolve));
  const second = store.recordAnswer({ ...key, stepId:"check", correct:false });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(persisted.get(partKey(key)).review[0].misses, 2, "Both answers reach storage before the network settles");
  assert.equal(store.getSaveState(key.ownerId), "saved");
  assert.deepEqual((await Promise.all([first, second])).map(result => result.status), ["saved", "saved"]);
  failSync(new TypeError("Network unavailable"));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(store.getSaveState(key.ownerId), "saved");
  assert.equal(errors.length, 1);
  offline = false;
  await store.retry(key.ownerId);
  assert.equal(store.getReview(key)[0].misses, 2, "Retry does not apply a locally saved answer twice");
  await store.close();
});


test("moving lessons to Math 2 retains saved progress and its original storage identity", async () => {
  const storage = memoryStorage();
  const store = await openStore({ storage });
  const lesson = getSubjectRoadmap("mathematics-2").units[0].lessons[0];
  const part = lesson.parts[0];
  const oldKey = { ...key, subjectId:"mathematics", lessonId:lesson.id, partId:part.id };
  const newKey = { ...oldKey, subjectId:"mathematics-2" };
  await store.record({ ...oldKey, stepIds:part.questionIds, completedStepIds:[part.questionIds[0]], isComplete:false });
  const restored = await openStore({ storage });
  assert.deepEqual(restored.get(newKey).completedStepIds, [part.questionIds[0]]);
  await restored.record({ ...newKey, stepIds:part.questionIds, completedStepIds:[part.questionIds[1]], isComplete:false });
  assert.deepEqual((await openStore({ storage })).get(oldKey).completedStepIds, part.questionIds.slice(0, 2));
  const home = restored.getHomeLearning(key.ownerId, [getSubjectRoadmap("mathematics"), getSubjectRoadmap("mathematics-2")]);
  assert.equal(home.subjects.mathematics.currentQuestionsSolved, 0);
  assert.equal(home.subjects["mathematics-2"].currentQuestionsSolved, 2);
  assert.equal(home.currentQuestionsSolved, 2);
});

test("legacy ICT records credit destination parts and a stale answer clears review without migrating history", async () => {
  for (const [lessonId, from, oldId, to, stepId] of [
    ["smartphone-operating-systems", "ios-files", "exam-p09-q1-7", "android-features", "ict-unit2-p069-mobile-q46"],
    ["my-mobile-app", "calculator-events", "classified-u2-p72-mcq-3", "app-inventor-blocks", "ict-unit2-p072-app-mcq-q03"],
  ]) {
    const storage = memoryStorage();
    const source = { ...key, lessonId, partId:from };
    const destination = { ...source, partId:to };
    const historical = { ...emptyPart(), completed:true, completedStepIds:[oldId], completedDate:"2026-09-01",
      activityDates:["2026-09-01"], review:[{ stepId:oldId, misses:2, active:true, solved:true }] };
    const storageKey = `tawjihi:subject-parts:v1:${key.ownerId}`;
    storage.setItem(storageKey, JSON.stringify({ version:1, records:[[partKey(source), historical]] }));
    const store = await openStore({ storage });
    assert.ok(store.get(destination).completedStepIds.includes(stepId));
    assert.deepEqual(store.getReview(destination), [{ stepId, misses:2, active:true, solved:true }]);
    assert.deepEqual(store.getReview(source), []);
    assert.equal(store.getHomeLearning(key.ownerId, [getSubjectRoadmap("ict")]).currentQuestionsSolved, 1);
    await store.recordAnswer({ ...source, stepId:oldId, correct:true, reviewing:true, date:"2026-09-02" });
    const restored = await openStore({ storage });
    assert.deepEqual(restored.getReview(destination), [{ stepId, misses:0, active:false, solved:true }]);
    assert.equal(restored.getOutcome({ ...key, totalParts:1 }).mustReviewCount, 0);
    await restored.recordAnswer({ ...destination, stepId, correct:true, date:"2026-09-02" });
    assert.equal(restored.getOutcome({ ...key, totalParts:1 }).totalXp, getQuestionXp({ ...destination, stepId }));
    const saved = new Map(JSON.parse(storage.getItem(storageKey)).records);
    assert.deepEqual(saved.get(partKey(source)).completedStepIds, [oldId]);
    assert.deepEqual(saved.get(partKey(source)).activityDates, ["2026-09-01"]);
    assert.equal(saved.get(partKey(source)).completedDate, "2026-09-01");
    assert.deepEqual(saved.get(partKey(source)).review, historical.review);
    await store.close(); await restored.close();
  }
});


test("wrong answers count once toward subject and lesson progress after reload without XP", async () => {
  const storage = memoryStorage();
  const store = await openStore({ storage });
  const roadmap = getSubjectRoadmap("ict");
  const count = source => source.getHomeLearning(key.ownerId, [roadmap]).subjects.ict.currentQuestionsSolved;
  await store.recordAnswer({ ...key, stepId:firstQuestion, correct:false });
  assert.equal(count(store), 1, "an answer counts before Continue");
  assert.equal(store.getHomeLearning(key.ownerId, [roadmap]).totalXp, 0);
  await store.recordAnswer({ ...key, stepId:firstQuestion, correct:false });
  await store.record({ ...key, stepIds:[firstQuestion], completedStepIds:[firstQuestion], isComplete:true });
  assert.equal(count(store), 1, "retries and Continue do not inflate progress");
  const restored = await openStore({ storage });
  assert.equal(count(restored), 1);
  assert.equal(restored.getHomeLearning(key.ownerId, [roadmap]).totalXp, 0);
  await restored.recordAnswer({ ...key, stepId:firstQuestion, correct:true });
  assert.equal(count(restored), 1);
  assert.equal(restored.getHomeLearning(key.ownerId, [roadmap]).totalXp, questionXp(firstQuestion));
  await restored.recordAnswer({ ...key, stepId:firstQuestion, correct:false });
  assert.equal(count(restored), 1);
  assert.equal(restored.getHomeLearning(key.ownerId, [roadmap]).totalXp, questionXp(firstQuestion));
  assert.equal(restored.getHomeLearning("other-student", [roadmap]).subjects.ict.currentQuestionsSolved, 0);
});


test("rated collections start empty and persist their own attempts without resetting lifetime progress", async () => {
  const storage = memoryStorage();
  const store = await openStore({ storage });
  await store.recordAnswer({ ...key, stepId:firstQuestion, correct:true });
  assert.deepEqual(store.getRatedProgress(key, "easy").completedStepIds, []);
  await store.recordAnswer({ ...key, stepId:firstQuestion, correct:false, rating:"easy" });
  await store.recordAnswer({ ...key, stepId:firstQuestion, correct:false, rating:"easy" });
  const restored = await openStore({ storage });
  assert.deepEqual(restored.getRatedProgress(key, "easy").completedStepIds, [firstQuestion]);
  assert.deepEqual(restored.getRatedProgress(key, "hard").completedStepIds, []);
  assert.deepEqual(restored.getRatedProgress({ ...key, ownerId:"other" }, "easy").completedStepIds, []);
  const home = restored.getHomeLearning(key.ownerId, [getSubjectRoadmap("ict")]);
  assert.equal(home.currentQuestionsSolved, 1);
  assert.equal(home.totalXp, questionXp(firstQuestion));
});
