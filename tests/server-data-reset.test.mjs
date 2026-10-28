import assert from 'node:assert/strict';
import test from 'node:test';
import { applyServerDataReset } from '../src/services/server-data-reset.js';

const marker = 'tawjihi:data-reset';
function setup(t, { baseline, locks = true } = {}) {
  const values = () => new Map([
    ['tawjihi:subject-parts:v1:account:1', 'saved answers'],
    ['tawjihi:temporary-account', 'existing profile'],
    ['unrelated', 'keep'], ...(baseline === undefined ? [] : [[marker, baseline]]),
  ]);
  const local = values(), session = values();
  const storage = data => ({ getItem:key => data.get(key) ?? null, setItem:(key,value) => data.set(key,value),
    removeItem:() => assert.fail('Student storage must not be removed'), clear:() => assert.fail('Student storage must not be cleared') });
  for (const [key, value] of Object.entries({ localStorage:storage(local), sessionStorage:storage(session),
    indexedDB:{ deleteDatabase:() => assert.fail('Progress and the outbox must not be deleted') },
    navigator:{ ...(locks ? {locks:{request:async (_key, run) => run()}} : {}) },
  })) {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { value, configurable:true });
    t.after(() => { if (descriptor) Object.defineProperty(globalThis, key, descriptor); else delete globalThis[key]; });
  }
  const state = { resetId:null, ok:true };
  t.mock.method(globalThis, 'fetch', async () => ({ ok:state.ok, json:async () => ({resetId:state.resetId}) }));
  return { local, session, state };
}

for (const locks of [true, false]) test(`first launch and ordinary releases preserve stored work (locks: ${locks})`, async t => {
  const { local, session, state } = setup(t, { locks });
  const original = [...local];
  await applyServerDataReset();
  await applyServerDataReset();
  assert.deepEqual([...local], [...original, [marker, '']]);
  assert.deepEqual([...session], [...local]);
  state.resetId = 'unexpected-new-database';
  await assert.rejects(applyServerDataReset(), /Saved work is preserved/);
  assert.deepEqual([...local], [...original, [marker, '']]);
  assert.deepEqual([...session], [...local]);
});

test('existing markers survive upgrades; a reset, rollback or stale tab stops without changing data', async t => {
  const { local, session, state } = setup(t, { baseline:'original-database' });
  const original = [...local];
  state.resetId = 'original-database';
  await applyServerDataReset();
  for (const resetId of ['replacement-database', null]) {
    state.resetId = resetId;
    await assert.rejects(applyServerDataReset(), /Saved work is preserved/);
    assert.deepEqual([...local], original);
    assert.deepEqual([...session], original);
  }
  state.resetId = 'original-database';
  session.set(marker, 'other-tab-database');
  await assert.rejects(applyServerDataReset(), /Saved work is preserved/);
  assert.deepEqual([...local], original);
});

test('invalid or unavailable data state cannot change the baseline or saved work', async t => {
  const { local, session, state } = setup(t);
  const original = [...local];
  for (const resetId of [undefined, 123, {}]) {
    state.resetId = resetId;
    await assert.rejects(applyServerDataReset(), /Invalid app data state/);
  }
  state.ok = false;
  await assert.rejects(applyServerDataReset(), /could not be checked/);
  assert.deepEqual([...local], original);
  assert.deepEqual([...session], original);
});
