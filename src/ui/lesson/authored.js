import { mountQuestionNavigation } from "./question-navigation.js";
import { animateView } from "../view-motion.js";
import {
  showDailyStreak,
  renderSubjectCompletion,
  animateSubjectCompletion,
  preloadCompletionMedia,
} from "../subject-completion.js";
import { escapeHtml } from "../../lib/dom.js";
import {
  mountMarkdownFeatures,
  renderMarkdownDocument,
} from "../../markdown/renderer.js";
import { getLessonUiCopy } from "../lesson-ui-copy.js";
import {
  mountTemplateEnterShortcut,
  mountTemplateContentZoom,
  mountTemplateScrollIndicator,
  renderTemplateFooter,
  renderTemplateShell,
} from "../template-shell.js";
import { renderQuestion } from "./question.js";
import { lessonLocale, lessonReferenceLabel } from "./shared.js";
import { renderRockyDialogue, mountRockyDialogues, playRockyDialogue } from "./rocky-dialogue.js";
import { renderVideoIntro, mountVideoIntro } from "./video-intro.js";
import { mountVideoTour } from "./video-tour.js";
import { enhanceLessonSummary } from "./lesson-summary.js";
import { revealWhenReady, preloadImages } from "../media-ready.js";
import { preloadNextStep } from "./media.js";
import { renderMistakeReviewIntro } from "./mistake-review.js";
import { renderExamQuestion } from "./exam-question.js";
import { mountMathQuestionFilter } from "./math-question-filter.js";
import { selectLessonDemo } from "../../domain/lesson-demo.js";
import { mountQuestionFeedback } from "../question-feedback.js";
import { mountQuestionExplanation } from "./question-explanation.js";

/** @param {import("../lesson-view.js").LessonOptions} [options] @returns {import("../../app/view-lifecycle.js").Cleanup} */
export function renderAuthoredInteractiveLesson(
  container,
  day,
  lesson,
  authoredSteps,
  options = {},
) {
  const {
    progress,
    onProgress,
    isLessonPart = false,
    onAnswer,
    beforeAnswer,
    beforeQuestionNavigation,
    getNavigationStatus,
    subscribeNavigation,
    subscribeRewards,
    initialQuestionId,
    reviewStepId,
    onReviewComplete,
    getCompletionOutcome,
    onExitLesson,
    onFinishLesson,
    onReturnHome,
    getMathFilterCatalog,
    mathFilterState,
    onMathFilterApply,
    demoMode = false,
    onLessonEvent,
    deferDailyStreak,
    getQuestionFeedback,
    getQuestionExplanation,
    questionFilterIds,
  } = options;
  const shell = container.closest(".lesson-shell") || container;
  const demo = demoMode ? selectLessonDemo(authoredSteps, {
    firstMcq:shell.dataset.subject === "ict",
    preserveTypes:shell.dataset.subject?.startsWith("adabi-"),
  }) : null;
  if (demo) authoredSteps = demo.steps;
  const questionFeedbackFor = id => getQuestionFeedback?.(demo?.sources.get(id)?.stepId || id);
  const controller = new AbortController();
  const { signal } = controller;
  const reference = lessonReferenceLabel(day);
  const locale = lessonLocale(lesson);
  const copy = getLessonUiCopy(locale);
  const backButton = shell.querySelector(".lesson-back");
  const topProgress = shell.querySelector(".lesson-top-title");
  const lessonStatus = shell.querySelector(".lesson-status");
  const previousChrome = {
    backMarkup: backButton?.innerHTML,
    backClose: backButton?.classList.contains("app-close"),
    backLabel: backButton?.getAttribute("aria-label"),
    statusHidden: lessonStatus?.hidden,
    progressHidden: topProgress?.hidden,
    progressRole: topProgress?.getAttribute("role"),
    progressLabel: topProgress?.getAttribute("aria-label"),
  };
  const stepIds = new Set(authoredSteps.map((step) => step.id));
  const unfilteredSteps = authoredSteps;
  let activeFilterIds;
  const isHidden = step => step.type !== "markdown" && questionFeedbackFor(step.id)?.isHidden?.();
  const hasHiddenQuestions = () => unfilteredSteps.some(isHidden);
  const applyStepFilter = (ids) => {
    activeFilterIds = ids;
    const allowed = ids ? new Set(ids) : null;
    authoredSteps = unfilteredSteps.filter(step => !isHidden(step)
      && (step.type === "markdown" || !allowed || allowed.has(step.id)));
  };
  applyStepFilter(demoMode ? undefined : questionFilterIds || mathFilterState?.stepIds);
  let questionSteps = authoredSteps.filter((step) => step.type !== "markdown");
  // Keep published IDs and source indexes stable while presenting adjacent teaching
  // steps on one screen, including old resumes saved between the two steps.
  const inlineSummaryAt = (index) => authoredSteps[index]?.presentation === "video-intro"
    && authoredSteps[index + 1]?.presentation === "lesson-summary"
    ? authoredSteps[index + 1] : null;
  const visibleIndex = (index) => inlineSummaryAt(index - 1) ? index - 1 : index;
  const completed = new Set(
    (progress?.completedStepIds || []).filter((id) => stepIds.has(id)),
  );
  const attempted = new Set([...(progress?.attemptedStepIds || []),...(progress?.completedStepIds || [])]);
  let currentIndex = Math.max(
    0,
    authoredSteps.findIndex((step) => !completed.has(step.id)),
  );
  if (!reviewStepId && initialQuestionId && authoredSteps.some(step => step.id === initialQuestionId))
    currentIndex = authoredSteps.findIndex(step => step.id === initialQuestionId);
  const reviewTargetIndex = reviewStepId ? authoredSteps.findIndex((step) => step.id === reviewStepId) : -1;
  let reviewOpeningIndex = -1;
  if (reviewTargetIndex >= 0) {
    currentIndex = reviewTargetIndex;
    for (let index = reviewTargetIndex - 1; index >= 0; index -= 1) {
      if (authoredSteps[index].type === "markdown") {
        reviewOpeningIndex = visibleIndex(index);
        currentIndex = reviewOpeningIndex;
        break;
      }
    }
  }
  let resultVisible =
    Boolean(progress?.completedAt) &&
    authoredSteps.every((step) => completed.has(step.id));
  const videoTourIndex = reviewStepId ? -1
    : authoredSteps.findIndex(step => step.id === "database-management-mission");
  // Show the guide independently of lesson progress, then restore the saved place.
  const tourResume = videoTourIndex >= 0 ? { index:visibleIndex(currentIndex), resultVisible } : null;
  if (tourResume) {
    currentIndex = videoTourIndex;
    resultVisible = false;
  }
  let destroyStep = () => {};
  let destroyMathQuestionFilter = () => {};
  let renderedStep = false;
  let videoTourShown = false;
  let activeStarted = document.hidden ? null : performance.now();
  let activeElapsedMs = 0;
  const pauseLessonClock = () => {
    if (activeStarted !== null) activeElapsedMs += performance.now() - activeStarted;
    activeStarted = null;
  };
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseLessonClock();
    else if (!resultVisible && activeStarted === null) activeStarted = performance.now();
  }, { signal });
  let answerCount = 0;
  let correctCount = 0;
  let answerRun = 0;
  let bestAnswerRun = 0;
  let sessionElapsed = null;
  let resultPending = false;
  let endingSession = false;
  let saveCurrentAssessment;
  const pendingAnswers = [];
  const mistakes = new Set((progress?.mistakeStepIds || []).filter((id) => stepIds.has(id)));
  const scoredQuestions = new Set();
  let reviewQueue = [];
  let reviewIndex = -1;
  let navigationPending = false;

  document.body.classList.add(
    "ui-lab-open",
    "ui-lab-template-open",
    "ready-lesson-open",
  );
  shell.classList.add("lesson-shell--ui-lab", "lesson-shell--ready-lesson");
  container.classList.add("lesson-card--ui-lab", "lesson-card--ready-lesson");
  backButton.textContent = "×";
  backButton.classList.add("app-close");
  backButton.setAttribute("aria-label", isLessonPart && !demoMode ? (locale === "ar" ? "إنهاء الجلسة" : "End session") : copy.closeLesson);
  lessonStatus.hidden = true;
  topProgress.setAttribute("role", "progressbar");
  topProgress.setAttribute(
    "aria-label",
    locale === "ar" ? `تقدّم درس ${lesson.title}` : `${lesson.title} progress`,
  );
  topProgress.setAttribute("aria-valuemin", "0");
  topProgress.setAttribute("aria-valuemax", String(questionSteps.length));

  const announce = (isComplete = false) => {
    const ids = demo ? [...new Set([...completed].flatMap(id => {
      const source = demo.sources.get(id);
      return source?.save ? [source.stepId] : [];
    }))] : [...completed];
    return onProgress?.({ completedStepIds:ids, isComplete });
  };
  const saveAnswer = async (answer) => {
    const source = demo?.sources.get(answer.stepId);
    const value = source ? { ...answer,stepId:source.stepId,correct:source.type === "exam-question" ? null : answer.correct } : answer;
    const saving = source && !source.save ? undefined : onAnswer?.(value);
    if (saving?.then) pendingAnswers.push(saving);
    const celebrate = result => {
      if (demoMode || !result?.dailyStreak) return;
      // A flashcard can commit its assessment while End session is saving.
      // Capture onboarding's earned streak before suppressing lesson overlays.
      if (deferDailyStreak?.(result.dailyStreak)) return;
      if (!signal.aborted && !resultVisible && !endingSession) showDailyStreak(shell, result.dailyStreak, signal);
    };
    const confirmed = saved => {
      if (saved?.status === 'failed') return saved.retry ? { ...saved, retry:async () => {
        const retrying = saved.retry();
        pendingAnswers.push(retrying);
        return confirmed(await retrying);
      } } : saved;
      if (signal.aborted) return saved;
      if (typeof answer.correct === "boolean") { attempted.add(answer.stepId);updateProgress(); }
      if (!answer.reviewing && typeof answer.correct === "boolean" && !scoredQuestions.has(answer.stepId)) {
        scoredQuestions.add(answer.stepId);
        answerCount += 1;
        if (answer.correct) correctCount += 1;
        else mistakes.add(answer.stepId);
        answerRun = answer.correct ? answerRun + 1 : 0;
        bestAnswerRun = Math.max(bestAnswerRun, answerRun);
      }
      celebrate(saved);
      if (saved?.whenSynced) void saved.whenSynced.then(celebrate);
      return saved;
    };
    return confirmed(await saving);
  };
  const focusHost = () =>
    window.requestAnimationFrame(() => {
      if (signal.aborted) return;
      const host = container.querySelector("[data-live-authored-step]");
      if (host?.contains(document.activeElement)) return;
      host?.focus({ preventScroll: true });
    });
  const updateProgress = () => {
    shell.classList.toggle(
      "lesson-shell--completion",
      isLessonPart && resultVisible,
    );
    const currentStep = authoredSteps[currentIndex];
    const questionIndex = questionSteps.indexOf(currentStep);
    const showingQuestion = !resultVisible && questionIndex >= 0;
    shell.classList.toggle("lesson-shell--pre-quiz", !resultVisible && !showingQuestion);
    topProgress.hidden = resultVisible || !showingQuestion;
    const reviewing = reviewIndex >= 0;
    const total = questionSteps.length;
    const value = questionSteps.filter(step => attempted.has(step.id)).length;
    topProgress.setAttribute("aria-valuemax", String(total));
    topProgress.setAttribute("aria-label", reviewing ? (locale === "ar" ? "مراجعة الأخطاء" : "Mistake review") : (locale === "ar" ? `تقدّم درس ${lesson.title}` : `${lesson.title} progress`));
    topProgress.setAttribute("aria-valuenow", String(value));
    shell.style.setProperty(
      "--lesson-progress",
      `${total ? (value / total) * 100 : 0}%`,
    );
    document.body.classList.toggle(
      "ui-lab-mcq-open",
      !resultVisible && authoredSteps[currentIndex]?.type === "mcq",
    );
  };
  const renderResult = async ({ sessionEnded = false } = {}) => {
    if (sessionEnded && answerCount === 0 && pendingAnswers.length === 0) {
      (onExitLesson || onFinishLesson)?.();
      return;
    }
    resultPending = true;
    container.classList.remove("lesson-card--instant-entry");
    if (sessionElapsed === null && !resultVisible) {
      pauseLessonClock();
      sessionElapsed = Math.floor(activeElapsedMs / 1000);
    }
    resultVisible = true;
    {
      // Only visited questions are completed; a display filter never solves hidden questions.
      const saving = announce(!sessionEnded);
      if (saving?.then || pendingAnswers.length) {
        destroyStep(); destroyStep=()=>{};
        container.innerHTML='<p class="app-loading" role="status">جارٍ حفظ تقدّمك…</p>';
        await Promise.all([...pendingAnswers, saving]);
        if(signal.aborted) return;
      }
    }
    const outcome = { ...getCompletionOutcome?.(), demoMode, sessionEnded, accuracy: answerCount ? Math.round(correctCount / answerCount * 100) : null, perfect:answerCount > 0 && correctCount === answerCount, answerCount, bestAnswerRun, elapsedSeconds: sessionElapsed };
    resultPending = false;
    if (demoMode) outcome.lessonShare = outcome.progressGain;
    destroyStep();
    destroyStep = () => {};
    const renderCompletionStep = () => {
      destroyStep();
      const subjectContent =
        isLessonPart && outcome
          ? renderSubjectCompletion(reference, outcome)
          : null;
      const primaryLabel = demoMode ? "شاهد تقدّمك" : "العودة لخريطة الدروس";
      const content =
        isLessonPart && outcome
          ? subjectContent
          : `<div class="level-lesson-copy ready-lesson-result"><p class="level-layout-kicker">${locale === "ar" ? "اكتمل الدرس" : "LESSON COMPLETE"}</p><h1 id="authored-lesson-complete-title">${locale === "ar" ? `أكملت ${escapeHtml(reference)}` : `You completed ${escapeHtml(reference)}`}</h1><p>${locale === "ar" ? "أنهيت هذا الدرس وخطواته التفاعلية." : "You completed this lesson and its interactive steps."}</p></div>`;
      container.innerHTML = `<article class="lesson-flow ready-lesson-flow"><section class="ready-lesson-stage" data-live-authored-step tabindex="-1" data-completion-step="0">${renderTemplateShell(
        {
          titleId: "authored-lesson-complete-title",
          content,
          footer: renderTemplateFooter({
            locale,
            showShortcut: !isLessonPart,
            backLabel: isLessonPart
              ? sessionEnded ? "متابعة التعلّم" : "رجوع"
              : locale === "ar"
                  ? "مراجعة الدرس"
                  : "REVIEW LESSON",
            backAttributes: {
              "data-authored-review": true,
              hidden: false,
            },
            primaryLabel: isLessonPart
              ? primaryLabel
              : locale === "ar"
                ? "إعادة الدرس"
                : "RESTART",
            primaryAttributes: { "data-authored-restart": true },
          }),
          showScrollIndicator: false,
          locale,
        },
      )}</section></article>`;
      const secondary = container.querySelector("[data-authored-review]");
      secondary.before(container.querySelector("[data-authored-restart]"));
      secondary.addEventListener(
        "click",
        () => {
          if (!isLessonPart) {
            resultVisible = false;
            reviewIndex = -1;
            currentIndex = 0;
            renderCurrent();
            return;
          }
          resultVisible = false;
          sessionElapsed = null;
          if (!document.hidden) activeStarted = performance.now();
          renderCurrent();
        },
        { signal },
      );
      container.querySelector("[data-authored-restart]").addEventListener(
        "click",
        () => {
          if (!isLessonPart) {
            completed.clear();
            mistakes.clear();
            scoredQuestions.clear();
            reviewQueue = [];
            reviewIndex = -1;
            resultVisible = false;
            currentIndex = 0;
            announce(false);
            renderCurrent();
            return;
          }
          (onFinishLesson || onExitLesson)?.();
        },
        { signal },
      );
      let stopAnimation = () => {};
      const stopReadiness = revealWhenReady(container, {
        signal,
        onReady() {
          onLessonEvent?.({ type:"complete" });
          stopAnimation =
            isLessonPart && outcome
              ? animateSubjectCompletion(container)
              : () => {};
          focusHost();
        },
      });
      destroyStep = () => {
        stopReadiness();
        stopAnimation();
      };
      updateProgress();
    };
    renderCompletionStep();
  };
  const goBack = () => {
    if (navigationPending) return;
    if (reviewIndex >= 0) return;
    if (currentIndex === 0) return;
    currentIndex = currentIndex === reviewTargetIndex && reviewOpeningIndex >= 0
      ? reviewOpeningIndex : visibleIndex(currentIndex - 1);
    renderCurrent('jump');
  };
  const endSession = async () => {
    if (endingSession || resultPending) return;
    endingSession = true;
    container.inert = true;
    try {
      // Ending a session commits the selected written assessment just like
      // Continue. Both actions share one save, including its retained retry ID.
      if (await saveCurrentAssessment?.() === false || signal.aborted) return;
      await renderResult({ sessionEnded:true });
    } finally { endingSession = false; container.inert = false; }
  };
  const exitFromOpening = () => {
    if (isLessonPart && !demoMode) void endSession();
    else if (onExitLesson) onExitLesson();
    else backButton?.click();
  };
  backButton.addEventListener("click", (event) => {
    if (navigationPending) { event.stopImmediatePropagation(); return; }
    if (!isLessonPart || demoMode || resultVisible && !resultPending) return;
    event.stopImmediatePropagation();
    if (!questionSteps.length && hasHiddenQuestions()) { (onExitLesson || onFinishLesson)?.(); return; }
    if (!resultVisible) void endSession();
  }, { capture:true, signal });
  const finishQuestions = () => {
    if (demoMode) { void renderResult(); return; }
    reviewQueue = authoredSteps.filter((step) => step.type === "mcq" && mistakes.has(step.id));
    if (!reviewQueue.length || reviewStepId) { void renderResult(); return; }
    destroyStep();
    topProgress.hidden = true;
    document.body.classList.remove("ui-lab-mcq-open");
    destroyStep = renderMistakeReviewIntro(container, { locale, onContinue() {
      reviewIndex = 0;
      currentIndex = authoredSteps.indexOf(reviewQueue[0]);
      renderCurrent();
    } });
  };
  const goNext = () => {
    if (navigationPending || endingSession) return false;
    if (reviewIndex >= 0) {
      if (reviewIndex + 1 === reviewQueue.length) { void renderResult(); return; }
      reviewIndex += 1;
      currentIndex = authoredSteps.indexOf(reviewQueue[reviewIndex]);
      return renderCurrent('continue');
    }
    if (reviewStepId === authoredSteps[currentIndex].id) {
      onReviewComplete?.();
      return;
    }
    completed.add(authoredSteps[currentIndex].id);
    const inlineSummary = inlineSummaryAt(currentIndex);
    if (inlineSummary) completed.add(inlineSummary.id);
    const nextIndex = currentIndex === reviewOpeningIndex
      ? reviewTargetIndex : currentIndex + (inlineSummary ? 2 : 1);
    if (nextIndex >= authoredSteps.length) {
      finishQuestions();
      return;
    }
    announce(false);
    currentIndex = nextIndex;
    return renderCurrent('continue');
  };
  const hideCurrent = (step) => {
    const nextIds = authoredSteps.slice(currentIndex + 1).map(item => item.id);
    applyStepFilter(activeFilterIds);
    questionSteps = authoredSteps.filter(item => item.type !== "markdown");
    resultVisible = false;
    mistakes.delete(step.id);
    reviewQueue = reviewQueue.filter(item => !isHidden(item));
    if (!questionSteps.length) { reviewIndex = -1; renderCurrent(); return; }
    if (reviewStepId === step.id) { (onReviewComplete || onExitLesson)?.(); return; }
    const next = reviewIndex >= 0 ? reviewQueue[reviewIndex]
      : authoredSteps.find(item => nextIds.includes(item.id));
    if (!next) { (onExitLesson || onFinishLesson)?.(); return; }
    currentIndex = authoredSteps.indexOf(next);
    renderCurrent();
  };
  let navigationSequence = 0;
  let displayedIndex = null;
  let displayedSteps, displayedQuestions, displayedFilter;
  let displayedReviewIndex, displayedReviewQueue, displayedResult;
  const rememberDisplayed = () => {
    displayedIndex = currentIndex;
    displayedSteps = authoredSteps; displayedQuestions = questionSteps; displayedFilter = activeFilterIds;
    displayedReviewIndex = reviewIndex; displayedReviewQueue = reviewQueue; displayedResult = resultVisible;
  };
  const renderCurrent = (kind = 'enter') => {
    const sequence = ++navigationSequence;
    const targetIndex = visibleIndex(currentIndex);
    const target = authoredSteps[targetIndex];
    if (!beforeQuestionNavigation || demoMode || !target || target.type === 'markdown') {
      navigationPending = false;
      container.inert = false;
      container.removeAttribute('aria-busy');
      renderCurrentContent();
      rememberDisplayed();
      return true;
    }
    navigationPending = true;
    shell.querySelector('[data-navigation-error]')?.remove();
    container.inert = true;
    container.setAttribute('aria-busy','true');
    return beforeQuestionNavigation(target.id,{kind,signal}).then(() => {
      if (signal.aborted || sequence !== navigationSequence) return false;
      currentIndex = targetIndex;
      renderCurrentContent();
      rememberDisplayed();
      return true;
    }).catch(error => {
      if (signal.aborted || sequence !== navigationSequence) return false;
      // Keep the exact current card when a jump is denied. Deep links are
      // authorized before any question is rendered, so reloading cannot reset skips.
      if (displayedIndex !== null) {
        currentIndex = displayedIndex;
        authoredSteps = displayedSteps; questionSteps = displayedQuestions; activeFilterIds = displayedFilter;
        reviewIndex = displayedReviewIndex; reviewQueue = displayedReviewQueue; resultVisible = displayedResult;
      }
      else if (authoredSteps.some(step => step.id === error.currentStepId)) {
        currentIndex = authoredSteps.findIndex(step => step.id === error.currentStepId);
        void renderCurrent('enter');
      }
      else {
        const returnHome = error.code === 'connection-required';
        container.innerHTML = `<section class="question-hidden-empty" dir="rtl"><p role="status" hidden>تعذّر فتح هذا السؤال. حسابك وتقدّمك محفوظان.</p><button class="system-action" data-navigation-return>${returnHome ? 'العودة إلى الرئيسية' : 'العودة لمسار المادة'}</button></section>`;
        container.querySelector('[data-navigation-return]').addEventListener('click',() =>
          (returnHome ? onReturnHome || onExitLesson || onFinishLesson : onExitLesson || onFinishLesson)?.(),{signal});
      }
      if (!['connection-required','navigation-limit','super-required'].includes(error.code)) {
        const notice = document.createElement('p');
        notice.dataset.navigationError = '';
        notice.className = 'level-feedback';
        notice.setAttribute('role','alert');
        notice.textContent = 'تعذّر تأكيد الطلب من الخادم. حاول مجددًا.';
        container.append(notice);
      }
      return false;
    }).finally(() => {
      if (!signal.aborted && sequence === navigationSequence) {
        navigationPending = false;
        container.inert = false;
        container.removeAttribute('aria-busy');
      }
    });
  };
  const renderCurrentContent = () => {
    destroyStep();
    destroyStep = () => {};
    saveCurrentAssessment = undefined;
    const instantEntry = !renderedStep && isLessonPart;
    renderedStep = true;
    container.classList.toggle("lesson-card--instant-entry", instantEntry);
    if (!questionSteps.length && hasHiddenQuestions()) {
      resultVisible = false;
      updateProgress();
      topProgress.hidden = true;
      container.innerHTML = `<section class="question-hidden-empty" dir="${locale === "ar" ? "rtl" : "ltr"}"><p role="status">${locale === "ar" ? "لا توجد أسئلة ظاهرة في هذا الدرس." : "There are no visible questions in this lesson."}</p><button type="button" class="system-action system-action--primary" data-hidden-exit>${locale === "ar" ? "العودة لمسار المادة" : "Return to the subject"}</button></section>`;
      const exit = container.querySelector("[data-hidden-exit]");
      exit.addEventListener("click", () => (onExitLesson || onFinishLesson)?.(), { signal });
      exit.focus({ preventScroll:true });
      return;
    }
    currentIndex = visibleIndex(currentIndex);
    const step = authoredSteps[currentIndex];
    if (!step) {
      updateProgress();
      topProgress.hidden = false;
      container.innerHTML = '<p class="math-question-filter-empty">لا توجد أسئلة إضافية في هذا الدرس بعد التصفية. يمكنك إيقاف التصفية من زر القمع.</p>';
      return;
    }
    const inlineSummary = inlineSummaryAt(currentIndex);
    if (currentIndex >= authoredSteps.length - 2) preloadCompletionMedia();
    let host = container.querySelector("[data-live-authored-step]");
    const keepQuestionShell = step.type !== "markdown" && Boolean(host?.querySelector(".level-layout-preview")) && Boolean(host?.dataset.lessonStep);
    if (!keepQuestionShell) {
      container.innerHTML = '<article class="lesson-flow ready-lesson-flow"><section class="ready-lesson-stage" data-live-authored-step tabindex="-1"></section></article>';
      host = container.querySelector("[data-live-authored-step]");
    }
    delete host.dataset.mistakeReview;
    delete host.dataset.lessonPresentation;
    host.dataset.lessonStep = step.id;
    if (reviewIndex >= 0) host.dataset.mistakeReview = "";
    if (step.presentation) host.dataset.lessonPresentation = step.presentation;
    host.lang = locale;
    host.dir = locale === "ar" ? "rtl" : "ltr";
    if (!instantEntry && !keepQuestionShell) animateView(container);
    updateProgress();
    if (step.type === "markdown") {
      const stepController = new AbortController();
      const titleId = `authored-lesson-title-${step.id}`;
      const canExitOpening = currentIndex === 0 && ["video-intro", "rocky-dialogue"].includes(step.presentation);
      host.innerHTML = renderTemplateShell({
        titleId,
        showScrollIndicator: step.presentation !== "video-intro",
        content: step.presentation === "rocky-dialogue"
          ? renderRockyDialogue(step, { titleId, locale })
          : step.presentation === "video-intro"
            ? renderVideoIntro(step, { titleId, locale, summaryStep: inlineSummary })
            : `<article class="level-lesson-copy ready-lesson-copy markdown-authored-content">${step.presentation === "lesson-summary" ? "" : `<p class="level-layout-kicker">${locale === "ar" ? "تعلّم" : "LEARN"}</p>`}<div class="markdown-rendered">${renderMarkdownDocument(step.source, { locale })}</div></article>`,
        footer: renderTemplateFooter({
          locale,
          showShortcut: step.presentation !== "video-intro",
          backLabel: step.presentation === "video-intro" || canExitOpening
            ? (locale === "ar" ? "رجوع" : "BACK")
            : undefined,
          backAttributes: {
            disabled: currentIndex === 0 && !canExitOpening,
            hidden: currentIndex === 0 && !canExitOpening,
          },
          primaryLabel: step.presentation === "video-intro"
            ? inlineSummary
              ? (locale === "ar" ? "ابدأ الأسئلة" : "START QUESTIONS")
              : copy.continue
            : authoredSteps[currentIndex + 1]?.type !== "markdown"
              ? (locale === "ar" ? "ابدأ الأسئلة" : "START QUESTIONS")
              : copy.continue,
        }),
        locale,
      });
      const renderedHeading = step.presentation !== "video-intro" && host.querySelector(".markdown-authored-content h1");
      if (renderedHeading) renderedHeading.id = titleId;
      else if (step.presentation !== "video-intro")
        host
          .querySelector(".markdown-authored-content")
          ?.insertAdjacentHTML(
            "afterbegin",
            `<h1 class="visually-hidden" id="${escapeHtml(titleId)}">${escapeHtml(step.title)}</h1>`,
          );
      if (step.presentation === "lesson-summary") {
        enhanceLessonSummary(host, { titleId, locale, signal: stepController.signal });
      }
      if (inlineSummary) {
        const summaryHost = host.querySelector("[data-inline-summary-step]");
        enhanceLessonSummary(summaryHost, { titleId: `${titleId}-summary`, locale, signal: stepController.signal });
      }
      if (step.presentation === "video-intro") {
        mountVideoIntro(host, { signal: stepController.signal, locale });
      }
      mountMarkdownFeatures(host, {
        locale,
        signal: stepController.signal,
        scrollSurface: host.querySelector(".level-layout-task"),
      });
      mountTemplateScrollIndicator(host, { signal:stepController.signal });
      mountRockyDialogues(container, stepController.signal);
      revealWhenReady(host, {
        signal: stepController.signal,
        animate:!instantEntry,
        onReady() {
          playRockyDialogue(container, host, stepController.signal);
          preloadNextStep(authoredSteps[currentIndex + (inlineSummary ? 2 : 1)]);
          preloadImages(["assets/mascot/rocky-standing-still.svg"]);
          focusHost();
          if (currentIndex === videoTourIndex && !videoTourShown) {
            videoTourShown = true;
            void Promise.allSettled(host.getAnimations().map(animation => animation.finished)).then(() => {
              if (stepController.signal.aborted) return;
              const shouldResume = tourResume.index !== videoTourIndex || tourResume.resultVisible;
              mountVideoTour(host, {
                signal:stepController.signal, locale,
                finishLabel:shouldResume ? (locale === "ar" ? "متابعة الدرس" : "Resume lesson") : undefined,
                onFinish() {
                  if (navigationPending) return;
                  if (!shouldResume) return;
                  currentIndex = tourResume.index;
                  resultVisible = tourResume.resultVisible;
                  if (resultVisible) void renderResult();
                  else renderCurrent();
                },
              });
            });
          }
        },
      });
      host
        .querySelector("[data-template-back]")
        .addEventListener("click", canExitOpening ? exitFromOpening : goBack, { signal: stepController.signal });
      host
        .querySelector("[data-template-primary]")
        .addEventListener("click", goNext, { signal: stepController.signal });
      destroyStep = () => stepController.abort();
      return;
    }
    if (step.type === "exam-question") {
      const examController = new AbortController();
      const destroyExam = renderExamQuestion(host, step, { locale, onBack:goBack, selfCheck:!demoMode, beforeAnswer,
        registerSessionSave:save => { saveCurrentAssessment = save; },
        onAssess:({ correct }) => {
          void Promise.resolve(questionFeedbackFor(step.id)?.saveRating(correct ? "easy" : "hard", { automatic:true })).catch(() => {});
          onLessonEvent?.({ type:"answer",step,correct });
        },
        onAnswer:({ correct }) => {
          return saveAnswer({ stepId:step.id, correct, reviewing:reviewIndex >= 0 });
        }, onContinue() {
          if (demoMode) void saveAnswer({ stepId:step.id, correct:null });
          return goNext();
        }, onReveal:() => onLessonEvent?.({ type:"reveal",step }), onFlip:({revealed}) => onLessonEvent?.({type:"flip",step,revealed}) });
      mountQuestionFeedback({ host,shell,onReportOpen:() => onLessonEvent?.({type:"report"}),feedback:questionFeedbackFor(step.id),signal:examController.signal,locale,onHidden:() => hideCurrent(step) });
      mountQuestionExplanation({host,onOpen:() => onLessonEvent?.({type:"explanation",step}),explanation:demoMode ? null : getQuestionExplanation?.(step),locale,signal:examController.signal});
      const back = host.querySelector("[data-template-back]");
      back.disabled = currentIndex === 0;
      back.hidden = currentIndex === 0;
      const stopReadiness = revealWhenReady(host, { signal:examController.signal, animate:!instantEntry && !keepQuestionShell, onReady:focusHost });
      destroyStep = () => { examController.abort(); stopReadiness(); destroyExam(); };
      onLessonEvent?.({ type:"question",step });
      return;
    }
    const questionController = new AbortController();
    const destroyQuestion = renderQuestion(host, {
      definition: step,
      beforeAnswer,
      onBack: goBack,
      onContinue: goNext,
      onAnswer: (result) => {
        const saving = saveAnswer({ ...result, stepId: step.id, reviewing: reviewIndex >= 0 });
        void Promise.resolve(saving).then(saved => {
          if (!questionController.signal.aborted && saved?.status !== "failed") onLessonEvent?.({ type:"answer",step,correct:result.correct });
        },()=>{}); // The question controls show save failures; coaching stays quiet.
        return saving;
      },
      locale,
    });
    mountQuestionFeedback({ host,shell,onReportOpen:() => onLessonEvent?.({type:"report"}),feedback:questionFeedbackFor(step.id),signal:questionController.signal,locale,onHidden:() => hideCurrent(step) });
    mountQuestionExplanation({host,onOpen:() => onLessonEvent?.({type:"explanation",step}),explanation:demoMode ? null : getQuestionExplanation?.(step),locale,signal:questionController.signal});
    revealWhenReady(host.querySelector(".level-layout-task"), { signal:questionController.signal, animate:!instantEntry });
    destroyStep = () => { questionController.abort(); destroyQuestion(); };
    const stepBackButton = host.querySelector("[data-template-back]");
    stepBackButton.disabled = currentIndex === 0 || reviewIndex >= 0;
    stepBackButton.hidden = currentIndex === 0 || reviewIndex >= 0;
    focusHost();
    onLessonEvent?.({ type:"question",step });
  };

  destroyMathQuestionFilter = mountMathQuestionFilter({
    shell,
    locale,
    signal,
    getCatalog:demoMode ? undefined : getMathFilterCatalog,
    initialState:mathFilterState,
    onApply(selection) {
      if (navigationPending) return false;
      const currentId = authoredSteps[currentIndex]?.id;
      const ids = onMathFilterApply?.(selection);
      if (signal.aborted) return;
      applyStepFilter(ids);
      questionSteps = authoredSteps.filter(step => step.type !== "markdown");
      resultVisible = false;
      reviewIndex = -1;
      reviewQueue = [];
      currentIndex = Math.max(0, authoredSteps.findIndex(step => step.id === currentId));
      return renderCurrent('jump');
    },
  });
  const destroyQuestionNavigation = demoMode ? () => {} : mountQuestionNavigation({
    shell,signal,locale,getQuestions:() => questionSteps,
    getCurrentId:() => resultVisible ? null : container.querySelector('[data-live-authored-step]')?.dataset.lessonStep || authoredSteps[currentIndex]?.id,
    getRating:id => questionFeedbackFor(id)?.getRating(),
    subscribe:listener => questionFeedbackFor(questionSteps[0]?.id)?.subscribe?.(listener),
    getNavigationStatus,subscribeNavigation,
    onSelect(id) {
      if (navigationPending) return;
      const index = authoredSteps.findIndex(step => step.id === id);
      if (index < 0) return;
      resultVisible = false;reviewIndex = -1;reviewQueue = [];currentIndex = index;
      renderCurrent('jump');
    },
  });
  mountTemplateEnterShortcut(container, { signal });
  mountTemplateContentZoom(container, { signal });
  const stopRewardUpdates = subscribeRewards?.(() => {
    const counter = container.querySelector('[data-session-gems]');
    if (counter) counter.textContent = String(getCompletionOutcome?.().gemGain || 0);
  });
  if (resultVisible && (questionSteps.length || !hasHiddenQuestions())) renderResult();
  else renderCurrent();
  return () => {
    stopRewardUpdates?.();
    container.inert = false;
    container.removeAttribute('aria-busy');
    shell.classList.remove("lesson-shell--completion");
    shell.classList.remove("lesson-shell--pre-quiz");
    destroyQuestionNavigation();
    destroyMathQuestionFilter();
    destroyStep();
    controller.abort();
    document.body.classList.remove(
      "ui-lab-open",
      "ui-lab-template-open",
      "ui-lab-mcq-open",
      "ready-lesson-open",
    );
    shell.classList.remove(
      "lesson-shell--ui-lab",
      "lesson-shell--ready-lesson",
    );
    shell.style.removeProperty("--lesson-progress");
    container.classList.remove(
      "lesson-card--ui-lab",
      "lesson-card--ready-lesson",
      "lesson-card--instant-entry",
    );
    backButton.innerHTML = previousChrome.backMarkup;
    backButton.classList.toggle("app-close",Boolean(previousChrome.backClose));
    if (previousChrome.backLabel === null)
      backButton.removeAttribute("aria-label");
    else backButton.setAttribute("aria-label", previousChrome.backLabel);
    lessonStatus.hidden = previousChrome.statusHidden;
    topProgress.hidden = previousChrome.progressHidden;
    ["aria-valuemin", "aria-valuemax", "aria-valuenow"].forEach((name) =>
      topProgress.removeAttribute(name),
    );
    if (previousChrome.progressRole === null)
      topProgress.removeAttribute("role");
    else topProgress.setAttribute("role", previousChrome.progressRole);
    if (previousChrome.progressLabel === null)
      topProgress.removeAttribute("aria-label");
    else topProgress.setAttribute("aria-label", previousChrome.progressLabel);
  };
}
