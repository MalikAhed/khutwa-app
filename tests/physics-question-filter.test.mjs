import assert from "node:assert/strict";
import test from "node:test";
import {
  filterPhysicsQuestionEntries,
  findPhysicsPromptDuplicates,
  loadPhysicsQuestionCatalog,
  physicsQuestionWordingSignature,
} from "../src/data/lessons/physics/question-duplicates.js";

test("Physics catalog has one exact prompt duplicate and one changed-number wording group", async () => {
  const entries = await loadPhysicsQuestionCatalog();
  assert.equal(entries.length, 273);
  const { exactGroups, variantGroups } = findPhysicsPromptDuplicates(entries);
  assert.deepEqual(exactGroups.map((group) => group.map((entry) => entry.stepId)), [
    ["physics-tawjihi-2025-p039-q238", "physics-tawjihi-2025-p054-q336"],
  ]);
  assert.deepEqual(variantGroups.map((group) => group.map((entry) => entry.stepId)), [
    ["physics-book-2024-p042-review-1-4", "physics-book-2024-p042-review-1-5"],
  ]);
});

test("Physics Level 1 keeps the first entry for each wording signature", () => {
  const entries = [
    { stepId: "exact-a", step: { question: { prompt: "ما مقدار القوة؟" } } },
    { stepId: "exact-b", step: { question: { prompt: "ما مقدار القوة؟" } } },
    { stepId: "numbers-a", step: { question: { prompt: "جسم كتلته 2 kg." } } },
    { stepId: "numbers-b", step: { question: { prompt: "جسم كتلته 5 kg." } } },
  ];
  const result = filterPhysicsQuestionEntries(entries);
  assert.equal(result.originalCount, 4);
  assert.equal(result.filteredCount, 2);
  assert.equal(result.removedCount, 2);
  assert.deepEqual(result.questions.map((entry) => entry.stepId), ["exact-a", "numbers-a"]);
});

test("Physics wording signatures preserve punctuation and non-numeric wording", () => {
  assert.equal(
    physicsQuestionWordingSignature("ما قيمة ٢٫٥؟"),
    "ما قيمة #؟",
  );
  assert.notEqual(
    physicsQuestionWordingSignature("ما قيمة ٢؟"),
    physicsQuestionWordingSignature("ما مقدار ٣؟"),
  );
});
