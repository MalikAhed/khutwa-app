import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer, request as httpRequest } from 'node:http';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createCloudflareDevelopmentBackend } from '../src/server/cloudflare-development.mjs';

const account = { id:'live-42', username:'owner', accountType:'free', curriculum:'gaza', path:'scientific', isOwner:true, phone:'private-phone' };
const cookie = 'khutwa_cloudflare_session=verified-token';

test('real account proxy preserves admin access, isolates old local cookies and blocks cross-site requests', async t => {
  const directory = await mkdtemp(path.join(tmpdir(), 'khutwa-cloudflare-proxy-'));
  const cachePath = path.join(directory, 'profiles.json');
  const calls = [];
  let offline = false, expired = false;
  const fetchImpl = async (url, options) => {
    calls.push({ url:String(url), options });
    if (offline) throw new TypeError('Network unavailable');
    if (url.pathname === '/students') return new Response('owner dashboard', { headers:{'Content-Type':'text/html'} });
    if (url.pathname === '/api/auth/sign-in') return Response.json({ account }, {
      headers:{'Set-Cookie':'tawjihi_session=verified-token; Path=/; HttpOnly; Secure; SameSite=Strict'} });
    return Response.json({ account:expired ? null : account });
  };
  let backend = await createCloudflareDevelopmentBackend({ cachePath, fetchImpl });
  const server = createServer(async (request, response) => {
    if (!await backend(request, response)) response.writeHead(200).end('local frontend');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  t.after(async () => { await new Promise(resolve => server.close(resolve)); await rm(directory, { recursive:true, force:true }); });
  const request = (url, options = {}) => fetch(base + url, { ...options, headers:{ Cookie:cookie, ...options.headers } });
  const requestHost = (url, host) => new Promise((resolve, reject) => {
    const outgoing = httpRequest(base + url, { headers:{ Host:host } }, incoming => {
      incoming.resume(); incoming.on('end', () => resolve({ status:incoming.statusCode, headers:incoming.headers }));
    });
    outgoing.on('error', reject); outgoing.end();
  });

  const signedIn = await request('/api/auth/sign-in', { method:'POST', body:JSON.stringify({ identifier:'owner',password:'secret-not-cached' }) });
  assert.equal((await signedIn.json()).account.isOwner, true);
  assert.match(signedIn.headers.get('set-cookie'), /^khutwa_cloudflare_session=verified-token;/);
  assert.doesNotMatch(signedIn.headers.get('set-cookie'), /; Secure/);
  assert.equal(await (await request('/students')).text(), 'owner dashboard');
  assert.equal(calls.at(-1).url, 'https://khutwaa.pages.dev/students');
  assert.equal(calls.at(-1).options.headers.get('cookie'), 'tawjihi_session=verified-token');
  await request('/api/auth/session', { headers:{ Cookie:'tawjihi_session=old-test-token' } });
  assert.equal(calls.at(-1).options.headers.get('cookie'), null);
  const count = calls.length;
  assert.equal((await request('/api/progress', { method:'POST',headers:{ Origin:'https://unrelated.example' },body:'{}' })).status, 403);
  assert.equal((await requestHost('/api/auth/session', 'unrelated.example')).status, 403);
  assert.equal(calls.length, count);
  const redirect = await requestHost('/?page=learn', `localhost:${server.address().port}`);
  assert.equal(redirect.headers.location, base + '/?page=learn');
  const saved = await readFile(cachePath, 'utf8');
  for (const secret of ['verified-token','secret-not-cached','private-phone','owner dashboard']) assert.ok(!saved.includes(secret));

  offline = true;
  backend = await createCloudflareDevelopmentBackend({ cachePath, fetchImpl });
  const restored = await (await request('/api/auth/session')).json();
  assert.equal(restored.account.id, account.id, 'the verified identity survives a development server restart');
  assert.equal(restored.account.isOwner, false, 'admin actions require the online backend');
  assert.equal((await request('/students')).status, 503);
  assert.equal((await request('/api/progress', { method:'POST',body:'{}' })).status, 503, 'offline saves remain in the browser outbox');
  assert.equal((await request('/api/auth/sign-in', { method:'POST',body:'{}' })).status, 503, 'new passwords cannot be authenticated offline');
  assert.equal((await (await request('/api/app-state')).json()).resetId, null);
  assert.equal((await (await request('/api/auth/session', { headers:{ Cookie:'khutwa_cloudflare_session=unknown' } })).json()).account, null);

  offline = false; expired = true;
  assert.equal((await (await request('/api/auth/session')).json()).account, null);
  offline = true;
  assert.equal((await (await request('/api/auth/session')).json()).account, null, 'expired accounts cannot revive from the offline cache');
  offline = false; expired = false;
  await request('/api/auth/session');
  offline = true;
  const signedOut = await request('/api/auth/sign-out', { method:'POST' });
  assert.equal((await signedOut.json()).status, 'signed-out');
  assert.match(signedOut.headers.get('set-cookie'), /Max-Age=0/);
  assert.equal((await (await request('/api/auth/session')).json()).account, null);
});
