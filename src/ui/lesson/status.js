import{escapeHtml as n}from"../../lib/dom.js?v=7388f68cc0f433fd";import{lessonReferenceLabel as r}from"./shared.js?v=7388f68cc0f433fd";export function renderLessonError(s,e){return s.innerHTML=`
    <section class="lesson-error" role="status" dir="rtl">
      <img class="lesson-error__mascot" src="assets/mascot/rocky-sad.svg" alt="" width="228" height="220" />
      <p>تعذّر تحميل محتوى الدرس.</p>
    </section>`,{title:"تعذّر تحميل محتوى الدرس",destroy:()=>{}}}export function renderComingSoon(s,e){const o=r(e);s.innerHTML=`
    <section class="lesson-hero lesson-hero--coming-soon">
      <p class="lesson-label">${n(o)} · IN PROGRESS</p>
      <h1 class="lesson-heading">Something exciting is coming soon</h1>
      <p class="lesson-intro">This lesson is being prepared. Check back soon.</p>
    </section>`}
