import { COURSE_SUBJECTS } from "../data/course.js?v=acff67f262f3c107";
import { getSubjectRoadmap } from "../data/subject-roadmaps.js?v=acff67f262f3c107";
import { getIctPartQuestionIds } from "../data/lessons/ict/question-index.js?v=acff67f262f3c107";
import { MAX_LEVEL_XP } from "./progression.js?v=acff67f262f3c107";

const persistedSubject = subjectId => subjectId === "mathematics-2" ? "mathematics" : subjectId;
const locationKey = ({ subjectId, lessonId, partId }) => JSON.stringify([persistedSubject(subjectId), lessonId, partId]);
const aliasKey = key => JSON.stringify([persistedSubject(key.subjectId), key.lessonId, key.partId, key.stepId]);
const parts = new Map();
const questionAliases = new Map();
const aliasLocations = new Map();
const incomingAliases = new Map();
const sourceAliases = new Map();
for (const subject of COURSE_SUBJECTS) {
  for (const unit of getSubjectRoadmap(subject.id)?.units || []) for (const lesson of unit.lessons) {
    const locations = lesson.parts.map(part => ({ subjectId:subject.id, lessonId:lesson.id, partId:part.id,
      questionIds:part.questionIds || getIctPartQuestionIds(part.id), aliases:part.questionAliases || {} }));
    for (const location of locations) parts.set(locationKey(location), location);
    for (const source of locations) for (const [alias, stepId] of Object.entries(source.aliases)) {
      const destination = locations.find(part => part.questionIds.includes(stepId));
      if (!destination) continue;
      questionAliases.set(JSON.stringify([persistedSubject(subject.id), alias]), stepId);
      aliasLocations.set(aliasKey({ ...source, stepId:alias }), { partId:destination.partId, stepId });
      const sourceKey = locationKey(source);
      if (!sourceAliases.has(sourceKey)) sourceAliases.set(sourceKey, []);
      sourceAliases.get(sourceKey).push(alias);
      const key = locationKey(destination);
      if (!incomingAliases.has(key)) incomingAliases.set(key, []);
      incomingAliases.get(key).push({ sourcePartId:source.partId, alias, stepId });
    }
  }
}

// A retired question may move to another part of the same lesson. Only its
// declared source part can redirect it; unrelated parts cannot claim that alias.
export function resolveQuestionLocation(key) {
  const source = parts.get(locationKey(key));
  if (!source) return null;
  const alias = aliasLocations.get(aliasKey(key));
  return alias || source.questionIds.includes(key.stepId)
    ? { subjectId:key.subjectId, lessonId:key.lessonId, partId:alias?.partId || key.partId, stepId:alias?.stepId || key.stepId } : null;
}

export const getPartQuestionIds = key => parts.get(locationKey(key))?.questionIds || [];
export const getIncomingQuestionAliases = key => incomingAliases.get(locationKey(key)) || [];
export const getSourceQuestionAliases = key => sourceAliases.get(locationKey(key)) || [];
export const isSourceQuestionAlias = key => aliasLocations.has(aliasKey(key));

export const canonicalQuestionStepId = ({ subjectId, stepId }) =>
  questionAliases.get(JSON.stringify([persistedSubject(subjectId), stepId])) || stepId;

export const questionRewardKey = question =>
  JSON.stringify([persistedSubject(question.subjectId), canonicalQuestionStepId(question)]);

// Read historical purchases through their retained question identity.
export function normalizeQuestionRewardKey(key) {
  try {
    const ids = JSON.parse(key);
    return Array.isArray(ids) && ids.length === 2 && ids.every(id => typeof id === "string")
      ? questionRewardKey({ subjectId:ids[0], stepId:ids[1] }) : key;
  } catch { return key; }
}

// Navigation metadata supplies current identities without loading question banks.
// Aliases and duplicate placements share one reward; hidden examples earn none.
const identities = [...new Set(COURSE_SUBJECTS.filter(subject => subject.status === "available")
  .flatMap(subject => (getSubjectRoadmap(subject.id)?.units || []).flatMap(unit => unit.lessons
    .filter(lesson => !lesson.hidden && !lesson.optional)
    .flatMap(lesson => lesson.parts.flatMap(part => (part.questionIds || getIctPartQuestionIds(part.id))
      .map(stepId => questionRewardKey({ subjectId:subject.id, stepId })))))))].sort();

// Integer differences distribute the remainder evenly and sum to exactly 49,900.
export const QUESTION_REWARDS = Object.freeze(identities.map((key, index) => {
  const [subjectId, stepId] = JSON.parse(key);
  const xp = Math.floor((index + 1) * MAX_LEVEL_XP / identities.length)
    - Math.floor(index * MAX_LEVEL_XP / identities.length);
  return Object.freeze({ subjectId, stepId, xp });
}));
const rewards = new Map(QUESTION_REWARDS.map(question => [questionRewardKey(question), question.xp]));

export const getQuestionXp = question => rewards.get(questionRewardKey(question)) || 0;
