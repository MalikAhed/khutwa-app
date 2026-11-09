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
      const preserveTypes = subject.id.startsWith("adabi-");
      const demo = selectLessonDemo(steps, { firstMcq:subject.id === "ict", preserveTypes });
      if (subject.id === "ict") assert.equal(demo.steps[0].id,steps.find(step => step.type === "mcq").id,"ICT starts with its first published MCQ");
      assert.deepEqual(demo.steps.map(step => step.type),preserveTypes
        ? [steps.some(step => step.type === "mcq") ? "mcq" : "exam-question"]
        : ["mcq","exam-question"],`${subject.id}/${item.id}`);
      for (const step of demo.steps) {
        if (step.type === "mcq") {
          assert.ok(step.content.answers.length >= 2);
          assert.equal(step.content.answers.filter(answer => answer.correct).length,1);
        } else assert.ok(step.content.body && step.content.finalAnswer);
        if (preserveTypes) assert.strictEqual(step,steps.find(source => source.id === step.id));
      }
      for (const source of demo.sources.values()) assert.ok(steps.some(step => step.id === source.stepId));
      assert.equal(JSON.stringify(steps),before);
      checked += 1;
    }
  }
  assert.ok(checked >= COURSE_SUBJECTS.length);
});

test("source-preserving demos keep a single written card without inventing an MCQ or distractors", () => {
  const card = { id:"original-written",type:"exam-question",content:{body:"Define the term.",finalAnswer:"The definition.",solution:"Source explanation."} };
  const demo = selectLessonDemo([card], {preserveTypes:true});
  assert.deepEqual(demo.steps,[card]);
  assert.strictEqual(demo.steps[0],card);
  assert.deepEqual([...demo.sources],[['original-written',{stepId:'original-written',type:'exam-question',save:true}]]);
  const sameAnswer = {...card,id:'another-written'};
  assert.deepEqual(selectLessonDemo([card,sameAnswer],{preserveTypes:true}).steps,[card]);
});

test("source-preserving demos prefer a real MCQ and keep its choices and source identity", () => {
  const mcq = {id:'original-choice',type:'mcq',content:{prompt:'Question',answers:[{id:'a',text:'Answer',correct:true},{id:'b',text:'Other',correct:false}]}};
  const card = {id:'original-card',type:'exam-question',content:{body:'Written question',finalAnswer:'Written answer'}};
  const demo = selectLessonDemo([card,mcq],{preserveTypes:true});
  assert.deepEqual(demo.steps,[mcq]);
  assert.strictEqual(demo.steps[0],mcq);
  assert.deepEqual(demo.sources.get(mcq.id),{stepId:mcq.id,type:'mcq',save:true});
});

test("showing an MCQ as a demo flashcard never claims its source question is correctly solved",() => {
  const source = { id:"original",type:"mcq",content:{ prompt:"Question",answers:[{ id:"a",text:"Answer",correct:true },{ id:"b",text:"Other",correct:false }] } };
  const demo = selectLessonDemo([source]);
  assert.equal(demo.sources.get(demo.steps[0].id).save,true);
  assert.deepEqual(demo.sources.get(demo.steps[1].id),{ stepId:"original",type:"mcq",save:false });
});


test("demo cards and fallback choices expose final answers, not worked explanations", () => {
  const cards = ["one", "two", "three"].map((id, index) => ({ id, type:"exam-question", content:{
    body:`Question ${index}`, finalAnswer:`**Answer ${index}**`, solution:`Worked explanation ${index}`,
  } }));
  const demo = selectLessonDemo(cards);
  assert.deepEqual(demo.steps[0].content.answers.map(answer => answer.text), cards.map(card => card.content.finalAnswer));
  assert.doesNotMatch(JSON.stringify(demo.steps[0]), /Worked explanation/);
  const mcq = { id:"choice", type:"mcq", content:{ prompt:"Question", correctFeedback:"Worked explanation", answers:[{ id:"a",text:"Final answer",correct:true },{id:"b",text:"Other",correct:false}] } };
  const card = selectLessonDemo([mcq]).steps[1];
  assert.equal(card.content.finalAnswer, "Final answer");
  assert.equal(card.content.solution, "Worked explanation");
});
