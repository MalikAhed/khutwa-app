import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createAppServer} from '../../src/server/app-server.mjs';
import {readRuntimeConfig} from '../../src/server/runtime-config.mjs';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {DatabaseSync} from 'node:sqlite';
import {findChrome} from './browser-session.mjs';

// Slider entitlement lives in browser-free-access; pricing/layout in
// browser-super-presentation. Keep the no-double-dialog gem regression here.
const directory=await mkdtemp(path.join(tmpdir(),'khutwa-gem-wall-'));
const databasePath=path.join(directory,'accounts.sqlite');
const root=process.cwd(),app=await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',ACCOUNTS_DATABASE_PATH:databasePath},{root})});
const base=`http://127.0.0.1:${await app.listen()}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
const part={subjectId:'ict',lessonId:'database-management',partId:'access-basics'};

try {
 for(const width of [1440,390]) {
  const context=await browser.newContext({viewport:{width,height:844},reducedMotion:'reduce'});
  try {
   const registration=await context.request.post(base+'/api/auth/register',{data:{username:`gem-wall-${width}`,phone:width===390?'0591234521':'0591234522',password:'Super123',curriculum:'gaza',path:'scientific'}});
   assert.equal(registration.status(),201);const {account}=await registration.json();const headers={'X-Progress-Owner':`account:${account.id}`};
   const db=new DatabaseSync(databasePath);db.prepare('INSERT INTO learner_resources VALUES(?,?,?,?)').run(Number(account.id),7,0,Date.now());db.close();
   assert.equal((await(await context.request.get(base+'/api/progress',{headers})).json()).resources.gems,0);
   const target='exam-p09-q1-1',page=await context.newPage();
   await page.goto(`${base}/?subject=ict&lesson=database-management&part=access-basics&question=${target}`);
   await page.locator('[data-question-explain]').waitFor();await page.waitForFunction(()=>!document.querySelector('#app-splash,.media-pending'));
   await page.evaluate(()=>{window.explanationOpenCount=0;const open=HTMLDialogElement.prototype.showModal;HTMLDialogElement.prototype.showModal=function(...args){if(this.classList.contains('question-explanation-dialog'))window.explanationOpenCount++;return open.apply(this,args);};});
   await page.locator('[data-question-explain]').click();
   const sheet=page.locator('.super-invitation[open][data-mode=gems]');await sheet.waitFor();
   assert.equal(await page.evaluate(()=>window.explanationOpenCount),0,'insufficient gems never open the explanation behind the paywall');
   assert.equal(await page.locator('.question-explanation-dialog[open]').count(),0);
   assert.equal(await page.locator('[data-live-authored-step]').getAttribute('data-lesson-step'),target);
   await sheet.locator('[data-heart-resume]').click();await sheet.waitFor({state:'hidden'});
   assert.equal(await page.locator('[data-live-authored-step]').getAttribute('data-lesson-step'),target,'Back retains the original question');
   assert.equal(await page.locator('.question-explanation-dialog[open],.super-invitation[open]').count(),0);
   console.log(`${width}px: gem depletion opens one paywall and returns safely to the question.`);
  }finally{await context.close();}
 }
}finally{await browser.close();await app.close();await rm(directory,{recursive:true,force:true});}
