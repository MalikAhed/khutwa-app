// One visible saving indicator, shared across navigation and account changes.
export function mountProgressFeedback({ store, service }) {
  const host = document.createElement("aside");
  host.className = "progress-feedback system-feedback";
  host.setAttribute("role", "status");
  host.setAttribute("aria-live", "polite");
  const text = document.createElement("span");
  const retry = document.createElement("button");
  retry.type = "button";
  retry.className = "system-action system-action--secondary";
  retry.textContent = "إعادة المحاولة";
  retry.addEventListener("click", () => void store.retry(service.getLearnerProgressOwner()));
  host.append(text, retry);
  document.body.append(host);
  const update = () => {
    const state = store.getSaveState(service.getLearnerProgressOwner());
    // Normal saving, offline sync and recovered legacy records stay quiet.
    // Only a real device-storage failure needs action to avoid losing answers.
    host.hidden = state !== "failed";
    text.textContent = "لم نتمكّن من الحفظ على جهازك. أبقِ الصفحة مفتوحة وأعد المحاولة لحفظ إجاباتك.";
  };
  const stop = store.subscribe(update);
  const stopSession = service.subscribe(update);
  update();
  return () => { stop(); stopSession(); host.remove(); };
}
