import { getSubjectRoadmap } from "../data/subject-roadmaps.js";
import { getPartQuestionIds, questionRewardKey } from "./question-rewards.js";

// Legacy answers may predate rating saves. Mistake history defaults to Hard.
export const defaultAnswerRating = item => item?.misses > 0 ? "hard" : item?.solved ? "easy" : null;

export const QUESTION_RATINGS = Object.freeze([
  { value:"easy", label:"سهل" }, { value:"medium", label:"متوسط" }, { value:"hard", label:"صعب" },
]);

export function getRatedSubjectQuestions(subjectId, feedback) {
  const seen = new Set();
  return (getSubjectRoadmap(subjectId)?.units || []).flatMap(unit => unit.lessons
    .filter(lesson => !lesson.hidden && !lesson.optional)
    .flatMap(lesson => lesson.parts.flatMap(part => getPartQuestionIds({ subjectId,lessonId:lesson.id,partId:part.id })
      .flatMap(stepId => {
        const key = { subjectId,lessonId:lesson.id,partId:part.id,stepId };
        const rating = feedback?.getRating(key);
        const identity = questionRewardKey(key);
        if (!rating || feedback?.isHidden(key) || seen.has(identity)) return [];
        seen.add(identity);
        return [{ ...key,rating }];
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
