export function renderQuestionSourceTag(content) {
  const title = String(content?.title || "").trim();
  if (!title) return "";
  // A named question collection such as "الكامل" is not the textbook.
  const book = /^(?:الكتاب|كتاب|الرزمة التعليمية)(?:\s|،|,|$)/.test(title);
  return `<span class="lesson-question-source" dir="rtl">${book ? "سؤال من الكتاب" : "سؤال امتحان سابق"}</span>`;
}

export function lessonReferenceLabel(reference) {
  return Number.isInteger(reference)
    ? `Day ${reference}`
    : String(reference || "Lesson");
}

/** Give stacked calculation lines room without spreading out matrix rows. */
export function spaceWorkedEquations(container) {
  container.querySelectorAll("mtable").forEach(table => {
    const equationRows = [...table.children].filter(row => row.localName === "mtr"
      && [...row.querySelectorAll("mo")].some(operator => ["=","≈","<",">","≤","≥"].includes(operator.textContent.trim())));
    if (equationRows.length < 2) return;
    table.classList.add("lesson-equation-steps");
    const spacing = (table.getAttribute("rowspacing") || "").split(/\s+/);
    if (!spacing.every(value => value.endsWith("em") && parseFloat(value) >= 1)) table.setAttribute("rowspacing","1em");
  });
}

export function lessonLocale(lesson) {
  return /[\u0600-\u06ff]/.test(
    `${lesson?.title || ""} ${lesson?.summary || ""}`,
  )
    ? "ar"
    : "en";
}
