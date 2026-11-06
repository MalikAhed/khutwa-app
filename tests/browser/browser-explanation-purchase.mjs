import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {findChrome} from './browser-session.mjs';

const root=process.cwd();
const app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
const html=await readFile('index.html','utf8');
const styles=[...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(match=>match[0].replace(/media="print"/g,'media="all"')).join('');
try {
  for (const width of [1440,390]) for (const initialGems of [56,50,49]) {
    const page=await browser.newPage({viewport:{width,height:844},reducedMotion:'reduce'});
    const errors=[];page.on('pageerror',error=>errors.push(error.message));
    await page.route('**/purchase-fixture',route=>route.fulfill({contentType:'text/html',body:`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8">${styles}</head><body><main data-subject="ict"><div class="level-layout-actions"><button data-template-primary>التالي</button></div></main></body></html>`}));
    await page.goto(`${base}/purchase-fixture`);
    await page.evaluate(async initialGems=>{
      const [{createLearnerResources},{mountHeartDepletion},{mountQuestionExplanation},{questionRewardKey}]=await Promise.all([
        import('/src/services/learner-resources.js'),import('/src/ui/heart-depletion.js'),
        import('/src/ui/lesson/question-explanation.js'),import('/src/domain/question-rewards.js')]);
      const owner='account:fixture',key={subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1'};
      const step={type:'question',content:{correctFeedback:'شرح السؤال الذي اشتريته.'}};
      let gems=initialGems,unlocked=false;
      const snapshot=()=>({hearts:7,gems,gemRevision:unlocked?2:1,refillAt:Date.now(),explanationUnlocks:unlocked?[questionRewardKey(key)]:[]});
      const resourceStore=createLearnerResources({getAccountType:()=> 'free',apiBase:'/api/progress',fetchImpl:async()=>{
        document.body.dataset.requests=String(Number(document.body.dataset.requests||0)+1);
        if(gems<50 && !unlocked)return Response.json({accountId:'fixture',resources:snapshot()},{status:402});
        if(!unlocked){gems-=50;unlocked=true;}
        return Response.json({accountId:'fixture',resources:snapshot(),explanation:{markdown:step.content.correctFeedback}});
      }});
      resourceStore.confirm(owner,snapshot());
      const invitation=mountHeartDepletion({resourceStore,ownerId:owner,autoShowEmpty:false});
      resourceStore.subscribe(()=>{document.body.dataset.gems=String(resourceStore.get(owner).gems);});
      mountQuestionExplanation({host:document.querySelector('main'),signal:new AbortController().signal,explanation:{
        isUnlocked:()=>resourceStore.hasExplanation(owner,key),isIncluded:()=>false,subscribe:resourceStore.subscribe,
        unlock:async options=>{try{return await resourceStore.unlockExplanation(owner,key,{...options,step});}
          catch(error){if(error.code==='insufficient-gems')invitation.show('gems');throw error;}}
      }});
    },initialGems);
    await page.locator('[data-question-explain]').click();
    if(initialGems>=50){
      await page.locator('.question-explanation-dialog[open] [data-explanation-body][aria-busy=false]').waitFor();
      assert.equal(await page.locator('.super-invitation[open]').count(),0,'successful purchase never opens the paywall');
      assert.equal(await page.locator('body').getAttribute('data-gems'),String(initialGems-50));
      assert.match(await page.locator('[data-explanation-body]').textContent(),/شرح السؤال الذي اشتريته/);
      if(initialGems===56)await page.screenshot({path:`/tmp/khutwa-explanation-purchase-${width}.png`});
      await page.locator('[data-explanation-close]').click();
      await page.locator('.question-explanation-dialog').waitFor({state:'detached'});
      await page.locator('[data-question-explain]').click();
      await page.locator('.question-explanation-dialog[open]').waitFor();
      assert.equal(await page.locator('.super-invitation[open]').count(),0,'purchased explanations reopen below the purchase price');
      assert.equal(await page.locator('body').getAttribute('data-requests'),'1','reopening does not charge again');
    }else{
      await page.locator('.super-invitation[open][data-mode=gems]').waitFor();
      assert.equal(await page.locator('.question-explanation-dialog[open]').count(),0);
      assert.equal(await page.locator('body').getAttribute('data-gems'),'49','insufficient purchase never deducts gems');
    }
    assert.deepEqual(errors,[]);await page.close();
  }
  console.log('Explanation purchases passed on desktop and mobile: 56→6, 50→0, insufficient balance, and free reopening.');
}finally{await browser.close();await app.close();}
