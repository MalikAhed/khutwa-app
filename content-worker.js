// Public content plus a verified public app shell. Never cache APIs or Students.
const configurations = new Map();
const scope = new URL(self.registration.scope);
const prefix = `khutwa-content:${scope.pathname}:`;
const metadataName = `${prefix}clients`;
const shellPointer = new URL("__offline_shell__", scope).href;
const shellUrl = new URL("index.html", scope).href;
const configUrl = id => new URL(`__content_client__/${id}`, scope).href;
const releaseUrl = version => new URL(`__content_release__/${version}`, scope).href;
const safeUrl = file => {
  const url = new URL(file, scope);
  return url.origin === scope.origin && url.pathname.startsWith(scope.pathname)
    && /^(?:src\/(?!server\/)|assets\/|node_modules\/)/.test(url.pathname.slice(scope.pathname.length)) ? url.href : null;
};
const digest = async bytes => [...new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))]
  .map(byte => byte.toString(16).padStart(2, "0")).join("");
const contentConfig = ({ version, files, hashes = {} }) => ({ version,
  files:files.map(safeUrl).filter(Boolean),
  hashes:Object.fromEntries(Object.entries(hashes).filter(([file, hash]) => safeUrl(file) && /^[a-f0-9]{64}$/.test(hash))
    .map(([file, hash]) => [safeUrl(file), hash])),
});
const releases = new Map();

// The first versioned module can arrive before the new app initializes. Learn
// its exact release so startup files can also reuse verified local bytes.
async function loadRelease(version, metadata) {
  if (!releases.has(version)) releases.set(version, (async () => {
    const saved = await metadata.match(releaseUrl(version));
    if (saved) return saved.json();
    const response = await fetch(new URL("content-manifest.json", scope), { cache:"no-store", signal:AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error("Content catalog unavailable");
    const catalog = await response.json();
    if (catalog.version !== version) throw new Error("Content catalog changed");
    const config = contentConfig({ ...catalog, files:[...new Set([...catalog.onboarding, ...catalog.helpers,
      ...catalog.lessons.flatMap(lesson => [...lesson.first, ...lesson.files])])] });
    await metadata.put(releaseUrl(version), new Response(JSON.stringify(config)));
    return config;
  })().catch(error => { releases.delete(version); throw error; }));
  return releases.get(version);
}

async function reuseContent(url, config) {
  const expected = config.hashes?.[url.href];
  if (!expected) return null; // Older manifests remain readable, without guessing.
  for (const name of (await caches.keys()).reverse()) {
    if (!name.startsWith(prefix)) continue;
    const previousVersion = name.slice(prefix.length);
    if (!/^[a-f0-9]{16}$/.test(previousVersion) || previousVersion === config.version) continue;
    const previousUrl = new URL(url);
    if (previousUrl.searchParams.get("v") === config.version) previousUrl.searchParams.set("v", previousVersion);
    const previous = await (await caches.open(name)).match(previousUrl);
    if (!previous?.ok) continue;
    let bytes = await previous.arrayBuffer();
    // Packaging stamps imports with the release ID. Refresh only that stamp,
    // then require an exact hash match against the new packaged file. A changed
    // question/feature, corrupt cache or different build transform falls back
    // to downloading; old tabs and the previous offline release stay untouched.
    if (/\.(?:m?js|css)$/.test(url.pathname)) bytes = new TextEncoder().encode(
      new TextDecoder().decode(bytes).replaceAll(`?v=${previousVersion}`, `?v=${config.version}`));
    if (await digest(bytes) !== expected) continue;
    const headers = new Headers(previous.headers);
    for (const key of ["content-encoding", "content-length", "etag", "last-modified"]) headers.delete(key);
    return new Response(bytes, { status:200, headers });
  }
  return null;
}

async function serveContent(request, url, config) {
  let cache;
  try {
    cache = await caches.open(`${prefix}${config.version}`);
    const cached = await cache.match(url);
    const expected = config.hashes?.[url.href];
    if (cached && (!expected || await digest(await cached.clone().arrayBuffer()) === expected)) return cached;
    const reused = await reuseContent(url, config);
    if (reused) { await cache.put(url, reused.clone()).catch(() => {}); return reused; }
  } catch { /* Storage failure must still allow a verified network download. */ }
  const expected = config.hashes?.[url.href];
  const response = await fetch(request, expected ? { cache:"no-cache" } : {});
  if (!response.ok) return response;
  if (expected && await digest(await response.clone().arrayBuffer()) !== expected) return Response.error();
  if (cache) await cache.put(url, response.clone()).catch(() => {});
  return response;
}
self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("message", event => {
  if (event.data?.type === "OFFLINE_READY" && event.source?.id) {
    event.waitUntil((async () => {
      const metadata = await caches.open(metadataName);
      const saved = await metadata.match(configUrl(event.source.id));
      if (!saved) return;
      const config = await saved.json();
      const cache = await caches.open(`${prefix}${config.version}`);
      const shell = await cache.match(shellUrl);
      if (!shell || !(await shell.text()).includes(`name="learn-release" content="${config.version}"`)) return;
      await metadata.put(shellPointer, new Response(JSON.stringify({ version:config.version })));
      event.ports[0]?.postMessage({ ready:true });
    })());
    return;
  }
  if (event.data?.type !== "CONTENT_CONFIG" || !/^[a-f0-9]{16}$/.test(event.data.version) || !event.source?.id) return;
  event.waitUntil((async () => {
    const config = contentConfig(event.data);
    configurations.set(event.source.id, config);
    const metadata = await caches.open(metadataName);
    await metadata.put(configUrl(event.source.id), new Response(JSON.stringify(config)));
    await metadata.put(releaseUrl(config.version), new Response(JSON.stringify(config)));
    const clients = await self.clients.matchAll({ type:"window", includeUncontrolled:true });
    const versions = new Set([config.version]);
    const offlineShell = await metadata.match(shellPointer);
    if (offlineShell) versions.add((await offlineShell.json()).version);
    for (const client of clients) {
      const saved = await metadata.match(configUrl(client.id));
      if (saved) versions.add((await saved.json()).version);
    }
    for (const name of await caches.keys())
      if (name.startsWith(prefix) && name !== metadataName && !versions.has(name.slice(prefix.length))) await caches.delete(name);
    for (const request of await metadata.keys())
      if (request.url !== shellPointer && ![...versions].some(version => request.url === releaseUrl(version))
        && !clients.some(client => request.url === configUrl(client.id))) await metadata.delete(request);
    event.ports[0]?.postMessage({ ready:true });
  })().catch(() => event.ports[0]?.postMessage({ ready:false })));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (event.request.mode === "navigate") {
    if (requestUrl.origin !== scope.origin || ![scope.pathname, `${scope.pathname}index.html`].includes(requestUrl.pathname)) return;
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request, { signal:AbortSignal.timeout(5000) });
        if (response.status < 500) {
          // Associate the new document before its unversioned images/fonts can
          // race the first module. Failure still permits ordinary online loading.
          if (response.ok && event.resultingClientId) try {
            const version = (await response.clone().text()).match(/name="learn-release" content="([a-f0-9]{16})"/)?.[1];
            if (version) {
              const metadata = await caches.open(metadataName);
              const config = await loadRelease(version, metadata);
              configurations.set(event.resultingClientId, config);
              await metadata.put(configUrl(event.resultingClientId), new Response(JSON.stringify(config)));
            }
          } catch { /* Background initialization can retry the catalog. */ }
          return response;
        }
      } catch { /* A cold offline launch uses the last completely saved shell. */ }
      const metadata = await caches.open(metadataName);
      const pointer = await metadata.match(shellPointer);
      if (pointer) {
        const {version} = await pointer.json();
        const cache = await caches.open(`${prefix}${version}`);
        const shell = await cache.match(shellUrl);
        if (shell) {
          const saved = await metadata.match(releaseUrl(version));
          if (saved && event.resultingClientId) {
            const config = await saved.json();
            configurations.set(event.resultingClientId, config);
            await metadata.put(configUrl(event.resultingClientId), new Response(JSON.stringify(config)));
          }
          // Pages canonicalizes index.html. A redirected cached Response cannot
          // satisfy a navigation with redirect mode manual (notably in Safari).
          const headers = new Headers(shell.headers);
          headers.delete("content-encoding"); headers.delete("content-length");
          return new Response(await shell.arrayBuffer(), { status:200, headers });
        }
      }
      return Response.error();
    })());
    return;
  }
  if (requestUrl.origin === scope.origin && requestUrl.pathname === `${scope.pathname}content-manifest.json`) {
    event.respondWith((async () => {
      try { return await fetch(event.request); } catch {
        const metadata = await caches.open(metadataName);
        const saved = await metadata.match(configUrl(event.clientId));
        if (saved) {
          const {version} = await saved.json();
          const cached = await (await caches.open(`${prefix}${version}`)).match(requestUrl.href);
          if (cached) return cached;
        }
        return Response.error();
      }
    })());
    return;
  }
  if (!safeUrl(event.request.url)) return;
  event.respondWith((async () => {
    let config = configurations.get(event.clientId);
    const version = requestUrl.searchParams.get("v");
    if (!config || /^[a-f0-9]{16}$/.test(version || "") && version !== config.version) {
      try {
        const metadata = await caches.open(metadataName);
        // The first versioned module identifies a fresh document before app startup.
        if (/^[a-f0-9]{16}$/.test(version || "")) config = await loadRelease(version, metadata).catch(() => null);
        else {
          const saved = await metadata.match(configUrl(event.clientId));
          if (saved) config = await saved.json();
        }
        if (config) {
          configurations.set(event.clientId, config);
          await metadata.put(configUrl(event.clientId), new Response(JSON.stringify(config)));
        }
      } catch { /* Unavailable offline storage must not block online content. */ }
    }
    // Playback URLs share downloaded bytes without sharing animation playback.
    const url = new URL(event.request.url);
    if (url.pathname.startsWith(`${scope.pathname}assets/`)) url.searchParams.delete("play");
    if (config?.files.includes(url.href)) {
      return serveContent(event.request, url, config);
    }
    return fetch(event.request);
  })().catch(() => Response.error()));
});
