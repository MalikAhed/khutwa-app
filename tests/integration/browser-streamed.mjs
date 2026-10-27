import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {gzipSync} from 'node:zlib';
import {chromium} from 'playwright';
import {startCloudflareLocal} from '../../scripts/cloudflare-local.mjs';
import {createCloudAccounts} from '../../src/server/cloudflare/accounts.mjs';

const app=await startCloudflareLocal();
const browser=await chromium.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',headless:true});
try {
  const accounts=createCloudAccounts(app.database);
  const {account}=await accounts.createAccount({username:'stream-browser',password:'Student123',phone:'0598000043',curriculum:'gaza',path:'scientific'});
  const {token}=await accounts.createSession(account.id);
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  await context.addCookies([{name:'tawjihi_session',value:token,url:app.base,httpOnly:true,sameSite:'Strict'}]);
  await context.addInitScript(()=>{Object.defineProperty(navigator,'connection',{value:{saveData:true,effectiveType:'4g',addEventListener(){}}});});
  const page=await context.newPage();
  const errors=[],files=new Set(),questions=[];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('request',request=>{const pathname=new URL(request.url()).pathname;files.add(pathname);if(/\/content\/q\./.test(pathname))questions.push(pathname);});
  await page.goto(app.base+'?page=learn');
  await page.locator('[data-subject="ict"]').waitFor({state:'visible'});
  await page.waitForFunction(()=>!document.body.hasAttribute('data-startup'));
  assert.equal(questions.length,0,'onboarding/home does not download questions on Save Data');
  const initialFiles=[...files];
  let failNext=true;
  await page.route('**/content/q.*.json',async route=>{if(failNext){failNext=false;await route.fulfill({status:503,body:'Unavailable'});}else await route.continue();});
  await page.locator('[data-subject="ict"]').click();
  await page.locator('[data-roadmap-lesson="database-management"]').click();
  await page.locator('[data-bubble-start]').click();
  await page.locator('[data-question-retry],[data-lesson-retry]').waitFor({state:'visible'});
  await page.locator('[data-question-retry],[data-lesson-retry]').click();
  await page.locator('[data-ui-lab-answer]').first().waitFor({state:'visible'});
  assert.ok(questions.length<=4,`first question requested ${questions.length} question files, not the full lesson`);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'question fits mobile');
  await page.screenshot({path:'/tmp/khutwa-streamed-question.png'});
  const requestsBeforeReload=questions.length;
  await page.reload();
  await page.locator('[data-ui-lab-answer]').first().waitFor({state:'visible'});
  assert.equal(questions.length,requestsBeforeReload,"reload reuses the cached question");
  assert.deepEqual(errors,[]);
  let initialBytes=0,initialGzip=0;
  for(const name of initialFiles.filter(name=>!name.startsWith('/api/')&&name!=='/release.json')) {
    const bytes=await readFile(path.join('_site',name==='/'?'index.html':name.slice(1))).catch(()=>null);
    if(!bytes)continue;
    initialBytes+=bytes.length;initialGzip+=/\.(?:js|css|json|html|svg)$/.test(name)||name==='/'?gzipSync(bytes).length:bytes.length;
  }
  const report={initialRequests:initialFiles.length,initialBytes,initialGzip,questionRequestsUntilFirstPaint:questions.length};
  await writeFile('artifacts/streamed-browser.json',JSON.stringify(report,null,2));
  console.log('Packaged loading, retry, cached reload and mobile checks passed.',report);
} finally {await browser.close();await app.close();}
