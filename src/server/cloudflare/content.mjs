import { questionExplanation } from "../../domain/question-explanations.js";
import { resolveQuestionLocation } from "../../domain/question-rewards.js";

export function createCloudContent(assets, catalogPath) {
  let catalog;
  const read = async path => {
    const response = await assets.fetch(new Request(`https://assets.internal/${path.replace(/^\//, "")}`));
    if (!response.ok) throw new Error("Published content is unavailable.");
    return response.json();
  };
  const loadIndex = async (subject, lesson) => {
    catalog ||= await read(catalogPath);
    const url = catalog.lessons[`${subject}:${lesson}`];
    return url ? read(url) : null;
  };
  return {
    async loadLessonPart(subject, lesson, partId) {
      const index = await loadIndex(subject,lesson);
      const part = index?.parts.find(part => part.id === partId);
      if (!part) return null;
      const ids = new Set(part.stepIds);
      return { status:index.status, steps:index.steps.filter(step => ids.has(step.id)).map(step => ({
        ...step, type:step.type === "mcq" ? "question" : step.type === "exam-question" ? "activity" : "content",
      })) };
    },
    async readExplanation(key) {
      const location = resolveQuestionLocation(key) || key;
      const index = await loadIndex(location.subjectId,location.lessonId);
      if (index?.status !== "published") return null;
      const step = index.steps.find(step => step.id === location.stepId);
      return step ? questionExplanation(await read(step.url)) : null;
    },
  };
}
