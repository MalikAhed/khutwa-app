/** Home shares the account's real trial expiry with the offers. */
export function mountSuperTrialCountdown({ container, resourceStore, getOwnerId, now = Date.now }) {
  if (!resourceStore) return { update() {}, destroy() {} };
  const badge = document.createElement("div");
  badge.className = "super-trial-countdown";
  badge.dataset.superTrialCountdown = "";
  badge.hidden = true;
  badge.innerHTML = '<span dir="rtl" data-super-trial-days></span>';
  let timer;
  const update = () => {
    const header = container.querySelector(".learner-dashboard__header");
    if (header && badge.parentElement !== header) header.append(badge);
    const remaining = Math.max(0,Math.ceil(((resourceStore.get(getOwnerId()).trialEndsAt || 0)-now())/1000));
    badge.hidden = remaining === 0;
    if (!remaining) { clearInterval(timer); timer = null; return; }
    const days = Math.ceil(remaining / 86400);
    badge.querySelector("[data-super-trial-days]").textContent = `${days} يوم`;
    if (!timer) timer = setInterval(update, 60000);
  };
  const unsubscribe = resourceStore.subscribe(update);
  const destroy = () => { clearInterval(timer); unsubscribe(); badge.remove(); };
  update();
  return Object.freeze({ update, destroy });
}
