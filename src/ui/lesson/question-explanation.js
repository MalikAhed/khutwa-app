import { escapeHtml, prefersReducedMotion } from "../../lib/dom.js";
import { EXPLANATION_GEM_COST } from "../../domain/question-explanations.js";
import { renderMarkdownDocument, mountMarkdownFeatures } from "../../markdown/renderer.js";
import { spaceWorkedEquations } from "./shared.js";

/** A purchase opens reading only; it never answers or completes the question. */
export function mountQuestionExplanation({ host, explanation, locale = "ar", signal }) {
  if (!explanation) return;
  const ar = locale === "ar";
  const footer = host.querySelector(".level-layout-actions");
  const primary = footer?.querySelector("[data-template-primary]");
  if (!primary) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "level-action level-action--explain";
  button.dataset.questionExplain = "";
  button.setAttribute("aria-haspopup","dialog");
  const updateLabel = () => {
    const unlocked = explanation.isUnlocked();
    const included = explanation.isIncluded?.();
    button.dataset.explanationIncluded = String(Boolean(included));
    button.innerHTML = `<span>${ar ? "اشرح" : "Explain"}</span>${included
      ? '<span class="explanation-included ui-number" aria-hidden="true">∞</span>'
      : unlocked ? "" : `<span class="explanation-price"><bdi class="ui-number">${EXPLANATION_GEM_COST}</bdi><img src="assets/icons/nav-gem.svg" width="22" height="22" alt="${ar ? "جوهرة" : "gems"}"></span>`}`;
    button.setAttribute("aria-label",included ? (ar ? "اشرح، مشمول مع سوبر" : "Explain, included with Super")
      : unlocked ? (ar ? "عرض الشرح المفتوح" : "View unlocked explanation")
        : (ar ? `اشرح، فتح دائم مقابل ${EXPLANATION_GEM_COST} جوهرة` : `Explain, unlock for ${EXPLANATION_GEM_COST} gems`));
  };
  updateLabel();
  const unsubscribe = explanation.subscribe?.(updateLabel);
  signal.addEventListener("abort",() => unsubscribe?.(),{once:true});
  primary.before(button);
  footer.classList.add("level-layout-actions--explanations");
  let dialog;
  let opening;
  let closingAnimation;
  const removeDialog = () => {
    opening?.abort();
    closingAnimation?.cancel();
    closingAnimation = null;
    dialog?.remove();
    dialog = null;
  };
  button.addEventListener("click",async () => {
    if (dialog?.open || signal.aborted) return;
    // A native close event is queued; retire its dialog before a quick reopen.
    if (dialog) removeDialog();
    const wasIncluded = button.dataset.explanationIncluded === "true";
    updateLabel();
    if (wasIncluded && !explanation.isIncluded?.() && !explanation.isUnlocked()) return;
    opening = new AbortController();
    const requestSignal = AbortSignal.any([signal,opening.signal]);
    dialog = document.createElement("dialog");
    const activeDialog = dialog;
    activeDialog.className = "question-explanation-dialog";
    activeDialog.dir = ar ? "rtl" : "ltr";
    activeDialog.lang = locale;
    activeDialog.setAttribute("aria-labelledby","question-explanation-title");
    activeDialog.innerHTML = `<header><h2 id="question-explanation-title">${ar ? "الشرح المفصّل" : "Detailed explanation"}</h2><button type="button" data-explanation-close aria-label="${ar ? "إغلاق الشرح" : "Close explanation"}">×</button></header><div data-explanation-body aria-busy="true"><p role="status">${ar ? "جارٍ فتح الشرح…" : "Opening explanation…"}</p></div>`;
    let closing = false;
    const dismiss = () => {
      if (closing || !activeDialog.open) return;
      closing = true;
      opening.abort();
      if (prefersReducedMotion() || !activeDialog.animate) { activeDialog.close(); return; }
      const from = getComputedStyle(activeDialog).transform;
      activeDialog.getAnimations().forEach(animation => animation.cancel());
      closingAnimation = activeDialog.animate([{transform:from},{transform:"translateY(100%)"}],
        {duration:220,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});
      void closingAnimation.finished.then(() => {
        if (!signal.aborted && dialog === activeDialog) activeDialog.close();
      }).catch(() => {});
    };
    activeDialog.querySelector("[data-explanation-close]").addEventListener("click",dismiss,{signal:requestSignal});
    activeDialog.addEventListener("cancel",event => { event.preventDefault(); dismiss(); },{signal:requestSignal});
    activeDialog.addEventListener("close",() => {
      if (dialog !== activeDialog) { activeDialog.remove(); return; }
      removeDialog();
      if (!signal.aborted && button.isConnected) button.focus({preventScroll:true});
    },{once:true});
    document.body.append(activeDialog);
    activeDialog.showModal();
    const body = activeDialog.querySelector("[data-explanation-body]");
    try {
      const result = await explanation.unlock({signal:requestSignal});
      if (requestSignal.aborted || dialog !== activeDialog) return;
      updateLabel();
      body.innerHTML = `${result.note ? `<p class="question-explanation-note">${escapeHtml(result.note)}</p>` : ""}<div class="markdown-rendered">${renderMarkdownDocument(result.markdown,{locale})}</div>`;
      spaceWorkedEquations(body);
      mountMarkdownFeatures(body,{locale,signal:requestSignal,scrollSurface:body});
    } catch (error) {
      if (requestSignal.aborted || dialog !== activeDialog) return;
      body.innerHTML = `<p role="status">${error.code === "insufficient-gems"
        ? (ar ? "تحتاج إلى 50 جوهرة لفتح هذا الشرح. رصيدك غير كافٍ." : "You need 50 gems to unlock this explanation. Your balance is too low.")
        : error.code === "unavailable"
          ? (ar ? "الشرح المفصّل لهذا السؤال غير متاح حاليًا. لم تُخصم أي جواهر." : "This explanation is not available yet. No gems were charged.")
          : (ar ? "تعذّر فتح الشرح. أغلق النافذة وحاول مجددًا؛ لن تُخصم الجواهر مرتين." : "Could not open the explanation. Close and retry; you will not be charged twice.")}</p>`;
      updateLabel();
    } finally {
      if (dialog === activeDialog) body.setAttribute("aria-busy","false");
    }
  },{signal});
  signal.addEventListener("abort",removeDialog,{once:true});
}
