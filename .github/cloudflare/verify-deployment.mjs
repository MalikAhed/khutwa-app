import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const base = process.env.DEPLOYMENT_URL;
assert.ok(base?.startsWith('https://'), 'a deployment URL is required');
// Pages can expose the assets before the new Function routes are available.
async function fetchFunction(url, options) {
  for (let attempt = 0; ; attempt++) {
    const response = await fetch(url, options);
    if (response.status !== 404 || attempt === 14) return response;
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
const root = path.resolve(process.env.SITE_DIR || '_site');
const html = await fetch(base).then(response => response.text());
assert.match(html, /name="learn-account-mode" content="http"/, 'production uses the real account service');
const release = JSON.parse(await readFile(path.join(root, 'release.json'), 'utf8'));
assert.deepEqual(await fetch(new URL('/release.json', base)).then(response => response.json()), release);
assert.match(html, /rel="apple-touch-icon"[^>]*href="\/apple-touch-icon\.png"/, 'iOS uses the dedicated Home Screen icon');
const appleIcon = await fetch(new URL('/apple-touch-icon.png', base));
assert.equal(appleIcon.status, 200, 'the Apple icon is published at its conventional root URL');
assert.match(appleIcon.headers.get('content-type'), /image\/png/);
assert.deepEqual(Buffer.from(await appleIcon.arrayBuffer()), await readFile(path.join(root, 'apple-touch-icon.png')),
  'the Apple icon must be the tested Rocky PNG, not an HTML fallback');
const catalog = await fetch(new URL('/content-manifest.json', base)).then(response => response.json());
assert.deepEqual(catalog, JSON.parse(await readFile(path.join(root, 'content-manifest.json'), 'utf8')),
  'the deployed lesson catalog must match the tested build');
for (const file of ['src/app/background-loading.js', 'src/styles/learner-dashboard.css', 'src/ui/student-dashboard.js', 'src/styles/student-dashboard.css', 'src/services/server-data-reset.js']) {
  const response = await fetch(new URL(`/${file}?v=${release.version}`, base));
  assert.equal(response.status, 200, file);
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), await readFile(path.join(root, file)),
    `${file} must match the tested build`);
}
const session = await fetchFunction(new URL('/api/auth/session', base));
assert.equal(session.status, 200);
assert.match(session.headers.get('content-type'), /application\/json/);
assert.equal((await session.json()).account, null, 'anonymous requests reach the account API');
const dashboard = await fetchFunction(new URL('/students', base), { redirect:'manual' });
assert.equal(dashboard.status, 302, 'the Students page reaches the protected backend route');
assert.equal(new URL(dashboard.headers.get('location'), base).href, new URL('/?flow=sign-in', base).href,
  'anonymous dashboard visitors must sign in on the same site');
for (const route of ['/api/owner/students?filter=all&offset=0','/api/owner/students/1']) {
  const response=await fetchFunction(new URL(route,base));
  assert.equal(response.status,401,'student records remain protected by the existing account backend');
  assert.match(response.headers.get('content-type'),/application\/json/);
}

const libraries = path.join(root, 'assets/browser-libraries');
for (const relative of await readdir(libraries, { recursive:true })) {
  if (!/\.(?:m?js)$/.test(relative)) continue;
  const response = await fetch(new URL('/node_modules/' + relative, base));
  assert.equal(response.status, 200, relative);
  assert.match(response.headers.get('content-type'), /(?:javascript|ecmascript)/, relative);
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), await readFile(path.join(libraries, relative)), relative);
}
console.log('Accounts, Students route, lesson catalog, release version, loading code, dashboard styles and browser libraries verified against the build.');
