import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";
import { ARABIC_LESSONS } from "../../src/data/lessons/arabic/arabic-course.js";

const output = process.env.BROWSER_SCREENSHOT_DIR || "/tmp/arabic-course-check";
await mkdir(output, { recursive:true });
await withBrowserPage(async ({ base, send, evaluate, waitFor, onEvent }) => {
  const requests = [];
  onEvent(({ method, params }) => {
    if (method === "Network.requestWillBeSent") requests.push(new URL(params.request.url).pathname);
  });
  const navigate = async query => {
    const url = base + query;
    await send("Page.navigate", { url });
    await waitFor(`location.href === ${JSON.stringify(url)} && document.readyState !== 'loading' && !document.querySelector('#app-splash')`);
  };
  const noOverflow = async () => {
    await evaluate("new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))");
    assert.equal(await evaluate("document.documentElement.scrollWidth <= innerWidth + 1"), true);
  };
  const shot = async name => {
    const { data } = await send("Page.captureScreenshot", { format:"png" });
    await writeFile(`${output}/${name}.png`, Buffer.from(data, "base64"));
  };
  const open = async (lessonId, question) => {
    const catalog = ARABIC_LESSONS.find(lesson => lesson.id === lessonId);
    question ||= catalog.parts[0].startStepId;
    await navigate("?" + new URLSearchParams({ subject:"arabic", lesson:lessonId, part:catalog.parts[0].id, question }));
    await waitFor(`document.querySelector('[data-live-authored-step][data-lesson-step="${question}"]')`);
    assert.equal(await evaluate("document.querySelector('[data-live-authored-step]').getAttribute('dir')"), "rtl");
    await noOverflow();
  };
  await send("Page.navigate", { url:base });
  await waitFor("document.querySelector('.visitor-landing') && !document.querySelector('#app-splash')");
  await evaluate("fetch('/api/auth/register', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'arabic-check',phone:'0561234567',password:'Learn12345',curriculum:'gaza',path:'scientific'})}).then(r=>{if(!r.ok)throw new Error('Could not register isolated Arabic test account')})");
  for (const width of [1440, 390]) {
    await send("Emulation.setDeviceMetricsOverride", { width, height:900, deviceScaleFactor:1, mobile:width < 600 });
    const buttonLayout = () => evaluate(`Array.from(document.querySelectorAll('.roadmap-lesson-group')).map(group => {
      const button = group.querySelector('[data-roadmap-lesson]').getBoundingClientRect();
      const container = group.getBoundingClientRect();
      return { x:Math.round(button.left + button.width / 2 - container.left - container.width / 2), width:Math.round(button.width), height:Math.round(button.height) };
    })`);
    await navigate("?subject=ict");
    await waitFor("document.querySelector('.subject-roadmap[data-subject=ict]')");
    const ictLayout = await buttonLayout();
    assert.equal(ictLayout.length, 5);
    assert.equal(new Set(ictLayout.slice(0, 4).map(button => button.x)).size, 4);
    assert.deepEqual(ictLayout[4], ictLayout[0]);
    await navigate("?page=learn");
    await waitFor("document.querySelector('.subject-card[data-subject=arabic] [data-subject-count]')");
    assert.equal(await evaluate("document.querySelector('.subject-card[data-subject=arabic]').disabled"), false);
    assert.match(await evaluate("document.querySelector('.subject-card[data-subject=arabic] [data-subject-count]').textContent.trim()"), /\/ 412$/);
    if (width === 1440) assert.equal(requests.some(path => /\/arabic\/arabic-u\d+-l\d+\.js$/.test(path)), false);
    await evaluate("document.querySelector('.subject-card[data-subject=arabic]').click()");
    await waitFor("document.querySelector('.subject-roadmap[data-subject=arabic]')");
    assert.equal(await evaluate("document.querySelectorAll('.roadmap-unit').length"), 6);
    assert.deepEqual(await evaluate("[...document.querySelectorAll('[data-roadmap-lesson]')].map(node=>node.dataset.roadmapLesson)"), ARABIC_LESSONS.filter(lesson => lesson.questionCount > 0).map(lesson => lesson.id));
    assert.deepEqual(await evaluate("[...document.querySelectorAll('.roadmap-question-ring')].map(node=>Number(node.getAttribute('aria-valuemax')))"), ARABIC_LESSONS.filter(lesson => lesson.questionCount > 0).map(lesson => lesson.questionCount));
    assert.equal(await evaluate("document.querySelectorAll('[data-access-state=unpublished]').length"), 0);
    assert.equal(await evaluate("document.querySelector('.subject-roadmap').textContent.includes('التعبير')"), false);
    const arabicLayout = await buttonLayout();
    assert.equal(arabicLayout.length, 16);
    assert.deepEqual(arabicLayout, arabicLayout.map((_, index) => ictLayout[index % 4]), "every Arabic lesson follows the same repeating path and button size as ICT");
    await noOverflow();
    await shot(`roadmap-${width}`);
    await open("arabic-u01-l01");
    assert.equal(await evaluate("document.querySelectorAll('[data-ui-lab-answer]').length"), 4);
    await evaluate("document.querySelector('[data-ui-lab-answer][data-correct=true]').click();document.querySelector('[data-template-primary]').click()");
    await shot(`mcq-${width}`);
    await open("arabic-u01-l01", "arabic-p007-written-q01-a");
    assert.match(await evaluate("document.querySelector('[data-exam-front]').textContent"), /لَقَدْ كَانَ فِي يُوسُفَ[\s\S]*فَاعِلِينَ/);
    await shot(`passage-${width}`);
    await open("arabic-u01-l03", "arabic-p016-w01-a");
    await evaluate("document.querySelector('[data-exam-front] .lesson-flashcard-scroll').focus()");
    await send("Input.dispatchKeyEvent", { type:"keyDown", key:"Enter", code:"Enter", windowsVirtualKeyCode:13 });
    await send("Input.dispatchKeyEvent", { type:"keyUp", key:"Enter", code:"Enter", windowsVirtualKeyCode:13 });
    await waitFor("!document.querySelector('[data-exam-solution]').inert && document.querySelector('[data-exam-solution] img')?.naturalWidth > 0");
    await noOverflow();
    await shot(`scansion-${width}`);
  }
  for (const catalog of ARABIC_LESSONS.filter(lesson => lesson.questionCount)) await open(catalog.id);
  const decoded = await evaluate(`(async () => {
    const manifest = await (await fetch('assets/lessons/arabic/source-crops/sources.json')).json();
    return Promise.all(manifest.crops.map(async crop => { const image = new Image(); image.src = crop.file; await image.decode(); return image.naturalWidth > 0 && image.naturalHeight > 0; }));
  })()`);
  assert.equal(decoded.length, 11);
  assert.ok(decoded.every(Boolean));
});
console.log("Arabic browser check passed: 6 units, 16 lessons, 412 questions; expression lessons absent; RTL MCQs, complete passages, keyboard-flipped scansion answers and 11 original crops on desktop/mobile.");
