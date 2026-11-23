import { OUTSIDE_GAZA_LOADERS } from '../data/lessons/outside-gaza-loaders.js';
import { getPartQuestionIds, resolveQuestionLocation } from '../domain/question-rewards.js';
import { questionExplanation } from '../domain/question-explanations.js';
import { parseLessonMarkdown } from '../markdown/lesson-authoring.js';

export async function loadOutsideGazaLessonPart(subjectId, lessonId, partId) {
  const load = OUTSIDE_GAZA_LOADERS.get(`${subjectId}:${lessonId}`);
  if (!load || !getPartQuestionIds({ subjectId, lessonId, partId }).length) return null;
  // Each practice group is a published lesson with exactly one part.
  return (await load()).default;
}

export async function readOutsideGazaExplanation(key) {
  const location = resolveQuestionLocation(key);
  if (!location) return null;
  const lesson = await loadOutsideGazaLessonPart(location.subjectId, location.lessonId, location.partId);
  if (!lesson) return null;
  const step = parseLessonMarkdown(lesson.authoringSource).steps.find(candidate => candidate.id === location.stepId);
  return step ? questionExplanation(step) : null;
}
