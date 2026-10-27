import assert from "node:assert/strict";
import { chromium, webkit } from "playwright";
import { startPreviewServer } from "../../scripts/preview-server.mjs";

const server = await startPreviewServer({ root:process.env.PREVIEW_ROOT, prefix:process.env.PREVIEW_PREFIX || "/learn-preview/" });
try {
  for (const [name, engine] of Object.entries({ chromium, webkit })) {
    if (process.argv[2] && process.argv[2] !== name) continue;
    const browser = await engine.launch({ headless:true, ...(name === "chromium" ? { executablePath:process.env.CHROME_BIN || "/usr/bin/google-chrome", args:["--no-sandbox"] } : {}) });
    try {
      const context = await browser.newContext({ viewport:{ width:414, height:896 }, isMobile:true, hasTouch:true, reducedMotion:"reduce" });
      context.setDefaultTimeout(30000);
      await context.route(/fonts\.(googleapis|gstatic)\.com/, route => route.abort());
      await context.addInitScript(() => Object.defineProperty(navigator, "standalone", { value:true }));
      const failures = [];
      const runtime = [];
      context.on("request", request => {
        const url = new URL(request.url());
        if (url.pathname.includes("/src/") && /\.(js|css)$/.test(url.pathname)) runtime.push(url);
      });
      let page = await context.newPage();
      page.on("pageerror", error => failures.push(error.message));
      const ready = async () => {
        await page.waitForFunction(() => !document.querySelector("#app-splash,.media-pending,.app-loading,[aria-busy=true]"));
        await page.evaluate(() => document.fonts.ready);
      };
      await page.goto(server.base + "?flow=sign-in");
      await page.locator("[data-sign-in-form]").waitFor();
      await ready();
      await page.locator("[name=identifier]").fill("subscribed");
      await page.locator("[name=password]").fill("Learn123");
      await page.locator("[data-sign-in-form] [type=submit]").click();
      await page.locator("[data-learner-dashboard]").waitFor();
      await ready();
      for (const [width, height] of [[320,568],[375,667],[390,844],[414,896],[430,932],[896,414],[768,1024],[1440,900]]) {
        await page.setViewportSize({ width, height });
        const cards = await page.locator(".subject-card").evaluateAll(cards => cards.map(card => {
          const rect = card.getBoundingClientRect();
          const details = card.querySelector(".subject-card__details").getBoundingClientRect();
          return { gap:rect.bottom - details.bottom, background:getComputedStyle(card).backgroundColor, height:details.height, overflow:card.scrollWidth - card.clientWidth };
        }));
        assert.ok(cards.length > 0);
        for (const card of cards) {
          assert.ok(card.gap < 3, `${name}/${width}: footer must reach card bottom: ${JSON.stringify(card)}`);
          assert.equal(card.background, "rgb(255, 255, 255)");
          assert.ok(card.height >= 68 && card.overflow <= 1);
        }
      }
      await page.setViewportSize({ width:414, height:896 });
      await page.locator("[data-subject=ict]").scrollIntoViewIfNeeded();
      await page.screenshot({ path:`/tmp/learn-installed-${name}-cards.png` });
      console.log(`${name}: card viewport matrix passed`);
      await page.goto(server.base + "?subject=ict&lesson=database-management&part=access-basics");
      await page.locator("[data-live-authored-step]").waitFor();
      await ready();
      for (const [width, height] of [[320,568],[375,667],[414,896],[896,414],[1440,900]]) {
        await page.setViewportSize({ width, height });
        await page.waitForFunction(() => Math.abs(document.querySelector(".lesson-shell").getBoundingClientRect().height - innerHeight) < 1);
        await page.evaluate(() => window.scrollTo(0, 99999));
        const layout = await page.evaluate(() => {
          const footer = document.querySelector(".question-footer-toolbar");
          const ratings = footer.querySelector(".level-question-ratings").getBoundingClientRect();
          const numbers = footer.querySelector(".question-number-slider").getBoundingClientRect();
          const shell = document.querySelector(".lesson-shell").getBoundingClientRect();
          return { numbersBottom:numbers.bottom, ratingsTop:ratings.top, scrollY, extra:document.documentElement.scrollHeight - innerHeight, shellBottom:shell.bottom, height:innerHeight };
        });
        assert.ok(layout.numbersBottom <= layout.ratingsTop + 1, `${name}/${width}: slider above ratings`);
        assert.equal(layout.scrollY, 0);
        assert.ok(layout.extra <= 1 && layout.shellBottom <= layout.height + 1, `${name}/${width}: no document overscroll ${JSON.stringify(layout)}`);
      }
      console.log(`${name}: question viewport matrix passed`);
      await page.setViewportSize({ width:320, height:568 });
      await page.waitForFunction(() => Math.abs(document.querySelector(".lesson-shell").getBoundingClientRect().height - innerHeight) < 1);
      assert.equal(await page.locator(".level-layout-actions").evaluate(element => getComputedStyle(element).touchAction), "pan-x pinch-zoom", "The footer permits horizontal panning, never vertical panning");
      if (name === "chromium") {
        const cdp = await context.newCDPSession(page);
        const swipe = async (x, y, dx, dy) => {
          await cdp.send("Input.dispatchTouchEvent", { type:"touchStart", touchPoints:[{ x, y, id:1 }] });
          for (let step = 1; step <= 8; step += 1) {
            await cdp.send("Input.dispatchTouchEvent", { type:"touchMove", touchPoints:[{ x:x + dx * step / 8, y:y + dy * step / 8, id:1 }] });
            await page.waitForTimeout(16);
          }
          await cdp.send("Input.dispatchTouchEvent", { type:"touchEnd", touchPoints:[] });
        };
        await page.locator(".level-layout-task").evaluate(element => element.scrollTo({ top:60, behavior:"instant" }));
        await page.waitForFunction(() => Math.abs(document.querySelector(".level-layout-task").scrollTop - 60) < 1);
        for (const selector of ["[data-template-primary]", ".question-number-track"]) {
          const box = await page.locator(selector).boundingBox();
          await swipe(box.x + box.width / 2, box.y + box.height / 2, 0, -90);
          assert.equal(await page.evaluate(() => scrollY), 0, "Footer swipes cannot move the document");
          assert.equal(await page.locator(".level-layout-task").evaluate(element => element.scrollTop), 60, "Footer swipes cannot move question content");
        }
        const track = page.locator(".question-number-track");
        await track.evaluate(element => element.scrollTo({ left:0, behavior:"instant" }));
        const trackBox = await track.boundingBox();
        await swipe(trackBox.x + trackBox.width - 20, trackBox.y + trackBox.height / 2, -150, 0);
        await page.waitForFunction(() => document.querySelector(".question-number-track").scrollLeft > 30);
        const taskBox = await page.locator(".level-layout-task").boundingBox();
        await page.locator(".level-layout-task").evaluate(element => element.scrollTo({ top:0, behavior:"instant" }));
        await swipe(taskBox.x + taskBox.width / 2, taskBox.y + taskBox.height * .75, 0, -100);
        await page.waitForFunction(() => document.querySelector(".level-layout-task").scrollTop > 30);
        await cdp.detach();
        console.log("chromium: trusted touch swipes keep the footer fixed, the slider horizontal and question content scrollable");
      }
      await page.setViewportSize({ width:414, height:896 });
      await page.screenshot({ path:`/tmp/learn-installed-${name}-question.png` });
      await page.locator("[data-ui-lab-answer][data-correct=false]").first().click();
      await page.locator("[data-template-primary]").click();
      await page.locator(".lesson-daily-streak[open] button:not(:disabled)").click();
      await page.locator(".lesson-back").click();
      await page.locator("[data-authored-restart]").click();
      await page.locator(".subject-roadmap").waitFor();
      await ready();
      const ring = await page.locator(".roadmap-question-ring").first().getAttribute("aria-valuenow");
      assert.ok(Number(ring) > 0, "Wrong answer contributes to lesson progress");
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      const end = await page.evaluate(() => {
        const last = [...document.querySelectorAll(".roadmap-part-copy")].at(-1).getBoundingClientRect();
        const nav = document.querySelector(".topbar-wrap").getBoundingClientRect();
        return nav.top - last.bottom;
      });
      assert.ok(end < 75, `${name}: no empty tail after final roadmap lesson (${end}px)`);
      await page.locator(".lesson-back").click();
      await page.locator("[data-learner-dashboard]").waitFor();
      await ready();
      const count = await page.locator("[data-subject=ict] [data-subject-count]").textContent();
      assert.ok(!count.startsWith("0 /"));
      await page.locator('.nav-item[data-page="rated-questions"]').click();
      const hard = page.locator('[data-rated-subject="ict"][data-rating="hard"]');
      await hard.waitFor();
      assert.equal((await hard.locator("[data-rating-count]").textContent()).trim(), "1", "A wrong answer appears in Hard");
      await hard.click();
      await page.locator(".subject-roadmap").waitFor();
      await ready();
      assert.equal(Number(await page.locator(".roadmap-question-ring").first().getAttribute("aria-valuenow")), 0, "The new rated collection starts with independent progress");
      await page.locator('.nav-item[data-page="learn"]').click();
      await page.locator("[data-learner-dashboard]").waitFor();
      await page.close();
      page = await context.newPage();
      await page.goto(server.base);
      await page.locator("[data-learner-dashboard]").waitFor();
      await ready();
      assert.equal(await page.locator("[data-subject=ict] [data-subject-count]").textContent(), count, "New page restores identity and IndexedDB progress without sessionStorage");
      await page.reload();
      await page.locator("[data-learner-dashboard]").waitFor();
      await ready();
      assert.equal(await page.locator("[data-subject=ict] [data-subject-count]").textContent(), count);
      // Simulate a deployment while the installed document is suspended in a
      // lesson. It must wait for Home and retain the same saved answer afterward.
      const nextVersion = "0123456789abcdef";
      await page.goto(server.base + "?subject=ict&lesson=database-management&part=access-basics");
      await page.locator("[data-live-authored-step]").waitFor();
      await ready();
      const timeOrigin = await page.evaluate(() => performance.timeOrigin);
      await context.route("**/release.json", route => route.fulfill({ json:{ version:nextVersion } }));
      await context.route(url => url.searchParams.has("app-release"), async route => {
        const response = await route.fetch();
        const html = (await response.text()).replace(/(name="learn-release" content=")[^"]+/, `$1${nextVersion}`);
        await route.fulfill({ response, body:html });
      });
      const checked = page.waitForResponse("**/release.json");
      await page.evaluate(() => dispatchEvent(new PageTransitionEvent("pageshow", { persisted:true })));
      await (await checked).finished();
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      assert.equal(await page.evaluate(() => performance.timeOrigin), timeOrigin, "Update must not interrupt a lesson");
      await page.locator(".lesson-back").click();
      await page.locator(".subject-roadmap").waitFor();
      await page.locator(".lesson-back").click();
      await page.waitForFunction(version => document.querySelector('meta[name="learn-release"]')?.content === version, nextVersion);
      await page.locator("[data-learner-dashboard]").waitFor();
      await ready();
      assert.equal(await page.locator("[data-subject=ict] [data-subject-count]").textContent(), count, "Updating an installed app preserves progress");
      assert.ok(runtime.length > 20 && runtime.every(url => /^[a-f0-9]{16}$/.test(url.searchParams.get("v"))), "Every eager/lazy module and imported stylesheet must bypass old unversioned cache entries");
      assert.deepEqual(failures, []);
      console.log(`${name}: installed preview layout, wrong-answer progress, close/reopen, reload and versioned runtime passed`);
      await context.close();
    } catch (error) {
      const failed = browser.contexts()[0]?.pages().at(-1);
      if (failed) {
        await failed.screenshot({ path:`/tmp/learn-installed-${name}-failure.png` }).catch(() => {});
        console.error(await failed.evaluate(() => ({ url:location.href, body:document.body.className, main:document.querySelector("main")?.className, text:document.body.innerText.slice(-1800) })).catch(() => null));
      }
      throw error;
    } finally { await browser.close(); }
  }
} finally { await server.close(); }
