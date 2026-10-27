import { escapeHtml } from "../../lib/dom.js?v=acff67f262f3c107";
import { lessonReferenceLabel } from "./shared.js?v=acff67f262f3c107";

export function renderLessonError(container, day) {
  container.innerHTML = `
    <section class="lesson-error" role="status" dir="rtl">
      <img class="lesson-error__mascot" src="assets/mascot/rocky-sad.svg" alt="" width="228" height="220" />
      <p>تعذّر تحميل محتوى الدرس.</p>
    </section>`;
  return {
    title: "تعذّر تحميل محتوى الدرس",
    destroy: () => {},
  };
}

export function renderComingSoon(container, day) {
  const reference = lessonReferenceLabel(day);
  container.innerHTML = `
    <section class="lesson-hero lesson-hero--coming-soon">
      <p class="lesson-label">${escapeHtml(reference)} · IN PROGRESS</p>
      <h1 class="lesson-heading">Something exciting is coming soon</h1>
      <p class="lesson-intro">This lesson is being prepared. Check back soon.</p>
    </section>`;
}
