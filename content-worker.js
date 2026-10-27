// Only public, explicitly catalogued content is cached. No HTML, APIs or accounts.
const configurations = new Map();
const scope = new URL(self.registration.scope);
const prefix = `khutwa-content:${scope.pathname}:`;
const metadataName = `${prefix}clients`;
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
  if (event.data?.type !== "CONTENT_CONFIG" || !/^[a-f0-9]{16}$/.test(event.data.version) || !event.source?.id) return;
  event.waitUntil((async () => {
    const config = { version:event.data.version, files:event.data.files.map(safeUrl).filter(Boolean) };
    configurations.set(event.source.id, config);
    const metadata = await caches.open(metadataName);
    await metadata.put(configUrl(event.source.id), new Response(JSON.stringify(config)));
    await metadata.put(releaseUrl(config.version), new Response(JSON.stringify(config)));
    const clients = await self.clients.matchAll({ type:"window", includeUncontrolled:true });
    const versions = new Set([config.version]);
    for (const client of clients) {
      const saved = await metadata.match(configUrl(client.id));
      if (saved) versions.add((await saved.json()).version);
    }
    for (const name of await caches.keys())
      if (name.startsWith(prefix) && name !== metadataName && !versions.has(name.slice(prefix.length))) await caches.delete(name);
    for (const request of await metadata.keys())
      if (![...versions].some(version => request.url === releaseUrl(version))
        && !clients.some(client => request.url === configUrl(client.id))) await metadata.delete(request);
    event.ports[0]?.postMessage({ ready:true });
  })().catch(() => event.ports[0]?.postMessage({ ready:false })));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || event.request.mode === "navigate" || event.request.headers.has("X-Learn-Download")) return;
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
    }
    return fetch(event.request);
  })().catch(() => fetch(event.request)));
});
