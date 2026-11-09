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
  container.querySelectorAll('math[display="block"]').forEach(math => {
    let expression = math.firstElementChild;
    while (expression?.localName === "mrow" && expression.children.length === 1
      && expression.firstElementChild.localName === "mrow") expression = expression.firstElementChild;
    if (expression?.localName !== "mrow") return;
    const terms = [...expression.children];
    const equals = terms.flatMap((term,index) => term.localName === "mo" && term.textContent === "=" ? [index] : []);
    // Separate a calculation chain, never a comma-separated system of equations.
    if (equals.length < 2 || equals[0] === 0 || equals.at(-1) === terms.length - 1
      || terms.some(term => /^[,،;؛]$/.test(term.textContent))) return;
    const node = name => math.ownerDocument.createElementNS(math.namespaceURI,name);
    const table = node("mtable");
    const rtl = math.getAttribute("dir") === "rtl";
    table.setAttribute("columnspacing","0.3em");
    for (let index=0; index<equals.length; index++) {
      const row=node("mtr"), left=node("mtd"), right=node("mtd"), value=node("mrow");
      left.setAttribute("columnalign",rtl ? "left" : "right");
      right.setAttribute("columnalign",rtl ? "right" : "left");
      if (index === 0) left.append(...terms.slice(0,equals[0]));
      value.append(...terms.slice(equals[index],equals[index+1] ?? terms.length));
      right.append(value);row.append(left,right);table.append(row);
    }
    expression.replaceChildren(table);
  });
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
  if (lesson?.locale === "ar" || lesson?.locale === "en") return lesson.locale;
  return /[\u0600-\u06ff]/.test(
    `${lesson?.title || ""} ${lesson?.summary || ""}`,
  )
    ? "ar"
    : "en";
}
