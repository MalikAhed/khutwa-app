import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const base = process.env.DEPLOYMENT_URL;
assert.ok(base?.startsWith('https://'), 'a deployment URL is required');
const root = path.join(process.env.RUNNER_TEMP, 'khutwa-site');
const html = await fetch(base).then(response => response.text());
assert.match(html, /name="learn-account-mode" content="http"/, 'production uses the real account service');
const release = JSON.parse(await readFile(path.join(root, 'release.json'), 'utf8'));
assert.deepEqual(await fetch(new URL('/release.json', base)).then(response => response.json()), release);
const session = await fetch(new URL('/api/auth/session', base));
assert.equal(session.status, 200);
assert.match(session.headers.get('content-type'), /application\/json/);
assert.equal((await session.json()).account, null, 'anonymous requests reach the account API');
const dashboard = await fetch(new URL('/students', base), { redirect:'manual' });
assert.equal(dashboard.status, 302, 'the Students page reaches the protected backend route');
assert.equal(dashboard.headers.get('location'), '/?flow=sign-in', 'anonymous dashboard visitors must sign in');

const libraries = path.join(root, 'assets/browser-libraries');
for (const relative of await readdir(libraries, { recursive:true })) {
  if (!/\.(?:m?js)$/.test(relative)) continue;
  const response = await fetch(new URL('/node_modules/' + relative, base));
  assert.equal(response.status, 200, relative);
  assert.match(response.headers.get('content-type'), /(?:javascript|ecmascript)/, relative);
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), await readFile(path.join(libraries, relative)), relative);
}
console.log('Real account API, protected Students route, HTTP account mode, release version, and browser libraries verified.');
