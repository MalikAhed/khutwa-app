// @ts-check
const RESET_KEY = "tawjihi:data-reset";

/** @param {Storage} storage */
function clearAppStorage(storage) {
  for (const key of Object.keys(storage)) {
    if (key.startsWith("tawjihi:")) storage.removeItem(key);
  }
}

// Run before opening progress stores or restoring an account. Only an explicit
// database reset activates this; normal releases never clear learner data.
export async function applyServerDataReset() {
  const response = await fetch("/api/app-state", { cache:"no-store", signal:AbortSignal.timeout(12000) });
  if (!response.ok) throw new Error("The app's data state could not be checked.");
  const { resetId } = await response.json();
  if (!resetId) return;
  if (typeof resetId !== "string") throw new Error("Invalid app data state.");
  const reset = async () => {
    if (localStorage.getItem(RESET_KEY) !== resetId) {
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase("tawjihi-subject-progress");
        request.onsuccess = () => resolve(undefined);
        request.onerror = () => reject(request.error);
        request.onblocked = () => reject(new Error("Close other app tabs and reload to finish the data reset."));
      });
      clearAppStorage(localStorage);
      localStorage.setItem(RESET_KEY, resetId);
    }
    // Session storage is separate in every tab, even after another tab resets.
    if (sessionStorage.getItem(RESET_KEY) !== resetId) {
      clearAppStorage(sessionStorage);
      sessionStorage.setItem(RESET_KEY, resetId);
    }
  };
  if (navigator.locks) await navigator.locks.request(RESET_KEY, reset);
  else await reset();
}
