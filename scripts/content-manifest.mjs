import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";
import { parentPort, workerData } from "node:worker_threads";
import { entryMarkup, registerMarkup, accountCompleteMarkup } from "../src/ui/visitor-flow-markup.js";
import { COURSE_SUBJECTS } from "../src/data/course.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { loadSubjectLesson, subjectLessonRegistry } from "../src/data/lessons/subject-lesson-registry.js";

// Generated from the published catalog, never from account/progress storage.
export async function createContentManifest(root) {
  const sources = new Map(), dependencies = new Map();
  const read = async file => {
    if (!sources.has(file)) sources.set(file, await readFile(path.join(root, file)));
    return sources.get(file).toString();
  };
  const assetFiles = (await readdir(path.join(root, "assets"), { recursive:true }))
    .filter(file => /\.(svg|webp|png|jpe?g|woff2?|ttf)$/.test(file)).map(file => `assets/${file}`);
  const assetSet = new Set(assetFiles);
  const media = value => {
    const text = typeof value === "string" ? value : JSON.stringify(value);
    return [...new Set([...text.matchAll(/assets\/[a-zA-Z0-9_./-]+\.(?:svg|webp|png|jpe?g|woff2?|ttf)/g)]
      .map(match => match[0]).filter(file => assetSet.has(file)))];
  };
  async function graph(file, result = new Set()) {
    if (result.has(file)) return result;
    result.add(file);
    if (!/\.(?:m?js|css)$/.test(file)) { await read(file); return result; }
    if (!dependencies.has(file)) {
      const source = await read(file);
      // Static dependencies only: lesson banks remain in their own queue stage.
      const imports = file.endsWith(".css")
        ? [...source.matchAll(/@import\s*(?:url\(\s*)?["']([^"']+)["']/g)].map(match => match[1])
        : ts.createSourceFile(file, source, ts.ScriptTarget.Latest).statements
          .filter(node => ts.isImportDeclaration(node) || ts.isExportDeclaration(node))
          .map(node => node.moduleSpecifier?.text).filter(Boolean);
      const files = imports.filter(value => value.startsWith(".") || value.startsWith("/"))
        .map(value => path.posix.normalize(value.startsWith("/") ? value.slice(1) : path.posix.join(path.posix.dirname(file), value)));
      if (file.endsWith(".css")) for (const match of source.matchAll(/url\(["']?([^\s)'"?]+)["']?\)/g)) {
        if (match[1].startsWith("data:")) continue;
        files.push(path.posix.normalize(path.posix.join(path.posix.dirname(file), match[1])));
      }
      dependencies.set(file, files);
    }
    for (const dependency of dependencies.get(file)) await graph(dependency, result);
    return result;
  }
  const shellFiles = (await readdir(path.join(root, "src"), { recursive:true }))
    .filter(file => /\.(js|css)$/.test(file) && !file.startsWith("server/") && !file.startsWith("data/lessons/"));
  const shell = new Set();
  for (const file of shellFiles) await graph(`src/${file}`, shell);
  await graph("src/data/lessons/subject-lesson-registry.js", shell);
  const uiText = [...sources.values()].map(source => source.toString()).join("\n") + await read("index.html");
  const helperMedia = new Set(media(uiText));
  helperMedia.add("assets/app/manifest.json");
  // These names are composed at runtime by onboarding and celebration controls.
  for (const file of assetFiles) if (/^assets\/mascot\/rocky-[^/]+\.svg$/.test(file)
    || /^assets\/icons\/streak-fire-burning/.test(file) || /^assets\/(subjects|app)\//.test(file)) helperMedia.add(file);
  const onboarding = [...await graph("src/ui/visitor-flow.js"), ...media(entryMarkup() + registerMarkup() + accountCompleteMarkup())];
  const helpers = [...shell, ...helperMedia];
  const subjects = [];
  for (const subject of COURSE_SUBJECTS) {
    const lessons = [];
    for (const item of getSubjectRoadmap(subject.id)?.units.flatMap(unit => unit.lessons) || []) {
      if (item.hidden || item.optional || !item.parts?.length) continue;
      const loader = subjectLessonRegistry.get(`${subject.id}:${item.id}`);
      const module = loader?.toString().match(/import\(["']([^"']+)["']\)/)?.[1];
      const entry = module ? path.posix.join("src/data/lessons", module) : "src/data/lessons/islamic-education/islamic-bank.js";
      const modules = [...await graph(entry)];
      if (subject.id === "ict") modules.push(...await graph("src/data/lessons/ict/exam-lessons.js"));
      const lesson = await loadSubjectLesson(subject.id, item.id);
      if (!lesson) continue;
      const firstStep = lesson.steps.find(step => step.type === "question" || step.type === "activity") || lesson.steps[0];
      lessons.push({ subjectId:subject.id, lessonId:item.id,
        first:[...new Set([...modules, ...media(firstStep)])],
        files:[...new Set([...modules, ...media(lesson)])] });
    }
    subjects.push(lessons);
  }
  // First lesson of every subject, then second, third, and so on.
  const lessons = [];
  for (let index = 0; index < Math.max(...subjects.map(items => items.length)); index++)
    for (const items of subjects) if (items[index]) lessons.push(items[index]);
  const files = [...new Set([...onboarding, ...helpers, ...lessons.flatMap(lesson => lesson.files)])];
  const hash = createHash("sha256");
  for (const file of files.sort()) { await read(file); hash.update(file).update(sources.get(file)); }
  return { version:hash.digest("hex").slice(0,16), onboarding, helpers, lessons };
}

export function versionContentManifest(manifest, version) {
  const urls = files => files.map(file => /\.(m?js|css)$/.test(file) ? `${file}?v=${version}` : file);
  return { version, onboarding:urls(manifest.onboarding), helpers:urls(manifest.helpers),
    lessons:manifest.lessons.map(lesson => ({ ...lesson, first:urls(lesson.first), files:urls(lesson.files) })) };
}

if (parentPort && workerData?.root) parentPort.postMessage(await createContentManifest(workerData.root));
