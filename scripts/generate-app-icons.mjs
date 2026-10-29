import { spawn } from 'node:child_process';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { CdpPipe, findChrome, terminateProcess } from '../tests/browser/browser-session.mjs';
const root = new URL('../', import.meta.url);
// Derive every icon from the approved production mascot, keeping its face
// above a full-width body crop. Legs and shadow stay outside the app icon.
const rocky = (await readFile(new URL('assets/mascot/rocky-wave.svg',root),'utf8'))
 .replace(/<style>[\s\S]*?<\/style>/, '')
 .replace(/<title\b[^>]*>[\s\S]*?<\/title>/, '')
 .replace(/<desc\b[^>]*>[\s\S]*?<\/desc>/, '')
 .replace(/<svg\b[^>]*>/, '<svg x="0" y="0" width="512" height="512" viewBox="160 70 480 480">');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>خطوة</title><defs><clipPath id="icon-corners"><rect width="512" height="512" rx="96"/></clipPath></defs><rect width="512" height="512" fill="#fff"/><g clip-path="url(#icon-corners)">${rocky}</g><style>[data-part="shadow"],[data-part="foot-left"],[data-part="foot-right"]{display:none}</style></svg>\n`;
await writeFile(new URL('assets/icons/favicon.svg',root),svg);
const profile=await mkdtemp(`${tmpdir()}/app-icons-`);
const chrome=spawn(await findChrome(),['--headless=new','--no-sandbox','--disable-gpu','--remote-debugging-pipe',`--user-data-dir=${profile}`],{stdio:['ignore','ignore','ignore','pipe','pipe']});
try {
 const cdp=new CdpPipe(chrome);
 const {targetId}=await cdp.send('Target.createTarget',{url:'about:blank'});
 const {sessionId}=await cdp.send('Target.attachToTarget',{targetId,flatten:true});
 for (const [name,size,scale] of [['icon-180.png',180,1],['icon-192.png',192,1],['icon-512.png',512,1],['icon-maskable-512.png',512,.8]]) {
  const {result,exceptionDetails}=await cdp.send('Runtime.evaluate',{expression:`(async()=>{const img=new Image();img.src=${JSON.stringify('data:image/svg+xml;base64,'+Buffer.from(svg).toString('base64'))};await img.decode();const c=document.createElement('canvas');c.width=c.height=${size};const ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,${size},${size});const side=${size*scale};ctx.drawImage(img,(${size}-side)/2,(${size}-side)/2,side,side);return c.toDataURL('image/png').split(',')[1];})()`,awaitPromise:true,returnByValue:true},sessionId);
  if(exceptionDetails)throw new Error(JSON.stringify(exceptionDetails));
  await writeFile(new URL(`assets/app/${name}`,root),Buffer.from(result.value,'base64'));
 }
 console.log('Generated the Rocky favicon and four app icons.');
} finally {await terminateProcess(chrome);await rm(profile,{recursive:true,force:true});}
