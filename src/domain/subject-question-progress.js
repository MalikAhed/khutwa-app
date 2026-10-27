// Only current questions contribute. Retired teaching and historical completion flags
// remain stored, but cannot fill a ring for newly added questions.
export function getLessonQuestionProgress(lesson, getPartProgress, getPartQuestionIds) {
  const parts = (lesson.parts || []).map(part => {
    const ids = [...new Set(part.questionIds || getPartQuestionIds?.(lesson, part) || [])];
    return { part, ids, record:getPartProgress?.(lesson, part) };
  });
  const currentIds = new Set(parts.flatMap(part => part.ids));
  const completed = new Set(), attempted = new Set();
  for (const { part, ids, record } of parts) {
    const canonicalId = id => {
      const alias = part.questionAliases?.[id];
      return alias && currentIds.has(alias) ? alias : ids.includes(id) ? id : null;
    };
    for (const id of record?.completedStepIds || []) {
      const canonical = canonicalId(id);
      if (canonical) completed.add(canonical);
    }
    for (const item of record?.review || []) {
      const canonical = canonicalId(item.stepId);
      if (!canonical) continue;
      attempted.add(canonical);
    }
  }
  for (const part of parts) {
    part.completed = part.ids.filter(id => completed.has(id));
    // Progress counts each answered question once; correctness only controls XP.
    part.solved = part.ids.filter(id => attempted.has(id) || completed.has(id));
  }
  const total = parts.reduce((sum, part) => sum + part.ids.length, 0);
  const solved = parts.reduce((sum, part) => sum + part.solved.length, 0);
  return {
    total, solved, percent:total ? solved / total * 100 : 0,
    completed:total > 0 && solved === total,
    nextPart:parts.find(part => part.completed.length < part.ids.length)?.part || parts[0]?.part,
  };
}
