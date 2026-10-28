import { refillResources, resourceSnapshot, spendHeart, SUPER_TRIAL_MS } from "../domain/learner-resources.js";
import { EXPLANATION_GEM_COST, questionExplanation } from "../domain/question-explanations.js";
import { questionRewardKey } from "../domain/question-rewards.js";

// HTTP balances are confirmed by the progress API; fixture balances stay local.
export function createLearnerResources({ storage, getAccountType, apiBase = null, fetchImpl = globalThis.fetch, now = Date.now, onError = console.warn }) {
  const owners = new Map();
  const subscribers = new Set();
  const keyFor = owner => `tawjihi:resources:v1:${encodeURIComponent(owner)}`;
  const notify = () => subscribers.forEach(callback => callback());
  const stateFor = owner => {
    if (!owners.has(owner)) {
      let saved;
      try { saved = JSON.parse(storage?.getItem(keyFor(owner)) || "null"); } catch (error) { onError(error); }
      owners.set(owner, { value:refillResources(saved, now()), pending:new Set() });
    }
    return owners.get(owner);
  };
  const persist = (owner, state) => {
    try { storage?.setItem(keyFor(owner), JSON.stringify(state.value)); } catch (error) { onError(error); }
  };
  const get = owner => resourceSnapshot(stateFor(owner).value, getAccountType() === "subscribed", now());
  const confirm = (owner, value, updateId) => {
    const state = stateFor(owner);
    state.pending.delete(updateId);
    // A response already in flight when the trial began cannot erase it.
    const receivedUnlocks = new Set(value.explanationUnlocks || []);
    const missingUnlocks = (state.value.explanationUnlocks || []).filter(key => !receivedUnlocks.has(key));
    // Gems are only spent; older progress receipts cannot refund a purchase.
    state.value = refillResources({ ...value, gems:Math.min(value.gems,state.value.gems),
      explanationUnlocks:[...receivedUnlocks,...missingUnlocks], trialEndsAt:value.trialEndsAt || state.value.trialEndsAt }, now());
    if (!get(owner).unlimited) {
      for (const id of state.pending) state.value = spendHeart(state.value, now()) || state.value;
    }
    persist(owner, state);
    notify();
  };
  return Object.freeze({
    get,
    hasExplanation:(owner,key) => (get(owner).explanationUnlocks || []).includes(questionRewardKey(key)),
    async unlockExplanation(owner, key, { signal, step } = {}) {
      if (owner === "guest") throw Object.assign(new Error("Sign in first."),{code:"sign-in"});
      signal?.throwIfAborted();
      if (apiBase && owner.startsWith("account:")) {
        // Downloaded lessons already contain their authored solutions. Reading an
        // existing entitlement must not depend on a purchase request or connectivity.
        const balance = get(owner);
        const explanation = questionExplanation(step);
        if (explanation && (balance.unlimited || balance.explanationUnlocks.includes(questionRewardKey(key))))
          return explanation;
        const response = await fetchImpl(apiBase,{method:"POST",credentials:"same-origin",
          signal:signal ? AbortSignal.any([signal,AbortSignal.timeout(12000)]) : AbortSignal.timeout(12000),
          headers:{"Content-Type":"application/json","X-Progress-Owner":owner},
          body:JSON.stringify({type:"explanation-unlock",...key})}).catch(error => {
            signal?.throwIfAborted();
            throw Object.assign(new Error("Connect to confirm a new explanation purchase."),{code:"connection-required",cause:error});
          });
        const result = await response.json();
        signal?.throwIfAborted();
        if ((response.ok || response.status === 402) && `account:${result.accountId}` !== owner) throw new Error("The active account changed.");
        if (response.ok || response.status === 402) {
          if (!result.resources || !Number.isInteger(result.resources.gems)) throw new Error("Invalid explanation receipt.");
          confirm(owner,result.resources);
        }
        if (!response.ok) throw Object.assign(new Error("Explanation could not be unlocked."),
          {code:response.status === 402 ? "insufficient-gems" : response.status === 422 ? "unavailable" : "request-failed"});
        if (typeof result.explanation?.markdown !== "string" || !result.explanation.markdown.trim()) throw new Error("Invalid explanation.");
        return result.explanation;
      }
      const explanation = questionExplanation(step);
      signal?.throwIfAborted();
      if (!explanation) throw Object.assign(new Error("Explanation unavailable."),{code:"unavailable"});
      const state = stateFor(owner);
      const questionKey = questionRewardKey(key);
      const balance = get(owner);
      if (!(balance.explanationUnlocks || []).includes(questionKey)) {
        const price = balance.unlimited ? 0 : EXPLANATION_GEM_COST;
        if (balance.gems < price) throw Object.assign(new Error("Not enough gems."),{code:"insufficient-gems"});
        const value = {...balance,gems:balance.gems - price,explanationUnlocks:[...(balance.explanationUnlocks || []),questionKey]};
        // Balance and entitlement share one durable write in fixture mode too.
        storage?.setItem(keyFor(owner),JSON.stringify(value));
        state.value = value;
        notify();
      }
      return explanation;
    },
    spend(owner, id) {
      const state = stateFor(owner);
      if (state.pending.has(id)) return;
      if (!get(owner).unlimited) {
        const value = spendHeart(state.value, now());
        if (!value) throw new Error("No hearts available.");
        state.value = value;
      }
      if (owner.startsWith("account:")) state.pending.add(id);
      persist(owner, state);
      notify();
    },
    confirm,
    async startTrial(owner, { signal } = {}) {
      if (getAccountType() !== "free" || owner === "guest") throw new Error("Sign in with a free account.");
      signal?.throwIfAborted();
      if (apiBase && owner.startsWith("account:")) {
        const response = await fetchImpl(apiBase, { method:"POST", credentials:"same-origin",
          signal:signal ? AbortSignal.any([signal, AbortSignal.timeout(12000)]) : AbortSignal.timeout(12000),
          headers:{ "Content-Type":"application/json", "X-Progress-Owner":owner }, body:JSON.stringify({ type:"super-trial" }) });
        const result = await response.json();
        signal?.throwIfAborted();
        if (!response.ok || `account:${result.accountId}` !== owner || !Number.isSafeInteger(result.resources?.trialEndsAt)) throw new Error("The trial could not be activated.");
        confirm(owner, result.resources);
      } else {
        const state = stateFor(owner);
        if (!state.value.trialEndsAt) state.value = { ...refillResources(state.value, now()), trialEndsAt:now() + SUPER_TRIAL_MS };
        persist(owner, state);
        notify();
      }
      return get(owner);
    },
    subscribe(callback) { subscribers.add(callback); return () => subscribers.delete(callback); },
  });
}
