import { QUESTION_RATINGS } from "../domain/question-ratings.js";
import { mountQuestionRating, renderQuestionRatingControls } from "./question-rating.js";

export function mountRatedQuestionToggle(container, { questions, rating, signal, onChange }) {
  const empty = !questions.some(question => question.rating === rating);
  const section = document.createElement("section");
  section.className = `rated-question-browser${empty ? " rated-question-browser--empty" : ""}`;
  const toggle = document.createElement("div");
  toggle.className = "rated-question-toggle";
  toggle.innerHTML = renderQuestionRatingControls("ar");
  const group = toggle.querySelector(".level-question-ratings");
  group.setAttribute("aria-label", "تصفية الأسئلة حسب تقييمك");
  group.dataset.selectedRating = rating;
  for (const { value, label } of QUESTION_RATINGS) {
    const input = toggle.querySelector(`[data-question-rating="${value}"]`);
    const count = questions.filter(question => question.rating === value).length;
    input.dataset.ratedFilter = value;
    input.checked = rating === value;
    input.setAttribute("aria-label", `${label}، ${count} سؤال`);
    const total = document.createElement("bdi");
    total.className = "ui-number";
    total.textContent = String(count);
    input.nextElementSibling.append(total);
  }
  mountQuestionRating(toggle, signal);
  toggle.addEventListener("change", event => {
    const input = event.target;
    if (input instanceof HTMLInputElement && input.dataset.ratedFilter && input.value !== rating) onChange(input.value);
  }, { signal });
  section.append(toggle);
  if (empty) {
    // Reuse the banner's reading animation, with its feet outside the seating edge.
    const rocky = document.createElement("img");
    rocky.className = "rated-questions-rocky";
    rocky.src = "assets/mascot/rocky-reading.svg";
    rocky.alt = "";
    rocky.width = 800;
    rocky.height = 760;
    toggle.append(rocky);
    const message = document.createElement("p");
    message.className = "rated-questions-empty";
    message.setAttribute("role", "status");
    message.textContent = "لا توجد أسئلة بعد.";
    section.append(message);
  }
  container.prepend(section);
}
