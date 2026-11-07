import { CORRECT_ANSWER_GEM_REWARD } from "../domain/learner-resources.js";
import { readRoute } from '../app/route.js';

export function createAuthHeader({ guest, member, label, flowButtons, signOutButton, courseContainer, service, progressStore, resourceStore, onFlow }) {
  if (!guest || !member || !label || !signOutButton || !courseContainer || !service || !onFlow) throw new TypeError("auth header dependencies are required");
  const controller = new AbortController();
  const { signal } = controller;
  const streakFreeze = member.ownerDocument.querySelector("[data-learner-streak-freeze]");
  const streakCount = document.querySelector?.("[data-header-streak-count]");
  const ownerLink = document.querySelector?.("[data-owner-dashboard]");
  const profileButton = document.querySelector?.("[data-mobile-profile]");
  let profileCard = null, profileOwner = null, signingOut = false;
  const closeProfile = () => profileCard?.close();
  const signOut = async () => {
    if (signingOut) return;
    signingOut = true;
    signOutButton.disabled = true;
    const card = profileCard;
    const action = card?.querySelector('[data-profile-sign-out]');
    const status = card?.querySelector('[role="status"]');
    if (action) action.disabled = true;
    if (status) status.textContent = '';
    try {
      const result = await service.signOut();
      if (result?.status === 'unavailable') throw new Error('Sign out unavailable');
      closeProfile();
      update();
    } catch {
      if (status?.isConnected) status.textContent = 'تعذّر تسجيل الخروج. اتصل بالإنترنت وحاول مجددًا.';
    } finally {
      signingOut = false;
      signOutButton.disabled = false;
      if (action) action.disabled = false;
    }
  };
  profileButton?.addEventListener('click', () => {
    if (service.getAccountType() === 'guest' || profileCard) return;
    profileOwner = service.getLearnerProgressOwner();
    const card = document.createElement('dialog');
    card.className = 'mobile-profile-card';
    card.dir = 'rtl';
    card.setAttribute('aria-labelledby','mobile-profile-name');
    card.innerHTML = '<button class="app-close" type="button" data-profile-close aria-label="إغلاق"></button><b class="nav-profile__initial" aria-hidden="true"></b><h2 id="mobile-profile-name"></h2><p data-profile-plan></p><button class="system-action" type="button" data-profile-sign-out>تسجيل الخروج</button><p role="status"></p>';
    card.querySelector('.nav-profile__initial').textContent = profileButton.querySelector('b').textContent;
    card.style.setProperty('--profile-hue',profileButton.style.getPropertyValue('--profile-hue'));
    card.querySelector('h2').textContent = service.getLearnerDisplayName();
    card.querySelector('[data-profile-plan]').textContent = label.textContent;
    card.querySelector('[data-profile-close]').addEventListener('click',closeProfile);
    card.querySelector('[data-profile-sign-out]').addEventListener('click',signOut);
    card.addEventListener('close', () => {
      card.remove();
      if (profileCard === card) profileCard = null;
      profileButton.setAttribute('aria-expanded','false');
    }, {once:true});
    profileCard = card;
    document.body.append(card);
    profileButton.setAttribute('aria-expanded','true');
    card.showModal();
  }, {signal});
  const updateResources = () => {
    if (!resourceStore) return;
    const route = readRoute(globalThis.location?.search);
    const balance = resourceStore.get(service.getLearnerProgressOwner(),{subjectId:route.subject,lessonId:route.lesson});
    for (const resource of ["hearts", "gems"]) {
      document.querySelectorAll(`[data-resource-${resource}]`).forEach(count => {
        count.textContent = balance.unlimited ? "∞" : String(balance[resource]);
        const name = resource === "hearts" ? "قلوب" : "جواهر";
        count.parentElement.setAttribute("aria-label", balance.unlimited ? `${name} غير محدودة` : `${balance[resource]} ${name}`);
        count.parentElement.title = resource === "hearts" && !balance.unlimited
          ? "٧ قلوب يوميًا مشتركة على هذا المتصفح، تتجدد عند منتصف الليل بتوقيت فلسطين. أول درسين في كل مادة دون قلوب."
          : balance.unlimited ? `${name} غير محدودة مع سوبر` : `كل سؤال جديد تحلّه بشكل صحيح يمنحك ${CORRECT_ANSWER_GEM_REWARD} جواهر. الشرح مقابل ٥٠ جوهرة.`;
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
    if (profileButton) {
      profileButton.hidden = isGuest;
      const name = service.getLearnerDisplayName().trim();
      profileButton.querySelector('b').textContent = (Array.from(name)[0] || '؟').toLocaleLowerCase();
      // Derive a stable, varied color from account identity without storing new account data.
      let colorSeed = 2166136261;
      for (const character of service.getLearnerProgressOwner()) colorSeed = Math.imul(colorSeed ^ character.codePointAt(0),16777619);
      profileButton.style.setProperty('--profile-hue',String((colorSeed >>> 0) % 360));
      profileButton.setAttribute('aria-label',name ? `حساب ${name}` : 'حسابي');
      if (isGuest || profileOwner !== service.getLearnerProgressOwner()) closeProfile();
    }
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
  signOutButton.addEventListener("click", signOut, { signal });
  update();
  return Object.freeze({
    update,
    destroy() {
      controller.abort();
      closeProfile();
      unsubscribe();
      unsubscribeProgress?.();
      unsubscribeResources?.();
      if (resourceTimer) clearInterval(resourceTimer);
    },
  });
}
