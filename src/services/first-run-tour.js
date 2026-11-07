const STAGES = new Set(['wait-question','wait-answer','rating','easy','hard','explain','solution','solution-close','slider','report','exit','flashcard','assess','flip-back','report-send','report-hide','report-close','side-scroll','rewards','session-leave','streak-wait','streak','rated-open','rated-subject','rated-filter','free','hearts','gems','companion','goodbye']);

// Only coaching state lives here. Accounts, answers and reward records are never reset.
export function createFirstRunTourState({ service, storage = null }) {
  const memory = new Map();
  const unpersisted = new Set();
  const owner = () => service.getLearnerProgressOwner();
  const key = () => `tawjihi:rocky-first-run:v1:${owner()}`;
  const read = () => {
    const cached = memory.get(owner());
    let saved,completed=false;
    try {
      completed = storage?.getItem(`${key()}:complete`) === '1';
      saved = JSON.parse(storage?.getItem(key()) || 'null');
    } catch { /* Continue with this visit's coaching state. */ }
    // Completion in another tab wins over this tab's unfinished cached state.
    const finished = value => value?.status === 'complete' || value?.status === 'active' && (value.homeDone || [1,2].includes(value.version));
    let value = saved || cached;
    if (unpersisted.has(owner())) value = { ...saved,...cached };
    if (completed || finished(saved) || finished(cached)) return { ...(value || {version:3}),status:'complete' };
    if (!value || ![1,2,3].includes(value.version) || !['active','complete'].includes(value.status)) return null;
    if (!STAGES.has(value.stage)) return null;
    if (value.stage === 'rating') value={...value,stage:value.lastCorrect===false ? 'hard' : 'easy'};
    return { ...value,firstSessionPending:value.firstSessionPending ?? !value.sessionDone,seen:Array.isArray(value.seen) ? [...value.seen] : [] };
  };
  const write = value => {
    memory.set(owner(),value);
    unpersisted.add(owner());
    // This marker is only ever set, so a racing tab cannot undo completion by
    // writing an active snapshot after it has already read the older record.
    if (value.status === 'complete') { try { storage?.setItem(`${key()}:complete`,'1'); } catch { /* The full record and memory also retain completion. */ } }
    try { if (storage?.setItem) { storage.setItem(key(),JSON.stringify(value)); unpersisted.delete(owner()); } } catch { /* Memory still owns this visit. */ }
    return value;
  };
  const patch = changes => { const value = read(); if (value) return write({ ...value,...changes,status:value.status }); };
  return Object.freeze({
    read, patch,
    start() { if (owner() !== 'guest' && !read()) return write({version:3,status:'active',stage:'wait-question',seen:[],firstSessionPending:true}); },
    advance(stage) { if (read()?.status === 'active' && STAGES.has(stage)) return patch({stage}); },
    mark(id) { const value = read(); if (value?.status === 'active') patch({seen:[...new Set([...value.seen,id])]}); },
    has:id => Boolean(read()?.seen?.includes(id)),
    finish() { const value = read(); if (owner() !== 'guest' && value) return write({...value,version:3,status:'complete'}); },
    active:() => owner() !== 'guest' && read()?.status === 'active',
  });
}
