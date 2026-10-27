import { loadSubjectLessonPart } from "../data/lessons/subject-lesson-registry.js";
import { hasJsonContentType, sendJson } from "./http.mjs";
import { getSessionToken, isCrossSiteRequest } from "./auth-api.mjs";
import { readQuestionExplanation } from "./question-explanations.mjs";
import { getSourceQuestionAliases, resolveQuestionLocation } from "../domain/question-rewards.js";

export function createProgressApi({accountStore,readJsonBody,originPolicy=isCrossSiteRequest}) {
  return async (request,response) => {
    if(originPolicy(request)) {sendJson(response,403,{error:'Invalid request origin.'});return;}
    const account=accountStore.getAccountForSession(getSessionToken(request));
    if(!account||account.accountType==='banned') {sendJson(response,401,{error:'Sign in to save progress.'});return;}
    // A stale tab must not attach its queued work to a newly signed-in account.
    if(request.headers['x-progress-owner']!==`account:${account.id}`) {sendJson(response,409,{error:'The active account changed.'});return;}
    if(request.method==='GET') {sendJson(response,200,{accountId:account.id,records:accountStore.progress.read(account.id),resources:accountStore.progress.readResources(account.id)});return;}
    if(request.method!=='POST') {response.writeHead(405,{Allow:'GET, POST'}).end();return;}
    if(!hasJsonContentType(request)) {sendJson(response,415,{error:'JSON is required.'});return;}
    try {
      const body=await readJsonBody(request);
      if (body?.type === 'explanation-unlock') {
        const fields = ['type','subjectId','lessonId','partId','stepId'];
        if (Object.keys(body).some(key => !fields.includes(key))
          || !fields.slice(1).every(key => typeof body[key] === 'string' && body[key].length > 0 && body[key].length <= 180))
          throw Object.assign(new Error('Invalid explanation request.'),{status:422});
        const lesson = await loadSubjectLessonPart(body.subjectId,body.lessonId,body.partId);
        const explanation = lesson?.status === 'published' ? await readQuestionExplanation(body,lesson) : null;
        if (!explanation) throw Object.assign(new Error('An explanation is not available for this question yet.'),{status:422});
        if (accountStore.getAccountForSession(getSessionToken(request))?.id !== account.id)
          throw Object.assign(new Error('The active account changed.'),{status:409});
        const resources = accountStore.progress.unlockExplanation(account.id,body);
        sendJson(response,200,{accountId:account.id,resources,explanation});
        return;
      }
      if (body?.type === 'super-trial' && Object.keys(body).length === 1) {
        sendJson(response,200,{accountId:account.id,resources:accountStore.progress.startSuperTrial(account.id)});
        return;
      }
      const fields=['id','type','subjectId','lessonId','partId','completedStepIds','isComplete','stepId','correct','reviewing','revision','date','review','rating'];
      if(!body||typeof body!=='object'||Array.isArray(body)||Object.keys(body).some(key=>!fields.includes(key))
        ||typeof body.id!=='string'||body.id.length<8||body.id.length>240||!['completion','answer','import'].includes(body.type)
        ||!['subjectId','lessonId','partId'].every(key=>typeof body[key]==='string'&&body[key].length<=120)) throw Object.assign(new Error('Invalid progress update.'),{status:422});
      const location = body.type === 'answer' ? resolveQuestionLocation(body) : null;
      const lesson=await loadSubjectLessonPart(body.subjectId,body.lessonId,location?.partId || body.partId);
      if(!lesson||lesson.status!=='published') throw Object.assign(new Error('Unknown published part.'),{status:422});
      const stepIds=lesson.steps.map(step=>step.id);
      const acceptedStepIds = new Set([...stepIds, ...getSourceQuestionAliases(body)]);
      if(body.rating !== undefined && (body.type !== 'answer' || !['easy','medium','hard'].includes(body.rating)))
        throw Object.assign(new Error('Invalid review collection.'),{status:422});
      if(body.type==='answer') {
        const step = lesson.steps.find(step => step.id === (location?.stepId || body.stepId));
        if(!step || !(step.type === 'question' && typeof body.correct === 'boolean' || step.type === 'activity' && (body.correct === null || typeof body.correct === 'boolean'))
          ||(body.reviewing!==undefined&&typeof body.reviewing!=='boolean')
          ||(body.revision!==undefined&&(!Number.isSafeInteger(body.revision)||body.revision<0))) throw Object.assign(new Error('Invalid answer update.'),{status:422});
      } else if(!Array.isArray(body.completedStepIds)||body.completedStepIds.length>acceptedStepIds.size
        ||body.completedStepIds.some(id=>!acceptedStepIds.has(id))||typeof body.isComplete!=='boolean') {
        throw Object.assign(new Error('Invalid completed steps.'),{status:422});
      }
      // The answer's local calendar day survives queued retries across midnight.
      const latestLocalDate = new Date(Date.now() + 14 * 60 * 60 * 1000).toISOString().slice(0, 10);
      if(body.date!==undefined && (!['import','answer'].includes(body.type)||typeof body.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(body.date)||Number.isNaN(Date.parse(body.date))||new Date(body.date).toISOString().slice(0,10)!==body.date||body.date>latestLocalDate)) throw Object.assign(new Error('Invalid activity date.'),{status:422});
      if(body.review!==undefined&&(body.type!=='import'||!Array.isArray(body.review)||body.review.length>acceptedStepIds.size)) throw Object.assign(new Error('Invalid imported review.'),{status:422});
      accountStore.progress.update(account.id,body,stepIds);
      sendJson(response,200,{accountId:account.id,records:accountStore.progress.read(account.id),resources:accountStore.progress.readResources(account.id)});
    }catch(error){sendJson(response,error.code==='ETOOBIG'?413:error instanceof SyntaxError?400:error.status||500,{error:error.status?error.message:'Progress could not be saved.',...([402,429].includes(error.status)?{accountId:account.id,resources:accountStore.progress.readResources(account.id)}:{})});}
  };
}
