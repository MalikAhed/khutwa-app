import assert from "node:assert/strict";
import test from "node:test";
import { TOTAL_DAYS } from "../src/data/course.js";
import {
  calculateStreak,
  getProgressionSummary,
  getRankProgress,
  RANKS,
  TOTAL_COURSE_XP,
  XP_PER_LESSON,
  getLevelProgress,
  MAX_LEVEL,
  MAX_LEVEL_XP,
} from "../src/domain/progression.js";

test("question XP advances through 500 levels and fills the bar at the cap", () => {
  assert.deepEqual(getLevelProgress(0), { level:1, xp:0, levelXpGoal:100, levelProgress:0 });
  assert.equal(getLevelProgress(90).level, 1);
  assert.deepEqual(getLevelProgress(100), { level:2, xp:0, levelXpGoal:100, levelProgress:0 });
  for (let level = 1; level <= MAX_LEVEL; level += 1) {
    assert.equal(getLevelProgress((level - 1) * 100).level, level);
  }
  assert.equal(MAX_LEVEL_XP, 49900);
  assert.equal(getLevelProgress(MAX_LEVEL_XP - 1).level, 499);
  assert.deepEqual(getLevelProgress(MAX_LEVEL_XP), { level:500, xp:100, levelXpGoal:100, levelProgress:100 });
  assert.deepEqual(getLevelProgress(1e6), { level:500, xp:100, levelXpGoal:100, levelProgress:100 });
});

test("lesson XP is distributed across all 16 ranks and the final lesson unlocks rank 16", () => {
  assert.equal(RANKS.length, 16);
  assert.equal(RANKS[0].minimumXp, 0);
  assert.equal(RANKS.at(-1).minimumXp, TOTAL_COURSE_XP);
  assert.equal(TOTAL_COURSE_XP, TOTAL_DAYS * XP_PER_LESSON);
  assert(RANKS.every((rank, index) => index === 0 || rank.minimumXp > RANKS[index - 1].minimumXp));
  assert.equal(getRankProgress(TOTAL_COURSE_XP - XP_PER_LESSON).rank.number, 15);
  const final = getRankProgress(TOTAL_COURSE_XP);
  assert.equal(final.rank.number, 16);
  assert.equal(final.nextRank, null);
  assert.equal(final.progressPercent, 100);
});

test("progression XP is derived from unique completed lessons rather than question attempts", () => {
  const summary = getProgressionSummary({
    completedLessonDays:[1, 1, 2, 200],
    activityDates:[{ day:1, date:"2026-08-10" }, { day:2, date:"2026-08-10" }],
    today:"2026-08-10",
  });
  assert.equal(summary.completedLessonCount, 2);
  assert.equal(summary.totalXp, XP_PER_LESSON * 2);
  assert.equal(summary.todayXp, XP_PER_LESSON * 2);
});

test("daily streaks continue on consecutive local dates, survive yesterday, and reset after a missed day", () => {
  const activity = ["2026-08-01", "2026-08-03", "2026-08-04", "2026-08-05"];
  assert.deepEqual(calculateStreak(activity, "2026-08-05"), { current:3, longest:3, activeToday:true });
  assert.deepEqual(calculateStreak(activity, "2026-08-06"), { current:3, longest:3, activeToday:false });
  assert.deepEqual(calculateStreak(activity, "2026-08-07"), { current:0, longest:3, activeToday:false });
});
