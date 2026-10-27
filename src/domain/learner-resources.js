import { normalizeQuestionRewardKey } from "./question-rewards.js?v=acff67f262f3c107";

export const MAX_HEARTS = 10;
export const STARTER_GEMS = 200;
export const HEART_REFILL_MS = 2 * 60 * 60 * 1000 / MAX_HEARTS;
export const SUPER_TRIAL_MS = 7 * 24 * 60 * 60 * 1000;

export function refillResources(saved, now = Date.now()) {
  const valid = saved && Number.isInteger(saved.hearts) && saved.hearts >= 0 && saved.hearts <= MAX_HEARTS
    && Number.isInteger(saved.gems) && saved.gems >= 0 && Number.isFinite(saved.refillAt);
  if (!valid) return { hearts:MAX_HEARTS, gems:STARTER_GEMS, refillAt:now };
  const refillAt = Math.min(saved.refillAt, now);
  const gained = Math.floor((now - refillAt) / HEART_REFILL_MS);
  const hearts = Math.min(MAX_HEARTS, saved.hearts + gained);
  const trialEndsAt = Number.isSafeInteger(saved.trialEndsAt) && saved.trialEndsAt > 0 ? saved.trialEndsAt : null;
  const explanationUnlocks = Array.isArray(saved.explanationUnlocks)
    ? [...new Set(saved.explanationUnlocks.filter(key => typeof key === "string").map(normalizeQuestionRewardKey))] : [];
  return { hearts, gems:saved.gems, refillAt:hearts === MAX_HEARTS ? now : refillAt + gained * HEART_REFILL_MS, trialEndsAt, explanationUnlocks };
}

export function spendHeart(saved, now = Date.now()) {
  const state = refillResources(saved, now);
  return state.hearts > 0 ? { ...state, hearts:state.hearts - 1 } : null;
}

export function resourceSnapshot(saved, subscribed = false, now = Date.now()) {
  const state = refillResources(saved, now);
  const unlimited = subscribed || state.trialEndsAt > now;
  return { ...state, unlimited, trialEligible:!subscribed && !state.trialEndsAt,
    nextHeartAt:unlimited || state.hearts === MAX_HEARTS ? null : state.refillAt + HEART_REFILL_MS };
}
