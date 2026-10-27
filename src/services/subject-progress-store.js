// @ts-check
import { applyProgressUpdate, currentPartProgress, emptyPart, homeLearningSummary, localDateKey, partKey, progressSubjectId, recalculateQuestionRewards, summarizeParts } from "../domain/subject-progress.js?v=acff67f262f3c107";
import { getSubjectRoadmap } from "../data/subject-roadmaps.js?v=acff67f262f3c107";
import { getIctPartQuestionIds } from "../data/lessons/ict/question-index.js?v=acff67f262f3c107";
import { getPartQuestionIds, resolveQuestionLocation } from "../domain/question-rewards.js?v=acff67f262f3c107";
import { defaultAnswerRating } from "../domain/question-ratings.js?v=acff67f262f3c107";
import { createSessionProgressAdapter } from "./session-progress.js?v=acff67f262f3c107";
export { getUnitPartProgress, localDateKey } from "../domain/subject-progress.js?v=acff67f262f3c107";

/** @typedef {import('../domain/subject-progress.js').ProgressKey} ProgressKey */
/** @typedef {import('../domain/subject-progress.js').PartRecord} PartRecord */
/** @typedef {import('../domain/subject-progress.js').ProgressUpdate} ProgressUpdate */
/** @typedef {{read:(owner:string)=>Map<string,PartRecord>|Promise<Map<string,PartRecord>>, update:(update:ProgressUpdate)=>Promise<Map<string,PartRecord>>, close:()=>void|Promise<void>, sync?:(owner:string)=>Promise<void>, readCached?:(owner:string)=>Map<string,PartRecord>|Promise<Map<string,PartRecord>>, isRemoteOwner?:(owner:string)=>boolean}} ProgressAdapter */

/** @typedef {{dailyStreak?:{streak:number, activeToday:boolean}}} StreakResult */
/** @typedef {StreakResult & {status:'saved'|'failed', whenSynced?:Promise<StreakResult>}} SaveResult */
/** @typedef {{records:Map<string,PartRecord>, pending:ProgressUpdate[], failed:boolean, loaded:boolean, recoveryWarning:boolean, queue:Promise<void|SaveResult>}} OwnerState */
/** @typedef {{storage?:Pick<Storage,'getItem'|'setItem'>|null, onError?:(error:unknown)=>void, resourceStore?:{spend:(owner:string,id:string)=>void}, adapter?:ProgressAdapter}} ProgressStoreOptions */

// One cache/subscription boundary for Home and lessons. Writes are optimistic;
// only committed adapter writes report saved. Failed operations stay retryable.
/** @param {ProgressStoreOptions} [options] */
export function createSubjectProgressStore({ storage = null, onError = console.warn, resourceStore, adapter:providedAdapter } = {}) {
  /** @type {Map<string,OwnerState>} */
  const owners = new Map();
  /** @type {Set<()=>void>} */
  const subscribers = new Set();
  /** @type {Map<string,Promise<void>>} */
  const syncing = new Map();
  const syncAgain = new Set();
  const adapter = providedAdapter || createSessionProgressAdapter({ storage, onError:(error, ownerId) => reportRecoveryWarning(ownerId, error) });
  const notify = () => subscribers.forEach((subscriber) => subscriber());
  /** @param {string} ownerId @returns {OwnerState} */
  const stateFor = (ownerId) => {
    if (!owners.has(ownerId)) owners.set(ownerId, { records:new Map(), pending:[], failed:false, loaded:false, recoveryWarning:false, queue:Promise.resolve() });
    return /** @type {OwnerState} */ (owners.get(ownerId));
  };
  /** @param {Map<string,PartRecord>} records @param {ProgressUpdate} update */
  const applyCached = (records, update) => {
    const key = partKey(update.value);
    const previous = records.get(key) || emptyPart();
    const next=applyProgressUpdate(previous,{ ...update,id:undefined },records);
    const remote = adapter.isRemoteOwner?.(update.value.ownerId);
    if(remote) { next.rewardXp=previous.rewardXp;next.completedDate=previous.completedDate; }
    records.set(key,next);
    return remote ? records : recalculateQuestionRewards(records);
  };
  /** @param {OwnerState} state @param {Map<string,PartRecord>} records */
  const overlay = (state, records) => {
    state.records = new Map(records);
    for (const update of state.pending) {
      state.records = applyCached(state.records, update);
    }
  };
  /** @param {string} ownerId @param {unknown} error */
  function reportRecoveryWarning(ownerId, error) {
    stateFor(ownerId).recoveryWarning = true;
    onError(error);
    notify();
  }
  /** @param {string} ownerId */
  async function readOwner(ownerId) {
    const state = stateFor(ownerId);
    try {
      if (!state.loaded && adapter.readCached) overlay(state, await adapter.readCached(ownerId));
      overlay(state, await adapter.read(ownerId)); state.loaded = true;
      if (!state.pending.length) state.failed = false;
    }
    catch (error) { state.failed = true; onError(error); }
    notify();
  }
  /** @param {string} ownerId */
  function syncOwner(ownerId) {
    if (!adapter.sync) return Promise.resolve();
    if (syncing.has(ownerId)) {
      syncAgain.add(ownerId);
      return /** @type {Promise<void>} */ (syncing.get(ownerId));
    }
    const synced = (async () => {
      do {
        syncAgain.delete(ownerId);
        try { await adapter.sync?.(ownerId); }
        catch (error) { onError(error); break; }
        // Only local reads/writes share the storage queue. A stalled server
        // must never hold up the next answer's IndexedDB transaction.
        const state = stateFor(ownerId);
        const ready = state.queue.then(() => readOwner(ownerId));
        state.queue = ready;
        await ready;
      } while (syncAgain.has(ownerId));
    })().finally(() => { syncing.delete(ownerId); syncAgain.delete(ownerId); });
    syncing.set(ownerId, synced);
    return synced;
  }
  /** @param {string} ownerId */
  function refresh(ownerId) {
    const state = stateFor(ownerId);
    // Reads and writes share one queue so an older read cannot undo a save.
    const ready = state.queue.then(() => readOwner(ownerId));
    state.queue = ready;
    return ready.then(() => syncOwner(ownerId));
  }
  /** @param {string} ownerId */
  const recordsFor = (ownerId) => stateFor(ownerId).records;
  /** @param {ProgressKey} key */
  const get = (key) => {
    const record = currentPartProgress(recordsFor(key.ownerId), key);
    return { completedStepIds:record.completedStepIds, completed:record.completed };
  };
  /** @param {string} ownerId @returns {Promise<SaveResult>} */
  const savePending = async (ownerId) => {
    const state = stateFor(ownerId);
    while (state.pending.length) {
      try {
        const records = await adapter.update(state.pending[0]);
        state.pending.shift();
        state.failed = false;
        overlay(state, records);
      } catch (error) { state.failed = true; onError(error); break; }
    }
    notify();
    return { status:state.failed ? "failed" : "saved" };
  };
  /** @param {ProgressUpdate} update */
  function write(update) {
    update = { ...update };
    update.value = { ...update.value };
    update.value.subjectId = progressSubjectId(update.value.subjectId);
    if (update.type === "answer") {
      const location = resolveQuestionLocation(update.value);
      if (location && location.partId !== update.value.partId) Object.assign(update.value, location);
    }
    if (!update.id) {
      // getRandomValues also works on local HTTP addresses outside localhost.
      const bytes = crypto.getRandomValues(new Uint8Array(16));
      bytes[6] = (bytes[6] & 15) | 64;
      bytes[8] = (bytes[8] & 63) | 128;
      const hex = [...bytes].map(byte => byte.toString(16).padStart(2, "0")).join("");
      update.id = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
    const key = update.value;
    if (![key.ownerId, key.subjectId, key.lessonId, key.partId].every((id) => typeof id === "string" && id)) throw new TypeError("Progress identity is required.");
    if (update.type === "answer") resourceStore?.spend(key.ownerId, update.id);
    const state = stateFor(key.ownerId);
    state.pending.push(update);
    state.records = applyCached(state.records, update);
    notify();
    state.queue = state.queue.then(() => savePending(key.ownerId));
    return state.queue.then(result => ({ ...result, updateId:update.id,
      synced:result?.status === "saved" ? syncOwner(key.ownerId) : Promise.resolve() }));
  }
  return Object.freeze({
    get, refresh, ready:refresh, reportRecoveryWarning,
    /** @param {string} ownerId */
    getAnswerRatings(ownerId) {
      return [...recordsFor(ownerId)].flatMap(([key, record]) => {
        const [subjectId, lessonId, partId] = JSON.parse(key);
        return record.review.flatMap(item => {
          const rating = defaultAnswerRating(item);
          return rating ? [{ subjectId, lessonId, partId, stepId:item.stepId, rating }] : [];
        });
      });
    },
    /** @param {ProgressKey} key @param {"easy"|"medium"|"hard"} rating */
    getRatedProgress(key, rating) {
      const record = currentPartProgress(recordsFor(key.ownerId), key);
      const ids = record.ratedProgress?.[rating] || [];
      const questions = getPartQuestionIds(key);
      return { completedStepIds:ids, completed:questions.length > 0 && questions.every(id => ids.includes(id)),
        review:ids.map(stepId => ({ stepId, misses:0, active:false })) };
    },
    /** @param {string} ownerId */
    hasRecoveryWarning:(ownerId) => stateFor(ownerId).recoveryWarning,
    /** @param {string} ownerId */
    dismissRecoveryWarning(ownerId) { stateFor(ownerId).recoveryWarning = false; notify(); },
    /** @param {import('../domain/subject-progress.js').CompletionUpdate} value */
    record:(value) => write({ type:"completion", value }),
    /** @param {import('../domain/subject-progress.js').AnswerUpdate} value */
    async recordAnswer(value) {
      const date = value.date || localDateKey();
      const result = await write({ type:"answer", value:{ ...value, date } });
      /** @returns {StreakResult} */
      const streakResult = () => {
        const records = recordsFor(value.ownerId);
        const after = summarizeParts(records.values(), 0, date);
        const claimed = [...records.values()].some(record =>
          record.streakCelebration?.id === result.updateId && record.streakCelebration?.date === date);
        return result.status === "saved" && claimed && after.activeToday
          ? { dailyStreak:{ streak:after.streak, activeToday:true } } : {};
      };
      return { status:result.status, ...(adapter.isRemoteOwner?.(value.ownerId)
        ? { whenSynced:result.synced.then(streakResult) } : streakResult()) };
    },
    /** @param {ProgressKey} key */
    getReview:(key) => {
      return currentPartProgress(recordsFor(key.ownerId), key).review;
    },
    /** @param {ProgressKey & {totalParts:number, date?:string}} options */
    getOutcome({ ownerId, subjectId, totalParts, date = localDateKey() }) {
      const roadmap = subjectId === "mathematics" || subjectId === "mathematics-2" ? getSubjectRoadmap(subjectId) : null;
      const keys = roadmap ? new Set(roadmap.units.flatMap(unit => unit.lessons.flatMap(lesson =>
        lesson.parts.map(part => partKey({ subjectId, lessonId:lesson.id, partId:part.id }))))) : null;
      const records = [...recordsFor(ownerId)].filter(([key]) => keys ? keys.has(key) : JSON.parse(key)[0] === subjectId).map(([, record]) => record);
      const daily = summarizeParts(recordsFor(ownerId).values(), 0, date);
      const current = getSubjectRoadmap(subjectId);
      const reviews = current ? current.units.flatMap(unit => unit.lessons.flatMap(lesson => lesson.parts
        .map(part => currentPartProgress(recordsFor(ownerId), { subjectId, lessonId:lesson.id, partId:part.id })))) : records;
      const summary = summarizeParts(records, totalParts, date);
      const reviewSummary = summarizeParts(reviews, totalParts, date);
      return { ...summary, mustReviewCount:reviewSummary.mustReviewCount, streak:daily.streak, activeToday:daily.activeToday };
    },
    /** @param {string} ownerId @param {import('../domain/subject-progress.js').ProgressRoadmap[]} roadmaps */
    getHomeLearning:(ownerId, roadmaps) => homeLearningSummary(recordsFor(ownerId), roadmaps, undefined,
      (_lesson, part) => getIctPartQuestionIds(part.id)),
    /** @param {string} ownerId */
    getSaveState(ownerId) { const state = stateFor(ownerId); return state.failed ? "failed" : state.pending.length ? "pending" : state.loaded ? "saved" : "loading"; },
    /** @param {string} ownerId */
    retry(ownerId) {
      const state = stateFor(ownerId);
      state.queue = state.queue.then(async () => { await readOwner(ownerId); return savePending(ownerId); });
      return state.queue.then(async result => { await syncOwner(ownerId); return result; });
    },
    /** @param {()=>void} callback */
    subscribe(callback) { subscribers.add(callback); return () => subscribers.delete(callback); },
    async close() { await Promise.all(syncing.values()); await adapter.close(); },
  });
}
