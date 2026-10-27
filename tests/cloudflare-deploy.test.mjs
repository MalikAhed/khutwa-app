import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import worker from '../.github/cloudflare/worker.mjs';

test('Cloudflare forwards account and Students requests with their original session', async () => {
  const routes = JSON.parse(await readFile(new URL('../.github/cloudflare/routes.json', import.meta.url), 'utf8'));
  assert.ok(routes.include.includes('/api/*'));
  assert.ok(routes.include.includes('/students'));
  for (const url of ['/students', '/api/auth/session', '/api/owner/students', '/api/progress']) {
    const request = new Request('https://khutwaa.pages.dev' + url, { headers:{ cookie:'session=existing-admin' } });
    const expected = new Response('existing backend response');
    const actual = await worker.fetch(request, {
      BACKEND:{ fetch(received) {
        assert.equal(received, request);
        assert.equal(received.headers.get('cookie'), 'session=existing-admin');
        return expected;
      } },
      ASSETS:{ fetch() { throw new Error('Private route fell through to static assets'); } },
    });
    assert.equal(actual, expected);
  }
});

test('Cloudflare preserves backend access decisions and fails closed without the backend', async () => {
  const request = new Request('https://khutwaa.pages.dev/students');
  for (const status of [302, 401, 403, 503]) {
    const response = new Response(null, { status, headers:{ location:'/?flow=sign-in' } });
    assert.equal(await worker.fetch(request, { BACKEND:{ fetch:() => response } }), response);
  }
  assert.equal((await worker.fetch(request, {})).status, 503);
  const asset = new Response('public lesson');
  assert.equal(await worker.fetch(new Request('https://khutwaa.pages.dev/src/main.js'), {
    ASSETS:{ fetch:() => asset },
    BACKEND:{ fetch() { throw new Error('Public asset reached the account backend'); } },
  }), asset);
});
