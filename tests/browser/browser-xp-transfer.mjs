import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { withBrowserPage } from "./browser-page.mjs";

await withBrowserPage(async ({ base, send, evaluate, waitFor }) => {
  await send("Network.setBlockedURLs", {urls:["*/src/bootstrap.js"]});
  await send("Page.navigate", {url:base});
  await waitFor("document.readyState === 'complete'");
  await evaluate(`(async()=>{
    document.querySelectorAll('link[rel=stylesheet]').forEach(link=>link.media='all');
    document.body.removeAttribute('data-startup');
    document.body.className='ui-lab-open ui-lab-template-open ready-lesson-open';
    document.body.innerHTML='<main class="page lesson-mode"><section class="lesson-view is-visible"><div class="lesson-shell lesson-shell--ui-lab lesson-shell--completion"><div class="lesson-card lesson-card--ui-lab lesson-card--ready-lesson" id="fixture"></div></div></section></main>';
    const [{renderSubjectCompletion,animateSubjectCompletion},{renderTemplateShell,renderTemplateFooter}]=await Promise.all([import('/src/ui/subject-completion.js'),import('/src/ui/template-shell.js')]);
    await document.fonts.ready;
    window.mountCollection=(amount,total)=>{
      window.stopCollection?.();window.collectionObserver?.disconnect();
      document.querySelector('#fixture').innerHTML='<article class="lesson-flow ready-lesson-flow"><section class="ready-lesson-stage">'+renderTemplateShell({content:renderSubjectCompletion('جلسة',{sessionEnded:true,xpGain:amount,levelTotalXp:total,accuracy:100,answerCount:5,elapsedSeconds:201}),footer:renderTemplateFooter({locale:'ar',backLabel:'متابعة التعلّم',primaryLabel:'العودة لخريطة الدروس'}),locale:'ar'})+'</section></article>';
      window.collectionStats={emitted:0,peak:0,start:performance.now(),done:0,earned:amount,transferCorrect:true,originError:0};
      const root=document.querySelector('.subject-completion');
      window.collectionObserver=new MutationObserver(records=>{
        for(const record of records)for(const node of record.addedNodes)if(node.classList?.contains('subject-xp-particle')){
          collectionStats.emitted++;
          const origin=new DOMMatrix(node.getAnimations()[0].effect.getKeyframes()[0].transform),rr=root.getBoundingClientRect(),sr=root.querySelector('.subject-gain-icon--xp').getBoundingClientRect(),scale=rr.width/root.offsetWidth;
          collectionStats.originError=Math.max(collectionStats.originError,Math.hypot(origin.m41+12-(sr.left-rr.left+sr.width/2)/scale,origin.m42+12-(sr.top-rr.top+sr.height/2)/scale));
        }
        collectionStats.peak=Math.max(collectionStats.peak,root.querySelectorAll('.subject-xp-particle').length);
        const remaining=Number(root.querySelector('.subject-gain--xp [data-gain-count]').textContent);
        collectionStats.transferCorrect &&= remaining===collectionStats.earned-collectionStats.emitted;
        if(root.dataset.animationState==='complete')collectionStats.done=performance.now()-collectionStats.start;
      });
      collectionObserver.observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:['data-animation-state']});
      window.stopCollection=animateSubjectCompletion(document.querySelector('#fixture'));
    };
  })()`);
  const complete = async () => {
    try { await waitFor("collectionStats.done>0"); }
    catch (error) {
      console.error(await evaluate("({stats:collectionStats,state:document.querySelector('.subject-completion').dataset.animationState,particles:document.querySelectorAll('.subject-xp-particle').length,animations:document.getAnimations().map(a=>({state:a.playState,time:a.currentTime}))})"));
      throw error;
    }
    return evaluate("collectionStats");
  };
  await evaluate("mountCollection(10,40)");
  const entrance = await evaluate(`(()=>{
    const root=document.querySelector('.subject-completion');
    const animations=root.getAnimations({subtree:true}).filter(a=>a.animationName?.startsWith('completion-gain-')||a.animationName==='completion-level-arrive');
    const sample=time=>{
      animations.forEach(a=>{a.pause();a.currentTime=time;});
      const card=root.querySelector('.subject-gain--xp');
      return {cards:[...root.querySelectorAll('.subject-gain')].map(node=>node.getBoundingClientRect().top),face:card.querySelector('strong').getBoundingClientRect().top,cap:parseFloat(getComputedStyle(card).clipPath.slice(6)),width:root.getBoundingClientRect().width,mascot:root.querySelector('.subject-completion-rocky').getBoundingClientRect().width};
    };
    return {start:sample(0),opening:sample(650),end:sample(1050)};
  })()`);
  assert.equal(entrance.start.cards.length,3);
  assert.ok(entrance.start.cards.every((top,index)=>top>entrance.end.cards[index]+150),'all three boxes rise into place');
  assert.ok(entrance.opening.cap>0 && entrance.end.cap===0,'colored label backing opens after the white face arrives');
  assert.ok(Math.abs(entrance.opening.face-entrance.end.face)<1,'the white face stays in place while the label opens');
  assert.equal(entrance.start.width,entrance.end.width,'the page has no camera zoom');
  assert.equal(entrance.start.mascot,entrance.end.mascot);
  await evaluate("mountCollection(10,40)");
  const small = await complete();
  assert.equal(small.emitted,10);
  assert.equal(await evaluate("document.querySelector('[data-level-up]')"),null,"sessions below the next level have no celebration");
  for (const width of [1440,390,320]) {
    await send("Emulation.setDeviceMetricsOverride", {width,height:844,deviceScaleFactor:1,mobile:width<600});
    await evaluate("mountCollection(100,180)");
    assert.equal(await evaluate("document.querySelector('.subject-gain--xp [data-gain-count]').textContent"),"100");
    assert.equal(await evaluate("document.querySelectorAll('.subject-xp-particle').length"),0,"statistics appear before bolts leave");
    assert.equal(await evaluate("document.querySelector('[data-level-up]').hidden"),true,"the next level is hidden until XP arrives");
    await evaluate("document.querySelector('[data-template-primary]').focus()");
    await waitFor("document.querySelectorAll('.subject-xp-particle').length>8");
    const shot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`/tmp/session-xp-${width}.png`,Buffer.from(shot.data,"base64"));
    await waitFor("document.querySelector('[data-level-up]').hidden===false");
    assert.equal(await evaluate("document.querySelector('[data-level-up-number]').textContent"),"2");
    assert.match(await evaluate("document.querySelector('[data-level-up-announcement]').textContent"),/المستوى 2/);
    assert.equal(await evaluate("document.activeElement.hasAttribute('data-template-primary')"),true,"the celebration preserves keyboard focus");
    await evaluate("new Promise(resolve=>setTimeout(resolve,280))");
    const levelShot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`/tmp/session-level-up-${width}.png`,Buffer.from(levelShot.data,"base64"));
    const stats=await complete();
    assert.equal(stats.emitted,100,"100 XP emits exactly 100 SVG bolts");
    assert.equal(stats.transferCorrect,true,"one XP leaves the box with each departing bolt");
    assert.ok(stats.originError<1,"all bolts originate at the main SVG beside the number");
    assert.ok(stats.peak<=80);
    assert.ok(stats.done>small.done,"larger rewards take longer");
    assert.equal(await evaluate("document.querySelector('.subject-gain--xp [data-gain-count]').textContent"),"0");
    assert.equal(await evaluate("document.querySelector('[data-level-number]').textContent"),"2");
    assert.equal(await evaluate("document.querySelector('.completion-level [role=progressbar]').getAttribute('aria-valuenow')"),"80");
    const fit=await evaluate(`(()=>{const footer=document.querySelector('.level-layout-actions').getBoundingClientRect();return {overflow:document.documentElement.scrollWidth>innerWidth,footer:footer.bottom<=innerHeight+1,stats:[...document.querySelectorAll('.subject-gain > strong')].every(node=>node.scrollWidth<=node.clientWidth+1)};})()`);
    assert.deepEqual(fit,{overflow:false,footer:true,stats:true});
    assert.equal(await evaluate("getComputedStyle(document.querySelector('.completion-level .dashboard-level-progress > span'),'::before').backgroundColor"),"rgb(255, 240, 163)");
  }
  for (const [gain,total,level,xp] of [[210,250,"3","50"],[100,49900,"500","100"]]) {
    await evaluate(`mountCollection(${gain},${total})`);
    await complete();
    assert.equal(await evaluate("document.querySelector('[data-level-number]').textContent"),level);
    assert.equal(await evaluate("document.querySelector('[data-level-up-number]').textContent"),level,"multi-level and maximum-level gains update the same badge");
    assert.equal(await evaluate("document.querySelector('.completion-level [role=progressbar]').getAttribute('aria-valuenow')"),xp);
  }
  await evaluate("mountCollection(100,180)");
  await waitFor("document.querySelector('.subject-xp-particle')");
  await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"reduce"}]});
  await waitFor("document.querySelector('.subject-completion').dataset.animationState==='complete' && !document.querySelector('.subject-xp-particle')");
  assert.equal(await evaluate("document.querySelector('.subject-gain--xp [data-gain-count]').textContent"),"0");
  assert.equal(await evaluate("document.querySelector('.completion-level [role=progressbar]').getAttribute('aria-valuenow')"),"80");
  assert.equal(await evaluate("document.querySelector('[data-level-up]').hidden"),false);
  assert.equal(await evaluate("document.querySelector('.completion-level-up-art').style.transform"),"translateY(0px) scale(1)","switching motion off settles the badge");
  await evaluate("mountCollection(100,180)");
  assert.equal(await evaluate("document.querySelector('[data-level-up-number]').textContent"),"2","initial reduced motion shows the final earned level");
  assert.equal(await evaluate("document.querySelectorAll('.completion-level-up-spark').length && document.querySelector('.completion-level-up-spark').getAnimations().length"),0);
  for (const [width,height] of [[390,600],[900,450]]) {
    await send("Emulation.setDeviceMetricsOverride",{width,height,deviceScaleFactor:1,mobile:width<600});
    await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
    const fits=await evaluate(`(()=>{const badge=document.querySelector('.completion-level-up').getBoundingClientRect(),footer=document.querySelector('.level-layout-actions').getBoundingClientRect();return {badge:badge.left>=0&&badge.right<=innerWidth&&badge.top>=0,footer:footer.bottom<=innerHeight+1,overflow:document.documentElement.scrollWidth>innerWidth};})()`);
    assert.deepEqual(fits,{badge:true,footer:true,overflow:false},"the level badge and controls fit short screens");
    const shortShot=await send("Page.captureScreenshot",{format:"png"});
    await writeFile(`/tmp/session-level-up-${width}-${height}.png`,Buffer.from(shortShot.data,"base64"));
  }
  await send("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await evaluate("mountCollection(0,180)");
  assert.equal(await evaluate("Boolean(document.querySelector('.subject-xp-particles'))"),false);
  await send("Emulation.setEmulatedMedia",{features:[]});
  await evaluate("mountCollection(100,180)");
  await waitFor("document.querySelector('.subject-xp-particle')");
  await evaluate("stopCollection();document.querySelector('#fixture').replaceChildren()");
  await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
  assert.equal(await evaluate("Boolean(document.querySelector('.subject-xp-particles'))"),false,"leaving cancels the transfer");
}, {baseUrl:process.env.BROWSER_BASE_URL || null});
console.log("XP transfer passed: statistics first, exact bolts and countdown, level-up badge and announcement, multiple levels, desktop/mobile fit, reduced motion and cancellation.");
