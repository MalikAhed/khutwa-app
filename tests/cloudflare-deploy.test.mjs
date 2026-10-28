import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import worker, {createPagesWorker} from '../.github/cloudflare/worker.mjs';
import {prepareCloudflare} from '../scripts/package-cloudflare.mjs';

test('Cloudflare forwards account and Students requests with their original session', async () => {
  const routes = JSON.parse(await readFile(new URL('../.github/cloudflare/routes.json', import.meta.url), 'utf8'));
  assert.ok(routes.include.includes('/api/*'));
  assert.ok(routes.include.includes('/students'));
  for (const url of ['/api/auth/session', '/api/owner/students', '/api/progress']) {
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

test('packaged owner layout is versioned and served only after backend authorization', async t => {
  const directory=await mkdtemp(path.join(tmpdir(),'khutwa-pages-dashboard-'));
  t.after(()=>rm(directory,{recursive:true,force:true}));
  await mkdir(path.join(directory,'node_modules'));
  await mkdir(path.join(directory,'assets'));
  await writeFile(path.join(directory,'index.html'),'<meta name="learn-account-mode" content="http">');
  await writeFile(path.join(directory,'release.json'),JSON.stringify({version:'tested-release'}));
  await prepareCloudflare(directory);
  const source=await readFile(path.join(directory,'_worker.js'),'utf8');
  const packaged=(await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`)).default;
  const request=new Request('https://khutwaa.pages.dev/students',{headers:{Cookie:'tawjihi_session=existing-owner'}});
  const response=await packaged.fetch(request,{BACKEND:{fetch(received){
    assert.equal(received,request);
    return new Response('old backend layout',{headers:{'Content-Type':'text/html','Set-Cookie':'existing-cookie','Content-Length':'18','ETag':'old-layout'}});
  }}});
  assert.equal(response.status,200);
  assert.equal(response.headers.get('cache-control'),'no-store');
  assert.equal(response.headers.get('set-cookie'),'existing-cookie');
  assert.equal(response.headers.get('content-length'),null);
  assert.equal(response.headers.get('etag'),null);
  const html=await response.text();
  assert.match(html,/id="load-more"/);
  assert.match(html,/student-dashboard\.js\?v=tested-release/);
  assert.match(html,/student-dashboard\.css\?v=tested-release/);
  assert.doesNotMatch(html,/old backend layout|id="next"|id="previous"/);
  for(const status of [302,401,403,503]) {
    const denied=new Response(null,{status,headers:{Location:'/?flow=sign-in'}});
    assert.equal(await packaged.fetch(request,{BACKEND:{fetch:()=>denied}}),denied);
  }
  const action=new Request('https://khutwaa.pages.dev/api/owner/students/42',{method:'POST',headers:{Cookie:'existing-owner','Content-Type':'application/json'},body:JSON.stringify({action:'grant',version:7,duration:'month'})});
  const actionResponse=new Response('{"status":"saved"}');
  assert.equal(await packaged.fetch(action,{BACKEND:{async fetch(received){
    assert.equal(received,action);
    assert.deepEqual(await received.json(),{action:'grant',version:7,duration:'month'});
    return actionResponse;
  }}}),actionResponse);
});

test('owner page fails closed if the backend returns an unexpected successful response', async () => {
  const request=new Request('https://khutwaa.pages.dev/students');
  const response=await createPagesWorker('<html>owner layout</html>').fetch(request,{
    BACKEND:{fetch:()=>Response.json({error:'unexpected response'})},
  });
  assert.equal(response.status,503);
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
