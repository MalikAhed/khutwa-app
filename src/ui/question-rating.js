let ratingGroupSequence = 0;

export function renderRatingFace(rating) {
  const [fill, ink] = { easy:["#78d64b", "#245619"], medium:["#ffd34e", "#725b0a"], hard:["#ff7179", "#842a34"] }[rating];
  const mouth = { easy:"M8 14c2 3 6 3 8 0", medium:"M8 15h8", hard:"M8 16c2-3 6-3 8 0" }[rating];
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="${fill}" stroke="none"/><g fill="${ink}" stroke="none"><ellipse cx="9" cy="9" rx="1.15" ry="2.15"/><ellipse cx="15" cy="9" rx="1.15" ry="2.15"/></g><path d="${mouth}" fill="none" stroke="${ink}" stroke-width="1.8" stroke-linecap="round"/></svg>`;
}

export function renderQuestionRatingControls(locale) {
  const ratings = locale === "ar"
    ? [["easy", "سهل", "M8 14c2 3 6 3 8 0"], ["medium", "متوسط", "M8 15h8"], ["hard", "صعب", "M8 16c2-3 6-3 8 0"]]
    : [["easy", "Easy", "M8 14c2 3 6 3 8 0"], ["medium", "Medium", "M8 15h8"], ["hard", "Hard", "M8 16c2-3 6-3 8 0"]];
  const prompt = locale === "ar" ? "تقييم صعوبة السؤال" : "Question difficulty";
  const name = `lesson-question-rating-${++ratingGroupSequence}`;
  return `<div class="level-question-rating-panel"><div class="level-question-ratings" role="radiogroup" aria-label="${prompt}"><span class="level-question-rating-highlight" aria-hidden="true"></span>${ratings.map(([value, text]) => `<label><input type="radio" name="${name}" value="${value}" data-question-rating="${value}"><span>${renderRatingFace(value)}<span>${text}</span></span></label>`).join("")}</div></div>`;
}

export function mountQuestionRating(footer, signal) {
  footer.addEventListener("change", (event) => {
    const rating = event.target;
    if (!(rating instanceof HTMLInputElement) || !rating.matches("[data-question-rating]") || !footer.contains(rating)) return;
    rating.closest(".level-question-ratings").dataset.selectedRating = rating.value;
    footer.dataset.selectedQuestionRating = rating.value;
  }, { signal });
}
