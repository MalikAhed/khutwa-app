import assert from "node:assert/strict";
import test from "node:test";
import { createServerProgressAdapter } from "../src/services/server-progress.js";
import { createSubjectProgressStore } from "../src/services/subject-progress-store.js";

test("a lost free-answer receipt retains the outbox and retries the same answer without spending twice", async () => {
  const pending = new Map(), accepted = new Set(), spent = new Set();
  let loseReceipt = true;
  const local = {
    importAcknowledged:async () => true,
    enqueue:async update => pending.set(update.id, update),
    pending:async () => [...pending.values()],
    snapshot:async () => ({ records:new Map(), pending:[...pending.values()] }),
    confirm:async (_owner, _records, id) => { if (id) pending.delete(id); },
    close() {},
  };
  const adapter = createServerProgressAdapter({ local, requiresOnlineAnswer:() => true,
    fetchImpl:async (_url, options) => {
      if (options.body) {
        const update = JSON.parse(options.body);
        accepted.add(update.id);
        if (loseReceipt) { loseReceipt = false; throw new Error("Lost after commit"); }
      }
      return { ok:true, json:async () => ({ accountId:"1", records:[] }) };
    } });
  const store = createSubjectProgressStore({ adapter, onError:() => {}, resourceStore:{ spend:(_owner,id) => spent.add(id) } });
  const result = await store.recordAnswer({ ownerId:"account:1", subjectId:"ict", lessonId:"database-management", partId:"access-basics", stepId:"exam-p09-q1-1", correct:false });
  assert.equal(result.status, "failed", "local persistence alone cannot authorize a free answer");
  assert.equal(pending.size, 1);
  assert.equal(accepted.size, 1);
  assert.equal((await result.retry()).status, "saved");
  assert.equal(pending.size, 0);
  assert.equal(accepted.size, 1);
  assert.equal(spent.size, 1);
});

test("paid-account answers still commit offline and retain their pending synchronization", async () => {
  const pending = new Map();
  const local = {
    importAcknowledged:async () => true,
    enqueue:async update => pending.set(update.id, update),
    pending:async () => [...pending.values()],
    snapshot:async () => ({ records:new Map(), pending:[...pending.values()] }),
    close() {},
  };
  const adapter = createServerProgressAdapter({ local, requiresOnlineAnswer:() => false,
    fetchImpl:async () => { throw new Error("Offline"); } });
  const store = createSubjectProgressStore({ adapter, onError:() => {} });
  const result = await store.recordAnswer({ ownerId:"account:1", subjectId:"ict", lessonId:"database-management", partId:"access-basics", stepId:"exam-p09-q1-1", correct:true });
  assert.equal(result.status, "saved");
  await result.whenSynced;
  assert.equal(pending.size, 1);
});
