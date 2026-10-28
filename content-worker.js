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
    const config = { version:event.data.version, files:event.data.files.map(safeUrl).filter(Boolean) };
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
  if (event.request.method !== "GET" || event.request.headers.has("X-Learn-Download")) return;
  const requestUrl = new URL(event.request.url);
  if (event.request.mode === "navigate") {
    if (requestUrl.origin !== scope.origin || ![scope.pathname, `${scope.pathname}index.html`].includes(requestUrl.pathname)) return;
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request, { signal:AbortSignal.timeout(5000) });
        if (response.status < 500) return response;
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
    if (!config) {
      const metadata = await caches.open(metadataName);
      // The first versioned module identifies a fresh document before app startup.
      const version = new URL(event.request.url).searchParams.get("v");
      const saved = await metadata.match(configUrl(event.clientId))
        || (/^[a-f0-9]{16}$/.test(version || "") && await metadata.match(releaseUrl(version)));
      if (saved) { config = await saved.json(); configurations.set(event.clientId, config); }
    }
    // Playback URLs share downloaded bytes without sharing animation playback.
    const url = new URL(event.request.url);
    if (url.pathname.startsWith(`${scope.pathname}assets/`)) url.searchParams.delete("play");
    if (config?.files.includes(url.href)) {
      const cache = await caches.open(`${prefix}${config.version}`);
      const cached = await cache.match(url);
      if (cached) return cached;
      const response = await fetch(event.request);
      if (response.ok) await cache.put(url, response.clone()).catch(() => {});
      return response;
    }
    return fetch(event.request);
  })().catch(() => fetch(event.request)));
});
