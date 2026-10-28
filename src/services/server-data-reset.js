// @ts-check
const RESET_KEY = "tawjihi:data-reset";

// Keep the existing entry point/storage key for compatibility. This is now a
// continuity check, never a reset: an unexpected backend must not erase the
// student's local recovery copy or send their pending work to a replacement.
export async function applyServerDataReset({ allowOffline = false } = {}) {
  const savedBaseline = () => localStorage.getItem(RESET_KEY) !== null;
  let response;
  try { response = await fetch("/api/app-state", { cache:"no-store", signal:AbortSignal.timeout(5000) }); }
  catch (error) {
    if (allowOffline && savedBaseline()) return false;
    throw Object.assign(error instanceof Error ? error : new Error("Connection failed", { cause:error }), { code:"offline-reconnect" });
  }
  if (response.status >= 500 && allowOffline && savedBaseline()) return false;
  if (!response.ok) throw new Error("The app's data state could not be checked.");
  const { resetId, offline } = await response.json();
  if (offline) {
    if (allowOffline && savedBaseline()) return false;
    throw new Error("Reconnect to verify the account database.");
  }
  if (resetId !== null && typeof resetId !== "string") throw new Error("Invalid app data state.");
  const current = resetId ?? "";
  const check = () => {
    const stores = [localStorage, sessionStorage];
    for (const storage of stores) {
      const previous = storage.getItem(RESET_KEY);
      if (previous !== null && previous !== current)
        throw new Error("The account database changed. Saved work is preserved; restore the expected backend before retrying.");
    }
    // First use (including an older client with no marker) records a baseline
    // without changing any account, progress or outbox data.
    for (const storage of stores)
      if (storage.getItem(RESET_KEY) === null) storage.setItem(RESET_KEY, current);
  };
  if (navigator.locks) await navigator.locks.request(RESET_KEY, check);
  else check();
  return true;
}
