import { getCurrentSubjectRoadmap } from "../data/subject-roadmaps.js";
import { isCurriculumQuestionHidden, publishedPartLocation } from "../data/curriculum-visibility.js";
import { getPartQuestionIds, questionRewardKey } from "./question-rewards.js";

// Legacy answers may predate rating saves. Mistake history defaults to Hard.
export const defaultAnswerRating = item => item?.misses > 0 ? "hard" : item?.solved ? "easy" : null;

export const QUESTION_RATINGS = Object.freeze([
  { value:"easy", label:"سهل" }, { value:"medium", label:"متوسط" }, { value:"hard", label:"صعب" },
]);

export function getRatedSubjectQuestions(subjectId, feedback) {
  const seen = new Set();
  return (getCurrentSubjectRoadmap(subjectId)?.units || []).flatMap(unit => unit.lessons
    .filter(lesson => !lesson.hidden && !lesson.optional)
    .flatMap(lesson => lesson.parts.flatMap(part => (part.questionIds || getPartQuestionIds({ subjectId,lessonId:lesson.id,partId:part.id }))
      .flatMap(stepId => {
        if (isCurriculumQuestionHidden(stepId, subjectId, lesson.id, part.id)) return [];
        const key = { ...publishedPartLocation(subjectId, lesson, part), stepId };
        const rating = feedback?.getRating(key);
        const identity = questionRewardKey(key);
        if (!rating || feedback?.isHidden(key) || seen.has(identity)) return [];
        seen.add(identity);
        return [{ subjectId,lessonId:lesson.id,partId:part.id,stepId,rating }];
      }))));
}

export function filterRatedRoadmap(roadmap, questions, rating) {
  const selected = questions.filter(question => question.rating === rating);
  return { ...roadmap,units:roadmap.units.map(unit => ({ ...unit,lessons:unit.lessons
    .filter(lesson => !lesson.hidden).map(lesson => ({ ...lesson,parts:lesson.parts.map(part => {
      const questionIds = selected.filter(question => question.lessonId === lesson.id && question.partId === part.id).map(question => question.stepId);
      return { ...part,questionIds,startStepId:questionIds[0] };
    }).filter(part => part.questionIds.length) })).filter(lesson => lesson.parts.length),
  })).filter(unit => unit.lessons.length) };
}
