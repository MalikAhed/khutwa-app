import { isValidVisitorSelection } from "../domain/account.js";
import { questionRewardKey } from "../domain/question-rewards.js";
import { partKey } from "../domain/subject-progress.js";
import { createAuthClient } from "../services/auth-client.js";
import { LEGACY_PROGRESS_PREFIX } from "../services/session-progress.js";

export const STUDENT_PREVIEW_OWNER = "student-preview";

export async function verifyStudentPreview(params, apiBase) {
  if (!apiBase) return null;
  const targetId = params.get("student-id");
  const [curriculum, path, ...extra] = (params.get("student-preview") || "").split(":");
  const accountType = params.get("preview-plan");
  const openingStudent = params.get("student-preview") === "student";
  if (openingStudent ? !/^[1-9]\d*$/.test(targetId || "") || !Number.isSafeInteger(Number(targetId))
    : extra.length || !isValidVisitorSelection({ curriculum, path })
      || (accountType !== "free" && accountType !== "subscribed")) return null;

  const { ok, body } = await createAuthClient({ baseUrl:apiBase }).restoreSession();
  if (!ok || body?.offline || body?.account?.isOwner !== true || body.account.accountType === "banned") return null;
  if (openingStudent) {
    const ownerApi = createAuthClient({ baseUrl:apiBase.replace(/\/auth$/, "") });
    const { ok:found, body:student } = await ownerApi.request(`/owner/students/${targetId}`, {cache:"no-store"});
    if (!found || String(student?.id) !== targetId || !isValidVisitorSelection(student)
      || student.accessDisabled || !["free","subscribed"].includes(student.accountType)) return null;
    return { targetId, curriculum:student.curriculum, path:student.path, accountType:student.accountType,
      displayName:student.username, subscriptionSubjects:student.subscriptionSubjects,
      parts:student.parts, ratings:student.ratings, hiddenQuestions:student.hiddenQuestions };
  }
  return { curriculum, path, accountType };
}

export function createStudentPreviewStorage(preview) {
  const values = new Map();
  if (Array.isArray(preview.parts)) {
    const records = preview.parts.filter(part =>
      ["subjectId","lessonId","partId"].every(key => typeof part?.[key] === "string" && part[key]));
    values.set(LEGACY_PROGRESS_PREFIX + STUDENT_PREVIEW_OWNER,
      JSON.stringify({version:1,records:records.map(part => [partKey(part),part])}));
  }
  const feedback = {};
  if (Array.isArray(preview.ratings)) for (const item of preview.ratings) {
    if (!["easy","medium","hard"].includes(item?.rating)) continue;
    const key = [item.subjectId,item.lessonId,item.partId,item.stepId];
    if (key.every(value => typeof value === "string" && value)) feedback[JSON.stringify(key)] = { rating:item.rating, automatic:item.automatic === true };
  }
  if (Array.isArray(preview.hiddenQuestions)) for (const item of preview.hiddenQuestions) {
    if (typeof item?.subjectId === "string" && typeof item?.stepId === "string")
      feedback[questionRewardKey(item)] = {hidden:true};
  }
  values.set(`tawjihi:question-feedback:${STUDENT_PREVIEW_OWNER}`,JSON.stringify(feedback));
  return { getItem:key => values.get(key) ?? null, setItem:(key,value) => values.set(key,value) };
}
