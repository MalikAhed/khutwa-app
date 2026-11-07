import { CORRECT_ANSWER_GEM_REWARD, MAX_DAILY_SKIPS, QUESTION_NAVIGATION_LIMIT_ENABLED, refillResources, resourceSnapshot, spendHeart } from "../domain/learner-resources.js";
import { EXPLANATION_GEM_COST, questionExplanation } from "../domain/question-explanations.js";
import { getQuestionXp, normalizeQuestionRewardKey, questionRewardKey } from "../domain/question-rewards.js";
import { hasFreeLessonPractice, QUESTION_JUMPS_REQUIRE_SUPER } from '../domain/free-practice.js';

const localQueues = new Map();
const withLocalResourceLock = (key, action) => {
  if (globalThis.navigator?.locks?.request) return navigator.locks.request(key,async()=>action());
  const previous=localQueues.get(key) || Promise.resolve();
  const current=previous.catch(()=>{}).then(action);
  localQueues.set(key,current);
  const cleanup=()=>{if(localQueues.get(key)===current)localQueues.delete(key);};
  void current.then(cleanup,cleanup);
  return current;
};

// HTTP balances are confirmed by the progress API; fixture balances stay local.
export function createLearnerResources({ storage, getAccountType, hasSuperAccess = () => getAccountType() === 'subscribed', apiBase = null, fetchImpl = globalThis.fetch, now = Date.now, onError = console.warn }) {
  const owners = new Map();
  const subscribers = new Set();
  const keyFor = owner => `tawjihi:resources:v1:${encodeURIComponent(owner)}`;
  const remote = owner => Boolean(apiBase && owner.startsWith('account:'));
  const refillOptions = owner => ({ allowRefill:!(apiBase && owner.startsWith("account:")) });
  const notify = () => subscribers.forEach(callback => callback());
  const ledgerFrom = entries => new Map((Array.isArray(entries)?entries:[])
    .filter(entry=>Array.isArray(entry)&&entry.length===2&&entry.every(value=>typeof value==='string'))
    .map(([key,id])=>[normalizeQuestionRewardKey(key),id]));
  const stateFor = owner => {
    if (!owners.has(owner)) {
      let saved;
      try { saved = JSON.parse(storage?.getItem(keyFor(owner)) || "null"); } catch (error) { onError(error); }
      owners.set(owner, { value:refillResources(saved, now(), refillOptions(owner)),
        localGemRewards:ledgerFrom(saved?.localGemRewards),localGemPending:ledgerFrom(saved?.localGemPending),pending:new Set(), rewards:new Map() });
    }
    return owners.get(owner);
  };
  const serialize=(value,ledger,pending)=>JSON.stringify({...value,...(ledger.size?{localGemRewards:[...ledger]}:{}),...(pending.size?{localGemPending:[...pending]}:{})});
  const persist = (owner, state) => {
    try { storage?.setItem(keyFor(owner), serialize(state.value,state.localGemRewards,state.localGemPending)); } catch (error) { onError(error); }
  };
  const mutateLocal=(owner,action)=>withLocalResourceLock(keyFor(owner),()=>{
    const state=stateFor(owner);
    // Another tab may have purchased an explanation or earned a reward since
    // this instance was created. Read under the lock before every local write.
    const saved=JSON.parse(storage?.getItem(keyFor(owner)) || 'null');
    if(saved){
      if(!Number.isSafeInteger(saved.hearts)||saved.hearts<0||!Number.isInteger(saved.gems)||saved.gems<0||!Number.isFinite(saved.refillAt))throw new Error('Saved local resources are unreadable.');
      state.value=refillResources(saved,now(),refillOptions(owner));
      state.localGemRewards=ledgerFrom(saved.localGemRewards);state.localGemPending=ledgerFrom(saved.localGemPending);
    }
    return action(state);
  });
  const commitLocal=(owner,state,value,ledger=state.localGemRewards,pending=state.localGemPending)=>{
    storage?.setItem(keyFor(owner),serialize(value,ledger,pending));
    state.value=value;state.localGemRewards=ledger;state.localGemPending=pending;
  };
  const localAnswer=(owner,key)=>owner!=='guest'&&!remote(owner)&&key.correct===true&&getQuestionXp(key)>0;
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
    async reserveLocalAnswer(owner,updateId,key) {
      if(!localAnswer(owner,key))return;
      await mutateLocal(owner,state=>{
        const questionKey=questionRewardKey(key);
        if(state.localGemRewards.has(questionKey)||state.localGemPending.has(questionKey))return;
        const pending=new Map(state.localGemPending);pending.set(questionKey,updateId);
        commitLocal(owner,state,state.value,state.localGemRewards,pending);
      });
    },
    async creditLocalAnswer(owner,updateId,key) {
      // Real accounts receive authoritative receipts from the API. Only local
      // fixture learners reach this path, after their answer has been saved.
      if(!localAnswer(owner,key))return;
      await mutateLocal(owner,state=>{
        const questionKey=questionRewardKey(key),receipt=state.localGemRewards.get(questionKey);
        if(receipt){if(receipt===updateId)state.rewards.set(updateId,CORRECT_ANSWER_GEM_REWARD);return;}
        if(!state.localGemPending.has(questionKey))return;
        const value={...state.value,gems:state.value.gems+CORRECT_ANSWER_GEM_REWARD};
        const ledger=new Map(state.localGemRewards);ledger.set(questionKey,updateId);
        const pending=new Map(state.localGemPending);pending.delete(questionKey);
        // The award, receipt and removal of its durable reservation commit together.
        commitLocal(owner,state,value,ledger,pending);state.rewards.set(updateId,CORRECT_ANSWER_GEM_REWARD);notify();
      });
    },
    async recoverLocalAnswerCredits(owner,solvedQuestions) {
      if(owner==='guest'||remote(owner))return;
      await mutateLocal(owner,state=>{
        const ledger=new Map(state.localGemRewards),pending=new Map(state.localGemPending);
        let gems=state.value.gems;
        for(const [key,id] of pending){
          if(!solvedQuestions.has(key))continue;
          if(!ledger.has(key)){gems+=CORRECT_ANSWER_GEM_REWARD;ledger.set(key,id);}
          pending.delete(key);
        }
        if(pending.size!==state.localGemPending.size){commitLocal(owner,state,{...state.value,gems},ledger,pending);notify();}
      });
    },
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
        await mutateLocal(owner,state=>{
          const balance=get(owner);
          if ((balance.navigationRemaining ?? MAX_DAILY_SKIPS) === 0)
            throw Object.assign(new Error('Daily navigation limit reached.'),{code:'navigation-limit'});
          commitLocal(owner,state,{...balance,navigationRemaining:(balance.navigationRemaining ?? MAX_DAILY_SKIPS) - 1});notify();
        });
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
        if (explanation && (balance.unlimited || hasFreeLessonPractice(key) || balance.explanationUnlocks.includes(questionRewardKey(key))))
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
      await mutateLocal(owner,state=>{
        signal?.throwIfAborted();
        const questionKey = questionRewardKey(key),balance = get(owner,key);
        if (!(balance.explanationUnlocks || []).includes(questionKey)) {
          const price = balance.unlimited || hasFreeLessonPractice(key) ? 0 : EXPLANATION_GEM_COST;
          if (balance.gems < price) throw Object.assign(new Error("Not enough gems."),{code:"insufficient-gems"});
          commitLocal(owner,state,{...balance,gems:balance.gems - price,explanationUnlocks:[...(balance.explanationUnlocks || []),questionKey]});notify();
        }
      });
      return explanation;
    },
    spend(owner, id, key) {
      if (hasFreeLessonPractice(key)) return;
      if(!remote(owner))return mutateLocal(owner,state=>{
        if(state.pending.has(id))return;
        if(get(owner,key).unlimited){state.pending.add(id);return;}
        const value=spendHeart(state.value,now(),refillOptions(owner));
        if(!value)throw new Error('No hearts available.');
        commitLocal(owner,state,value);state.pending.add(id);notify();
      });
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
