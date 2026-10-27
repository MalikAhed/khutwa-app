import { filterRatedRoadmap, getRatedSubjectQuestions } from "../domain/question-ratings.js";
import { mountRatedQuestionToggle } from "./rated-questions.js";
import { getCourseSubject } from "../data/course.js";
import { getSubjectRoadmap } from "../data/subject-roadmaps.js";
import { getIctPartQuestionIds } from "../data/lessons/ict/question-index.js";
import { getSubjectPartAccess } from "../domain/subject-access.js";
import { escapeHtml, prefersReducedMotion } from "../lib/dom.js";
import { renderLessonError } from "./lesson/status.js";
import { mountSubjectRoadmap } from "./subject-roadmap.js";
import { getShellViewportBounds } from "./app-shell.js";
import { mountHeartDepletion } from "./heart-depletion.js";
import { hasPackagedLessons, loadStreamedLesson } from "../services/lesson-content.js";


export function createSubjectLearningController({
  elements,
  productService,
  progressStore,
  resourceStore,
  onboardingTour,
  questionFeedback,
  appTitle,
  viewLifecycle,
  setViewMode,
  showContentView,
  writeRoute,
  onRequireAccount,
  onComingSoon,
  onReturnToRoadmap,
}) {
  const progressContext = () => ({ ownerId:productService.getLearnerProgressOwner(), store:progressStore });
  let selectedPartId = null;
  let mapScrollPosition = 0;
  let subjectId = null;
  let lessonId = null;
  let opener = null;
  let pathScrollPosition = 0;
  let reviewUnitId = null;
  let rating = null;
  // Display preferences stay separate from canonical question/progress records.
  const mathFilters = new Map();
  const mathFilterKey = (owner, subject, lesson) => JSON.stringify([owner, subject, lesson]);
  const requiresAccount = () => productService.getAccountType() === "guest";

  function reset() {
    rating = null;
    mathFilters.clear();
    reviewUnitId = null;
    selectedPartId = null;
    subjectId = null;
    lessonId = null;
    opener = null;
  }

  function getState() {
    return Object.freeze({ subjectId, lessonId, partId:selectedPartId, opener, pathScrollPosition, rating });
  }

  async function openSubject(
    nextSubjectId,
    nextOpener = null,
    { historyMode = "push", focusContent = false, restoreMap = false, lessonId:targetLessonId = null, partId:targetPartId = null, reviewStepId = null, explainPart = null, rating:targetRating = null } = {},
  ) {
    if (requiresAccount()) return onRequireAccount("register");
    const subject = getCourseSubject(nextSubjectId);
    if (!subject) return;
    if (targetLessonId === "course-introduction" && nextSubjectId === "ict") {
      targetLessonId = "database-management";
      targetPartId = "access-basics";
      historyMode = "replace";
    }
    rating = targetRating;
    if (targetLessonId && targetPartId) {
      return openLesson({ subjectId:subject.id, lessonId:targetLessonId, partId:targetPartId, reviewStepId, historyMode });
    }
    const operation = viewLifecycle.begin();
    if (nextOpener) {
      opener = nextOpener;
      pathScrollPosition = window.scrollY;
    }
    if (subjectId !== subject.id) reviewUnitId = null;
    subjectId = subject.id;
    lessonId = null;
    writeRoute({ subject:subject.id,...(rating ? {page:"rated-questions",rating} : {}) }, historyMode);
    setViewMode("subject");
    elements.lessonShell.dataset.subject = subject.id;
    elements.lessonTitle.textContent = subject.name;
    elements.lessonStatus.textContent = rating ? "أسئلتي المقيّمة" : "مسار المادة";
    elements.lessonContent.removeAttribute("aria-busy");
    const roadmap = getSubjectRoadmap(subject.id);
    const { ownerId, store } = progressContext();
    if (store.getSaveState(ownerId) === "loading") {
      elements.lessonContent.innerHTML = "";
      showContentView();
      await store.ready(ownerId);
      if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
    }
    await questionFeedback?.ready?.({ signal:operation.signal });
    if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
    const ratedQuestions = rating ? getRatedSubjectQuestions(subject.id,questionFeedback) : [];
    const displayedRoadmap = rating && roadmap ? filterRatedRoadmap(roadmap,ratedQuestions,rating) : roadmap;
    let mountedRoadmap = null;
    if (roadmap) {
      const getPartQuestionIds = subject.id === "ict"
        ? (_lesson, part) => getIctPartQuestionIds(part.id)
        : roadmap.questionsOnly ? (_lesson, part) => part.questionIds || [] : undefined;
      if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
      mountedRoadmap = mountSubjectRoadmap({
          container: elements.lessonContent,
          roadmap:displayedRoadmap,
          onComingSoon,
          getPartQuestionIds,
          initialReviewUnit:reviewUnitId,
          onReviewTabChange:(unitId) => { reviewUnitId = unitId; },
          getPartProgress: (lesson, part) => {
            const key = { ownerId, subjectId:subject.id, lessonId:lesson.id, partId:part.id };
            return rating ? store.getRatedProgress(key, rating) : { ...store.get(key), review:store.getReview(key) };
          },
          getPartReview: (lesson, part) =>
            store.getReview({
              ownerId,
              subjectId: subject.id,
              lessonId: lesson.id,
              partId: part.id,
            }).filter(item => (!getPartQuestionIds || getPartQuestionIds(lesson, part).includes(item.stepId))
              && !questionFeedback?.isHidden({ subjectId:subject.id,stepId:item.stepId })),
          isLessonLocked: requiresAccount,
          onRequireAccount,
          onStartLesson({
            lessonId: nextLessonId,
            lessonLabel,
            partId,
            reviewStepId,
          }) {
            mapScrollPosition = window.scrollY;
            selectedPartId = partId;
            void openLesson({
              subjectId: subject.id,
              lessonId: nextLessonId,
              lessonLabel,
              partId,
              reviewStepId,
            });
          },
        });
      operation.add(mountedRoadmap.destroy);
    } else
      elements.lessonContent.innerHTML = `<section class="subject-status-view" data-subject="${escapeHtml(subject.id)}" aria-labelledby="subject-status-title"><p>${escapeHtml(subject.name)}</p><h1 id="subject-status-title">قيد الإعداد</h1><p class="subject-status-message">نعمل حاليًا على إعداد محتوى هذه المادة.</p></section>`;
    if (rating) mountRatedQuestionToggle(elements.lessonContent, {
      questions:ratedQuestions,rating,signal:operation.signal,
      onChange:nextRating => void openSubject(subject.id,null,{rating:nextRating,focusContent:true}),
    });
    document.title = `${subject.name} · ${appTitle}`;
    showContentView();
    window.scrollTo({
      top: restoreMap ? mapScrollPosition : 0,
      behavior: restoreMap || prefersReducedMotion() ? "auto" : "smooth",
    });
    if (restoreMap) {
      const selected = reviewUnitId ? elements.lessonContent.querySelector('.roadmap-review-panel:not([hidden])') : [
        ...elements.lessonContent.querySelectorAll("[data-roadmap-part]"),
      ].find((button) => button.dataset.roadmapPart === selectedPartId);
      (selected || elements.lessonContent).focus({ preventScroll: true });
      const frame = requestAnimationFrame(() => {
        if (!operation.isCurrent() || !selected || document.activeElement !== selected) return;
        const bounds = getShellViewportBounds();
        const rect = selected.getBoundingClientRect();
        if (rect.top < bounds.top || rect.bottom > bounds.bottom || rect.left < bounds.left || rect.right > bounds.right)
          selected.scrollIntoView({ block:"center", behavior:"instant" });
      });
      operation.add(() => cancelAnimationFrame(frame));
    } else if (nextOpener || focusContent)
      elements.lessonContent.focus({ preventScroll: true });
    if (explainPart && mountedRoadmap) {
      const frame = requestAnimationFrame(() => {
        if (operation.isCurrent()) mountedRoadmap.openPart(explainPart);
      });
      operation.add(() => cancelAnimationFrame(frame));
    }
    return mountedRoadmap;
  }

  function openFromCard(nextSubjectId, nextOpener, options) {
    openSubject(nextSubjectId, nextOpener, options);
  }


  async function openLesson({
    subjectId: nextSubjectId,
    lessonId: nextLessonId,
    lessonLabel,
    partId,
    reviewStepId,
    historyMode = "push",
  }) {
    if (requiresAccount()) return onRequireAccount("register");
    const roadmap = getSubjectRoadmap(nextSubjectId);
    const target = getSubjectPartAccess(roadmap, { lessonId:nextLessonId, partId });
    if (!target) return openSubject(nextSubjectId, null, { historyMode:"replace", focusContent:true });
    const operation = viewLifecycle.begin();
    const { ownerId, store } = progressContext();
    const reference = lessonLabel || target.part.label;
    subjectId = nextSubjectId;
    lessonId = nextLessonId;
    selectedPartId = partId;
    writeRoute({ subject:nextSubjectId, lesson:nextLessonId, part:partId, ...(reviewStepId ? { question:reviewStepId } : {}),...(rating ? {page:"rated-questions",rating} : {}) }, historyMode);
    // A click always has an immediate, cancellable response, even on a cold connection.
    setViewMode();
    elements.lessonTitle.textContent = reference;
    elements.lessonStatus.hidden = true;
    elements.lessonContent.setAttribute("aria-busy", "true");
    elements.lessonContent.innerHTML = '<p class="app-loading" role="status">جارٍ تجهيز السؤال…</p>';
    showContentView({ animate:false });

    const load = async () => {
      try {
        const streaming = hasPackagedLessons();
        const source = streaming ? null : await import("../data/lessons/subject-lesson-registry.js");
        const loadSubjectLesson = streaming
          ? (subject, lesson) => loadStreamedLesson(subject, lesson, { signal:operation.signal })
          : source.loadSubjectLesson;
        // Fetch lesson metadata/code concurrently with account readiness.
        const dependencies = Promise.all([loadSubjectLesson(nextSubjectId,nextLessonId),import("./lesson-view.js")]);
        dependencies.catch(() => {});
        await Promise.all([store.ready(ownerId), questionFeedback?.ready?.({ signal:operation.signal,allowCached:true })]);
        if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
        if (reviewStepId && questionFeedback?.isHidden({ subjectId:nextSubjectId,stepId:reviewStepId })) {
          returnToRoadmap();
          return;
        }
        const access = getSubjectPartAccess(roadmap, {
          lessonId:nextLessonId, partId,
          getPartProgress:(lesson, part) => store.get({ ownerId, subjectId:nextSubjectId, lessonId:lesson.id, partId:part.id }),
          accountRequired:requiresAccount(),
        });
        if (!["available", "in-progress", "completed"].includes(access.state)) {
          if (onReturnToRoadmap?.({ subjectId:nextSubjectId, lessonId:nextLessonId, partId, explainAccess:true })) return;
          const map = await openSubject(nextSubjectId, null, { historyMode:"replace", focusContent:true, restoreMap:true });
          if (subjectId === nextSubjectId && lessonId === null) map?.openPart({ lessonId:nextLessonId, partId });
          return;
        }
        const [lesson, { renderLesson }] = await dependencies;
        if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
        // Old review URLs still open their part after source exercises replace
        // retired practice. Historical answers stay stored, not silently relabelled.
        if (reviewStepId && !lesson?.steps.some(step => step.id === reviewStepId)) reviewStepId = null;
        const recordKey = {
          ownerId,
          subjectId: nextSubjectId,
          lessonId: nextLessonId,
          partId,
        };
        const demoMode = Boolean(onboardingTour?.isDemo());
        // Demo selection examines question content; normal lessons hydrate only the current step.
        if (demoMode && lesson?.streamed) lesson.steps = await lesson.loadAll({ signal:operation.signal });
        // Keep each question in its published part record while displaying one full lesson.
        const partLessons = lesson?.streamed
          ? lesson.parts.map(part => ({ part, sourceLessonId:nextLessonId, lesson:{ steps:part.stepIds.map(id => ({ id })) } }))
          : await Promise.all(target.lesson.parts.map(async part => ({
            part, sourceLessonId:nextLessonId, lesson:await source.loadSubjectLessonPart(nextSubjectId, nextLessonId, part.id),
          })));
        if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
        const isFilterSubject = nextSubjectId === "mathematics" || nextSubjectId === "mathematics-2" || nextSubjectId === "physics";
        const mathFilterLessons = (scope) => {
          if (scope === "lesson") return [target.lesson];
          if (scope === "unit") {
            return roadmap.units.find(unit => unit.lessons.some(item => item.id === nextLessonId))?.lessons.filter(item => !item.hidden) || [target.lesson];
          }
          return roadmap.units.flatMap(unit => unit.lessons).filter(item => !item.hidden);
        };
        const mathFilterCatalog = async (scope) => {
          if (!isFilterSubject) return [];
          const { compileLessonMarkdown } = await import("../markdown/lesson-model.js");
          const scopeLessons = mathFilterLessons(scope);
          const loadedLessons = await Promise.all(scopeLessons.map(async item => ({
            item,
            lesson:item.id === nextLessonId ? lesson : await loadSubjectLesson(nextSubjectId, item.id),
          })));
          return (await Promise.all(loadedLessons.map(async ({ item, lesson:loadedLesson }) => {
            const partByQuestion = new Map((item.parts || []).flatMap(part => (part.questionIds || []).map(id => [id, part])));
            const steps = loadedLesson.streamed ? await loadedLesson.loadAll({ signal:operation.signal }) : compileLessonMarkdown(loadedLesson.authoringSource).parsed.steps;
            return steps
              .filter(step => step.type !== "markdown" && !questionFeedback?.isHidden({ subjectId:nextSubjectId,stepId:step.id }))
              .map(step => {
                const part = partByQuestion.get(step.id);
                return {
                  step,
                  stepId:step.id,
                  subjectId:nextSubjectId,
                  lessonId:item.id,
                  partId:part?.id || item.parts?.[0]?.id || partId,
                  lessonLabel:item.label,
                };
              });
          }))).flat();
        };
        const questionKeys = new Map(partLessons.flatMap(({ part, lesson }) => lesson.steps.map(step => [step.id, { subjectId:nextSubjectId, lessonId:nextLessonId, partId:part.id, stepId:step.id }])));
        const sourceKey = stepId => questionKeys.get(stepId) || { subjectId:nextSubjectId, lessonId:nextLessonId, partId, stepId };
        const records = partLessons.map(({ part, sourceLessonId }) => {
          const key = { ...recordKey, lessonId:sourceLessonId, partId:part.id };
          return { ...store.get(key), review:store.getReview(key) };
        });
        const ratedRecords = rating ? partLessons.map(({ part, sourceLessonId }) =>
          store.getRatedProgress({ ...recordKey, lessonId:sourceLessonId, partId:part.id }, rating)) : [];
        const saved = {
          completedStepIds:records.flatMap(record => record.completedStepIds),
          completed:lesson.steps.every(step => records.some(record => record.completedStepIds.includes(step.id))),
        };
        const totalParts = getSubjectRoadmap(nextSubjectId)
          .units.flatMap((unit) => unit.lessons)
          .flatMap((lesson) => lesson.parts || []).length;
        const outcomeKey = { ...recordKey, totalParts };
        const currentOutcome = () => {
          const outcome = store.getOutcome(outcomeKey);
          const home = store.getHomeLearning(ownerId, [roadmap]);
          return { ...outcome, levelTotalXp:home.totalXp, progress:home.progress, completed:home.requiredLessonsCompleted, totalParts:home.curriculumLessonsTotal,
            completedQuestions:home.currentQuestionsSolved, totalQuestions:home.currentQuestionsTotal,
            lessonShare:home.currentQuestionsTotal ? Math.round(lesson.steps.length / home.currentQuestionsTotal * 100) : undefined };
        };
        const before = currentOutcome();
        let heartDepletion;
        const outcome = () => {
          const after = currentOutcome();
          const result = {
            ...after,
            xpGain: after.totalXp - before.totalXp,
            progressGain: after.progress - before.progress,
            streakGain: Math.max(0, after.streak - before.streak),
            alreadyCompleted:saved.completed,
          };
          return result;
        };
        // The shell is already visible. Hydrate only the selected question next.
        setViewMode();
        elements.lessonContent.setAttribute("aria-busy", "false");
        elements.lessonShell.dataset.subject = nextSubjectId;
        elements.lessonTitle.textContent = lesson?.title || reference;
        elements.lessonStatus.textContent = lesson ? "درس منشور" : "قيد التقدم";
        elements.lessonStatus.hidden = true;
        const rendered = renderLesson(
          elements.lessonContent,
          reference,
          lesson,
          {
            isLessonPart: true,
            demoMode,
            questionFilterIds:rating ? getRatedSubjectQuestions(nextSubjectId,questionFeedback).filter(question => question.lessonId === nextLessonId && question.rating === rating).map(question => question.stepId) : undefined,
            onLessonEvent:demoMode ? event => onboardingTour.lessonEvent(event) : undefined,
            getQuestionExplanation:resourceStore ? step => {
              const key = sourceKey(step.id);
              return {
                isUnlocked:() => resourceStore.hasExplanation(ownerId,key),
                isIncluded:() => resourceStore.get(ownerId).unlimited,
                subscribe:resourceStore.subscribe,
                unlock:async ({signal}) => {
                  if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) throw new Error("The active learner changed.");
                  const result = await resourceStore.unlockExplanation(ownerId,key,{signal,step});
                  if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) throw new Error("The active learner changed.");
                  return result;
                },
              };
            } : undefined,
            getQuestionFeedback:(stepId) => {
              const key = sourceKey(stepId);
              return {
                subscribe:questionFeedback?.subscribe,
                isHidden:() => questionFeedback?.isHidden(key) || false,
                hide:(options) => questionFeedback?.hide(key,options),
                getRating:() => questionFeedback?.getRating(key),
                saveRating:(rating,options) => questionFeedback?.saveRating(key,rating,options),
                report:(reason,details,options) => questionFeedback?.report(key,reason,details,options),
              };
            },
            getCompletionOutcome: outcome,
            onExitLesson: returnToRoadmap,
            onFinishLesson: () => {
              if (demoMode && onboardingTour?.finishLesson()) return;
              returnToRoadmap();
            },
            reviewStepId,
            onReviewComplete: returnToRoadmap,
            beforeAnswer:() => {
              if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return "انتهت جلسة التعلّم.";
              const balance = resourceStore?.get(ownerId);
              if (!balance || balance.unlimited || balance.hearts > 0) return;
              heartDepletion?.show();
              const minutes = Math.max(1, Math.ceil((balance.nextHeartAt - Date.now()) / 60000));
              return `نفدت القلوب. ستحصل على قلب خلال ${minutes} دقيقة. تتجدد القلوب بمعدل قلب كل 12 دقيقة.`;
            },
            onAnswer: async ({ stepId, correct, reviewing = false }) => {
              if (typeof correct === "boolean" && !demoMode) {
                void questionFeedback?.saveRating(sourceKey(stepId), correct ? "easy" : "hard", { automatic:true }).catch(() => {});
              }
              return store.recordAnswer({
                ownerId,
                ...sourceKey(stepId),
                correct,
                ...(rating ? { rating } : {}),
                reviewing: reviewing || Boolean(rating) || stepId === reviewStepId,
              });
            },
            getMathFilterCatalog:!rating && isFilterSubject ? mathFilterCatalog : undefined,
            mathFilterState:mathFilters.get(mathFilterKey(ownerId, nextSubjectId, nextLessonId)),
            onMathFilterApply: ({ scope, result, enabled }) => {
              if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
              for (const item of mathFilterLessons(scope)) {
                const key = mathFilterKey(ownerId, nextSubjectId, item.id);
                if (enabled) {
                  mathFilters.set(key, { scope, stepIds:result.questions.filter(entry => entry.lessonId === item.id).map(entry => entry.stepId) });
                } else mathFilters.delete(key);
              }
              return mathFilters.get(mathFilterKey(ownerId, nextSubjectId, nextLessonId))?.stepIds;
            },
            progress: {
              completedStepIds: demoMode ? [] : rating ? ratedRecords.flatMap(record => record.completedStepIds) : saved.completedStepIds,
              attemptedStepIds: demoMode ? [] : (rating ? ratedRecords : records).flatMap(record => record.review.map(item => item.stepId)),
              mistakeStepIds: demoMode || rating ? [] : records.flatMap(record => record.review.filter(item => item.misses > 0).map(item => item.stepId)),
              completedAt: null,
            },
            async onProgress({ completedStepIds }) {
              if (reviewStepId) return;
              if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
              const completedIds = new Set(completedStepIds);
              for (const { part, sourceLessonId, lesson:partLesson } of partLessons) {
                const stepIds = partLesson.steps.map(step => step.id);
                const key = { ...recordKey, lessonId:sourceLessonId, partId:part.id };
                const previous = store.get(key);
                const completed = rating ? new Set([...previous.completedStepIds,...completedIds]) : completedIds;
                const done = stepIds.filter(id => completed.has(id));
                if (!done.length || done.every(id => previous.completedStepIds.includes(id)) && (previous.completed || done.length < stepIds.length)) continue;
                if (!operation.isCurrent() || ownerId !== productService.getLearnerProgressOwner()) return;
                await store.record({ ...key, stepIds,
                  completedStepIds:done, isComplete:done.length === stepIds.length });
              }
            },
          },
        );
        operation.add(rendered.destroy);
        if (resourceStore) {
          heartDepletion = mountHeartDepletion({ resourceStore, ownerId, signal:operation.signal, returnFocus:elements.lessonContent });
          operation.add(heartDepletion.destroy);
        }
        showContentView({ animate:false });
        window.scrollTo({ top:0, behavior:"auto" });
        document.title = `${lesson?.title || "الدرس غير متاح"} · ${appTitle}`;
        elements.lessonContent.focus({ preventScroll: true });
      } catch (error) {
        if (!operation.isCurrent()) return;
        console.error("The subject lesson could not be loaded.", error);
        setViewMode();
        elements.lessonContent.setAttribute("aria-busy", "false");
        elements.lessonTitle.textContent = "";
        elements.lessonStatus.hidden = true;
        const rendered = renderLessonError(
          elements.lessonContent,
          reference,
          load,
        );
        operation.add(rendered.destroy);
        showContentView({ animate:false });
        window.scrollTo({ top:0, behavior:"auto" });
        document.title = rendered.title;
        elements.lessonContent.focus({ preventScroll: true });
      }
    };
    await load();
  }

  function returnToRoadmap() {
    if (!subjectId || !lessonId) return false;
    if (onReturnToRoadmap?.({ subjectId })) return true;
    openSubject(subjectId, null, {
      historyMode: "replace",
      focusContent: true,
      restoreMap: true,
      rating,
    });
    return true;
  }

  return Object.freeze({
    getState,
    openFromCard,
    openSubject,
    reset,
    returnToRoadmap,
  });
}
