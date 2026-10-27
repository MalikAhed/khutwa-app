export const EXPLANATION_GEM_COST = 50;

// Reuse authored explanations; never manufacture a solution from an answer key.
export function questionExplanation(step) {
  const content = step?.content;
  const markdown = step?.type === "exam-question"
    ? content?.solution
    : content?.correctFeedback === "Correct." ? "" : content?.correctFeedback;
  return markdown?.trim() ? { markdown,note:"" } : null;
}
