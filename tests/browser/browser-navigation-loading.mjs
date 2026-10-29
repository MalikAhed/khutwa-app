import assert from 'node:assert/strict';
import { withBrowserPage } from './browser-page.mjs';

for (const width of [1440, 390]) {
  await withBrowserPage(async ({ base, send, evaluate, waitFor, onEvent }) => {
    await send('Emulation.setDeviceMetricsOverride', { width, height:900, deviceScaleFactor:1, mobile:width < 600 });
    // A tiny optional download stays pending until input cancels it. No real
    // curriculum downloads or student data are needed for the scheduling check.
    await send('Page.addScriptToEvaluateOnNewDocument', {source:`
      window.__backgroundRequests = [];
      const originalFetch = window.fetch;
      window.fetch = (input, options = {}) => {
        if (String(input).endsWith('/content-manifest.json')) return Promise.resolve(Response.json({onboarding:[],helpers:['background-test.js'],lessons:[]}));
        if (options.headers?.['X-Learn-Download'] === '1') return new Promise((resolve, reject) => {
          const request = {aborted:false}; window.__backgroundRequests.push(request);
          options.signal.addEventListener('abort', () => {request.aborted = true; reject(options.signal.reason)}, {once:true});
        });
        return originalFetch(input, options);
      };
    `});
    const held = [];
    const stop = onEvent(({method, params}) => {
      if (method === 'Fetch.requestPaused') held.push(params.requestId);
    });
    await send('Fetch.enable', {patterns:[{urlPattern:'*/src/styles/lesson/math.css',requestStage:'Request'}]});
    await send('Page.navigate', { url:base });
    for (let attempt = 0; !held.length && attempt < 100; attempt++) await new Promise(resolve => setTimeout(resolve, 30));
    assert.ok(held.length, 'nested stylesheet is held');
    await evaluate('new Promise(resolve => setTimeout(resolve, 700))');
    assert.equal(await evaluate("Boolean(document.querySelector('#app-splash')) && document.querySelector('link[href=\"src/styles/lesson.css\"]').media === 'print'"), true, 'app stays covered until imported CSS is ready');
    for (const requestId of held.splice(0)) await send('Fetch.continueRequest', {requestId});
    await send('Fetch.disable');
    await waitFor("document.body?.dataset.accountType && !document.querySelector('#app-splash')");
    await evaluate(`fetch('/api/auth/register', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'loading-${width}',phone:'0561234567',password:'Learn12345',curriculum:'gaza',path:'scientific'})}).then(r => {if (!r.ok) throw Error('fixture registration failed')})`);
    await send('Page.navigate', { url:base + '?page=learn' });
    await waitFor("document.body?.dataset.accountType === 'free' && !document.querySelector('#app-splash')");
    await waitFor('window.__backgroundRequests.length > 0');
    await send('Emulation.setCPUThrottlingRate', {rate:4});
    await evaluate("document.querySelector('[data-subject=ict]').click()");
    assert.equal(await evaluate('window.__backgroundRequests.every(request => request.aborted)'), true, 'section click interrupts optional downloads immediately');
    await waitFor("document.querySelector('.subject-roadmap')");
    await send('Fetch.enable', {patterns:[{urlPattern:'*/src/ui/lesson-view.js',requestStage:'Request'}]});
    await evaluate("document.querySelector('[data-roadmap-lesson=database-management]').click(); document.querySelector('[data-bubble-start]').click()");
    await waitFor("document.querySelector('.lesson-loading') && document.querySelector('[aria-busy=true]')");
    await evaluate('new Promise(resolve => setTimeout(resolve, 1600))');
    assert.equal(await evaluate('window.__backgroundRequests.every(request => request.aborted)'), true, 'downloads remain paused for the whole foreground load');
    assert.equal(await evaluate("getComputedStyle(document.querySelector('.lesson-loading')).display"), 'flex', 'loading state is styled');
    assert.equal(await evaluate('document.documentElement.scrollWidth > innerWidth'), false, 'loading state fits the viewport');
    await send('Emulation.setEmulatedMedia', {features:[{name:'prefers-reduced-motion',value:'reduce'}]});
    assert.equal(await evaluate("document.querySelector('.lesson-loading__indicator').getAnimations().length"), 0, 'loading respects reduced motion');
    // Leave before the pending module arrives; its eventual completion cannot
    // overwrite the newer destination or make the navigation wait.
    await evaluate("document.querySelector('[data-page=rated-questions]').click(); document.querySelector('[data-page=learn]').click()");
    assert.equal(await evaluate("location.search === '?page=learn' && !document.querySelector('.lesson-view.is-visible')"), true);
    assert.ok(held.length, 'cold renderer request is held');
    for (const requestId of held.splice(0)) await send('Fetch.continueRequest', {requestId});
    await send('Fetch.disable');
    await evaluate("import('/src/ui/lesson-view.js')");
    assert.equal(await evaluate("Boolean(document.querySelector('[data-live-authored-step], .lesson-loading'))"), false, 'stale load cannot restore old content');
    await waitFor('window.__backgroundRequests.some(request => !request.aborted)');
    await send('Emulation.setEmulatedMedia', {features:[]});
    await evaluate("document.querySelector('[data-subject=ict]').click(); document.querySelector('[data-roadmap-lesson=database-management]').click(); document.querySelector('[data-bubble-start]').click()");
    await waitFor("document.querySelector('[data-ui-lab-answer]')");

    // A slow preference read must never delay exit or expose a dismantled question.
    await send('Fetch.enable', { patterns:[{urlPattern:'*/api/question-feedback*',requestStage:'Request'}] });
    await evaluate(`window.__exitFrames = []; window.__exitStart = performance.now();
      function sampleExit() {
        window.__exitFrames.push({elapsed:performance.now()-window.__exitStart,
          broken:Boolean(document.querySelector('[data-live-authored-step]')) && !document.body.classList.contains('ui-lab-open'),
          map:Boolean(document.querySelector('.subject-roadmap'))});
        if (!window.__exitFrames.at(-1).map && window.__exitFrames.length < 180) requestAnimationFrame(sampleExit);
      }
      requestAnimationFrame(sampleExit); document.querySelector('.lesson-back').click();`);
    try {
      await waitFor("document.querySelector('.subject-roadmap')", {timeoutMs:900});
      const frames = await evaluate('window.__exitFrames');
      assert.ok(!frames.some(frame => frame.broken), `${width}: no frame paints an unstyled departing question`);
      assert.ok(await evaluate("document.querySelector('.lesson-shell--subject') && !document.body.classList.contains('ui-lab-open')"));
      console.log(`${width}: lesson exit completed without waiting for feedback (${Math.round(await evaluate('performance.now()-window.__exitStart'))}ms observed)`);
    } finally {
      for (const requestId of held) await send('Fetch.continueRequest', {requestId});
      await send('Fetch.disable'); stop();
    }
  });
}
