import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";
import { ENGLISH_LESSONS, ENGLISH_UNITS } from "./english-course.js";

export function createEnglishLesson(id, source) {
  const lesson = ENGLISH_LESSONS.find(lesson => lesson.id === id);
  if (!lesson) throw new TypeError(`Unknown English lesson: ${id}`);
  const unit = ENGLISH_UNITS.find(unit => unit.number === lesson.unit);
  return defineMarkdownLesson({
    title:`${unit.title} · ${lesson.label}`,
    summary:lesson.summary,
    status:"published",
    mode:"Questions and flashcards",
    level:"Grade 12 · Scientific branch · Gaza",
    duration:`${lesson.questionCount} questions`,
    reward:10,
  }, source);
}
