import { updateOfflineDownloadStatus } from "../ui/offline-download-status.js";
import { createDownloadQueue } from "../services/download-queue.js";
import { canPrefetchAssets, useManagedImagePreloading } from "../ui/media-ready.js";

let initialization, queue, manifest, cache, selected, started = false;
let offlineFiles = new Set(), offlineReady = false, savingShell, finishOffline = async () => {};
let offlineIssue = false;
let offlineTotal = 0, appliedSelection = null, lastRefresh = 0;
const showOfflineStatus = () => updateOfflineDownloadStatus({
  completed:offlineTotal - offlineFiles.size, total:offlineTotal,
  phase:offlineReady ? "ready" : !cache || offlineIssue ? "waiting" : offlineFiles.size ? "downloading" : "finishing",
});
const base = () => new URL("./", document.baseURI);
const cacheName = version => `khutwa-content:${base().pathname}:${version}`;
const backgroundAllowed = () => !document.hidden;

async function initialize() {
  if (initialization) return initialization;
  initialization = (async () => {
    const response = await fetch(new URL("content-manifest.json", base()), { cache:"no-cache", signal:AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error("Content catalog unavailable");
    const catalog = await response.json();
    if (!["onboarding", "helpers", "lessons"].every(key => Array.isArray(catalog?.[key]))) {
      throw new Error("Invalid content catalog");
    }
    manifest = catalog;
    offlineFiles = new Set([...catalog.onboarding, ...catalog.helpers]);
    offlineTotal = offlineFiles.size;
    const release = document.querySelector('meta[name="learn-release"]')?.content;
    // Never mix a running release with a manifest from a newer deployment.
    if (release && manifest.version !== release) throw new Error("Content catalog changed");
    const files = [...new Set([...manifest.onboarding, ...manifest.helpers, ...manifest.lessons.flatMap(lesson => lesson.files)])];
    const messageWorker = (worker, message) => new Promise(resolve => {
      const channel = new MessageChannel();
      const finish = value => { clearTimeout(timer); channel.port1.close(); resolve(value); };
      const timer = setTimeout(() => finish(false), 5000);
      channel.port1.onmessage = event => finish(event.data?.ready === true);
      try { worker.postMessage(message, [channel.port2]); } catch { finish(false); }
    });
    async function configureWorker() {
      let registration = await navigator.serviceWorker.getRegistration(base().href);
      if (!registration?.active) {
        registration = await navigator.serviceWorker.register(new URL("content-worker.js", base()), { scope:base().pathname, updateViaCache:"none" });
        registration = await navigator.serviceWorker.ready;
      }
      const worker = registration.active;
      if (!await messageWorker(worker, { type:"CONTENT_CONFIG", version:release, files })) throw new Error("Offline worker is not ready");
      return worker;
    }
    let completedFiles = [];
    if (release && "serviceWorker" in navigator && "caches" in window) {
      try {
        cache = await caches.open(cacheName(release));
        // Cache entries are the checkpoint: count them once before starting the queue.
        const saved = new Set((await cache.keys()).map(request => request.url));
        completedFiles = files.filter(file => saved.has(new URL(file, base()).href));
        for (const file of completedFiles) offlineFiles.delete(file);
      } catch { cache = null; /* Retry storage on the next download. */ }
      // A delayed worker must not discard already downloaded files or disable caching.
      void navigator.serviceWorker.register(new URL("content-worker.js", base()), { scope:base().pathname, updateViaCache:"none" }).catch(() => {});
      // Serve already saved files immediately, including before preparation reaches 100%.
      void configureWorker().catch(() => {});
    }
    showOfflineStatus();
    async function finishOfflineShell() {
      showOfflineStatus();
      if (!cache || offlineReady || offlineFiles.size || savingShell) return;
      offlineIssue = false;
      showOfflineStatus();
      let timer;
      const finalization = (async () => {
        const shell = await cache.match(new URL("index.html", base())) || await fetch(base(), { cache:"no-cache", signal:AbortSignal.timeout(10000) });
        if (!shell.ok || !(await shell.clone().text()).includes(`name="learn-release" content="${release}"`)) return;
        await cache.put(new URL("content-manifest.json", base()), new Response(JSON.stringify(catalog), { headers:{"Content-Type":"application/json"} }));
        const shellHeaders = new Headers(shell.headers);
        shellHeaders.delete("content-encoding"); shellHeaders.delete("content-length");
        await cache.put(new URL("index.html", base()), new Response(await shell.arrayBuffer(), { status:200, headers:shellHeaders }));
        const worker = await configureWorker();
        offlineReady = await messageWorker(worker, { type:"OFFLINE_READY" });
        if (!offlineReady) throw new Error("Offline confirmation was not received");
        if (offlineReady) {
          document.documentElement.dataset.offlineReady = "true";
          showOfflineStatus();
          void navigator.storage?.persist?.().catch(() => {});
        }
      })();
      savingShell = Promise.race([finalization, new Promise((_,reject) => {
        timer = setTimeout(() => reject(new Error("Offline preparation timed out")), 15000);
      })]).catch(() => { offlineIssue = true; }).finally(() => {
        clearTimeout(timer); savingShell = null; showOfflineStatus();
      });
      await savingShell;
    }
    finishOffline = finishOfflineShell;
    queue = createDownloadQueue({ completedFiles, onError:() => { offlineIssue = true; showOfflineStatus(); }, download:async (file, { signal, priority }) => {
      const url = new URL(file, base());
      if (!cache && release && "caches" in window) cache = await caches.open(cacheName(release));
      if (release && !cache) throw new Error("Offline storage unavailable");
      try { if (cache && await cache.match(url)) { offlineFiles.delete(file); offlineIssue = false; await finishOfflineShell(); return; } } catch (error) { cache = null; throw error; }
      const response = await fetch(url, { signal:AbortSignal.any([signal, AbortSignal.timeout(20000)]), priority,
        cache:/[?&]v=/.test(url.search) ? "default" : "no-cache", headers:{ "X-Learn-Download":"1" } });
      if (!response.ok) throw new Error(`Content download failed: ${response.status}`);
      // An interrupted file cannot be marked installed.
      const bytes = await response.arrayBuffer();
      signal.throwIfAborted();
      if (cache) {
        const headers = new Headers(response.headers);
        headers.delete("content-encoding"); headers.delete("content-length");
        try { await cache.put(url, new Response(bytes, { status:response.status, headers })); offlineFiles.delete(file); offlineIssue = false; await finishOfflineShell(); }
        catch (error) { cache = null; showOfflineStatus(); throw error; }
      }
    } });
    useManagedImagePreloading();
    return queue;
  })().catch(() => { initialization = null; offlineIssue = true; showOfflineStatus(); return null; });
  return initialization;
}

function applySelected() {
  if (!queue || !selected || selected.signal?.aborted) return;
  const lesson = manifest.lessons.find(item => item.subjectId === selected.subjectId && item.lessonId === selected.lessonId);
  if (lesson && appliedSelection !== selected) { appliedSelection = selected; void queue.prioritize([...lesson.first, ...lesson.files], { signal:selected.signal }); }
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
    lastRefresh = Date.now();
    void initialize().then(downloads => {
      if (!downloads) return;
      if (!backgroundAllowed()) { downloads.pause(); return; }
      // Prepare the app on every connection; optional bulk lessons wait for a good link.
      const lessons = canPrefetchAssets() ? manifest.lessons : [];
      downloads.start([...manifest.onboarding, ...manifest.helpers,
        ...lessons.flatMap(lesson => lesson.first), ...lessons.flatMap(lesson => lesson.files)]);
      applySelected();
      downloads.resume();
      void finishOffline();
    });
  };
  document.addEventListener("visibilitychange", refresh);
  window.addEventListener("online", refresh);
  window.addEventListener("focus", refresh);
  window.addEventListener("offline", refresh);
  navigator.connection?.addEventListener("change", refresh);
  window.addEventListener("pagehide", () => queue?.pause());
  window.addEventListener("pageshow", refresh);
  // Retry missing startup files/finalization promptly, without interrupting a lesson.
  setInterval(() => { if (!offlineReady || Date.now() - lastRefresh >= 30000) refresh(); }, 5000);
  navigator.serviceWorker?.addEventListener("controllerchange", refresh);
  if (window.requestIdleCallback) window.requestIdleCallback(refresh, { timeout:1500 });
  else setTimeout(refresh, 0);
}
