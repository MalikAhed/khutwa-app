// Presentation-only selection: never sort or replace the published lesson's steps.
const plain = value => String(value || "").replace(/<[^>]*>|[*_`#]/g, "").replace(/\s+/g, " ").trim();
function complexity(step) {
  const content = step.content;
  const text = step.type === "mcq" ? content.prompt : `${content.body} ${content.solution}`;
  return plain(text).length + (content.answers || []).reduce((sum, answer) => sum + plain(answer.text).length, 0)
    + (text.match(/!\[|<math|\\frac|\\int|\\sum/g) || []).length * 300
    + (content.example ? 400 : 0);
}

export function selectLessonDemo(authoredSteps, { firstMcq = false } = {}) {
  const questions = authoredSteps.filter(step => ["mcq", "exam-question"].includes(step.type));
  if (!questions.length) throw new Error("The lesson has no questions for a demo.");
  const choose = type => questions.filter(step => step.type === type).sort((a, b) => complexity(a) - complexity(b))[0];
  let mcq = firstMcq ? questions.find(step => step.type === "mcq") : choose("mcq");
  let card = choose("exam-question");
  const sources = new Map();
  if (mcq) sources.set(mcq.id, { stepId:mcq.id, type:"mcq", save:true });
  else {
    const source = card;
    const correct = source.content.solution;
    const alternatives = [...new Set(questions.filter(step => step.id !== source.id)
      .sort((a, b) => complexity(a) - complexity(b)).map(step => step.content.solution))]
      .filter(answer => plain(answer) !== plain(correct)).slice(0, 3);
    mcq = { id:`demo-mcq-${source.id}`, type:"mcq", content:{
      prompt:source.content.body, title:source.content.title, reference:source.content.reference,
      answers:[correct, ...alternatives].map((text, index) => ({ id:`demo-option-${index}`, text, correct:index === 0 })),
      correctFeedback:"أحسنت!", wrongFeedback:"قارن إجابتك بالحل الصحيح.",
    } };
    sources.set(mcq.id, { stepId:source.id, type:"exam-question", save:true });
    // A second real card keeps the practice varied when the first was used as an MCQ.
    card = questions.filter(step => step.type === "exam-question" && step.id !== source.id)
      .sort((a, b) => complexity(a) - complexity(b))[0] || source;
  }
  if (card) sources.set(card.id, { stepId:card.id, type:"exam-question", save:true });
  else {
    const source = questions.filter(step => step.id !== mcq.id).sort((a, b) => complexity(a) - complexity(b))[0] || mcq;
    card = { id:`demo-card-${source.id}`, type:"exam-question", content:{
      title:source.content.title, body:source.content.prompt,
      solution:source.content.answers.find(answer => answer.correct).text,
      reference:source.content.reference,
    } };
    // Reading an MCQ as a flashcard must not mark its original MCQ correctly solved.
    sources.set(card.id, { stepId:source.id, type:"mcq", save:false });
  }
  return { steps:[mcq, card], sources };
}
