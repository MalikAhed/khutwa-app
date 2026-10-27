import { createLearnerResources } from "./services/learner-resources.js?v=acff67f262f3c107";
import { mountHeartDepletion } from "./ui/heart-depletion.js?v=acff67f262f3c107";
import { createServerProgressAdapter } from "./services/server-progress.js?v=acff67f262f3c107";
import { applyServerDataReset } from "./services/server-data-reset.js?v=acff67f262f3c107";
import { readAppConfig } from "./app/app-config.js?v=acff67f262f3c107";
import { createViewLifecycle } from "./app/view-lifecycle.js?v=acff67f262f3c107";
import { animateView } from "./ui/view-motion.js?v=acff67f262f3c107";
import { revealWhenReady } from "./ui/media-ready.js?v=acff67f262f3c107";
import { mountComingSoonToast } from "./ui/coming-soon.js?v=acff67f262f3c107";
import { createRouteUrl, isUnlockedPage, readRoute } from "./app/route.js?v=acff67f262f3c107";
import { prefersReducedMotion } from "./lib/dom.js?v=acff67f262f3c107";
import { createLearnerSession } from "./services/learner-session.js?v=acff67f262f3c107";
import { getBrowserLearnerStorage } from "./services/learner-storage.js?v=acff67f262f3c107";
import { renderCourseMap, updateRatedSubjectCards } from "./ui/course-map.js?v=acff67f262f3c107";
import { createAuthHeader } from "./ui/auth-header.js?v=acff67f262f3c107";
import { mountLearnerDashboard } from "./ui/learner-dashboard.js?v=acff67f262f3c107";
import { createSubjectLearningController } from "./ui/subject-learning.js?v=acff67f262f3c107";
import { createVisitorFlow } from "./ui/visitor-flow.js?v=acff67f262f3c107";
import { createSubjectProgressStore } from "./services/subject-progress-store.js?v=acff67f262f3c107";
import { createSessionProgressAdapter } from "./services/session-progress.js?v=acff67f262f3c107";
import { createIndexedDbProgressAdapter } from "./services/indexeddb-progress.js?v=acff67f262f3c107";
import { mountProgressFeedback } from "./ui/progress-feedback.js?v=acff67f262f3c107";
import { mountAppShell } from "./ui/app-shell.js?v=acff67f262f3c107";
import { createRockyTour } from "./ui/rocky-tour.js?v=acff67f262f3c107";
import { createQuestionFeedback } from "./services/question-feedback.js?v=acff67f262f3c107";
import { getSubjectRoadmap } from "./data/subject-roadmaps.js?v=acff67f262f3c107";
import { watchPreviewUpdates } from "./services/preview-updates.js?v=acff67f262f3c107";

const APP_TITLE = "مساحة التعلّم";
const ROCKY_TOUR_ENABLED = false;
const appConfig = readAppConfig(document);
if (appConfig.accountMode === "http") await applyServerDataReset();
const learnerStorage = getBrowserLearnerStorage(undefined, { persistent:appConfig.accountMode === "fixture" });
const browserLocalStorage = () => ({ getItem:(key) => window.localStorage.getItem(key) });
const resourceStore = createLearnerResources({
  storage:{ getItem:key => window.localStorage.getItem(key), setItem:(key,value) => window.localStorage.setItem(key,value) },
  getAccountType:() => productService.getAccountType(),
  apiBase:appConfig.accountMode === "http" ? "/api/progress" : null,
});
const reportProgressRecovery = (error, ownerId) => progressStore.reportRecoveryWarning(ownerId, error);
const guestProgress = createSessionProgressAdapter({
  // Read lazily so a denied storage getter reaches the shared save feedback.
  storage:{
    getItem:(key) => window.sessionStorage.getItem(key),
    setItem:(key, value) => window.sessionStorage.setItem(key, value),
  },
  onError:reportProgressRecovery,
});
const memberProgress = createIndexedDbProgressAdapter({ legacyStorage:browserLocalStorage(), onError:reportProgressRecovery });
const serverProgress = appConfig.accountMode === "http" ? createServerProgressAdapter({local:memberProgress, onError:reportProgressRecovery, onResources:resourceStore.confirm}) : null;
const progressAdapterFor = (owner) => owner === "guest" ? guestProgress : owner.startsWith("account:") && serverProgress ? serverProgress : memberProgress;
const progressStore = createSubjectProgressStore({ resourceStore, adapter:{
  isRemoteOwner:(owner) => owner.startsWith("account:") && Boolean(serverProgress),
  read:(owner) => progressAdapterFor(owner).read(owner),
  readCached:(owner) => progressAdapterFor(owner).readCached?.(owner) || progressAdapterFor(owner).read(owner),
  sync:async (owner) => { await progressAdapterFor(owner).sync?.(owner); },
  update:(update) => progressAdapterFor(update.value.ownerId).update(update),
  close:() => memberProgress.close(),
} });
const productService = createLearnerSession({
  progressStore,
  storage: learnerStorage,
  apiBase: appConfig.apiBase,
});
await productService.restoreSession();
await progressStore.ready(productService.getLearnerProgressOwner());
let progressOwner = productService.getLearnerProgressOwner();
productService.subscribe(() => {
  const owner = productService.getLearnerProgressOwner();
  if (owner !== progressOwner) { progressOwner = owner; void progressStore.ready(owner); }
});
const refreshProgress = () => {
  if (!document.hidden) void progressStore.retry(productService.getLearnerProgressOwner());
};
document.addEventListener("visibilitychange", refreshProgress);
window.addEventListener("online", refreshProgress);
window.addEventListener("pageshow", refreshProgress);
window.addEventListener("focus", refreshProgress);
setInterval(refreshProgress, 30000);
const elements = mountAppShell();
if (appConfig.accountMode === "fixture") watchPreviewUpdates({
  canReload:() => !document.body.matches(".ui-lab-open,.product-flow-active")
    && !elements.main.matches(".lesson-mode,.coming-mode")
    && progressStore.getSaveState(productService.getLearnerProgressOwner()) === "saved",
});
const comingSoonToast = mountComingSoonToast(elements.comingSoonToast);
mountProgressFeedback({ store:progressStore, service:productService });
const viewLifecycle = createViewLifecycle();
let pathScrollPosition = 0;
let pendingMapReturn = false;
let pendingAccountRoute = null;
renderCourseMap(elements.courseUnits);
mountLearnerDashboard({
  container: elements.courseUnits,
  service: productService,
  progressStore,
  resourceStore,
  onSuperTrial:() => {
    const operation = viewLifecycle.begin();
    const offer = mountHeartDepletion({ resourceStore, ownerId:productService.getLearnerProgressOwner(),
      signal:operation.signal, autoShowEmpty:false, returnFocus:elements.navigationItems[0] });
    operation.add(offer.destroy);
    offer.showOffer();
  },
});
const authHeader = createAuthHeader({
  resourceStore,
  guest: elements.authGuest,
  member: elements.authMember,
  label: elements.accountLabel,
  flowButtons: elements.authFlowButtons,
  signOutButton: elements.authSignOut,
  courseContainer: elements.courseUnits,
  service: productService,
  progressStore,
  onFlow: (flow) => openVisitorFlow(flow),
});

function writeRoute(route, historyMode) {
  if (historyMode === "none") return false;
  const nextUrl = createRouteUrl(window.location.href, route);
  if (nextUrl.href === window.location.href) return false;
  const state = { ...(window.history.state || {}), fullStackQuest: true };
  const previous = readRoute(window.location.search);
  delete state.subjectMapBehind;
  if (historyMode !== "replace" && route.lesson && previous.subject === route.subject && !previous.lesson)
    state.subjectMapBehind = route.subject;
  window.history[historyMode === "replace" ? "replaceState" : "pushState"](
    state,
    "",
    nextUrl,
  );
  return true;
}

const questionFeedback = createQuestionFeedback({ service:productService, progressStore,
  apiBase:appConfig.apiBase?.replace(/\/auth$/, ""),
  storage:{ getItem:key => window.localStorage.getItem(key),setItem:(key,value) => window.localStorage.setItem(key,value) },
});
const rockyTour = ROCKY_TOUR_ENABLED ? createRockyTour({ service:productService,
  storage:{ getItem:key => window.localStorage.getItem(key),setItem:(key,value) => window.localStorage.setItem(key,value) },
  onHome:() => openLearnHome({ historyMode:"replace", startTour:true }),
  onStartLesson:() => {
    const first = getSubjectRoadmap("ict")?.units.flatMap(unit => unit.lessons).find(lesson => !lesson.hidden && !lesson.optional && lesson.parts?.length);
    if (first) subjectLearning.openSubject("ict",null,{ lessonId:first.id,partId:first.parts[0].id,historyMode:"replace" });
  },
  onSkip:() => {
    if (pendingAccountRoute) openLearnHome({ historyMode:"replace" });
    else if (readRoute(window.location.search).lesson) applyCurrentRoute();
  },
  onComplete:() => { pendingAccountRoute = null; },
}) : null;
const visitorFlowController = createVisitorFlow({
  container: elements.visitorFlowRoot,
  service: productService,
  onNavigate(flow, options) {
    openVisitorFlow(flow, options);
  },
  onHome(options) {
    openLearnHome(options);
  },
  onAccountCreated:rockyTour ? mascot => rockyTour.start(mascot) : undefined,
});

function openLearnHome({ historyMode = "push", startTour = false } = {}) {
  if (pendingAccountRoute && !startTour && productService.getAccountType() !== "guest") {
    const route = pendingAccountRoute;
    pendingAccountRoute = null;
    writeRoute(route, "replace");
    applyCurrentRoute();
    return;
  }
  authHeader.update();
  const learnItem = elements.navigationItems.find(
    (item) => item.dataset.page === "learn",
  );
  selectPage(learnItem, { historyMode });
}

function openVisitorFlow(flow, { historyMode = "push", focus = true } = {}) {
  viewLifecycle.begin();
  subjectLearning.reset();
  elements.lessonContent.replaceChildren();
  elements.lessonContent.removeAttribute("aria-busy");
  updateNavigation(null);
  elements.main.classList.remove("coming-mode", "lesson-mode");
  elements.comingSoon.classList.remove("is-visible");
  elements.lessonView.classList.remove("is-visible");
  writeRoute({ flow }, historyMode);
  visitorFlowController.show(flow, { focus });
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

function showContentView({ animate = true } = {}) {
  elements.courseUnits.dataset.page = "learn";
  visitorFlowController.hide();
  elements.main.classList.remove("coming-mode");
  elements.main.classList.add("lesson-mode");
  elements.comingSoon.classList.remove("is-visible");
  elements.lessonView.classList.add("is-visible");
  animateView(elements.lessonView, { animate });
}

function setViewMode(view = null) {
  const isSubject = view === "subject";
  elements.lessonShell.classList.toggle("lesson-shell--subject", isSubject);
  if (!isSubject) delete elements.lessonShell.dataset.subject;
}

const subjectLearning = createSubjectLearningController({
  resourceStore,
  elements,
  productService,
  progressStore,
  appTitle: APP_TITLE,
  onboardingTour:rockyTour,
  questionFeedback,
  viewLifecycle,
  setViewMode,
  showContentView,
  writeRoute,
  onRequireAccount: (flow) => openVisitorFlow(flow),
  onComingSoon: () => comingSoonToast.show(),
  onExitRatedQuestions:() => selectPage(getPageTarget("rated-questions"), { historyMode:"replace" }),
  onReturnToRoadmap({ subjectId, lessonId, partId, explainAccess }) {
    if (pendingMapReturn) return true;
    if (window.history.state?.subjectMapBehind !== subjectId) return false;
    pendingMapReturn = explainAccess ? { subjectId, lessonId, partId } : true;
    window.history.back();
    return true;
  },
});

function updateNavigation(selectedItem) {
  elements.navigationItems.forEach((item) => {
    const isActive = item === selectedItem;
    item.classList.toggle("active", isActive);
    if (isActive) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
}

function getPageTarget(page) {
  return (
    elements.navigationItems.find((item) => item.dataset.page === page) || {
      dataset: { page },
    }
  );
}

function selectPage(
  selectedItem,
  { historyMode = "push", restorePath = false } = {},
) {
  if (productService.getAccountType() === "guest") {
    openVisitorFlow("entry", { historyMode:"replace" });
    return;
  }
  const page = selectedItem.dataset.page;
  // Preserve existing More bookmarks while unfinished navigation shows feedback.
  if (!isUnlockedPage(page) && historyMode !== "none") {
    comingSoonToast.show();
    return;
  }
  authHeader.update();
  visitorFlowController.hide();
  const operation = viewLifecycle.begin();
  elements.lessonContent.replaceChildren();
  elements.lessonContent.removeAttribute("aria-busy");
  const isLearnPage = page === "learn";
  const isSubjectsPage = isLearnPage || page === "rated-questions";
  elements.courseUnits.dataset.page = page;
  if (isSubjectsPage && (page === "rated-questions" || elements.courseUnits.querySelector(".subject-map")?.dataset.catalog !== page)) {
    renderCourseMap(elements.courseUnits, {
      ratedQuestions:page === "rated-questions",
      snapshot:productService.getLearnerHomeSnapshot(),
      questionFeedback,
    });
  }
  if (page === "rated-questions") {
    const owner = productService.getLearnerProgressOwner();
    const updateRatings = () => {
      if (operation.isCurrent() && owner === productService.getLearnerProgressOwner())
        updateRatedSubjectCards(elements.courseUnits,questionFeedback);
    };
    const refreshRatings = () => { void questionFeedback.ready({signal:operation.signal}).then(updateRatings); };
    operation.add(questionFeedback.subscribe(updateRatings));
    refreshRatings();
  }
  const isCourseVisible = !elements.main.classList.contains("lesson-mode") &&
    !elements.main.classList.contains("coming-mode");
  if (historyMode === "push" && !isLearnPage && isCourseVisible)
    pathScrollPosition = window.scrollY;
  subjectLearning.reset();
  document.title = APP_TITLE;
  const routeChanged = writeRoute({ page }, historyMode);
  updateNavigation(selectedItem);
  elements.main.classList.toggle("coming-mode", !isSubjectsPage);
  elements.main.classList.remove("lesson-mode");
  elements.comingSoon.classList.toggle("is-visible", !isSubjectsPage);
  elements.lessonView.classList.remove("is-visible");
  setViewMode();
  animateView(isSubjectsPage ? elements.courseUnits : elements.comingSoon);
  if (isSubjectsPage) operation.add(revealWhenReady(elements.courseUnits, { signal:operation.signal }));
  if (
    isSubjectsPage &&
    (restorePath || (historyMode === "push" && routeChanged))
  ) {
    window.requestAnimationFrame(() =>
      window.scrollTo({ top: isLearnPage ? pathScrollPosition : 0, behavior: "auto" }),
    );
  }
}

function closeLesson() {
  const subjectState = subjectLearning.getState();
  if (subjectLearning.returnToRoadmap()) return;
  viewLifecycle.begin();
  elements.main.classList.remove("lesson-mode");
  elements.lessonView.classList.remove("is-visible");
  setViewMode();
  elements.lessonContent.replaceChildren();
  elements.lessonContent.removeAttribute("aria-busy");
  subjectLearning.reset();
  document.title = APP_TITLE;
  selectPage(getPageTarget(subjectState.rating ? "rated-questions" : "learn"), { historyMode:"replace" });
  animateView(elements.courseUnits);
  const returnScrollPosition = subjectState.subjectId
    ? subjectState.pathScrollPosition
    : pathScrollPosition;
  window.scrollTo({
    top: returnScrollPosition,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
  const returnTarget =
    subjectState.opener || elements.navigationItems[0];
  window.requestAnimationFrame(() =>
    returnTarget?.focus({ preventScroll: true }),
  );
}
function applyCurrentRoute({ restorePath = false } = {}) {
  const mapExplanation = typeof pendingMapReturn === "object" ? pendingMapReturn : null;
  pendingMapReturn = false;
  const route = readRoute(window.location.search);
  if (appConfig.accountMode === "fixture" && route.flow === "entry" && productService.getAccountType() !== "guest") {
    selectPage(getPageTarget("learn"), { historyMode:"replace" });
    return;
  }
  if (route.flow) {
    openVisitorFlow(route.flow, { historyMode: "none", focus: true });
    return;
  }
  if (productService.getAccountType() === "guest") {
    pendingAccountRoute = route;
    openVisitorFlow("entry", { historyMode:"none", focus:true });
    return;
  }
  if (route.page !== "learn" && !route.subject) {
    selectPage(getPageTarget(route.page), { historyMode: "none", restorePath });
    return;
  }
  if (route.subject) {
    updateNavigation(getPageTarget(route.page));
    subjectLearning.openSubject(route.subject, null, {
      historyMode: "none",
      focusContent: true,
      lessonId:route.lesson,
      partId:route.part,
      reviewStepId:route.question,
      rating:route.rating || null,
      restoreMap:restorePath && !route.lesson && subjectLearning.getState().subjectId === route.subject,
      explainPart:mapExplanation?.subjectId === route.subject ? mapExplanation : null,
    });
    return;
  }
  selectPage(elements.navigationItems[0], { historyMode: "none", restorePath });
}

elements.lessonBackButton.addEventListener("click", closeLesson);
elements.navigationItems.forEach((item) =>
  item.addEventListener("click", () => selectPage(item)),
);
elements.courseUnits.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const ratedTrigger = event.target.closest("[data-rated-subject]");
  if (ratedTrigger instanceof HTMLButtonElement) {
    updateNavigation(getPageTarget("rated-questions"));
    subjectLearning.openFromCard(ratedTrigger.dataset.ratedSubject,ratedTrigger,{rating:ratedTrigger.dataset.rating || "easy"});
    return;
  }
  const subjectTrigger = event.target.closest("[data-subject]");
  if (subjectTrigger instanceof HTMLButtonElement && !subjectTrigger.disabled) {
    updateNavigation(getPageTarget("learn"));
    subjectLearning.openFromCard(
      subjectTrigger.dataset.subject,
      subjectTrigger,
    );
  }
});

window.addEventListener("popstate", () =>
  applyCurrentRoute({ restorePath: true }),
);
let subjectOwner = productService.getLearnerProgressOwner();
productService.subscribe(() => {
  const owner = productService.getLearnerProgressOwner();
  if (owner === subjectOwner) return;
  subjectOwner = owner;
  if (productService.getAccountType() === "guest") {
    pendingAccountRoute = null;
    openVisitorFlow("entry", { historyMode:"replace" });
    return;
  }
  // A part link always restores the current account's own progress and gates.
  if (readRoute(window.location.search).subject) applyCurrentRoute();
});
window.history.replaceState(
  { ...(window.history.state || {}), fullStackQuest: true },
  "",
  createRouteUrl(window.location.href, readRoute(window.location.search)),
);
applyCurrentRoute();
rockyTour?.resume();
