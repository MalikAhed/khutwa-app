// @ts-check
import { lessonReferenceLabel } from "./lesson/shared.js";
import { renderComingSoon } from "./lesson/status.js";
import { compileLessonMarkdown } from "../markdown/lesson-model.js";
import { renderAuthoredInteractiveLesson } from "./lesson/authored.js";
export { renderLessonError } from "./lesson/status.js";

/** @typedef {{completedStepIds:string[], isComplete:boolean}} LessonProgressUpdate */
/** @typedef {{completedStepIds:string[], attemptedStepIds?:string[], completedAt?:string|null, mistakeStepIds?:string[]}} LessonProgress */
/** @typedef {ReturnType<typeof import('../domain/subject-progress.js').summarizeParts> & {xpGain:number, progressGain:number, streakGain:number, alreadyCompleted?:boolean}} CompletionOutcome */
/** @typedef {{isLessonPart?:boolean, progress?:LessonProgress,
 * onProgress?:(value:LessonProgressUpdate)=>void|Promise<void|import("../services/subject-progress-store.js").SaveResult>, onAnswer?:(value:{stepId:string,correct:boolean|null,reviewing?:boolean})=>void|Promise<void|import("../services/subject-progress-store.js").SaveResult>,
 * beforeAnswer?:()=>string|undefined,
 * reviewStepId?:string|null, onReviewComplete?:()=>void, getCompletionOutcome?:()=>CompletionOutcome, onExitLesson?:()=>void, onFinishLesson?:()=>void,
 * getMathFilterCatalog?:(scope:string)=>Promise<Array<object>>, mathFilterState?:{scope:string,stepIds:string[]},
 * questionFilterIds?:string[],
 * demoMode?:boolean, onLessonEvent?:(event:any)=>void, getQuestionFeedback?:(stepId:string)=>any, getQuestionExplanation?:(step:any)=>any,
 * onMathFilterApply?:(value:any)=>string[]|undefined}} LessonOptions */
/** @param {HTMLElement} container @param {string|number} day @param {{title:string,authoringSource?:string,streamed?:boolean,steps?:any[]}|null} lesson @param {LessonOptions} [options]
 * @returns {{title:string, destroy:import('../app/view-lifecycle.js').Cleanup}} */
export function renderLesson(container, day, lesson, options = {}) {
  const reference = lessonReferenceLabel(day);
  if (!lesson) {
    renderComingSoon(container, day);
    return {
      title: `${reference}: Coming Soon · توجيهي`,
      destroy: () => {},
    };
  }
  if (!lesson.authoringSource && !lesson.streamed) throw new TypeError("A published lesson requires authored question content.");
  const destroy = renderAuthoredInteractiveLesson(container, day, lesson,
    lesson.streamed ? lesson.steps : compileLessonMarkdown(lesson.authoringSource).parsed.steps, options);
  return { title: `${reference}: ${lesson.title} · توجيهي`, destroy };
}
