import assert from "node:assert/strict";
import test from "node:test";
import { loadSubjectLesson, subjectLessonRegistry } from "../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { questionExplanation } from "../src/domain/question-explanations.js";

test("every published flashcard has an authored final answer separate from its Explain content", async () => {
  const failures = [];
  let cards = 0;
  for (const key of subjectLessonRegistry.keys()) {
    const lesson = await loadSubjectLesson(...key.split(":"));
    const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
    assert.deepEqual(parsed.issues, [], `${key}: valid published authoring`);
    for (const step of parsed.steps.filter(step => step.type === "exam-question")) {
      cards++;
      const label = `${key}:${step.id}`;
      const { body, finalAnswer, solution } = step.content;
      if (!finalAnswer?.trim()) failures.push(`${label}: missing final answer`);
      // Do not classify prose as an explanation: a why/proof question can
      // legitimately require a reason as its final answer.
      for (const [field, value] of Object.entries({ body, finalAnswer, solution })) {
        if (/^final-answer:\s*$/m.test(value || "")) failures.push(`${label}: section marker leaked into ${field}`);
      }
      assert.equal(questionExplanation(step)?.markdown, solution, `${label}: Explain keeps the full authored solution`);
    }
  }
  assert.ok(cards > 0, "the registry contains published flashcards");
  assert.deepEqual(failures, [], `${failures.length} failures across ${cards} published flashcards`);
});
