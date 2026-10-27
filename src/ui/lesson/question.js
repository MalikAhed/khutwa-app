import { replaceQuestionShell } from "./question-shell.js";
import { escapeHtml } from "../../lib/dom.js";
import { launchCelebration } from "../celebration.js";
import { getLessonUiCopy } from "../lesson-ui-copy.js";
import { renderQuestionLayout } from "./question-layout.js";
import { mountQuestionRating, renderQuestionRatingControls } from "../question-rating.js";
import { highlightEnglishText } from "./english-text.js";
import { mountSummaryScans } from "./summary-scans.js";
import { mountTemplateScrollIndicator } from "../template-shell.js";
import { mountMarkdownFeatures } from "../../markdown/renderer.js";

const CHECK_ACTION = Object.freeze({ CHECK:"check", RETRY:"retry", CONTINUE:"continue" });
const QUESTION_RESULT_LABELS_ENABLED = false;

function triggerPinata(signal) {
  launchCelebration({ className:"ui-lab-pinata", signal });
}

function setCheckAction(button, label, state, text, disabled = button.disabled) {
  button.dataset.actionState = state;
  button.disabled = disabled;
  label.textContent = text;
}

function compactResult(copy, correct) {
  const path = correct ? "m10.5 20.8 6.2 6.2 13-14" : "m12.5 12.5 15 15m0-15-15 15";
  const modifier = correct ? "correct" : "wrong";
  const label = correct ? copy.excellent : copy.wrongAnswer;
  return `<span class="level-result-icon level-result-icon--${modifier}"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="${path}"/></svg></span><span class="level-result-copy"><strong>${escapeHtml(label)}</strong></span>`;
}

/** Mount the published multiple-choice card inside the lesson journey. */
export function renderQuestion(container, { definition, onBack, onContinue, onAnswer, beforeAnswer, locale = "en" } = {}) {
  if (definition?.type !== "mcq" || !definition.content) throw new TypeError("A published multiple-choice question is required.");
  const controller = new AbortController();
  const { signal } = controller;
  const copy = getLessonUiCopy(locale);
  const config = definition.content;
  container.classList.add("ui-lab-template-open", "ui-lab-mcq-open");
  replaceQuestionShell(container,renderQuestionLayout({ ...definition, content:config }, { locale }));
  if (locale === "ar") highlightEnglishText(container.querySelector(".ui-lab-mcq"));
  mountSummaryScans(container.querySelector(".ui-lab-mcq"), { titleId:definition.id || "mcq", locale, signal, exam:true });
  mountMarkdownFeatures(container.querySelector(".ui-lab-mcq"), { locale, signal, scrollSurface:container.querySelector(".level-layout-task") });
  const closeTemplate = () => onContinue?.();
  container.querySelector("[data-template-back]").addEventListener("click", () => onBack?.(), { signal });
  mountTemplateScrollIndicator(container, { signal });
  const destroy = () => {
    controller.abort();
    document.querySelector(".ui-lab-pinata")?.remove();
    container.classList.remove("ui-lab-template-open", "ui-lab-mcq-open");
  };

  const answers = [...container.querySelectorAll("[data-ui-lab-answer]")];
  const overflowingContent = answer => [...answer.querySelectorAll(".lesson-inline-scroll")]
    .filter(scroll => scroll.scrollWidth > scroll.clientWidth + 1);
  const updateReadingShortcuts = () => answers.forEach(answer => {
    if (overflowingContent(answer).length) {
      answer.setAttribute("aria-keyshortcuts", "ArrowLeft ArrowRight");
      answer.setAttribute("aria-description", locale === "ar"
        ? "استخدم السهمين الأيمن والأيسر لقراءة بقية الإجابة."
        : "Use the Left and Right arrow keys to read the rest of the answer.");
    } else {
      answer.removeAttribute("aria-keyshortcuts");
      answer.removeAttribute("aria-description");
    }
  });
  const readingObserver = new ResizeObserver(updateReadingShortcuts);
  answers.forEach(answer => {
    readingObserver.observe(answer);
    answer.querySelectorAll(".lesson-inline-scroll, .lesson-inline-scroll > :is(math,img)").forEach(node => readingObserver.observe(node));
    answer.addEventListener("keydown", event => {
      if (event.defaultPrevented || event.isComposing || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      const left = event.key === "ArrowLeft";
      const regions = overflowingContent(answer);
      const scroll = (left ? regions.reverse() : regions).find(region => {
        const rtl = getComputedStyle(region).direction === "rtl";
        return left ? (rtl ? region.scrollWidth - region.clientWidth + region.scrollLeft : region.scrollLeft) > 1
          : (rtl ? -region.scrollLeft : region.scrollWidth - region.clientWidth - region.scrollLeft) > 1;
      });
      if (!scroll) return;
      event.preventDefault();
      scroll.scrollBy({ left:(left ? -1 : 1) * Math.max(60, scroll.clientWidth * .6), behavior:"instant" });
    }, { signal });
  });
  updateReadingShortcuts();
  signal.addEventListener("abort", () => readingObserver.disconnect(), { once:true });
  const checkButton = container.querySelector("[data-ui-lab-check]");
  const feedback = container.querySelector("[data-ui-lab-feedback]");
  const footer = feedback.closest(".level-layout-actions");
  const checkLabel = checkButton.querySelector("[data-ui-lab-check-label]");
  let selectedAnswer = null;
  const checkText = locale === "ar" ? "تحقّق" : "CHECK";
  setCheckAction(checkButton, checkLabel, CHECK_ACTION.CHECK, checkText, true);

  feedback.insertAdjacentHTML("afterend",renderQuestionRatingControls(locale));
  mountQuestionRating(footer, signal);

  answers.forEach((answer) => answer.addEventListener("click", () => {
    if (checkButton.dataset.actionState === CHECK_ACTION.CONTINUE) return;
    selectedAnswer = answer;
    answers.forEach((option) => {
      option.classList.toggle("is-selected", option === answer);
      option.classList.remove("is-correct", "is-wrong");
      option.setAttribute("aria-pressed", String(option === answer));
    });
    feedback.className = "level-feedback";
    feedback.textContent = "";
    setCheckAction(checkButton, checkLabel, CHECK_ACTION.CHECK, checkText, false);
  }, { signal }));

  checkButton.addEventListener("click", () => {
    if (checkButton.dataset.actionState === CHECK_ACTION.CONTINUE) { closeTemplate(); return; }
    if (!selectedAnswer) return;
    const blocked = beforeAnswer?.();
    if (blocked) {
      feedback.className = "level-feedback is-blocked";
      feedback.textContent = blocked;
      feedback.setAttribute("role", "status");
      return;
    }
    const isCorrect = selectedAnswer.dataset.correct === "true";
    onAnswer?.({ correct:isCorrect });
    answers.forEach((answer) => {
      answer.setAttribute("aria-disabled", "true");
      answer.classList.toggle("is-correct", answer.dataset.correct === "true");
      answer.classList.toggle("is-wrong", answer === selectedAnswer && !isCorrect);
    });
    feedback.className = `level-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
    feedback.classList.toggle("level-feedback--quiet",!QUESTION_RESULT_LABELS_ENABLED);
    if (QUESTION_RESULT_LABELS_ENABLED) feedback.innerHTML = compactResult(copy, isCorrect);
    else feedback.textContent = isCorrect ? copy.excellent : copy.wrongAnswer;
    setCheckAction(checkButton, checkLabel, CHECK_ACTION.CONTINUE, copy.continue);
    if (isCorrect) triggerPinata(signal);
  }, { signal });

  return destroy;
}
