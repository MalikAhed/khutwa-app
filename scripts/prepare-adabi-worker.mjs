import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Build from the reviewed, unextended free-explanations source. An owned Adabi
// release can be regenerated from this base only after verifying its live
// version/hash and that this semantic extension is unchanged. Never wrap an
// already extended Worker again. Original policies and storage remain intact.
export const ADABI_BASELINE_SHA256 = 'dd12a02a0edbeb94a72160cf6b42a52552d8012bcc5eb1c270465d15bcbb2c03';

export function patchAdabiWorker(source, imports) {
  assert.equal(createHash('sha256').update(source).digest('hex'), ADABI_BASELINE_SHA256,
    'Recover and review the current Worker before updating this integration.');
  const replaceOnce = (before, after) => {
    assert.equal(source.split(before).length, 2, 'Recovered Worker integration point changed.');
    source = source.replace(before, after);
  };
  replaceOnce('return { async loadLessonPart(c, u, m) {',
    'return { async loadLessonPart(c, u, m) {\n    if (isAdabiSubject(c)) return loadAdabiLessonPart(c, u, m);');
  replaceOnce('}, async readExplanation(c) {\n    let u = q2(c) || c, m = await o(u.subjectId, u.lessonId);',
    '}, async readExplanation(c) {\n    if (isAdabiSubject(c?.subjectId)) return readAdabiExplanation(c);\n    let u = q2(c) || c, m = await o(u.subjectId, u.lessonId);');
  const prelude = `import { ADABI_SUBJECTS as addedSubjects } from ${JSON.stringify(imports.course)};
import { getSubjectRoadmap as updatedRoadmap } from ${JSON.stringify(imports.roadmaps)};
import { resolveQuestionLocation as updatedLocation, getPartQuestionIds as updatedPartIds, getQuestionXp as updatedXp } from ${JSON.stringify(imports.rewards)};
import { loadAdabiLessonPart, readAdabiExplanation } from ${JSON.stringify(imports.content)};
const isAdabiSubject = value => typeof value === 'string' && value.startsWith('adabi-');
`;
  // Scientific calls retain their exact recovered implementations and rewards.
  // The catalog is extended after reward initialization so existing question
  // rewards are unchanged. It enables the original subscription validator.
  const extension = `
const originalRoadmap = getSubjectRoadmap;
getSubjectRoadmap = id => isAdabiSubject(id) ? updatedRoadmap(id) : originalRoadmap(id);
COURSE_SUBJECTS = Object.freeze([...COURSE_SUBJECTS, ...addedSubjects]);
const originalLocation = resolveQuestionLocation;
resolveQuestionLocation = key => isAdabiSubject(key?.subjectId) ? updatedLocation(key) : originalLocation(key);
const originalBaselineLocation = q2;
q2 = key => isAdabiSubject(key?.subjectId) ? updatedLocation(key) : originalBaselineLocation(key);
const originalPartIds = getPartQuestionIds;
getPartQuestionIds = key => isAdabiSubject(key?.subjectId) ? updatedPartIds(key) : originalPartIds(key);
const originalBaselinePartIds = F0;
F0 = key => isAdabiSubject(key?.subjectId) ? updatedPartIds(key) : originalBaselinePartIds(key);
const originalXp = getQuestionXp;
getQuestionXp = key => isAdabiSubject(key?.subjectId) ? updatedXp(key) : originalXp(key);
const originalBaselineXp = z0;
z0 = key => isAdabiSubject(key?.subjectId) ? updatedXp(key) : originalBaselineXp(key);
`;
  return prelude + source + extension;
}

export async function prepareAdabiWorker({ baseline, directory }) {
  await mkdir(directory, { recursive:true });
  const relative = file => {
    const value = path.relative(directory, path.resolve(file)).split(path.sep).join('/');
    return value.startsWith('.') ? value : `./${value}`;
  };
  const source = patchAdabiWorker(await readFile(baseline, 'utf8'), {
    course:relative('src/data/course.js'), roadmaps:relative('src/data/subject-roadmaps.js'),
    rewards:relative('src/domain/question-rewards.js'), content:relative('src/server/cloudflare-adabi-content.mjs'),
  });
  await writeFile(path.join(directory, 'entry.mjs'), source);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [baseline, directory] = process.argv.slice(2);
  if (!baseline || !directory) throw new Error('Usage: node scripts/prepare-adabi-worker.mjs <reviewed-current-worker.mjs> <ignored-output-directory>');
  await prepareAdabiWorker({ baseline:path.resolve(baseline), directory:path.resolve(directory) });
  console.log('Unpublished Adabi Worker entry prepared. No resources or student data were changed.');
}
