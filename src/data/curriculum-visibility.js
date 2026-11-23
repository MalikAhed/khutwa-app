import { ENGLISH_LESSONS } from "./lessons/english/english-course.js";
import { FULL_BOOK_HYDROGEN_QUESTIONS } from "./lessons/chemistry/chemistry-course.js";
import { PARTIAL_FRACTION_QUESTION_IDS } from "./lessons/mathematics/math-course.js";
import { OUTSIDE_GAZA_TEXTBOOK_ROADMAPS } from "./lessons/outside-gaza/textbook-roadmaps.js";
import { getIctPartQuestionIds } from "./lessons/ict/question-index.js";
import { hasQuestionDuplicates, resolveDuplicateQuestionLink } from "./question-duplicates.js";

// Legacy full-textbook unit numbers. These four units are absent from the
// Ministry's Gaza English packet (PDF pp. 2–3): https://moe.edu.ps/m/4183
const excludedGazaEnglishUnits = new Set([2, 4, 10, 11]);

// Keep out-of-syllabus questions and their published IDs in the progress catalog.
const hiddenGazaQuestions = new Set([
  ...ENGLISH_LESSONS.filter(lesson => excludedGazaEnglishUnits.has(lesson.unit))
    .flatMap(lesson => lesson.parts.flatMap(part => part.questionIds)),
  // Elmi ICT covers the session, presentation and application layers only
  // in its OSI lesson: https://moe.edu.ps/m/4057#page=57
  "ict-unit4-osi-mcq-7",
  // Adabi geography, PDF pp. 69–74: the climate hazards lesson covers
  // tropical cyclones, El Niño and ozone depletion. The archived questions
  // below require the full-book treatment of climate change and agreements.
  "geo-e-p079-mcq2", "geo-e-p079-mcq3", "geo-e-p079-mcq6", "geo-e-p079-mcq7", "geo-e-p079-mcq8",
  "geo-e-p080-mcq11", "geo-e-p080-mcq15", "geo-e-p080-mcq16", "geo-e-p080-mcq18",
  "geo-e-p081-open3-03", "geo-e-p081-open3-05", "geo-e-p081-open3-07", "geo-e-p081-open3-09",
  "geo-e-p081-open3-11", "geo-e-p081-open3-12", "geo-e-p081-open3-13", "geo-e-p082-open3-14",
  // Adabi Scientific Culture, PDF pp. 20–28 and 43–49: the packet retains
  // diagnostic imaging and nutrients, but omits radiation therapy and food preservation.
  "sc-e-p034-q04", "sc-e-p054-q08", "sc-e-p054-q09",
  // The classified partial-fractions section and its four follow-up exercises.
  ...PARTIAL_FRACTION_QUESTION_IDS,
  // Bohr's model, hydrogen line spectra and photon calculations precede the
  // quantum-mechanical model in the full book. Gaza's packet starts at that
  // model and omits the calculations: https://moe.edu.ps/m/4059#page=4
  ...FULL_BOOK_HYDROGEN_QUESTIONS.flat(),
]);

export const isCurriculumQuestionHidden = (stepId, subjectId = "", lessonId, partId) =>
  !subjectId?.startsWith("outside-gaza-") && hiddenGazaQuestions.has(stepId)
  || Boolean(lessonId && resolveDuplicateQuestionLink({ subjectId, lessonId, partId, stepId }));

export function publishedPartLocation(subjectId, lesson, part) {
  return part.source || { subjectId, lessonId:lesson.id, partId:part.id };
}

/** Project the current curriculum without removing historical locations or IDs. */
const currentRoadmaps = new WeakMap();

export function currentCurriculumRoadmap(roadmap) {
  if (!roadmap) return roadmap;
  if (currentRoadmaps.has(roadmap)) return currentRoadmaps.get(roadmap);
  const { subjectId } = roadmap;
  const current = OUTSIDE_GAZA_TEXTBOOK_ROADMAPS[subjectId] || roadmap;
  const removeDuplicates = hasQuestionDuplicates(subjectId);
  const units = current.units.flatMap(unit => {
    const lessons = unit.lessons.flatMap(lesson => {
      const parts = lesson.parts.flatMap(part => {
        const ids = part.questionIds ?? (subjectId === "ict" ? getIctPartQuestionIds(part.id) : []);
        if (!ids.length) return [part];
        if (!removeDuplicates) return ids.some(id => !isCurriculumQuestionHidden(id, subjectId)) ? [part] : [];
        const questionIds = ids.filter(stepId => !resolveDuplicateQuestionLink({
          subjectId, lessonId:lesson.id, partId:part.id, stepId,
        }));
        if (!questionIds.some(id => !isCurriculumQuestionHidden(id, subjectId))) return [];
        return questionIds.length === ids.length ? [part]
          : [{ ...part, questionIds, startStepId:part.source ? questionIds[0] : part.startStepId }];
      });
      if (parts.length === lesson.parts.length && parts.every((part, index) => part === lesson.parts[index])) return [lesson];
      return parts.length ? [{ ...lesson, parts }] : [];
    });
    if (lessons.length === unit.lessons.length && lessons.every((lesson, index) => lesson === unit.lessons[index])) return [unit];
    return lessons.length ? [{ ...unit, lessons }] : [];
  });
  const result = units.length === current.units.length && units.every((unit, index) => unit === current.units[index])
    ? current : { ...current, units };
  currentRoadmaps.set(roadmap, result);
  currentRoadmaps.set(result, result);
  return result;
}
