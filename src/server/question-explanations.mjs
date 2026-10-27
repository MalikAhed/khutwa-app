import { parseLessonMarkdown } from "../markdown/lesson-authoring.js";
import { questionExplanation } from "../domain/question-explanations.js";
import { resolveQuestionLocation } from "../domain/question-rewards.js";
import { loadSubjectLessonPart } from "../data/lessons/subject-lesson-registry.js";

export async function readQuestionExplanation(key, lesson) {
  const location = resolveQuestionLocation(key);
  if (location && location.partId !== key.partId)
    lesson = await loadSubjectLessonPart(location.subjectId, location.lessonId, location.partId);
  if (lesson?.status !== "published") return null;
  const stepId = location?.stepId || key.stepId;
  const step = parseLessonMarkdown(lesson.authoringSource).steps.find(step => step.id === stepId);
  if (!step || !["mcq","exam-question"].includes(step.type)) return null;
  return questionExplanation(step);
}
