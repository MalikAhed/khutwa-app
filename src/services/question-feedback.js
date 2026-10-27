import { questionRewardKey } from "../domain/question-rewards.js";
import { createAuthClient } from "./auth-client.js";

const keyFor = key => JSON.stringify([key.subjectId,key.lessonId,key.partId,key.stepId]);
export function createQuestionFeedback({ service, progressStore, apiBase = null, storage = null, fetchImpl = globalThis.fetch }) {
  const client = apiBase ? createAuthClient({ baseUrl:apiBase,fetchImpl }) : null;
  const cache = new Map();
  let revision = 0;
  const queues = new Map();
  const listeners = new Set();
  const ratingIndexes = new Map();
  const loadedAt = new Map();
  const notify = () => listeners.forEach(listener => listener());
  progressStore?.subscribe(() => { ratingIndexes.clear(); notify(); });
  const owned = owner => {
    if (!cache.has(owner)) {
      let saved = {};
      try { saved = JSON.parse(storage?.getItem(`tawjihi:question-feedback:${owner}`) || "{}"); } catch { /* Fresh local cache. */ }
      cache.set(owner,saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {});
    }
    return cache.get(owner);
  };
  function ratingRecord(owner, key) {
    if (!ratingIndexes.has(owner)) {
      const index = new Map((progressStore?.getAnswerRatings(owner) || [])
        .map(item => [questionRewardKey(item), { rating:item.rating, automatic:true }]));
      for (const [id,record] of Object.entries(owned(owner))) {
        if (!record?.rating) continue;
        try {
          const ids = JSON.parse(id);
          if (ids.length === 4) index.set(questionRewardKey({subjectId:ids[0],stepId:ids[3]}),record);
        } catch { /* Ignore malformed legacy entries. */ }
      }
      ratingIndexes.set(owner,index);
    }
    return ratingIndexes.get(owner).get(questionRewardKey(key)) || null;
  }
  async function write(owner, key, value, { signal } = {}) {
    if (owner === "guest" || owner !== service.getLearnerProgressOwner()) return { status:"aborted" };
    if (value.type === "rating" && value.automatic && ratingRecord(owner,key) && !ratingRecord(owner,key).automatic) return { status:"saved" };
    // Confirmed personal choices survive navigation, while remaining bound to this learner.
    if (value.type === "rating" || value.type === "hide") signal = undefined;
    let confirmedRating;
    if (client) {
      const result = await client.request("/question-feedback", { method:"POST", body:JSON.stringify({ ...key,...(value.type === "hide" ? {type:"hide"} : value) }),
        headers:{ "X-Progress-Owner":owner }, signal,keepalive:value.type === "rating" || value.type === "hide" });
      if (signal?.aborted || owner !== service.getLearnerProgressOwner()) return { status:"aborted" };
      if (!result.ok) return { status:"unavailable" };
      confirmedRating = result.body?.rating;
    }
    if (signal?.aborted || owner !== service.getLearnerProgressOwner()) return { status:"aborted" };
    const id = value.type === "hide" ? questionRewardKey(key) : keyFor(key);
    const previous = owned(owner)[id];
    delete owned(owner)[id];
    owned(owner)[id] = { ...previous,...value,...(value.type === "rating" ? {updatedAt:new Date().toISOString()} : {}),...(confirmedRating || {}) };
    try { storage?.setItem(`tawjihi:question-feedback:${owner}`,JSON.stringify(owned(owner))); }
    catch { if (!client) {
      if (previous) owned(owner)[id] = previous;
      else delete owned(owner)[id];
      return { status:"unavailable" };
    } }
    revision += 1;
    ratingIndexes.delete(owner);
    notify();
    return { status:"saved" };
  }
  function save(key,value,options) {
    const owner = service.getLearnerProgressOwner();
    revision += 1;
    const result = (queues.get(owner) || Promise.resolve()).then(() => write(owner,key,value,options));
    queues.set(owner,result.catch(() => {}));
    return result;
  }
  return Object.freeze({
    async ready({ signal, allowCached = false } = {}) {
      const owner = service.getLearnerProgressOwner();
      if (owner === "guest") return;
      await queues.get(owner);
      if (!client || signal?.aborted || owner !== service.getLearnerProgressOwner()) return;
      if (allowCached && Date.now() - (loadedAt.get(owner) || 0) < 30000) return;
      const readRevision = ++revision;
      const result = await client.request("/question-feedback",{ headers:{ "X-Progress-Owner":owner },signal });
      if (!result.ok || signal?.aborted || owner !== service.getLearnerProgressOwner() || readRevision !== revision) return;
      const ratings = result.body?.ratings;
      if (!Array.isArray(ratings)) return;
      loadedAt.set(owner,Date.now());
      for (const item of ratings) {
        if (["easy","medium","hard"].includes(item?.rating)
          && ["subjectId","lessonId","partId","stepId"].every(key => typeof item[key] === "string"))
          {
            const id = keyFor(item), previous = owned(owner)[id];
            delete owned(owner)[id];
            owned(owner)[id] = { ...previous,rating:item.rating,automatic:item.automatic === true,updatedAt:item.updatedAt || "" };
          }
      }
      if (Array.isArray(result.body?.hiddenQuestions)) for (const item of result.body.hiddenQuestions) {
        if (typeof item?.subjectId === "string" && typeof item?.stepId === "string")
          owned(owner)[questionRewardKey(item)] = { ...owned(owner)[questionRewardKey(item)],hidden:true };
      }
      try { storage?.setItem(`tawjihi:question-feedback:${owner}`,JSON.stringify(owned(owner))); } catch { /* Server preferences remain durable. */ }
      ratingIndexes.delete(owner);
      notify();
    },
    isHidden:key => owned(service.getLearnerProgressOwner())[questionRewardKey(key)]?.hidden === true,
    hide:(key,options) => save(key,{ type:"hide",hidden:true },options),
    subscribe:listener => { listeners.add(listener); return () => listeners.delete(listener); },
    getRating:key => ratingRecord(service.getLearnerProgressOwner(),key)?.rating || null,
    saveRating:(key,rating,options) => save(key,{ type:"rating",rating,automatic:options?.automatic === true },options),
    report:(key,reason,details,options) => save(key,{ type:"report",reason,details },options),
  });
}
