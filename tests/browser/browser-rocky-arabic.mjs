import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import { chromium, webkit } from 'playwright';
import { startPreviewServer } from '../../scripts/preview-server.mjs';
import { findChrome } from './browser-session.mjs';

const server=await startPreviewServer({root:process.cwd(),prefix:'/'});
const browser=process.env.BROWSER_ENGINE==='webkit'?await webkit.launch()
  :await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
const output=process.env.BROWSER_SCREENSHOT_DIR||'/tmp/khutwa-rocky-arabic';
await mkdir(output,{recursive:true});
try{
  const html=await readFile('index.html','utf8');
  const links=[...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(match=>match[0].replace(/media="print"/g,'media="all"')).join('');
  for(const width of [390,1440]){
    const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'no-preference'});
    const page=await context.newPage(),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.route('**/arabic-check',route=>route.fulfill({contentType:'text/html',body:`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${links}</head><body><button id="easy">سهل</button></body></html>`}));
    await page.goto(server.base+'arabic-check');
    const message='مرحبًا بك! سنتعلّم معًا خطوة بخطوة. السؤال سهل وجميل.';
    await page.evaluate(async message=>{
      const {createRockyTourSpotlight}=await import('/src/ui/rocky-tour-spotlight.js');
      window.arabicTour=createRockyTourSpotlight({onNext:()=>{},onSkip:()=>{}});
      window.arabicTour.show({id:'arabic',message,centered:true,nextLabel:'التالي'});
      await document.fonts.ready;
    },message);
    const text=page.locator('#rocky-app-tour-message');
    assert.equal(await text.textContent(),message);
    assert.deepEqual(await text.locator(':scope > span').allTextContents(),message.split(/\s+/u),'Arabic words and their diacritics remain intact during animation');
    const delays=await text.locator(':scope > span').evaluateAll(nodes=>nodes.map(node=>parseFloat(getComputedStyle(node).animationDelay)));
    assert.ok(delays[1]>delays[0],'words still reveal progressively');
    await page.locator('.rocky-app-tour-bubble').click();
    assert.ok(await text.locator(':scope > span').evaluateAll(nodes=>nodes.every(node=>getComputedStyle(node).opacity==='1')),'tap completes the reveal');
    await page.waitForTimeout(300);
    const wordWidths=await text.locator(':scope > span').evaluateAll(nodes=>nodes.map(node=>{const range=document.createRange();range.selectNodeContents(node);return range.getBoundingClientRect().width;}));
    await page.screenshot({path:`${output}/${process.env.BROWSER_ENGINE||'chromium'}-${width}.png`});
    await text.evaluate((node,message)=>{node.textContent=message;},message);
    const plainWidths=await text.evaluate(node=>[...node.textContent.matchAll(/\S+/gu)].map(match=>{const range=document.createRange();range.setStart(node.firstChild,match.index);range.setEnd(node.firstChild,match.index+match[0].length);return range.getBoundingClientRect().width;}));
    assert.ok(wordWidths.every((width,index)=>Math.abs(width-plainWidths[index])<.5),'Arabic word shaping matches the same words rendered as ordinary app text');
    await page.evaluate(()=>window.arabicTour.show({id:'inline',message:'إذا كان السؤال سهل اضغط هنا.',preview:['#easy'],inlinePreview:'سهل',centered:true,nextLabel:'التالي',equation:{amount:'50',icon:'assets/icons/nav-gem.svg',label:'جوهرة',unit:'طاقة',after:' وتابع التعلّم.'}}));
    assert.equal(await text.locator('.rocky-inline-control').textContent(),'سهل');
    assert.equal(await text.locator('.rocky-inline-equation').getAttribute('dir'),'ltr');
    assert.ok((await text.textContent()).endsWith(' وتابع التعلّم.'));
    await page.emulateMedia({reducedMotion:'reduce'});
    assert.ok(await text.locator('.rocky-letter').evaluateAll(nodes=>nodes.every(node=>getComputedStyle(node).opacity==='1'&&getComputedStyle(node).animationName==='none')),'reduced motion shows the complete message immediately');
    const box=await page.locator('.rocky-app-tour-guide').boundingBox();
    assert.ok(box.x>=0&&box.y>=0&&box.x+box.width<=width+1&&box.y+box.height<=901,'guide fits the viewport');
    await page.evaluate(()=>{
      const fixture=document.createElement('div');
      fixture.className='lesson-shell--ui-lab';
      fixture.style.cssText='position:fixed;inset:0';
      fixture.innerHTML='<div class="lesson-top" style="height:80px"></div><button id="card-target" style="position:fixed;top:110px;left:20px;width:calc(100vw - 40px);height:600px">البطاقة</button><button id="nav-target" style="position:fixed;bottom:0;left:40px;width:100px;height:44px">المراجعة</button><button id="top-target" style="position:fixed;top:12px;right:12px;width:44px;height:44px">إغلاق</button><button id="side-target" style="position:fixed;top:740px;right:12px;width:44px;height:44px">شرح</button>';
      document.body.append(fixture);
      fixture.querySelector('#top-target').style.zIndex='4';
    });
    for(const selector of ['#card-target','#nav-target','#top-target','#side-target']){
      await page.evaluate(selector=>window.arabicTour.show({id:'placement',message:'المس هنا للمتابعة.',selectors:[selector],gesture:'tap'}),selector);
      await page.locator('.rocky-tour-gesture.is-visible').waitFor();
      const placement=await page.evaluate(selector=>{
        const hand=document.querySelector('.rocky-tour-gesture'),target=document.querySelector(selector),style=getComputedStyle(hand);
        const x=parseFloat(style.left)+hand.offsetWidth*223/512,y=parseFloat(style.top)+hand.offsetHeight*129/512;
        const hit=document.elementFromPoint(x,y);
        return {hitsTarget:hit===target||target.contains(hit),extendsBelow:parseFloat(style.top)+hand.offsetHeight>innerHeight,point:[x,y],hit:hit?.id||hit?.className};
      },selector);
      assert.ok(placement.hitsTarget,`${selector}: fingertip points at the real control, clear of Rocky's bubble: ${JSON.stringify(placement)}`);
      if(selector==='#nav-target')assert.ok(placement.extendsBelow,'bottom navigation keeps its fingertip on the icon while allowing the hand below the viewport');
    }
    await page.evaluate(()=>window.arabicTour.destroy());
    assert.deepEqual(errors,[]);
    await context.close();
    console.log(`${process.env.BROWSER_ENGINE||'chromium'} ${width}px: Arabic shaping, reveal, inline control/equation, reduced motion and gesture placement passed`);
  }
}finally{await browser.close();await server.close();}
