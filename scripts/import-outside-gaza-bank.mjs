import assert from "node:assert/strict";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { OUTSIDE_GAZA_SUBJECTS } from "../src/data/lessons/outside-gaza/subjects.js";
import { createOutsideGazaLesson } from "../src/data/lessons/outside-gaza/lesson.js";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "src/data/lessons/outside-gaza");
const figuresDirectory = "assets/lessons/outside-gaza";
const batchSize = 30;
const totals = { scientific:{ mcq:2934, "exam-question":4255 }, literary:{ mcq:1943, "exam-question":3220 } };
const arabicNumber = new Intl.NumberFormat("ar-PS", { numberingSystem:"arab" });
const questionPattern = /^:::(?:mcq|exam-question)[ \t]*\n[\s\S]*?^:::[ \t]*$/gm;
const archive = process.argv[2];
assert.ok(archive, "Usage: node scripts/import-outside-gaza-bank.mjs <extracted-bank-directory>");

const ids = new Set();
const inputUnits = new Set();
const figures = new Map();
const modules = new Map();
const loaders = [];
const roadmaps = {};
const counts = {};

for (const [track, subjects] of Object.entries(OUTSIDE_GAZA_SUBJECTS)) {
  const count = counts[track] = { mcq:0, "exam-question":0 };
  // Scientific Math 2 reuses the original math bank and its saved identities.
  for (const subject of subjects.filter(item => item.slug !== "math-2")) {
    const groupNumber = number => subject.slug === "physics" ? String(number) : arabicNumber.format(number);
    const directory = path.join(archive, "questions", track, subject.slug);
    const unitNumbers = readdirSync(directory).map(file => {
      const match = /^unit-(\d+)\.md$/.exec(file);
      assert.ok(match, `Unexpected question file: ${directory}/${file}`);
      return Number(match[1]);
    }).sort((a, b) => a - b);
    const units = [];
    roadmaps[subject.id] = { subjectId:subject.id, questionsOnly:true, units };
    for (const number of unitNumbers) {
      const file = `${track}/${subject.slug}/unit-${number}.md`;
      inputUnits.add(file);
      const source = readFileSync(path.join(archive, "questions", file), "utf8").replace(/\r\n?/g, "\n")
        .replace(/(!\[[^\]\n]*\]\()(assets\/lessons\/([\w-]+\/source-crops\/[\w.-]+\.webp))(?=\))/g,
          (_, opening, original, relative) => {
            const destination = `${figuresDirectory}/${relative}`;
            figures.set(destination, original);
            return opening + destination;
          });
      const blocks = source.match(questionPattern) || [];
      const parsed = parseLessonMarkdown(source, { published:true });
      assert.deepEqual(parsed.issues, [], file);
      assert.equal(source.replace(questionPattern, "").trim(), "", `${file}: content outside question blocks`);
      assert.equal(blocks.length, parsed.steps.length, file);
      for (const step of parsed.steps) {
        assert.ok(step.id.startsWith(`${subject.id}-`) && !ids.has(step.id), `${file}: invalid or duplicate ID ${step.id}`);
        ids.add(step.id);
        count[step.type]++;
      }
      const unitId = `unit-${number}`;
      const unit = { id:unitId, label:`الوحدة ${groupNumber(number)}: أسئلة وتدريبات`, lessons:[] };
      units.push(unit);

      for (let start = 0; start < blocks.length; start += batchSize) {
        const group = start / batchSize + 1;
        const id = `${unitId}-practice-${group}`;
        const label = `المجموعة ${groupNumber(group)}`;
        const questionIds = parsed.steps.slice(start, start + batchSize).map(step => step.id);
        const markdown = blocks.slice(start, start + batchSize).join("\n\n");
        const meta = { id, title:`الوحدة ${groupNumber(number)} · ${label}`, locale:subject.locale };
        const lesson = createOutsideGazaLesson(meta, markdown);
        assert.deepEqual(lesson.steps.map(step => step.id), questionIds, `${file}: question order changed`);
        const module = `${track}/${subject.slug}/${id}.js`;
        modules.set(module, `import { createOutsideGazaLesson } from "../../lesson.js";\n\nexport default createOutsideGazaLesson(${JSON.stringify(meta)}, ${JSON.stringify(markdown)});\n`);
        loaders.push(`  ["${subject.id}:${id}", () => import("./outside-gaza/${module}")],`);
        unit.lessons.push({ id, label, pages:"", xp:0,
          parts:[{ id:"practice", label, pages:"", startStepId:questionIds[0], questionIds }] });
      }
    }
  }
  assert.deepEqual(count, totals[track], `${track}: archive totals differ from the supplied bank`);
}

const listFiles = directory => readdirSync(directory, { recursive:true, withFileTypes:true })
  .filter(entry => entry.isFile()).map(entry => path.relative(directory, path.join(entry.parentPath, entry.name))).sort();
assert.deepEqual(listFiles(path.join(archive, "questions")), [...inputUnits].sort());
assert.deepEqual(listFiles(path.join(archive, "assets")), [...figures.values()].map(file => file.slice("assets/".length)).sort());
for (const [destination, original] of figures) {
  assert.ok(existsSync(path.join(archive, original)), `Missing figure: ${original}`);
  mkdirSync(path.dirname(path.join(root, destination)), { recursive:true });
  copyFileSync(path.join(archive, original), path.join(root, destination));
}
for (const [module, source] of modules) {
  const destination = path.join(output, module);
  mkdirSync(path.dirname(destination), { recursive:true });
  writeFileSync(destination, source);
}
writeFileSync(path.join(output, "roadmaps.js"), `// Generated by scripts/import-outside-gaza-bank.mjs.\nexport const OUTSIDE_GAZA_ROADMAPS = Object.freeze({\n${Object.entries(roadmaps).map(([id, roadmap]) => `  "${id}":${JSON.stringify(roadmap)},`).join("\n")}\n});\n`);
writeFileSync(path.join(output, "../outside-gaza-loaders.js"), `// Generated by scripts/import-outside-gaza-bank.mjs.\nexport const OUTSIDE_GAZA_LOADERS = new Map([\n${loaders.join("\n")}\n]);\n`);
console.log(JSON.stringify({ counts, questions:ids.size, units:inputUnits.size, figures:figures.size, practiceGroups:modules.size }, null, 2));
