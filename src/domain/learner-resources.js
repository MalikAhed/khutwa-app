import { normalizeQuestionRewardKey } from "./question-rewards.js";
import { QUESTION_JUMPS_REQUIRE_SUPER } from './free-practice.js';

export const MAX_HEARTS = 7;
export const STARTER_GEMS = 200;
// Retain old daily skip counters for stored records and cached clients. The
// separate Super jump policy owns question selection; Continue stays free.
export const QUESTION_NAVIGATION_LIMIT_ENABLED = false;
export const MAX_DAILY_SKIPS = 5;
// Legacy batch-counter units stay stable for stored records and old clients.
// New rewards are paid per solve and never use this counter to grant gems.
export const CORRECT_ANSWERS_PER_REWARD = 10;
export const CORRECT_ANSWER_GEM_REWARD = 7;
export const SUPER_TRIAL_ENABLED = false;
// Retained exports for older cached modules; neither grants hearts or a trial.
export const HEART_REFILL_MS = 24 * 60 * 60 * 1000;
export const SUPER_TRIAL_MS = 7 * 24 * 60 * 60 * 1000;
export const HEART_TIME_ZONE = "Asia/Hebron";
const calendar = new Intl.DateTimeFormat("en-CA", { timeZone:HEART_TIME_ZONE, year:"numeric", month:"2-digit", day:"2-digit" });
export const heartDay = now => {
  const parts = Object.fromEntries(calendar.formatToParts(new Date(now)).map(part => [part.type,part.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
};
let cachedWindow;

export function nextHeartReset(now) {
  const day = heartDay(now);
  if (cachedWindow?.day === day) return cachedWindow.reset;
  // Find the next local date boundary, including 23/25-hour DST days.
  let low = Math.floor(now / 1000), high = low + 27 * 60 * 60;
  while (high - low > 1) {
    const middle = Math.floor((low + high) / 2);
    if (heartDay(middle * 1000) === day) low = middle;
    else high = middle;
  }
  cachedWindow = { day, reset:high * 1000 };
  return cachedWindow.reset;
}

export function refillResources(saved, now = Date.now(), { allowRefill = true } = {}) {
  const valid = saved && Number.isSafeInteger(saved.hearts) && saved.hearts >= 0
    && Number.isInteger(saved.gems) && saved.gems >= 0 && Number.isFinite(saved.refillAt);
  if (!valid) return { hearts:MAX_HEARTS, gems:STARTER_GEMS, refillAt:now };
  const reset = allowRefill && heartDay(now) > heartDay(saved.refillAt);
  const refillAt = reset ? now : saved.refillAt;
  // Lowering the allowance must never reset gems, purchases or legacy state.
  const hearts = reset ? MAX_HEARTS : Math.min(MAX_HEARTS, saved.hearts);
  const trialEndsAt = Number.isSafeInteger(saved.trialEndsAt) && saved.trialEndsAt > 0 ? saved.trialEndsAt : null;
  const explanationUnlocks = Array.isArray(saved.explanationUnlocks)
    ? [...new Set(saved.explanationUnlocks.filter(key => typeof key === "string").map(normalizeQuestionRewardKey))] : [];
  const navigationRefillAt = Number.isFinite(saved.navigationRefillAt) ? saved.navigationRefillAt : refillAt;
  const navigationReset = allowRefill && heartDay(now) > heartDay(navigationRefillAt);
  const navigationRemaining = navigationReset || !Number.isInteger(saved.navigationRemaining)
    ? MAX_DAILY_SKIPS : Math.max(0,Math.min(MAX_DAILY_SKIPS,saved.navigationRemaining));
  return { hearts, gems:saved.gems, refillAt, trialEndsAt, explanationUnlocks,
    navigationRemaining, navigationRefillAt:navigationReset ? now : navigationRefillAt,
    navigationCursors:saved.navigationCursors && typeof saved.navigationCursors === 'object'
      ? Object.fromEntries(Object.entries(saved.navigationCursors).filter(([,id]) => typeof id === 'string')) : {},
    ...(Number.isSafeInteger(saved.gemRevision) ? { gemRevision:saved.gemRevision } : {}),
    correctTowardGems:Number.isSafeInteger(saved.correctTowardGems) ? saved.correctTowardGems : 0 };
}

export function spendHeart(saved, now = Date.now(), options = {}) {
  const state = refillResources(saved, now, options);
  return state.hearts > 0 ? { ...state, hearts:state.hearts - 1 } : null;
}

export function resourceSnapshot(saved, subscribed = false, now = Date.now(), options = {}) {
  const state = refillResources(saved, now, options);
  return { ...state, unlimited:subscribed, navigationUnlimited:subscribed || !QUESTION_NAVIGATION_LIMIT_ENABLED && !QUESTION_JUMPS_REQUIRE_SUPER, trialEligible:SUPER_TRIAL_ENABLED,
    nextHeartAt:subscribed || state.hearts === MAX_HEARTS ? null : nextHeartReset(Math.max(now,state.refillAt)) };
}
