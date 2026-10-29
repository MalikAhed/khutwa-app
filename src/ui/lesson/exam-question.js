import { replaceQuestionShell } from "./question-shell.js";
import { escapeHtml, prefersReducedMotion } from "../../lib/dom.js";
import { renderMarkdownDocument, renderLessonInline, mountMarkdownFeatures } from "../../markdown/renderer.js";
import { renderTemplateShell, renderTemplateFooter, renderTemplateScrollIndicators, mountTemplateScrollIndicator } from "../template-shell.js";
import { mountQuestionRating, renderQuestionRatingControls } from "../question-rating.js";
import { highlightEnglishText } from "./english-text.js";
import { mountSummaryScans } from "./summary-scans.js";
import { renderQuestionSourceTag, spaceWorkedEquations } from "./shared.js";

function layoutWrittenPrompt(source) {
  let text = source.trim();
  if (/(?:^|\s)1[.)]\s+/.test(text) && /(?:^|\s)2[.)]\s+/.test(text)) {
    text = text.replace(/:\s+(?=1[.)]\s+)/, ":\n\n");
    text = text.replace(/([^\n])\n(?=1[.)]\s+)/, "$1\n\n");
    for (let number = 2; number <= 20; number += 1) {
      text = text.replace(new RegExp(`[ \\t]+(?=${number}[.)][ \\t]+)`, "g"), "\n");
    }
  }
  const firstLine = text.indexOf("\n");
  return firstLine < 0 ? [text, ""] : [text.slice(0, firstLine), text.slice(firstLine).trim()];
}

/** Written answers are self-checked; worked solutions stay in the explanation dialog. */
export function renderExamQuestion(container, step, { locale = "ar", onBack, onContinue, onReveal, onAnswer, beforeAnswer, selfCheck = true } = {}) {
  const controller = new AbortController();
  const { signal } = controller;
  const { content } = step;
  const titleId = `exam-title-${step.id}`;
  const solutionId = `exam-solution-${step.id}`;
  const ar = locale === "ar";
  const [question, body] = layoutWrittenPrompt(content.body);
  container.dataset.lessonPresentation = "flashcard";
  replaceQuestionShell(container,renderTemplateShell({
    titleId, locale, showScrollIndicator:false,
    content:`<article class="level-lesson-copy lesson-exam-question" data-exam-card aria-label="${ar ? "بطاقة مراجعة" : "Review flashcard"}">
      <div class="lesson-flashcard-rotor">
        <section class="lesson-flashcard-face" data-exam-front aria-hidden="false">
          <div id="${escapeHtml(titleId)}-scroll" class="lesson-flashcard-scroll" tabindex="0" role="region" aria-label="${ar ? "السؤال" : "Question"}" aria-keyshortcuts="Enter Space" aria-description="${ar ? "اضغط Enter أو مسافة لقلب البطاقة" : "Press Enter or Space to flip the card"}">
            <div class="lesson-flashcard-copy">
              ${renderQuestionSourceTag(content)}
              <h1 id="${escapeHtml(titleId)}">${renderLessonInline(question, { locale })}</h1>
              ${body ? `<div class="markdown-rendered lesson-exam-body">${renderMarkdownDocument(body, { locale })}</div>` : ""}
            </div>
          </div>
          ${renderTemplateScrollIndicators({ scrollId:`${titleId}-scroll`, locale, horizontal:true })}
        </section>
        <section id="${escapeHtml(solutionId)}" class="lesson-flashcard-face lesson-flashcard-back" data-exam-solution hidden inert aria-hidden="true">
          <div id="${escapeHtml(solutionId)}-scroll" class="lesson-flashcard-scroll" tabindex="0" role="region" aria-label="${ar ? "الإجابة" : "Answer"}" aria-keyshortcuts="Enter Space" aria-description="${ar ? "اضغط Enter أو مسافة لقلب البطاقة" : "Press Enter or Space to flip the card"}">
            <div class="lesson-flashcard-copy">
              <div class="markdown-rendered lesson-final-answer" data-exam-final-answer>${renderMarkdownDocument(content.finalAnswer || (ar ? "الإجابة النهائية غير متاحة حاليًا." : "The final answer is currently unavailable."), { locale })}</div>
              ${selfCheck ? `<fieldset class="lesson-self-check" data-exam-self-check><legend>${ar ? "كيف كانت إجابتك؟" : "How did you do?"}</legend><div>
                <button class="system-action system-action--primary" type="button" data-exam-correct="true" aria-pressed="false">${ar ? "أجبتُ بشكل صحيح" : "I got it right"}<svg class="lesson-self-check-mark" viewBox="0 0 28 28" aria-hidden="true" focusable="false"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="m8 14 4 4 8-8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <button class="system-action system-action--primary" type="button" data-exam-correct="false" aria-pressed="false">${ar ? "أجبتُ بشكل خاطئ" : "I got it wrong"}<svg class="lesson-self-check-mark" viewBox="0 0 28 28" aria-hidden="true" focusable="false"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="m10 10 8 8m0-8-8 8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg></button>
              </div><p class="lesson-self-check-error" data-exam-choice-error role="alert" hidden></p></fieldset>` : ""}
            </div>
          </div>
          ${renderTemplateScrollIndicators({ scrollId:`${solutionId}-scroll`, locale, horizontal:true })}
        </section>
      </div>
    </article>`,
    footer:renderTemplateFooter({ locale, primaryLabel:ar ? "متابعة" : "CONTINUE", primaryAttributes:{ disabled:!selfCheck } }),
  }));
  const card = container.querySelector("[data-exam-card]");
  if (ar) {
    highlightEnglishText(card.querySelector("[data-exam-front] .lesson-flashcard-copy"));
    highlightEnglishText(card.querySelector("[data-exam-solution] .lesson-flashcard-copy"));
  }
  const rotor = card.querySelector(".lesson-flashcard-rotor");
  const front = card.querySelector("[data-exam-front]");
  const solution = card.querySelector("[data-exam-solution]");
  spaceWorkedEquations(solution);
  const next = container.querySelector("[data-template-primary]");
  const footer = next.closest(".level-layout-actions");
  footer.classList.add("lesson-exam-actions");
  footer.querySelector('.level-feedback').insertAdjacentHTML("afterend", renderQuestionRatingControls(locale));
  const rating = footer.querySelector(".level-question-rating-panel");
  rating.inert = true;
  mountQuestionRating(footer, signal);
  let flipped = false;
  let revealed = false;
  let assessment = null;
  let submitted = false;
  let animation = null;
  let pointerStart = null;
  let dragged = false;

  const refreshScrollIndicators = [];
  card.querySelectorAll(".lesson-flashcard-scroll").forEach((scroll, index) => {
    mountSummaryScans(scroll, { titleId:`${titleId}-face-${index}`, locale, signal, exam:true });
    mountMarkdownFeatures(scroll, { locale, signal, scrollSurface:scroll });
    refreshScrollIndicators.push(mountTemplateScrollIndicator(scroll.parentElement, { signal, surface:scroll }));
  });
  const hideInactiveFace = () => {
    front.hidden = flipped;
    solution.hidden = !flipped;
    refreshScrollIndicators.forEach(refresh => refresh?.());
    rotor.classList.remove("is-flipping");
  };
  const flip = showAnswer => {
    if (showAnswer === flipped || signal.aborted) return;
    const from = getComputedStyle(rotor).transform;
    animation?.cancel();
    animation = null;
    front.hidden = false;
    solution.hidden = false;
    flipped = showAnswer;
    rating.inert = !flipped;
    rotor.classList.toggle("is-flipped", flipped);
    front.inert = flipped;
    solution.inert = !flipped;
    front.setAttribute("aria-hidden", String(flipped));
    solution.setAttribute("aria-hidden", String(!flipped));
    if (flipped && !selfCheck) next.disabled = false;
    if (flipped && !revealed) { revealed = true; onReveal?.(); }
    const visibleFace = flipped ? solution : front;
    visibleFace.querySelector(".lesson-flashcard-scroll").focus({ preventScroll:true });
    if (prefersReducedMotion() || !rotor.animate) {
      hideInactiveFace();
      return;
    }
    // Native scrollbars and resize-driven cues should not repaint through a 3D turn.
    rotor.classList.add("is-flipping");
    const turn = rotor.animate([
      { transform:from }, { transform:flipped ? "rotateY(180deg)" : "rotateY(0deg)" },
    ], { duration:420, easing:"cubic-bezier(.2,.7,.2,1)" });
    animation = turn;
    void turn.finished.then(() => {
      if (signal.aborted || animation !== turn) return;
      animation = null;
      hideInactiveFace();
    }).catch(() => {});
  };
  container.querySelectorAll("[data-exam-correct]").forEach(button => {
    button.addEventListener("click", () => {
      if (!flipped || submitted) return;
      container.querySelector("[data-heart-message]")?.remove();
      container.querySelector("[data-exam-choice-error]").hidden = true;
      assessment = button.dataset.examCorrect === "true";
      container.querySelectorAll("[data-exam-correct]").forEach(control => {
        control.setAttribute("aria-pressed", String(control === button));
      });
      next.disabled = false;
    }, { signal });
  });
  card.addEventListener("keydown", event => {
    if (event.defaultPrevented || event.repeat || event.isComposing || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (!["Enter", " "].includes(event.key) || !event.target.matches(".lesson-flashcard-scroll")) return;
    event.preventDefault();
    flip(!flipped);
  }, { signal });
  card.addEventListener("pointerdown", event => {
    pointerStart = { x:event.clientX, y:event.clientY };
    dragged = false;
  }, { signal, passive:true });
  card.addEventListener("pointermove", event => {
    if (pointerStart && Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 8) dragged = true;
  }, { signal, passive:true });
  card.addEventListener("pointercancel", () => { dragged = true; pointerStart = null; }, { signal });
  card.addEventListener("click", event => {
    pointerStart = null;
    if (dragged || window.getSelection()?.toString() || event.target.closest("button,a,summary,input,textarea,select,pre,.lesson-summary-scan.is-expanded")) return;
    const scroll = event.target.closest(".lesson-flashcard-scroll");
    if (scroll) {
      const bounds = scroll.getBoundingClientRect();
      const left = bounds.left + scroll.clientLeft;
      if (event.clientX < left || event.clientX > left + scroll.clientWidth || event.clientY > bounds.top + scroll.clientTop + scroll.clientHeight) return;
    }
    flip(!flipped);
  }, { signal });
  next.addEventListener("click", () => {
    if (next.disabled || submitted) return;
    if (selfCheck && assessment === null) {
      if (!flipped) flip(true);
      const message = container.querySelector("[data-exam-choice-error]");
      message.textContent = ar ? "اختر أولًا: أجبتُ بشكل صحيح أو أجبتُ بشكل خاطئ." : "Choose I got it right or I got it wrong first.";
      message.hidden = false;
      message.scrollIntoView({ block:"nearest" });
      container.querySelector("[data-exam-correct]").focus({ preventScroll:true });
      return;
    }
    if (selfCheck) {
      const blocked = beforeAnswer?.();
      if (blocked) {
        let message = container.querySelector("[data-heart-message]");
        if (!message) {
          message = document.createElement("p");
          message.dataset.heartMessage = "";
          message.setAttribute("role", "status");
          container.querySelector("[data-exam-self-check]").append(message);
        }
        message.textContent = blocked;
        return;
      }
    }
    submitted = true;
    next.disabled = true;
    if (selfCheck) onAnswer?.({ correct:assessment });
    onContinue?.();
  }, { signal });
  container.querySelector("[data-template-back]").addEventListener("click", () => onBack?.(), { signal });
  return () => {
    controller.abort();
    animation?.cancel();
    rotor.classList.remove("is-flipping");
    delete container.dataset.lessonPresentation;
  };
}
