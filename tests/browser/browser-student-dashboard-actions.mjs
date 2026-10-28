import assert from 'node:assert/strict';
import {mkdtemp, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {chromium} from 'playwright';
import {findChrome} from './browser-session.mjs';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {createCloudflareDevelopmentBackend} from '../../src/server/cloudflare-development.mjs';

// Exercise the real local proxy + UI with the deployed API's shape. Mutations
// affect these disposable fixtures only; no request reaches live student data.
const directory = await mkdtemp(path.join(tmpdir(), 'khutwa-admin-ui-'));
const students = Array.from({length:53}, (_, index) => ({id:String(index + 1), username:`student-${index + 1}`, phone:`059800${String(index + 1).padStart(4,'0')}`,
  curriculum:index % 2 ? 'gaza' : 'full-palestinian', path:index % 2 ? 'scientific' : 'literary',
  accountType:index === 1 ? 'subscribed' : 'free', subscriptionType:index === 1 ? 'subscribed' : 'free',
  accessDisabled:index === 2, subscriptionExpiresAt:index === 1 ? '2027-10-28T00:00:00Z' : null, version:0, createdAt:'2026-10-25T12:00:00Z'}));
const mutations = [];
let offline = false, conflict = false;
const fetchImpl = async (url, options) => {
  assert.equal(options.headers.get('cookie'), 'tawjihi_session=fixture-owner');
  if (offline) throw new TypeError('Test outage');
  if (url.pathname === '/students') return new Response('old production HTML', {headers:{'Content-Type':'text/html'}});
  if (url.pathname === '/api/owner/students') {
    const search = url.searchParams.get('search'), filter = url.searchParams.get('filter'), offset = Number(url.searchParams.get('offset'));
    const filtered = students.filter(student => (!search || `${student.username} ${student.phone}`.includes(search))
      && (filter === 'suspended' ? student.accessDisabled : filter === 'free' ? !student.accessDisabled && student.accountType === 'free' : filter === 'subscribed' ? !student.accessDisabled && student.accountType === 'subscribed' : true));
    return Response.json({students:filtered.slice(offset, offset + 50), total:filtered.length, limit:50, offset});
  }
  const id = url.pathname.split('/').at(-1), student = students.find(item => item.id === id);
  if (!student) return Response.json({error:'لم يتم العثور على الطالب.'}, {status:404});
  if (options.method === 'POST') {
    const change = JSON.parse(options.body);
    if (conflict) { student.version++; conflict = false; }
    if (change.version !== student.version) return Response.json({error:'تغيّرت بيانات الطالب. حدّثها قبل الحفظ.'}, {status:409});
    mutations.push(change);
    student.version++;
    if (change.action === 'grant') { student.accountType = student.subscriptionType = 'subscribed'; student.subscriptionExpiresAt = change.duration === 'permanent' ? null : change.expiresAt || '2027-01-28T00:00:00Z'; }
    if (change.action === 'revoke') { student.accountType = student.subscriptionType = 'free'; student.subscriptionExpiresAt = null; }
    if (change.action === 'suspend') student.accessDisabled = true;
    if (change.action === 'restore') student.accessDisabled = false;
    if (change.action === 'delete') { assert.equal(change.confirmUsername, student.username); students.splice(students.indexOf(student), 1); }
    return Response.json({status:change.action === 'delete' ? 'deleted' : 'saved'});
  }
  return Response.json({...student, totalXp:120, level:2, streak:3, questionsSolved:4, completedParts:1, mustReviewCount:1, lastActivity:'2026-10-28',
    parts:[{subjectId:'ict', lessonId:'database-management', partId:'access-basics', completed:false, rewardXp:120,
      completedStepIds:['sample-question'], activityDates:['2026-10-28'], review:[{stepId:'sample-question', solved:true, misses:1, active:true}]}]});
};
const remoteBackend = await createCloudflareDevelopmentBackend({cachePath:path.join(directory, 'profiles.json'), fetchImpl});
const root = path.resolve('.');
const app = await createAppServer({root, config:readRuntimeConfig({PORT:'0', LIVE_RELOAD:'0', ACCOUNTS_DATABASE_PATH:':memory:'}, {root}), remoteBackend, logger:() => {}});
const base = `http://127.0.0.1:${await app.listen()}`;
const browser = await chromium.launch({headless:true, executablePath:await findChrome(), args:['--no-sandbox']});
try {
  const context = await browser.newContext({viewport:{width:1440, height:960}});
  await context.addCookies([{name:'khutwa_cloudflare_session', value:'fixture-owner', url:base, httpOnly:true, sameSite:'Strict'}]);
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400 && !response.url().includes('/api/owner/')) errors.push(`${response.status()}: ${response.url()}`); });
  await page.goto(base + '/students');
  await page.waitForSelector('.student');
  assert.equal(await page.locator('.student').count(), 50);
  assert.equal(await page.locator('body').getAttribute('dir'), null);
  assert.equal(await page.locator('html').getAttribute('dir'), 'rtl');
  assert.equal(await page.locator('body').innerText().then(text => /undefined|NaN|old production HTML/.test(text)), false);
  assert.equal(await page.locator('.heading-art,.sidebar-art').count(), 0);
  assert.equal(await page.locator('body').innerText().then(text => /طلابك، خطوة بخطوة|مساحة الإدارة|إدارة الحسابات|تابع حسابات طلابك/.test(text)), false);
  assert.equal(await page.locator('#next,#previous,.pagination').count(), 0, 'no student pages');
  offline = true;
  await page.locator('#load-more').scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector('#load-status').textContent.includes('تعذّر تحميل المزيد'));
  assert.equal(await page.locator('.student').count(), 50, 'an interrupted scroll keeps loaded students');
  offline = false;
  await page.locator('#load-more').click();
  await page.waitForFunction(() => document.querySelectorAll('.student').length === 53);
  assert.equal(await page.locator('.student h2').first().innerText(), 'student-1', 'scrolling appends instead of replacing earlier students');
  assert.equal(await page.locator('.student h2').last().innerText(), 'student-53');
  assert.equal(await page.locator('#load-more').isVisible(), false);
  await page.evaluate(() => scrollTo(0, 0));
  await page.locator('[data-filter="subscribed"]').click();
  await page.waitForFunction(() => document.querySelectorAll('.student').length === 1);
  assert.match(await page.locator('.student h2').innerText(), /student-2$/);
  await page.locator('[data-filter="suspended"]').click();
  await page.waitForFunction(() => document.querySelector('.student h2')?.textContent === 'student-3');
  await page.locator('[data-filter="all"]').click();
  await page.waitForFunction(() => document.querySelectorAll('.student').length >= 50);
  await page.locator('#search').fill('0598000001');
  await page.locator('#search').press('Enter');
  await page.waitForFunction(() => document.querySelectorAll('.student').length === 1);
  assert.equal(await page.locator('.student h2').innerText(), 'student-1');
  await page.locator('#search').fill('no-match');
  await page.locator('#search').press('Enter');
  await page.waitForSelector('.empty-state');
  assert.equal(await page.locator('.student').count(), 0);
  await page.locator('#search').fill('');
  await page.locator('#search').press('Enter');
  await page.waitForFunction(() => document.querySelectorAll('.student').length >= 50);
  await page.evaluate(() => scrollTo(0, 0));
  for (const width of [320, 768, 1024, 1440]) {
    await page.setViewportSize({width, height:960});
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `dashboard fits ${width}px`);
    assert.ok(await page.locator('[data-student-id="1"]').evaluate(element => element.getBoundingClientRect().width >= 44), 'student action remains usable');
  }
  await page.locator('#search').blur();
  await page.screenshot({path:'/tmp/khutwa-admin-desktop.png', fullPage:false});
  await page.setViewportSize({width:390, height:844});
  await page.evaluate(() => scrollTo(0, 0));
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'mobile page fits viewport');
  await page.screenshot({path:'/tmp/khutwa-admin-mobile.png', fullPage:false});
  await page.locator('#load-more').scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelectorAll('.student').length === 53);
  assert.ok(await page.locator('[data-student-id="53"]').isVisible(), 'mobile scrolling reaches every student');
  await page.evaluate(() => scrollTo(0, 0));
  await page.locator('[data-student-id="1"]').click();
  await page.waitForSelector('#detail-content .part');
  assert.ok(await page.locator('#student-detail').evaluate(element => element.contains(document.activeElement)), 'dialog receives focus');
  assert.ok(await page.locator('#student-detail').evaluate(element => element.scrollWidth <= element.clientWidth), 'mobile dialog fits');
  assert.match(await page.locator('.metrics dd').nth(1).innerText(), /^(120|١٢٠)$/);
  await page.screenshot({path:'/tmp/khutwa-admin-detail-mobile.png'});
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('#student-detail').open);
  assert.ok(await page.locator('[data-student-id="1"]').evaluate(element => element === document.activeElement), 'focus returns to student action');
  await page.setViewportSize({width:1440, height:960});
  await page.locator('[data-student-id="1"]').click();
  await page.waitForSelector('#subscription-form');
  conflict = true;
  await page.locator('#subscription-form button').click();
  await page.waitForSelector('[data-reload-student]:visible');
  assert.equal(await page.locator('#subscription-form button').isDisabled(), true, 'conflict blocks stale writes');
  assert.equal(mutations.length, 0);
  await page.locator('[data-reload-student]').click();
  await page.waitForFunction(() => !document.querySelector('#account-controls')?.disabled);
  await page.locator('#subscription-duration').selectOption('custom');
  const futureDate = new Date(Date.now() + 90 * 86400000).toISOString().slice(0, 10);
  await page.locator('#subscription-expiry').fill(futureDate);
  await page.locator('#subscription-form button').click();
  await page.waitForFunction(() => document.querySelector('#action-status')?.textContent === 'تم حفظ التغيير.');
  assert.equal(mutations.at(-1).action, 'grant');
  assert.equal(mutations.at(-1).version, 1);
  assert.equal(mutations.at(-1).duration, 'custom');
  assert.equal(new Date(mutations.at(-1).expiresAt).getDate(), Number(futureDate.slice(-2)));
  for (const action of ['revoke', 'suspend', 'restore']) {
    const count = mutations.length;
    await page.locator(`[data-account-action="${action}"]`).click();
    assert.equal(mutations.length, count, 'opening confirmation does not write');
    await page.locator('[data-cancel-action]').click();
    assert.equal(mutations.length, count, 'cancel does not write');
    await page.locator(`[data-account-action="${action}"]`).click();
    await page.locator('[data-confirm-action]').click();
    await page.waitForFunction(() => document.querySelector('#action-status')?.textContent === 'تم حفظ التغيير.');
    assert.equal(mutations.at(-1).action, action);
  }
  await page.locator('.danger-zone summary').click();
  await page.locator('#confirm-username').fill('wrong-name');
  const beforeDelete = mutations.length;
  await page.locator('#delete-student-form button').click();
  assert.equal(mutations.length, beforeDelete, 'wrong confirmation cannot delete');
  await page.locator('#confirm-username').fill('student-1');
  await page.locator('#delete-student-form button').click();
  await page.waitForFunction(() => !document.querySelector('#student-detail').open);
  await page.waitForFunction(() => !document.querySelector('[data-student-id="1"]'));
  assert.equal(mutations.at(-1).action, 'delete');
  offline = true;
  await page.locator('#refresh').click();
  await page.waitForSelector('.empty-state');
  assert.equal(await page.locator('#student-count').innerText(), '—');
  offline = false;
  await page.locator('#refresh').click();
  await page.waitForFunction(() => document.querySelectorAll('.student').length >= 50);
  assert.deepEqual(errors, []);
  console.log('Local owner dashboard: search, filters, continuous scrolling, responsive layout, progress, guarded account actions, conflicts and recovery passed.');
} finally {
  await browser.close();
  await app.close();
  await rm(directory, {recursive:true, force:true});
}
