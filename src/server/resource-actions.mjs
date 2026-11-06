import { getSessionToken, isCrossSiteRequest } from "./auth-api.mjs";
import { hasJsonContentType, sendJson } from "./http.mjs";
import { withBrowserAllowance } from './browser-allowance.mjs';

// Both the Node adapter and recovered live Worker share this new action. The
// original progress API continues to own answers, purchases and legacy imports.
export function withResourceActions(handler, { accountStore, readJsonBody, originPolicy = isCrossSiteRequest, secureCookies = false }) {
  const actions = async (request, response, pathname) => {
    if (request.method !== 'POST' || originPolicy(request) || !hasJsonContentType(request))
      return handler(request,response,pathname);
    let body;
    try { body = await readJsonBody(request); }
    catch (error) { sendJson(response,error.code === 'ETOOBIG' ? 413 : 400,{error:'Invalid request body.'}); return; }
    if (body?.type !== 'question-navigation') {
      const replay = Object.create(request);
      replay[Symbol.asyncIterator] = async function* () { yield Buffer.from(JSON.stringify(body)); };
      // Keep validation/commit in the original API, then attach the durable
      // reward receipt. This also supports the unchanged recovered Worker API.
      let output = response;
      if (body?.type === 'answer') {
        output = Object.create(response);
        output.writeHead = (status,headers) => ({end(contents) {
          if (status === 200) {
            const result = JSON.parse(String(contents));
            result.gemReward = accountStore.progress.readAnswerGemReward(result.accountId,body.id);
            contents = JSON.stringify(result);
          }
          return response.writeHead(status,headers).end(contents);
        }});
      }
      return handler(replay,output,pathname);
    }
    const account = await accountStore.getAccountForSession(getSessionToken(request));
    if (!account || account.accountType === 'banned') { sendJson(response,401,{error:'Sign in first.'}); return; }
    if (request.headers['x-progress-owner'] !== `account:${account.id}`) { sendJson(response,409,{error:'The active account changed.'}); return; }
    try {
      const fields = ['type','id','kind','subjectId','lessonId','partId','stepId'];
      if (Object.keys(body).some(key => !fields.includes(key)) || !fields.every(key => typeof body[key] === 'string')
        || body.id.length < 8 || body.id.length > 240 || !['jump','enter','continue'].includes(body.kind)
        || ['subjectId','lessonId','partId','stepId'].some(key => !body[key] || body[key].length > 180))
        throw Object.assign(new Error('Invalid question navigation.'),{status:422});
      const resources = accountStore.progress.navigate(account.id,body);
      sendJson(response,200,{accountId:account.id,resources});
    } catch (error) {
      sendJson(response,error.status || 500,{error:error.status ? error.message : 'Navigation could not be confirmed.',
        ...(error.code === 'navigation-limit' ? {status:'navigation-limit',currentStepId:error.currentStepId} : {}),
        ...(error.code === 'super-required' ? {status:'super-required'} : {}),
        ...([409,429].includes(error.status) ? {accountId:account.id,resources:accountStore.progress.readResources(account.id)} : {})});
    }
  };
  return withBrowserAllowance(actions,{accountStore,readJsonBody,originPolicy,secureCookies});
}
