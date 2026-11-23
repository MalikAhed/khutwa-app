import { escapeHtml } from "../../lib/dom.js";
import { renderLessonInline, renderMarkdownDocument } from "../../markdown/renderer.js";
import { getLessonUiCopy, lessonChoiceMarker } from "../lesson-ui-copy.js";
import { renderTemplateFooter, renderTemplateShell } from "../template-shell.js";
import { renderQuestionHeader } from "./shared.js";

export function renderQuestionExample(example, notation) {
  return example ? `<div class="lesson-question-example markdown-rendered">${renderMarkdownDocument(example, notation)}</div>` : "";
}

export function renderQuestionChoice(answer, notation) {
  const { id, text } = answer;
  const label = notation.locale === "ar" && id === "true" && text === "True" ? "صح"
    : notation.locale === "ar" && id === "false" && text === "False" ? "خطأ" : text;
  return renderLessonInline(label, notation);
}

export function renderQuestionContent(config, { titleId = "ui-lab-content-title", locale = "en", westernNotation = false } = {}) {
  const copy = getLessonUiCopy(locale);
  const notation = { locale, westernNotation };
  const headingCopyId = `${titleId}-copy`;
  const answerAttribute = "data-ui-lab-answer";
  const example = renderQuestionExample(config.example, notation);
  const compactOptions = config.prompt.length <= 105 && config.answers.every(answer => answer.text.length <= 48);
  return `<div class="level-lesson-copy ui-lab-mcq lesson-question${example ? " lesson-question--with-example" : ""}${compactOptions ? " lesson-question--compact-options" : ""}"><h1 id="${escapeHtml(titleId)}" aria-labelledby="${escapeHtml(headingCopyId)}"><span id="${escapeHtml(headingCopyId)}">${renderLessonInline(config.prompt, notation)}</span></h1>${example}<div class="level-answer-list lesson-answer-list" data-answer-count="${config.answers.length}" role="group" aria-label="${escapeHtml(copy.answerChoices)}">${config.answers.map((answer, index) => {
    const markerId = `${titleId}-choice-${index}-marker`;
    const answerId = `${titleId}-choice-${index}-copy`;
    return `<button class="lesson-answer" type="button" ${answerAttribute}="${escapeHtml(answer.id)}" data-correct="${answer.correct === true}" aria-pressed="false" aria-labelledby="${escapeHtml(`${markerId} ${answerId}`)}"><span id="${escapeHtml(markerId)}">${lessonChoiceMarker(index, locale)}</span><b id="${escapeHtml(answerId)}">${renderQuestionChoice(answer, notation)}</b></button>`;
  }).join("")}</div></div>`;
}

export function renderQuestionLayout(definition, { locale = "en", westernNotation = false } = {}) {
  return renderTemplateShell({
    horizontal:true,
    contentHeader:renderQuestionHeader(definition.content),
    content:renderQuestionContent(definition.content, { locale, westernNotation }),
    footer:renderTemplateFooter({ locale, feedback:"", feedbackAttributes:{ "data-ui-lab-feedback":true, "aria-live":"polite" }, primaryLabel:locale === "ar" ? "تحقّق" : "CHECK", primaryAttributes:{ "data-ui-lab-check":true, disabled:true }, primaryLabelAttributes:{ "data-ui-lab-check-label":true }, showShortcut:false }),
    locale,
  });
}
