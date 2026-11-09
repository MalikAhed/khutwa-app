import { ADABI_COURSES } from '../data/lessons/adabi/catalog.js';
import { ADABI_LESSON_LOADERS } from '../data/lessons/adabi/registry.js';
import { parseLessonMarkdown } from '../markdown/lesson-authoring.js';
import { questionExplanation } from '../domain/question-explanations.js';

const lessons = new Map(ADABI_COURSES.flatMap(course => course.lessons.map(lesson => [
  `${course.subjectId}:${lesson.id}`, lesson,
])));
const pending = new Map();
const explanations = new Map();

export async function loadAdabiLessonPart(subjectId, lessonId, partId) {
  const key = `${subjectId}:${lessonId}`;
  const meta = lessons.get(key);
  const part = meta?.parts.find(candidate => candidate.id === partId);
  const load = ADABI_LESSON_LOADERS.get(key);
  if (!part || !load) return null;
  if (!pending.has(key)) {
    pending.set(key, Promise.resolve().then(load).then(module => module.default).catch(error => {
      pending.delete(key);
      throw error;
    }));
  }
  const lesson = await pending.get(key);
  if (lesson.status !== 'published') return null;
  const ids = new Set(part.questionIds);
  return { ...lesson, steps:lesson.steps.filter(step => ids.has(step.id)), reward:0 };
}

export async function readAdabiExplanation(key) {
  const lesson = await loadAdabiLessonPart(key.subjectId, key.lessonId, key.partId);
  if (!lesson?.steps.some(step => step.id === key.stepId)) return null;
  const id = `${key.subjectId}:${key.lessonId}`;
  if (!explanations.has(id)) {
    explanations.set(id, new Map(parseLessonMarkdown(lesson.authoringSource).steps
      .map(step => [step.id, questionExplanation(step)])));
  }
  return explanations.get(id).get(key.stepId) || null;
}
