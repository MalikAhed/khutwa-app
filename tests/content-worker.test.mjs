import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash, webcrypto } from 'node:crypto';
import vm from 'node:vm';

const source = await readFile(new URL('../content-worker.js', import.meta.url), 'utf8');
const base = 'https://example.test/app/';
const oldVersion = '1111111111111111', newVersion = '2222222222222222';
const prefix = 'khutwa-content:/app/:';
const url = file => new URL(file, base).href;
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

function harness() {
  const stores = new Map(), network = new Map(), requests = [];
  const key = request => typeof request === 'string' ? request : request.url || request.href;
  const caches = {
    async open(name) {
      if (!stores.has(name)) stores.set(name, new Map());
      const store = stores.get(name);
      return {
        async put(request, response) { store.set(key(request), response.clone()); },
        async match(request) { return store.get(key(request))?.clone(); },
        async keys() { return [...store.keys()].map(value => new Request(value)); },
        async delete(request) { return store.delete(key(request)); },
      };
    },
    async keys() { return [...stores.keys()]; },
    async delete(name) { return stores.delete(name); },
  };
  const fetch = async request => {
    const address = key(request);
    requests.push(address);
    const response = network.get(address);
    if (!response) throw new Error(`Offline: ${address}`);
    return response.clone();
  };
  let events;
  const restart = () => {
    events = {};
    vm.runInNewContext(source, { URL, Response, Headers, AbortSignal, TextEncoder, TextDecoder, crypto:webcrypto, caches, fetch,
      self:{ registration:{scope:base}, addEventListener:(name, callback) => { events[name] = callback; },
        clients:{matchAll:async () => [{id:'old'}, {id:'new'}]} },
    });
  };
  restart();
  return { caches, network, requests, restart,
    async message(data, client = 'old') {
      let pending, result;
      events.message({data,source:{id:client},ports:[{postMessage:value => { result = value; }}],waitUntil:task => { pending = task; }});
      await pending;
      return result;
    },
    async get(file, client = 'new', headers = {}) {
      let result;
      events.fetch({request:new Request(url(file), {headers}),clientId:client,respondWith:task => { result = task; }});
      return result;
    },
  };
}

async function seed(h, files) {
  const cache = await h.caches.open(prefix + oldVersion);
  for (const [file, bytes] of Object.entries(files)) await cache.put(url(file), new Response(bytes));
  // An installed pre-fingerprint release must still be reusable and stay intact.
  await h.message({type:'CONTENT_CONFIG',version:oldVersion,files:Object.keys(files)});
  await cache.put(url('index.html'), new Response(`<meta name="learn-release" content="${oldVersion}">`));
  await h.message({type:'OFFLINE_READY'});
}
function publish(h, files) {
  h.network.set(url('content-manifest.json'), Response.json({version:newVersion,
    onboarding:[],helpers:Object.keys(files),lessons:[],
    hashes:Object.fromEntries(Object.entries(files).map(([file, bytes]) => [file,hash(bytes)])),
  }));
  for (const [file, bytes] of Object.entries(files)) h.network.set(url(file), new Response(bytes));
}

test('updates reuse unchanged banks, imports, styles, fonts and images; only changed bytes download', async () => {
  const h = harness();
  const oldBank = `import './helper.js?v=${oldVersion}'; export const question = 'unchanged';`;
  const newBank = oldBank.replaceAll(oldVersion,newVersion);
  const image = new Uint8Array([137,80,78,71,255,0,1,2]);
  await seed(h, {
    [`src/bank.js?v=${oldVersion}`]:oldBank,
    [`src/main.css?v=${oldVersion}`]:`@import './other.css?v=${oldVersion}';`,
    [`src/changed.js?v=${oldVersion}`]:'old question',
    'assets/figure.png':image, 'assets/font.woff2':image,
    'assets/changed.svg':'old figure',
  });
  const files = {
    [`src/bank.js?v=${newVersion}`]:newBank,
    [`src/main.css?v=${newVersion}`]:`@import './other.css?v=${newVersion}';`,
    [`src/changed.js?v=${newVersion}`]:'corrected question',
    'assets/figure.png':image, 'assets/font.woff2':image,
    'assets/changed.svg':'corrected figure',
  };
  publish(h, files);
  // No CONTENT_CONFIG yet: startup itself should discover and reuse the release.
  for (const [file, bytes] of Object.entries(files)) {
    const response = await h.get(file,'new',{'X-Learn-Download':'1'});
    assert.equal(hash(Buffer.from(await response.arrayBuffer())),hash(bytes),file);
  }
  assert.deepEqual(h.requests,[url('content-manifest.json'),url(`src/changed.js?v=${newVersion}`),url('assets/changed.svg')]);
  assert.equal(await (await h.get(`src/bank.js?v=${oldVersion}`,'old')).text(),oldBank,'open old tab keeps old imports');
  assert.equal(await (await h.get('assets/changed.svg','old')).text(),'old figure','old tab keeps its figure');
  const metadata = await h.caches.open(prefix+'clients');
  assert.equal((await (await metadata.match(url('__offline_shell__'))).json()).version,oldVersion,'old offline release survives an incomplete update');
  h.restart(); h.network.clear(); h.requests.length = 0;
  assert.equal(await (await h.get(`src/bank.js?v=${newVersion}`)).text(),newBank,'worker restart uses persisted configuration');
  assert.equal(hash(Buffer.from(await (await h.get('assets/figure.png?play=42')).arrayBuffer())),hash(image));
  assert.deepEqual(h.requests,[],'restart and animation playback work offline');
});

test('missing or corrupt cache entries download; wrong deployment bytes are rejected without replacing old offline data', async () => {
  const h = harness();
  await seed(h,{[`src/corrupt.js?v=${oldVersion}`]:'damaged cache'});
  const files = {[`src/corrupt.js?v=${newVersion}`]:'valid new source', 'assets/missing.svg':'new image', 'assets/race.svg':'expected release image'};
  publish(h,files);
  h.network.set(url('assets/race.svg'),new Response('a different deployment'));
  assert.equal(await (await h.get(`src/corrupt.js?v=${newVersion}`)).text(),'valid new source');
  assert.equal(await (await h.get('assets/missing.svg')).text(),'new image');
  assert.equal((await h.get('assets/race.svg')).type,'error');
  const cache = await h.caches.open(prefix+newVersion);
  assert.equal(await cache.match(url('assets/race.svg')),undefined);
  await cache.put(url('assets/missing.svg'),new Response('bad partial installation'));
  assert.equal(await (await h.get('assets/missing.svg')).text(),'new image','invalid current-release cache is repaired, not counted as installed');
  h.network.set(url('assets/race.svg'),new Response(files['assets/race.svg']));
  assert.equal(await (await h.get('assets/race.svg')).text(),files['assets/race.svg'],'retry recovers');
  assert.equal(await h.get('api/progress'),undefined,'private API is never intercepted');
  assert.equal(await h.get('students'),undefined,'student dashboard is never cached');
});

test('without new fingerprints the worker downloads rather than reusing an older file', async () => {
  const h = harness();
  await seed(h,{'assets/same.svg':'old bytes'});
  await h.message({type:'CONTENT_CONFIG',version:newVersion,files:['assets/same.svg']},'new');
  h.network.set(url('assets/same.svg'),new Response('new bytes'));
  assert.equal(await (await h.get('assets/same.svg')).text(),'new bytes');
  assert.deepEqual(h.requests,[url('assets/same.svg')]);
});

test('unavailable cache storage still permits online loading', async () => {
  const h = harness();
  h.caches.open = async () => { throw new Error('Storage unavailable'); };
  h.network.set(url(`src/start.js?v=${newVersion}`),new Response('online source'));
  assert.equal(await (await h.get(`src/start.js?v=${newVersion}`)).text(),'online source');
});
