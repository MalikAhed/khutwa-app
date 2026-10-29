import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
import { chromium, webkit } from 'playwright';
import { startPreviewServer } from '../../scripts/preview-server.mjs';
import { findChrome } from './browser-session.mjs';

const server = await startPreviewServer({root:process.cwd(),prefix:'/'});
const browser = process.env.BROWSER_ENGINE === 'webkit' ? await webkit.launch()
  : await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
try {
  const html = await readFile('index.html','utf8');
  const links = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(match=>match[0].replace(/media="print"/g,'media="all"')).join('');
  for (const width of [390,1440]) {
    const context = await browser.newContext({viewport:{width,height:900},isMobile:width===390,hasTouch:width===390,reducedMotion:'no-preference'});
    await context.route(/fonts\.(googleapis|gstatic)\.com/,route=>route.abort());
    const page = await context.newPage(), errors = [];
    page.on('pageerror',error=>errors.push(error.message));
    await page.route('**/navigation-check',route=>route.fulfill({contentType:'text/html',body:`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${links}</head><body><main class="page lesson-mode"><section class="lesson-view is-visible"><div class="lesson-shell" data-subject="physics"><div class="lesson-top"><button class="lesson-back">رجوع</button><div class="lesson-top-title"></div><div class="lesson-status"></div></div><article class="lesson-card"></article></div></section></main></body></html>`}));
    await page.goto(server.base+'navigation-check');
    await page.evaluate(async()=>{
      const {renderAuthoredInteractiveLesson} = await import('/src/ui/lesson/authored.js');
      const {parseLessonMarkdown} = await import('/src/markdown/lesson-authoring.js');
      const source = Array.from({length:160},(_,i)=>`:::mcq\nid: nav-${i+1}\ntitle: سؤال\nquestion: ما الإجابة الصحيحة للسؤال ${i+1}؟\n- [x] a | الإجابة الأولى\n- [ ] b | الإجابة الثانية\nexplanation: الشرح\nhint: اختر الإجابة الصحيحة.\n:::`).join('\n\n');
      const parsed = parseLessonMarkdown(source,{published:true});
      if(parsed.issues.length) throw new Error(parsed.issues.join('; '));
      window.navigationCleanup = renderAuthoredInteractiveLesson(document.querySelector('.lesson-card'),'الدرس',{title:'تدريب',summary:''},parsed.steps);
    });
    await page.locator('[data-question-jump="nav-1"][aria-current]').waitFor();
    await page.evaluate(()=>document.fonts.ready);
    const track = page.locator('.question-number-track');
    const centered = async id => {
      await page.waitForFunction(id=>{
        const button=document.querySelector(`[data-question-jump="${id}"]`),track=button.closest('.question-number-track');
        const item=button.getBoundingClientRect(),view=track.getBoundingClientRect();
        return Math.abs(item.x+item.width/2-view.x-view.width/2)<2;
      },id);
    };
    await centered('nav-1');
    // Select an already-visible number: it must still move to the center.
    const id = width===390 ? 'nav-4' : 'nav-8';
    const before = await track.evaluate(node=>node.scrollLeft);
    await track.evaluate(node=>{
      window.firstNavigationSamples=[];window.navigationScrollRequests=[];
      const scrollTo=node.scrollTo.bind(node);
      node.scrollTo=options=>{window.navigationScrollRequests.push(options);return scrollTo(options);};
      const sample=()=>{window.firstNavigationSamples.push(node.scrollLeft);if(window.firstNavigationSamples.length<60)requestAnimationFrame(sample);};
      requestAnimationFrame(sample);
    });
    if(width===390) await page.locator(`[data-question-jump="${id}"]`).tap();
    else await page.locator(`[data-question-jump="${id}"]`).click();
    await page.locator(`[data-question-jump="${id}"][aria-current]`).waitFor();
    await page.waitForFunction(()=>window.firstNavigationSamples.length===60);
    const samples=await page.evaluate(()=>window.firstNavigationSamples);
    await centered(id);
    const after = await track.evaluate(node=>node.scrollLeft);
    assert.ok(after>before+30,`${width}: visible selection moves to center`);
    assert.ok(await page.evaluate(()=>window.navigationScrollRequests.some(request=>request.behavior==='smooth')),'selection requests native smooth scrolling');
    // Headless WebKit can coalesce touch scroll positions; Chromium also checks intermediate frames.
    if(process.env.BROWSER_ENGINE!=='webkit')assert.ok(samples.some(value=>value>before+1&&value<after-1),`${width}: scrolling animates through intermediate positions ${JSON.stringify({before,after,samples})}`);
    // Replacing the question must preserve a strip that is already scrolled.
    const secondId = width===390 ? 'nav-6' : 'nav-11';
    await track.evaluate(node=>{
      window.navigationSamples=[];
      const sample=()=>{window.navigationSamples.push(node.scrollLeft);if(window.navigationSamples.length<40)requestAnimationFrame(sample);};
      requestAnimationFrame(sample);
    });
    await page.locator(`[data-question-jump="${secondId}"]`).click();
    await page.locator(`[data-question-jump="${secondId}"][aria-current]`).waitFor();
    await centered(secondId);
    const continued = await page.evaluate(()=>window.navigationSamples);
    assert.ok(continued.every(value=>value>=after-1),`${width}: question replacement does not reset the strip to the start ${JSON.stringify({after,continued})}`);
    assert.equal(await page.locator('[aria-current="step"]').count(),1);
    const themed = await page.locator('.question-number[aria-current]').evaluate(node=>{
      const style=getComputedStyle(node);return {border:style.borderColor,subject:style.getPropertyValue('--subject-color'),shadow:style.boxShadow,background:style.backgroundColor,outline:style.outlineStyle};
    });
    assert.equal(themed.border,'rgb(166, 107, 255)');
    assert.notEqual(themed.shadow,'none');assert.notEqual(themed.background,'rgb(255, 255, 255)');
    // Keyboard can reach and center either edge, with a visible focus indicator.
    await page.locator(`[data-question-jump="${secondId}"]`).focus();
    await page.keyboard.press('End');await centered('nav-160');
    assert.equal(await page.locator('[data-question-jump="nav-160"]').evaluate(node=>node===document.activeElement),true);
    assert.equal(await page.locator('[data-question-jump="nav-160"]').evaluate(node=>getComputedStyle(node).outlineStyle),'solid');
    await page.keyboard.press('Enter');
    await page.locator('[data-question-jump="nav-160"][aria-current]').waitFor();
    await centered('nav-160');
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.locator('[data-question-jump="nav-160"]').focus();
    await page.keyboard.press('Home');await centered('nav-1');
    await page.keyboard.press('Enter');
    await page.locator('[data-question-jump="nav-1"][aria-current]').waitFor();
    await centered('nav-1');
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
    if(process.env.BROWSER_SCREENSHOT_DIR){await mkdir(process.env.BROWSER_SCREENSHOT_DIR,{recursive:true});await page.screenshot({path:`${process.env.BROWSER_SCREENSHOT_DIR}/question-navigation-${width}.png`});}
    await page.emulateMedia({reducedMotion:'no-preference'});
    await page.evaluate(async()=>{
      window.navigationCleanup();document.body.className='';
      const {renderCourseMapMarkup}=await import('/src/ui/course-map.js');
      document.body.innerHTML=`<main style="padding:24px;display:grid;gap:20px">
        <div class="lesson-shell lesson-shell--subject"><button class="lesson-back"><svg class="lesson-back__icon" viewBox="0 0 24 24"><path d="m8 5 7 7-7 7" fill="none" stroke="currentColor"/></svg>العودة إلى المواد</button></div>
        <button class="system-action system-action--primary">ابدأ الأسئلة</button>
        <button class="level-action level-action--primary" data-template-primary>متابعة</button>
        <button class="question-report-button" aria-label="إبلاغ">⚑</button>
        <button class="nav-item">المواد</button>
        <div class="course-units">${renderCourseMapMarkup()}</div></main>`;
    });
    assert.deepEqual(await page.locator('.subject-card').evaluateAll(nodes=>nodes.map(node=>node.dataset.subject)),['mathematics','mathematics-2','physics','chemistry','biology','ict','english','arabic','islamic-education']);
    const inspect = control=>control.evaluate(node=>{
      const style=getComputedStyle(node),rect=node.getBoundingClientRect();
      return {x:rect.x,y:rect.y,background:style.backgroundColor,border:style.borderStyle==='none'||parseFloat(style.borderWidth)===0?null:style.borderColor,shadow:style.boxShadow,transform:style.transform,filter:style.filter,iconTransform:node.querySelector('svg')?getComputedStyle(node.querySelector('svg')).transform:null,tap:style.webkitTapHighlightColor};
    });
    for(const selector of ['.lesson-back','.question-report-button','.nav-item']){
      const control=page.locator(selector).first();await control.scrollIntoViewIfNeeded();await page.mouse.move(0,0);
      const normal=await inspect(control);
      await control.hover();assert.deepEqual(await inspect(control),normal,`${width}/${selector}: hover changes only ink`);
      await page.mouse.down();assert.deepEqual(await inspect(control),normal,`${width}/${selector}: press changes only ink`);
      await page.mouse.move(0,0);await page.mouse.up();
      assert.equal(normal.tap,'rgba(0, 0, 0, 0)');
    }
    for(const selector of ['.system-action','[data-template-primary]']) {
      const control=page.locator(selector);await control.scrollIntoViewIfNeeded();await page.mouse.move(0,0);
      const ink=await control.evaluate(node=>getComputedStyle(node).color);
      const translation=()=>control.evaluate(node=>new DOMMatrix(getComputedStyle(node).transform).m42);
      await control.hover();
      if(width===1440) {
        await page.waitForFunction(selector=>Math.abs(new DOMMatrix(getComputedStyle(document.querySelector(selector)).transform).m42-2)<.1,selector);
        assert.equal(await control.evaluate(node=>getComputedStyle(node).color),ink,'raised hover preserves label color');
      }
      await page.mouse.down();
      await page.waitForFunction(selector=>new DOMMatrix(getComputedStyle(document.querySelector(selector)).transform).m42>2.5,selector);
      assert.equal(await control.evaluate(node=>getComputedStyle(node).color),ink,'raised press preserves label color');
      assert.ok(await translation()>2.5);
      await page.mouse.move(0,0);await page.mouse.up();
    }
    const card=page.locator('.subject-card').first();await card.scrollIntoViewIfNeeded();await page.mouse.move(0,0);
    const cardInk=await card.locator('h2').evaluate(node=>getComputedStyle(node).color);
    await card.hover();
    if(width===1440)await page.waitForFunction(()=>getComputedStyle(document.querySelector('.subject-card')).filter==='brightness(0.97)');
    await page.mouse.down();
    await page.waitForFunction(()=>getComputedStyle(document.querySelector('.subject-card')).filter==='brightness(0.97)');
    assert.equal(await card.locator('h2').evaluate(node=>getComputedStyle(node).color),cardInk,'card tint leaves the title color unchanged');
    assert.equal(await card.evaluate(node=>getComputedStyle(node).transform),'none','cards never shift');
    await page.mouse.move(0,0);await page.mouse.up();
    if(process.env.BROWSER_SCREENSHOT_DIR)await page.screenshot({path:`${process.env.BROWSER_SCREENSHOT_DIR}/subjects-and-controls-${width}.png`});
    await page.evaluate(async()=>{
      const {mountSubjectRoadmap}=await import('/src/ui/subject-roadmap.js');
      const {getSubjectRoadmap}=await import('/src/data/subject-roadmaps.js');
      document.body.innerHTML='<main style="padding:32px"><div class="lesson-shell lesson-shell--subject"></div></main>';
      window.roadmapControls=mountSubjectRoadmap({container:document.querySelector(".lesson-shell"),roadmap:getSubjectRoadmap("physics")});
    });
    const lesson=page.locator('.roadmap-part').first(),cap=lesson.locator('.roadmap-level-cap');
    await lesson.scrollIntoViewIfNeeded();await page.mouse.move(0,0);
    const capInk=await lesson.locator('.roadmap-part-number').evaluate(node=>getComputedStyle(node).color);
    if(width===1440){
      await lesson.hover();
      await page.waitForFunction(()=>Math.abs(new DOMMatrix(getComputedStyle(document.querySelector('.roadmap-level-cap')).transform).m42-5)<.1);
      assert.equal(await lesson.locator('.roadmap-part-number').evaluate(node=>getComputedStyle(node).color),capInk,'lesson hover keeps the white number');
    }
    let cdp;
    if(width===390&&process.env.BROWSER_ENGINE!=='webkit'){
      cdp=await context.newCDPSession(page);const box=await lesson.boundingBox();
      if(process.env.BROWSER_SCREENSHOT_DIR)await page.screenshot({path:`${process.env.BROWSER_SCREENSHOT_DIR}/lesson-before-touch-${width}.png`});
      await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:box.x+box.width/2,y:box.y+box.height/2,id:1}]});
    }else{await lesson.hover();await page.mouse.down();}
    await page.waitForFunction(()=>new DOMMatrix(getComputedStyle(document.querySelector('.roadmap-level-cap')).transform).m42>9,null,{timeout:3000}).catch(async error=>{
      const state=await lesson.evaluate(node=>{const rect=node.getBoundingClientRect();return {rect:{x:rect.x,y:rect.y,width:rect.width,height:rect.height},active:node.matches(':active'),hit:document.elementFromPoint(rect.x+rect.width/2,rect.y+rect.height/2)?.outerHTML.slice(0,240),transform:getComputedStyle(node.querySelector('.roadmap-level-cap')).transform,travel:getComputedStyle(node).getPropertyValue('--travel')};});
      throw new Error(`${error.message}: ${JSON.stringify(state)}`);
    });
    const depth=await lesson.evaluate(node=>node.getBoundingClientRect().height*27.371/268);
    assert.ok(Math.abs(await cap.evaluate(node=>new DOMMatrix(getComputedStyle(node).transform).m42)-depth)<.3,'press reaches the full base depth');
    assert.equal(await lesson.locator('.roadmap-part-number').evaluate(node=>getComputedStyle(node).color),capInk,'lesson press keeps the white number');
    if(process.env.BROWSER_SCREENSHOT_DIR)await page.screenshot({path:`${process.env.BROWSER_SCREENSHOT_DIR}/lesson-pressed-${width}.png`});
    if(cdp){await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});}
    else{await page.mouse.up();}
    await page.mouse.move(0,0);
    await page.waitForFunction(()=>Math.abs(new DOMMatrix(getComputedStyle(document.querySelector('.roadmap-level-cap')).transform).m42)<.1);
    if(cdp){
      const contact=async()=>{const box=await lesson.boundingBox();await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:box.x+box.width/2,y:box.y+box.height/2,id:1}]});await page.waitForFunction(()=>document.querySelector('.roadmap-part').classList.contains('is-pressed'));};
      await contact();await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});
      await page.waitForFunction(()=>!document.querySelector('.roadmap-part').classList.contains('is-pressed'));
      await page.waitForFunction(()=>Math.abs(new DOMMatrix(getComputedStyle(document.querySelector('.roadmap-level-cap')).transform).m42)<.1);
      await contact();await page.evaluate(()=>window.roadmapControls.destroy());
      assert.equal(await lesson.evaluate(node=>node.classList.contains('is-pressed')),false,'navigation cleanup releases a held touch');
      await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});await cdp.detach();
    }else await page.evaluate(()=>window.roadmapControls.destroy());
    assert.deepEqual(errors,[]);
    await context.close();
  }
  console.log('Question slider, stationary text controls, raised actions, subject-card tints, and full-depth lesson presses passed on desktop/mobile.');
} finally {await browser.close();await server.close();}
