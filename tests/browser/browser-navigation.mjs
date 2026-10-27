import assert from "node:assert/strict";
import { withBrowserPage } from "./browser-page.mjs";

for (const width of [1440, 390]) {
  await withBrowserPage(async ({ base, send, evaluate, waitFor, onEvent }) => {
    const navigateDocument = async (method, params) => {
      let timer;
      let stop;
      const loaded = new Promise((resolve, reject) => {
        stop = onEvent(({ method: event }) => {
          if (event === "Page.loadEventFired") resolve();
        });
        timer = setTimeout(() => reject(new Error("Document navigation timed out")), 15000);
      });
      try {
        await send(method, params);
        await loaded;
      } finally { clearTimeout(timer); stop?.(); }
    };
    const navigate = async query => {
      await navigateDocument("Page.navigate", { url:base + query });
      await waitFor("!document.querySelector('#app-splash') && document.body?.dataset.accountType");
    };
    await send("Emulation.setDeviceMetricsOverride", { width, height:900, deviceScaleFactor:1, mobile:width < 600 });
    await navigate("");
    await waitFor("document.querySelector('.visitor-landing')");
    assert.equal(await evaluate("document.body.dataset.accountType"), "guest", "startup does not sign into an experimental account");
    await navigate("?flow=sign-in");
    await waitFor("document.querySelector('[data-sign-in-form]')");
    await navigate("?page=learn");
    await waitFor("document.querySelector('.visitor-landing')");
    assert.equal(await evaluate("[...document.querySelectorAll('.nav-item')].some(item=>item.getClientRects().length)"), false, "signed-out learning routes retain account entry");
    await evaluate(`(async () => {
      const response = await fetch('/api/auth/register', { method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ username:'navigation-${width}', phone:'0561234567', password:'Learn12345', curriculum:'gaza', path:'scientific' }) });
      if (!response.ok) throw new Error('Could not register the isolated navigation learner');
    })()`);
    await navigate("?page=learn");
    await waitFor("document.querySelector('[data-learner-dashboard]') && document.body.dataset.accountType === 'free' && !document.body.classList.contains('product-flow-active')");
    assert.equal(await evaluate("Boolean(document.querySelector('[data-more-tab], .question-review-opener, [data-prototype-scenario]'))"), false);
    const pages = await evaluate("[...document.querySelectorAll('.nav-item')].filter(item=>item.getClientRects().length).map(item=>item.dataset.page)");
    assert.deepEqual(pages, ["learn", "rated-questions", "quests", "shop", "friends", "super", "more"]);
    const subjectNames = await evaluate("[...document.querySelectorAll('.subject-card h2')].map(node=>node.textContent)");
    await evaluate("document.querySelector('[data-page=rated-questions]').click()");
    await waitFor("location.search === '?page=rated-questions' && document.querySelector('[data-page=rated-questions].active')");
    assert.deepEqual(await evaluate("[...document.querySelectorAll('.subject-card h2')].map(node=>node.textContent)"), subjectNames, "Rated Questions keeps the same subjects");
    assert.equal(await evaluate("document.querySelectorAll('[data-subject-count], .subject-map [data-subject-progress], .subject-map button:not([data-rated-subject])').length"), 0, "Rated Questions uses its own rating actions instead of inherited practice controls");
    assert.equal(await evaluate("[...document.querySelectorAll('[data-rating-count]')].every(node => node.textContent === '0')"), true, "a new learner starts with zero rated questions");
    assert.equal(await evaluate("document.querySelectorAll('.rated-subject-difficulty').length"), subjectNames.length * 3, "each subject has Easy, Medium and Hard sections");
    assert.equal(await evaluate("document.querySelector('.dashboard-stats').getClientRects().length"), 0, "Rated Questions has no streak or level cards");
    assert.equal(await evaluate("document.querySelector('.learner-dashboard__header').getClientRects().length"), 0, "Rated Questions starts with the subjects section");
    await navigate("?page=rated-questions");
    assert.equal(await evaluate("document.querySelector('.nav-item.active').dataset.page"), "rated-questions", "Rated Questions survives a fresh document load");
    assert.equal(await evaluate("document.querySelector('.dashboard-stats').getClientRects().length"), 0);
    await evaluate("document.querySelector('[data-page=learn]').click()");
    await waitFor("location.search === '?page=learn' && document.querySelector('.dashboard-stats').getClientRects().length > 0");
    for (const page of pages.filter(page=>page !== "learn" && page !== "rated-questions")) {
      const before = await evaluate("({url:location.href,history:history.length,active:document.querySelector('.nav-item.active').dataset.page,content:document.querySelector('.course-units').innerHTML})");
      await evaluate(`document.querySelector('[data-page=${page}]').click()`);
      await waitFor("!document.querySelector('#coming-soon-toast').hidden");
      const after = await evaluate("({url:location.href,history:history.length,active:document.querySelector('.nav-item.active').dataset.page,content:document.querySelector('.course-units').innerHTML})");
      assert.deepEqual(after, before, `${page} leaves the active route and content intact`);
      assert.equal(await evaluate("document.querySelector('#coming-soon-toast').textContent"), "قريبًا");
      assert.ok(await evaluate(`document.querySelector('[data-page=${page}]').getAttribute('aria-disabled') === 'true'`));
    }
    await waitFor("document.querySelector('#coming-soon-toast').hidden", { timeoutMs:5000 });
    await evaluate("document.querySelector('[data-page=quests]').focus()");
    await send("Input.dispatchKeyEvent", { type:"keyDown", key:"Enter", code:"Enter", windowsVirtualKeyCode:13, text:"\r", unmodifiedText:"\r" });
    await send("Input.dispatchKeyEvent", { type:"keyUp", key:"Enter", code:"Enter", windowsVirtualKeyCode:13 });
    await waitFor("!document.querySelector('#coming-soon-toast').hidden");
    assert.equal(await evaluate("location.search"), "?page=learn");
    await navigate("?page=more");
    await waitFor("location.search === '?page=more' && document.querySelector('.coming-soon.is-visible')");
    assert.equal(await evaluate("document.querySelector('.coming-soon').children.length"), 0, "More is a blank page");
    await evaluate("document.querySelector('[data-page=shop]').click()");
    assert.equal(await evaluate("location.search"), "?page=more");
    assert.equal(await evaluate("document.querySelector('.nav-item.active').dataset.page"), "more");
    await evaluate("document.querySelector('[data-page=learn]').click()");
    await waitFor("document.querySelector('[data-learner-dashboard]')");
    await evaluate("document.querySelector('[data-subject=ict]').click()");
    await waitFor("document.querySelector('.subject-roadmap')");
    const subjectUrl = await evaluate("location.href");
    await evaluate("document.querySelector('[data-page=quests]').click()");
    assert.equal(await evaluate("location.href"), subjectUrl);
    assert.ok(await evaluate("Boolean(document.querySelector('.subject-roadmap'))"));
    for (const route of ["?page=quests", "?page=shop", "?view=ui-lab", "?view=design-system", "?view=ship-ready-mcq"]) {
      await navigate(route);
      await waitFor("document.querySelector('[data-subject=ict]') && !document.querySelector('main').classList.contains('lesson-mode')");
      assert.equal(await evaluate("location.search"), "?page=learn");
    }
  });
}
console.log("Navigation browser checks passed at desktop/mobile widths: real entry, blank More, locked tabs, keyboard toast, stable URLs and history.");
