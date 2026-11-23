import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export function createOutsideGazaLesson({ id, title, locale }, source) {
  return defineMarkdownLesson({ id, title, locale, status:"published",
    summary:"أسئلة المنهاج الفلسطيني الكامل للصف الثاني عشر",
    mode:"أسئلة وبطاقات", reward:0,
  }, source);
}
