// Traffic and performance only. No student IDs, form fields or answer events.
export function startAnalytics() {
  const token = document.querySelector('meta[name="khutwa-analytics"]')?.content;
  if (!/^[a-f0-9]{32}$/i.test(token || "") || document.querySelector("[data-khutwa-analytics]")) return;
  if (navigator.globalPrivacyControl || navigator.doNotTrack === "1") return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.dataset.cfBeacon = JSON.stringify({token});
  script.dataset.khutwaAnalytics = "";
  document.head.append(script);
}
