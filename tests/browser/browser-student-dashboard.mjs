import assert from "node:assert/strict";
import { mkdtemp,rm,writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createAppServer } from "../../src/server/app-server.mjs";
import { readRuntimeConfig } from "../../src/server/runtime-config.mjs";
import { resetDatabase } from "../../scripts/database-maintenance.mjs";
import { provisionOwner } from "../../scripts/owner-account.mjs";
import { withBrowserPage } from "./browser-page.mjs";

const directory=await mkdtemp(path.join(tmpdir(),"learn-owner-browser-"));
const databasePath=path.join(directory,"accounts.sqlite");
const root=path.resolve(".");
const config=readRuntimeConfig({PORT:"0",LIVE_RELOAD:"0",ACCOUNTS_DATABASE_PATH:databasePath},{root});
const app=await createAppServer({root,config,logger:()=>{}});
const base=`http://127.0.0.1:${await app.listen()}/`;
try {
  await withBrowserPage(async({send,evaluate,waitFor})=>{
    await send("Network.setBlockedURLs",{urls:["*/src/bootstrap.js"]});
    await send("Page.navigate",{url:base});
    await waitFor("document.readyState==='complete'");
    await evaluate(`(async()=>{
      localStorage.setItem('unrelated','keep');
      localStorage.setItem('tawjihi:subject-parts:v1:guest','old');
      sessionStorage.setItem('tawjihi:visitor-selection','old');
      const {createIndexedDbProgressAdapter}=await import('/src/services/indexeddb-progress.js');
      window.oldStore=createIndexedDbProgressAdapter();
      await oldStore.read('account:1');
      window.pendingAnswer={id:'unsynced-answer',type:'answer',value:{ownerId:'account:1',subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'test-question',correct:true}};
      await oldStore.enqueue(pendingAnswer);
      window.applyReset=(await import('/src/services/server-data-reset.js')).applyServerDataReset;
      await applyReset();
      await applyReset();
    })()`);
    await resetDatabase(databasePath);
    assert.match(await evaluate("applyReset().then(()=>'unexpected success',error=>error.message)"),/Saved work is preserved/);
    assert.deepEqual(await evaluate(`({legacy:localStorage.getItem('tawjihi:subject-parts:v1:guest'),session:sessionStorage.getItem('tawjihi:visitor-selection'),unrelated:localStorage.getItem('unrelated')})`),
      {legacy:"old",session:"old",unrelated:"keep"});
    assert.equal(await evaluate("indexedDB.databases().then(dbs=>dbs.some(db=>db.name==='tawjihi-subject-progress'))"),true);
    assert.deepEqual(await evaluate("oldStore.pending('account:1')"),[await evaluate("pendingAnswer")],"unsynced answers remain recoverable after a backend mismatch");
    await evaluate("oldStore.close()");
  },{baseUrl:base});
  // A fresh profile is used for the separate owner UI checks against this
  // disposable reset database; the affected profile above is never cleared.
  await withBrowserPage(async({send,evaluate,waitFor})=>{
    await provisionOwner({databasePath,username:"test-owner",password:"Owner1234"});
    const {account}=await app.accountStore.createAccount({username:"student-test",phone:"0598000041",curriculum:"gaza",path:"scientific",password:"Student123"});
    const question = {subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"exam-p09-q1-1"};
    app.accountStore.progress.update(account.id,{...question,id:"answer",type:"answer",correct:true},[question.stepId]);
    app.accountStore.questionFeedback.save(account.id,{...question,type:"rating",rating:"hard"});
    const originalRatings = app.accountStore.questionFeedback.ratings(account.id);
    const originalParts = (await app.accountStore.students.get(account.id)).parts;
    const owner=await app.accountStore.authenticate("test-owner","Owner1234");
    await send("Network.setCookie",{name:"tawjihi_session",value:app.accountStore.createSession(owner.id).token,url:base,httpOnly:true,sameSite:"Strict"});
    await send("Page.navigate",{url:base+"students"});
    await waitFor("document.querySelectorAll('.student').length===1");
    await waitFor("document.querySelector('[data-student-total=free]').textContent === new Intl.NumberFormat('ar').format(1)");
    assert.equal(await evaluate("document.querySelector('.student h2').textContent"),"student-test");
    for(const width of [1440,390]) {
      await send("Emulation.setDeviceMetricsOverride",{width,height:900,deviceScaleFactor:1,mobile:width<600});
      assert.ok(await evaluate("document.documentElement.scrollWidth<=innerWidth"),"dashboard fits viewport");
      await evaluate("document.querySelector('[data-student-id]').click()");
      await waitFor("document.querySelector('#detail-content .part')");
      assert.equal(await evaluate("document.querySelector('#student-detail').contains(document.activeElement)"),true);
      assert.ok(await evaluate("document.querySelector('#student-detail').scrollWidth<=document.querySelector('#student-detail').clientWidth"));
      if(width===390)await writeFile("/tmp/student-dashboard-mobile.png",Buffer.from((await send("Page.captureScreenshot",{format:"png"})).data,"base64"));
      await send("Input.dispatchKeyEvent",{type:"keyDown",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
      await send("Input.dispatchKeyEvent",{type:"keyUp",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
      await waitFor("!document.querySelector('#student-detail').open");
    }
    await evaluate("document.querySelector('#search').value='nothing';document.querySelector('#student-search').requestSubmit()");
    await waitFor("document.querySelector('#status').textContent.includes('لا يوجد طلاب مطابقون')");
    assert.equal(await evaluate("document.querySelectorAll('.student').length"),0);
    await evaluate("document.querySelector('#search').value='';document.querySelector('#student-search').requestSubmit()");
    await waitFor("document.querySelectorAll('.student').length===1");
    await send("Emulation.setDeviceMetricsOverride",{width:1440,height:900,deviceScaleFactor:1,mobile:false});
    await writeFile("/tmp/student-dashboard-desktop.png",Buffer.from((await send("Page.captureScreenshot",{format:"png"})).data,"base64"));
    await send("Network.setBlockedURLs",{urls:[]});
    const previewUrl = (track, plan) => base + '?' + new URLSearchParams({"student-preview":track,"preview-plan":plan});
    const cases = [
      ["gaza:scientific","free","mathematics"],
      ["gaza:literary","subscribed","adabi-geography"],
      ["full-palestinian:scientific","subscribed","outside-gaza-scientific-math"],
      ["full-palestinian:literary","free","outside-gaza-literary-english-reading-plus"],
    ];
    const storageSnapshot = "JSON.stringify([Object.entries(localStorage).sort(),Object.entries(sessionStorage).sort()])";
    const browserStorage = await evaluate(storageSnapshot);
    await evaluate("document.querySelector('[data-student-tab=progress]').click()");
    await waitFor("document.querySelector('#panel-progress:not([hidden]) .part')");
    const studentPreview = new URL(await evaluate("document.querySelector('.student-view-link').href"));
    assert.equal(studentPreview.searchParams.get("student-id"),String(account.id));
    studentPreview.searchParams.set("page","rated-questions");
    await send("Page.navigate",{url:studentPreview.href});
    await waitFor("document.querySelector('[data-rated-subject=ict][data-rating=hard] [data-rating-count]')?.textContent === '1'");
    assert.match(await evaluate("document.querySelector('.student-preview-notice').textContent"),/student-test/);
    assert.equal(await evaluate(storageSnapshot),browserStorage);
    assert.deepEqual(await evaluate("performance.getEntriesByType('resource').filter(entry=>new URL(entry.name).pathname.startsWith('/api/')).map(entry=>new URL(entry.name).pathname)"),
      ["/api/auth/session",`/api/owner/students/${account.id}`],"student preview only reads its owner-authorized snapshot");
    await send("Page.navigate",{url:base+"students"});
    await waitFor("document.querySelector('.student-preview form')");
    // Use the actual dashboard form once, then exercise the same routes directly.
    await evaluate("document.querySelector('.student-preview').open=true;document.querySelector('.student-preview form').requestSubmit()");
    for (const [index,[track,plan,subject]] of cases.entries()) {
      if (index) await send("Page.navigate",{url:previewUrl(track,plan)});
      await send("Emulation.setDeviceMetricsOverride",{width:index%2 ? 390 : 1440,height:900,deviceScaleFactor:1,mobile:Boolean(index%2)});
      await waitFor(`document.body.dataset.accountType===${JSON.stringify(plan)} && document.querySelector('[data-subject="${subject}"]')`);
      assert.equal(await evaluate("document.querySelector('[data-owner-dashboard]').hidden"),true);
      assert.ok(await evaluate("document.querySelector('[data-account-label]').textContent.includes('معاينة')"));
      assert.ok(await evaluate("document.documentElement.scrollWidth<=innerWidth"),"preview fits viewport");
      assert.deepEqual(await evaluate("performance.getEntriesByType('resource').filter(entry=>new URL(entry.name).pathname.startsWith('/api/')).map(entry=>new URL(entry.name).pathname)"),
        ["/api/auth/session"],"preview verifies the owner without calling any progress or account write API");
      assert.equal(await evaluate(storageSnapshot),browserStorage,"preview does not write browser account or progress state");
    }
    const exercise = new URL(studentPreview);
    exercise.searchParams.delete("page");
    for (const [key,value] of Object.entries({subject:"ict",lesson:"database-management",part:"build-and-integrity",question:"exam-p09-q1-2"}))
      exercise.searchParams.set(key,value);
    await send("Page.navigate",{url:exercise.href});
    await waitFor("document.querySelector('[data-ui-lab-answer][data-correct=true]')");
    assert.equal(await evaluate("new URL(location.href).searchParams.get('question')"),"exam-p09-q1-2");
    await evaluate("document.querySelector('[data-ui-lab-answer][data-correct=true]').click()");
    await waitFor("!document.querySelector('[data-ui-lab-check]').disabled");
    await evaluate("document.querySelector('[data-ui-lab-check]').click()");
    await waitFor("document.querySelector('[data-ui-lab-check][data-action-state=continue]')");
    await waitFor("document.querySelector('.level-question-rating-panel:not([hidden]) [data-question-rating=medium]')");
    await evaluate("document.querySelector('[data-question-rating=medium]').click()");
    await waitFor("document.querySelector('[data-question-rating=medium]').checked");
    assert.equal(await evaluate(storageSnapshot),browserStorage,"answering a preview question leaves real browser progress untouched");
    assert.ok(await evaluate("performance.getEntriesByType('resource').every(entry=>!/^\\/api\\/(progress|question-feedback)/.test(new URL(entry.name).pathname))"));
    assert.deepEqual((await app.accountStore.students.get(account.id)).parts,originalParts,"preview does not change student progress");
    assert.deepEqual(app.accountStore.questionFeedback.ratings(account.id),originalRatings,"preview does not change student ratings");
    await send("Page.navigate",{url:previewUrl("full-palestinian:literary","free")});
    await waitFor("document.querySelector('[data-subject=outside-gaza-literary-english-reading-plus]')");
    await evaluate("document.querySelector('[data-mobile-profile]').click()");
    await waitFor("document.querySelector('[data-profile-sign-out]')?.textContent === 'إنهاء المعاينة'");
    await evaluate("document.querySelector('[data-profile-sign-out]').click()");
    await waitFor("location.pathname === '/students' && document.querySelector('.student-preview')");
    await send("Page.navigate",{url:base});
    await waitFor("document.querySelector('[data-owner-dashboard]:not([hidden])')");
    assert.equal(await evaluate("document.querySelector('[data-owner-dashboard]').getAttribute('href')"),"/students");
    await send("Network.setCookie",{name:"tawjihi_session",value:app.accountStore.createSession(account.id).token,url:base,httpOnly:true,sameSite:"Strict"});
    await send("Page.navigate",{url:previewUrl("full-palestinian:literary","subscribed")});
    await waitFor("document.querySelector('[data-owner-dashboard][hidden]')");
    assert.equal(await evaluate("getComputedStyle(document.querySelector('[data-owner-dashboard]')).display"),"none");
    assert.equal(await evaluate("location.search.includes('student-preview')"),false,"student cannot activate owner preview");
    assert.equal(await evaluate("document.body.dataset.accountType"),"free");
    assert.ok(await evaluate("document.querySelector('[data-subject=mathematics]')"));
    await send("Page.navigate",{url:studentPreview.href});
    await waitFor("document.body.innerText.includes('تعذّر فتح معاينة الطالب')");
    assert.equal(await evaluate("performance.getEntriesByType('resource').filter(entry=>new URL(entry.name).pathname.startsWith('/api/')).length"),1);
  },{baseUrl:base});
  console.log("Student dashboard and saved-work preservation checks passed.");
} finally {await app.close();await rm(directory,{recursive:true,force:true});}
