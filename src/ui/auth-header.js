import { CORRECT_ANSWER_GEM_REWARD, CORRECT_ANSWERS_PER_REWARD } from "../domain/learner-resources.js";

export function createAuthHeader({ guest, member, label, flowButtons, signOutButton, courseContainer, service, progressStore, resourceStore, onFlow }) {
  if (!guest || !member || !label || !signOutButton || !courseContainer || !service || !onFlow) throw new TypeError("auth header dependencies are required");
  const controller = new AbortController();
  const { signal } = controller;
  const streakFreeze = member.ownerDocument.querySelector("[data-learner-streak-freeze]");
  const streakCount = document.querySelector?.("[data-header-streak-count]");
  const ownerLink = document.querySelector?.("[data-owner-dashboard]");
  const updateResources = () => {
    if (!resourceStore) return;
    const balance = resourceStore.get(service.getLearnerProgressOwner());
    for (const resource of ["hearts", "gems"]) {
      document.querySelectorAll(`[data-resource-${resource}]`).forEach(count => {
        count.textContent = balance.unlimited ? "∞" : String(balance[resource]);
        const name = resource === "hearts" ? "قلوب" : "جواهر";
        count.parentElement.setAttribute("aria-label", balance.unlimited ? `${name} غير محدودة` : `${balance[resource]} ${name}`);
        count.parentElement.title = resource === "hearts" && !balance.unlimited
          ? "٧ قلوب يوميًا مشتركة على هذا المتصفح، تتجدد عند منتصف الليل بتوقيت فلسطين. أول درسين في كل مادة دون قلوب."
          : balance.unlimited ? `${name} غير محدودة مع سوبر` : `كل ${CORRECT_ANSWERS_PER_REWARD} أسئلة مختلفة تحلّها بشكل صحيح تمنحك ${CORRECT_ANSWER_GEM_REWARD} جوهرة لفتح ٥ شروح.`;
      });
    }
  };
  const unsubscribeResources = resourceStore?.subscribe(updateResources);
  const resourceTimer = resourceStore ? setInterval(updateResources, 1000) : null;
  const update = () => {
    updateResources();
    const type = service.getAccountType();
    const isGuest = type === "guest";
    guest.hidden = !isGuest;
    member.hidden = isGuest;
    if (ownerLink) ownerLink.hidden = !service.isOwner?.();
    label.textContent = { free:"حساب مجاني", subscribed:"خطوة سوبر" }[type] || "";
    label.lang = "ar";
    if (streakFreeze) streakFreeze.hidden = isGuest;
    if (streakCount) {
      const count = Math.max(0, Math.floor(Number(service.getLearnerHomeSnapshot()?.learning?.dailyStreak) || 0));
      streakCount.textContent = String(count);
      streakCount.parentElement.dataset.streakActive = String(count > 0);
      streakCount.parentElement.setAttribute("aria-label", `السلسلة اليومية: ${count}`);
    }
    document.body.dataset.accountType = type;
    courseContainer.querySelectorAll("[data-subject]").forEach((button) => {
      const unavailable = button instanceof HTMLButtonElement && button.disabled;
      button.setAttribute("aria-disabled", String(unavailable));
    });
  };
  const unsubscribe = service.subscribe(update);
  const unsubscribeProgress = progressStore?.subscribe(update);
  flowButtons.forEach((button) => button.addEventListener("click", () => onFlow(button.dataset.authFlow), { signal }));
  signOutButton.addEventListener("click", async () => { await service.signOut(); update(); }, { signal });
  update();
  return Object.freeze({
    update,
    destroy() {
      controller.abort();
      unsubscribe();
      unsubscribeProgress?.();
      unsubscribeResources?.();
      if (resourceTimer) clearInterval(resourceTimer);
    },
  });
}
