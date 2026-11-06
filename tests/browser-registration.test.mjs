import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createAccountStore } from "../src/server/account-store.mjs";
import { createAuthApi } from "../src/server/auth-api.mjs";
import { browserRegistration, readCookie } from "../src/server/browser-registration.mjs";

const computer = "Mozilla/5.0 (X11; Linux x86_64) Chrome/143.0.0.0 Safari/537.36";
const phone = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Mobile/15E148 Safari/604.1";
async function call(handler, pathname, headers = {}, body = {}, method = "POST") {
  const response = { headers:{}, writeHead(status, headers = {}) { this.status = status; this.headers = headers; return this; }, end(body) { this.body = body; } };
  await handler({ method, headers:{ host:"app.test", "content-type":"application/json", ...headers }, socket:{}, body }, response, pathname);
  return { ...response, json:JSON.parse(response.body) };
}

test("the first computer and phone remain the only registrations after logout and database restart", async t => {
  const directory = await mkdtemp(path.join(tmpdir(), "khutwa-devices-"));
  const databasePath = path.join(directory, "accounts.sqlite");
  let store = createAccountStore({ databasePath });
  t.after(async () => { store.close(); await rm(directory, { recursive:true, force:true }); });
  await store.createAccount({ username:"device-student", phone:"0591234567", curriculum:"gaza", path:"scientific", password:"Learn123" });
  const body = { identifier:"device-student", password:"Learn123" };
  const handler = () => createAuthApi({ accountStore:store, readJsonBody:async request => request.body });
  const signIn = (agent, cookie = "") => call(handler(), "/api/auth/sign-in", { "user-agent":agent, cookie }, body);
  const preflight = await call(handler(), "/api/auth/session", { "user-agent":computer }, {}, "GET");
  assert.equal(preflight.json.account, null);
  const first = await signIn(computer, preflight.headers["Set-Cookie"]);
  assert.equal(readCookie(first.headers["Set-Cookie"][1]), readCookie(preflight.headers["Set-Cookie"]), "identity is established before credentials, so a lost login receipt can retry");
  const second = await signIn(phone);
  assert.equal(first.status, 200);
  assert.equal(second.status, 200);
  const cookies = first.headers["Set-Cookie"];
  const device = cookies.find(cookie => cookie.startsWith("tawjihi_device="));
  assert.match(device, /HttpOnly; SameSite=Strict; Max-Age=/);
  const session = cookies.find(cookie => cookie.startsWith("tawjihi_session="));
  await call(handler(), "/api/auth/sign-out", { cookie:session });
  store.close();
  store = createAccountStore({ databasePath });
  assert.equal((await signIn(computer, device)).status, 200, "the original browser can sign back in");
  assert.equal((await signIn(computer)).status, 403, "a new computer browser is blocked");
  assert.equal((await signIn(phone)).json.status, "device-limit", "a new phone browser is blocked");
  assert.equal((await signIn(computer, "tawjihi_device=forged-token")).status, 403);
  assert.equal((await call(handler(), "/api/auth/sign-in", { "user-agent":computer }, { ...body, password:"wrong" })).status, 401);
  assert.equal(store.getAccountForSession(readCookie(session, "tawjihi_session")), null);
});

test("racing registrations cannot occupy the same permanent slot", async t => {
  const store = createAccountStore({ databasePath:":memory:" });
  t.after(() => store.close());
  const { account } = await store.createAccount({ username:"race", curriculum:"gaza", path:"scientific", password:"Learn123" });
  const a = browserRegistration({ "user-agent":computer });
  const b = browserRegistration({ "user-agent":computer });
  const c = browserRegistration({ "user-agent":phone });
  const results = await Promise.all([a,b,c].map(device => Promise.resolve().then(() => store.claimDevice(account.id, device))));
  assert.deepEqual(results, [true, false, true]);
  assert.equal(store.claimDevice(account.id, a), true);
});
