import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";
import { ARABIC_LESSONS } from "./arabic-course.js";

export function createArabicLesson(id, source) {
  const lesson = ARABIC_LESSONS.find(lesson => lesson.id === id && lesson.questionCount > 0);
  if (!lesson) throw new TypeError(`Unknown Arabic lesson: ${id}`);
  return defineMarkdownLesson({
    id,
    subjectId:"arabic",
    language:"ar",
    title:lesson.label,
    summary:lesson.summary,
    status:"published",
    mode:"أسئلة امتحانات سابقة",
    level:"توجيهي غزة",
    duration:`${lesson.questionCount} سؤالًا`,
    reward:10,
  }, source);
}
