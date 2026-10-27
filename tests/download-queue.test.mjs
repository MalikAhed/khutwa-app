import test from "node:test";
import assert from "node:assert/strict";
import { createDownloadQueue, canWarmConnection, interleaveSubjects } from "../src/services/download-queue.js";

const tick = () => new Promise(resolve => setImmediate(resolve));

test("a selected question interrupts background work, which resumes without losing callers", async () => {
  const starts = [], finishes = new Map();
  const queue = createDownloadQueue({ idle:setImmediate, load(key, { signal }) {
    starts.push(key);
    return new Promise((resolve, reject) => {
      finishes.set(key, resolve);
      signal.addEventListener("abort", () => reject(signal.reason), { once:true });
    });
  } });
  const warm = queue.request("other-lesson");
  await tick();
  const first = queue.request("selected-question", { priority:0 });
  const duplicate = queue.request("selected-question", { priority:0 });
  await tick();
  assert.deepEqual(starts, ["other-lesson", "selected-question"]);
  finishes.get("selected-question")("answer");
  assert.deepEqual(await Promise.all([first, duplicate]), ["answer", "answer"]);
  await tick();
  assert.deepEqual(starts, ["other-lesson", "selected-question", "other-lesson"]);
  finishes.get("other-lesson")("warm");
  assert.equal(await warm, "warm");
});

test("Save-Data pauses warming but never blocks a student request", async () => {
  let enabled = false;
  const starts = [];
  const queue = createDownloadQueue({ canWarm:() => enabled, idle:setImmediate, load:async key => { starts.push(key); return key; } });
  const warm = queue.request("later");
  await tick();
  assert.deepEqual(starts, []);
  assert.equal(await queue.request("now", { priority:0 }), "now");
  enabled = true;
  queue.resume();
  assert.equal(await warm, "later");
  assert.deepEqual(starts, ["now", "later"]);
  for (const connection of [{ saveData:true }, { effectiveType:"2g" }, { effectiveType:"3g" }]) assert.equal(canWarmConnection({ connection }), false);
  assert.equal(canWarmConnection({ hidden:true }), false);
  assert.equal(canWarmConnection({ online:false }), false);
  assert.equal(canWarmConnection({ connection:{ effectiveType:"4g" } }), true);
});

test("navigation cancellation does not cancel another reader of the same question", async () => {
  let complete;
  const queue = createDownloadQueue({ load:() => new Promise(resolve => { complete = resolve; }) });
  const controller = new AbortController();
  const cancelled = queue.request("question", { priority:0, signal:controller.signal });
  const other = queue.request("question", { priority:0 });
  controller.abort();
  await assert.rejects(cancelled, { name:"AbortError" });
  complete("ready");
  assert.equal(await other, "ready");
});

test("lesson warming alternates subjects without skipping shorter subjects", () => {
  assert.deepEqual(interleaveSubjects([["math1", "math2", "math3"], ["ict1"], ["physics1", "physics2"]]),
    ["math1", "ict1", "physics1", "math2", "physics2", "math3"]);
});
