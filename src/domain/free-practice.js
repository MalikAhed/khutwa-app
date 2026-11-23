import { getCurrentSubjectRoadmap, getSubjectRoadmap } from '../data/subject-roadmaps.js';
import { isOutsideGazaMath } from '../data/lessons/outside-gaza/math-roadmaps.js';
import { resolveLegacyTextbookLink } from '../data/lessons/outside-gaza/textbook-practice.js';

// Count visible, published lessons, not units, parts or the hidden introduction.
export const FREE_PRACTICE_LESSONS = 2;
export const QUESTION_JUMPS_REQUIRE_SUPER = true;
const isStarter = (roadmap, lessonId) => Boolean(roadmap?.units.flatMap(unit => unit.lessons)
  .filter(lesson => !lesson.hidden && !lesson.optional && lesson.parts?.some(part => part.startStepId))
  .slice(0, FREE_PRACTICE_LESSONS).some(lesson => lesson.id === lessonId));

export function hasFreeLessonPractice({ subjectId, lessonId, partId, stepId } = {}) {
  let roadmap = getSubjectRoadmap(subjectId);
  // Persisted second-paper mathematics retains its original subject identity.
  if (subjectId === 'mathematics' && !roadmap?.units.some(unit => unit.lessons.some(lesson => lesson.id === lessonId)))
    roadmap = getSubjectRoadmap('mathematics-2');
  if (isStarter(roadmap, lessonId)) return true;
  if (!subjectId?.startsWith('outside-gaza-')) return false;
  if (isOutsideGazaMath(subjectId) && !partId) {
    const lesson = getCurrentSubjectRoadmap(subjectId)?.units.flatMap(unit => unit.lessons).find(item => item.id === lessonId);
    if (lesson) return lesson.parts.every(part => hasFreeLessonPractice({ ...part.source, stepId:part.startStepId }));
  }
  const current = stepId ? resolveLegacyTextbookLink({ subjectId, lessonId, partId, stepId }) : null;
  return isStarter(getCurrentSubjectRoadmap(current?.subjectId || subjectId), current?.lessonId || lessonId);
}
