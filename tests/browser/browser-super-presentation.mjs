import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';

// Isolate the presentation from real accounts and the app's bootstrap.
const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
const html=await readFile('index.html','utf8');
const styles=[...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(match=>match[0].replace(/media="print"/g,'media="all"')).join('');

try {
 for(const [width,height] of [[1440,900],[1280,720],[390,844],[360,740],[375,667],[320,568]]) {
  const motion=width===1440?'no-preference':'reduce';
  const context=await browser.newContext({viewport:{width,height},reducedMotion:motion});
  try {
   // Verify the handoff without contacting WhatsApp or sending a real message.
   await context.route('https://wa.me/**',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><title>WhatsApp handoff fixture</title>'}));
   const page=await context.newPage();
   await page.route('**/super-presentation-fixture',route=>route.fulfill({contentType:'text/html',body:`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${styles}</head><body><button id="opener">افتح سوبر</button></body></html>`}));
   await page.goto(`${base}/super-presentation-fixture`);
   await page.evaluate(async()=>{
    const {mountHeartDepletion}=await import('/src/ui/heart-depletion.js');
    const balance={hearts:0,gems:0,unlimited:false,navigationRemaining:0,nextHeartAt:Date.now()+3600000};
    const store={get:()=>balance,subscribe:()=>()=>{}};
    const invitation=mountHeartDepletion({resourceStore:store,ownerId:'fixture',learnerName:'ليان أحمد',autoShowEmpty:false,onReturnHome:()=>{document.body.dataset.homeReturns=String(Number(document.body.dataset.homeReturns||0)+1);}});
    document.querySelector('#opener').addEventListener('click',()=>invitation.show('hearts'));
    document.querySelector('#opener').addEventListener('show-gems',event=>{balance.gems=event.detail;invitation.show('gems');});
    await document.fonts.ready;
   });
   await page.locator('#opener').click();
   const sheet=page.locator('.super-invitation[open]');
   await page.locator('.super-invitation.is-ready').waitFor();
   assert.equal(await sheet.locator('img').evaluateAll(images=>images.every(img=>img.complete&&img.naturalWidth>0)),true,'Rocky, background and the original app SVGs decode');
   assert.equal(await sheet.locator('.super-invitation__sky .super-invitation__landscape').getAttribute('src'),'assets/illustrations/sky-mobile.webp');
   assert.equal(await sheet.locator('.super-invitation__clouds,.super-invitation__cloud').count(),0,'only the background artwork supplies clouds');
   assert.equal(await sheet.locator('[data-heart-rocky]').getAttribute('src'),'assets/mascot/rocky-floating-banner.svg');
   assert.equal(await sheet.locator('.super-invitation__float').count(),0,'the supplied composition owns its hearts and gems');
   if(width===1440||width===390) {
    const artwork=await context.newPage();
    try {
     await artwork.goto(`${base}/assets/mascot/rocky-floating-banner.svg`);
     const identity=await artwork.evaluate(()=>({
      id:document.documentElement.id,animations:document.getAnimations().length,
      rewards:document.querySelectorAll('.krf-orbit-x').length,
     }));
     assert.equal(identity.id,'krf-banner','the supplied floating SVG is used');
     assert.equal(identity.rewards,4,'the supplied SVG contains two energy batteries and two gems');
     assert.equal(identity.animations>0,motion==='no-preference','the supplied SVG respects reduced motion');
    } finally {await artwork.close();}
   }
   const plans=sheet.locator('.super-plan');
   assert.deepEqual(await plans.locator('.super-plan__price > bdi').evaluateAll(nodes=>nodes.map(node=>{const copy=node.cloneNode(true);copy.querySelector('del')?.remove();return copy.textContent;})),['100 ₪ / سنة','15 ₪ / سنة']);
   assert.equal(await plans.filter({has:page.locator('input[value="all-subjects"]')}).locator('.super-plan__recommendation').textContent(),'موصى بها');
   assert.equal(await plans.filter({has:page.locator('input[value="one-subject"]')}).locator('.super-plan__recommendation').count(),0);
   assert.equal(await sheet.locator('.super-plan__detail').count(),0);
   assert.equal(await sheet.locator('.super-plan__original-price').textContent(),'135 ₪');
   assert.equal(await sheet.locator('.super-invitation__benefits li').count(),4);
   assert.equal(await sheet.locator('.super-benefit__icon--questions img').getAttribute('src'),'assets/icons/super-energy.svg');
   assert.equal(await sheet.locator('.super-benefit__infinity').count(),1);
   assert.equal(await sheet.locator('.super-benefit__icon--skips').count(),1);
   assert.equal((await sheet.locator('[data-super-subscribe]').textContent()).trim(),'متابعة الاشتراك');
   assert.equal(await sheet.locator('[data-heart-status]').isVisible(),false,'secondary marketing copy stays hidden');
   assert.equal(await sheet.locator('.heart-depletion__content [data-heart-timer-wrap]').count(),0);
   assert.equal(await sheet.locator('.super-invitation__visual [data-heart-timer-wrap] img').getAttribute('src'),'assets/icons/green_battery_icon_transparent.svg');
   assert.match((await sheet.locator('[data-heart-timer-wrap]').innerText()).trim(),/تتجدد طاقتك بعد\s*\d{2}:\d{2}:\d{2}$/,'the countdown explains when energy resets');
   assert.equal(await sheet.locator('[data-heart-resume]').evaluate(node=>getComputedStyle(node).backgroundColor),'rgba(0, 0, 0, 0)');
   assert.equal(await sheet.locator('[data-heart-resume]').evaluate(node=>getComputedStyle(node).borderTopWidth),'0px');
   const offerStyle=await sheet.evaluate(node=>{
    const recommendation=node.querySelector('.super-plan__recommendation'),saving=node.querySelector('.super-plan__original-price');
    const tag=getComputedStyle(recommendation),back=getComputedStyle(node.querySelector('[data-heart-resume]'));
    const a=saving.getBoundingClientRect(),b=saving.closest('.super-plan__amount').getBoundingClientRect();
    return {fill:tag.backgroundColor,image:tag.backgroundImage,ink:tag.color,back:back.color,savingTop:a.top,priceBottom:b.bottom,savingInk:getComputedStyle(saving).color,strike:getComputedStyle(saving,'::after').backgroundColor,strikeTop:parseFloat(getComputedStyle(saving,'::after').top),oldHeight:a.height,priceCenterOffset:Math.abs((a.left+a.right-b.left-b.right)/2)};
   });
   assert.equal(offerStyle.ink,'rgb(255, 255, 255)','recommendation text is white');
   assert.equal(offerStyle.image,'none','the recommendation uses a solid fill');
   assert.equal(offerStyle.fill,offerStyle.back,'recommendation and Back use the same ICT blue');
   assert.ok(offerStyle.savingTop>=offerStyle.priceBottom-2,'the old price sits directly below the annual price');
   assert.equal(offerStyle.savingInk,'rgb(181, 43, 43)');
   assert.equal(offerStyle.strike,offerStyle.savingInk);
   assert.ok(Math.abs(offerStyle.strikeTop-offerStyle.oldHeight/2)<1,'the strike crosses the number at half its height');
   assert.ok(offerStyle.priceCenterOffset<1,'the old price aligns with the current price');
   assert.equal(await sheet.locator('[data-heart-timer]').evaluate(node=>getComputedStyle(node).color),'rgb(21, 158, 53)');
   assert.equal(await sheet.locator('.super-plan__label').last().textContent(),'مواد محددة');
   assert.doesNotMatch(await sheet.locator('.super-plan__label').first().textContent(),/[٩9]/);
   const alignment=await plans.evaluateAll(cards=>cards.map(card=>{const a=card.getBoundingClientRect(),b=card.querySelector('.super-plan__main').getBoundingClientRect();return {height:a.height,offset:Math.abs((a.top+a.bottom-b.top-b.bottom)/2)};}));
   assert.ok(Math.abs(alignment[0].height-alignment[1].height)<1,'plan cards have equal proportions');
   assert.ok(alignment.every(card=>card.offset<1),'plan contents are centered vertically');
   assert.equal(await sheet.locator('.super-invitation__balance,.super-invitation__reward').evaluateAll(nodes=>nodes.every(node=>getComputedStyle(node).display==='none')),true,'requested supporting copy stays hidden');
   if(motion==='no-preference') {
    const sequence=await sheet.evaluate(node=>{
     const animations=node.getAnimations({subtree:true});
     const rocky=node.querySelector('.super-invitation__rocky');
     const rockyAnimation=rocky.getAnimations()[0];
     const rockyStart=rockyAnimation.effect.getTiming().delay;
     const rockyEnd=rockyAnimation.effect.getComputedTiming().endTime;
     for(const animation of animations){animation.pause();animation.currentTime=rockyStart;}
     const before={rocky:getComputedStyle(rocky).opacity};
     for(const animation of animations)animation.currentTime=rockyEnd;
     return {before,after:getComputedStyle(rocky).opacity};
    });
    assert.equal(sequence.before.rocky,'1');
    assert.equal(sequence.after,'1');
   } else {
    assert.equal(await sheet.evaluate(node=>node.getAnimations({subtree:true}).length),0,'reduced motion immediately presents the complete scene');
    assert.equal(await sheet.locator('.super-invitation__rocky').evaluate(node=>getComputedStyle(node).opacity),'1');
   }
   const checkLayout=async state=>{
    const centers=await sheet.evaluate(node=>{
     const center=element=>{const rect=element.getBoundingClientRect();return (rect.left+rect.right)/2;};
     return [center(node.querySelector('.super-invitation__rocky')),center(node.querySelector('[data-heart-title]')),center(node.querySelector('.heart-depletion__refill:not([hidden])'))];
    });
    assert.ok(centers.every(center=>Math.abs(center-centers[0])<1),`${width}x${height}/${state}: heading and resource pill are centered under Rocky`);
    const geometry=await sheet.evaluate(node=>{
     const bounds=selector=>node.querySelector(selector).getBoundingClientRect().toJSON();
     return {vertical:node.scrollHeight-node.clientHeight,horizontal:node.scrollWidth-node.clientWidth,visual:bounds('.super-invitation__visual'),panel:bounds('.heart-depletion__content'),back:bounds('[data-heart-resume]'),scene:bounds('.heart-depletion__scene'),rocky:bounds('.super-invitation__rocky')};
    });
    assert.ok(geometry.vertical<=1&&geometry.horizontal<=1,`${width}x${height}/${state}: fits without scrolling`);
    assert.ok(geometry.back.bottom<=height,`${width}x${height}/${state}: Back stays in view`);
    if(width<=760)assert.ok(geometry.visual.bottom<=geometry.panel.top,`${width}x${height}/${state}: artwork and copy do not overlap the plans`);
    assert.ok(geometry.rocky.top>=geometry.scene.top-1,`${width}x${height}/${state}: Rocky's head is not cropped`);
   };
   if(width===390)await page.addScriptTag({path:'node_modules/axe-core/axe.min.js'});
   const checkContrast=async state=>{
    if(width!==390)return;
    const result=await page.evaluate(()=>axe.run('.super-invitation',{runOnly:{type:'rule',values:['color-contrast']}}));
    assert.deepEqual(result.violations.map(violation=>({id:violation.id,nodes:violation.nodes.map(node=>node.failureSummary)})),[],`${state}: visible text meets its contrast requirements`);
   };
   const checkWhatsApp=async(label,price)=>{
    const subscribe=sheet.locator('[data-super-subscribe]');
    const url=new URL(await subscribe.getAttribute('href'));
    assert.equal(url.origin,'https://wa.me');
    assert.equal(url.pathname,'/972598419620');
    assert.equal(url.searchParams.get('text'),`مرحبا، كيف بقدر أشترك بخطوة سوبر؟\nبدي اشتراك ${label} بـ${price} شيكل بالسنة.\nاسم الطالب: ليان أحمد`);
    if(width===1440||width===390) {
     const opened=context.waitForEvent('page');
     if(width===1440) {await subscribe.focus();await page.keyboard.press('Enter');}
     else await subscribe.click();
     const chat=await opened;
     try {await chat.waitForURL(url.href);} finally {await chat.close();}
     await page.bringToFront();
     assert.equal(await sheet.isVisible(),true,'the learning app stays open after the WhatsApp handoff');
    }
   };
   await checkLayout('all subjects');
   await checkContrast('all subjects');
   await checkWhatsApp('جميع المواد',100);
   await sheet.locator('input[value="one-subject"]').check();
   assert.equal(await sheet.locator('[data-super-subscribe]').isVisible(),false);
   await checkLayout('selected subjects');
   const pagesBefore=context.pages().length;
   await sheet.locator('[data-super-choose-subjects]').click();
   const picker=sheet.locator('[data-super-picker]');
   const continueLink=picker.locator('[data-super-picker-continue]');
   assert.equal(await picker.isVisible(),true,'selected-subjects Continue opens the picker');
   assert.equal(context.pages().length,pagesBefore,'entering the picker does not open WhatsApp');
   assert.equal(await picker.locator('[name="super-subject"]').count(),9);
   assert.equal(await continueLink.getAttribute('href'),null,'zero subjects cannot continue');
   await picker.locator('img').evaluateAll(images=>Promise.all(images.map(img=>img.decode())));
   const grid=await picker.locator('.super-subject-picker__card').evaluateAll(cards=>cards.map(card=>card.getBoundingClientRect().toJSON()));
   assert.ok(grid.every(card=>Math.abs(card.width-card.height)<1),'each subject has a square card');
   const columns=width>760?3:2;
   assert.ok(grid.slice(0,columns).every(card=>Math.abs(card.top-grid[0].top)<1)&&grid[columns].top>grid[0].bottom,`the grid has ${columns} columns`);
   const first=picker.locator('input[value="mathematics"]');
   await first.focus();
   await page.keyboard.press('Space');
   assert.equal(await picker.locator('[data-super-selected-count]').textContent(),'1');
   assert.equal(await picker.locator('[data-super-total]').textContent(),'15');
   await picker.locator('input[value="mathematics-2"]').check();
   assert.equal(await picker.locator('[data-super-selected-count]').textContent(),'2');
   assert.equal(await picker.locator('[data-super-total]').textContent(),'30');
   await first.uncheck();
   assert.equal(await picker.locator('[data-super-total]').textContent(),'15','deselecting subtracts the subject price');
   await first.check();
   const footerBefore=await picker.locator('footer').boundingBox();
   await sheet.evaluate(node=>{node.scrollTop=node.scrollHeight;});
   const footerAfter=await picker.locator('footer').boundingBox();
   assert.ok(Math.abs(footerBefore.y-footerAfter.y)<1&&footerAfter.y+footerAfter.height<=height+1,'the golden action stays fixed at the viewport bottom');
   assert.ok(await picker.locator('.super-subject-picker__card').last().evaluate(node=>node.getBoundingClientRect().bottom<=document.querySelector('.super-subject-picker__footer').getBoundingClientRect().top),'the last subject can be scrolled above the footer');
   const selectedUrl=new URL(await continueLink.getAttribute('href'));
   assert.equal(selectedUrl.origin,'https://wa.me');
   assert.equal(selectedUrl.pathname,'/972598419620');
   assert.equal(selectedUrl.searchParams.get('text'),'مرحبا، كيف بقدر أشترك بخطوة سوبر؟\nالمواد المختارة: الرياضيات 1، الرياضيات 2.\nعدد المواد: 2.\nالمجموع: 30 شيكل بالسنة (15 شيكل لكل مادة).\nاسم الطالب: ليان أحمد');
   const selectedChat=context.waitForEvent('page');
   await continueLink.click();
   const chat=await selectedChat;
   await chat.waitForURL(selectedUrl.href);
   await chat.close();
   await page.bringToFront();
   await checkContrast('subject picker');
   await page.keyboard.press('Escape');
   assert.equal(await picker.isVisible(),false,'Escape returns to plans before dismissing the paywall');
   await sheet.locator('[data-super-choose-subjects]').click();
   assert.equal(await picker.locator('[data-super-total]').textContent(),'30','returning to the picker preserves selections');
   await picker.locator('[data-super-picker-back]').click();
   assert.equal(await sheet.locator('[data-super-choose-subjects]').evaluate(node=>node===document.activeElement),true);
   await checkLayout('WhatsApp handoff');
   for(const gems of [7,0]) {
    await page.evaluate(gems=>document.querySelector('#opener').dispatchEvent(new CustomEvent('show-gems',{detail:gems})),gems);
    assert.equal(await sheet.locator('[data-heart-title]').textContent(),'نفدت الجواهر');
    assert.equal(await sheet.locator('[data-heart-title]').isVisible(),true);
    assert.equal(await sheet.locator('[data-heart-timer-wrap]').isVisible(),false);
    assert.equal(await sheet.locator('[data-gem-balance-wrap]').isVisible(),true);
    assert.equal(await sheet.locator('[data-gem-balance]').textContent(),String(gems));
    await checkLayout(`gems balance ${gems}`);
   }
   if(width===390) {
    const cdp=await context.newCDPSession(page);
    await cdp.send('Emulation.setSafeAreaInsetsOverride',{insets:{top:47,bottom:34,left:0,right:0}});
    await page.setViewportSize({width,height:740});
    const safe=await sheet.evaluate(node=>({back:node.querySelector('[data-heart-resume]').getBoundingClientRect().bottom,
      visual:node.querySelector('.super-invitation__visual').getBoundingClientRect().top}));
    assert.ok(safe.back<=740-34,'Back stays above the phone home indicator at a reduced viewport height');
    assert.ok(safe.visual>=47,'the presentation stays below the screen cutout');
    await page.setViewportSize({width,height:420});
    await sheet.evaluate(node=>{node.scrollTop=node.scrollHeight;});
    assert.ok(await sheet.locator('[data-heart-resume]').evaluate(node=>node.getBoundingClientRect().bottom<=420-34),
      'fallback scrolling keeps Back above the home indicator on exceptionally short screens');
   }
   await page.keyboard.press('Escape');
   assert.equal(await page.locator('.super-invitation').count(),0);
   assert.equal(await page.locator('#opener').evaluate(node=>node===document.activeElement),true);
   for(const mode of ['gems','hearts']) {
    for(const selector of ['[data-heart-close]','[data-heart-resume]']) {
     const before=await page.locator('body').getAttribute('data-home-returns')||'0';
     if(mode==='gems')await page.evaluate(()=>document.querySelector('#opener').dispatchEvent(new CustomEvent('show-gems',{detail:0})));
     else await page.locator('#opener').click();
     await sheet.locator(selector).click();
     assert.equal(await page.locator('.super-invitation').count(),0,`${mode}: ${selector} closes the paywall`);
     assert.equal(Number(await page.locator('body').getAttribute('data-home-returns')||0),Number(before)+(mode==='hearts'?1:0),`${mode}: X and the return button share the destination`);
    }
   }
   // Closing during the entrance must not resurrect a delayed illustration/dialog.
   await page.locator('#opener').click();
   await page.keyboard.press('Escape');
   await page.waitForTimeout(100);
   assert.equal(await page.locator('.super-invitation').count(),0);
   console.log(`${width}x${height}: original Rocky, annual plans, WhatsApp handoff, motion, layouts and interrupted dismissal passed.`);
  } finally {await context.close();}
 }
} finally {await browser.close();await app.close();}
