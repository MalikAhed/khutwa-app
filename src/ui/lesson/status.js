import { escapeHtml } from "../../lib/dom.js";
import { lessonReferenceLabel } from "./shared.js";

export function renderLessonError(container, day, retry) {
  const controller = new AbortController();
  container.innerHTML = `
    <section class="lesson-error" role="status" dir="rtl">
      <img class="lesson-error__mascot" src="assets/mascot/rocky-sad.svg" alt="" width="228" height="220" />
      <p>تعذّر تحميل محتوى الدرس.</p>
      ${retry ? '<button type="button" class="system-action system-action--primary" data-lesson-retry>إعادة المحاولة</button>' : ''}
    </section>`;
  container.querySelector("[data-lesson-retry]")?.addEventListener("click", () => void retry(), { signal:controller.signal });
  return {
    title: "تعذّر تحميل محتوى الدرس",
    destroy: () => controller.abort(),
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
