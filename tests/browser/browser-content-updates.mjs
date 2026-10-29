import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { chromium, webkit } from 'playwright';
import { findChrome } from './browser-session.mjs';

const worker = await readFile(new URL('../../content-worker.js',import.meta.url));
const versions = ['1111111111111111','2222222222222222','3333333333333333'];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const figure = color => `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="20" height="20" fill="${color}"/></svg>`;
function release(index) {
  const version = versions[index];
  const files = {
    [`src/start.js?v=${version}`]:`import { question } from './question.js?v=${version}'; window.question = question; window.feature = ${index===2};`,
    [`src/question.js?v=${version}`]:`export const question = ${index ? 2 : 1};`,
    [`src/main.css?v=${version}`]:`@import './base.css?v=${version}'; body{color:black}`,
    [`src/base.css?v=${version}`]:'body{background:white}',
    'assets/unchanged.svg':figure('green'),
    'assets/changed.svg':figure(index ? 'blue' : 'red'),
  };
  return { version, files,
    html:`<!doctype html><meta name="learn-release" content="${version}"><link rel="stylesheet" href="src/main.css?v=${version}"><img src="assets/unchanged.svg"><img src="assets/changed.svg"><script type="module" src="src/start.js?v=${version}"></script>`,
    manifest:{version,onboarding:[],helpers:Object.keys(files),lessons:[],hashes:Object.fromEntries(Object.entries(files).map(([file,bytes])=>[file,hash(bytes)]))},
  };
}

for(const [name,engine] of Object.entries({chromium,webkit})) {
  let current=release(0), offline=false, corrupt=false;
  const requests=[];
  const server=createServer((request,response)=>{
    if(offline){request.socket.destroy();return;}
    const file=request.url.slice('/app/'.length);
    const pathname=file.split('?')[0];
    response.setHeader('Cache-Control','no-store');
    if(pathname==='content-worker.js'){response.setHeader('Content-Type','text/javascript');response.end(worker);return;}
    if(pathname==='content-manifest.json'){response.setHeader('Content-Type','application/json');response.end(JSON.stringify(current.manifest));return;}
    if(pathname===''||pathname==='index.html'){response.setHeader('Content-Type','text/html');response.end(current.html);return;}
    const entry=Object.entries(current.files).find(([key])=>key.split('?')[0]===pathname);
    if(!entry){response.writeHead(404).end();return;}
    requests.push(pathname);
    response.setHeader('Content-Type',pathname.endsWith('.js')?'text/javascript':pathname.endsWith('.css')?'text/css':'image/svg+xml');
    response.end(corrupt&&pathname==='src/start.js'?'wrong deployment bytes':entry[1]);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=`http://127.0.0.1:${server.address().port}/app/`;
  const browser=await engine.launch(name==='chromium'?{executablePath:await findChrome(),args:['--no-sandbox']}:{});
  const context=await browser.newContext();
  const message=async(page,data)=>page.evaluate(async data=>{
    const registration=await navigator.serviceWorker.ready;
    return new Promise((resolve,reject)=>{
      const channel=new MessageChannel();
      const timer=setTimeout(()=>reject(Error('Worker confirmation missing')),10000);
      channel.port1.onmessage=event=>{clearTimeout(timer);channel.port1.close();resolve(event.data.ready);};
      registration.active.postMessage(data,[channel.port2]);
    });
  },data);
  const install=async(page,value,legacy=false)=>{
    assert.equal(await message(page,{type:'CONTENT_CONFIG',version:value.version,files:Object.keys(value.files),...(!legacy?{hashes:value.manifest.hashes}:{})}),true);
    await page.evaluate(async files=>{
      for(const file of files){const response=await fetch(file,{headers:{'X-Learn-Download':'1'}});if(!response.ok)throw Error(file);await response.arrayBuffer();}
    },Object.keys(value.files));
    await page.evaluate(async({version,html})=>{
      const cache=await caches.open(`khutwa-content:/app/:${version}`);
      await cache.put(new URL('index.html',location.href),new Response(html,{headers:{'Content-Type':'text/html'}}));
    },value);
    assert.equal(await message(page,{type:'OFFLINE_READY'}),true);
  };
  try {
    const old=await context.newPage();
    await old.goto(base);
    await old.evaluate(async()=>{await navigator.serviceWorker.register('content-worker.js');await navigator.serviceWorker.ready;});
    await old.waitForFunction(()=>Boolean(navigator.serviceWorker.controller));
    await install(old,current,true);
    await old.evaluate(()=>localStorage.setItem('test-pending-answer','keep-me'));
    requests.length=0;
    current=release(1);
    const updated=await context.newPage();
    await updated.goto(base);
    await updated.waitForFunction(()=>window.question===2);
    await install(updated,current);
    await updated.evaluate(()=>Promise.all([...document.images].map(image=>image.decode())));
    assert.deepEqual(requests.sort(),['assets/changed.svg','src/question.js'],`${name}: only changed question/figure download, including startup`);
    assert.equal(await old.evaluate(()=>window.question),1);
    assert.match(await old.evaluate(()=>fetch('assets/changed.svg').then(response=>response.text())),/red/,'old tab retains old image');
    assert.equal(await updated.evaluate(()=>localStorage.getItem('test-pending-answer')),'keep-me');
    current=release(2);corrupt=true;requests.length=0;
    const interrupted=await context.newPage();
    await interrupted.goto(base);
    await interrupted.waitForFunction(()=>document.readyState==='complete');
    assert.equal(await interrupted.evaluate(()=>window.feature),undefined,'wrong release source cannot execute');
    assert.equal(await interrupted.evaluate(async()=>{
      const metadata=await caches.open('khutwa-content:/app/:clients');
      return(await(await metadata.match(new URL('__offline_shell__',location.href))).json()).version;
    }),versions[1],'failed update keeps last complete offline release');
    offline=true;
    const recovered=await context.newPage();await recovered.goto(base);
    await recovered.waitForFunction(()=>window.question===2);
    assert.equal(await recovered.evaluate(()=>window.feature),false,'offline launch resumes complete release');
    await recovered.evaluate(()=>Promise.all([...document.images].map(image=>image.decode())));
    offline=false;corrupt=false;requests.length=0;
    await interrupted.reload();await interrupted.waitForFunction(()=>window.feature===true);
    await install(interrupted,current);
    assert.deepEqual(requests,['src/start.js'],`${name}: feature update does not redownload unchanged questions or images`);
    offline=true;
    await interrupted.reload();await interrupted.waitForFunction(()=>window.feature===true);
    await interrupted.evaluate(()=>Promise.all([...document.images].map(image=>image.decode())));
    console.log(`${name}: changed-file downloads, old-tab isolation, rejected corrupt update, last-good offline fallback and offline images passed.`);
  } finally {await context.close();await browser.close();await new Promise(resolve=>server.close(resolve));}
}
