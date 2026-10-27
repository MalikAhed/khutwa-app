import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";

await withBrowserPage(async ({ base, send, evaluate, waitFor }) => {
  const key = {subjectId:"ict",lessonId:"database-management",partId:"access-basics"};
  const route = base+"?subject=ict&lesson=database-management&part=access-basics&question=exam-p09-q1-1";
  const keypress = async (key,code,value) => {
    await send("Input.dispatchKeyEvent",{type:"keyDown",key,code,windowsVirtualKeyCode:value});
    await send("Input.dispatchKeyEvent",{type:"keyUp",key,code,windowsVirtualKeyCode:value});
  };
  for (const [index,width,reduced] of [[1,1440,false],[2,390,true]]) {
    await send("Emulation.setDeviceMetricsOverride",{width,height:844,deviceScaleFactor:1,mobile:width<600});
    await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:reduced?"reduce":"no-preference"}]});
    await send("Page.navigate",{url:base});
    await waitFor("document.querySelector('.visitor-landing') && !document.querySelector('#app-splash')");
    await evaluate(`(async()=>{
      const response=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'heart-trial-${index}',phone:'059103710${index}',password:'Hearts123',curriculum:'gaza',path:'scientific'})});
      const {account}=await response.json();if(!account)throw new Error('Could not register fixture');
      for(let n=0;n<9;n++) {
        const saved=await fetch('/api/progress',{method:'POST',headers:{'Content-Type':'application/json','X-Progress-Owner':'account:'+account.id},body:JSON.stringify({...${JSON.stringify(key)},id:'seed-heart-'+n,type:'answer',stepId:'exam-p09-q1-1',correct:false})});
        if(!saved.ok)throw new Error('Could not seed hearts');
      }
    })()`);
    await send("Page.navigate",{url:base+"?page=learn"});
    await waitFor("document.querySelector('[data-super-trial-offer] img')?.complete && !document.querySelector('#app-splash,.media-pending')");
    const offerLayout = await evaluate(`(()=>{const b=document.querySelector('[data-super-trial-offer]'),r=b.getBoundingClientRect(),i=b.querySelector('img').getBoundingClientRect(),t=b.querySelector('span').getBoundingClientRect(),h=b.parentElement.getBoundingClientRect();return {left:Math.abs(r.left-h.left),width:r.width,height:r.height,tagBelow:t.top>=i.bottom,overflow:document.documentElement.scrollWidth>innerWidth};})()`);
    assert.ok(offerLayout.left<2);assert.ok(offerLayout.width<=100);assert.ok(offerLayout.height<=110);
    assert.equal(offerLayout.tagBelow,true);assert.equal(offerLayout.overflow,false);
    const homeShot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`/tmp/learn-home-super-offer-${width}.png`,Buffer.from(homeShot.data,"base64"));
    await evaluate("document.querySelector('[data-super-trial-offer]').focus();document.querySelector('[data-super-trial-offer]').click()");
    await waitFor("document.querySelector('.heart-depletion[open][data-mode=offer].is-ready')");
    assert.equal(await evaluate("document.querySelector('[data-heart-timer-wrap]').hidden"),true);
    assert.match(await evaluate("document.querySelector('.heart-depletion img').src"),/rocky-super\.svg$/);
    await keypress("Escape","Escape",27);
    await waitFor("!document.querySelector('.heart-depletion')");
    assert.equal(await evaluate("document.activeElement.matches('[data-super-trial-offer]')"),true);
    await send("Page.navigate",{url:route});
    await waitFor("document.querySelector('[data-ui-lab-answer]') && !document.querySelector('#app-splash,.media-pending')");
    assert.equal(await evaluate("document.querySelector('[data-resource-hearts]').textContent"),"1");
    await evaluate("document.querySelector('[data-ui-lab-answer][data-correct=false]').click();document.querySelector('[data-ui-lab-check]').focus();document.querySelector('[data-ui-lab-check]').click()");
    await waitFor("document.querySelector('.heart-depletion[open].is-ready')");
    if (!reduced) {
      const sequence = await evaluate(`(()=>{const d=document.querySelector('.heart-depletion');return {fade:getComputedStyle(d,'::backdrop').animationName,rocky:getComputedStyle(d.querySelector('[data-heart-scene]')).animationDelay,copy:getComputedStyle(d.querySelector('.heart-depletion__content')).animationDelay};})()`);
      assert.equal(sequence.fade,"heart-screen-fade");
      assert.equal(sequence.rocky,"0.42s");
      assert.equal(sequence.copy,"0.86s");
    }
    await waitFor("getComputedStyle(document.querySelector('.heart-depletion__content')).opacity === '1'");
    assert.equal(await evaluate("document.querySelector('[data-resource-hearts]').textContent"),"0");
    const tick = await evaluate("document.querySelector('[data-heart-timer]').textContent");
    await waitFor(`document.querySelector('[data-heart-timer]').textContent !== ${JSON.stringify(tick)}`);
    assert.equal(await evaluate("document.querySelector('.heart-depletion img').naturalWidth>0"),true);
    assert.match(await evaluate("document.querySelector('[data-heart-trial]').textContent"),/قلوب غير محدودة[\s\S]*شروحات مفصّلة/);
    const layout=await evaluate(`(()=>{const d=document.querySelector('.heart-depletion'),r=d.querySelector('[data-heart-resume]').getBoundingClientRect();return {overflow:d.scrollWidth>innerWidth,bottom:r.bottom,height:innerHeight,focus:d.contains(document.activeElement),reduced:getComputedStyle(d.querySelector('[data-heart-scene]')).animationName};})()`);
    assert.equal(layout.overflow,false);assert.ok(layout.bottom<=layout.height);assert.equal(layout.focus,true);
    if(reduced)assert.equal(layout.reduced,"none");
    const shot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`/tmp/learn-heart-depletion-${width}.png`,Buffer.from(shot.data,"base64"));
    await keypress("Escape","Escape",27);
    await waitFor("!document.querySelector('.heart-depletion')");
    assert.equal(await evaluate("document.activeElement.matches('[data-ui-lab-check]')"),true);
    // An empty balance also opens the sequence on lesson entry.
    await send("Page.navigate",{url:route});
    await waitFor("document.querySelector('.heart-depletion[open].is-ready') && !document.querySelector('#app-splash')");
    await keypress("Tab","Tab",9);
    assert.equal(await evaluate("document.querySelector('.heart-depletion').contains(document.activeElement)"),true);
    if (width<600) {
      await keypress("Escape","Escape",27);
      await send("Page.navigate",{url:base+"?page=learn"});
      await waitFor("document.querySelector('[data-super-trial-offer]') && !document.querySelector('#app-splash,.media-pending')");
      await evaluate("document.querySelector('[data-super-trial-offer]').click()");
      await waitFor("document.querySelector('.heart-depletion[open][data-mode=offer].is-ready')");
    }
    await evaluate("document.querySelector('[data-heart-activate]').click()");
    await waitFor("document.querySelector('[data-heart-status]').textContent.includes('تم تفعيل')");
    await waitFor("document.querySelector('.heart-depletion[data-state=super] [data-heart-rig] [data-part=sunglasses]')");
    assert.equal(await evaluate("document.querySelectorAll('[data-super-hearts]:not([hidden]) img[src$=\"nav-heart.svg\"]').length"),3);
    assert.match(await evaluate("document.querySelector('[data-heart-rocky]').alt"),/سعيد/);
    const successShot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`/tmp/learn-super-active-${width}.png`,Buffer.from(successShot.data,"base64"));
    assert.equal(await evaluate("document.querySelector('[data-resource-hearts]').textContent"),"∞");
    assert.equal(await evaluate("document.querySelector('[data-heart-timer-wrap]').hidden"),true);
    await evaluate("document.querySelector('[data-heart-resume]').click()");
    await waitFor("!document.querySelector('.heart-depletion')");
    await send("Page.navigate",{url:route});
    await waitFor("document.querySelector('[data-ui-lab-answer]') && !document.querySelector('#app-splash,.media-pending')");
    assert.equal(await evaluate("document.querySelector('.heart-depletion')"),null);
    assert.equal(await evaluate("document.querySelector('[data-resource-hearts]').textContent"),"∞");
    assert.equal(await evaluate("document.querySelector('.lesson-top [data-super-trial-countdown]')"),null);
    assert.equal(await evaluate("document.querySelector('[data-math-question-filter]')"),null);
    await evaluate("document.querySelector('[data-ui-lab-answer][data-correct=true]').click();document.querySelector('[data-ui-lab-check]').click()");
    await waitFor("document.querySelector('[data-ui-lab-check]').dataset.actionState === 'continue'");
    assert.equal(await evaluate("document.querySelector('.level-question-rating-prompt')"),null);
    assert.equal(await evaluate("document.querySelector('[data-resource-hearts]').textContent"),"∞");
    await send("Page.navigate",{url:base+"?page=learn"});
    await waitFor("document.querySelector('[data-learner-dashboard]') && !document.querySelector('#app-splash,.media-pending')");
    await waitFor("document.querySelector('.learner-dashboard__header [data-super-trial-countdown]:not([hidden])')");
    const weekTick = await evaluate("document.querySelector('[data-super-trial-countdown]').textContent");
    await waitFor(`document.querySelector('[data-super-trial-countdown]').textContent !== ${JSON.stringify(weekTick)}`);
    assert.equal(await evaluate("document.querySelector('[data-super-trial-offer]')"),null);
    await evaluate("document.querySelector('[data-auth-sign-out]').click()");
    await waitFor("document.querySelector('.visitor-landing')");
  }
});
console.log("Heart depletion and Home offer passed: compact left placement, glasses/tag, shared trial, final-heart trigger, fade/entrance, countdown, desktop/mobile, reduced motion, keyboard, reload and unlimited answering.");
