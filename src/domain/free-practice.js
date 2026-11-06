import { getSubjectRoadmap } from '../data/subject-roadmaps.js';

// Count visible, published lessons, not units, parts or the hidden introduction.
export const FREE_PRACTICE_LESSONS = 2;
export const QUESTION_JUMPS_REQUIRE_SUPER = true;
export function hasFreeLessonPractice({ subjectId, lessonId } = {}) {
  let roadmap = getSubjectRoadmap(subjectId);
  // Persisted second-paper mathematics retains its original subject identity.
  if (subjectId === 'mathematics' && !roadmap?.units.some(unit => unit.lessons.some(lesson => lesson.id === lessonId)))
    roadmap = getSubjectRoadmap('mathematics-2');
  return Boolean(roadmap?.units.flatMap(unit => unit.lessons)
    .filter(lesson => !lesson.hidden && !lesson.optional && lesson.parts?.some(part => part.startStepId))
    .slice(0, FREE_PRACTICE_LESSONS).some(lesson => lesson.id === lessonId));
}
