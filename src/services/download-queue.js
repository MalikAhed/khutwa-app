// One cancellable request at a time. A selected lesson always owns the queue.
export function createDownloadQueue({ download, onError = () => {}, defer = callback => setTimeout(callback, 0) }) {
  const completed = new Set();
  const retries = new Map();
  let background = [], foreground = null, active = null, running = false, paused = true;
  const nextFile = files => files.find(file => !completed.has(file));
  const interrupt = () => active?.controller.abort();
  async function run() {
    if (running) return;
    running = true;
    try {
      while (foreground || !paused) {
        const job = foreground;
        const file = nextFile(job?.files || background);
        if (!file) {
          if (job) { foreground = null; job.resolve(true); continue; }
          break;
        }
        const controller = new AbortController();
        active = { controller, job };
        try {
          await download(file, { signal:controller.signal, priority:job ? "high" : "low" });
          if (!controller.signal.aborted) { completed.add(file); retries.delete(file); }
        } catch (error) {
          if (!controller.signal.aborted) {
            onError(error, file);
            retries.set(file, (retries.get(file) || 0) + 1);
            // A failed file must not block all other lessons. Retry on resume.
            background = background.filter(value => value !== file);
            if (job && foreground === job) { foreground = null; job.resolve(false); }
          }
        } finally { active = null; }
        await new Promise(resolve => defer(resolve));
      }
    } finally { running = false; }
  }
  return Object.freeze({
    start(files) { background = [...new Set([...files, ...background])]; paused = false; void run(); },
    pause() { paused = true; if (!active?.job) interrupt(); },
    resume() {
      for (const [file, attempts] of retries) if (attempts < 3 && !background.includes(file)) background.push(file);
      paused = false; void run();
    },
    prioritize(files, { signal } = {}) {
      foreground?.resolve(false);
      interrupt();
      if (signal?.aborted) { foreground = null; void run(); return Promise.resolve(false); }
      let resolve;
      const promise = new Promise(done => { resolve = done; });
      const job = { files:[...new Set(files)], resolve };
      foreground = job;
      const cancel = () => {
        if (foreground !== job) return;
        foreground = null; interrupt(); resolve(false); void run();
      };
      signal?.addEventListener("abort", cancel, { once:true });
      void promise.then(() => signal?.removeEventListener("abort", cancel));
      void run();
      return promise;
    },
  });
}
