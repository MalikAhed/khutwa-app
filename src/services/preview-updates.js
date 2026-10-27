// A suspended installed app may retain its document across deployments.
// Refresh only on Home, after saved progress, never during a lesson or login.
export function watchPreviewUpdates({ canReload }) {
  const version = document.querySelector('meta[name="learn-release"]')?.getAttribute("content");
  if (!version) return;
  let pendingVersion = null;
  let checking = false;
  let reloading = false;
  const apply = () => {
    if (reloading || !pendingVersion || document.hidden || !canReload()) return;
    const url = new URL(location.href);
    // Avoid a reload loop if the host briefly serves an old index during rollout.
    if (url.searchParams.get("app-release") === pendingVersion) return;
    reloading = true;
    url.searchParams.set("app-release", pendingVersion);
    location.replace(url);
  };
  const check = async () => {
    if (checking || document.hidden) return;
    checking = true;
    try {
      const response = await fetch(new URL("release.json", document.baseURI), { cache:"no-store" });
      if (!response.ok) return;
      const release = await response.json();
      if (/^[a-f0-9]{16}$/.test(release.version) && release.version !== version) pendingVersion = release.version;
      apply();
    } catch { /* Offline sessions retain their loaded code and saved data. */ }
    finally { checking = false; }
  };
  window.addEventListener("pageshow", check);
  document.addEventListener("visibilitychange", check);
  window.addEventListener("online", check);
  // Returning from a lesson can make a previously deferred update safe.
  const observer = new MutationObserver(apply);
  for (const element of [document.body, document.querySelector("main")]) {
    if (element) observer.observe(element, { attributes:true, attributeFilter:["class"] });
  }
  setInterval(check, 60000);
  void check();
}
