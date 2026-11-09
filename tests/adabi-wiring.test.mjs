import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { ADABI_SUBJECTS, COURSE_SUBJECTS, SCIENTIFIC_SUBJECTS, getCourseSubjects } from '../src/data/course.js';
import { getSubjectRoadmap } from '../src/data/subject-roadmaps.js';
import { loadSubjectLessonPart } from '../src/data/lessons/subject-lesson-registry.js';
import { QUESTION_REWARDS, getQuestionXp, resolveQuestionLocation } from '../src/domain/question-rewards.js';
import { getSubjectCardPresentation, renderCourseMapMarkup } from '../src/ui/course-map.js';
import { superSubjectPickerMarkup } from '../src/ui/super-subject-picker.js';
import { normalizeSubscriptionSubjects } from '../src/domain/subscription-access.js';
import { hasFreeLessonPractice } from '../src/domain/free-practice.js';
import { createRouteUrl, readRoute } from '../src/app/route.js';

const selection = { curriculum:'gaza', path:'literary' };

test('each path shows its nine subjects in learning, rated questions and subscription selection', () => {
  assert.equal(COURSE_SUBJECTS.length, 18);
  assert.deepEqual(getCourseSubjects(selection), ADABI_SUBJECTS);
  assert.deepEqual(getCourseSubjects({ path:'scientific' }), SCIENTIFIC_SUBJECTS);
  assert.equal(new Set(COURSE_SUBJECTS.map(subject => subject.id)).size, 18);
  for (const literary of [false, true]) {
    const chosen = literary ? selection : { path:'scientific' };
    const expected = getCourseSubjects(chosen).map(subject => subject.id);
    for (const ratedQuestions of [false, true]) {
      const markup = renderCourseMapMarkup({ selection:chosen, ratedQuestions });
      assert.deepEqual([...markup.matchAll(/data-subject="([^"]+)"/g)].map(match => match[1]), expected);
    }
    const picker = superSubjectPickerMarkup(15, chosen);
    assert.deepEqual([...picker.matchAll(/name="super-subject" value="([^"]+)"/g)].map(match => match[1]), expected);
    assert.deepEqual(normalizeSubscriptionSubjects(expected), expected);
  }
});

test('adding the literary path preserves every existing scientific question XP value', () => {
  const scientific = QUESTION_REWARDS.filter(question => !question.subjectId.startsWith('adabi-'));
  assert.equal(scientific.length, 7227);
  assert.equal(createHash('sha256').update(JSON.stringify(scientific)).digest('hex'),
    'f193bdd02a32658f478983ffe68bfdc51047527823b8880e7cb5aec591889747');
  for (const literary of [false, true]) {
    const rewards = QUESTION_REWARDS.filter(question => question.subjectId.startsWith('adabi-') === literary);
    assert.equal(rewards.reduce((total, question) => total + question.xp, 0), 49900);
    assert.ok(rewards.every(question => getQuestionXp(question) > 0));
  }
});

test('Adabi roadmap parts resolve native lessons, question identities, free starters and durable routes', async () => {
  for (const subject of ADABI_SUBJECTS) {
    const roadmap = getSubjectRoadmap(subject.id);
    assert.equal(roadmap.subjectId, subject.id);
    assert.equal(roadmap.questionsOnly, true);
    const lessons = roadmap.units.flatMap(unit => unit.lessons);
    assert.ok(lessons.length > 0);
    const count = lessons.reduce((total, lesson) => total + lesson.parts.reduce((sum, part) => sum + part.questionIds.length, 0), 0);
    assert.equal(getSubjectCardPresentation(subject).totalCount, count);
    for (const lesson of lessons) for (const part of lesson.parts) {
      const key = { subjectId:subject.id, lessonId:lesson.id, partId:part.id, stepId:part.questionIds[0] };
      assert.deepEqual(resolveQuestionLocation(key), key);
      const native = await loadSubjectLessonPart(subject.id, lesson.id, part.id);
      assert.equal(native.status, 'published');
      assert.deepEqual(native.steps.map(step => step.id), part.questionIds);
      const url = createRouteUrl('https://example.com/?page=learn', { subject:subject.id, lesson:lesson.id, part:part.id, question:key.stepId });
      assert.equal(readRoute(url.search).question, key.stepId);
    }
    assert.ok(hasFreeLessonPractice({ subjectId:subject.id, lessonId:lessons[0].id }));
    if (lessons.length > 1) assert.ok(hasFreeLessonPractice({ subjectId:subject.id, lessonId:lessons[1].id }));
    if (lessons.length > 2) assert.equal(hasFreeLessonPractice({ subjectId:subject.id, lessonId:lessons[2].id }), false);
  }
});

test('the owner picker follows student path and preserves an older off-path selected grant', async () => {
  const { studentDetail } = await import('../src/ui/student-dashboard-view.js');
  const student = { id:123, version:1, username:'adabi-test', path:'literary', curriculum:'gaza', accountType:'subscribed', subscriptionSubjects:['adabi-history','ict'] };
  const markup = studentDetail(student);
  const choices = [...markup.matchAll(/name="subscriptionSubjects" value="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(choices, [...ADABI_SUBJECTS.map(subject => subject.id), 'ict']);
  assert.match(markup, /value="adabi-history" checked/);
  assert.match(markup, /value="ict" checked/);
  assert.doesNotMatch(markup, /undefined/);
});

test('learner home totals use the saved literary path', async () => {
  const { createLearnerSession } = await import('../src/services/learner-session.js');
  const { createSubjectProgressStore } = await import('../src/services/subject-progress-store.js');
  const progressStore = createSubjectProgressStore();
  const session = createLearnerSession({ progressStore });
  session.saveVisitorSelection(selection);
  await session.createAccount({ ...selection, username:'adabi-home-test', phone:'0591234567', password:'test12345' });
  await progressStore.ready(session.getLearnerProgressOwner());
  const snapshot = session.getLearnerHomeSnapshot();
  assert.deepEqual(Object.keys(snapshot.learning.subjects).sort(), ADABI_SUBJECTS.map(subject => subject.id).sort());
  assert.equal(snapshot.learning.currentQuestionsTotal, ADABI_SUBJECTS.reduce((total, subject) => total + getSubjectCardPresentation(subject).totalCount, 0));
  assert.equal(snapshot.learning.currentQuestionsSolved, 0);
  await progressStore.close();
});
