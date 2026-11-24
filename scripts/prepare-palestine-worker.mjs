import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { OUTSIDE_GAZA_SUBJECTS } from "../src/data/lessons/outside-gaza/subjects.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { loadOutsideGazaLessonPart } from "../src/server/cloudflare-outside-gaza-content.mjs";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { questionExplanation } from "../src/domain/question-explanations.js";

const baselineSha = "9bb9f949cf2197b21a476a5f55ffcbecd528bbdf4037ccdf9d166f195e142437";
const app = fileURLToPath(new URL("../", import.meta.url));

const [baseline, output] = process.argv.slice(2);
assert.ok(baseline && output,
  "Usage: node scripts/prepare-palestine-worker.mjs <reviewed-active-worker.mjs> <private-entry.mjs>");
let source = await readFile(baseline, "utf8");
assert.equal(createHash("sha256").update(source).digest("hex"), baselineSha,
  "Recover and review the active Worker before preparing the candidate.");

function replace(before, after) {
  assert.equal(source.split(before).length, 2, "The recovered Worker integration has changed.");
  source = source.replace(before, after);
}

// The owner role comes from the authenticated account. Preserve sign-in,
// session and browser cookie handling for authorization and student accounts.
replace("if (account && !await policy.claimDevice(account.id, device))",
  "if (account && account.isOwner !== true && !await policy.claimDevice(account.id, device))");
replace("if (!await policy.claimDevice(account.id, device))",
  "if (account.isOwner !== true && !await policy.claimDevice(account.id, device))");
const finishRegistration = "if (claim) await policy.finishRegistration(device.tokenHash, claim, result.account.id);";
replace(finishRegistration, `${finishRegistration}
      if (result.account.isOwner === true) {
        const ownerHeaders = new Headers(response.headers);
        ownerHeaders.append("Set-Cookie", browserCookie(device.token, true));
        return new Response(response.body, { status: response.status, headers: ownerHeaders });
      }`);

// Keep the live Gaza answers and XP governed by the existing implementation.
replace("if (isAdabiSubject(c)) return loadAdabiLessonPart(c, u, m);",
  "if (isOutsideSubject(c)) return loadOutsidePart(c, u, m);\n    if (isAdabiSubject(c)) return loadAdabiLessonPart(c, u, m);");
replace("if (isAdabiSubject(c?.subjectId)) return readAdabiExplanation(c);",
  "if (isOutsideSubject(c?.subjectId)) return readOutsideExplanation(c);\n    if (isAdabiSubject(c?.subjectId)) return readAdabiExplanation(c);");

function importPath(file) {
  const path = relative(dirname(resolve(output)), resolve(app, file)).split(sep).join("/");
  return JSON.stringify(path.startsWith(".") ? path : `./${path}`);
}

const imports = `
import { OUTSIDE_GAZA_SUBJECTS } from ${importPath("src/data/lessons/outside-gaza/subjects.js")};
import { getSubjectRoadmap as outsideRoadmap } from ${importPath("src/data/subject-roadmaps.js")};
import { resolveQuestionLocation as outsideLocation, getPartQuestionIds as outsidePartIds, getQuestionXp as outsideXp, canonicalQuestionStepId as outsideCanonicalStep, isSourceQuestionAlias as outsideSourceAlias } from ${importPath("src/domain/question-rewards.js")};
import { hasFreeLessonPractice as outsideFreePractice } from ${importPath("src/domain/free-practice.js")};
import { subscriptionCovers as outsideSubscriptionCovers } from ${importPath("src/domain/subscription-access.js")};
`;

// The API needs step identities and explanations. The full authored lesson
// modules remain in Pages and would duplicate browser-only content here.
const parts = [];
for (const subject of Object.values(OUTSIDE_GAZA_SUBJECTS).flat()) {
  for (const unit of getSubjectRoadmap(subject.id).units) for (const lesson of unit.lessons) for (const part of lesson.parts) {
    const native = await loadOutsideGazaLessonPart(subject.id, lesson.id, part.id);
    assert.equal(native?.status, "published", `Missing outside-Gaza part: ${subject.id}/${lesson.id}/${part.id}`);
    const explanations = new Map(parseLessonMarkdown(native.authoringSource).steps
      .map(step => [step.id, questionExplanation(step)?.markdown]));
    parts.push([
      JSON.stringify([subject.id, lesson.id, part.id]),
      native.steps.map(step => [step.id, step.type, explanations.get(step.id)]),
    ]);
  }
}

const extension = `
const outsideSubjects = [...OUTSIDE_GAZA_SUBJECTS.scientific, ...OUTSIDE_GAZA_SUBJECTS.literary];
const outsideSubjectIds = new Set(outsideSubjects.map(subject => subject.id));
const isOutsideSubject = id => outsideSubjectIds.has(id);
const outsideParts = new Map(${JSON.stringify(parts)});
const outsidePart = (subjectId, lessonId, partId) => outsideParts.get(JSON.stringify([subjectId, lessonId, partId]));
function loadOutsidePart(subjectId, lessonId, partId) {
  const rows = outsidePart(subjectId, lessonId, partId);
  return rows ? { status: "published", steps: rows.map(([id, type]) => ({ id, type })) } : null;
}
function readOutsideExplanation(key) {
  const location = outsideLocation(key);
  if (!location) return null;
  const markdown = outsidePart(location.subjectId, location.lessonId, location.partId)
    ?.find(([id]) => id === location.stepId)?.[2];
  return markdown ? { markdown, note: "" } : null;
}
const withOutsideCatalog = (original, outside) =>
  key => isOutsideSubject(key?.subjectId) ? outside(key) : original(key);

const gazaRoadmap = getSubjectRoadmap2;
getSubjectRoadmap2 = id => isOutsideSubject(id) ? outsideRoadmap(id) : gazaRoadmap(id);
COURSE_SUBJECTS2 = Object.freeze([...COURSE_SUBJECTS2, ...outsideSubjects]);
resolveQuestionLocation2 = withOutsideCatalog(resolveQuestionLocation2, outsideLocation);
q2 = withOutsideCatalog(q2, outsideLocation);
getPartQuestionIds2 = withOutsideCatalog(getPartQuestionIds2, outsidePartIds);
F0 = withOutsideCatalog(F0, outsidePartIds);
getQuestionXp2 = withOutsideCatalog(getQuestionXp2, outsideXp);
z0 = withOutsideCatalog(z0, outsideXp);
canonicalQuestionStepId2 = withOutsideCatalog(canonicalQuestionStepId2, outsideCanonicalStep);
isSourceQuestionAlias = withOutsideCatalog(isSourceQuestionAlias, outsideSourceAlias);
hasFreeLessonPractice = withOutsideCatalog(hasFreeLessonPractice, outsideFreePractice);
const gazaSubscriptionCovers = subscriptionCovers;
subscriptionCovers = (subjects, key) => gazaSubscriptionCovers(subjects, key)
  || (Array.isArray(subjects) && subjects.some(isOutsideSubject) && outsideSubscriptionCovers(subjects, key));
`;

await writeFile(output, imports + source + extension, { flag:"wx", mode:0o600 });
