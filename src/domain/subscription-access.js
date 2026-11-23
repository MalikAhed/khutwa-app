import { COURSE_SUBJECTS } from '../data/course.js';
import { getSubjectRoadmap } from '../data/subject-roadmaps.js';
import { isOutsideGazaMath2Lesson, OUTSIDE_GAZA_MATH_1, OUTSIDE_GAZA_MATH_2, sharedMathSubject } from '../data/lessons/outside-gaza/math-roadmaps.js';
import { sharedTextbookSubject } from '../data/lessons/outside-gaza/textbook-supplements.js';

export function normalizeSubscriptionSubjects(value) {
  // Missing scope is the historical all-subjects subscription.
  if (value == null) return null;
  if (!Array.isArray(value) || !value.length || value.length > COURSE_SUBJECTS.length
    || value.some(id => !COURSE_SUBJECTS.some(subject => subject.id === id)))
    throw new RangeError('اختر مادة واحدة على الأقل من المواد المتاحة.');
  return [...new Set(value)];
}

export function readSubscriptionSubjects(value) {
  try { return normalizeSubscriptionSubjects(typeof value === 'string' ? JSON.parse(value) : value); }
  catch { return []; } // Invalid stored scope never grants all-subject access.
}

export function subscriptionCovers(subjects, key) {
  if (subjects == null) return true;
  let subjectId = typeof key === 'string' ? key : key?.subjectId;
  if (subjectId === 'mathematics' && typeof key === 'object' && key?.lessonId
    && !getSubjectRoadmap('mathematics')?.units.some(unit => unit.lessons.some(lesson => lesson.id === key.lessonId))
    && getSubjectRoadmap('mathematics-2')?.units.some(unit => unit.lessons.some(lesson => lesson.id === key.lessonId))) subjectId = 'mathematics-2';
  if (!Array.isArray(subjects)) return false;
  if (subjects.includes(subjectId)) return true;
  if (typeof key === 'object' && key) subjectId = sharedMathSubject(key) || sharedTextbookSubject(key) || subjectId;
  if (subjectId === OUTSIDE_GAZA_MATH_2 || subjectId === OUTSIDE_GAZA_MATH_1 && typeof key === 'object' && isOutsideGazaMath2Lesson(key?.lessonId)) {
    return subjects.includes(OUTSIDE_GAZA_MATH_1) || subjects.includes(OUTSIDE_GAZA_MATH_2);
  }
  return subjects.includes(subjectId);
}
