import { loadSubjectLessonPart } from "../data/lessons/subject-lesson-registry.js";
import { compileLessonMarkdown } from "../markdown/lesson-model.js";

// Use the original question definitions and map temporary sequence IDs back to
// their published source keys for answers, explanations, ratings and progress.
export async function loadRatedQuestionBatch(entries) {
  const groups = new Map();
  for (const key of entries) groups.set(JSON.stringify([key.subjectId,key.lessonId,key.partId]),key);
  const partLessons = await Promise.all([...groups.values()].map(async key => ({
    part:{ id:key.partId }, sourceLessonId:key.lessonId,
    lesson:await loadSubjectLessonPart(key.subjectId,key.lessonId,key.partId),
  })));
  const compiled = new Map(partLessons.map(({ part,sourceLessonId,lesson }) => [JSON.stringify([sourceLessonId,part.id]),
    new Map((lesson?.status === "published" ? compileLessonMarkdown(lesson.authoringSource).parsed.steps : []).map(step => [step.id,step]))]));
  const questionKeys = new Map();
  const authoredSteps = entries.flatMap(key => {
    const step = compiled.get(JSON.stringify([key.lessonId,key.partId]))?.get(key.stepId);
    if (!step || !["mcq","exam-question"].includes(step.type)) return [];
    const id = JSON.stringify([key.subjectId,key.lessonId,key.partId,key.stepId]);
    questionKeys.set(id,key);
    return [{ ...step, id }];
  });
  return { authoredSteps, questionKeys, partLessons:partLessons.filter(item => item.lesson?.status === "published") };
}
