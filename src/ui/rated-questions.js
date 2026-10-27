import { QUESTION_RATINGS } from "../domain/question-ratings.js?v=acff67f262f3c107";
import { renderRatingFace } from "./question-rating.js?v=acff67f262f3c107";

export function mountRatedQuestionToggle(container, { questions, rating, signal, onChange }) {
  const toggle = document.createElement("div");
  toggle.className = "rated-question-toggle";
  toggle.setAttribute("role","group");
  toggle.setAttribute("aria-label","تصفية الأسئلة حسب تقييمك");
  toggle.innerHTML = QUESTION_RATINGS.map(({value,label}) => `<button type="button" data-rated-filter="${value}" data-rating="${value}" aria-pressed="${rating === value}">${renderRatingFace(value)}<span>${label}</span><bdi class="ui-number">${questions.filter(question => question.rating === value).length}</bdi></button>`).join("");
  container.prepend(toggle);
  toggle.addEventListener("click",event => {
    const button = event.target.closest("[data-rated-filter]");
    if (button && button.dataset.ratedFilter !== rating) onChange(button.dataset.ratedFilter);
  }, { signal });
  if (!questions.some(question => question.rating === rating)) {
    const empty = document.createElement("p");
    empty.className = "rated-questions-empty";
    empty.setAttribute("role","status");
    empty.textContent = "لا توجد أسئلة بهذا التقييم بعد. ستظهر هنا عندما تقيّمها أو تجيب عنها.";
    toggle.after(empty);
  }
}
