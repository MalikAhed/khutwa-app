import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp,rm,writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createAppServer } from '../src/server/app-server.mjs';
import { readRuntimeConfig } from '../src/server/runtime-config.mjs';
import { provisionOwner } from '../scripts/owner-account.mjs';
import { listOwnerQuestionReports,readReportCursor } from '../src/server/owner-question-reports.mjs';
import { withOwnerQuestionReports,withQuestionReportInspection } from '../src/server/cloudflare-question-reports.mjs';
import { prepareQuestionReportsWorker } from '../scripts/prepare-question-reports-worker.mjs';

test('owner report pages retain every report across sparse accounts and large student histories',async () => {
  const accounts = Array.from({length:24},(_,index) => ({id:index+1,username:`learner-${index+1}`}));
  const readAccounts = (id,inclusive,limit) => accounts.filter(account => inclusive ? account.id >= id : account.id > id).slice(0,limit);
  const rows = Array.from({length:53},(_,index) => ({id:index+1,subject_id:'ict',lesson_id:'database-management',part_id:'access-basics',step_id:`question-${index}`,reason:'answer',details:'ملاحظة',created_at:'2026-11-07'}));
  const readReports = (id,before,limit) => id === 23 ? rows.filter(row => !before || row.id < before).toReversed().slice(0,limit) : [];
  const first = await listOwnerQuestionReports({readAccounts,readReports});
  assert.deepEqual(first,{reports:[],nextCursor:'20:0'},'sparse pages preserve a continuation');
  const second = await listOwnerQuestionReports({cursor:first.nextCursor,readAccounts,readReports});
  assert.equal(second.reports.length,50);assert.equal(second.nextCursor,'23:4');
  const third = await listOwnerQuestionReports({cursor:second.nextCursor,readAccounts,readReports});
  assert.equal(third.reports.length,3);assert.equal(third.nextCursor,null);
  assert.equal(new Set([...second.reports,...third.reports].map(report => report.id)).size,53);
  for (const value of ['nope','1:-1','0:1','9007199254740992:0','1:1:1']) assert.throws(() => readReportCursor(value));
});

test('only the owner can read saved question reports; the API never changes reports or student progress',async t => {
  const directory = await mkdtemp(path.join(tmpdir(),'khutwa-reports-'));
  const databasePath = path.join(directory,'accounts.sqlite');
  const root = path.resolve('.');
  const app = await createAppServer({root,config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:databasePath},{root}),logger:()=>{}});
  t.after(async () => {await app.close();await rm(directory,{recursive:true,force:true});});
  const base = `http://127.0.0.1:${await app.listen()}`;
  const {account} = await app.accountStore.createAccount({username:'reporting-student',password:'Student123',curriculum:'gaza',path:'scientific'});
  const studentHeaders = {Cookie:`tawjihi_session=${app.accountStore.createSession(account.id).token}`};
  await provisionOwner({databasePath,username:'reports-owner',password:'Owner1234'});
  const owner = await app.accountStore.authenticate('reports-owner','Owner1234');
  const headers = {Cookie:`tawjihi_session=${app.accountStore.createSession(owner.id).token}`};
  const key = {subjectId:'ict',lessonId:'database-management',partId:'access-basics',stepId:'exam-p09-q1-1'};
  app.accountStore.questionFeedback.save(account.id,{...key,type:'report',reason:'answer',details:'راجع الإجابة <script>alert(1)</script>'});
  const before = app.accountStore.questionFeedback.reports(account.id);
  const progress = app.accountStore.progress.read(account.id);
  const endpoint = base+'/api/owner/question-reports';
  assert.equal((await fetch(endpoint)).status,401);
  assert.equal((await fetch(endpoint,{headers:studentHeaders})).status,403);
  assert.equal((await fetch(endpoint,{headers,method:'POST'})).status,405);
  assert.equal((await fetch(endpoint+'?cursor=invalid',{headers})).status,400);
  const response = await fetch(endpoint,{headers});assert.equal(response.status,200);
  const data = await response.json();assert.equal(data.reports.length,1);assert.equal(data.nextCursor,null);
  assert.equal(data.reports[0].username,'reporting-student');assert.equal(data.reports[0].stepId,key.stepId);
  assert.doesNotMatch(JSON.stringify(data),/password|salt|token|phone/);
  assert.deepEqual(app.accountStore.questionFeedback.reports(account.id),before);
  assert.deepEqual(app.accountStore.progress.read(account.id),progress);
});

test('Cloudflare reports wrapper preserves routing and independently checks owner access in each student object',async () => {
  const owner = {id:1,isOwner:true,accountType:'free'};
  const student = {id:2,isOwner:false,accountType:'free'};
  let active = owner, queryCount = 0;
  const original = {scheduled:() => 'scheduled',fetch:async request => {
    if (request.headers.get('Sec-Fetch-Site') === 'cross-site') return Response.json({error:'Invalid origin'},{status:403});
    if (new URL(request.url).pathname === '/api/auth/session') return Response.json({account:active});
    return new Response('original route');
  }};
  const wrapper = withOwnerQuestionReports(original);
  const env = {ACCOUNTS:{prepare:() => ({bind:() => ({all:async () => ({results:[{id:2,username:'student'}]})})})},
    STUDENTS:{getByName:() => ({inspectQuestionReports:async (id,token,before,limit) => {
      assert.equal(id,2);assert.equal(token,'owner-session');assert.equal(before,0);assert.equal(limit,51);
      queryCount++;return [{id:1,subject_id:'ict',lesson_id:'database-management',part_id:'access-basics',step_id:'q1',reason:'question',details:'check',created_at:'2026-11-07'}];
    }})}};
  const request = options => new Request('https://app.test/api/owner/question-reports',{headers:{Cookie:'tawjihi_session=owner-session'},...options});
  assert.equal((await (await wrapper.fetch(request(),env)).json()).reports.length,1);
  assert.equal(wrapper.scheduled(), 'scheduled');
  assert.equal(await (await wrapper.fetch(new Request('https://app.test/api/progress'),env)).text(),'original route');
  active = student;assert.equal((await wrapper.fetch(request(),env)).status,403);
  active = null;assert.equal((await wrapper.fetch(request(),env)).status,401);
  active = owner;assert.equal((await wrapper.fetch(request({method:'POST'}),env)).status,405);
  assert.equal((await wrapper.fetch(request({headers:{'Sec-Fetch-Site':'cross-site'}}),env)).status,403);
  assert.equal(queryCount,1,'unauthorized requests never inspect any progress object');
  let reads = 0;
  const Base = class {constructor() {
    this.accounts = {getAccountForSession:async () => active};
    this.ctx = {id:{equals:value => value === 'account:2'}};
    this.env = {STUDENTS:{idFromName:name => name}};
    this.database = {prepare:() => ({all:() => {reads++;return [];}})};
  }};
  const object = new (withQuestionReportInspection(Base))();
  await object.inspectQuestionReports(2,'token',0,51);assert.equal(reads,1);
  await assert.rejects(object.inspectQuestionReports(3,'token',0,51),/Forbidden/);
  active = student;await assert.rejects(object.inspectQuestionReports(2,'token',0,51),/Forbidden/);
  active = owner;await assert.rejects(object.inspectQuestionReports(2,'token',0,1000),/Invalid/);
  assert.equal(reads,1);
});

test('unpublished reports preparation preserves additional exports from the reviewed current Worker',async t => {
  const directory = await mkdtemp(path.join(tmpdir(),'khutwa-reports-candidate-'));
  t.after(() => rm(directory,{recursive:true,force:true}));
  const baseline = path.join(directory,'reviewed.mjs');
  await writeFile(baseline,`class Authentication {}\nclass StudentProgress {}\nconst additionalExport = 'retained';\nexport {Authentication as Authentication,StudentProgress as StudentProgress,additionalExport};\nexport default {fetch:() => new Response('existing'),scheduled:() => 'existing schedule'};`);
  const candidate = path.join(directory,'candidate');
  await prepareQuestionReportsWorker({baseline,directory:candidate});
  const prepared = await import(pathToFileURL(path.join(candidate,'entry.mjs')).href);
  assert.equal(prepared.additionalExport,'retained');
  assert.equal(typeof prepared.Authentication,'function');
  assert.equal(typeof prepared.StudentProgress.prototype.inspectQuestionReports,'function');
  assert.equal(prepared.default.scheduled(),'existing schedule');
  assert.equal(await (await prepared.default.fetch(new Request('https://app.test/api/progress'))).text(),'existing');
});
