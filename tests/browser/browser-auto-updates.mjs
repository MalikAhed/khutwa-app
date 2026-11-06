import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import {chromium} from 'playwright';
import {findChrome} from './browser-session.mjs';
const watcher=await readFile(new URL('../../src/services/preview-updates.js',import.meta.url));
const versions=['1111111111111111','2222222222222222','3333333333333333'];
let release=0, corrupt=false;
const script=index=>`window.feature=${index};`;
const server=createServer((req,res)=>{
 const url=new URL(req.url,'http://test');res.setHeader('Cache-Control','no-store');
 if(url.pathname==='/watcher.js'){res.setHeader('Content-Type','text/javascript');res.end(watcher);return;}
 if(url.pathname==='/release.json'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify({version:versions[release]}));return;}
 if(url.pathname==='/content-manifest.json'){
  const file=`src/app.js?v=${versions[release]}`;
  res.setHeader('Content-Type','application/json');res.end(JSON.stringify({version:versions[release],onboarding:[file],helpers:[],lessons:[],hashes:{[file]:createHash('sha256').update(script(release)).digest('hex')}}));return;
 }
 if(url.pathname==='/src/app.js'){res.setHeader('Content-Type','text/javascript');res.end(corrupt?'corrupt':script(release));return;}
 res.setHeader('Content-Type','text/html');res.end(`<!doctype html><meta name="learn-release" content="${versions[release]}"><body class="lesson-mode"><main></main><script type="module" src="src/app.js?v=${versions[release]}"></script><script type="module">
 import {watchPreviewUpdates} from '/watcher.js';
 window.stopUpdates=watchPreviewUpdates({canReload:()=>!document.body.classList.contains('lesson-mode'),beforeReload:async()=>localStorage.getItem('pending-answer')===null,subscribe:callback=>{window.addEventListener('saved',callback);return()=>window.removeEventListener('saved',callback);}});
 window.updatesReady=true;
 </script>`);
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const base=`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch({executablePath:await findChrome(),args:['--no-sandbox']});
try {
 const context=await browser.newContext();const page=await context.newPage();
 await page.goto(base+'/?subject=ict');await page.waitForFunction(()=>window.updatesReady&&window.feature===0);
 await page.evaluate(()=>{localStorage.setItem('pending-answer','original-answer-id');localStorage.setItem('student-progress','keep');});
 release=1;
 await page.evaluate(()=>window.dispatchEvent(new Event('online')));
 await page.waitForFunction(async()=>Boolean(await(await caches.open('khutwa-content:/:2222222222222222')).match(new URL('src/app.js?v=2222222222222222',location.href))));
 assert.equal(await page.evaluate(()=>window.feature),0,'preparation does not switch an active lesson');
 await page.evaluate(()=>document.body.classList.remove('lesson-mode'));
 await page.waitForTimeout(250);
 assert.equal(await page.evaluate(()=>window.feature),0,'pending answer prevents automatic activation');
 assert.equal(await page.evaluate(()=>localStorage.getItem('pending-answer')),'original-answer-id');
 await page.evaluate(()=>{localStorage.removeItem('pending-answer');window.dispatchEvent(new Event('saved'));});
 await page.waitForFunction(()=>window.feature===1);
 assert.equal(new URL(page.url()).searchParams.get('subject'),'ict','reload keeps the route');
 assert.equal(await page.evaluate(()=>localStorage.getItem('student-progress')),'keep');
 release=2;corrupt=true;
 await page.evaluate(()=>{document.body.classList.remove('lesson-mode');window.dispatchEvent(new Event('online'));});
 await page.waitForTimeout(300);
 assert.equal(await page.evaluate(()=>window.feature),1,'mismatched deployment bytes cannot activate');
 corrupt=false;
 await context.setOffline(true);
 await page.evaluate(()=>window.dispatchEvent(new Event('online')));
 assert.equal(await page.evaluate(()=>window.feature),1);
 await context.setOffline(false);await page.evaluate(()=>window.dispatchEvent(new Event('online')));
 await page.waitForFunction(()=>window.feature===2);
 assert.equal(await page.evaluate(()=>localStorage.getItem('student-progress')),'keep');
 await context.close();console.log('Auto-updates: background preparation, active-lesson deferral, pending-answer guard, route/data preservation, corrupt-download retry and reconnection passed.');
} finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
