import { PHYSICS_LESSONS } from "./physics-course.js?v=acff67f262f3c107";
import { loadSubjectLessonPart } from "../subject-lesson-registry.js?v=acff67f262f3c107";

/**
 * Return the learner-facing wording for a parsed Physics question.
 *
 * Physics lessons are parsed as `question` steps and keep their prompt under
 * `step.question.prompt`; the fallback fields make this helper usable with
 * the lighter catalog objects used by the lesson filter as well.
 */
export function physicsQuestionText(step) {
  return String(
    step?.question?.prompt ??
    step?.content?.prompt ??
    step?.content?.body ??
    step?.prompt ??
    step?.body ??
    "",
  );
}

/**
 * Signature used for Level 1: preserve every character except numeric values.
 * Arabic and Latin digits are both covered, including decimal separators.
 * Markup is left untouched, so two prompts with different structure do not
 * collapse merely because their visible text happens to be similar.
 */
export function physicsQuestionWordingSignature(value) {
  return String(value || "")
    .split(/(<[^>]+>|!\[[^\]]*\]\([^)]*\))/g)
    .map((piece) => piece.startsWith("![")
      ? ""
      : piece.startsWith("<")
        ? piece
        : piece.replace(/[0-9٠-٩]+(?:[.,٫][0-9٠-٩]+)*/g, "#"))
    .join("");
}

/**
 * Build a stable, scope-ready Physics catalog. Entries retain lesson and part
 * IDs so filtering never changes progress records or published question IDs.
 */
export async function loadPhysicsQuestionCatalog({
  lessons = PHYSICS_LESSONS,
  loadPart = loadSubjectLessonPart,
} = {}) {
  const catalogs = await Promise.all(lessons.map(async (lesson) => {
    const partId = `${lesson.id}-practice`;
    const loaded = await loadPart("physics", lesson.id, partId);
    return loaded.steps
      .filter((step) => physicsQuestionText(step))
      .map((step) => ({
        step,
        stepId: step.id,
        subjectId: "physics",
        lessonId: lesson.id,
        partId,
        lessonLabel: lesson.label,
        unit: lesson.unit,
      }));
  }));
  return catalogs.flat();
}

/**
 * Report exact prompt duplicates and wording duplicates where only numbers
 * differ. Exact groups are kept separate so callers can decide whether to
 * remove a source duplicate or only apply the Level 1 display filter.
 */
export function findPhysicsPromptDuplicates(entries) {
  const exact = new Map();
  const byWording = new Map();
  for (const entry of entries || []) {
    const text = physicsQuestionText(entry.step || entry);
    if (!text) continue;
    const exactGroup = exact.get(text) || [];
    exactGroup.push(entry);
    exact.set(text, exactGroup);
    const wording = physicsQuestionWordingSignature(text);
    const wordingGroup = byWording.get(wording) || [];
    wordingGroup.push(entry);
    byWording.set(wording, wordingGroup);
  }
  const exactGroups = [...exact.values()].filter((group) => group.length > 1);
  const variantGroups = [...byWording.values()].filter((group) =>
    group.length > 1 && new Set(group.map((entry) => physicsQuestionText(entry.step || entry))).size > 1,
  );
  return { exactGroups, variantGroups };
}

/**
 * Level 1 display filter: retain the first question for each wording pattern
 * whose numeric values may vary (and for exact repeats), preserving original
 * catalog order.
 */
export function filterPhysicsQuestionEntries(entries) {
  const seen = new Set();
  const questions = [];
  let originalCount = 0;
  for (const entry of entries || []) {
    const text = physicsQuestionText(entry.step || entry);
    if (!text) continue;
    originalCount += 1;
    const signature = physicsQuestionWordingSignature(text);
    if (seen.has(signature)) continue;
    seen.add(signature);
    questions.push(entry);
  }
  return {
    originalCount,
    filteredCount: questions.length,
    removedCount: originalCount - questions.length,
    questions,
  };
}

