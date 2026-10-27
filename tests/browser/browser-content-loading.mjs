import assert from 'node:assert/strict';
import { chromium, firefox, webkit } from 'playwright';
import { startPreviewServer } from '../../scripts/preview-server.mjs';

const server = await startPreviewServer({root:process.env.PREVIEW_ROOT});
const engine = process.env.BROWSER_ENGINE || 'chromium';
const browser = await {chromium,firefox,webkit}[engine].launch(engine === 'chromium'
  ? {headless:true, executablePath:process.env.CHROME_BIN || '/usr/bin/google-chrome', args:['--no-sandbox']}
  : {headless:true});
try {
  const context = await browser.newContext({viewport:{width:1440,height:900}});
  const page = await context.newPage();
  // Explicitly await asynchronous Cache API predicates in the installed browser harness.
  const waitForAsync = async (predicate, argument) => {
    const deadline = Date.now() + 30000;
    while (Date.now() < deadline) {
      if (await page.evaluate(predicate,argument)) return;
      await page.waitForTimeout(50);
    }
    const diagnostics = await page.evaluate(async () => ({hidden:document.hidden,online:navigator.onLine,
      storage:await navigator.storage.estimate(),caches:await Promise.all((await caches.keys()).map(async name=>({name,count:(await (await caches.open(name)).keys()).length}))),
      recent:performance.getEntriesByType('resource').slice(-8).map(item=>({name:item.name,duration:item.duration}))}));
    assert.fail('Timed out waiting for downloaded content: '+JSON.stringify(diagnostics));
  };
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if(response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  await page.goto(server.base + '?flow=sign-in');
  await page.waitForFunction(() => !document.querySelector('#app-splash'));
  await page.locator('[name=identifier]').fill('subscribed');
  await page.locator('[name=password]').fill('Learn123');
  await page.locator('[data-sign-in-form] [type=submit]').click();
  await page.locator('[data-learner-dashboard]').waitFor();
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
  const manifest = await page.evaluate(() => fetch('content-manifest.json').then(response => response.json()));
  assert.equal(new Set(manifest.lessons.slice(0,9).map(lesson => lesson.subjectId)).size,9);
  assert.ok(manifest.onboarding.some(file => file.includes('generated-scientific')));
  assert.ok(manifest.helpers.some(file => file.includes('rocky-super.svg')));
  assert.ok(manifest.helpers.some(file => file.includes('rocky-happy-jump.svg')));
  const target = manifest.lessons.find(lesson => lesson.subjectId === 'physics');
  // The public navigation goes through the same priority hand-off as every lesson.
  await page.locator('[data-subject=physics]').click();
  await page.locator('.subject-roadmap').waitFor();
  await page.locator(`[data-roadmap-lesson="${target.lessonId}"][data-roadmap-part]`).first().click();
  const start = page.locator('[data-bubble-start]');
  if (await start.count()) await start.click();
  await page.locator('[data-live-authored-step]').waitFor();
  await page.waitForFunction(() => !document.querySelector('.media-pending'));
  await waitForAsync(async ({files,version}) => {
    const cache = await caches.open(`khutwa-content:${new URL('./',document.baseURI).pathname}:${version}`);
    return (await Promise.all(files.map(file => cache.match(new URL(file,document.baseURI))))).every(Boolean);
  }, {files:target.files,version:manifest.version});
  console.log('Selected lesson fully cached.');
  const media = target.files.find(file => file.startsWith('assets/'));
  assert.ok(media,'selected lesson has media to test');
  const cacheResult = await page.evaluate(async file => {
    const response = await fetch(file);
    const image = new Image(); image.src = file; await image.decode();
    return {ok:response.ok,width:image.naturalWidth};
  },media);
  assert.ok(cacheResult.ok && cacheResult.width > 0);
  // Disconnect the host so cached worker responses remain observable in every engine.
  server.setOffline(true);
  const offline = await page.evaluate(async files => Promise.all(files.map(async file => {
    try { const response = await fetch(file, {cache:"no-store"}); return {file,ok:response.ok && (await response.arrayBuffer()).byteLength > 0}; }
    catch(error) { return {file,error:error.message}; }
  })),target.files);
  assert.deepEqual(offline.filter(result => !result.ok),[], 'all questions and figures of the selected lesson are cached');
  console.log('Selected lesson serves every file offline.');
  server.setOffline(false);
  await page.evaluate(() => dispatchEvent(new Event('online')));
  await page.evaluate(() => document.querySelector('[data-page=rated-questions]').click());
  await page.locator('.subject-card--rated').first().waitFor();
  for(const width of [1440,390]) {
    await page.setViewportSize({width,height:900});
    await page.locator('[data-rated-subject=physics][data-rating=hard]').focus();
    await page.evaluate(() => {
      window.originalRatedCard = document.querySelector('.subject-card--rated');
      window.originalRatedFocus = document.activeElement;
      window.ratedAnimations = 0;
      document.querySelector('.course-units').addEventListener('animationstart',() => window.ratedAnimations++);
    });
    // Exercise repeated focus sync notifications without replacing the visible cards.
    for(let i=0;i<3;i++) await page.evaluate(() => dispatchEvent(new Event('focus')));
    await page.waitForTimeout(4500);
    assert.deepEqual(await page.evaluate(() => ({same:window.originalRatedCard === document.querySelector('.subject-card--rated'),focus:document.activeElement === window.originalRatedFocus,animations:window.ratedAnimations})),{same:true,focus:true,animations:0});
    await page.screenshot({path:`/tmp/learn-rated-stable-${width}.png`});
  }
  console.log('Rated cards remain stable at desktop and mobile widths.');
  const allFiles = [...new Set([...manifest.onboarding,...manifest.helpers,...manifest.lessons.flatMap(lesson=>lesson.first),...manifest.lessons.flatMap(lesson=>lesson.files)])];
  // Validate progress lesson by lesson: installing the complete catalog is a
  // background process, while a stalled individual lesson still fails promptly.
  for (const lesson of manifest.lessons) await waitForAsync(async ({files,version}) => {
    const cache=await caches.open(`khutwa-content:${new URL('./',document.baseURI).pathname}:${version}`);
    return (await Promise.all(files.map(file=>cache.match(new URL(file,document.baseURI))))).every(Boolean);
  },{files:lesson.files,version:manifest.version});
  const missing = await page.evaluate(async ({files,version}) => {
    const cache=await caches.open(`khutwa-content:${new URL('./',document.baseURI).pathname}:${version}`);
    const stored=new Set((await cache.keys()).map(request=>request.url));
    return files.filter(file=>!stored.has(new URL(file,document.baseURI).href));
  },{files:allFiles,version:manifest.version});
  assert.deepEqual(missing,[], 'the queue eventually installs every published lesson and shared screen');
  const before = await page.evaluate(() => localStorage.getItem('tawjihi:temporary-account'));
  assert.ok(before,'the signed-in profile is persisted');
  await page.evaluate(async () => {
    const prefix=`khutwa-content:${new URL('./',document.baseURI).pathname}:`;
    await caches.open(prefix+'0000000000000000');
    await caches.open('unrelated-cache');
  });
  await page.reload();
  await page.waitForFunction(() => !document.querySelector('#app-splash'));
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
  assert.equal(await page.evaluate(() => localStorage.getItem('tawjihi:temporary-account')),before);
  assert.equal(await page.evaluate(async ({files,version}) => {
    const cache = await caches.open(`khutwa-content:${new URL('./',document.baseURI).pathname}:${version}`);
    return (await Promise.all(files.map(file => cache.match(new URL(file,document.baseURI))))).every(Boolean);
  },{files:target.files,version:manifest.version}),true,'downloads survive a document reload');
  await waitForAsync(async () => {
    const names=await caches.keys();
    return !names.includes(`khutwa-content:${new URL('./',document.baseURI).pathname}:0000000000000000`) && names.includes('unrelated-cache');
  });
  assert.deepEqual(errors,[]);
  console.log('Content loading passed: subject rounds, selected lesson caching/offline media, reload persistence, stable rated cards/focus at desktop and mobile.');
} finally { await browser.close(); await server.close(); }
