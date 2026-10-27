const STAGES = new Set(["level","streak","navigation","pick-subject","first-lesson","start-lesson","answer","check","rating","flashcard","flashcard-answer","celebration"]);

export function createFirstRunTourState({ service, storage = null }) {
  const memory = new Map();
  const owner = () => service.getLearnerProgressOwner();
  const key = () => `tawjihi:rocky-first-run:v1:${owner()}`;
  const read = () => {
    let value = memory.get(owner());
    if (!value) { try { value = JSON.parse(storage?.getItem(key()) || "null"); } catch { /* No saved tour. */ } }
    if (!value || ![1,2].includes(value.version) || !["active","complete"].includes(value.status)) return null;
    // Keep completed tours completed. An unfinished older tour joins the new
    // lesson-first flow without changing account or question identities.
    if (value.version === 1 && value.status === "active") {
      const legacy = { "solving-mcq":"answer",report:"rating","next-question":"rating","flipping-card":"flashcard","reading-card":"flashcard-answer" };
      value = { ...value,version:2,stage:legacy[value.stage] || (STAGES.has(value.stage) && !["level","streak","navigation"].includes(value.stage) ? value.stage : "answer") };
    }
    if (value.status === "active" && value.stage === "pick-subject") value = { ...value,stage:"answer" };
    if (value.status === "active" && !STAGES.has(value.stage)) return null;
    return { ...value };
  };
  const write = value => {
    memory.set(owner(),value);
    try { storage?.setItem(key(),JSON.stringify(value)); } catch { /* Continue this view without persistence. */ }
    return value;
  };
  return Object.freeze({
    read,
    start() { return write({ version:2,status:"active",stage:"answer" }); },
    advance(stage) {
      const previous = read();
      if (previous?.status !== "active" || !STAGES.has(stage)) return;
      return write({ ...previous,stage });
    },
    finish() { return write({ version:2,status:"complete" }); },
    active:() => owner() !== "guest" && read()?.status === "active",
  });
}
