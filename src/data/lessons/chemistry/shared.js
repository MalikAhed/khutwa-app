import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";
import { CHEMISTRY_LESSONS } from "./chemistry-course.js?v=acff67f262f3c107";

export function createChemistryLesson(id, source) {
  const meta = CHEMISTRY_LESSONS.find(lesson => lesson.id === id);
  if (!meta) throw new Error(`Unknown chemistry lesson: ${id}`);
  return defineMarkdownLesson({
    id,
    title:meta.title,
    summary:meta.summary,
    pages:meta.pages,
    status:"published",
    language:"ar",
    mode:"أسئلة وبطاقات",
    level:"الثاني عشر · الفرع العلمي · غزة",
    reward:10,
    duration:`${meta.questionCount} سؤالًا وبطاقة`,
  }, source);
}
