import { escapeHtml } from "../../lib/dom.js";

const FILTER_SUBJECTS = new Set(["mathematics", "mathematics-2", "physics"]);
const QUESTION_FILTER_ENABLED = false;

function questionText(step) {
  if (step.type === "mcq") return step.content?.prompt || "";
  if (step.type === "exam-question") return step.content?.body || "";
  if (step.question?.prompt) return step.question.prompt;
  return "";
}

function displayQuestion(value) {
  return String(value || "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/`mathml:\s*/g, "")
    .replace(/`/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const SEMANTIC_STOP_WORDS = new Set("ما ماذا من في و او إلى الى على عن هل هو هي هذا هذه ذلك التي الذي اذا إذا كان كانت يكون تكون ثم مع عند بين حيث لكل خلال حسب اذكر اكتب اوجد أوجد احسب جد قيمة ناتج الناتج يساوي وضح حدد التالي التالية الآتي الآتية سؤال السؤال".split(" "));

/** A wording-tolerant key for the same idea; keeps formula/operator structure. */
export function mathQuestionIdeaSignature(value) {
  const source = String(value || "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " FIGURE ")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[0-9٠-٩]+(?:[.,٫][0-9٠-٩]+)*/g, "#");
  const tokens = source
    .replace(/<[^>]+>/g, " ")
    .split(/[^\p{L}#]+/u)
    .filter(token => !SEMANTIC_STOP_WORDS.has(token) && token !== "#");
  const mathStructure = [...source.matchAll(/<math\b[\s\S]*?<\/math>|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g)]
    .map(match => match[0]
      .replace(/<[^>]+>/g, "")
      .replace(/[0-9٠-٩]+(?:[.,٫][0-9٠-٩]+)*/g, "#")
      .replace(/\s+/g, ""))
    .sort();
  return [...tokens, ...mathStructure].join("|");
}

/** Replace numeric text only; preserve wording, operators, markup, and figures. */
export function mathQuestionWordingSignature(value) {
  return String(value || "").split(/(<[^>]+>|!\[[^\]]*\]\([^)]*\))/g)
    .map(piece => piece.startsWith("![") ? "" : piece.startsWith("<") ? piece
      : piece.replace(/[0-9٠-٩]+(?:[.,٫][0-9٠-٩]+)*/g, "#"))
    .join("");
}

/** Keep one question per wording pattern, in the original course order. */
export function filterMathQuestionEntries(entries) {
  const seen = new Set();
  const questions = [];
  let originalCount = 0;
  for (const entry of entries || []) {
    const text = questionText(entry.step || entry);
    if (!text) continue;
    originalCount += 1;
    const signature = mathQuestionIdeaSignature(text);
    if (seen.has(signature)) continue;
    seen.add(signature);
    questions.push({ ...entry, text, signature, label:displayQuestion(text) });
  }
  return { originalCount, filteredCount:questions.length, removedCount:originalCount - questions.length, questions };
}

function funnelIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5h16l-6.2 7.1v4.7l-3.6 2.1v-6.8L4 5Z"/></svg>`;
}

function renderDialog(locale) {
  const copy = locale === "ar"
    ? { title:"تصفية الأسئلة", level:"المستوى", level1:"المستوى ١", level2:"المستوى ٢", level3:"المستوى ٣", scope:"نطاق التصفية", lesson:"الدرس", unit:"الوحدة", subject:"المادة", loading:"جارٍ حساب الأسئلة…", close:"إغلاق", ready:"المستوى ١ يحذف الأسئلة التي تختبر الفكرة نفسها حتى مع اختلاف الصياغة والأرقام." }
    : { title:"Filter questions", level:"Level", level1:"Level 1", level2:"Level 2", level3:"Level 3", scope:"Filter scope", lesson:"Lesson", unit:"Unit", subject:"Subject", loading:"Counting questions…", close:"Close", ready:"Level 1 removes questions that test the same idea, even when wording or numbers differ." };
  return `<dialog class="math-question-filter-dialog" data-math-question-filter-dialog aria-labelledby="math-question-filter-title">
    <form method="dialog" class="math-question-filter-dialog-head"><h2 id="math-question-filter-title">${escapeHtml(copy.title)}</h2><button type="submit" class="math-question-filter-close" aria-label="${escapeHtml(copy.close)}">×</button></form>
    <fieldset class="math-question-filter-levels"><legend>${escapeHtml(copy.level)}</legend><button type="button" class="math-question-filter-level" data-math-filter-level="1" aria-pressed="false">${escapeHtml(copy.level1)}</button><button type="button" class="math-question-filter-level" data-math-filter-level="2" disabled>${escapeHtml(copy.level2)}</button><button type="button" class="math-question-filter-level" data-math-filter-level="3" disabled>${escapeHtml(copy.level3)}</button></fieldset>
    <fieldset class="math-question-filter-scopes"><legend>${escapeHtml(copy.scope)}</legend><label><input type="radio" name="math-filter-scope" value="lesson" checked><span>${escapeHtml(copy.lesson)}</span></label><label><input type="radio" name="math-filter-scope" value="unit"><span>${escapeHtml(copy.unit)}</span></label><label><input type="radio" name="math-filter-scope" value="subject"><span>${escapeHtml(copy.subject)}</span></label></fieldset>
    <p class="math-question-filter-ready">${escapeHtml(copy.ready)}</p><div class="math-question-filter-counts" data-math-filter-counts hidden></div><p class="math-question-filter-message" data-math-filter-message role="status"></p>
    <div class="math-question-filter-actions"><button type="button" data-math-filter-apply disabled>${locale === "ar" ? "تطبيق المستوى ١" : "Apply Level 1"}</button><button type="button" data-math-filter-off>${locale === "ar" ? "إيقاف التصفية" : "Turn filter off"}</button></div>
  </dialog>`;
}

function renderCounts(result, locale) {
  const labels = locale === "ar" ? ["قبل التصفية", "بعد التصفية", "تم حذف التكرار"] : ["Before filter", "After filter", "Duplicates removed"];
  return labels.map((label, index) => `<div><b>${result[["originalCount", "filteredCount", "removedCount"][index]]}</b><span>${escapeHtml(label)}</span></div>`).join("");
}

export function mountMathQuestionFilter({ shell, locale = "ar", signal, getCatalog, onApply, initialState }) {
  if (!QUESTION_FILTER_ENABLED) return () => {};
  if (!FILTER_SUBJECTS.has(shell?.dataset.subject) || typeof getCatalog !== "function") return () => {};
  const top = shell.querySelector(".lesson-top");
  if (!top) return () => {};
  const button = document.createElement("button");
  button.type = "button";
  button.className = "math-question-filter-button";
  button.dataset.mathQuestionFilter = "";
  button.setAttribute("aria-haspopup", "dialog");
  button.setAttribute("aria-label", locale === "ar" ? "تصفية الأسئلة" : "Filter questions");
  button.innerHTML = funnelIcon();
  top.insertBefore(button, top.querySelector(".lesson-status"));
  top.insertAdjacentHTML("afterend", renderDialog(locale));
  const dialog = shell.querySelector("[data-math-question-filter-dialog]");
  dialog.dir = locale === "ar" ? "rtl" : "ltr";
  const counts = dialog.querySelector("[data-math-filter-counts]");
  const message = dialog.querySelector("[data-math-filter-message]");
  const apply = dialog.querySelector("[data-math-filter-apply]");
  const off = dialog.querySelector("[data-math-filter-off]");
  const level = dialog.querySelector('[data-math-filter-level="1"]');
  let request = 0;
  let scope = initialState?.scope || "lesson";
  let enabled = Boolean(initialState);
  let result = null;
  const update = () => {
    button.classList.toggle("is-active", enabled);
    level.classList.toggle("is-active", enabled);
    level.setAttribute("aria-pressed", String(enabled));
  };
  update();
  dialog.querySelector(`input[value="${scope}"]`).checked = true;
  const load = async () => {
    const current = ++request;
    result = null;
    apply.disabled = true;
    counts.hidden = true;
    message.textContent = locale === "ar" ? "جارٍ حساب الأسئلة…" : "Counting questions…";
    try {
      const entries = await getCatalog(scope);
      if (current !== request || signal?.aborted) return;
      result = filterMathQuestionEntries(entries);
      counts.innerHTML = renderCounts(result, locale);
      counts.hidden = false;
      apply.disabled = false;
      message.textContent = "";
    } catch {
      if (current !== request || signal?.aborted) return;
      message.textContent = locale === "ar" ? "تعذر تحميل الأسئلة. أعد فتح التصفية للمحاولة." : "Could not load questions. Reopen the filter to retry.";
    }
  };
  const applyFilter = (nextEnabled) => {
    if (nextEnabled && !result) return;
    onApply?.({ scope, result, enabled:nextEnabled });
    enabled = nextEnabled;
    update();
    dialog.close();
  };
  button.addEventListener("click", () => { dialog.showModal(); void load(); }, { signal });
  dialog.addEventListener("change", (event) => {
    if (event.target.name !== "math-filter-scope") return;
    scope = event.target.value;
    void load();
  }, { signal });
  level.addEventListener("click", () => applyFilter(true), { signal });
  apply.addEventListener("click", () => applyFilter(true), { signal });
  off.addEventListener("click", () => applyFilter(false), { signal });
  dialog.addEventListener("close", () => button.focus({ preventScroll:true }), { signal });
  return () => { request += 1; if (dialog.open) dialog.close(); dialog.remove(); button.remove(); };
}
