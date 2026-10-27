import assert from "node:assert/strict";
import test from "node:test";
import { selectLessonDemo } from "../src/domain/lesson-demo.js";
import { COURSE_SUBJECTS } from "../src/data/course.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { loadSubjectLesson } from "../src/data/lessons/subject-lesson-registry.js";
import { compileLessonMarkdown } from "../src/markdown/lesson-model.js";

test("every published lesson supports an MCQ/flashcard demo without changing source order or identities",async () => {
  let checked = 0;
  for (const subject of COURSE_SUBJECTS) {
    for (const item of getSubjectRoadmap(subject.id)?.units.flatMap(unit => unit.lessons).filter(lesson => !lesson.hidden) || []) {
      const lesson = await loadSubjectLesson(subject.id,item.id);
      if (!lesson?.authoringSource) continue;
      const steps = compileLessonMarkdown(lesson.authoringSource).parsed.steps;
      const before = JSON.stringify(steps);
      const demo = selectLessonDemo(steps, { firstMcq:subject.id === "ict" });
      if (subject.id === "ict") assert.equal(demo.steps[0].id,steps.find(step => step.type === "mcq").id,"ICT starts with its first published MCQ");
      assert.deepEqual(demo.steps.map(step => step.type),["mcq","exam-question"],`${subject.id}/${item.id}`);
      assert.ok(demo.steps[0].content.answers.length >= 2);
      assert.equal(demo.steps[0].content.answers.filter(answer => answer.correct).length,1);
      assert.ok(demo.steps[1].content.body && demo.steps[1].content.solution);
      for (const source of demo.sources.values()) assert.ok(steps.some(step => step.id === source.stepId));
      assert.equal(JSON.stringify(steps),before);
      checked += 1;
    }
  }
  assert.ok(checked >= COURSE_SUBJECTS.length);
});

test("showing an MCQ as a demo flashcard never claims its source question is correctly solved",() => {
  const source = { id:"original",type:"mcq",content:{ prompt:"Question",answers:[{ id:"a",text:"Answer",correct:true },{ id:"b",text:"Other",correct:false }] } };
  const demo = selectLessonDemo([source]);
  assert.equal(demo.sources.get(demo.steps[0].id).save,true);
  assert.deepEqual(demo.sources.get(demo.steps[1].id),{ stepId:"original",type:"mcq",save:false });
});
