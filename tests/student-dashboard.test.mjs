import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp,rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createAppServer } from "../src/server/app-server.mjs";
import { readRuntimeConfig } from "../src/server/runtime-config.mjs";
import { createAccountStore } from "../src/server/account-store.mjs";
import { resetDatabase } from "../scripts/database-maintenance.mjs";
import { provisionOwner } from "../scripts/owner-account.mjs";
import { loadSubjectLessonPart } from "../src/data/lessons/subject-lesson-registry.js";
import { getQuestionXp } from "../src/domain/question-rewards.js";

test("owner alone can inspect durable student progress; reset removes data and invalidates old identities",async t=>{
  const directory=await mkdtemp(path.join(tmpdir(),"learn-owner-"));
  const databasePath=path.join(directory,"accounts.sqlite");
  const root=path.resolve(".");
  const config=readRuntimeConfig({PORT:"0",LIVE_RELOAD:"0",DEV_AUTO_LOGIN:"1",ACCOUNTS_DATABASE_PATH:databasePath},{root});
  const app=await createAppServer({root,config,logger:()=>{}});
  t.after(async()=>{await app.close();await rm(directory,{recursive:true,force:true});});
  const base=`http://127.0.0.1:${await app.listen()}`;
  const {account}=await app.accountStore.createAccount({username:"test-student",phone:"0598000041",curriculum:"gaza",path:"scientific",password:"Student123"});
  const studentSession=app.accountStore.createSession(account.id);
  const studentHeaders={Cookie:`tawjihi_session=${studentSession.token}`};
  await provisionOwner({databasePath,username:"test-owner",password:"Owner1234"});
  const owner=await app.accountStore.authenticate("test-owner","Owner1234");
  assert.equal(owner.isOwner,true);
  const ownerHeaders={Cookie:`tawjihi_session=${app.accountStore.createSession(owner.id).token}`};
  for(const suffix of ["",`/${account.id}`]) {
    assert.equal((await fetch(base+"/api/owner/students"+suffix)).status,401);
    assert.equal((await fetch(base+"/api/owner/students"+suffix,{headers:studentHeaders})).status,403);
  }
  assert.equal((await fetch(base+"/students",{headers:studentHeaders})).status,403);
  assert.equal((await fetch(base+"/students",{headers:ownerHeaders})).status,200);
  const registration=await fetch(base+"/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({username:"role-injection",phone:"0598000042",curriculum:"gaza",path:"scientific",password:"Student123",isOwner:true,staff_role:"owner"})});
  assert.equal((await registration.json()).account.isOwner,false);
  const key={subjectId:"ict",lessonId:"database-management",partId:"access-basics"};
  const lesson=await loadSubjectLessonPart(key.subjectId,key.lessonId,key.partId);
  const stepId=lesson.steps.find(step=>step.type==="question").id;
  for(const [index,correct] of [false,true,true].entries()) {
    const response=await fetch(base+"/api/progress",{method:"POST",headers:{...studentHeaders,"X-Progress-Owner":`account:${account.id}`,"Content-Type":"application/json"},
      body:JSON.stringify({...key,type:"answer",id:`saved-answer-${index}`,stepId,correct})});
    assert.equal(response.status,200);
  }
  const reopened=createAccountStore({databasePath});
  try {
    const detail=reopened.students.get(account.id);
    assert.equal(detail.totalXp,getQuestionXp({ ...key,stepId }));
    assert.equal(detail.questionsSolved,1);
    assert.equal(detail.streak,1);
    assert.equal(detail.parts[0].review[0].misses,1);
  }finally{reopened.close();}
  const report=await (await fetch(base+"/api/owner/students?search=test-student",{headers:ownerHeaders})).json();
  assert.equal(report.total,1);
  assert.equal(report.students[0].totalXp,getQuestionXp({ ...key,stepId }));
  for(const [filter,total] of [["free",1],["subscribed",0],["suspended",0]]) {
    const filtered=await (await fetch(base+`/api/owner/students?search=test-student&filter=${filter}`,{headers:ownerHeaders})).json();
    assert.equal(filtered.total,total);
  }
  assert.equal((await fetch(base+"/api/owner/students?filter=unknown",{headers:ownerHeaders})).status,400);
  assert.doesNotMatch(JSON.stringify(report),/password|salt|token/);
  const detail=await (await fetch(base+`/api/owner/students/${account.id}`,{headers:ownerHeaders})).json();
  assert.equal(detail.parts[0].review[0].solved,true);
  assert.equal((await fetch(base+"/api/owner/students?offset=-1",{headers:ownerHeaders})).status,400);
  const result=await resetDatabase(databasePath);
  for(const table of ["accounts","sessions","subject_progress","progress_updates"])assert.equal(result.after[table],0);
  assert.equal(app.accountStore.getAccountForSession(studentSession.token),null);
  assert.equal((await fetch(base+"/api/owner/students",{headers:ownerHeaders})).status,401);
  const state=await (await fetch(base+"/api/app-state")).json();
  assert.match(state.resetId,/^[a-f0-9-]{36}$/);
  assert.equal((await fetch(base+"/",{redirect:"manual"})).status,200,"reset prevents developer auto-login");
  assert.equal(app.accountStore.students.list().total,0);
  const {account:fresh}=await app.accountStore.createAccount({username:"fresh-student",password:"Student123",curriculum:"gaza",path:"scientific"});
  assert.ok(Number(fresh.id)>Number(owner.id),"a fresh account never reuses an old browser cache owner");
  assert.deepEqual(app.accountStore.progress.read(fresh.id),[]);
});
