import { MAX_DAILY_SKIPS, QUESTION_NAVIGATION_LIMIT_ENABLED, refillResources, resourceSnapshot, spendHeart } from "../domain/learner-resources.js";
import { EXPLANATION_GEM_COST, questionExplanation } from "../domain/question-explanations.js";
import { questionRewardKey } from "../domain/question-rewards.js";
import { hasFreeLessonPractice, QUESTION_JUMPS_REQUIRE_SUPER } from '../domain/free-practice.js';

// HTTP balances are confirmed by the progress API; fixture balances stay local.
export function createLearnerResources({ storage, getAccountType, hasSuperAccess = () => getAccountType() === 'subscribed', apiBase = null, fetchImpl = globalThis.fetch, now = Date.now, onError = console.warn }) {
  const owners = new Map();
  const subscribers = new Set();
  const keyFor = owner => `tawjihi:resources:v1:${encodeURIComponent(owner)}`;
  const refillOptions = owner => ({ allowRefill:!(apiBase && owner.startsWith("account:")) });
  const notify = () => subscribers.forEach(callback => callback());
  const stateFor = owner => {
    if (!owners.has(owner)) {
      let saved;
      try { saved = JSON.parse(storage?.getItem(keyFor(owner)) || "null"); } catch (error) { onError(error); }
      owners.set(owner, { value:refillResources(saved, now(), refillOptions(owner)), pending:new Set(), rewards:new Map() });
    }
    return owners.get(owner);
  };
  const persist = (owner, state) => {
    try { storage?.setItem(keyFor(owner), JSON.stringify(state.value)); } catch (error) { onError(error); }
  };
  const get = (owner,key) => resourceSnapshot(stateFor(owner).value, hasSuperAccess(key), now(), refillOptions(owner));
  const confirm = (owner, value, updateId, gemReward) => {
    const state = stateFor(owner);
    state.pending.delete(updateId);
    if (updateId && Number.isSafeInteger(gemReward) && gemReward >= 0) state.rewards.set(updateId,gemReward);
    const receivedUnlocks = new Set(value.explanationUnlocks || []);
    const missingUnlocks = (state.value.explanationUnlocks || []).filter(key => !receivedUnlocks.has(key));
    // A versioned reward may increase gems; a late receipt may never undo that
    // reward or refund a purchase. Older backends retain the previous fallback.
    const receivedRevision = Number.isSafeInteger(value.gemRevision) ? value.gemRevision : -1;
    const currentRevision = Number.isSafeInteger(state.value.gemRevision) ? state.value.gemRevision : -1;
    const gems = receivedRevision >= 0 && receivedRevision >= currentRevision ? value.gems
      : currentRevision >= 0 ? state.value.gems : Math.min(value.gems,state.value.gems);
    const correctTowardGems = receivedRevision < currentRevision ? state.value.correctTowardGems
      : receivedRevision === currentRevision ? Math.max(value.correctTowardGems || 0,state.value.correctTowardGems || 0)
        : value.correctTowardGems;
    state.value = refillResources({ ...value, gems,
      correctTowardGems,
      ...(Math.max(receivedRevision,currentRevision) >= 0 ? {gemRevision:Math.max(receivedRevision,currentRevision)} : {}),
      explanationUnlocks:[...receivedUnlocks,...missingUnlocks], trialEndsAt:value.trialEndsAt || state.value.trialEndsAt }, now(), refillOptions(owner));
    if (!get(owner).unlimited) {
      for (const id of state.pending) state.value = spendHeart(state.value, now(), refillOptions(owner)) || state.value;
    }
    persist(owner, state);
    notify();
  };
  return Object.freeze({
    get,
    getGemReward:(owner,updateId) => stateFor(owner).rewards.get(updateId) || 0,
    getNavigationCursor(owner, {subjectId,lessonId}) {
      if (!QUESTION_NAVIGATION_LIMIT_ENABLED) return;
      const subject = subjectId === 'mathematics-2' ? 'mathematics' : subjectId;
      return get(owner).navigationCursors?.[`${subject}:${lessonId}`];
    },
    async navigate(owner, key, { kind = 'jump', signal, solved = false } = {}) {
      signal?.throwIfAborted();
      if (QUESTION_JUMPS_REQUIRE_SUPER && kind === 'jump' && !solved && !hasFreeLessonPractice(key) && !hasSuperAccess(key))
        throw Object.assign(new Error('اختيار سؤال من الشريط متاح مع خطوة سوبر.'),{code:'super-required'});
      if (!QUESTION_NAVIGATION_LIMIT_ENABLED || hasSuperAccess(key) || getAccountType() === "subscribed" && hasFreeLessonPractice(key)) return;
      if (apiBase && owner.startsWith('account:')) {
        let response;
        try {
          response = await fetchImpl(apiBase,{method:'POST',credentials:'same-origin',
            headers:{'Content-Type':'application/json','X-Progress-Owner':owner},
            signal:signal ? AbortSignal.any([signal,AbortSignal.timeout(12000)]) : AbortSignal.timeout(12000),
            body:JSON.stringify({type:'question-navigation',id:`nav:${crypto.randomUUID()}`,kind,...key})});
        } catch (cause) {
          throw Object.assign(new Error('اتصل بالإنترنت لتأكيد تنقّلك بين الأسئلة.'),{code:'connection-required',cause});
        }
        const result = await response.json();
        signal?.throwIfAborted();
        if ((response.ok || [409,429].includes(response.status)) && `account:${result.accountId}` !== owner)
          throw new Error('The active account changed.');
        if (result.resources) confirm(owner,result.resources);
        if (!response.ok) throw Object.assign(new Error(result.error || 'تعذّر تأكيد التنقّل.'),
          {code:result.status === 'navigation-limit' ? 'navigation-limit' : 'request-failed',currentStepId:result.currentStepId});
        return;
      }
      if (kind === 'jump') {
        const state = stateFor(owner), balance = get(owner);
        if ((balance.navigationRemaining ?? MAX_DAILY_SKIPS) === 0)
          throw Object.assign(new Error('Daily navigation limit reached.'),{code:'navigation-limit'});
        state.value = {...balance,navigationRemaining:(balance.navigationRemaining ?? MAX_DAILY_SKIPS) - 1};
        persist(owner,state); notify();
      }
    },
    async checkAnswerAccess(owner, { signal, key, onConnectionRequired = () => {} } = {}) {
      if (!apiBase || !owner.startsWith("account:") || hasSuperAccess(key) || getAccountType() === "subscribed" && hasFreeLessonPractice(key)) return;
      let response;
      try {
        response = await fetchImpl(apiBase, { credentials:"same-origin", cache:"no-store",
          headers:{ "X-Progress-Owner":owner },
          signal:signal ? AbortSignal.any([signal, AbortSignal.timeout(12000)]) : AbortSignal.timeout(12000) });
        const result = await response.json();
        signal?.throwIfAborted();
        if (response.status === 401 || response.status === 403)
          return "تعذّر تأكيد جلسة الدخول. سجّل الدخول مجددًا.";
        if (!response.ok || `account:${result.accountId}` !== owner || !Number.isInteger(result.resources?.hearts))
          return "تعذّر تأكيد الرصيد من الخادم. حاول مجددًا.";
        confirm(owner, result.resources);
        return hasFreeLessonPractice(key) || get(owner).hearts > 0 ? undefined : "نفدت قلوب اليوم. تتجدد القلوب السبعة عند منتصف الليل بتوقيت فلسطين.";
      } catch {
        if (!response) onConnectionRequired();
        return response ? "تعذّر تأكيد الرصيد من الخادم. حاول مجددًا."
          : "اتصل بالإنترنت لتأكيد قلوبك والإجابة. دروسك المحمّلة وتقدّمك المحفوظ متاحان دون اتصال.";
      }
    },
    hasExplanation:(owner,key) => (get(owner).explanationUnlocks || []).includes(questionRewardKey(key)),
    async unlockExplanation(owner, key, { signal, step } = {}) {
      if (owner === "guest") throw Object.assign(new Error("Sign in first."),{code:"sign-in"});
      signal?.throwIfAborted();
      if (apiBase && owner.startsWith("account:")) {
        // Downloaded lessons already contain their authored solutions. Reading an
        // existing entitlement must not depend on a purchase request or connectivity.
        const balance = get(owner,key);
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
      const balance = get(owner,key);
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
    spend(owner, id, key) {
      if (hasFreeLessonPractice(key)) return;
      const state = stateFor(owner);
      if (state.pending.has(id)) return;
      if (!get(owner,key).unlimited) {
        const value = spendHeart(state.value, now(), refillOptions(owner));
        if (!value) throw new Error("No hearts available.");
        state.value = value;
      }
      if (owner.startsWith("account:") && !hasSuperAccess(key)) state.pending.add(id);
      persist(owner, state);
      notify();
    },
    confirm,
    async startTrial(owner, { signal } = {}) {
      signal?.throwIfAborted();
      throw new Error("The free Super trial is no longer available.");
    },
    subscribe(callback) { subscribers.add(callback); return () => subscribers.delete(callback); },
  });
}
