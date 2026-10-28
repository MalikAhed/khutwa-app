import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chromium, webkit } from 'playwright';
import { createAppServer } from '../../src/server/app-server.mjs';
import { readRuntimeConfig } from '../../src/server/runtime-config.mjs';
import { findChrome } from './browser-session.mjs';

// Real HTTP cookies and a disposable database/profile; never use live accounts.
const root = process.cwd();
const app = await createAppServer({ root, logger:() => {}, config:readRuntimeConfig({
  PORT:'0', LIVE_RELOAD:'0', ACCOUNTS_DATABASE_PATH:':memory:',
}, { root }) });
try {
  await app.accountStore.createAccount({ username:'restart-test', phone:'0591234567',
    curriculum:'gaza', path:'scientific', password:'Test-only-123' });
  const base = `http://127.0.0.1:${await app.listen()}`;
  for (const [name, engine] of Object.entries({ chromium, webkit })) {
    const profile = await mkdtemp(path.join(tmpdir(), 'khutwa-session-'));
    const options = { viewport:{ width:390, height:844 }, reducedMotion:'reduce',
      ...(name === 'chromium' ? { executablePath:await findChrome(), args:['--no-sandbox'] } : {}) };
    let context;
    try {
      context = await engine.launchPersistentContext(profile, options);
      const login = await context.request.post(`${base}/api/auth/sign-in`, {
        data:{ identifier:'restart-test', password:'Test-only-123' },
      });
      assert.equal(login.status(), 200);
      const cookie = (await context.cookies()).find(cookie => cookie.name === 'tawjihi_session');
      assert.ok(cookie?.httpOnly && cookie.expires > Date.now() / 1000 + 86400);
      await context.close();
      context = await engine.launchPersistentContext(profile, options);
      assert.equal((await context.cookies()).find(item => item.name === 'tawjihi_session')?.value, cookie.value, 'cookie survives browser restart');
      assert.ok((await (await context.request.get(`${base}/api/auth/session`)).json()).account, 'server accepts restored session');
      const page = await context.newPage();
      let reads = 0;
      await page.route('**/api/auth/session', async route => {
        if (++reads === 1) await route.abort();
        else await route.continue();
      });
      await page.goto(base);
      await page.locator('[data-learner-dashboard]').waitFor();
      await page.waitForFunction(() => !document.querySelector('#app-splash'));
      assert.equal(reads, 2, 'a transient reconnect retries the session, without asking for a password');
      assert.equal((await context.cookies()).find(cookie => cookie.name === 'tawjihi_session')?.value, cookie.value);
      await page.unroute('**/api/auth/session');
      await page.route('**/api/auth/session', route => route.fulfill({
        status:503, contentType:'application/json', body:'{"status":"unavailable"}',
      }));
      await page.reload();
      await page.locator('[data-learner-dashboard]').waitFor();
      await page.waitForFunction(() => !document.querySelector('#app-splash'));
      assert.equal(await page.locator('.visitor-landing:visible').count(), 0, 'an outage must not become a sign-out screen');
      await page.unroute('**/api/auth/session');
      await page.reload();
      await page.locator('[data-learner-dashboard]').waitFor();
      await page.waitForFunction(() => !document.querySelector('#app-splash'));
      assert.equal((await context.request.post(`${base}/api/auth/sign-out`)).status(), 200);
      await context.close();
      context = await engine.launchPersistentContext(profile, options);
      const signedOut = await context.newPage();
      await signedOut.goto(base);
      await signedOut.locator('.visitor-landing').waitFor();
      await signedOut.waitForFunction(() => !document.querySelector('#app-splash'));
      assert.equal(await signedOut.locator('[data-learner-dashboard]:visible').count(), 0, 'explicit sign-out survives restart');
      console.log(`${name}: persistent sign-in, transient recovery, verified offline fallback and sign-out passed.`);
    } finally {
      await context?.close();
      await rm(profile, { recursive:true, force:true });
    }
  }
} finally { await app.close(); }
