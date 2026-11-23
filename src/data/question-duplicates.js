import { DUPLICATE_LOCATIONS } from "./question-duplicate-locations.js";

const retiredBySubject = new Map(Object.entries(DUPLICATE_LOCATIONS).map(([subjectId, rows]) => {
  const byStep = new Map();
  for (const [stepId, lessonId, partId, keptStep, keptLesson, keptPart, keptSubject = subjectId] of rows) {
    if (!byStep.has(stepId)) byStep.set(stepId, []);
    byStep.get(stepId).push({ lessonId, partId, destination:{
      subjectId:keptSubject, lessonId:keptLesson, partId:keptPart, stepId:keptStep,
    } });
  }
  return [subjectId, byStep];
}));

export const hasQuestionDuplicates = subjectId => retiredBySubject.has(subjectId);

export function resolveDuplicateQuestionLink({ subjectId, lessonId, partId, stepId }) {
  return retiredBySubject.get(subjectId)?.get(stepId)?.find(entry =>
    entry.lessonId === lessonId && (!partId || entry.partId === partId)
    || subjectId.startsWith("outside-gaza-") && partId === "practice" && entry.partId === lessonId)?.destination || null;
}
