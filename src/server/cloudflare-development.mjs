import { createHash } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { readJsonBody, sendJson } from './http.mjs';
import { renderStudentDashboard } from './student-dashboard.mjs';

const COOKIE = 'khutwa_cloudflare_session';
const MAX_OFFLINE_AGE = 30 * 24 * 60 * 60 * 1000;
const digest = token => createHash('sha256').update(token).digest('hex');
const profile = account => account && Object.fromEntries(
  ['id', 'username', 'displayName', 'accountType', 'curriculum', 'path', 'isOwner']
    .filter(key => Object.hasOwn(account, key)).map(key => [key, account[key]]));

// Development only: the website remains local; account requests use the existing
// Cloudflare backend. No passwords, session tokens or student lists are cached.
export async function createCloudflareDevelopmentBackend({ cachePath,
  origin = 'https://khutwaa.pages.dev', fetchImpl = globalThis.fetch, timeoutMs = 5000 } = {}) {
  let profiles = {};
  try { profiles = JSON.parse(await readFile(cachePath, 'utf8')); } catch { /* First use or unavailable cache. */ }
  if (!profiles || typeof profiles !== 'object' || Array.isArray(profiles)) profiles = {};
  let writes = Promise.resolve();
  const persist = () => {
    const contents = JSON.stringify(profiles);
    writes = writes.catch(() => {}).then(async () => {
      await mkdir(path.dirname(cachePath), { recursive:true });
      await writeFile(cachePath + '.tmp', contents, { mode:0o600 });
      await rename(cachePath + '.tmp', cachePath);
    });
    return writes.catch(() => {}); // Offline caching must never break online sign-in.
  };
  const tokenFrom = cookie => new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]*)`).exec(cookie || '')?.[1];

  return async (request, response) => {
    const local = new URL(request.url, `http://${request.headers.host}`);
    // Isolate real account browser storage from the old localhost test database.
    if (local.hostname === 'localhost') {
      local.hostname = '127.0.0.1';
      response.writeHead(307, { Location:local.href, 'Cache-Control':'no-store' }).end();
      return true;
    }
    if (local.hostname !== '127.0.0.1') {
      sendJson(response, 403, { status:'forbidden' });
      return true;
    }
    if (!local.pathname.startsWith('/api/') && local.pathname !== '/students') return false;
    if (request.headers['sec-fetch-site'] === 'cross-site'
      || request.headers.origin && request.headers.origin !== local.origin) {
      sendJson(response, 403, { status:'forbidden' });
      return true;
    }
    const token = tokenFrom(request.headers.cookie);
    const key = token ? digest(token) : null;
    const target = new URL(origin);
    target.pathname = local.pathname;
    target.search = local.search;
    const headers = new Headers({ Accept:local.pathname === '/students' ? 'text/html' : 'application/json', Origin:target.origin });
    if (token) headers.set('Cookie', `tawjihi_session=${token}`);
    if (request.headers['x-progress-owner']) headers.set('X-Progress-Owner', request.headers['x-progress-owner']);
    const body = ['GET', 'HEAD'].includes(request.method) ? undefined : JSON.stringify(await readJsonBody(request));
    if (body) headers.set('Content-Type', 'application/json');
    let upstream, bytes;
    try {
      upstream = await fetchImpl(target, { method:request.method, headers, body,
        redirect:'manual', signal:AbortSignal.timeout(timeoutMs) });
      bytes = Buffer.from(await upstream.arrayBuffer());
    } catch { upstream = null; /* Continue with the last verified identity, never a fake login. */ }
    if (!upstream || upstream.status >= 500) {
      const cached = key && profiles[key];
      if (local.pathname === '/api/app-state' && request.method === 'GET') {
        sendJson(response, 200, { resetId:null, offline:true });
      } else if (local.pathname === '/api/auth/session' && request.method === 'GET') {
        const account = cached && Date.now() - cached.verifiedAt < MAX_OFFLINE_AGE
          ? { ...cached.account, isOwner:false } : null;
        sendJson(response, 200, { account, offline:true });
      } else if (local.pathname === '/api/auth/sign-out' && request.method === 'POST') {
        if (key) { delete profiles[key]; await persist(); }
        sendJson(response, 200, { status:'signed-out' }, { 'Set-Cookie':`${COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0` });
      } else sendJson(response, 503, { status:'unavailable', error:'الاتصال غير متاح الآن. تقدّمك محفوظ محليًا وسيُزامَن عند عودة الإنترنت.' });
      return true;
    }

    // The upstream still authorizes the owner page; only its HTML is local.
    // This keeps local UI edits visible without changing live auth or records.
    if (local.pathname === '/students' && request.method === 'GET' && upstream.status === 200) {
      bytes = Buffer.from(renderStudentDashboard());
    }
    const cookies = upstream.headers.getSetCookie().map(cookie => cookie
      .replace(/^tawjihi_session=/, `${COOKIE}=`).replace(/;\s*Secure\b/ig, '').replace(/;\s*Domain=[^;]+/ig, ''));
    const sessionToken = cookies.map(tokenFrom).find(Boolean) || token;
    if (local.pathname.startsWith('/api/auth/')) {
      let result;
      try { result = JSON.parse(bytes.toString()); } catch { /* Forward the actual response below. */ }
      if (upstream.ok && result?.account && sessionToken) {
        profiles[digest(sessionToken)] = { account:profile(result.account), verifiedAt:Date.now() };
        await persist();
      } else if (key && (upstream.status === 401 || upstream.status === 403
        || upstream.ok && (result?.account === null || result?.status === 'signed-out'))) {
        delete profiles[key]; await persist();
      }
    }
    const outgoing = { 'Content-Type':upstream.headers.get('content-type') || 'application/json', 'Cache-Control':'no-store' };
    if (cookies.length) outgoing['Set-Cookie'] = cookies;
    const location = upstream.headers.get('location');
    if (location) {
      const redirect = new URL(location, target);
      outgoing.Location = redirect.origin === target.origin ? local.origin + redirect.pathname + redirect.search + redirect.hash : redirect.href;
    }
    response.writeHead(upstream.status, outgoing).end(bytes);
    return true;
  };
}
