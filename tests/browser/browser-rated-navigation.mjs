import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";
import { loadSubjectLessonPart } from "../../src/data/lessons/subject-lesson-registry.js";
import { getSubjectRoadmap } from "../../src/data/subject-roadmaps.js";

const lessons = getSubjectRoadmap("ict").units.flatMap(unit => unit.lessons).filter(lesson => !lesson.hidden && !lesson.optional);
const all = (await Promise.all(lessons.slice(0,2).flatMap(lesson => lesson.parts.map(async part => {
  const loaded = await loadSubjectLessonPart("ict",lesson.id,part.id);
  return loaded.steps.map(step => ({step,key:{subjectId:"ict",lessonId:lesson.id,partId:part.id,stepId:step.id}}));
})))).flat();
const mcqs = all.filter(item => item.key.lessonId === lessons[0].id && item.step.type === "question").slice(0,2);
const written = all.find(item => item.key.lessonId === lessons[0].id && item.step.type === "activity");
const other = all.find(item => item.key.lessonId === lessons[1].id);
assert.equal(mcqs.length,2);assert.ok(written);assert.ok(other);

await withBrowserPage(async ({base,send,evaluate,waitFor,onEvent}) => {
  const errors = [];
  onEvent(({method,params}) => { if (method === "Runtime.exceptionThrown") errors.push(params.exceptionDetails.exception?.description || params.exceptionDetails.text); });
  const navigateDocument = async (method,params) => {
    let timer,stop;
    const loaded = new Promise((resolve,reject) => {
      stop = onEvent(({method:event}) => { if (event === 'Page.loadEventFired') resolve(); });
      timer = setTimeout(() => reject(new Error('Document navigation timed out')),15000);
    });
    try { await send(method,params);await loaded; }
    finally { clearTimeout(timer);stop?.(); }
    await waitFor("document.readyState === 'complete' && !document.querySelector('#app-splash')");
  };
  const visit = query => navigateDocument('Page.navigate',{url:base + query});
  const click = selector => evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
  const current = id => waitFor(`document.querySelector('[data-lesson-step]')?.dataset.lessonStep === ${JSON.stringify(id)}`);
  const rated = async (key,rating) => waitFor(`(async () => {
    const response = await fetch('/api/question-feedback',{headers:{'X-Progress-Owner':window.ratingTestOwner}});
    const body = await response.json();
    return body.ratings?.some(item => item.stepId === ${JSON.stringify(key.stepId)} && item.rating === ${JSON.stringify(rating)});
  })()`);
  const jump = async id => {
    await waitFor(`document.querySelector('[data-question-jump="${id}"]')`);
    await click(`[data-question-jump="${id}"]`);
    await current(id);
  };
  const footerBounds = () => evaluate(`(() => {
    const footer=document.querySelector('.level-layout-actions');
    const rating=footer.querySelector('.level-question-rating-panel').getBoundingClientRect();
    const action=footer.querySelector('[data-template-primary]').getBoundingClientRect();
    const strip=footer.querySelector('[data-question-slider]').getBoundingClientRect();
    return {height:footer.getBoundingClientRect().height,clear:strip.bottom<=rating.top && rating.bottom<=action.top};
  })()`);
  const screenshot = async name => {
    if (await evaluate("Boolean(document.querySelector('.lesson-daily-streak[open]'))")) {
      await waitFor("document.querySelector('.lesson-daily-streak button:not(:disabled)')");
      await click('.lesson-daily-streak button');
      await waitFor("!document.querySelector('.lesson-daily-streak[open]')");
    }
    const shot = await send("Page.captureScreenshot",{format:"png",captureBeyondViewport:false});
    await writeFile(`/tmp/learn-${name}.png`,Buffer.from(shot.data,"base64"));
  };
  await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"reduce"}]});
  await visit("?page=learn");
  await evaluate(`(async () => {
    const response = await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'rated-navigation',phone:'0561234567',password:'Learn12345',curriculum:'gaza',path:'scientific'})});
    if (!response.ok) throw new Error(await response.text());
  })()`);
  await visit('?page=learn');
  await screenshot('rated-rocky-banner-reference');
  for (const width of [1440,390]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<600});
    await visit('?page=rated-questions&subject=ict&rating=medium');
    await waitFor("document.querySelector('.rated-questions-rocky')?.naturalWidth > 0");
    assert.equal(await evaluate("document.querySelector('.rated-questions-empty').textContent"),'لا توجد أسئلة بعد.');
    assert.equal(await evaluate("document.querySelectorAll('.rated-question-toggle input[type=radio]').length"),3);
    assert.equal(await evaluate("document.querySelectorAll('.rated-question-toggle button').length"),0);
    const seat = await evaluate(`(() => {
      const rocky=document.querySelector('.rated-questions-rocky').getBoundingClientRect();
      const middle=document.querySelector('[data-rated-filter=medium]').getBoundingClientRect();
      const card=document.querySelector('.level-question-ratings').getBoundingClientRect();
      return {center:Math.abs((rocky.left+rocky.right-middle.left-middle.right)/2),overlap:rocky.bottom>card.top && rocky.bottom<card.bottom};
    })()`);
    assert.ok(seat.center < 2 && seat.overlap,JSON.stringify(seat));
    assert.equal(await evaluate('document.documentElement.scrollWidth <= innerWidth'),true);
    await screenshot(`rated-empty-${width}`);
    await evaluate("document.querySelector('[data-rated-filter=medium]').focus()");
    await send('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowRight',code:'ArrowRight',windowsVirtualKeyCode:39});
    await send('Input.dispatchKeyEvent',{type:'keyUp',key:'ArrowRight',code:'ArrowRight',windowsVirtualKeyCode:39});
    await waitFor("document.activeElement?.matches('[data-rated-filter]:checked') && document.activeElement.value !== 'medium'");
  }
  await visit(`?subject=ict&lesson=${mcqs[0].key.lessonId}&part=${mcqs[0].key.partId}`);
  await evaluate(`window.ratingTestOwner=document.body.dataset.accountId || '';`);
  // The account ID is returned by the normal authenticated session endpoint.
  const owner = await evaluate(`(async () => {
    const result = await fetch('/api/auth/session').then(response => response.json());
    return result;
  })()`);
  const accountId = owner.account?.id || owner.session?.account?.id;
  assert.ok(accountId,JSON.stringify(owner));
  await evaluate(`window.ratingTestOwner=${JSON.stringify(`account:${accountId}`)}`);
  await jump(mcqs[0].key.stepId);
  await waitFor("document.querySelector('[data-question-slider]')");
  const initialFooter = await footerBounds();
  await evaluate("window.originalRatingFooter=document.querySelector('.level-layout-actions');window.originalQuestionSlider=document.querySelector('[data-question-slider]')");
  assert.equal(await evaluate("document.querySelector('.lesson-top-title').getAttribute('aria-valuenow')"),"0");
  await click(`[data-ui-lab-answer="${mcqs[0].step.question.correctChoiceId}"]`);
  await click('[data-template-primary]');
  await rated(mcqs[0].key,"easy");
  const answeredFooter = await footerBounds();
  assert.equal(answeredFooter.clear,true);
  assert.ok(Math.abs(answeredFooter.height-initialFooter.height)<2,JSON.stringify({initialFooter,answeredFooter}));
  for (const width of [1440,390]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<600});
    assert.equal((await footerBounds()).clear,true);
    await screenshot(`rated-answer-${width}`);
  }

  await waitFor(`document.querySelector('[data-question-jump="${mcqs[0].key.stepId}"]')?.dataset.rating === "easy"`);
  assert.equal(await evaluate("document.querySelectorAll('.level-result-icon,.level-result-copy').length"),0);
  assert.equal(await evaluate("document.querySelector('[data-ui-lab-feedback]').getBoundingClientRect().height <= 1"),true);
  await click('[data-question-rating="medium"]');
  await rated(mcqs[0].key,"medium");
  await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"no-preference"}]});
  await jump(mcqs[1].key.stepId);
  await waitFor("document.querySelector('.question-footer-toolbar')");
  assert.equal(await evaluate(`document.getAnimations().some(animation => {
    const target=animation.effect?.target;
    return animation.playState==='running' && target?.contains(document.querySelector('.level-layout-actions'))
      && animation.effect.getKeyframes().some(frame => 'opacity' in frame || 'transform' in frame);
  })`),false,'Question changes must not fade or move the footer with normal motion enabled');
  await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"reduce"}]});
  assert.equal(await evaluate("document.querySelector('.level-layout-actions')===window.originalRatingFooter && document.querySelector('[data-question-slider]')===window.originalQuestionSlider"),true);
  assert.equal(await evaluate("document.querySelector('.lesson-top-title').getAttribute('aria-valuenow')"),"1");
  const wrong = mcqs[1].step.question.choices.find(choice => choice.id !== mcqs[1].step.question.correctChoiceId).id;
  await click(`[data-ui-lab-answer="${wrong}"]`);
  await click('[data-template-primary]');
  await rated(mcqs[1].key,"hard");
  assert.equal(await evaluate("document.querySelector('.lesson-top-title').getAttribute('aria-valuenow')"),"2");
  await click('[data-question-rating="easy"]');
  await rated(mcqs[1].key,"easy");
  await jump(written.key.stepId);
  await waitFor("document.querySelector('[data-question-slider]')");
  const writtenFooter = await footerBounds();
  await click('[data-template-primary]');
  await waitFor("!document.querySelector('[data-exam-solution]').hidden");
  await click('[data-exam-correct="true"]');
  assert.equal((await footerBounds()).clear,true);
  assert.ok(Math.abs((await footerBounds()).height-writtenFooter.height)<2);
  await click('[data-template-primary]');
  await rated(written.key,"easy");
  await evaluate(`fetch('/api/question-feedback',{method:'POST',headers:{'Content-Type':'application/json','X-Progress-Owner':window.ratingTestOwner},body:JSON.stringify(${JSON.stringify({...other.key,type:"rating",rating:"hard"})})})`);

  for (const width of [1440,390]) {
    await send("Emulation.setDeviceMetricsOverride",{width,height:900,deviceScaleFactor:1,mobile:width<600});
    await visit("?page=rated-questions");
    await waitFor("document.querySelector('[data-rated-subject=ict][data-rating=easy] [data-rating-count]')?.textContent === '2'");
    const counts = await evaluate("[...document.querySelectorAll('.subject-card--rated[data-subject=ict] [data-rating-count]')].map(node=>Number(node.textContent))");
    assert.deepEqual(counts,[2,1,1]);
    assert.equal(await evaluate("document.documentElement.scrollWidth <= innerWidth"),true);
    await screenshot(`rated-home-${width}`);
    await click('[data-rated-subject=ict][data-rating=easy]');
    await waitFor("document.querySelector('[data-rated-filter=easy]:checked') && document.querySelector('.roadmap-lesson-group')");
    assert.equal(await evaluate("Boolean(document.querySelector('.rated-question-browser--empty, .rated-questions-rocky'))"),false,'rated questions restore the normal top toggle without the empty mascot');
    assert.equal(await evaluate("document.querySelectorAll('.roadmap-lesson-group').length"),1);
    await click('[data-rated-filter=hard]');
    await waitFor(`document.querySelector('[data-roadmap-lesson="${other.key.lessonId}"]')`);
    assert.equal(await evaluate("document.querySelectorAll('.roadmap-lesson-group').length"),1);
    await screenshot(`rated-roadmap-${width}`);
    await navigateDocument("Page.reload",{});
    await waitFor("!document.querySelector('#app-splash') && document.querySelector('[data-rated-filter=hard]:checked')");
    await click('[data-roadmap-part]');
    await click('[data-bubble-start]');
    await current(other.key.stepId);
    await navigateDocument("Page.reload",{});
    await waitFor("!document.querySelector('#app-splash')");
    await current(other.key.stepId);
    await waitFor("document.querySelector('[data-question-slider]')");
    assert.deepEqual(await evaluate("[...document.querySelectorAll('[data-question-jump]')].map(item=>item.dataset.rating)"),["hard"]);
    assert.equal(await evaluate("document.documentElement.scrollWidth <= innerWidth"),true);
    await screenshot(`rated-question-navigation-${width}`);
    await evaluate("document.querySelector('[data-question-jump]').focus()");
    await send("Input.dispatchKeyEvent",{type:"keyDown",key:"Home",code:"Home",windowsVirtualKeyCode:36});
    await send("Input.dispatchKeyEvent",{type:"keyUp",key:"Home",code:"Home",windowsVirtualKeyCode:36});
    assert.equal(await evaluate("document.activeElement.matches('[data-question-jump]')"),true);
    await click('.lesson-back');
    await waitFor("document.querySelector('[data-rated-filter=hard]:checked')");
    await click('[data-rated-filter=medium]');
    await waitFor("document.querySelector('[data-rated-filter=medium]:checked')");
    await evaluate("history.back()");
    await waitFor("document.querySelector('[data-rated-filter=hard]:checked')");
  }
  await visit("?page=rated-questions&subject=ict&rating=easy");
  await waitFor("document.querySelector('.roadmap-question-ring')");
  assert.equal(await evaluate("document.querySelector('.roadmap-question-ring').getAttribute('aria-valuenow')"),"0","rated review does not inherit normal lesson attempts");
  await click('[data-roadmap-part]');
  await click('[data-bubble-start]');
  await current(mcqs[1].key.stepId);
  assert.equal(await evaluate("document.querySelector('.lesson-top-title').getAttribute('aria-valuenow')"),"0");
  await click(`[data-ui-lab-answer="${wrong}"]`);
  await click('[data-template-primary]');
  await waitFor("document.querySelector('.lesson-top-title').getAttribute('aria-valuenow') === '1'");
  await navigateDocument("Page.reload",{});
  await waitFor("document.querySelector('.lesson-top-title').getAttribute('aria-valuenow') === '1'");
  await visit("?page=rated-questions&subject=ict&rating=easy");
  await waitFor("document.querySelector('.roadmap-question-ring')?.getAttribute('aria-valuenow') === '1'");
  await visit("?page=rated-questions&subject=ict&rating=medium");
  await waitFor("document.querySelector('.roadmap-question-ring')?.getAttribute('aria-valuenow') === '0'");
  await visit("?page=learn");
  await waitFor("document.querySelector('[data-subject=ict] [data-subject-count]')?.textContent.startsWith('3 /')");
  assert.deepEqual(errors,[]);
  console.log("Rated navigation passed: startup, automatic/manual ratings, counts, filtered lessons, reload, Back, keyboard navigation, desktop and mobile.");
});
