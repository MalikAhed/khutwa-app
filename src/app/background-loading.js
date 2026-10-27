import { createDownloadQueue } from "../services/download-queue.js";
import { useManagedImagePreloading } from "../ui/media-ready.js";

let initialization, queue, manifest, cache, selected, started = false;
const base = () => new URL("./", document.baseURI);
const cacheName = version => `khutwa-content:${base().pathname}:${version}`;
const backgroundAllowed = () => !document.hidden && navigator.onLine !== false && !navigator.connection?.saveData;

async function initialize() {
  if (initialization) return initialization;
  initialization = (async () => {
    const response = await fetch(new URL("content-manifest.json", base()), { cache:"no-cache" });
    if (!response.ok) throw new Error("Content catalog unavailable");
    manifest = await response.json();
    const release = document.querySelector('meta[name="learn-release"]')?.content;
    // Never mix a running release with a manifest from a newer deployment.
    if (release && manifest.version !== release) throw new Error("Content catalog changed");
    if (release && "serviceWorker" in navigator && "caches" in window) {
      try {
        cache = await caches.open(cacheName(release));
        await navigator.serviceWorker.register(new URL("content-worker.js", base()), { scope:base().pathname, updateViaCache:"none" });
        const registration = await navigator.serviceWorker.ready;
        const files = [...new Set([...manifest.onboarding, ...manifest.helpers, ...manifest.lessons.flatMap(lesson => lesson.files)])];
        const channel = new MessageChannel();
        await new Promise(resolve => {
          const timer = setTimeout(resolve, 3000);
          channel.port1.onmessage = () => { clearTimeout(timer); resolve(); };
          registration.active.postMessage({ type:"CONTENT_CONFIG", version:release, files }, [channel.port2]);
        });
        channel.port1.close();
      } catch { cache = null; /* Ordinary HTTP caching remains available. */ }
    }
    queue = createDownloadQueue({ download:async (file, { signal, priority }) => {
      const url = new URL(file, base());
      try { if (cache && await cache.match(url)) return; } catch { cache = null; }
      const response = await fetch(url, { signal:AbortSignal.any([signal, AbortSignal.timeout(20000)]), priority,
        cache:cache ? "reload" : "default", headers:{ "X-Learn-Download":"1" } });
      if (!response.ok) throw new Error(`Content download failed: ${response.status}`);
      // An interrupted file cannot be marked installed.
      const bytes = await response.arrayBuffer();
      signal.throwIfAborted();
      if (cache) {
        const headers = new Headers(response.headers);
        headers.delete("content-encoding"); headers.delete("content-length");
        try { await cache.put(url, new Response(bytes, { status:response.status, headers })); }
        catch { cache = null; /* A full/denied cache must not block studying. */ }
      }
    } });
    useManagedImagePreloading();
    return queue;
  })().catch(() => { initialization = null; return null; });
  return initialization;
}

function applySelected() {
  if (!queue || !selected || selected.signal?.aborted) return;
  const lesson = manifest.lessons.find(item => item.subjectId === selected.subjectId && item.lessonId === selected.lessonId);
  if (lesson) void queue.prioritize([...lesson.first, ...lesson.files], { signal:selected.signal });
}

// Called at click time, before importing the renderer or question bank.
export function prioritizeLesson(subjectId, lessonId, { signal } = {}) {
  selected = { subjectId, lessonId, signal };
  if (document.body.hasAttribute("data-startup")) return;
  queue?.pause();
  if (queue) { applySelected(); if (backgroundAllowed()) queue.resume(); return; }
  void initialize().then(applySelected);
}

export function warmLearningExperience() {
  if (started) return;
  if (document.body.hasAttribute("data-startup")) {
    document.addEventListener("app:ready", warmLearningExperience, { once:true });
    return;
  }
  started = true;
  const refresh = () => {
    if (!backgroundAllowed()) { queue?.pause(); return; }
    void initialize().then(downloads => {
      if (!downloads) return;
      if (!backgroundAllowed()) { downloads.pause(); return; }
      downloads.start([...manifest.onboarding, ...manifest.helpers,
        ...manifest.lessons.flatMap(lesson => lesson.first), ...manifest.lessons.flatMap(lesson => lesson.files)]);
      applySelected();
      downloads.resume();
    });
  };
  document.addEventListener("visibilitychange", refresh);
  window.addEventListener("online", refresh);
  window.addEventListener("focus", refresh);
  window.addEventListener("offline", refresh);
  navigator.connection?.addEventListener("change", refresh);
  window.addEventListener("pagehide", () => queue?.pause());
  window.addEventListener("pageshow", refresh);
  setInterval(refresh, 30000);
  if (window.requestIdleCallback) window.requestIdleCallback(refresh, { timeout:1500 });
  else setTimeout(refresh, 0);
}
