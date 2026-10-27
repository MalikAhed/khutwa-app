import assert from "node:assert/strict";
import test from "node:test";
import { filterMathQuestionEntries, mathQuestionIdeaSignature, mathQuestionWordingSignature } from "../src/ui/lesson/math-question-filter.js";

test("Level 1 groups exact wording with different numbers", () => {
  const steps = [
    { id:"a", type:"exam-question", content:{ body:"أوجد قيمة س عندما س = ٢." } },
    { id:"b", type:"exam-question", content:{ body:"أوجد قيمة س عندما س = ٣." } },
    { id:"c", type:"exam-question", content:{ body:"أوجد قيمة ص عندما ص = ٣." } },
    { id:"d", type:"exam-question", content:{ body:"أوجد قيمة س عندما س = ٢." } },
  ];
  assert.equal(mathQuestionWordingSignature(steps[0].content.body), mathQuestionWordingSignature(steps[1].content.body));
  assert.notEqual(mathQuestionWordingSignature(steps[0].content.body), mathQuestionWordingSignature(steps[2].content.body));
  const result = filterMathQuestionEntries(steps);
  assert.deepEqual(result.questions.map(question => question.id), ["a", "c"]);
  assert.deepEqual([result.originalCount, result.filteredCount, result.removedCount], [4, 2, 2]);
});

test("math wording filter replaces MathML numeric nodes without changing wording", () => {
  const first = "إذا كان <mn>٢</mn>س + ٥";
  const second = "إذا كان <mn>٣</mn>س + ٧";
  assert.equal(mathQuestionWordingSignature(first), mathQuestionWordingSignature(second));
});

test("Level 1 recognizes a reworded idea while keeping different operations separate", () => {
  const first = "ما وحدة قياس التدفق المغناطيسي؟";
  const second = "وحدة قياس التدفق المغناطيسي هي:";
  const different = "ما اتجاه التدفق المغناطيسي؟";
  assert.equal(mathQuestionIdeaSignature(first), mathQuestionIdeaSignature(second));
  assert.notEqual(mathQuestionIdeaSignature(first), mathQuestionIdeaSignature(different));
});
