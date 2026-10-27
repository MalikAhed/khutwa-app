// Keep every action at the welcome screen's natural position, including after resize.
export function alignOnboardingActions(initialPage, signal, referencePage = initialPage) {
  let page = initialPage;
  const view = page.ownerDocument.defaultView;
  const reference = referencePage.cloneNode(true);
  reference.classList.add("onboarding-layout-reference");
  reference.setAttribute("aria-hidden", "true");
  reference.inert = true;
  reference.querySelectorAll(".onboarding-step:not(.onboarding-step--hello), [data-auth-error]").forEach(node => node.remove());
  reference.querySelectorAll("*").forEach(node => {
    [...node.attributes].forEach(attribute => {
      if (attribute.name === "id" || attribute.name.startsWith("data-"))
        node.removeAttribute(attribute.name);
    });
  });
  const update = () => {
    reference.style.width = `${page.clientWidth}px`;
    const bounds = reference.getBoundingClientRect();
    const actionTop = reference.querySelector(".onboarding-actions").getBoundingClientRect().top - bounds.top
      + parseFloat(view.getComputedStyle(page).getPropertyValue("--space-4"));
    const navBottom = reference.querySelector(".onboarding-nav").getBoundingClientRect().bottom - bounds.top;
    page.style.setProperty("--onboarding-action-top", `${actionTop}px`);
    page.style.setProperty("--onboarding-nav-bottom", `${navBottom}px`);
    page.style.setProperty("--onboarding-page-height", `${bounds.height}px`);
    const card = page.querySelector(".auth-card");
    if (card) {
      const button = card.querySelector('[type="submit"]');
      const offset = button.offsetTop + card.clientTop;
      page.style.setProperty("--auth-card-top", `${Math.max(navBottom + 16, actionTop - offset)}px`);
    }
  };
  const observer = new view.ResizeObserver(update);
  observer.observe(reference);
  observer.observe(reference.querySelector(".onboarding-step--hello"));
  const card = initialPage.querySelector(".auth-card");
  if (card) observer.observe(card);
  view.addEventListener("resize", update, { signal });
  signal.addEventListener("abort", () => {
    observer.disconnect();
    reference.remove();
  }, { once:true });
  const attach = target => {
    page = target;
    page.parentElement.append(reference);
    page.classList.add("has-aligned-onboarding-actions");
    update();
  };
  attach(page);
  return attach;
}
