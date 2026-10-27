import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { BIOLOGY_LESSONS } from "../src/data/lessons/biology/biology-course.js";
import { loadSubjectLesson, loadSubjectLessonPart } from "../src/data/lessons/subject-lesson-registry.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";
import { getSubjectCardPresentation } from "../src/ui/course-map.js";

const coverage = JSON.parse(await readFile(new URL("../src/data/lessons/biology/source-coverage.json", import.meta.url)));

test("biology follows the Gaza packet's three units and nine chapters", () => {
  const roadmap = getSubjectRoadmap("biology");
  assert.deepEqual(roadmap.units.map(unit => unit.lessons.map(lesson => lesson.id)), [
    ["energy-flow", "gene-to-protein"],
    ["mendelian-inheritance", "non-mendelian-inheritance"],
    ["skeletal-system", "circulatory-system", "immune-system", "bacteria", "viruses"],
  ]);
  assert.deepEqual(roadmap.units.map(unit => unit.lessons.flatMap(lesson => lesson.parts).reduce((count, part) => count + part.questionIds.length, 0)), [497, 406, 324]);
  assert.equal(roadmap.units.flatMap(unit => unit.lessons).flatMap(lesson => lesson.parts).length, 30);
  const review = roadmap.units[1].lessons[1].parts.at(-1);
  assert.equal(review.id, "u02-10-integrated-genetics");
  assert.match(review.label, /^مراجعة:/);
  assert.equal(getSubjectCardPresentation({ id:"biology", name:"الأحياء", status:"available" }).totalCount, 1227);
});

test("the registered biology course includes exactly the ready collection, with stable part boundaries", async () => {
  const ids = [];
  const types = { mcq:0, "exam-question":0 };
  for (const catalog of BIOLOGY_LESSONS) {
    const lesson = await loadSubjectLesson("biology", catalog.id);
    const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
    assert.deepEqual(parsed.issues, [], catalog.id);
    const expected = catalog.parts.flatMap(part => part.questionIds);
    assert.deepEqual(parsed.steps.map(step => step.id), expected, catalog.id);
    assert.equal(expected.length, catalog.questionCount);
    assert.doesNotMatch(lesson.authoringSource, /\.\.\/assets\/|\.\.\/audit\//);
    for (const step of parsed.steps) types[step.type] += 1;
    ids.push(...expected);
    for (const part of catalog.parts) {
      const loaded = await loadSubjectLessonPart("biology", catalog.id, part.id);
      assert.deepEqual(loaded.steps.map(step => step.id), part.questionIds, part.id);
      assert.equal(loaded.reward, 0);
    }
  }
  const ready = coverage.items.filter(item => item.disposition === "included");
  assert.deepEqual([...ids].sort(), ready.map(item => item.id).sort());
  assert.equal(ids.length, new Set(ids).size);
  assert.deepEqual(types, { mcq:349, "exam-question":878 });
  const selected = new Set(ids);
  assert.equal(coverage.items.filter(item => item.disposition !== "included").some(item => selected.has(item.id)), false);
  for (const item of ready) {
    const mapping = coverage.integration.source_mapping.find(mapping => mapping.source_file === item.output_file);
    assert.equal(mapping.unit, Number(item.unit), item.id);
    const catalog = BIOLOGY_LESSONS.find(lesson => lesson.id === mapping.lesson_id);
    assert.ok(catalog.parts.find(part => part.id === mapping.part_id).questionIds.includes(item.id), item.id);
  }
  for (const id of ["past-papers-800", "tasnif-written", "human-systems", "microbes", "gene-protein", "mendelian", "non-mendelian", "microorganisms", "human-systems-review"]) {
    assert.equal(await loadSubjectLesson("biology", id), null);
  }
  assert.equal(await loadSubjectLessonPart("biology", "energy-flow", "energy-flow-practice"), null);
});

test("biology retains crop provenance and exclusions alongside the corrected explanation evidence", async () => {
  const manifest = JSON.parse(await readFile(new URL("../assets/lessons/biology/source-crops/sources.json", import.meta.url)));
  const referenced = new Set();
  for (const lesson of BIOLOGY_LESSONS) {
    const loaded = await loadSubjectLesson("biology", lesson.id);
    for (const match of loaded.authoringSource.matchAll(/!\[[^\]]*\]\((assets\/[^)]+)\)/g)) referenced.add(match[1]);
  }
  const evidence = JSON.parse(await readFile(new URL("../assets/lessons/curriculum-evidence/sources.json", import.meta.url)));
  const known = new Set([...manifest.map(crop => crop.file), ...evidence.assets.map(asset => asset.file)]);
  for (const file of referenced) {
    assert.ok(known.has(file), file);
    await access(new URL(`../${file}`, import.meta.url));
  }
  for (const crop of manifest) {
    await access(new URL(`../${crop.file}`, import.meta.url));
    assert.ok(crop.clips.every(clip => clip.page > 0 && clip.rect.length === 4 && clip.coordinateUnits === "pdf-points"));
  }
  const files = await readdir(new URL("../assets/lessons/biology/source-crops/", import.meta.url));
  assert.equal(files.filter(file => file.endsWith(".webp")).length, 100);
  assert.equal(coverage.completion.blocked, 16);
  assert.equal(coverage.completion.duplicates, 74);
  assert.equal(coverage.completion.handwritten, 145);
  assert.equal(coverage.completion.outside_book_scope, 381);
  assert.equal(coverage.completion.inventoried_source_items, 1227 + 16 + 74 + 145 + 381);
  assert.equal(coverage.integration.official_book_sha256, coverage.source_files.book.sha256);
});
