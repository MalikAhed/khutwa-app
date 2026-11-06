import { browserRegistration, browserCookie, DEVICE_LIMIT } from './browser-registration.mjs';
import { getSessionToken } from './auth-api.mjs';
import { hasJsonContentType, sendJson } from './http.mjs';
import { hasFreeLessonPractice } from '../domain/free-practice.js';
import { nextHeartReset, MAX_HEARTS } from '../domain/learner-resources.js';

export function withBrowserAllowance(handler, { accountStore, readJsonBody, originPolicy, secureCookies = false }) {
  return async (request, response, pathname) => {
    if (originPolicy(request) || !['GET','POST'].includes(request.method)
      || request.method === 'POST' && !hasJsonContentType(request)) return handler(request,response,pathname);
    const account = await accountStore.getAccountForSession(getSessionToken(request));
    if (!account || account.accountType === 'banned' || request.headers['x-progress-owner'] !== `account:${account.id}`)
      return handler(request,response,pathname);
    const policy = accountStore.browserPolicy;
    const device = browserRegistration(request.headers);
    if (!await policy.claimDevice(account.id,device)) { sendJson(response,403,DEVICE_LIMIT); return; }
    let body, replay = request;
    if (request.method === 'POST') {
      try { body = await readJsonBody(request); }
      catch (error) { sendJson(response,error.code === 'ETOOBIG' ? 413 : 400,{error:'Invalid request body.'}); return; }
      replay = Object.create(request);
      replay[Symbol.asyncIterator] = async function* () { yield Buffer.from(JSON.stringify(body)); };
    }
    const balance = async resources => {
      if (resources.unlimited) return resources;
      const hearts = Math.min(resources.hearts,await policy.remaining(device.tokenHash));
      return {...resources,hearts,nextHeartAt:hearts < MAX_HEARTS ? nextHeartReset(Date.now()) : null};
    };
    let reservation;
    if (body?.type === 'answer' && typeof body.id === 'string' && body.id.length >= 8 && body.id.length <= 240
      && !hasFreeLessonPractice(body) && !accountStore.progress.readResources(account.id).unlimited
      && !accountStore.progress.hasUpdate(account.id,body.id)) {
      try { reservation = await policy.reserve(device.tokenHash,account.id,body); }
      catch (error) {
        if (!error.status) throw error;
        sendJson(response,error.status,{error:error.message}); return;
      }
      if (!reservation) {
        sendJson(response,429,{status:'browser-heart-limit',accountId:account.id,
          error:'نفدت قلوب هذا المتصفح لليوم. تتجدد القلوب السبعة عند منتصف الليل بتوقيت فلسطين. يمكنك متابعة أول درسين في كل مادة دون قلوب.',
          resources:await balance(accountStore.progress.readResources(account.id))});
        return;
      }
    }
    // Do not acknowledge success until both the answer and browser debit exist.
    // An interrupted/unknown result retains its reservation; the same update ID
    // can retry without spending again. Definitively rejected writes release it.
    let status, headers, contents;
    const output = Object.create(response);
    output.writeHead = (code, values = {}) => { status=code; headers=values; return output; };
    output.end = value => { contents=value; };
    await handler(replay,output,pathname);
    if (reservation && status >= 400 && status < 500 && !accountStore.progress.hasUpdate(account.id,body.id))
      await policy.release(reservation);
    if (contents) {
      const result = JSON.parse(String(contents));
      if (result.resources && String(result.accountId) === String(account.id)) result.resources = await balance(result.resources);
      contents = JSON.stringify(result);
    }
    const existing = headers?.['Set-Cookie'];
    response.writeHead(status,{...headers,'Set-Cookie':[
      ...(existing ? Array.isArray(existing) ? existing : [existing] : []),
      browserCookie(device.token,secureCookies || Boolean(request.socket?.encrypted)),
    ]}).end(contents);
  };
}
