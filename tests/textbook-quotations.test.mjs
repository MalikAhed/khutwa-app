import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { loadSubjectLesson } from "../src/data/lessons/subject-lesson-registry.js";
import { canonicalQuestionStepId } from "../src/domain/question-rewards.js";
import { questionExplanation } from "../src/domain/question-explanations.js";

test("corrected factual explanations retain their source confirmations, quotations and page evidence", async () => {
  let checked = 0;
  const provenance = JSON.parse(await readFile(new URL("../assets/lessons/curriculum-evidence/sources.json", import.meta.url)));
  for (const { subjectId, lessonId, id, confirmation } of provenance.factConfirmations) {
        if (confirmation?.status !== "confirmed") continue;
        const lesson = await loadSubjectLesson(subjectId, lessonId);
        const canonicalId = canonicalQuestionStepId({ subjectId, stepId:id });
        const step = parseLessonMarkdown(lesson.authoringSource).steps.find(step => step.id === canonicalId);
        const explanation = questionExplanation(step);
        assert.ok(explanation?.markdown, id);
        assert.equal(confirmation.status, "confirmed", id);
        assert.ok(confirmation.answerText.trim(), id);
        assert.ok(confirmation.evidence.length, id);
        const source = `:::exam-question\nid: ${id}\ntitle: حل\nquestion: حل\nreference: مراجعة\nanswer-label: الإجابة\nbody:\nالسؤال\nsolution:\n${explanation.markdown}\n:::\n`;
        assert.deepEqual(parseLessonMarkdown(source, { published:true }).issues, [], id);
        for (const evidence of confirmation.evidence) {
          assert.ok(Number.isInteger(evidence.pdfPage) && evidence.pdfPage > 0, id);
          assert.ok(evidence.quote?.trim(), id);
          assert.ok(evidence.textbook, id);
        }
        checked++;
  }
  assert.equal(checked, 228);
});
