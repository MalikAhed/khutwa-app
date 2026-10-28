import test from 'node:test';
import assert from 'node:assert/strict';
import { createDownloadQueue } from '../src/services/download-queue.js';

const until = async condition => {
  for (let i = 0; i < 100 && !condition(); i++) await new Promise(resolve => setImmediate(resolve));
  assert.ok(condition(), 'queue reached the expected state');
};
function harness() {
  const calls = [];
  const queue = createDownloadQueue({ defer:setImmediate, download:(file, {signal, priority}) => new Promise((resolve, reject) => {
    const call = {file, priority, signal, finish:resolve};
    calls.push(call);
    signal.addEventListener('abort', () => reject(signal.reason), {once:true});
  }) });
  return { queue, calls };
}

test('opening a lesson interrupts background bytes, finishes its files, then resumes in order', async () => {
  const {queue, calls} = harness();
  queue.start(['onboarding','helper','first-a','first-b','full-a','full-b']);
  await until(() => calls.length === 1);
  calls[0].finish();
  await until(() => calls.length === 2);
  const done = queue.prioritize(['first-b','full-b']);
  assert.equal(calls[1].signal.aborted, true);
  await until(() => calls.length === 3);
  assert.equal(calls[2].file,'first-b'); assert.equal(calls[2].priority,'high');
  calls[2].finish();
  await until(() => calls.length === 4);
  assert.equal(calls[3].file,'full-b'); calls[3].finish();
  assert.equal(await done,true);
  await until(() => calls.length === 5);
  assert.equal(calls[4].file,'helper'); calls[4].finish();
  await until(() => calls.length === 6);
  assert.equal(calls[5].file,'first-a'); calls[5].finish();
  await until(() => calls.length === 7);
  assert.equal(calls[6].file,'full-a'); calls[6].finish();
  queue.pause();
});

test('rapid lesson changes and leaving a lesson cannot retain obsolete priority', async () => {
  const {queue,calls} = harness();
  const navigation = new AbortController();
  queue.start(['background']);
  const first = queue.prioritize(['old-first','old-rest']);
  await until(() => calls.at(-1).file === 'old-first');
  const second = queue.prioritize(['new-first','new-rest'], {signal:navigation.signal});
  assert.equal(await first,false);
  await until(() => calls.at(-1).file === 'new-first');
  navigation.abort();
  assert.equal(await second,false);
  await until(() => calls.at(-1).file === 'background');
  assert.equal(calls.some(call => call.file === 'old-rest' || call.file === 'new-rest'),false);
  queue.pause();
});

test('offline failures remain retryable and paused downloads resume without skipping unfinished files', async () => {
  let failed = false;
  const requests = [];
  const queue = createDownloadQueue({defer:setImmediate, download:async file => {
    requests.push(file);
    if (file === 'retry' && !failed) { failed = true; throw new Error('offline'); }
  }});
  queue.start(['retry','next']);
  await until(() => requests.length === 2);
  queue.pause(); queue.resume();
  await until(() => requests.length === 3);
  assert.deepEqual(requests,['retry','next','retry']);
  queue.pause();
});

test('a failed startup file retries ahead of the lesson backlog on refresh', async () => {
  const calls=[];
  let failed=false;
  const queue=createDownloadQueue({defer:setImmediate,download:async file=>{
    calls.push(file);
    if(file==='startup'&&!failed){failed=true;throw new Error('temporary outage');}
    if(file==='lesson-1')queue.pause();
  }});
  queue.start(['startup','lesson-1','lesson-2','lesson-3']);
  await until(()=>calls.length===2);
  queue.start(['startup','lesson-1','lesson-2','lesson-3']);
  await until(()=>calls.length>=3);
  assert.equal(calls[2],'startup','startup cannot wait behind the entire course download');
  queue.pause();
});
