// @ts-check
import { calculateStreak, getLevelProgress } from "./progression.js?v=acff67f262f3c107";
import { canonicalQuestionStepId, getIncomingQuestionAliases, getPartQuestionIds, getQuestionXp, isSourceQuestionAlias, questionRewardKey, resolveQuestionLocation } from "./question-rewards.js?v=acff67f262f3c107";
import { getLessonQuestionProgress } from "./subject-question-progress.js?v=acff67f262f3c107";

/** @typedef {{ownerId:string, subjectId:string, lessonId:string, partId:string}} ProgressKey */
/** @typedef {{stepId:string, misses:number, active:boolean, solved?:boolean}} ReviewItem */
/** @typedef {Partial<Record<"easy"|"medium"|"hard",string[]>>} RatedProgress */
/** @typedef {{ratedProgress?:RatedProgress, completedStepIds:string[], completed:boolean, review:ReviewItem[], completedDate:string|null, rewardXp:number, activityDates?:string[], streakCelebration?:{date:string,id:string}, revision?:number}} PartRecord */
/** @typedef {ProgressKey & {stepIds:string[], completedStepIds:string[], isComplete:boolean, date?:string}} CompletionUpdate */
/** @typedef {ProgressKey & {stepId:string, correct:boolean|null, rating?:"easy"|"medium"|"hard", reviewing?:boolean, date?:string}} AnswerUpdate */
/** @typedef {{type:'completion', value:CompletionUpdate, id?:string} | {type:'answer', value:AnswerUpdate, id?:string}} ProgressUpdate */

/** @returns {PartRecord} */
export const emptyPart = () => ({ completedStepIds:[], completed:false, review:[], completedDate:null, rewardXp:0, activityDates:[] });
// Math 2 uses the original persisted subject identity after the catalog split.
/** @param {string} subjectId */
export const progressSubjectId = subjectId => subjectId === "mathematics-2" ? "mathematics" : subjectId;
/** @param {Pick<ProgressKey, 'subjectId'|'lessonId'|'partId'>} key */
export const partKey = ({ subjectId, lessonId, partId }) => JSON.stringify([progressSubjectId(subjectId), lessonId, partId]);

// Project legacy credit into its current part without migrating or duplicating
// stored rows. Current canonical review state wins; solved credit is monotonic.
/** @param {Map<string,PartRecord>} records @param {Pick<ProgressKey,'subjectId'|'lessonId'|'partId'>} key @returns {PartRecord} */
export function currentPartProgress(records, key) {
  const original = records.get(partKey(key)) || emptyPart();
  const completed = new Set(original.completedStepIds);
  const confirmed = new Set();
  /** @type {Map<string,ReviewItem>} */
  const review = new Map();
  const addReview = (item, stepId, prefer = false) => {
    const previous = review.get(stepId);
    review.set(stepId, { ...(previous && !prefer ? previous : item), stepId,
      ...(previous?.solved || item.solved ? { solved:true } : {}) });
  };
  for (const incoming of getIncomingQuestionAliases(key)) {
    const saved = records.get(partKey({ ...key, partId:incoming.sourcePartId }));
    if (!saved || incoming.sourcePartId === key.partId) continue;
    if (saved.completedStepIds.includes(incoming.alias)) {
      completed.add(incoming.stepId);
      if (saved.completed) confirmed.add(incoming.stepId);
    }
    for (const item of saved.review) if (item.stepId === incoming.alias) addReview(item, incoming.stepId);
  }
  for (const stepId of original.completedStepIds) {
    const location = resolveQuestionLocation({ ...key, stepId });
    if (location && location.partId !== key.partId) continue;
    const canonical = location?.stepId || stepId;
    completed.add(canonical);
    if (original.completed) confirmed.add(canonical);
  }
  for (const item of original.review) {
    const location = resolveQuestionLocation({ ...key, stepId:item.stepId });
    if (location && location.partId !== key.partId) continue;
    const stepId = location?.stepId || item.stepId;
    addReview(item, stepId, stepId === item.stepId);
  }
  const ids = getPartQuestionIds(key);
  return { ...original, completedStepIds:[...completed], review:[...review.values()],
    completed:original.completed || ids.length > 0 && ids.every(id => confirmed.has(id)) };
}

/** @param {unknown} value @returns {string[]} */
export function validActivityDates(value) {
  return Array.isArray(value) ? [...new Set(value.filter(date => typeof date === "string"
    && /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(date))
    && new Date(date).toISOString().slice(0, 10) === date))].sort() : [];
}

/** @param {unknown} value @returns {RatedProgress} */
export function validRatedProgress(value) {
  return Object.fromEntries(["easy", "medium", "hard"].flatMap(rating =>
    Array.isArray(value?.[rating]) ? [[rating, [...new Set(value[rating].filter(id => typeof id === "string"))]]] : []));
}

/** @param {unknown} value @returns {ReviewItem[]} */
export function validReview(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item?.stepId === "string" && Number.isSafeInteger(item.misses) && item.misses >= 0 && typeof item.active === "boolean")
    .map(({ stepId, misses, active, solved }) => ({ stepId, misses, active, ...(solved === true ? { solved:true } : {}) })) : [];
}

// Each entry is validated independently, including the persisted identity tuple.
/** @param {unknown} saved @param {(error:unknown)=>void} onError @returns {Map<string,PartRecord>} */
export function restorePartEntries(saved, onError) {
  /** @type {Map<string,PartRecord>} */
  const records = new Map();
  if (saved === null) return records;
  if (!saved || typeof saved !== "object" || !("version" in saved) || saved.version !== 1 || !("records" in saved) || !Array.isArray(saved.records)) throw new Error("Unsupported progress version; original data has been retained.");
  for (const entry of saved.records) {
    try {
      if (!Array.isArray(entry) || entry.length !== 2) throw new Error("Invalid progress entry.");
      const [key, value] = entry;
      const ids = JSON.parse(key);
      if (!Array.isArray(ids) || ids.length !== 3 || !ids.every((id) => typeof id === "string" && id)
        || !Array.isArray(value?.completedStepIds) || !value.completedStepIds.every((id) => typeof id === "string")
        || typeof value.completed !== "boolean") throw new Error("Invalid progress entry.");
      records.set(key, { completedStepIds:[...new Set(value.completedStepIds)], completed:value.completed,
        ...(value.ratedProgress ? { ratedProgress:validRatedProgress(value.ratedProgress) } : {}),
        review:validReview(value.review), completedDate:/^\d{4}-\d{2}-\d{2}$/.test(value.completedDate) ? value.completedDate : null,
        rewardXp:Number.isSafeInteger(value.rewardXp) && value.rewardXp >= 0 ? value.rewardXp : 0,
        activityDates:validActivityDates(value.activityDates ?? [value.completedDate]),
        ...(typeof value.streakCelebration?.id === "string" && validActivityDates([value.streakCelebration.date]).length
          ? { streakCelebration:value.streakCelebration } : {}) });
    } catch (error) { onError(error); }
  }
  return recalculateQuestionRewards(records);
}

// Reprice saved correct answers under the current scale without changing their
// identities, completion, mistakes or activity. A replay through an alias earns once.
/** @param {Map<string,PartRecord>} records @returns {Map<string,PartRecord>} */
export function recalculateQuestionRewards(records) {
  const awarded = new Set();
  return new Map([...records].sort(([a], [b]) => a.localeCompare(b)).map(([key, record]) => {
    const [subjectId] = JSON.parse(key);
    let rewardXp = 0;
    for (const item of record.review || []) {
      const question = { subjectId, stepId:item.stepId };
      const id = questionRewardKey(question);
      if (!item.solved || awarded.has(id)) continue;
      awarded.add(id);
      rewardXp += getQuestionXp(question);
    }
    return [key, { ...record, rewardXp }];
  }));
}

/** @param {PartRecord} previous @param {ProgressUpdate} update @param {Map<string,PartRecord>} [ownerRecords] @returns {PartRecord} */
export function applyProgressUpdate(previous, update, ownerRecords) {
  if (update.type === "answer") {
    const { stepId, correct, reviewing = false, date = localDateKey() } = update.value;
    const activityDates = validActivityDates([...(previous.activityDates ?? [previous.completedDate]), date]);
    // The durable adapter claims this day inside its transaction across all parts.
    // Optimistic UI updates do not claim celebrations.
    const streakCelebration = ownerRecords && update.id && ![...ownerRecords.values()].some(record =>
      (record.activityDates ?? [record.completedDate]).includes(date))
      ? { date, id:update.id } : previous.streakCelebration;
    const { rating } = update.value;
    const ratedProgress = rating && typeof correct === "boolean"
      ? { ...validRatedProgress(previous.ratedProgress), [rating]:[...new Set([...(previous.ratedProgress?.[rating] || []), canonicalQuestionStepId(update.value)])] }
      : previous.ratedProgress;
    const activity = { activityDates, ...(ratedProgress ? { ratedProgress } : {}), ...(streakCelebration ? { streakCelebration } : {}) };
    // A reviewed written card is activity, but has no verified correct answer.
    if (correct === null) return { ...previous, ...activity };
    const review = validReview(previous.review);
    const key = partKey(update.value);
    const canonicalId = canonicalQuestionStepId(update.value);
    const item = review.find(item => canonicalQuestionStepId({ ...update.value, stepId:item.stepId }) === canonicalId)
      || (ownerRecords && currentPartProgress(ownerRecords, update.value).review.find(item => item.stepId === canonicalId))
      || { stepId, misses:0, active:false };
    const records = recalculateQuestionRewards(ownerRecords || new Map([[key,previous]]));
    const questionId = questionRewardKey(update.value);
    const alreadySolved = [...records].some(([recordKey, record]) => {
      const [subjectId] = JSON.parse(recordKey);
      return record.review.some(saved => saved.solved
        && questionRewardKey({ subjectId, stepId:saved.stepId }) === questionId);
    });
    const rewardXp = (records.get(key)?.rewardXp || 0)
      + (correct && !alreadySolved ? getQuestionXp(update.value) : 0);
    if (!review.includes(item)) review.push(item);
    if (!correct) { item.misses += 1; item.active ||= item.misses >= 2; }
    else { item.solved = true; if (reviewing) { item.active = false; item.misses = 0; } }
    return { ...previous, review, ...activity, rewardXp };
  }
  const { stepIds, completedStepIds, isComplete, date = localDateKey() } = update.value;
  const allowed = new Set(stepIds);
  // Curriculum revisions may retire a question. Preserve its historical completion
  // while admitting new IDs only from the current lesson and scoring current steps.
  const completed = [...new Set([...previous.completedStepIds, ...completedStepIds.filter((id) => allowed.has(id)
    || isSourceQuestionAlias({ ...update.value, stepId:id }))])];
  const credit = currentPartProgress(new Map([...(ownerRecords || []), [partKey(update.value), { ...previous, completedStepIds:completed }]]), update.value);
  const finished = isComplete && allowed.size > 0 && [...allowed].every((id) => credit.completedStepIds.includes(id));
  const first = !previous.completed && finished;
  return { ...previous, completedStepIds:completed, completed:previous.completed || finished,
    completedDate:first ? date : previous.completedDate,
    activityDates:previous.activityDates ?? validActivityDates([previous.completedDate]) };
}

// Existing records win mutable review state during import. Completion is monotonic.
/** @param {PartRecord|undefined} current @param {PartRecord} imported @returns {PartRecord} */
export function mergeImportedPart(current, imported) {
  if (!current) return imported;
  return { ...current, completed:current.completed || imported.completed,
    completedStepIds:[...new Set([...current.completedStepIds, ...imported.completedStepIds])],
    completedDate:current.completedDate || imported.completedDate,
    rewardXp:Math.max(current.rewardXp, imported.rewardXp),
    activityDates:validActivityDates([...(current.activityDates ?? [current.completedDate]), ...(imported.activityDates ?? [imported.completedDate])]),
    review:[...current.review.map(item => ({ ...item, ...(imported.review.some(old => old.stepId === item.stepId && old.solved) ? { solved:true } : {}) })),
      ...imported.review.filter(item => !current.review.some(saved => saved.stepId === item.stepId))] };
}

/** @param {Iterable<PartRecord>} records @param {number} totalParts */
export function summarizeParts(records, totalParts, date = localDateKey()) {
  const values = [...records];
  const completed = values.filter((record) => record.completed).length;
  const streak = calculateStreak(values.flatMap(record => record.activityDates
    // Preserve historical streak days, without counting new lesson completions.
    || (record.completedDate ? [record.completedDate] : [])), date);
  return { totalXp:values.reduce((sum, record) => sum + record.rewardXp, 0), streak:streak.current,
    activeToday:streak.activeToday, completed, totalParts, progress:totalParts ? Math.round(completed / totalParts * 100) : 0,
    questionsSolved:values.reduce((sum, record) => sum + record.review.filter((item) => item.solved).length, 0),
    mustReviewCount:values.reduce((sum, record) => sum + record.review.filter((item) => item.active).length, 0) };
}

/** @typedef {{subjectId:string, questionsOnly?:boolean, units:readonly {lessons:readonly {id:string, hidden?:boolean, optional?:boolean, parts:readonly {id:string, startStepId?:string, questionIds?:string[]}[]}[]}[]}} ProgressRoadmap */
/** @param {Map<string,PartRecord>} records @param {ProgressRoadmap[]} roadmaps @param {string} [date] @param {(lesson:object,part:object)=>string[]} [getPartQuestionIds] */
export function homeLearningSummary(records, roadmaps, date = localDateKey(), getPartQuestionIds) {
  const lessons = roadmaps.flatMap((roadmap) => roadmap.units.flatMap((unit) => unit.lessons.map((lesson) => ({ ...lesson, subjectId:roadmap.subjectId }))));
  const parts = lessons.flatMap((lesson) => lesson.parts.map((part) => ({ ...part, subjectId:lesson.subjectId, lessonId:lesson.id, partId:part.id })));
  const values = parts.filter((part) => part.startStepId).map((part) => currentPartProgress(records, part));
  const summary = summarizeParts(values, parts.length, date);
  const rewards = summarizeParts(records.values(), parts.length, date);
  const visibleLessons = lessons.filter(lesson => !lesson.hidden && !lesson.optional);
  const completedLessons = visibleLessons.filter(lesson => lesson.parts.length && lesson.parts.every(part =>
    part.startStepId && currentPartProgress(records, { subjectId:lesson.subjectId, lessonId:lesson.id, partId:part.id }).completed)).length;
  const subjects = Object.fromEntries(roadmaps.filter(roadmap => roadmap.questionsOnly || getPartQuestionIds && roadmap.subjectId === "ict")
    .map(roadmap => {
      const subjectLessons = roadmap.units.flatMap(unit => unit.lessons.filter(lesson => !lesson.hidden && !lesson.optional));
      const progress = subjectLessons.map(lesson => getLessonQuestionProgress(lesson,
        (_lesson, part) => currentPartProgress(records, { subjectId:roadmap.subjectId, lessonId:lesson.id, partId:part.id }), getPartQuestionIds));
      const total = progress.reduce((sum, lesson) => sum + lesson.total, 0);
      const solved = progress.reduce((sum, lesson) => sum + lesson.solved, 0);
      return [roadmap.subjectId, {
        currentQuestionsTotal:total, currentQuestionsSolved:solved, progress:total ? Math.round(solved / total * 100) : 0,
        hasStarted:subjectLessons.some(lesson => lesson.parts.some(part => {
          const record = records.get(partKey({ subjectId:roadmap.subjectId, lessonId:lesson.id, partId:part.id }));
          return record?.completedStepIds.length || record?.review.length;
        })),
        curriculumLessonsTotal:subjectLessons.length, requiredLessonsCompleted:progress.filter(lesson => lesson.completed).length,
      }];
    }));
  const questionTotals = Object.values(subjects).reduce((total, subject) => ({
    solved:total.solved + subject.currentQuestionsSolved, total:total.total + subject.currentQuestionsTotal,
  }), { solved:0, total:0 });
  return { ...summary, totalXp:rewards.totalXp, streak:rewards.streak, activeToday:rewards.activeToday,
    publishedPartsTotal:values.length, hasStarted:values.some((record) => record.completedStepIds.length > 0 || record.review.length > 0), ...getLevelProgress(rewards.totalXp),
    dailyStreak:rewards.streak, curriculumLessonsTotal:visibleLessons.length, requiredLessonsCompleted:completedLessons,
    subjects, currentQuestionsSolved:questionTotals.solved, currentQuestionsTotal:questionTotals.total,
    progress:questionTotals?.total ? Math.round(questionTotals.solved / questionTotals.total * 100)
      : visibleLessons.length ? Math.round(completedLessons / visibleLessons.length * 100) : 0 };
}

/** @param {{lessons: {parts?:{startStepId?:string}[]}[]}} unit @param {(lesson:object, part:object)=>{completed:boolean}} [getPartProgress] */
export function getUnitPartProgress(unit, getPartProgress = () => emptyPart()) {
  const parts = unit.lessons.flatMap((lesson) => (lesson.parts || []).map((part) => ({ lesson, part })));
  const completed = parts.filter(({ lesson, part }) => part.startStepId && getPartProgress(lesson, part)?.completed).length;
  return { completed, total:parts.length, percent:parts.length ? Math.round(completed / parts.length * 100) : 0 };
}

export function localDateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
