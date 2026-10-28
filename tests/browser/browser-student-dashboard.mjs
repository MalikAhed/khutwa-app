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
    app.accountStore.progress.update(account.id,{id:"answer",type:"answer",subjectId:"ict",lessonId:"database-management",partId:"access-basics",stepId:"test-question",correct:true},["test-question"]);
    const owner=await app.accountStore.authenticate("test-owner","Owner1234");
    await send("Network.setCookie",{name:"tawjihi_session",value:app.accountStore.createSession(owner.id).token,url:base,httpOnly:true,sameSite:"Strict"});
    await send("Page.navigate",{url:base+"students"});
    await waitFor("document.querySelectorAll('.student').length===1");
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
    await send("Page.navigate",{url:base});
    await waitFor("document.querySelector('[data-owner-dashboard]:not([hidden])')");
    assert.equal(await evaluate("document.querySelector('[data-owner-dashboard]').getAttribute('href')"),"/students");
    await send("Network.setCookie",{name:"tawjihi_session",value:app.accountStore.createSession(account.id).token,url:base,httpOnly:true,sameSite:"Strict"});
    await send("Page.navigate",{url:base});
    await waitFor("document.querySelector('[data-owner-dashboard][hidden]')");
    assert.equal(await evaluate("getComputedStyle(document.querySelector('[data-owner-dashboard]')).display"),"none");
  },{baseUrl:base});
  console.log("Student dashboard and saved-work preservation checks passed.");
} finally {await app.close();await rm(directory,{recursive:true,force:true});}
