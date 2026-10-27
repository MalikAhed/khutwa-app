// Persistence mechanics only; learner-session validates and owns product state.
export const VISITOR_SELECTION_STORAGE_KEY = "tawjihi:visitor-selection";
export const TEMPORARY_ACCOUNT_STORAGE_KEY = "tawjihi:temporary-account";
export const LIVE_RELOAD_STORAGE_KEY = "tawjihi:codex-live-reload";
export const GUEST_TRIAL_STORAGE_KEY = "tawjihi:guest-trial";
export const defaultErrorReporter = (error) => console.warn(error);

export function getBrowserLearnerStorage(onError = defaultErrorReporter, { persistent = false } = {}) {
  try {
    const storage = persistent ? window.localStorage : window.sessionStorage;
    if (persistent) {
      // Move the current preview profile, never progress or credentials. Remove
      // its old session copy so an explicit sign-out cannot restore it later.
      for (const key of [VISITOR_SELECTION_STORAGE_KEY, TEMPORARY_ACCOUNT_STORAGE_KEY]) {
        const value = window.sessionStorage.getItem(key);
        if (value !== null) {
          storage.setItem(key, value);
          window.sessionStorage.removeItem(key);
        }
      }
    }
    return storage;
  }
  catch (cause) {
    onError(new Error("Session storage is unavailable; state will last only for this page view.", { cause }));
    return null;
  }
}

export function createLearnerStorage(storage, onError = defaultErrorReporter, { persistent = false } = {}) {
  const read = (key, { json = true } = {}) => {
    if (!storage) return null;
    try {
      const value = storage.getItem(key);
      return json ? JSON.parse(value || "null") : value;
    } catch (cause) {
      onError(new Error("Saved session state could not be read.", { cause }));
      return null;
    }
  };
  const save = (key, value) => {
    if (!storage) return;
    try { storage.setItem(key, value); }
    catch (cause) { onError(new Error("Session state could not be saved.", { cause })); }
  };
  const remove = (key) => {
    if (!storage) return;
    try { storage.removeItem(key); }
    catch (cause) { onError(new Error("Session state could not be cleared.", { cause })); }
  };
  return Object.freeze({
    save,
    remove,
    restore() {
      const preserveAccount = persistent || read(LIVE_RELOAD_STORAGE_KEY, { json:false }) === "1";
      const saved = {
        selection:read(VISITOR_SELECTION_STORAGE_KEY),
        account:preserveAccount ? read(TEMPORARY_ACCOUNT_STORAGE_KEY) : null,
      };
      remove(LIVE_RELOAD_STORAGE_KEY);
      if (!preserveAccount) remove(TEMPORARY_ACCOUNT_STORAGE_KEY);
      return saved;
    },
  });
}
