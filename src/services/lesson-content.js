import { createDownloadQueue, canWarmConnection } from "./download-queue.js";

const base = () => new URL("./", document.baseURI);
const catalogUrl = () => document.querySelector('meta[name="khutwa-catalog"]')?.content;
const cacheName = () => `khutwa-public-${base().pathname.replace(/[^a-z0-9]/gi, "_")}-v1`;
const pending = new Map();
let catalogPromise;
let catalogValue;
let warmingStarted = false;
let warmingLesson = null;
const warmedLessons = new Set();
let cacheBlocked = false;
let listening = false;
let storageChecks = 0;
let cacheAllowed = true;
const canWarm = () => !cacheBlocked && canWarmConnection({ connection:navigator.connection, hidden:document.hidden, online:navigator.onLine });
const queue = createDownloadQueue({
  canWarm,
  idle:callback => typeof requestIdleCallback === "function" ? requestIdleCallback(callback, { timeout:1500 }) : setTimeout(callback, 100),
  async load(path, { signal, priority }) {
    const url = new URL(path, base());
    if (url.origin !== location.origin) throw new Error("Unexpected content origin.");
    let cache;
    try {
      if (++storageChecks % 64 === 1 && navigator.storage?.estimate) {
        const { usage = 0, quota = 0 } = await navigator.storage.estimate();
        cacheAllowed = !quota || (quota - usage > 32 * 1024 * 1024 && usage < quota * 0.8);
        if (!cacheAllowed) cacheBlocked = true;
      }
      cache = await caches.open(cacheName());
    } catch { /* Storage may be denied. */ }
    const cached = await cache?.match(url.href);
    if (cached) return cached;
    const response = await fetch(url, { signal:AbortSignal.any([signal, AbortSignal.timeout(20000)]), priority, credentials:"omit" });
    if (!response.ok) throw new Error(`Content request failed (${response.status}).`);
    // Only public, content-addressed files are persisted. Account APIs never enter this queue.
    if (cacheAllowed && cache && (/\.[a-f0-9]{16}\./.test(url.pathname) || /^[a-f0-9]{16}$/.test(url.searchParams.get("v") || ""))) {
      try { await cache.put(url.href, response.clone()); }
      catch (error) { if (error.name === "QuotaExceededError") cacheBlocked = true; }
    }
    return response;
  },
});

async function json(path, options = {}) {
  const response = await queue.request(path, options);
  options.signal?.throwIfAborted();
  return response.clone().json();
}

async function catalog(options) {
  if (!catalogUrl()) return null;
  if (catalogValue) return catalogValue;
  if (catalogPromise && options?.priority === 0) void queue.request(catalogUrl(), { priority:0 }).catch(() => {});
  catalogPromise ||= json(catalogUrl(), options).then(value => catalogValue = value).catch(error => { catalogPromise = null; throw error; });
  const value = await catalogPromise;
  options?.signal?.throwIfAborted();
  return value;
}

export function hasPackagedLessons() { return Boolean(catalogUrl()); }

export async function loadStreamedLesson(subjectId, lessonId, { signal, priority = 0 } = {}) {
  const index = await catalog({ signal, priority });
  const entry = index?.lessons[`${subjectId}:${lessonId}`];
  if (!entry) return null;
  let promise = pending.get(entry);
  if (!promise) {
    promise = json(entry, { priority }).then(data => {
      if (!Array.isArray(data.steps) || !Array.isArray(data.parts)) throw new Error("Invalid lesson index.");
      const hydrated = new Map();
      const loadStep = async (id, options = {}) => {
        const descriptor = data.steps.find(step => step.id === id);
        if (!descriptor) throw new Error("Unknown lesson question.");
        if (!hydrated.has(id)) {
          const step = await json(descriptor.url, { priority:0, ...options });
          if (step.id !== id || step.type !== descriptor.type) throw new Error("Invalid question response.");
          hydrated.set(id, step);
        }
        options.signal?.throwIfAborted();
        return hydrated.get(id);
      };
      return { ...data, streamed:true, loadStep, peekStep:id => hydrated.get(id),
        async loadAll(options) { return Promise.all(data.steps.map(step => loadStep(step.id, options))); },
        warm(fromId) {
          if (warmingLesson === entry || warmedLessons.has(entry) || !canWarm()) return;
          warmingLesson = entry;
          const start = Math.max(0, data.steps.findIndex(step => step.id === fromId));
          const ordered = [...data.steps.slice(start), ...data.steps.slice(0, start)];
          void (async () => {
            for (const step of ordered) {
              if (warmingLesson !== entry || !canWarm()) return;
              await queue.request(step.url, { priority:1 });
              for (const asset of step.assets || []) await queue.request(asset, { priority:1 });
            }
            warmedLessons.add(entry);
          })().catch(() => {}).finally(() => { if (warmingLesson === entry) warmingLesson = null; });
        },
      };
    }).catch(error => { pending.delete(entry); throw error; });
    pending.set(entry, promise);
  } else if (priority === 0) {
    // Promote an in-flight catalog warm-up when the student selects this lesson.
    void queue.request(entry, { priority:0 }).catch(() => {});
  }
  const result = await promise;
  signal?.throwIfAborted();
  return result;
}

export async function startContentWarming() {
  if (warmingStarted || !hasPackagedLessons()) return;
  warmingStarted = true;
  const resume = () => { queue.resume(); if (!warmingStarted && canWarm()) void startContentWarming(); };
  if (!listening) {
    listening = true;
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("online", resume);
    navigator.connection?.addEventListener("change", resume);
  }
  try {
    const index = await catalog({ priority:10 });
    // First question in every subject's first lesson, then second lessons, etc.
    // A single idle lane leaves bandwidth and CPU available for interaction.
    for (const key of index.order) {
      const entry = index.lessons[key];
      const lesson = await json(entry, { priority:10 });
      if (lesson.steps[0]) {
        await queue.request(lesson.steps[0].url, { priority:10 });
        for (const asset of lesson.steps[0].assets || []) await queue.request(asset, { priority:10 });
      }
    }
    for (const key of index.order) {
      const lesson = await json(index.lessons[key], { priority:20 });
      for (const step of lesson.steps) {
        await queue.request(step.url, { priority:20 });
        for (const asset of step.assets || []) await queue.request(asset, { priority:20 });
      }
    }
    for (const asset of index.assets || []) await queue.request(asset, { priority:30 });
  } catch { warmingStarted = false; /* A later online event can retry without blocking study. */ }
}
