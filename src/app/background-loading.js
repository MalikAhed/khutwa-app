import { updateOfflineDownloadStatus } from "../ui/offline-download-status.js";
import { createDownloadQueue } from "../services/download-queue.js";
import { useManagedImagePreloading } from "../ui/media-ready.js";

let initialization, queue, manifest, cache, selected, started = false;
let offlineFiles = new Set(), offlineReady = false, savingShell, finishOffline = async () => {};
let offlineIssue = false;
let offlineTotal = 0, lastRefresh = 0;
let quietUntil = 0, interactionTimer, refreshDownloads = () => {};
let catalogController, shellController;
const foregroundLoads = new Set();
const showOfflineStatus = () => updateOfflineDownloadStatus({
  completed:offlineTotal - offlineFiles.size, total:offlineTotal,
  phase:offlineReady ? "ready" : !cache || offlineIssue ? "waiting" : offlineFiles.size ? "downloading" : "finishing",
});
const base = () => new URL("./", document.baseURI);
const cacheName = version => `khutwa-content:${base().pathname}:${version}`;
const digest = async bytes => [...new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))]
  .map(byte => byte.toString(16).padStart(2, "0")).join("");
const savedContentMatches = async (response, file) => response?.ok
  && (!manifest.hashes?.[file] || await digest(await response.arrayBuffer()) === manifest.hashes[file]);
const backgroundAllowed = () => !document.hidden && !foregroundLoads.size && Date.now() >= quietUntil;

// Pause optional bytes at input time, before the target's click handler runs.
// Durable answer writes are owned by the progress service and are never paused.
function prioritizeInput() {
  quietUntil = Date.now() + 1200;
  queue?.pause();
  catalogController?.abort();
  shellController?.abort();
  useManagedImagePreloading();
  clearTimeout(interactionTimer);
  interactionTimer = setTimeout(() => refreshDownloads(), 1200);
}

export function prioritizeInteraction({ signal } = {}) {
  const token = {};
  foregroundLoads.add(token);
  prioritizeInput();
  const release = () => {
    if (!foregroundLoads.delete(token)) return;
    signal?.removeEventListener("abort", release);
    prioritizeInput();
  };
  signal?.addEventListener("abort", release, { once:true });
  if (signal?.aborted) release();
  return release;
}

async function initialize() {
  if (initialization) return initialization;
  const controller = new AbortController();
  catalogController = controller;
  initialization = (async () => {
    const response = await fetch(new URL("content-manifest.json", base()), { cache:"no-cache", priority:"low", signal:AbortSignal.any([controller.signal, AbortSignal.timeout(10000)]) });
    if (!response.ok) throw new Error("Content catalog unavailable");
    const catalog = await response.json();
    if (!["onboarding", "helpers", "lessons"].every(key => Array.isArray(catalog?.[key]))) {
      throw new Error("Invalid content catalog");
    }
    manifest = catalog;
    // Installation includes lesson figures and explanations, not only the shell.
    offlineFiles = new Set([...catalog.onboarding, ...catalog.helpers,
      ...catalog.lessons.flatMap(lesson => [...lesson.first, ...lesson.files])]);
    offlineTotal = offlineFiles.size;
    const release = document.querySelector('meta[name="learn-release"]')?.content;
    // Never mix a running release with a manifest from a newer deployment.
    if (release && manifest.version !== release) throw new Error("Content catalog changed");
    const files = [...offlineFiles];
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
      if (!await messageWorker(worker, { type:"CONTENT_CONFIG", version:release, files, hashes:manifest.hashes })) throw new Error("Offline worker is not ready");
      return worker;
    }
    let completedFiles = [];
    if (release && "serviceWorker" in navigator && "caches" in window) {
      try {
        cache = await caches.open(cacheName(release));
        // Validate resumed files, including entries saved by an older worker.
        const saved = new Set((await cache.keys()).map(request => request.url));
        for (const file of files) {
          controller.signal.throwIfAborted();
          const url = new URL(file, base());
          if (saved.has(url.href) && await savedContentMatches(await cache.match(url), file)) completedFiles.push(file);
        }
        for (const file of completedFiles) offlineFiles.delete(file);
      } catch { cache = null; /* Retry storage on the next download. */ }
      // A delayed worker must not discard already downloaded files or disable caching.
      void navigator.serviceWorker.register(new URL("content-worker.js", base()), { scope:base().pathname, updateViaCache:"none" }).catch(() => {});
      // Serve already saved files immediately, including before preparation reaches 100%.
      void configureWorker().catch(() => {});
    }
    controller.signal.throwIfAborted();
    showOfflineStatus();
    async function finishOfflineShell() {
      showOfflineStatus();
      if (!backgroundAllowed() || !cache || offlineReady || offlineFiles.size || savingShell) return;
      offlineIssue = false;
      showOfflineStatus();
      let timer;
      const controller = new AbortController();
      shellController = controller;
      const finalization = (async () => {
        const shell = await cache.match(new URL("index.html", base())) || await fetch(base(), { cache:"no-cache", priority:"low", signal:AbortSignal.any([controller.signal, AbortSignal.timeout(10000)]) });
        if (!shell.ok || !(await shell.clone().text()).includes(`name="learn-release" content="${release}"`)) return;
        controller.signal.throwIfAborted();
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
      })]).catch(() => { offlineIssue = !controller.signal.aborted; }).finally(() => {
        if (shellController === controller) shellController = null;
        clearTimeout(timer); savingShell = null; showOfflineStatus();
      });
      await savingShell;
    }
    finishOffline = finishOfflineShell;
    queue = createDownloadQueue({ completedFiles, onError:() => { offlineIssue = true; showOfflineStatus(); }, download:async (file, { signal, priority }) => {
      const url = new URL(file, base());
      if (!cache && release && "caches" in window) cache = await caches.open(cacheName(release));
      if (release && !cache) throw new Error("Offline storage unavailable");
      try { if (cache && await savedContentMatches(await cache.match(url), file)) { offlineFiles.delete(file); offlineIssue = false; await finishOfflineShell(); return; } } catch (error) { cache = null; throw error; }
      const response = await fetch(url, { signal:AbortSignal.any([signal, AbortSignal.timeout(20000)]), priority,
        cache:/[?&]v=/.test(url.search) ? "default" : "no-cache", headers:{ "X-Learn-Download":"1" } });
      if (!response.ok) throw new Error(`Content download failed: ${response.status}`);
      // An interrupted file cannot be marked installed.
      const bytes = await response.arrayBuffer();
      if (manifest.hashes?.[file] && await digest(bytes) !== manifest.hashes[file])
        throw new Error("Content changed during download; retry after the update");
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
  })().catch(() => { initialization = null; offlineIssue = !controller.signal.aborted; showOfflineStatus(); return null; })
    .finally(() => { if (catalogController === controller) catalogController = null; });
  return initialization;
}

// Called at click time, before importing the renderer or question bank.
export function prioritizeLesson(subjectId, lessonId, { signal } = {}) {
  selected = { subjectId, lessonId, signal };
  // The browser loads required modules itself. A second download of the same
  // lesson would compete with those imports on a cold or constrained connection.
  return prioritizeInteraction({ signal });
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
      // A complete offline install includes images on every connection. Keep it
      // low priority and interruptible by navigation/input, even with data saver.
      const lessons = manifest.lessons;
      const lesson = !selected?.signal?.aborted && manifest.lessons.find(item => item.subjectId === selected?.subjectId && item.lessonId === selected?.lessonId);
      downloads.start([...(lesson ? [...lesson.first, ...lesson.files] : []), ...manifest.onboarding, ...manifest.helpers,
        ...lessons.flatMap(lesson => lesson.first), ...lessons.flatMap(lesson => lesson.files)]);
      downloads.resume();
      void finishOffline();
    });
  };
  refreshDownloads = refresh;
  for (const type of ["pointerdown", "keydown", "click"])
    document.addEventListener(type, prioritizeInput, { capture:true, passive:true });
  window.addEventListener("popstate", prioritizeInput);
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
