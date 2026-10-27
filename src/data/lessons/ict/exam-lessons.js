import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";
import { ICT_EXAM_QUESTIONS } from "./exam-bank.js?v=acff67f262f3c107";
import { ICT_BOOK_PRACTICE } from "./book-practice.js?v=acff67f262f3c107";
import { ICT_PAST_PAPER_QUESTIONS } from "./past-paper-bank.js?v=acff67f262f3c107";
import { ICT_CLASSIFIED_UNIT1_QUESTIONS } from "./classified-unit1-bank.js?v=acff67f262f3c107";
import { ICT_CLASSIFIED_UNIT2_QUESTIONS } from "./classified-unit2-bank.js?v=acff67f262f3c107";
import { ICT_CLASSIFIED_OSI_QUESTIONS } from "./classified-osi-bank.js?v=acff67f262f3c107";
import { ICT_VISUAL_TRANSCRIPTION_QUESTIONS } from "./visual-transcription-bank.js?v=acff67f262f3c107";

const QUESTIONS = [
  ...ICT_EXAM_QUESTIONS, ...ICT_BOOK_PRACTICE, ...ICT_PAST_PAPER_QUESTIONS,
  ...ICT_CLASSIFIED_UNIT1_QUESTIONS, ...ICT_CLASSIFIED_UNIT2_QUESTIONS, ...ICT_CLASSIFIED_OSI_QUESTIONS,
  ...ICT_VISUAL_TRANSCRIPTION_QUESTIONS,
];

// Each canonical record owns its position in the published part sequence.
export function getIctPartQuestions(partId) {
  return QUESTIONS.filter(item => item.partId === partId).sort((a, b) => a.partOrder - b.partOrder);
}

function questionMarkdown(item) {
  const header = `id: ${item.id}\ntitle: ${item.title}\nquestion: ${item.type === "mcq" ? item.question : item.prompt}\nreference: ${item.reference}`;
  if (item.type === "mcq") {
    const choices = item.choices.map((text, index) =>
      `- [${index === item.correctChoiceIndex ? "x" : " "}] ${item.choiceIds[index]} | ${text}`).join("\n");
    return `:::mcq\n${header}\nkicker: ${item.kicker}\n${choices}\nexplanation:\n${item.explanation}\nhint: ${item.hint}\n${item.example ? `example:\n${item.example}\n` : ""}:::`;
  }
  return `:::exam-question\n${header}\nanswer-label: ${item.answerLabel}\nbody:\n${item.question}\nsolution:\n${item.answer}\n:::`;
}

/** Questions-only student curriculum; historical teaching and IDs remain in source. */
export function prepareIctExamLesson(lesson, parts) {
  if (!parts?.length || !getIctPartQuestions(parts[0].id).length) return lesson;
  const questions = parts.flatMap(part => getIctPartQuestions(part.id));
  return defineMarkdownLesson(lesson, questions.map(questionMarkdown).join("\n\n"));
}
