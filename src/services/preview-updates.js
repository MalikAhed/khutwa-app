// Stage runtime code without switching the active document or its worker config.
// Lesson downloads and the last complete offline shell keep their existing owner.
export async function prepareAppUpdate(version) {
  const base = new URL('.', document.baseURI);
  const options = {cache:'no-store', signal:AbortSignal.timeout(15000)};
  const manifestResponse = await fetch(new URL('content-manifest.json',base),options);
  if (!manifestResponse.ok) throw new Error('Update catalog unavailable');
  const manifest = await manifestResponse.json();
  if (manifest.version !== version || !Array.isArray(manifest.helpers) || !Array.isArray(manifest.onboarding))
    throw new Error('Update changed during download');
  const shellUrl = new URL(base); shellUrl.searchParams.set('app-update',version);
  const shell = await fetch(shellUrl,options);
  if (!shell.ok || !(await shell.text()).includes(`name="learn-release" content="${version}"`))
    throw new Error('Update shell not ready');
  const files = [...new Set([...manifest.helpers,...manifest.onboarding])].filter(file => {
    const url = new URL(file,base);
    return url.origin === base.origin && url.pathname.startsWith(base.pathname)
      && /^(?:src\/(?!server\/)|assets\/browser-libraries\/|node_modules\/)/.test(url.pathname.slice(base.pathname.length))
      && /\.(?:m?js|css)$/.test(url.pathname);
  });
  if (!files.length) throw new Error('Update runtime is missing');
  let cache;
  try { cache = await caches.open(`khutwa-content:${base.pathname}:${version}`); } catch { /* Online activation still works without cache storage. */ }
  for (const file of files) {
    const expected = manifest.hashes?.[file];
    if (!/^[a-f0-9]{64}$/.test(expected || '')) throw new Error('Update fingerprint missing');
    const url = new URL(file,base);
    const matches = async response => response?.ok && [...new Uint8Array(await crypto.subtle.digest('SHA-256',await response.clone().arrayBuffer()))]
      .map(byte => byte.toString(16).padStart(2,'0')).join('') === expected;
    if (cache && await matches(await cache.match(url))) continue;
    const download = new URL(url);
    // A v=new request would rebind this old page's service-worker configuration.
    download.searchParams.delete('v'); download.searchParams.set('app-update',version);
    const response = await fetch(download,{cache:'no-store',priority:'low',signal:AbortSignal.timeout(15000)});
    if (!await matches(response)) throw new Error('Update content changed');
    if (cache) await cache.put(url,response).catch(() => {});
  }
}

export function watchPreviewUpdates({ canReload, beforeReload = async () => true, subscribe, prepare = prepareAppUpdate }) {
  const version = document.querySelector('meta[name="learn-release"]')?.getAttribute('content');
  if (!version) return;
  let pendingVersion = null, preparedVersion = null;
  let checking = false, applying = false, reloading = false, stopped = false;
  const apply = async () => {
    if (stopped || applying || reloading || !pendingVersion || preparedVersion !== pendingVersion
      || navigator.onLine === false || document.hidden || !canReload()) return;
    applying = true;
    const target = pendingVersion;
    try {
      if (!await beforeReload() || stopped || document.hidden || navigator.onLine === false
        || !canReload() || pendingVersion !== target) return;
      // onLine can remain true on a Wi-Fi network without internet. A deferred
      // activation needs fresh network evidence before replacing a usable page.
      const live = await fetch(new URL('release.json',document.baseURI),{cache:'no-store',signal:AbortSignal.timeout(10000)});
      if (!live.ok || (await live.json()).version !== target || !canReload() || document.hidden) return;
      // A failed/rolling deployment may serve an older shell; retry later, not
      // forever on every startup and not permanently disabled by a stale URL.
      const attemptKey = 'khutwa:update-attempt';
      try {
        const previous = JSON.parse(sessionStorage.getItem(attemptKey) || 'null');
        if (previous?.version === target && Date.now() - previous.at < 60000) return;
        sessionStorage.setItem(attemptKey,JSON.stringify({version:target,at:Date.now()}));
      } catch { if (new URL(location.href).searchParams.get('app-release') === target) return; }
      const url = new URL(location.href); url.searchParams.set('app-release',target);
      reloading = true;
      location.replace(url);
    } catch { /* Pending/unavailable storage must defer activation. */ }
    finally { applying = false; }
  };
  const check = async () => {
    if (stopped || checking || document.hidden || navigator.onLine === false) return;
    checking = true;
    try {
      const response = await fetch(new URL('release.json',document.baseURI),{cache:'no-store',signal:AbortSignal.timeout(10000)});
      if (!response.ok) return;
      const release = await response.json();
      if (!/^[a-f0-9]{16}$/.test(release.version)) return;
      if (release.version === version) { pendingVersion=null; preparedVersion=null; return; }
      pendingVersion = release.version;
      if (preparedVersion !== pendingVersion) { await prepare(pendingVersion); preparedVersion=pendingVersion; }
      await apply();
    } catch { /* Resume partial preparation on the next online check. */ }
    finally { checking = false; }
  };
  for (const event of ['pageshow','online','focus']) window.addEventListener(event,check);
  document.addEventListener('visibilitychange',check);
  const observer = new MutationObserver(() => { void apply(); });
  for (const element of [document.body,document.querySelector('main')])
    if (element) observer.observe(element,{attributes:true,attributeFilter:['class']});
  const unsubscribe = subscribe?.(() => { void apply(); });
  const timer = setInterval(check,60000);
  void check();
  return () => {
    stopped=true; clearInterval(timer); observer.disconnect(); unsubscribe?.();
    for (const event of ['pageshow','online','focus']) window.removeEventListener(event,check);
    document.removeEventListener('visibilitychange',check);
  };
}
