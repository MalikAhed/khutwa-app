import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { initializeAccountSchema } from '../src/server/account-schema.mjs';
import { ADABI_COURSES } from '../src/data/lessons/adabi/catalog.js';
import { ADABI_SUBJECTS } from '../src/data/course.js';
import { loadAdabiLessonPart, readAdabiExplanation } from '../src/server/cloudflare-adabi-content.mjs';
import { getQuestionXp } from '../src/domain/question-rewards.js';

const [bundlePath, runtimeModule] = process.argv.slice(2);
if (!bundlePath || !runtimeModule) throw new Error('Usage: node tests/cloudflare-adabi-runtime.mjs <candidate-bundle.mjs> <miniflare-module-path>');
const preliminary = process.env.ADABI_RUNTIME_PRELIMINARY === '1';
if (!preliminary) {
  assert.equal(ADABI_COURSES.length, 9, 'The release must verify all nine Adabi subjects.');
  assert.deepEqual(ADABI_COURSES.map(course => course.subjectId).sort(), ADABI_SUBJECTS.map(subject => subject.id).sort());
}
const { Miniflare, convertV4MiniflareOptions } = await import(pathToFileURL(path.resolve(runtimeModule)).href);
const original = { subjectId:'ict', lessonId:'database-management', partId:'access-basics', stepId:'exam-p09-q1-1' };
const savedPart = (records, key) => records.find(([id]) =>
  id === JSON.stringify([key.subjectId, key.lessonId, key.partId]))?.[1];
const originalAssets = {
  '/content/catalog.ba1d0a1e6782f489.json':{ lessons:{ 'ict:database-management':'scientific.json' } },
  '/scientific.json':{ status:'published', parts:[{ id:original.partId, stepIds:[original.stepId] }],
    steps:[{ id:original.stepId, type:'mcq', url:'scientific-step.json' }] },
  '/scientific-step.json':{ type:'mcq', content:{ correctFeedback:'Scientific explanation retained.' } },
};
const mf = new Miniflare(convertV4MiniflareOptions({
  script:readFileSync(bundlePath, 'utf8'), modules:true,
  compatibilityDate:'2026-10-27', compatibilityFlags:['nodejs_compat'],
  d1Databases:{ ACCOUNTS:'adabi-disposable-accounts' },
  durableObjects:{ AUTH:{ className:'Authentication', useSQLite:true }, STUDENTS:{ className:'StudentProgress', useSQLite:true } },
  serviceBindings:{ ASSETS:async request => {
    const value = originalAssets[new URL(request.url).pathname];
    return new Response(JSON.stringify(value || {}), { status:value ? 200 : 404, headers:{ 'Content-Type':'application/json' } });
  } },
}));

try {
  const db = await mf.getD1Database('ACCOUNTS');
  const schema = new DatabaseSync(':memory:');
  initializeAccountSchema(schema);
  const statements = schema.prepare("SELECT sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY type DESC").all();
  await db.exec(statements.map(row => row.sql + ';').join(' ').replaceAll('\n', ' '));
  schema.close();
  for (const sql of [
    'ALTER TABLE accounts ADD COLUMN subscription_subjects TEXT',
    'ALTER TABLE accounts ADD COLUMN access_disabled INTEGER NOT NULL DEFAULT 0',
    'ALTER TABLE accounts ADD COLUMN subscription_expires_at TEXT',
    'ALTER TABLE accounts ADD COLUMN version INTEGER NOT NULL DEFAULT 0',
  ]) await db.exec(sql);
  const call = (pathname, { cookie='', body, owner } = {}) => mf.dispatchFetch('https://app.test' + pathname, {
    method:body ? 'POST' : 'GET', headers:{
      'CF-Connecting-IP':'192.0.2.77', 'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) Chrome/143.0.0.0 Safari/537.36',
      ...(cookie ? { Cookie:cookie } : {}), ...(body ? { 'Content-Type':'application/json' } : {}),
      ...(owner ? { 'X-Progress-Owner':owner } : {}),
    }, ...(body ? { body:JSON.stringify(body) } : {}),
  });
  const registration = await call('/api/auth/register', { body:{
    username:'adabi-runtime', phone:'0591234777', password:'Runtime123', curriculum:'gaza', path:'literary',
  } });
  assert.equal(registration.status, 201, await registration.clone().text());
  const account = (await registration.json()).account;
  assert.equal(account.path, 'literary');
  const cookie = registration.headers.getSetCookie().map(item => item.split(';')[0]).join('; ');
  const owner = `account:${account.id}`;
  const save = body => call('/api/progress', { cookie, owner, body });
  const receipt = async body => {
    const response = await save(body);
    assert.equal(response.status, 200, await response.clone().text());
    return response.json();
  };
  let attempts = 0, flashcards = 0;
  for (const course of ADABI_COURSES) {
    const lesson = course.lessons[0], part = lesson.parts[0];
    const location = { subjectId:course.subjectId, lessonId:lesson.id, partId:part.id };
    const native = await loadAdabiLessonPart(location.subjectId, location.lessonId, location.partId);
    assert.ok(native?.steps.length);
    for (const type of ['question', 'activity']) {
      const step = native.steps.find(candidate => candidate.type === type);
      if (!step) continue;
      const body = { ...location, id:`adabi-runtime-${++attempts}`, type:'answer', stepId:step.id,
        correct:type === 'question' ? true : null };
      const first = await receipt(body);
      const retry = await receipt(body);
      assert.deepEqual(retry.records, first.records, 'An acknowledged retry preserves saved answers and XP.');
      assert.equal(retry.resources.gems, first.resources.gems);
      const completion = { ...location, id:`${body.id}-completion`, type:'completion',
        completedStepIds:[step.id], isComplete:false };
      const completed = await receipt(completion);
      const completionRetry = await receipt(completion);
      assert.deepEqual(completionRetry.records, completed.records, 'Continue retries preserve completed steps.');
      const record = savedPart(completed.records, location);
      assert.ok(record, 'Every Adabi subject has durable progress.');
      assert.ok(record.completedStepIds.includes(step.id));
      assert.equal(record.rewardXp, savedPart(first.records, location).rewardXp, 'Continuing never mints answer XP.');
      if (type === 'question') assert.ok(record.rewardXp >= getQuestionXp({ ...location, stepId:step.id }));
      let gemsBeforeExplanation = first.resources.gems;
      if (type === 'activity') {
        flashcards++;
        const selfCheck = { ...body, id:`${body.id}-self-check`, correct:true };
        const checked = await receipt(selfCheck);
        const checkedRetry = await receipt(selfCheck);
        assert.deepEqual(checkedRetry.records, checked.records);
        assert.equal(savedPart(checked.records, location).rewardXp,
          record.rewardXp + getQuestionXp({ ...location, stepId:step.id }), 'A correct flashcard self check receives its question XP once.');
        assert.equal(checked.resources.gems, first.resources.gems + 7);
        assert.equal(checkedRetry.resources.gems, checked.resources.gems);
        gemsBeforeExplanation = checked.resources.gems;
      }
      const explanation = await receipt({ ...location, stepId:step.id, type:'explanation-unlock' });
      assert.ok(explanation.explanation.markdown.trim());
      assert.deepEqual(explanation.explanation, await readAdabiExplanation({ ...location, stepId:step.id }), 'Worker explanations match the finalized native source.');
      assert.equal(explanation.resources.gems, gemsBeforeExplanation, 'Starter explanations remain included.');
    }
  }
  assert.ok(flashcards > 0, 'Written questions save through the flashcard contract.');
  const scientific = await receipt({ ...original, id:'adabi-scientific-regression', type:'answer', correct:true });
  const oldRecord = savedPart(scientific.records, original);
  assert.equal(oldRecord.rewardXp, getQuestionXp(original), 'Scientific XP remains unchanged.');
  const oldExplanation = await receipt({ ...original, type:'explanation-unlock' });
  assert.equal(oldExplanation.explanation.markdown, 'Scientific explanation retained.');

  const laterCourse = ADABI_COURSES.find(course => course.lessons.length > 2);
  assert.ok(laterCourse);
  const laterLesson = laterCourse.lessons[2], laterPart = laterLesson.parts[0];
  const later = { subjectId:laterCourse.subjectId, lessonId:laterLesson.id, partId:laterPart.id,
    stepId:laterPart.questionIds[0], type:'explanation-unlock' };
  const beforeLater = await call('/api/progress', { cookie, owner });
  const gemsBeforeLater = (await beforeLater.json()).resources.gems;
  const priced = await receipt(later);
  assert.ok(priced.explanation.markdown.trim());
  assert.equal(priced.resources.gems, gemsBeforeLater - 50, 'Later unpurchased explanations retain the existing price.');
  const purchasedRetry = await receipt(later);
  assert.equal(purchasedRetry.resources.gems, priced.resources.gems, 'Unlock retries never charge twice.');

  const selected = ADABI_COURSES[0].subjectId;
  await db.prepare("UPDATE accounts SET account_type='subscribed', subscription_subjects=?, subscription_expires_at=? WHERE id=?")
    .bind(JSON.stringify([selected]), new Date(Date.now() + 86400000).toISOString(), account.id).run();
  const session = await call('/api/auth/session', { cookie });
  assert.equal(session.status, 200);
  assert.deepEqual((await session.json()).account.subscriptionSubjects, [selected], 'Existing account projection retains selected Adabi subscription scopes.');
  const laterKeys = course => course.lessons.slice(2).flatMap(lesson => lesson.parts.flatMap(part =>
    part.questionIds.map(stepId => ({ subjectId:course.subjectId, lessonId:lesson.id, partId:part.id, stepId, type:'explanation-unlock' }))));
  const selectedLater = laterKeys(ADABI_COURSES[0]).find(key => key.stepId !== later.stepId);
  assert.ok(selectedLater);
  const beforeSelected = await call('/api/progress', { cookie, owner });
  const selectedGems = (await beforeSelected.json()).resources.gems;
  const includedSelected = await receipt(selectedLater);
  assert.equal(includedSelected.resources.gems, selectedGems, 'The selected Adabi subject includes later explanations.');
  const unselectedCourse = ADABI_COURSES.find(course => course.subjectId !== selected && course.lessons.length > 2);
  if (!preliminary) assert.ok(unselectedCourse);
  if (unselectedCourse) {
    const unselected = await receipt(laterKeys(unselectedCourse)[0]);
    assert.equal(unselected.resources.gems, selectedGems - 50, 'A selected subscription never grants an unselected Adabi subject.');
  }
  await db.prepare('UPDATE accounts SET subscription_subjects=NULL WHERE id=?').bind(account.id).run();
  let loadedLessons = 0;
  const beforeAll = await call('/api/progress', { cookie, owner });
  const gemsBeforeAll = (await beforeAll.json()).resources.gems;
  const modules = ADABI_COURSES.flatMap(course => course.lessons.flatMap(lesson =>
    lesson.parts.map(part => ({ course,lesson,part }))));
  for (let start = 0; start < modules.length; start += 4) {
    const results = await Promise.allSettled(modules.slice(start,start+4).map(async ({ course,lesson,part }) => {
      const native = await loadAdabiLessonPart(course.subjectId, lesson.id, part.id);
      assert.deepEqual(native.steps.map(step => step.id), part.questionIds, 'Backend question order and counts match each published part.');
      const key = { subjectId:course.subjectId, lessonId:lesson.id, partId:part.id, stepId:part.questionIds[0] };
      const explanation = await receipt({ ...key, type:'explanation-unlock' });
      assert.ok(explanation.explanation.markdown.trim(), 'Every lesson module initializes inside the Worker.');
      assert.deepEqual(explanation.explanation, await readAdabiExplanation(key));
      assert.equal(explanation.resources.gems, gemsBeforeAll, 'All-subject subscribers retain included explanations.');
      loadedLessons++;
    }));
    const failures = results.filter(result => result.status === 'rejected');
    assert.equal(failures.length,0,failures.map(result => String(result.reason?.stack || result.reason)).join('\n'));
  }
  let pairedBlanks = 0;
  for (const course of ADABI_COURSES) for (const lesson of course.lessons) for (const part of lesson.parts) {
    for (const id of part.questionIds.filter(id => id.endsWith('-blank-2'))) {
      pairedBlanks++;
      for (const stepId of [id.slice(0,-'-blank-2'.length),id]) {
        const key = { subjectId:course.subjectId, lessonId:lesson.id, partId:part.id, stepId };
        const response = await receipt({ ...key, type:'explanation-unlock' });
        assert.deepEqual(response.explanation, await readAdabiExplanation(key), 'Each paired blank receives its own finalized explanation.');
      }
    }
  }
  if (!preliminary) assert.equal(pairedBlanks, 9, 'All paired-blank MCQs are checked individually.');
  const wrongOwner = await call('/api/progress', { cookie, owner:'account:999999', body:{ ...original, id:'adabi-wrong-owner', type:'answer', correct:true } });
  assert.equal(wrongOwner.status, 409);
  const beforeInvalid = await call('/api/progress', { cookie, owner });
  const preserved = await beforeInvalid.json();
  for (const [index,subjectId] of [undefined,null,42,{},[], '', 'adabi-unknown'].entries()) {
    const key = { ...original, subjectId };
    for (const body of [
      { ...key, id:`invalid-answer-${index}`, type:'answer', correct:true },
      { ...key, type:'explanation-unlock' },
      { ...key, id:`invalid-navigation-${index}`, type:'question-navigation', kind:'jump' },
    ]) {
      const response = await save(body);
      assert.ok([400,422].includes(response.status), `Invalid subject must be rejected normally, received ${response.status}: ${await response.text()}`);
    }
  }
  const afterInvalid = await call('/api/progress', { cookie, owner });
  const unchanged = await afterInvalid.json();
  assert.deepEqual(unchanged.records, preserved.records, 'Invalid subjects never modify saved work.');
  assert.equal(unchanged.resources.gems, preserved.resources.gems);
  console.log(`${preliminary ? 'PRELIMINARY: ' : ''}Recovered Adabi Worker passed ${ADABI_COURSES.length} subject saves, ${loadedLessons} lesson modules, ${flashcards} flashcards, idempotent retries, included explanations, scientific asset/XP continuity and selected-subject projection.`);
} finally {
  await mf.dispose();
}
