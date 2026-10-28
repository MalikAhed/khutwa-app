import { QUESTION_RATINGS, getRatedSubjectQuestions } from "../domain/question-ratings.js";
import { renderRatingFace } from "./question-rating.js";
import { COURSE_SUBJECTS } from "../data/course.js";
import { getSubjectRoadmap } from "../data/subject-roadmaps.js";
import { getIctPartQuestionIds } from "../data/lessons/ict/question-index.js";
import { escapeHtml } from "../lib/dom.js";
import { isProgressLabelCovered } from "./learner-format.js";

const LOCK_ICON = '<span class="subject-card__lock" aria-hidden="true"><img src="assets/icons/subject-lock.svg" alt="" /></span>';
const ICT_QUESTION_TOTAL = getSubjectRoadmap("ict")?.units.flatMap(unit => unit.lessons)
  .filter(lesson => !lesson.hidden && !lesson.optional)
  .reduce((total, lesson) => total + lesson.parts.reduce((count, part) => count + getIctPartQuestionIds(part.id).length, 0), 0) || 0;

function roadmapQuestionTotal(subjectId) {
  if (subjectId === "ict") return ICT_QUESTION_TOTAL;
  return getSubjectRoadmap(subjectId)?.units.flatMap(unit => unit.lessons)
    .filter(lesson => !lesson.hidden && !lesson.optional)
    .reduce((total, lesson) => total + lesson.parts.reduce((count, part) => count + (part.questionIds?.length || 0), 0), 0) || 0;
}

function roadmapLessonTotal(subjectId) {
  return getSubjectRoadmap(subjectId)?.units.reduce((total, unit) => total + unit.lessons.filter(lesson => !lesson.hidden && !lesson.optional).length, 0) || 0;
}

function subjectArtworkMarkup(subject) {
  const artwork = escapeHtml(subject.artwork || subject.id);
  return `<picture class="subject-card__art" aria-hidden="true"><source media="(max-width:600px)" srcset="assets/subjects/${artwork}-small.webp"><img src="assets/subjects/${artwork}.webp" alt="" width="780" height="585" decoding="async" /></picture>`;
}

function subjectCardMarkup(subject, view) {
  const locked = view.unpublished;
  const disabledMarkup = locked ? ' aria-disabled="true" disabled' : "";
  return `<button class="subject-card${locked ? " subject-card--locked" : ""}" type="button" data-subject="${escapeHtml(subject.id)}" data-status="${view.state}" aria-label="${escapeHtml(view.label)}"${disabledMarkup}>${subjectArtworkMarkup(subject)}<span class="subject-card__hero"><span class="subject-card__title"><h2>${escapeHtml(subject.name)}</h2></span></span><span class="subject-card__details"><span class="subject-card__progress-track" data-subject-progress data-label-covered="${isProgressLabelCovered(view.progress, 100)}"><span aria-hidden="true"></span><bdi class="subject-card__progress-count ui-number" data-subject-count>${view.completedCount} / ${view.totalCount}</bdi></span></span>${locked ? LOCK_ICON : ""}</button>`;
}

/** One presentation contract owns the initial card and later learner updates. */
export function getSubjectCardPresentation(subject, snapshot) {
  const questionsOnly = subject.id === "ict" || getSubjectRoadmap(subject.id)?.questionsOnly;
  const learning = snapshot?.learning?.subjects?.[subject.id]
    || (subject.id === "ict" || !questionsOnly ? snapshot?.learning : undefined);
  const unpublished = subject.status === "unpublished";
  const questionTotal = questionsOnly ? Math.max(0,
    (subject.id === "mathematics" && roadmapQuestionTotal(subject.id)) ||
    Number(learning?.currentQuestionsTotal) || roadmapQuestionTotal(subject.id)) : 0;
  const questionSolved = Math.min(questionTotal, Math.max(0, Number(learning?.currentQuestionsSolved) || 0));
  const hasCurrentQuestions = questionsOnly && Number(learning?.currentQuestionsTotal) > 0;
  const progress = unpublished ? 0 : hasCurrentQuestions
    ? questionSolved / questionTotal * 100
    : Math.max(0, Math.min(100, Number(learning?.progress) || 0));
  const started = Boolean(learning?.hasStarted || progress || learning?.requiredLessonsCompleted || learning?.questionsSolved);
  const completed = hasCurrentQuestions ? questionSolved === questionTotal
    : progress >= 100 || (learning?.publishedPartsTotal > 0 && learning.requiredLessonsCompleted >= learning.publishedPartsTotal);
  const state = unpublished ? "unpublished" : completed ? "completed" : started ? "in-progress" : "available";
  const action = { unpublished:"قيد الإعداد", completed:"راجع خريطة الدروس", "in-progress":"تابع من خريطة الدروس", available:"ابدأ من خريطة الدروس" }[state];
  const completedLessons = unpublished ? 0 : Math.max(0, Number(learning?.requiredLessonsCompleted) || 0);
  const totalLessons = unpublished ? 0 : Math.max(0, Number(learning?.curriculumLessonsTotal) || Number(learning?.publishedPartsTotal) || roadmapLessonTotal(subject.id));
  return {
    state, action, progress, unpublished,
    completedLessons, totalLessons,
    completedCount:questionsOnly && !unpublished ? questionSolved : completedLessons,
    totalCount:questionsOnly && !unpublished ? questionTotal : totalLessons,
    label:`${subject.name}، ${action}${questionsOnly && !unpublished ? `، ${questionSolved} من ${questionTotal} سؤالًا` : ""}${learning && !unpublished ? `، ${Math.round(progress)}% مكتمل` : ""}`,
  };
}

export function renderCourseMapMarkup({ ratedQuestions = false, questionFeedback } = {}) {
  if (ratedQuestions) {
    const subjects = COURSE_SUBJECTS.map(subject => {
      const questions = getRatedSubjectQuestions(subject.id,questionFeedback);
      return `<article class="subject-card subject-card--rated" data-subject="${escapeHtml(subject.id)}" aria-label="${escapeHtml(subject.name)}">${subjectArtworkMarkup(subject)}<button type="button" class="subject-card__hero rated-subject-open" data-rated-subject="${escapeHtml(subject.id)}"><span class="subject-card__title"><h2>${escapeHtml(subject.name)}</h2></span></button><div class="rated-subject-difficulties" role="group" aria-label="اختر صعوبة الأسئلة للمراجعة">${QUESTION_RATINGS.map(({value,label}) => {
        const count = String(questions.filter(question => question.rating === value).length);
        return `<button type="button" class="rated-subject-difficulty rated-subject-difficulty--${value}" data-rated-subject="${escapeHtml(subject.id)}" data-rating="${value}" aria-label="${label}، ${count} سؤالًا">${renderRatingFace(value)}<bdi class="ui-number" style="--rating-count-digits:${count.length}" data-rating-count>${count}</bdi></button>`;
      }).join("")}</div></article>`;
    }).join("");
    return `<section class="subject-map" data-catalog="rated-questions" aria-label="المواد الدراسية">${subjects}</section>`;
  }
  const subjects = COURSE_SUBJECTS.map((subject) => subjectCardMarkup(subject, getSubjectCardPresentation(subject))).join("");
  return `<section class="subject-map" data-catalog="learn" aria-label="المواد الدراسية">${subjects}</section>`;
}

export function updateSubjectCards(container, snapshot) {
  container.querySelectorAll(".subject-card:not(.subject-card--rated)").forEach((card) => {
    const subject = COURSE_SUBJECTS.find(({ id }) => id === card.dataset.subject);
    if (!subject) return;
    const view = getSubjectCardPresentation(subject, snapshot);
    const progress = card.querySelector("[data-subject-progress]");
    if (progress) {
      progress.style.setProperty("--subject-progress", view.progress);
      progress.dataset.labelCovered = String(isProgressLabelCovered(view.progress, 100));
    }
    const count = card.querySelector("[data-subject-count]");
    if (count) count.textContent = `${view.completedCount} / ${view.totalCount}`;
    card.dataset.status = view.state;
    card.setAttribute("aria-label", view.label);
  });
}

// Refresh counts in place: replacing the cards restarts their entrance animation
// and removes keyboard focus whenever progress synchronization reports a status.
export function updateRatedSubjectCards(container, questionFeedback) {
  for (const card of container.querySelectorAll(".subject-card--rated")) {
    const questions = getRatedSubjectQuestions(card.dataset.subject, questionFeedback);
    for (const { value, label } of QUESTION_RATINGS) {
      const button = card.querySelector(`[data-rating="${value}"]`);
      const count = String(questions.filter(question => question.rating === value).length);
      const number = button?.querySelector("[data-rating-count]");
      if (number && number.textContent !== count) {
        number.textContent = count;
        number.style.setProperty("--rating-count-digits", String(count.length));
        button.setAttribute("aria-label", `${label}، ${count} سؤالًا`);
      }
    }
  }
}

export function renderCourseMap(container, { ratedQuestions = false, snapshot = undefined, questionFeedback } = {}) {
  const markup = renderCourseMapMarkup({ ratedQuestions,questionFeedback });
  const current = container.querySelector(".subject-map");
  if (current) current.outerHTML = markup;
  else container.innerHTML = markup;
  if (!ratedQuestions && snapshot) updateSubjectCards(container, snapshot);
}
