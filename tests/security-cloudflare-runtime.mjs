import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { initializeAccountSchema } from '../src/server/account-schema.mjs';
import { getPartQuestionIds } from '../src/domain/question-rewards.js';

const [bundlePath, runtimeModule] = process.argv.slice(2);
if (!bundlePath || !runtimeModule) throw new Error('Usage: node tests/security-cloudflare-runtime.mjs <candidate-bundle.mjs> <miniflare-module-path>');
const { Miniflare, convertV4MiniflareOptions } = await import(pathToFileURL(path.resolve(runtimeModule)).href);
const location = { subjectId:'ict', lessonId:'database-management', partId:'access-basics' };
const questionIds = getPartQuestionIds(location);
const lesson = { status:'published', parts:[{ id:location.partId, stepIds:questionIds }], steps:questionIds.map(id => ({ id, type:'mcq' })) };
const mf = new Miniflare(convertV4MiniflareOptions({
  script:readFileSync(bundlePath, 'utf8'), modules:true, compatibilityDate:'2026-10-23', compatibilityFlags:['nodejs_compat'],
  d1Databases:{ ACCOUNTS:'isolated-security-accounts' },
  durableObjects:{ AUTH:{ className:'Authentication', useSQLite:true }, STUDENTS:{ className:'StudentProgress', useSQLite:true } },
  serviceBindings:{ ASSETS:async request => Response.json(/\/catalog\.[a-f0-9]+\.json$/.test(new URL(request.url).pathname)
    ? { lessons:{ 'ict:database-management':'lesson.json' } } : lesson) },
}));

try {
  const db = await mf.getD1Database('ACCOUNTS');
  const sqlite = new DatabaseSync(':memory:');
  initializeAccountSchema(sqlite);
  const schema = sqlite.prepare("SELECT sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY type DESC")
    .all().map(row => row.sql + ';').join(' ');
  sqlite.close();
  await db.exec(schema.replaceAll('\n', ' '));
  for (const sql of [
    'ALTER TABLE accounts ADD COLUMN access_disabled INTEGER NOT NULL DEFAULT 0',
    'ALTER TABLE accounts ADD COLUMN subscription_expires_at TEXT',
    'ALTER TABLE accounts ADD COLUMN admin_version INTEGER NOT NULL DEFAULT 0',
    'CREATE TABLE admin_audit (id INTEGER PRIMARY KEY AUTOINCREMENT, actor_id INTEGER NOT NULL, student_id INTEGER NOT NULL, action TEXT NOT NULL, details TEXT NOT NULL, created_at TEXT NOT NULL)',
    'CREATE TABLE student_deletions (account_id INTEGER PRIMARY KEY, actor_id INTEGER NOT NULL, created_at TEXT NOT NULL)',
  ]) await db.exec(sql);

  const origin = 'https://security.test';
  let nextClient = 0;
  const client = () => ({ ip:`192.0.2.${++nextClient}`, cookies:new Map() });
  const request = async (browser, route, { body, headers = {} } = {}) => {
    const response = await mf.dispatchFetch(origin + route, {
      method:body === undefined ? 'GET' : 'POST',
      headers:{ Origin:origin, 'CF-Connecting-IP':browser.ip, 'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) Chrome/143.0.0.0',
        Cookie:[...browser.cookies].map(([name, value]) => `${name}=${value}`).join('; '),
        ...(body === undefined ? {} : { 'Content-Type':'application/json' }), ...headers },
      ...(body === undefined ? {} : { body:JSON.stringify(body) }),
    });
    for (const cookie of response.headers.getSetCookie()) {
      const [pair] = cookie.split(';');
      const equal = pair.indexOf('=');
      browser.cookies.set(pair.slice(0, equal), pair.slice(equal + 1));
    }
    return response;
  };
  const register = async (browser, username, extra = {}) => {
    assert.equal((await request(browser, '/api/auth/session')).status, 200);
    const response = await request(browser, '/api/auth/register', { body:{
      username, phone:`059123450${nextClient}`, password:'Security123', curriculum:'gaza', path:'scientific', ...extra,
    } });
    assert.equal(response.status, 201, await response.clone().text());
    const body = await response.json();
    assert.doesNotMatch(JSON.stringify(body), /password|salt|token_hash/);
    for (const cookie of response.headers.getSetCookie()) {
      assert.match(cookie, /; HttpOnly/);
      assert.match(cookie, /; Secure/);
      assert.match(cookie, /; SameSite=Strict/);
    }
    browser.account = body.account;
    return body.account;
  };
  const attacker = client();
  const attackerAccount = await register(attacker, 'security-attacker', {
    accountType:'subscribed', account_type:'subscribed', isOwner:true, staff_role:'owner', subscription_expires_at:'2099-01-01T00:00:00.000Z',
  });
  assert.equal(attackerAccount.isOwner, false);
  assert.equal(attackerAccount.accountType, 'free');
  const victim = client();
  await register(victim, 'security-victim');
  const owner = client();
  await register(owner, 'security-owner');
  await db.prepare("UPDATE accounts SET staff_role='owner' WHERE id=?").bind(Number(owner.account.id)).run();
  const ownerHeader = browser => ({ 'X-Progress-Owner':`account:${browser.account.id}` });
  const saved = await request(victim, '/api/progress', { headers:ownerHeader(victim), body:{
    ...location, type:'answer', id:'security-saved-answer', stepId:questionIds[0], correct:true,
  } });
  assert.equal(saved.status, 200, await saved.clone().text());
  const victimRecords = (await saved.json()).records;
  assert.ok(victimRecords.length);

  for (const endpoint of ['/api/progress', '/api/question-feedback']) {
    assert.equal((await request(attacker, endpoint, { headers:ownerHeader(victim) })).status, 409);
    assert.equal((await request(attacker, endpoint, { headers:ownerHeader(victim), body:{} })).status, 409);
    assert.equal((await request(attacker, endpoint, { headers:ownerHeader(attacker), body:{ accountId:victim.account.id } })).status, 422);
  }
  assert.deepEqual((await (await request(victim, '/api/progress', { headers:ownerHeader(victim) })).json()).records, victimRecords);
  assert.deepEqual((await (await request(attacker, '/api/progress', { headers:ownerHeader(attacker) })).json()).records, []);
  const studentRoute = `/api/owner/students/${victim.account.id}`;
  assert.equal((await request(client(), '/api/owner/students')).status, 401);
  for (const route of ['/api/owner/students', studentRoute, '/students'])
    assert.equal((await request(attacker, route, { headers:{ 'X-Role':'owner', 'X-Account-Type':'subscribed' } })).status, 403);
  for (const action of ['grant', 'revoke', 'suspend', 'restore', 'delete'])
    assert.equal((await request(attacker, studentRoute, { body:{ action, version:0, duration:'permanent', confirmUsername:victim.account.username } })).status, 403);
  assert.equal((await db.prepare('SELECT account_type FROM accounts WHERE id=?').bind(Number(victim.account.id)).first()).account_type, 'free');

  for (const headers of [{ Origin:'https://attacker.test' }, { 'Sec-Fetch-Site':'cross-site' }, { Origin:'null' }])
    assert.equal((await request(owner, studentRoute, { headers, body:{ action:'grant', version:0, duration:'permanent' } })).status, 403);
  const invalidLogin = await request(client(), '/api/auth/sign-in', { body:{ identifier:"' OR 1=1 --", password:'Security123' } });
  assert.equal(invalidLogin.status, 401);
  const search = await request(owner, '/api/owner/students?' + new URLSearchParams({ search:"' OR 1=1 --" }));
  assert.equal(search.status, 200);
  assert.equal((await search.json()).total, 0);
  const forgedPrivilege = await request(owner, studentRoute, { body:{ action:'grant', version:0, duration:'week', staff_role:'owner' } });
  assert.equal(forgedPrivilege.status, 422);

  const grant = await request(owner, studentRoute, { body:{ action:'grant', version:0, duration:'week' } });
  assert.equal(grant.status, 200, await grant.clone().text());
  assert.equal((await (await request(victim, '/api/auth/session')).json()).account.accountType, 'subscribed');
  await db.prepare('UPDATE accounts SET subscription_expires_at=? WHERE id=?').bind('2000-01-01T00:00:00.000Z', Number(victim.account.id)).run();
  assert.equal((await (await request(victim, '/api/auth/session')).json()).account.accountType, 'free');
  const suspend = await request(owner, studentRoute, { body:{ action:'suspend', version:1 } });
  assert.equal(suspend.status, 200, await suspend.clone().text());
  assert.equal((await (await request(victim, '/api/auth/session')).json()).account, null);
  assert.equal((await request(victim, '/api/progress', { headers:ownerHeader(victim) })).status, 401);
  assert.equal((await request(victim, '/api/auth/sign-in', { body:{ identifier:victim.account.username, password:'Security123' } })).status, 403);
  const retained = await request(owner, studentRoute);
  assert.equal(retained.status, 200, await retained.clone().text());
  assert.equal((await retained.json()).questionsSolved, 1, 'suspension preserves saved progress');
  await db.prepare('UPDATE accounts SET access_disabled=1 WHERE id=?').bind(Number(owner.account.id)).run();
  assert.equal((await request(owner, '/api/owner/students')).status, 403);
  assert.equal((await request(owner, studentRoute, { body:{ action:'restore', version:2 } })).status, 403);
  console.log('Isolated Worker security checks passed: forged privileges/subscriptions, unauthorized admin changes, cross-account progress/feedback, SQL injection, CSRF, cookie privacy, subscription expiry and suspension preservation.');
} finally {
  await mf.dispose();
}
