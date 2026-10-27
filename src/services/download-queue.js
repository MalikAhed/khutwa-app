// One queue owns speculative downloads. An explicit request interrupts idle work.
export function createDownloadQueue({ load, canWarm = () => true, idle = callback => setTimeout(callback, 80) }) {
  const jobs = new Map();
  let active = null;
  let scheduled = false;
  let sequence = 0;
  const schedule = () => {
    if (scheduled || active) return;
    scheduled = true;
    idle(() => { scheduled = false; void pump(); });
  };
  const pump = async () => {
    if (active) return;
    const next = [...jobs.values()].filter(job => !job.done && (job.priority === 0 || canWarm()))
      .sort((a, b) => a.priority - b.priority || a.order - b.order)[0];
    if (!next) return;
    active = next;
    next.controller = new AbortController();
    try {
      const value = await load(next.key, { signal:next.controller.signal, priority:next.priority === 0 ? "high" : "low" });
      next.done = true;
      jobs.delete(next.key);
      next.resolve(value);
    } catch (error) {
      if (!next.preempted) { jobs.delete(next.key); next.reject(error); }
    } finally {
      next.preempted = false;
      active = null;
      // Foreground requests do not wait for idle callbacks (which may be throttled).
      if ([...jobs.values()].some(job => job.priority === 0)) void pump();
      else schedule();
    }
  };
  const request = (key, { priority = 10, signal } = {}) => {
    signal?.throwIfAborted();
    let job = jobs.get(key);
    if (!job) {
      let resolve, reject;
      const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
      job = { key, priority, order:sequence++, promise, resolve, reject, done:false, preempted:false };
      jobs.set(key, job);
    } else job.priority = Math.min(priority, job.priority);
    if (priority === 0) {
      if (active && active !== job && active.priority > 0) {
        active.preempted = true;
        active.controller.abort();
      }
      void pump();
    } else schedule();
    if (!signal) return job.promise;
    return new Promise((resolve, reject) => {
      const aborted = () => reject(signal.reason || new DOMException("Aborted", "AbortError"));
      signal.addEventListener("abort", aborted, { once:true });
      job.promise.then(value => { if (!signal.aborted) resolve(value); }, reject)
        .finally(() => signal.removeEventListener("abort", aborted));
    });
  };
  return { request, resume:schedule, pending:() => jobs.size };
}

export function canWarmConnection({ connection, hidden = false, online = true } = {}) {
  return online && !hidden && !connection?.saveData
    && connection?.type !== "cellular"
    && !["slow-2g", "2g", "3g"].includes(connection?.effectiveType);
}

export function interleaveSubjects(subjects) {
  const order = [];
  const length = Math.max(0, ...subjects.map(subject => subject.length));
  for (let index = 0; index < length; index++) for (const subject of subjects) {
    if (subject[index]) order.push(subject[index]);
  }
  return order;
}
