import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import test from "node:test";
import katex from "../assets/vendor/katex/katex.mjs";
import { CHEMISTRY_LESSONS } from "../src/data/lessons/chemistry/chemistry-course.js";
import { loadSubjectLesson, loadSubjectLessonPart, subjectLessonRegistry } from "../src/data/lessons/subject-lesson-registry.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { getSubjectCardPresentation } from "../src/ui/course-map.js";

const coverage = JSON.parse(await readFile(new URL("../src/data/lessons/chemistry/source-coverage.json", import.meta.url)));

test("chemistry publishes the replacement collection in its three-unit, 21-lesson order", () => {
  const roadmap = getSubjectRoadmap("chemistry");
  assert.deepEqual(roadmap.units.map(unit => unit.lessons.length), [6, 7, 8]);
  assert.deepEqual(roadmap.units.map(unit => unit.lessons.flatMap(lesson => lesson.parts).reduce((count, part) => count + part.questionIds.length, 0)), [438, 245, 229]);
  assert.deepEqual(roadmap.units.flatMap(unit => unit.lessons).map(lesson => lesson.id), coverage.integration.lessons.map(lesson => lesson.lesson_id));
  assert.equal(getSubjectCardPresentation({ id:"chemistry", name:"الكيمياء", status:"available" }).totalCount, 912);
  assert.deepEqual([...subjectLessonRegistry.keys()].filter(key => key.startsWith("chemistry:")), CHEMISTRY_LESSONS.map(lesson => `chemistry:${lesson.id}`));
});

test("registered chemistry lessons and practice parts contain exactly the usable source questions", async () => {
  const ids = [];
  const types = { mcq:0, "exam-question":0 };
  for (const catalog of CHEMISTRY_LESSONS) {
    const lesson = await loadSubjectLesson("chemistry", catalog.id);
    const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
    assert.deepEqual(parsed.issues, [], catalog.id);
    assert.deepEqual(parsed.steps.map(step => step.id), catalog.questionIds, catalog.id);
    assert.equal(parsed.steps.length, catalog.questionCount);
    assert.deepEqual(catalog.questionIds, coverage.integration.lessons.find(lesson => lesson.lesson_id === catalog.id).question_ids);
    const part = await loadSubjectLessonPart("chemistry", catalog.id, `${catalog.id}-practice`);
    assert.deepEqual(part.steps.map(step => step.id), catalog.questionIds);
    assert.equal(part.reward, 0);
    for (const step of parsed.steps) types[step.type] += 1;
    ids.push(...catalog.questionIds);
  }
  assert.equal(ids.length, new Set(ids).size);
  assert.equal(ids.length, 912);
  assert.deepEqual(types, { mcq:384, "exam-question":528 });
  assert.deepEqual([...ids].sort(), coverage.items.filter(item => item.disposition === "included").map(item => item.id).sort());
  const selected = new Set(ids);
  assert.ok(coverage.items.filter(item => item.disposition !== "included").every(item => !selected.has(item.id)));
  assert.equal(coverage.counts.inventoried_source_items, ids.length + coverage.counts.duplicate_occurrences + coverage.counts.blocked_items);
  assert.equal(coverage.blocked_items.length, 16);
  for (const id of ["electronic-structure", "periodic-bonding", "acids-bases", "thermodynamics-kinetics", "organic-compounds", "galvanic-cells"]) {
    assert.equal(await loadSubjectLesson("chemistry", id), null);
  }
});

test("chemistry keeps original crop coordinates and verified corrected explanation evidence", async () => {
  const manifest = JSON.parse(await readFile(new URL("../assets/lessons/chemistry/source-crops/sources.json", import.meta.url)));
  const referenced = new Set();
  for (const catalog of CHEMISTRY_LESSONS) {
    const lesson = await loadSubjectLesson("chemistry", catalog.id);
    assert.doesNotMatch(lesson.authoringSource, /assets\/source-crops\/|al-tasnif/i);
    for (const match of lesson.authoringSource.matchAll(/!\[[^\]]*\]\((assets\/[^)]+)\)/g)) referenced.add(match[1]);
  }
  const evidence = JSON.parse(await readFile(new URL("../assets/lessons/curriculum-evidence/sources.json", import.meta.url)));
  const known = new Set([...manifest.crops.map(crop => crop.file), ...evidence.assets.map(asset => asset.file)]);
  for (const file of referenced) {
    assert.ok(known.has(file), file);
    await access(new URL(`../${file}`, import.meta.url));
  }
  for (const crop of manifest.crops) {
    await access(new URL(`../${crop.file}`, import.meta.url));
    assert.ok(crop.reviewed && crop.clips.every(clip => clip.page > 0 && clip.rect.length === 4 && clip.coordinateUnits === "pixels"));
  }
  const files = await readdir(new URL("../assets/lessons/chemistry/source-crops/", import.meta.url));
  assert.equal(files.filter(file => file.endsWith(".webp")).length, 76);
  assert.equal(coverage.integration.excluded_crops.crops.length, 5);
  assert.equal(files.includes("al-tasnif"), false);
});

test("every chemistry formula renders under the app's strict math settings", async () => {
  let expressions = 0;
  let finalAnswerExpressions = 0;
  const formulas = source => source.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$/g);
  for (const catalog of CHEMISTRY_LESSONS) {
    const lesson = await loadSubjectLesson("chemistry", catalog.id);
    for (const step of parseLessonMarkdown(lesson.authoringSource, { published:true }).steps) {
      if (step.type === "exam-question") finalAnswerExpressions += [...formulas(step.content.finalAnswer)].length;
    }
    for (const match of formulas(lesson.authoringSource)) {
      assert.doesNotThrow(() => katex.renderToString(match[1] ?? match[2] ?? match[3], {
        output:"mathml", throwOnError:true, strict:"error", trust:false, maxExpand:1000, maxSize:20,
      }), `${catalog.id}: ${match[0]}`);
      expressions += 1;
    }
  }
  assert.equal(expressions - finalAnswerExpressions, 2313, "question and explanation formulas include the native structures in all five organic-table questions");
  assert.ok(finalAnswerExpressions > 0, "final-answer formulas also pass strict rendering");
  for (const change of coverage.integration.math_notation.adaptations.filter(change => change.original.includes("فوتون"))) {
    assert.match(katex.renderToString(change.adapted, { output:"mathml", strict:"error" }), /<mtext>فوتون<\/mtext>/);
  }
});
