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
 .replace(/<desc\b[^>]*>[\s\S]*?<\/desc>/, '');
function composeIcon(viewBox) {
 const croppedRocky = rocky.replace(/<svg\b[^>]*>/, `<svg width="512" height="512" viewBox="${viewBox}">`);
 return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>خطوة</title><rect width="512" height="512" fill="#fff"/>${croppedRocky}<style>[data-part="shadow"],[data-part="foot-left"],[data-part="foot-right"]{display:none}</style></svg>\n`;
}
const svg = composeIcon('180 112 440 440');
// A little more space above the head protects it in Android's circular safe
// area. The silhouette still bleeds through the lower edge of the square.
const maskableSvg = composeIcon('180 84 462 462');
await writeFile(new URL('assets/icons/favicon.svg',root),svg);
const profile=await mkdtemp(`${tmpdir()}/app-icons-`);
const chrome=spawn(await findChrome(),['--headless=new','--no-sandbox','--disable-gpu','--remote-debugging-pipe',`--user-data-dir=${profile}`],{stdio:['ignore','ignore','ignore','pipe','pipe']});
try {
 const cdp=new CdpPipe(chrome);
 const {targetId}=await cdp.send('Target.createTarget',{url:'about:blank'});
 const {sessionId}=await cdp.send('Target.attachToTarget',{targetId,flatten:true});
 for (const [name,size,icon] of [['icon-180.png',180,svg],['icon-192.png',192,svg],['icon-512.png',512,svg],['icon-maskable-512.png',512,maskableSvg]]) {
  const {result,exceptionDetails}=await cdp.send('Runtime.evaluate',{expression:`(async()=>{const img=new Image();img.src=${JSON.stringify('data:image/svg+xml;base64,'+Buffer.from(icon).toString('base64'))};await img.decode();const c=document.createElement('canvas');c.width=c.height=${size};const ctx=c.getContext('2d');ctx.drawImage(img,0,0,${size},${size});return c.toDataURL('image/png').split(',')[1];})()`,awaitPromise:true,returnByValue:true},sessionId);
  if(exceptionDetails)throw new Error(JSON.stringify(exceptionDetails));
  const png=Buffer.from(result.value,'base64');
  await writeFile(new URL(`assets/app/${name}`,root),png);
  // iOS also discovers the conventional root URL outside the web manifest.
  if(name==='icon-180.png')await writeFile(new URL('apple-touch-icon.png',root),png);
 }
 console.log('Generated the Rocky favicon and four app icons.');
} finally {await terminateProcess(chrome);await rm(profile,{recursive:true,force:true});}
