import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";
import { BIOLOGY_LESSONS } from "./biology-course.js?v=acff67f262f3c107";

export function createBiologyLesson(id, source) {
  const lesson = BIOLOGY_LESSONS.find(lesson => lesson.id === id);
  if (!lesson) throw new TypeError(`Unknown biology lesson: ${id}`);
  return defineMarkdownLesson({
    title:lesson.label,
    summary:lesson.summary,
    status:"published",
    language:"ar",
    mode:"أسئلة وبطاقات",
    level:"الثاني عشر · الفرع العلمي · غزة",
    duration:`${lesson.questionCount} سؤالًا وبطاقة`,
    reward:10,
  }, source);
}
