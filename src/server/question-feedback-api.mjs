import { questionRewardKey } from "../domain/question-rewards.js";
import { getSessionToken, isCrossSiteRequest } from "./auth-api.mjs";
import { hasJsonContentType, sendJson } from "./http.mjs";
import { loadSubjectLessonPart } from "../data/lessons/subject-lesson-registry.js";

export function createQuestionFeedbackApi({ accountStore, readJsonBody, originPolicy = isCrossSiteRequest, loadLessonPart = loadSubjectLessonPart }) {
  return async (request, response) => {
    if (originPolicy(request)) return sendJson(response,403,{ error:"Invalid request origin." });
    const account = await accountStore.getAccountForSession(getSessionToken(request));
    if (!account || account.accountType === "banned") return sendJson(response,401,{ error:"Sign in to save question feedback." });
    if (request.headers["x-progress-owner"] !== `account:${account.id}`)
      return sendJson(response,409,{ error:"The active account changed." });
    if (request.method === "GET") return sendJson(response,200,{ ratings:accountStore.questionFeedback.ratings(account.id),hiddenQuestions:accountStore.questionFeedback.hidden(account.id) });
    if (request.method !== "POST") { response.writeHead(405,{ Allow:"GET, POST" }).end(); return; }
    if (!hasJsonContentType(request)) return sendJson(response,415,{ error:"JSON is required." });
    try {
      const value = await readJsonBody(request);
      const allowed = ["type","subjectId","lessonId","partId","stepId","rating","automatic","reason","details"];
      if (!value || Array.isArray(value) || Object.keys(value).some(key => !allowed.includes(key))
        || !["rating","report","hide"].includes(value.type)
        || !["subjectId","lessonId","partId","stepId"].every(key => typeof value[key] === "string" && value[key].length > 0 && value[key].length <= 180)
        || value.type === "rating" && (!["easy","medium","hard"].includes(value.rating)
          || value.automatic !== undefined && typeof value.automatic !== "boolean")
        || value.type === "report" && (!["question","answer","display","other"].includes(value.reason)
          || value.details !== undefined && (typeof value.details !== "string" || value.details.length > 1000)))
        return sendJson(response,422,{ error:"Invalid question feedback." });
      const lesson = await loadLessonPart(value.subjectId,value.lessonId,value.partId);
      if (!lesson || lesson.status !== "published" || !lesson.steps.some(step => step.id === value.stepId && ["question","activity"].includes(step.type)))
        return sendJson(response,422,{ error:"Unknown published question." });
      // Bind the write to the session captured before the asynchronous content load.
      if ((await accountStore.getAccountForSession(getSessionToken(request)))?.id !== account.id)
        return sendJson(response,409,{ error:"The active account changed." });
      accountStore.questionFeedback.save(account.id,value);
      const rating = value.type === "rating" ? accountStore.questionFeedback.ratings(account.id).find(item =>
        questionRewardKey(item) === questionRewardKey(value)) : null;
      sendJson(response,200,{ status:"saved",...(rating ? { rating:{ rating:rating.rating,automatic:rating.automatic } } : {}) });
    } catch (error) {
      sendJson(response,error.code === "ETOOBIG" ? 413 : error instanceof SyntaxError ? 400 : 500,{ error:"Question feedback could not be saved." });
    }
  };
}
