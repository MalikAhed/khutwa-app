import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { createAppServer } from '../src/server/app-server.mjs';
import { readRuntimeConfig } from '../src/server/runtime-config.mjs';

test('suspension rejects existing sessions and credentials without losing learner progress', async t => {
  const directory = await mkdtemp(path.join(tmpdir(), 'khutwa-security-access-'));
  const databasePath = path.join(directory, 'accounts.sqlite');
  const config = readRuntimeConfig({ PORT:'0', LIVE_RELOAD:'0', ACCOUNTS_DATABASE_PATH:databasePath }, { root:process.cwd() });
  const app = await createAppServer({ root:process.cwd(), config, logger:() => {} });
  const database = new DatabaseSync(databasePath);
  t.after(async () => { database.close(); await app.close(); await rm(directory, { recursive:true, force:true }); });
  const base = `http://127.0.0.1:${await app.listen()}`;
  const credentials = { username:'suspended-student', password:'Student123', curriculum:'gaza', path:'scientific' };
  const { account } = await app.accountStore.createAccount(credentials);
  const session = app.accountStore.createSession(account.id);
  const headers = { Cookie:`tawjihi_session=${session.token}`, 'X-Progress-Owner':`account:${account.id}`, 'Content-Type':'application/json' };
  const saved = await fetch(base + '/api/progress', { method:'POST', headers, body:JSON.stringify({
    type:'answer', id:'before-suspension', subjectId:'ict', lessonId:'database-management', partId:'access-basics', stepId:'exam-p09-q1-1', correct:true,
  }) });
  assert.equal(saved.status, 200);
  headers.Cookie += '; ' + saved.headers.getSetCookie().map(cookie => cookie.split(';')[0]).join('; ');
  const progress = app.accountStore.progress.read(account.id);
  assert.ok(progress.length);

  database.prepare("UPDATE accounts SET account_type='banned' WHERE id=?").run(Number(account.id));
  assert.equal(app.accountStore.getAccountForSession(session.token), null);
  assert.equal(await app.accountStore.authenticate(credentials.username, credentials.password), null);
  const status = await fetch(base + '/api/auth/session', { headers });
  assert.equal((await status.json()).account, null);
  const signIn = await fetch(base + '/api/auth/sign-in', { method:'POST', headers, body:JSON.stringify({ identifier:credentials.username, password:credentials.password }) });
  assert.equal(signIn.status, 401);
  assert.equal(signIn.headers.get('set-cookie'), null);
  for (const endpoint of ['/api/progress', '/api/question-feedback']) {
    for (const method of ['GET', 'POST']) {
      const response = await fetch(base + endpoint, { method, headers, ...(method === 'POST' ? { body:'{}' } : {}) });
      assert.equal(response.status, 401, `${method} ${endpoint}`);
    }
  }
  assert.deepEqual(app.accountStore.progress.read(account.id), progress, 'suspension leaves answers and rewards intact');

  database.prepare("UPDATE accounts SET account_type='free' WHERE id=?").run(Number(account.id));
  const resumed = await fetch(base + '/api/progress', { headers });
  assert.equal(resumed.status, 200);
  assert.deepEqual(app.accountStore.progress.read(account.id), progress);

  database.prepare("UPDATE accounts SET staff_role='owner' WHERE id=?").run(Number(account.id));
  assert.equal((await fetch(base + '/api/owner/students', { headers })).status, 200);
  database.prepare("UPDATE accounts SET account_type='banned' WHERE id=?").run(Number(account.id));
  for (const endpoint of ['/api/owner/students', `/api/owner/students/${account.id}`])
    assert.equal((await fetch(base + endpoint, { headers })).status, 401, endpoint);
  assert.equal((await fetch(base + '/students', { headers, redirect:'manual' })).status, 302);
});
