import assert from "node:assert/strict";
import test from "node:test";
import { createLearnerSession } from "../src/services/learner-session.js";
import { getBrowserLearnerStorage, GUEST_TRIAL_STORAGE_KEY, LIVE_RELOAD_STORAGE_KEY, TEMPORARY_ACCOUNT_STORAGE_KEY, VISITOR_SELECTION_STORAGE_KEY } from "../src/services/learner-storage.js";

class MemoryStorage {
  values = new Map();
  getItem(key) { return this.values.get(key) ?? null; }
  setItem(key, value) { this.values.set(key, value); }
  removeItem(key) { this.values.delete(key); }
}

test("visitor selection stays behind the fixture service boundary", () => {
  const storage = new MemoryStorage();
  const service = createLearnerSession({ storage });
  assert.equal(service.getVisitorSelection(), null);
  assert.deepEqual(service.saveVisitorSelection({ curriculum:"gaza", path:"scientific" }), { curriculum:"gaza", path:"scientific" });
  assert.equal(storage.getItem(VISITOR_SELECTION_STORAGE_KEY), JSON.stringify({ curriculum:"gaza", path:"scientific" }));
  assert.throws(() => service.saveVisitorSelection({ curriculum:"unknown", path:"scientific" }), /invalid/);
});

test("old guest trial state cannot restore learning access or a personal dashboard", async () => {
  const storage = new MemoryStorage();
  storage.setItem(GUEST_TRIAL_STORAGE_KEY, JSON.stringify({ active:true, completedFirstLesson:true }));
  const service = createLearnerSession({ storage });
  assert.equal(service.getAccountType(), "guest");
  assert.equal(service.getLearnerHomeSnapshot(), null);
  assert.equal(service.startGuestTrial, undefined);
  await service.createAccount({ username:"returning-student", phone:"0591234567", password:"Secret123" });
  assert.equal(service.getAccountType(), "free");
  assert.equal(storage.getItem(GUEST_TRIAL_STORAGE_KEY), null);
});

test("registration creates a free account directly without verification", async () => {
  const service = createLearnerSession();
  const result = await service.createAccount({ username:"new-student", phone:"0591234567", password:"Secret123" });
  assert.deepEqual(result, { status:"created", accountType:"free" });
  assert.equal(service.getAccountType(), "free");
  assert.equal(service.getLearnerHomeSnapshot().learning.completion, "not-started");
  assert.equal(JSON.stringify(service.getLearnerHomeSnapshot()).includes("Secret123"), false);
});

test("registration rejects identifiers already used by a demo account", async () => {
  const service = createLearnerSession();
  assert.equal((await service.checkAccountAvailability({ field:"username", value:"free" })).status, "duplicate");
  assert.equal((await service.checkAccountAvailability({ field:"username", value:"unused-name" })).status, "available");
  assert.equal((await service.createAccount({ username:"free", phone:"0591234567" })).status, "duplicate");
  assert.equal((await service.createAccount({ username:"new", phone:"0592222222" })).status, "duplicate");
});

test("API sign-in restores the curriculum and path owned by the account", async () => {
  const storage = new MemoryStorage();
  const account = {
    id:"test-returning", username:"returning", displayName:"Returning", accountType:"free",
    curriculum:"full-palestinian", path:"literary",
  };
  const service = createLearnerSession({
    storage,
    apiBase:"/api/auth",
    fetchImpl:async () => ({ ok:true, status:200, json:async () => ({ status:"signed-in", account }) }),
  });
  service.saveVisitorSelection({ curriculum:"gaza", path:"scientific" });

  assert.equal((await service.signIn({ identifier:"returning", password:"Learn123" })).status, "signed-in");
  assert.deepEqual(service.getVisitorSelection(), { curriculum:"full-palestinian", path:"literary" });
});

test("failed API session restoration clears temporary member state", async () => {
  const storage = new MemoryStorage();
  storage.setItem(LIVE_RELOAD_STORAGE_KEY, "1");
  storage.setItem(TEMPORARY_ACCOUNT_STORAGE_KEY, JSON.stringify({
    type:"subscribed", displayName:"Stale user", homeScenarioId:"student-paid",
  }));
  const service = createLearnerSession({
    storage,
    apiBase:"/api/auth",
    fetchImpl:async () => ({ ok:false, status:503, json:async () => ({ status:"unavailable" }) }),
  });
  assert.equal(service.getAccountType(), "subscribed");

  assert.equal((await service.restoreSession()).accountType, "guest");
  assert.equal(service.getAccountType(), "guest");
  assert.equal(storage.getItem(TEMPORARY_ACCOUNT_STORAGE_KEY), null);
});

test("malformed successful API responses fail closed without changing account state", async () => {
  const errors = [];
  const service = createLearnerSession({
    apiBase:"/api/auth",
    onError:(error) => errors.push(error),
    fetchImpl:async () => ({ ok:true, status:200, json:async () => ({ status:"signed-in" }) }),
  });

  assert.equal((await service.signIn({ identifier:"returning", password:"Learn123" })).status, "unavailable");
  assert.equal((await service.createAccount({ username:"new", phone:"0591234567", password:"Learn123" })).status, "unavailable");
  assert.equal((await service.restoreSession()).status, "unavailable");
  assert.equal(service.getAccountType(), "guest");
  assert.equal(errors.length, 3);
});

test("sign-in accepts all aliases and restores legacy blocked accounts with learning access", async () => {
  const storage = new MemoryStorage();
  const service = createLearnerSession({ storage });
  assert.equal((await service.signIn({ identifier:"unknown", password:"Learn123" })).status, "invalid");
  assert.equal((await service.signIn({ identifier:"free@example.com", password:"wrong" })).status, "invalid");
  assert.deepEqual(await service.signIn({ identifier:"free", password:"Learn123" }), { status:"signed-in", accountType:"free" });
  assert.equal(service.getAccountType(), "free");
  assert.equal(service.getLearnerHomeSnapshot().learning.mustReviewCount, 0);
  assert.deepEqual(await service.signIn({ identifier:"0592222222", password:"Learn123" }), { status:"signed-in", accountType:"subscribed" });
  assert.equal(service.getAccountType(), "subscribed");
  assert.equal(service.getLearnerHomeSnapshot().learning.requiredLessonsCompleted, 0);
  assert.deepEqual(await service.signIn({ identifier:"banned@example.com", password:"Learn123" }), { status:"signed-in", accountType:"free" });
  assert.equal(service.getAccountType(), "free");
  assert.equal(service.getLearnerHomeSnapshot().account.type, "free");
  assert.deepEqual(service.getVisitorSelection(), { curriculum:"gaza", path:"scientific" });
  assert.deepEqual(service.signOut(), { accountType:"guest" });
  assert.equal(service.getAccountType(), "guest");
  assert.equal(service.getLearnerHomeSnapshot(), null);
  assert.equal(JSON.stringify(service.getLearnerHomeSnapshot()).includes("Learn123"), false);
});

test("a preview login and progress identity survive a hard refresh until explicit sign-out", async () => {
  const storage = new MemoryStorage();
  const service = createLearnerSession({ storage });
  await service.signIn({ identifier:"subscribed", password:"Learn123" });
  assert.equal(service.getAccountType(), "subscribed");
  assert.equal(service.getLearnerDisplayName(), "ليان");
  const refreshedService = createLearnerSession({ storage });
  assert.equal(refreshedService.getAccountType(), "subscribed");
  assert.equal(refreshedService.getLearnerDisplayName(), "ليان");
  assert.equal(refreshedService.getLearnerProgressOwner(), service.getLearnerProgressOwner());
  refreshedService.signOut();
  assert.equal(createLearnerSession({ storage }).getAccountType(), "guest");
});

test("the development server live reload preserves the temporary login", async () => {
  const storage = new MemoryStorage();
  const service = createLearnerSession({ storage });
  await service.signIn({ identifier:"subscribed", password:"Learn123" });
  assert.match(storage.getItem(TEMPORARY_ACCOUNT_STORAGE_KEY), /subscribed/);
  storage.setItem(LIVE_RELOAD_STORAGE_KEY, "1");
  const reloadedService = createLearnerSession({ storage });
  assert.equal(reloadedService.getAccountType(), "subscribed");
  assert.equal(reloadedService.getLearnerDisplayName(), "ليان");
  assert.equal(storage.getItem(LIVE_RELOAD_STORAGE_KEY), null);
});

test("an existing preview session migrates once without reviving a signed-out account", async () => {
  const sessionStorage = new MemoryStorage();
  const localStorage = new MemoryStorage();
  const service = createLearnerSession({ storage:sessionStorage });
  service.saveVisitorSelection({ curriculum:"gaza", path:"scientific" });
  await service.createAccount({ username:"returning-student", phone:"0591234567", password:"Secret123" });
  const previousWindow = globalThis.window;
  globalThis.window = { sessionStorage, localStorage };
  try {
    const storage = getBrowserLearnerStorage(undefined, { persistent:true });
    assert.equal(storage, localStorage);
    const restored = createLearnerSession({ storage });
    assert.equal(restored.getLearnerProgressOwner(), service.getLearnerProgressOwner());
    assert.deepEqual(restored.getVisitorSelection(), service.getVisitorSelection());
    assert.equal(sessionStorage.getItem(TEMPORARY_ACCOUNT_STORAGE_KEY), null);
    assert.ok(!localStorage.getItem(TEMPORARY_ACCOUNT_STORAGE_KEY).includes("Secret123"));
    restored.signOut();
    assert.equal(createLearnerSession({ storage:getBrowserLearnerStorage(undefined, { persistent:true }) }).getAccountType(), "guest");
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test("learning progress identity stays stable across sign-in aliases and separate across learners", async () => {
  const service = createLearnerSession();
  assert.equal(service.getLearnerProgressOwner(), "guest");
  await service.signIn({ identifier:"free", password:"Learn123" });
  const freeOwner = service.getLearnerProgressOwner();
  await service.signOut();
  assert.equal(service.getLearnerProgressOwner(), "guest");
  await service.signIn({ identifier:"free@example.com", password:"Learn123" });
  assert.equal(service.getLearnerProgressOwner(), freeOwner);
  await service.signIn({ identifier:"subscribed", password:"Learn123" });
  assert.notEqual(service.getLearnerProgressOwner(), freeOwner);
});


test("corrupt saved selection cannot restore retired guest access or retain a reload marker", () => {
  const storage = new MemoryStorage();
  storage.setItem(VISITOR_SELECTION_STORAGE_KEY, "{broken");
  storage.setItem(GUEST_TRIAL_STORAGE_KEY, JSON.stringify({ active:true, completedFirstLesson:true }));
  storage.setItem(LIVE_RELOAD_STORAGE_KEY, "1");
  const errors = [];
  const service = createLearnerSession({ storage, onError:(error) => errors.push(error) });
  assert.equal(service.getVisitorSelection(), null);
  assert.equal(service.getAccountType(), "guest");
  assert.equal(service.getLearnerHomeSnapshot(), null);
  assert.equal(storage.getItem(LIVE_RELOAD_STORAGE_KEY), null);
  assert.equal(errors.length, 1);
});

test("storage removal failure does not interrupt account creation or notifications", async () => {
  const storage = new MemoryStorage();
  const errors = [];
  const service = createLearnerSession({ storage, onError:(error) => errors.push(error) });
  storage.removeItem = () => { throw new Error("Storage disabled"); };
  const changes = [];
  service.subscribe(() => changes.push(service.getAccountType()));
  assert.equal((await service.createAccount({ username:"new-student", phone:"0591234567" })).status, "created");
  assert.equal(service.getAccountType(), "free");
  assert.deepEqual(changes, ["free"]);
  assert.equal(errors.length, 1);
});


test("HTTP accounts require a stable server identity", async () => {
  const service = createLearnerSession({ apiBase:"/api/auth", onError:()=>{},
    fetchImpl:async () => ({ok:true, status:200, json:async () => ({status:"signed-in",account:{username:"missing-id",accountType:"free",curriculum:"gaza",path:"scientific"}})}) });
  assert.equal((await service.signIn({identifier:"missing-id",password:"Learn123"})).status,"unavailable");
  assert.equal(service.getAccountType(),"guest");
});

test("cloud entitlement refresh preserves the account on network failure and expires paid access", async () => {
  let response={ok:true,status:200,json:async()=>({account:{id:"77",username:"learner",curriculum:"gaza",path:"scientific",accountType:"subscribed",subscriptionExpiresAt:"2020-01-01T00:00:00Z"}})};
  const service=createLearnerSession({apiBase:"/api/auth",fetchImpl:async()=>response,onError:()=>{}});
  await service.restoreSession();
  assert.equal(service.getAccountType(),"free");
  assert.equal(service.getLearnerProgressOwner(),"account:77");
  response={ok:false,status:503,json:async()=>({})};
  await service.restoreSession();
  assert.equal(service.getLearnerProgressOwner(),"account:77");
  response={ok:true,status:200,json:async()=>({account:null})};
  await service.restoreSession();
  assert.equal(service.getLearnerProgressOwner(),"guest");
});
