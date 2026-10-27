import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { createAppServer } from '../../src/server/app-server.mjs';
import { readRuntimeConfig } from '../../src/server/runtime-config.mjs';
import { withBrowserPage } from './browser-page.mjs';

const root=path.resolve(import.meta.dirname,'../..');
const directory=await mkdtemp(path.join(tmpdir(),'learn-progress-sync-'));
const databasePath=path.join(directory,'accounts.sqlite');
const app=await createAppServer({root,config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',DEV_AUTO_LOGIN:'0',ACCOUNTS_DATABASE_PATH:databasePath},{root})});
const baseUrl=`http://127.0.0.1:${await app.listen()}/`;
const database=new DatabaseSync(databasePath);

// Separate Chrome profiles share only the HTTP account, never browser storage.
try {
await withBrowserPage(async first => {
  await first.send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  const visit = async (page, route='?page=learn') => {
    const previous=await page.evaluate('performance.timeOrigin');
    await page.send('Page.navigate',{url:first.base+route});
    await page.waitFor(`performance.timeOrigin!==${previous} && document.querySelector('.course-units,.visitor-shell') && !document.querySelector('.media-pending')`);
  };
  const accountRequest=(page,path,body)=>page.evaluate(`fetch('/api/auth/${path}',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(${JSON.stringify(body)})}).then(async response=>({status:response.status,body:await response.json()}))`);
  await visit(first);
  await first.evaluate('window.asyncProgressChecks=0');
  await first.waitFor('Promise.resolve(++window.asyncProgressChecks >= 2)');
  assert.equal(await first.evaluate('window.asyncProgressChecks'),2,'async readiness must wait for a true result, not a Promise object');
  const registered=await accountRequest(first,'register',{username:'sync-a',email:'sync-a@example.com',phone:'+972598000021',curriculum:'gaza',path:'scientific',password:'Learn123'});
  assert.equal(registered.status,201);
  // Sync journeys exercise more answers than a free account's heart allowance.
  database.prepare("UPDATE accounts SET account_type='subscribed' WHERE id=?").run(Number(registered.body.account.id));
  const owner=`account:${registered.body.account.id}`;
  await visit(first);
  await first.waitFor("document.querySelector('[data-learner-dashboard]') && document.querySelector('.progress-feedback')?.hidden");

  await withBrowserPage(async second => {
    await second.send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
    await visit(second,'?flow=sign-in');
    await second.waitFor("document.querySelector('[data-sign-in-form]')");
    await second.evaluate("document.querySelector('[name=identifier]').value='sync-a';document.querySelector('[name=password]').value='Learn123';document.querySelector('[data-sign-in-form]').requestSubmit()");
    await second.waitFor("document.querySelector('[data-learner-dashboard]') && document.querySelector('.progress-feedback')?.hidden");
    assert.equal(await second.evaluate("Number(document.querySelector('[data-subject=ict] [data-subject-count]').textContent.split('/')[0])"),0);

    // Finish the first topic through the unified question lesson. Progress still
    // belongs to the original part, and other signed-in devices receive the same XP.
    const topicIds = await first.evaluate(`import('/src/data/lessons/ict/exam-lessons.js').then(({getIctPartQuestions})=>getIctPartQuestions('access-basics').map(question=>question.id))`);
    const expectedXp = await first.evaluate(`import('/src/domain/question-rewards.js').then(({getQuestionXp})=>${JSON.stringify(topicIds)}.reduce((sum,stepId)=>sum+getQuestionXp({subjectId:'ict',stepId}),0))`);
    await first.evaluate("history.pushState(null,'','?subject=ict&lesson=database-management&part=access-basics');dispatchEvent(new PopStateEvent('popstate'))");
    for (let action = 0; action < topicIds.length; action += 1) {
      await first.waitFor("document.querySelector('[data-ui-lab-answer]') || document.querySelector('[data-exam-card]')");
      await first.waitFor("!document.querySelector('.media-pending')");
      const stepId = await first.evaluate("document.querySelector('[data-live-authored-step]').dataset.lessonStep");
      if (!topicIds.includes(stepId)) break;
      const mcq=await first.evaluate("Boolean(document.querySelector('[data-ui-lab-answer]'))");
      if(mcq) {
        await first.evaluate("document.querySelector('[data-ui-lab-answer][data-correct=true]').click();document.querySelector('[data-template-primary]').click()");
        await first.waitFor("document.querySelector('[data-ui-lab-feedback].is-correct')");
      } else {
        await first.evaluate("document.querySelector('[data-exam-card]').click()");
        await first.waitFor("document.querySelector('[data-exam-correct=true]:not(:disabled)')");
        await first.evaluate("document.querySelector('[data-exam-correct=true]').click()");
      }
      if(action===0) {
        await first.waitFor("document.querySelector('.lesson-daily-streak[open]')");
        await first.waitFor("(() => {const dialog=document.querySelector('.lesson-daily-streak[open]');if(!dialog)return true;dialog.querySelector('button:not(:disabled)')?.click();return !dialog.open;})()");
      }
      await first.evaluate("document.querySelector('[data-template-primary]').click()");
      await first.waitFor(`document.querySelector('[data-live-authored-step]')?.dataset.lessonStep!==${JSON.stringify(stepId)}`);
    }
    await first.waitFor("document.querySelector('.progress-feedback')?.hidden");
    await first.evaluate("document.querySelector('.lesson-back').click()");
    await first.waitFor("document.querySelector('[data-authored-restart]')");
    await first.evaluate("document.querySelector('[data-authored-restart]').click()");
    await first.waitFor("document.querySelector('.subject-roadmap')");
    assert.equal(await first.evaluate("Number(document.querySelector('.roadmap-question-ring').getAttribute('aria-valuenow'))"), topicIds.length);
    await first.evaluate("document.querySelector('.lesson-back').click()");
    await first.waitFor("document.querySelector('[data-learner-dashboard]') && document.querySelector('.progress-feedback')?.hidden");
    await first.waitFor(`fetch('/api/progress',{headers:{'X-Progress-Owner':${JSON.stringify(owner)}}}).then(r=>r.json()).then(({records})=>records.reduce((sum,[,record])=>sum+record.rewardXp,0)===${expectedXp} && ${JSON.stringify(topicIds)}.every(id=>records.some(([,record])=>record.completedStepIds.includes(id))))`);
    await second.send('Emulation.setFocusEmulationEnabled',{enabled:true});
    await second.send('Page.bringToFront');
    assert.equal(await second.evaluate('document.hidden'),false,'The second device resumes in the foreground');
    await second.evaluate("document.dispatchEvent(new Event('visibilitychange'))");
    try {
      await second.waitFor("Number(document.querySelector('[data-subject=ict] [data-subject-count]')?.textContent.split('/')[0])===" + topicIds.length);
    } catch (error) {
      const snapshot = await second.evaluate(`(async()=>{
        const result={count:document.querySelector('[data-subject=ict] [data-subject-count]')?.textContent,hidden:document.hidden,databases:[]};
        for(const info of await indexedDB.databases()) {
          const db=await new Promise((resolve,reject)=>{const request=indexedDB.open(info.name);request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)});
          if(db.objectStoreNames.contains('parts'))result.databases.push({name:info.name,records:await new Promise((resolve,reject)=>{
            const request=db.transaction('parts').objectStore('parts').getAll();request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
          })});
          db.close();
        }
        return result;
      })()`);
      console.error('Progress sync diagnostic', JSON.stringify({snapshot,server:database.prepare('SELECT subject_id,lesson_id,part_id,record,revision FROM subject_progress').all()}));
      throw error;
    }
    assert.equal(await second.evaluate(`fetch('/api/progress',{headers:{'X-Progress-Owner':${JSON.stringify(owner)}}}).then(r=>r.json()).then(({records})=>records.reduce((sum,[,record])=>sum+record.rewardXp,0))`),expectedXp);

    // Lose the response after the server commits an answer. Keep the operation
    // in IndexedDB, switch the cookie to B, reload, then resume A's exact update.
    const setup=`(async()=>{
      const {createSubjectProgressStore}=await import('/src/services/subject-progress-store.js');
      const {createIndexedDbProgressAdapter}=await import('/src/services/indexeddb-progress.js');
      const {createServerProgressAdapter}=await import('/src/services/server-progress.js');
      const {loadSubjectLessonPart}=await import('/src/data/lessons/subject-lesson-registry.js');
      const lesson=await loadSubjectLessonPart('ict','database-management','access-basics');
      window.syncKey={ownerId:${JSON.stringify(owner)},subjectId:'ict',lessonId:'database-management',partId:'access-basics'};
      window.syncStep=lesson.steps.find(step=>step.type==='question').id;
      window.dropProgressResponse=false;
      window.syncLocal=createIndexedDbProgressAdapter({name:'sync-outbox-check'});
      window.syncStore=createSubjectProgressStore({onError:()=>{},adapter:createServerProgressAdapter({local:syncLocal,fetchImpl:async(...args)=>{
        const response=await fetch(...args);
        if(dropProgressResponse && args[1]?.method==='POST'){await response.text();dropProgressResponse=false;throw new Error('Simulated lost response after commit');}
        return response;
      }})});
      await syncStore.ready(syncKey.ownerId);
    })()`;
    await first.evaluate(setup);
    // Airplane mode still commits answers to this account's durable outbox.
    await first.send('Network.emulateNetworkConditions',{offline:true,latency:0,downloadThroughput:-1,uploadThroughput:-1});
    assert.equal((await first.evaluate('syncStore.recordAnswer({...syncKey,stepId:syncStep,correct:false})')).status,'saved');
    assert.equal((await first.evaluate('syncStore.recordAnswer({...syncKey,stepId:syncStep,correct:true,reviewing:true})')).status,'saved');
    assert.equal(await first.evaluate('syncLocal.pending(syncKey.ownerId).then(updates=>updates.length)'),2);
    assert.equal(await first.evaluate("syncStore.getSaveState(syncKey.ownerId)"),'saved');
    await first.evaluate('syncStore.close()');
    await first.send('Network.emulateNetworkConditions',{offline:false,latency:0,downloadThroughput:-1,uploadThroughput:-1});
    await visit(first);
    await first.evaluate(setup);
    assert.equal(await first.evaluate('syncLocal.pending(syncKey.ownerId).then(updates=>updates.length)'),0);
    assert.equal(await first.evaluate('syncStore.getReview(syncKey).some(item=>item.stepId===syncStep&&item.misses===0&&!item.active)'),true);
    await first.evaluate('dropProgressResponse=true');
    assert.equal((await first.evaluate('syncStore.recordAnswer({...syncKey,stepId:syncStep,correct:false}).then(async result=>{await result.whenSynced;return {status:result.status};})')).status,'saved');
    assert.equal(await first.evaluate('syncLocal.pending(syncKey.ownerId).then(updates=>updates.length)'),1);
    await accountRequest(first,'sign-out',{});
    const other=await accountRequest(first,'register',{username:'sync-b',email:'sync-b@example.com',phone:'+972598000022',curriculum:'gaza',path:'scientific',password:'Learn123'});
    assert.equal(other.status,201);
    assert.equal((await first.evaluate('syncStore.retry(syncKey.ownerId)')).status,'saved');
    const otherRecords=await first.evaluate(`fetch('/api/progress',{headers:{'X-Progress-Owner':${JSON.stringify(`account:${other.body.account.id}`)}}}).then(response=>response.json())`);
    assert.deepEqual(otherRecords.records,[]);
    await first.evaluate('syncStore.close()');
    await accountRequest(first,'sign-out',{});
    assert.equal((await accountRequest(first,'sign-in',{identifier:'sync-a',password:'Learn123'})).status,200);
    await visit(first);
    await first.evaluate(setup);
    assert.equal(await first.evaluate('syncLocal.pending(syncKey.ownerId).then(updates=>updates.length)'),0);
    assert.equal(await first.evaluate('syncStore.getReview(syncKey).find(item=>item.stepId===syncStep).misses'),1);
    assert.equal(await first.evaluate('syncStore.getOutcome({...syncKey,totalParts:1}).totalXp'),expectedXp);
    await first.evaluate('syncStore.close()');

    // A response for imported part A also contains server part B. If B has not
    // been imported yet, that response must not overwrite B's recovery source.
    const migrationSetup = `(async()=>{
      const {createSubjectProgressStore}=await import('/src/services/subject-progress-store.js');
      const {createIndexedDbProgressAdapter}=await import('/src/services/indexeddb-progress.js');
      const {createServerProgressAdapter}=await import('/src/services/server-progress.js');
      window.migrationOwner=${JSON.stringify(owner)};
      window.migrationLocal=createIndexedDbProgressAdapter({name:'server-import-recovery',legacyStorage:localStorage});
      window.migrationStore=createSubjectProgressStore({onError:()=>{},adapter:createServerProgressAdapter({local:migrationLocal,fetchImpl:async(url,options)=>{
        const body=options?.body?JSON.parse(options.body):null;
        if(window.interruptImport && body?.type==='import' && body.partId==='access-basics') throw new Error('Simulated interrupted migration');
        return fetch(url,options);
      }})});
      await migrationStore.ready(migrationOwner);
    })()`;
    await first.evaluate(`(async()=>{
      const {loadSubjectLessonPart}=await import('/src/data/lessons/subject-lesson-registry.js');
      const first=await loadSubjectLessonPart('ict','course-introduction','getting-started');
      const second=await loadSubjectLessonPart('ict','database-management','access-basics');
      const record=lesson=>({completedStepIds:lesson.steps.map(step=>step.id),completed:true,rewardXp:10,completedDate:'2026-09-01',review:[]});
      window.legacySource=JSON.stringify({version:1,records:[
        [JSON.stringify(['ict','course-introduction','getting-started']),record(first)],
        [JSON.stringify(['ict','database-management','access-basics']),record(second)]
      ]});
      window.legacyKey='tawjihi:subject-parts:v1:'+encodeURIComponent(${JSON.stringify(owner)});
      localStorage.setItem(legacyKey,legacySource);
      const response=await fetch('/api/progress',{method:'POST',headers:{'Content-Type':'application/json','X-Progress-Owner':${JSON.stringify(owner)}},body:JSON.stringify({
        id:'partial-before-import',type:'completion',subjectId:'ict',lessonId:'database-management',partId:'access-basics',completedStepIds:[second.steps[0].id],isComplete:false
      })});
      if(!response.ok)throw new Error('Could not seed the partial server record');
      window.interruptImport=true;
    })()`);
    await first.evaluate(migrationSetup);
    assert.equal(await first.evaluate("migrationStore.getSaveState(migrationOwner)"),'saved');
    assert.equal(await first.evaluate("migrationLocal.importAcknowledged(migrationOwner)"),false);
    assert.equal(await first.evaluate("migrationLocal.read(migrationOwner).then(records=>records.get(JSON.stringify(['ict','database-management','access-basics'])).completed)"),true,'An interrupted import must retain the next part until acknowledgement');
    assert.equal(await first.evaluate("localStorage.getItem(legacyKey)===legacySource"),true);
    await first.evaluate('migrationStore.close()');
    await visit(first);
    await first.evaluate(migrationSetup);
    assert.equal(await first.evaluate("migrationStore.getSaveState(migrationOwner)"),'saved');
    assert.equal(await first.evaluate("migrationLocal.importAcknowledged(migrationOwner)"),true);
    assert.equal(await first.evaluate("migrationStore.getOutcome({ownerId:migrationOwner,subjectId:'ict',lessonId:'database-management',partId:'access-basics',totalParts:2}).totalXp"),expectedXp);
    assert.equal(await first.evaluate("migrationStore.get({ownerId:migrationOwner,subjectId:'ict',lessonId:'database-management',partId:'access-basics'}).completed"),true);
    await first.evaluate('migrationStore.close()');
  },{baseUrl:first.base});
},{baseUrl});
} finally {
  database.close();
  await app.close();
  await rm(directory,{recursive:true,force:true});
}
console.log('HTTP progress sync passed: two independent profiles, real lesson/Home consistency, lost-response reload, account-switch isolation, idempotent retries, and resumable multi-part migration.');
