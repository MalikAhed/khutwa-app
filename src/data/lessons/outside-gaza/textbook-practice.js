import { OUTSIDE_GAZA_ROADMAPS } from "./roadmaps.js";
import { resolveDuplicateQuestionLink } from "../../question-duplicates.js";

const arabicNumber = new Intl.NumberFormat("ar-PS", { numberingSystem:"arab" });
const textbookLocations = new Map();
const legacyStarts = new Map();

/** Organize the questions for navigation while retaining their original progress locations. */
export function createTextbookRoadmap(subjectId, sections, classify, paperForUnit = () => subjectId, sharedPractice) {
  const published = OUTSIDE_GAZA_ROADMAPS[subjectId];
  const numeral = subjectId.endsWith("-physics") ? String : value => arabicNumber.format(value);
  return { ...published, units:published.units.map((unit, index) => {
    const unitNumber = index + 1;
    const [title, reviewPages, topics] = sections[index];
    const lessons = topics.map(([topic, pages, , , bookIndex], lessonIndex) => {
      const bookNumber = pages ? bookIndex || `${numeral(unitNumber)}-${numeral(lessonIndex + 1)}` : "";
      return { id:`${unit.id}-lesson-${lessonIndex + 1}`, bookNumber, label:topic, pages, xp:0, parts:[] };
    });
    const reviewTitle = reviewPages ? `مراجعة الوحدة ${numeral(unitNumber)}` : topics.length ? "تدريب إضافي" : title;
    const review = { id:`${unit.id}-review`, label:reviewTitle, pages:reviewPages, xp:0, parts:[] };
    for (const batch of unit.lessons) {
      const [source] = batch.parts;
      const parts = new Map();
      for (const stepId of source.questionIds) {
        const lesson = lessons[classify(stepId, unitNumber, topics)] || review;
        if (!parts.has(lesson.id)) {
          const part = { id:batch.id, label:lesson.label, pages:lesson.pages, startStepId:stepId, questionIds:[],
            source:{ subjectId, lessonId:batch.id, partId:source.id } };
          parts.set(lesson.id, part);
          lesson.parts.push(part);
        }
        parts.get(lesson.id).questionIds.push(stepId);
        const location = { subjectId:paperForUnit(unitNumber), lessonId:lesson.id, partId:batch.id };
        textbookLocations.set(stepId, location);
        if (stepId === source.startStepId) legacyStarts.set(`${subjectId}:${batch.id}`, { ...location, stepId });
      }
    }
    for (const lesson of [...lessons, review]) {
      const shared = sharedPractice?.get(lesson.id) || [];
      for (const part of shared) lesson.parts.push({ ...part, label:lesson.label, pages:lesson.pages });
    }
    return { ...unit, label:`الوحدة ${numeral(unitNumber)}: ${title}`, lessons:[...lessons, review].filter(lesson => lesson.parts.length) };
  }) };
}

export function sharedPracticeParts(subjectId, lesson, include = () => true) {
  const { id:lessonId } = lesson;
  return (lesson.parts || [{ id:`${lessonId}-practice`, questionIds:lesson.questionIds }]).flatMap(part => {
    const questionIds = part.questionIds.filter(include);
    return questionIds.length ? [{
      id:part.id, questionIds, startStepId:questionIds[0],
      source:{ subjectId, lessonId, partId:part.id },
    }] : [];
  });
}

export function resolveLegacyTextbookLink({ subjectId, lessonId, partId, stepId }) {
  const first = legacyStarts.get(`${subjectId}:${lessonId}`);
  if (partId !== "practice" || !first) return null;
  const location = textbookLocations.get(stepId);
  if (stepId?.startsWith(`${subjectId}-`) && location?.partId === lessonId) return location;
  const destination = resolveDuplicateQuestionLink(first) || first;
  return { subjectId:destination.subjectId, lessonId:destination.lessonId, partId:destination.partId };
}
