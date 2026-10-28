import { escapeHtml } from "../lib/dom.js";
import { updateSubjectCards } from "./course-map.js";
import { formatArabicCount } from "./learner-format.js";
import { getLevelProgress, MAX_LEVEL } from "../domain/progression.js";
import { mountSuperTrialCountdown } from "./super-trial-countdown.js";

const icons = Object.freeze({
  streak:'<img src="assets/icons/dashboard-streak-outlined.svg" alt="" aria-hidden="true" />',
  level:'<img src="assets/icons/dashboard-levels-outlined.svg" alt="" aria-hidden="true" />',
});

function levelCard(totalXp) {
  const { level, xp, levelXpGoal, levelProgress } = getLevelProgress(totalXp);
  return `<article class="dashboard-stat dashboard-stat--level"><span class="dashboard-stat__icon">${icons.level}</span><div class="dashboard-stat__content"><div class="dashboard-stat__heading"><span>المستوى</span><strong class="ui-number"><bdi class="dashboard-stat__level"><span class="dashboard-stat__unit">Lv.</span><span class="dashboard-stat__value">${level}</span></bdi></strong></div></div><div class="dashboard-stat__panel"><div class="dashboard-level-progress" role="progressbar" aria-label="التقدّم في المستوى" aria-valuemin="0" aria-valuemax="${levelXpGoal}" aria-valuenow="${xp}" aria-valuetext="${level === MAX_LEVEL ? `وصلت إلى المستوى ${MAX_LEVEL}` : `${xp} من ${levelXpGoal} XP`}"><span style="width:${levelProgress}%"></span></div><span class="dashboard-level-caption">${level === MAX_LEVEL ? "المستوى الأقصى" : `<bdi class="ui-number">${xp} / ${levelXpGoal} XP</bdi>`}</span></div></article>`;
}

function streakDays(streak) {
  const completed = Math.max(0, Math.floor(Number(streak) || 0));
  const firstDay = Math.max(1, completed - 5);
  const days = Array.from({ length:7 }, (_, index) => {
    const day = firstDay + index;
    const done = day <= completed;
    return `<li class="dashboard-streak-day${done ? " is-complete" : ""}" aria-label="اليوم ${day}، ${done ? "مكتمل" : "قادم"}"><span class="dashboard-streak-day__marker" aria-hidden="true">${done ? '<svg viewBox="0 0 24 24" fill="none"><path d="m6 12 4 4 8-8" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}</span><span aria-hidden="true">${day}</span></li>`;
  }).join("");
  return `<ol class="dashboard-streak-days" aria-label="أيام السلسلة: البرتقالي مكتمل والرمادي قادم">${days}</ol>`;
}

function formatStreak(streak) {
  const count = Math.max(0, Math.floor(Number(streak) || 0));
  const unit = count === 1 || count === 2 ? "يوم" : formatArabicCount(count, "day").replace(/^\d+\s+/, "");
  return `<bdi class="dashboard-stat__value">${count}</bdi> <span class="dashboard-stat__unit">${unit}</span>`;
}

export function renderLearnerDashboardMarkup(snapshot, displayName, { showSuperTrial = false } = {}) {
  if (!snapshot || snapshot.actor !== "student") return "";
  const { learning } = snapshot;
  const streak = learning.dailyStreak;
  const learnerName = escapeHtml(displayName || snapshot.account.displayName || "طالب");
  const superOffer = showSuperTrial && snapshot.account.type === "free"
    ? '<button class="dashboard-super-offer" type="button" data-super-trial-offer aria-label="جرّب أسبوعًا مجانيًا من سوبر"><img src="assets/mascot/rocky-super.svg" alt="روكي يرتدي نظارات" width="90" height="87" /><span>أسبوع مجاني</span></button>' : "";
  const curriculumPercentage = learning.currentQuestionsTotal > 0
    ? Math.min(100, Math.round((learning.currentQuestionsSolved / learning.currentQuestionsTotal) * 100))
    : learning.curriculumLessonsTotal > 0
      ? Math.min(100, Math.round((learning.requiredLessonsCompleted / learning.curriculumLessonsTotal) * 100))
      : 0;
  return `<section class="learner-dashboard" data-learner-dashboard aria-labelledby="learner-dashboard-title"><div class="learner-dashboard__hero"><div class="learner-dashboard__art" aria-hidden="true"><img class="learner-dashboard__coast" src="assets/dashboard/hero-coast.webp" alt="" width="2158" height="729" fetchpriority="high" /></div><img class="learner-dashboard__rocky" src="assets/mascot/rocky-reading.svg" alt="" width="800" height="760" fetchpriority="high" /><header class="learner-dashboard__header"><span class="learner-dashboard__avatar" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="17" r="8" fill="currentColor"/><path d="M9 41c0-8.3 6.7-15 15-15s15 6.7 15 15" fill="currentColor"/></svg></span><div class="learner-dashboard__identity"><h2 id="learner-dashboard-title">مرحبًا، <bdi>${learnerName}</bdi></h2><p>جاهز نكمل التعلّم اليوم؟</p></div>${superOffer}</header></div><div class="dashboard-stats" aria-label="ملخص التقدم"><article class="dashboard-stat dashboard-stat--streak"><span class="dashboard-stat__icon">${icons.streak}</span><div class="dashboard-stat__content"><div class="dashboard-stat__heading"><span>السلسلة اليومية</span><strong class="ui-number">${formatStreak(streak)}</strong></div></div><div class="dashboard-stat__panel">${streakDays(streak)}</div></article>${levelCard(learning.totalXp)}</div><div class="dashboard-materials-heading"><h3>المواد الدراسية</h3><span class="dashboard-completion" role="progressbar" aria-label="التقدّم في المواد الدراسية" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${curriculumPercentage}" aria-valuetext="${curriculumPercentage}% مكتمل"><svg class="dashboard-completion__ring" viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle class="dashboard-completion__track" cx="18" cy="18" r="14" stroke-width="4"/><circle class="dashboard-completion__value" cx="18" cy="18" r="14" stroke-width="4" pathLength="100" stroke-dasharray="${curriculumPercentage} 100"/></svg><span><bdi class="ui-number">${curriculumPercentage}%</bdi> مكتمل</span></span></div></section>`;
}

export function mountLearnerDashboard({ container, service, progressStore, resourceStore, onSuperTrial }) {
  if (!container || !service?.getLearnerHomeSnapshot || !service?.getLearnerDisplayName) throw new TypeError("learner dashboard dependencies are required");
  const root = document.createElement("div");
  root.className = "learner-dashboard-root";
  container.prepend(root);
  const trialCountdown = mountSuperTrialCountdown({ container:root, resourceStore, getOwnerId:() => service.getLearnerProgressOwner() });
  const update = () => {
    const snapshot = service.getLearnerHomeSnapshot();
    const loading = progressStore?.getSaveState(service.getLearnerProgressOwner()) === "loading";
    root.innerHTML = renderLearnerDashboardMarkup(snapshot, service.getLearnerDisplayName(), {
      showSuperTrial:Boolean(onSuperTrial && resourceStore?.get(service.getLearnerProgressOwner()).trialEligible),
    });
    root.setAttribute("aria-busy", String(loading));
    if (loading && root.firstElementChild)
      root.insertAdjacentHTML("beforeend", '<p class="visually-hidden" role="status">جارٍ تحميل التقدّم…</p>');
    root.hidden = !root.firstElementChild;
    trialCountdown.update();
    updateSubjectCards(container, snapshot);
  };
  const unsubscribe = service.subscribe(update);
  const unsubscribeProgress = progressStore?.subscribe(update);
  const unsubscribeResources = resourceStore?.subscribe(update);
  root.addEventListener("click", event => {
    if (event.target.closest("[data-super-trial-offer]")) onSuperTrial?.();
  });
  update();
  return Object.freeze({ update, destroy() { unsubscribe(); unsubscribeProgress?.(); unsubscribeResources?.(); trialCountdown.destroy(); root.remove(); } });
}
