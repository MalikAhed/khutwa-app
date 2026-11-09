import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

// Adabi uses the same authoring parser and interaction controllers as Elmi.
export function createAdabiLesson(meta, source) {
  return defineMarkdownLesson({
    id:meta.id,
    title:meta.label,
    summary:meta.summary || "أسئلة رزمة غزة ومجموعات الامتحانات المعتمدة.",
    status:"published",
    locale:meta.language || "ar",
    mode:"أسئلة وبطاقات",
    level:"الثاني عشر · الفرع الأدبي · غزة",
    duration:`${meta.questionCount} سؤالًا وبطاقة`,
    reward:10,
  }, source);
}
