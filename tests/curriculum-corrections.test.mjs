import assert from "node:assert/strict";
import test from "node:test";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import { subjectLessonRegistry, loadSubjectLesson } from "../src/data/lessons/subject-lesson-registry.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { questionExplanation } from "../src/domain/question-explanations.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { readRoute } from "../src/app/route.js";

test("the canonical curriculum contains exactly 7,229 questions with complete authored explanations", async () => {
  const questions = new Map();
  const localAssets = new Set();
  for (const [key, load] of subjectLessonRegistry) {
    const [subject, lessonId] = key.split(":");
    const lessons = [await loadSubjectLesson(subject, lessonId)];
    for (const lesson of lessons) {
      const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
      assert.deepEqual(parsed.issues, [], key);
      for (const step of parsed.steps.filter(step => ["mcq", "exam-question"].includes(step.type))) {
        const identity = `${subject}:${lessonId}:${step.id}`;
        for (const [, url] of JSON.stringify(step.content).matchAll(/\]\((assets\/[^)\s]+)\)/g)) localAssets.add(url.split(/[?#]/)[0]);
        assert.ok(!questions.has(identity), `Duplicate canonical question: ${identity}`);
        const explanation = questionExplanation(step);
        assert.ok(explanation?.markdown.trim(), identity);
        assert.equal(explanation.markdown, step.type === "mcq" ? step.content.correctFeedback : step.content.solution, identity);
        if (step.type === "exam-question") assert.equal(step.content.guidance, "", identity);
        if (step.type === "mcq") {
          const choices = step.content.answers.map(answer => answer.text.normalize("NFKC").replace(/\s+/g, " ").trim());
          assert.equal(new Set(choices).size, choices.length, `Repeated answer choice: ${identity}`);
        }
        questions.set(identity, step);
      }
    }
  }
  for (const asset of localAssets) await assert.doesNotReject(access(new URL(`../${asset}`, import.meta.url)), `Missing question/source asset: ${asset}`);
  assert.equal(questions.size, 7229);
  assert.equal(subjectLessonRegistry.size, 124);
  assert.equal(subjectLessonRegistry.has("physics:latex-test"), false);
  assert.equal(subjectLessonRegistry.has("islamic-education:islamic-quran"), false);
  assert.equal(subjectLessonRegistry.has("mathematics:matrices"), false);
  assert.strictEqual(await loadSubjectLesson("mathematics", "matrices"), await loadSubjectLesson("mathematics-2", "matrices"));
});

test("removed question links resolve to their retained question and published part", () => {
  let aliases = 0;
  for (const subject of ["mathematics", "mathematics-2", "biology", "arabic", "physics", "ict"]) {
    for (const unit of getSubjectRoadmap(subject).units) for (const lesson of unit.lessons) for (const part of lesson.parts) {
      for (const [oldId, canonicalId] of Object.entries(part.questionAliases || {})) {
        aliases++;
        assert.ok(!part.questionIds.includes(oldId));
        const destination = lesson.parts.find(candidate => candidate.questionIds?.includes(canonicalId));
        assert.ok(destination, `${subject}:${lesson.id}:${canonicalId}`);
        const route = readRoute(`?subject=${subject}&lesson=${lesson.id}&part=${part.id}&question=${oldId}`);
        assert.equal(route.question, canonicalId);
        assert.equal(route.part, destination.id);
      }
    }
  }
  assert.equal(aliases, 36);
});

test("corrected answer keys are used by the existing question controller", async () => {
  const cases = [
    ["physics", "momentum-impulse", "physics-tawjihi-2025-p008-q037", "option-4"],
    ["arabic", "arabic-u06-l02", "arabic-p089-m03", "option-2"],
    ["ict", "database-management", "ict-tasneef-2023-unit1-database-mcq-17", "choice-5"],
    ["biology", "mendelian-inheritance", "bio-q-p065-q7", "option-1"],
    ["chemistry", "u03-l07-standard-electrode-potential", "chemistry-oj-p220-q10", "option-2"],
    ["english", "english-u03-reading", "eng-2023-p035-qr3-c-1", "option-2"],
    ["islamic-education", "islamic-ongoing-deeds", "islamic-2022-p063-q21", "option-4"],
  ];
  for (const [subject, lessonId, id, answer] of cases) {
    const lesson = await loadSubjectLesson(subject, lessonId);
    const step = parseLessonMarkdown(lesson.authoringSource).steps.find(step => step.id === id);
    assert.ok(step, id);
    assert.equal(step.content.answers.find(choice => choice.correct)?.id, answer, id);
  }
});

test("imported explanation assets match their retained source provenance", async () => {
  const manifest = JSON.parse(await readFile(new URL("../assets/lessons/curriculum-evidence/sources.json", import.meta.url)));
  assert.equal(manifest.archive, "khutwa-curriculum-corrected-all-questions-2026-10-24.zip");
  assert.match(manifest.archiveSha256, /^[a-f0-9]{64}$/);
  for (const asset of manifest.assets) {
    const bytes = await readFile(new URL(`../${asset.file}`, import.meta.url));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), asset.sha256, asset.file);
    assert.match(asset.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(asset.archiveMember.startsWith("khutwa-question-bank/"));
  }
});
