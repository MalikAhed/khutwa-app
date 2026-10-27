import assert from "node:assert/strict";
import test from "node:test";
import { getPrototypeScenario } from "./fixtures/learner-scenarios.js";
import { getIctPartQuestions } from "../src/data/lessons/ict/exam-lessons.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { COURSE_SUBJECTS } from "../src/data/course.js";
import { renderLearnerDashboardMarkup } from "../src/ui/learner-dashboard.js";
import { getSubjectCardPresentation } from "../src/ui/course-map.js";
import { getLessonQuestionProgress } from "../src/domain/subject-question-progress.js";
import { getQuestionXp } from "../src/domain/question-rewards.js";
import { MAX_LEVEL_XP } from "../src/domain/progression.js";

const ictQuestionTotal = getSubjectRoadmap("ict").units.flatMap(unit => unit.lessons)
  .filter(lesson => !lesson.hidden)
  .flatMap(lesson => lesson.parts)
  .reduce((total, part) => total + getIctPartQuestions(part.id).length, 0);
const subjects = COURSE_SUBJECTS.filter(subject => subject.status !== "unpublished");
const lessons = subjects.flatMap(subject => getSubjectRoadmap(subject.id).units.flatMap(unit => unit.lessons))
  .filter(lesson => !lesson.hidden && !lesson.optional);
const currentQuestionTotal = ictQuestionTotal + subjects.filter(subject => subject.id !== "ict")
  .flatMap(subject => getSubjectRoadmap(subject.id).units.flatMap(unit => unit.lessons))
  .filter(lesson => !lesson.hidden && !lesson.optional).flatMap(lesson => lesson.parts)
  .reduce((total, part) => total + part.questionIds.length, 0);

test("guests have no dashboard while legacy member accounts retain access", () => {
  assert.equal(renderLearnerDashboardMarkup(getPrototypeScenario("visitor-supported").snapshot, "Guest"), "");
  assert.match(renderLearnerDashboardMarkup(getPrototypeScenario("student-banned").snapshot, "Member"), /data-learner-dashboard/);
});

test("the dashboard prioritizes streak and subject progress", () => {
  const markup = renderLearnerDashboardMarkup(getPrototypeScenario("student-paid").snapshot, "ليان");
  assert.match(markup, /مرحبًا، <bdi>ليان<\/bdi>/);
  assert.doesNotMatch(markup, /dashboard-resume|متابعة التعلّم|تكنولوجيا المعلومات|تقدّم المادة/);
  assert.match(markup, /dashboard-stat--level[^]*?assets\/icons\/dashboard-levels-outlined\.svg/);
  assert.match(markup.replace(/<[^>]+>/g, ""), /Lv\.1/);
  assert.match(markup, /role="progressbar" aria-label="التقدّم في المستوى"/);
  assert.doesNotMatch(markup, /data-expanded-component/);
  assert.match(markup, /السلسلة اليومية/);
  assert.match(markup, /dashboard-stat--streak[^]*?<img src="assets\/icons\/dashboard-streak-outlined\.svg"/);
  assert.match(markup, /المواد الدراسية/);
  assert.match(markup, /<bdi class="ui-number">7%<\/bdi> مكتمل/);
  assert.doesNotMatch(markup, /الرتبة|الأسئلة المحلولة|إجمالي الدروس|dashboard-metric/);
});

test("a new learner does not receive the removed resume block", () => {
  const markup = renderLearnerDashboardMarkup(getPrototypeScenario("student-free-new").snapshot, "طالب جديد");
  assert.doesNotMatch(markup, /ابدأ الدرس 1|تقدّم المادة|dashboard-resume/);
});

test("learner names are escaped before entering dashboard markup", () => {
  const markup = renderLearnerDashboardMarkup(getPrototypeScenario("student-free-new").snapshot, '<img src=x onerror="alert(1)">');
  assert.doesNotMatch(markup, /<img src=x onerror=/);
  assert.match(markup, /&lt;img src=x onerror=&quot;alert\(1\)&quot;&gt;/);
});

test("Home has no upcoming-feature sidebar", () => {
  const markup = renderLearnerDashboardMarkup(getPrototypeScenario("student-paid").snapshot);
  assert.doesNotMatch(markup, /dashboard-side-rail|dashboard-premium|dashboard-quests/);
});

test("new learner statistics display zero streak without visual placeholders", () => {
  const markup = renderLearnerDashboardMarkup(getPrototypeScenario("student-free-new").snapshot, "طالب");
  assert.match(markup.replace(/<[^>]+>/g, ""), /0 أيام/);
});

test("the full XP pool displays level 500 with a full accessible progress bar", () => {
  const snapshot = getPrototypeScenario("student-free-new").snapshot;
  const markup = renderLearnerDashboardMarkup({ ...snapshot, learning:{ ...snapshot.learning,totalXp:MAX_LEVEL_XP } });
  assert.match(markup.replace(/<[^>]+>/g, ""), /Lv\.500/);
  assert.match(markup, /aria-valuenow="100" aria-valuetext="وصلت إلى المستوى 500"/);
  assert.match(markup, /style="width:100%"/);
  assert.match(markup, /المستوى الأقصى/);
});

test("a one-day dashboard streak uses a numeric count", () => {
  const scenario = getPrototypeScenario("student-free-new").snapshot;
  const markup = renderLearnerDashboardMarkup({ ...scenario, learning:{ ...scenario.learning, dailyStreak:1 } }, "طالب");
  assert.match(markup.replace(/<[^>]+>/g, ""), /1 يوم/);
  assert.doesNotMatch(markup, /يوم واحد/);
});

test("Home uses the same completed part, answers and rewards as the lesson store", async () => {
  const { createLearnerSession } = await import("../src/services/learner-session.js");
  const { createSubjectProgressStore } = await import("../src/services/subject-progress-store.js");
  const progressStore = createSubjectProgressStore();
  const session = createLearnerSession({ progressStore });
  await session.createAccount({ username:"home-test", phone:"0591234567" });
  const ownerId = session.getLearnerProgressOwner();
  await progressStore.ready(ownerId);
  assert.equal(session.getLearnerHomeSnapshot().learning.totalXp, 0);
  const key = { ownerId, subjectId:"ict", lessonId:"database-management", partId:"access-basics" };
  await progressStore.recordAnswer({ ...key, stepId:"check", correct:true });
  await progressStore.record({ ...key, stepIds:["check"], completedStepIds:["check"], isComplete:true });
  const learning = session.getLearnerHomeSnapshot().learning;
  assert.equal(learning.totalXp, 0, "retired teaching questions cannot award XP");
  assert.equal(learning.requiredLessonsCompleted, 0, "one old topic is not a whole textbook lesson");
  assert.equal(learning.curriculumLessonsTotal, lessons.length);
  assert.equal(learning.questionsSolved, 1);
  assert.equal(learning.currentQuestionsSolved, 0, "retired lesson steps cannot fill ICT question progress");
  assert.equal(learning.currentQuestionsTotal, currentQuestionTotal);
  assert.equal(learning.subjects.ict.currentQuestionsTotal, ictQuestionTotal);
  assert.equal(learning.progress, 0);
  const { getIctPartQuestions } = await import("../src/data/lessons/ict/exam-lessons.js");
  const questionId = getIctPartQuestions(key.partId)[0].id;
  await progressStore.recordAnswer({ ...key, stepId:questionId, correct:true });
  const current = session.getLearnerHomeSnapshot().learning;
  assert.equal(current.currentQuestionsSolved, 1);
  assert.equal(current.totalXp, getQuestionXp({ subjectId:"ict", stepId:questionId }));
  assert.equal(current.progress, Math.round(100 / currentQuestionTotal));
  assert.equal(current.subjects.mathematics.currentQuestionsSolved, 0);
  assert.match(renderLearnerDashboardMarkup(session.getLearnerHomeSnapshot()), new RegExp(`<bdi class="ui-number">${current.progress}%</bdi> مكتمل`));
  await session.createAccount({ username:"different", phone:"0561234567" });
  assert.equal(session.getLearnerHomeSnapshot().learning.totalXp, 0);
});

test("every published subject keeps Home cards and lesson progress in sync after saves and reload", async t => {
  const { createLearnerSession } = await import("../src/services/learner-session.js");
  const { createSubjectProgressStore } = await import("../src/services/subject-progress-store.js");
  const saved = new Map();
  const storage = { getItem:key => saved.get(key) ?? null, setItem:(key, value) => saved.set(key, value) };
  const progressStore = createSubjectProgressStore({ storage });
  t.after(() => progressStore.close());
  const session = createLearnerSession({ progressStore });
  await session.createAccount({ username:"all-subjects", phone:"0591234567" });
  const ownerId = session.getLearnerProgressOwner();
  await progressStore.ready(ownerId);
  for (const [index, subject] of subjects.entries()) {
    const lessons = getSubjectRoadmap(subject.id).units.flatMap(unit => unit.lessons).filter(lesson => !lesson.hidden && !lesson.optional);
    const lesson = lessons.find(lesson => lesson.parts.some(part => Object.keys(part.questionAliases || {}).length)) || lessons[0];
    const part = lesson.parts.find(part => Object.keys(part.questionAliases || {}).length) || lesson.parts[0];
    const [alias, stepId] = Object.entries(part.questionAliases || {})[0]
      || [null, part.questionIds?.[0] || getIctPartQuestions(part.id)[0].id];
    const key = { ownerId, subjectId:subject.id, lessonId:lesson.id, partId:part.id };
    assert.equal((await progressStore.recordAnswer({ ...key, stepId:alias || stepId, correct:false })).status, "saved");
    // Retrying a current question, including one saved under a retired ID,
    // must not count it twice. Math 2 keeps its original persisted subject ID.
    assert.equal((await progressStore.recordAnswer({ ...key, stepId, correct:true })).status, "saved");
    const ring = getLessonQuestionProgress(lesson, (_lesson, item) => ({
      ...progressStore.get({ ...key, partId:item.id }), review:progressStore.getReview({ ...key, partId:item.id }),
    }), (_lesson, item) => getIctPartQuestions(item.id).map(question => question.id));
    const snapshot = session.getLearnerHomeSnapshot();
    const card = getSubjectCardPresentation(subject, snapshot);
    assert.equal(ring.solved, 1, `${subject.id} lesson ring`);
    assert.equal(card.completedCount, ring.solved, `${subject.id} Home must match its lesson`);
    assert.ok(card.progress > 0, `${subject.id} Home progress`);
    assert.equal(snapshot.learning.currentQuestionsSolved, index + 1, "overall Home includes each subject once");
  }
  const reloaded = createSubjectProgressStore({ storage });
  t.after(() => reloaded.close());
  await reloaded.ready(ownerId);
  const restored = createLearnerSession({ progressStore:reloaded });
  await restored.createAccount({ username:"all-subjects", phone:"0591234567" });
  for (const subject of subjects) assert.equal(getSubjectCardPresentation(subject, restored.getLearnerHomeSnapshot()).completedCount, 1, `${subject.id} survives reload`);
});
