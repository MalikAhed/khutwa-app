import assert from "node:assert/strict";
import test from "node:test";
import { createFirstRunTourState } from "../src/services/first-run-tour.js";

test("the first-run tour resumes for its learner and never starts automatically for other accounts",() => {
  const saved = new Map();
  const storage = { getItem:key => saved.get(key),setItem:(key,value) => saved.set(key,value) };
  let owner = "account:1";
  const service = { getLearnerProgressOwner:() => owner };
  const state = createFirstRunTourState({ service,storage });
  assert.equal(state.active(),false);
  state.start(); state.advance("rating");
  assert.equal(createFirstRunTourState({ service,storage }).read().stage,"rating");
  owner = "account:2";
  assert.equal(state.active(),false);
  state.start(); state.finish();
  assert.equal(state.active(),false);
  owner = "account:1";
  assert.equal(state.active(),true);
  assert.equal(state.read().stage,"rating");
  state.finish();
  assert.equal(createFirstRunTourState({ service,storage }).active(),false);
  owner = "guest";
  assert.equal(state.active(),false);
});

test("malformed or denied tour storage does not prevent the current tour",() => {
  const service = { getLearnerProgressOwner:() => "account:1" };
  const state = createFirstRunTourState({ service,storage:{ getItem:() => "{",setItem:() => { throw Error("denied"); } } });
  assert.equal(state.read(),null);
  state.start(); state.advance("not-a-stage");
  assert.equal(state.read().stage,"answer");
  state.finish(); assert.equal(state.active(),false);
});

test("older completed tours stay complete while unfinished introductions move to the lesson-first flow",() => {
  const service = { getLearnerProgressOwner:() => "account:1" };
  let value = { version:1,status:"complete" };
  const state = createFirstRunTourState({ service,storage:{ getItem:() => JSON.stringify(value) } });
  assert.equal(state.active(),false);
  value = { version:1,status:"active",stage:"hearts" };
  assert.equal(state.read().stage,"answer");
  value = { version:2,status:"active",stage:"pick-subject" };
  assert.equal(state.read().stage,"answer");
  value = { version:1,status:"active",stage:"reading-card" };
  assert.equal(state.read().stage,"flashcard-answer");
});
