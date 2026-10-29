import { escapeHtml } from "../lib/dom.js";
import { getLessonUiCopy } from "./lesson-ui-copy.js";

const ATTRIBUTE_NAME = /^[A-Za-z_:][A-Za-z0-9:._-]*$/;

function renderAttributes(attributes = {}) {
  return Object.entries(attributes).map(([name, value]) => {
    if (!ATTRIBUTE_NAME.test(name)) throw new TypeError(`Invalid HTML attribute name: ${name}`);
    if (value === false || value == null) return "";
    if (value === true) return ` ${name}`;
    return ` ${name}="${escapeHtml(value)}"`;
  }).join("");
}

export function renderTemplateFooter(options = {}) {
  const {
  locale = "en",
  className = "level-layout-actions",
  backLabel, backAttributes = {},
  feedback = "", feedbackClass = "level-feedback", feedbackAttributes = {},
  primaryLabel, primaryAttributes = {}, primaryLabelAttributes = {}, primaryTrailingContent = "",
  } = options;
  const copy = getLessonUiCopy(locale);
  const resolvedBackLabel = backLabel ?? copy.back;
  const resolvedPrimaryLabel = primaryLabel ?? copy.continue;
  return `<nav class="${escapeHtml(className)}" dir="${locale === "ar" ? "rtl" : "ltr"}" aria-label="${escapeHtml(copy.lessonNavigation)}">
    <p class="${escapeHtml(feedbackClass)}"${renderAttributes(feedbackAttributes)}>${escapeHtml(feedback)}</p>
    <div class="level-layout-action-group">
      <button class="level-action" type="button" data-template-back${renderAttributes(backAttributes)}>${escapeHtml(resolvedBackLabel)}</button>
      <button class="level-action level-action--primary level-action--check" type="button" data-template-primary${renderAttributes(primaryAttributes)}><span data-template-action-label${renderAttributes(primaryLabelAttributes)}>${escapeHtml(resolvedPrimaryLabel)}</span>${primaryTrailingContent}</button>
    </div>
  </nav>`;
}

export function mountTemplateEnterShortcut(container, { signal } = {}) {
  container.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.key !== "Enter" || event.repeat || event.isComposing || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target.closest("button, input, textarea, select, a, summary, [contenteditable], .lesson-math-scroll, .lesson-inline-scroll")) return;
    const primary = [...container.querySelectorAll("[data-template-primary]:not(:disabled):not([hidden])")]
      .find((button) => !button.closest("[hidden]"));
    if (!primary) return;
    event.preventDefault();
    primary.click();
  }, { signal });
}

/** Keep lesson reading zoom separate from the footer controls. */
export function mountTemplateContentZoom(container, { signal } = {}) {
  let zoom = 1;
  container.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.isComposing || event.altKey || !(event.ctrlKey || event.metaKey)) return;
    const increase = ["+", "="].includes(event.key) || event.code === "NumpadAdd";
    const decrease = event.key === "-" || event.code === "NumpadSubtract";
    const reset = event.key === "0" || ["Digit0", "Numpad0"].includes(event.code);
    if (!increase && !decrease && !reset) return;
    event.preventDefault();
    zoom = reset ? 1 : Math.max(.5, Math.min(4, zoom + (increase ? .25 : -.25)));
    container.style.setProperty("--lesson-content-zoom", String(zoom));
  }, { signal });
  signal?.addEventListener("abort", () => container.style.removeProperty("--lesson-content-zoom"), { once:true });
}

/** Reveal remaining reading content without moving it until the learner asks. */
export function mountTemplateScrollIndicator(container, { signal, surface = container.querySelector(".level-layout-task") } = {}) {
  const button = container.querySelector("[data-content-scroll]");
  const leftButton = container.querySelector("[data-content-scroll-left]");
  if (!surface || !button) return;
  const copy = getLessonUiCopy(surface.closest("[lang]")?.lang);
  const horizontalSurfaces = leftButton ? [...surface.querySelectorAll(".markdown-table-scroll, pre, .lesson-math-scroll")]
    .filter(target => !target.closest("button")) : [];
  const horizontalIndicators = horizontalSurfaces.map((target, index) => {
    const cue = index === 0 ? leftButton : leftButton.cloneNode(true);
    const rtl = getComputedStyle(target).direction === "rtl";
    cue.classList.toggle("lesson-scroll-cue--left", rtl);
    cue.classList.toggle("lesson-scroll-cue--right", !rtl);
    cue.setAttribute("aria-label", rtl ? copy.moreLeft : copy.moreRight);
    cue.querySelector("path").setAttribute("d", rtl ? "M21 8H11V3l-8 9 8 9v-5h10Z" : "M3 8h10V3l8 9-8 9v-5H3Z");
    const formulaCard = target.parentElement.matches(".lesson-math-sample") ? target.parentElement : null;
    if (formulaCard) formulaCard.append(cue);
    else {
      const frame = document.createElement(target.matches("span") ? "span" : "div");
      frame.className = `lesson-scroll-frame${target.matches("span") ? " lesson-scroll-frame--inline" : ""}`;
      target.before(frame);
      frame.append(target, cue);
    }
    target.id ||= `${surface.id}-horizontal-${index}`;
    cue.setAttribute("aria-controls", target.id);
    cue.addEventListener("click", () => target.scrollBy({
      left:(rtl ? -1 : 1) * Math.max(120, target.clientWidth * .75),
      behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    }), { signal });
    return { target, cue };
  });
  if (!horizontalIndicators.length) leftButton?.remove();
  const moreToRead = target => {
    if (!target.clientWidth) return false;
    const style = getComputedStyle(target);
    if (!["auto", "scroll"].includes(style.overflowX)) return false;
    const remaining = target.scrollWidth - target.clientWidth - Math.abs(target.scrollLeft);
    return remaining > 2;
  };
  let frame = 0;
  const update = () => {
    if (signal?.aborted) return;
    const zoom = Number(getComputedStyle(surface).zoom) || 1;
    const overflow = surface.scrollHeight > surface.parentElement.clientHeight / zoom + 2;
    const moreBelow = surface.clientHeight > 0 && overflow && surface.scrollHeight - surface.clientHeight - surface.scrollTop > 2;
    if (surface.classList.contains("level-layout-task")) surface.tabIndex = overflow ? 0 : -1;
    if (!moreBelow && button === document.activeElement) surface.focus({ preventScroll:true });
    button.hidden = !moreBelow;
    horizontalIndicators.forEach(({ target, cue }) => {
      const more = moreToRead(target);
      if (!more && cue === document.activeElement) target.focus({ preventScroll:true });
      cue.hidden = !more;
    });
  };
  const scheduleUpdate = () => {
    if (frame || signal?.aborted) return;
    frame = window.requestAnimationFrame(() => { frame = 0; update(); });
  };
  button.addEventListener("click", () => surface.scrollBy({
    top:Math.max(120, surface.clientHeight * .75),
    behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  }), { signal });
  surface.addEventListener("scroll", scheduleUpdate, { signal, passive:true, capture:true });
  surface.addEventListener("load", scheduleUpdate, { signal, capture:true });
  const observer = new ResizeObserver(scheduleUpdate);
  new Set([surface, ...surface.children, ...horizontalSurfaces, ...horizontalSurfaces.flatMap(target => [...target.children])])
    .forEach(child => observer.observe(child));
  scheduleUpdate();
  signal?.addEventListener("abort", () => {
    observer.disconnect();
    window.cancelAnimationFrame(frame);
  }, { once:true });
  return update;
}

export function renderTemplateScrollIndicators({ scrollId, locale = "en", horizontal = false }) {
  const copy = getLessonUiCopy(locale);
  return `<button class="lesson-scroll-cue" type="button" data-content-scroll hidden aria-controls="${escapeHtml(scrollId)}" aria-label="${escapeHtml(`${copy.moreBelow}: ${copy.showMoreContent}`)}"><span>${escapeHtml(copy.moreBelow)}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v10H3l9 8 9-8h-5V3Z"/></svg></button>${horizontal ? `<button class="lesson-scroll-cue lesson-scroll-cue--left" type="button" data-content-scroll-left hidden aria-controls="${escapeHtml(scrollId)}" aria-label="${escapeHtml(copy.moreLeft)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8H11V3l-8 9 8 9v-5h10Z"/></svg></button>` : ""}`;
}

export function renderTemplateShell({ content, footer, showScrollIndicator = true, horizontal = false, titleId = "ui-lab-content-title", locale = "en" }) {
  const scrollId = `${titleId}-scroll`;
  return `<div class="level-layout-preview" lang="${locale}" dir="${locale === "ar" ? "rtl" : "ltr"}">
    <div class="level-layout-content">
      <section class="level-layout-task" id="${escapeHtml(scrollId)}" aria-labelledby="${escapeHtml(titleId)}">${content}</section>
      ${showScrollIndicator ? renderTemplateScrollIndicators({ scrollId, locale, horizontal }) : ""}
    </div>
    ${footer}
  </div>`;
}
