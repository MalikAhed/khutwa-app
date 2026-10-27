import { readFile, writeFile, mkdir, readdir, rm, cp, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { gzipSync } from "node:zlib";
import { build } from "esbuild";
import { COURSE_SUBJECTS } from "../src/data/course.js";
import { getSubjectRoadmap } from "../src/data/subject-roadmaps.js";
import { loadSubjectLesson, loadSubjectLessonPart } from "../src/data/lessons/subject-lesson-registry.js";
import { compileLessonMarkdown } from "../src/markdown/lesson-model.js";
import { interleaveSubjects } from "../src/services/download-queue.js";
import { studentDashboardPage } from "../src/server/student-dashboard.mjs";
import { applySecurityHeaders } from "../src/server/security-headers.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const webDirectory = path.join(root, "_site");
const digest = bytes => createHash("sha256").update(bytes).digest("hex").slice(0, 16);
const assetPattern = /assets\/[a-zA-Z0-9_./-]+\.(?:svg|webp|png|jpe?g|woff2?|ttf|json)/g;

export async function buildWeb({ mode = "fixture", analyticsToken = process.env.KHUTWA_ANALYTICS_TOKEN } = {}) {
  const out = webDirectory;
  await rm(out, { recursive:true, force:true });
  await mkdir(path.join(out, "content"), { recursive:true });
  const assets = new Set();
  const collect = text => { for (const match of text.matchAll(assetPattern)) assets.add(match[0]); };
  const sourceFiles = (await readdir(path.join(root, "src"), { recursive:true })).filter(file => /\.(js|css)$/.test(file) && !file.startsWith("server/"));
  let html = await readFile(path.join(root, "index.html"), "utf8");
  collect(html);
  for (const file of sourceFiles.filter(file => !file.startsWith("data/lessons/"))) collect(await readFile(path.join(root, "src", file), "utf8"));
  // Runtime-selected mascot and icon variants keep their existing stable URLs.
  for (const folder of ["app", "brand", "icons", "mascot", "fonts"]) {
    for (const file of await readdir(path.join(root, "assets", folder), { recursive:true }).catch(() => [])) {
      if (/\.(svg|webp|png|woff2?|ttf|json|txt)$/i.test(file)) assets.add(`assets/${folder}/${file}`);
    }
  }
  const lessons = [];
  const subjectKeys = [];
  let questionCount = 0;
  for (const subject of COURSE_SUBJECTS) {
    const keys = [];
    for (const item of getSubjectRoadmap(subject.id)?.units.flatMap(unit => unit.lessons) || []) {
      if (!item.parts?.length) continue;
      const lesson = await loadSubjectLesson(subject.id, item.id);
      if (!lesson?.authoringSource) continue;
      const steps = compileLessonMarkdown(lesson.authoringSource).parsed.steps.map(step => {
        // MCQ and written-question fields already contain the parsed source.
        // Keeping the raw directive as well would ship the same text twice.
        const { source, ...parsed } = step;
        return step.type === "markdown" ? step : parsed;
      });
      const parts = [];
      for (const part of item.parts) {
        const partLesson = await loadSubjectLessonPart(subject.id, item.id, part.id);
        parts.push({ id:part.id, stepIds:partLesson?.steps.map(step => step.id) || [] });
      }
      const key = `${subject.id}:${item.id}`;
      const record = { key, id:item.id, title:lesson.title, locale:lesson.locale || "ar", status:lesson.status, steps, parts };
      lessons.push(record);
      collect(JSON.stringify(steps));
      if (!item.hidden) keys.push(key);
      questionCount += steps.filter(step => step.type !== "markdown").length;
    }
    subjectKeys.push(keys);
  }
  const versions = new Map();
  const assetList = [...assets].sort();
  for (let index=0;index<assetList.length;index+=32) {
    const copied = await Promise.all(assetList.slice(index,index+32).map(async asset => {
      try {
        const bytes = await readFile(path.join(root,asset));
        const target = path.join(out,asset);
        await mkdir(path.dirname(target),{recursive:true});
        await writeFile(target,bytes);
        return [asset,`${asset}?v=${digest(bytes)}`];
      } catch(error) { if(error.code !== "ENOENT") throw error; return null; }
    }));
    for (const entry of copied) if (entry) versions.set(...entry);
  }
  const jsonWrites = new Map();
  const rewrite = text => text.replace(assetPattern, match => versions.get(match) || match);
  const putJson = async (prefix, value) => {
    const bytes = JSON.stringify(value);
    const name = `content/${prefix}.${digest(bytes)}.json`;
    jsonWrites.set(name,bytes);
    return name;
  };
  const catalog = { schema:1, lessons:{}, order:interleaveSubjects(subjectKeys), assets:[...versions.values()].filter(url => !url.startsWith("assets/lessons/")) };
  const seenQuestions = new Set();
  let largestQuestion = 0;
  for (const lesson of lessons) {
    const descriptors = [];
    for (const original of lesson.steps) {
      const step = JSON.parse(rewrite(JSON.stringify(original)));
      const url = await putJson("q", step);
      const used = [...new Set([...JSON.stringify(step).matchAll(/assets\/[a-zA-Z0-9_./-]+\.(?:svg|webp|png|jpe?g|woff2?|ttf|json)(?:\?v=[a-f0-9]{16})?/g)].map(match => match[0]))];
      for (const asset of used) if (!versions.has(asset.split("?")[0])) throw new Error(`Missing question asset: ${asset} (${step.id})`);
      descriptors.push({ id:step.id, type:step.type, ...(step.presentation ? { presentation:step.presentation } : {}), url, ...(used.length ? { assets:used } : {}) });
      if (step.type !== "markdown") seenQuestions.add(step.id);
      largestQuestion = Math.max(largestQuestion, Buffer.byteLength(JSON.stringify(step)));
    }
    const { key, steps, ...metadata } = lesson;
    const url = await putJson("lesson", { ...metadata, steps:descriptors });
    catalog.lessons[key] = url;
    if (key.startsWith("mathematics-2:")) catalog.lessons[key.replace("mathematics-2:", "mathematics:")] = url;
  }
  const catalogPath = await putJson("catalog", catalog);
  const jsonFiles = [...jsonWrites];
  for (let index=0;index<jsonFiles.length;index+=32)
    await Promise.all(jsonFiles.slice(index,index+32).map(([name,bytes])=>writeFile(path.join(out,name),bytes)));
  jsonWrites.clear();
  const registryShim = path.join(root, "src/data/lessons/subject-lesson-registry.js");
  const output = await build({
    absWorkingDir:root, entryPoints:["src/bootstrap.js","src/ui/student-dashboard.js"], outdir:path.join(out, "app"),
    bundle:true, splitting:true, format:"esm", platform:"browser", target:["es2022"],
    minify:true, charset:"utf8", entryNames:"[name]-[hash]", chunkNames:"[name]-[hash]", metafile:true,
    legalComments:"linked", plugins:[{
      name:"public-runtime",
      setup(builder) {
        builder.onResolve({ filter:/subject-lesson-registry\.js$/ }, args => ({ path:registryShim, namespace:"packaged-lessons" }));
        builder.onLoad({ filter:/.*/, namespace:"packaged-lessons" }, () => ({
          contents:'export { loadStreamedLesson as loadSubjectLesson } from "./src/services/lesson-content.js"; export async function loadSubjectLessonPart(){ throw new Error("Use the packaged lesson part index."); }',
          loader:"js", resolveDir:root,
        }));
        builder.onLoad({ filter:/\.js$/ }, async args => {
          if (!args.path.startsWith(path.join(root, "src"))) return;
          return { contents:rewrite(await readFile(args.path, "utf8")), loader:"js" };
        });
      },
    }],
  });
  const cssPaths = [...html.matchAll(/<link\b[^>]*href="(src\/styles\/[^"?]+)(?:\?[^"]*)?"[^>]*>/g)].map(match => match[1]);
  const css = await build({ absWorkingDir:root, stdin:{ contents:[...new Set(cssPaths)].map(file => `@import "./${file}";`).join("\n"), resolveDir:root, loader:"css" },
    bundle:true, minify:true, outdir:path.join(out,"app"), assetNames:"[name]-[hash]", entryNames:"styles-[hash]", metafile:true,
    loader:{ ".woff2":"file", ".woff":"file", ".ttf":"file", ".svg":"file", ".webp":"file", ".png":"file" },
  });
  const jsEntry = Object.entries(output.metafile.outputs).find(([, info]) => info.entryPoint === "src/bootstrap.js")[0];
  const cssEntry = Object.keys(css.metafile.outputs).find(file => file.endsWith(".css"));
  const relative = file => path.relative(out, path.resolve(root, file)).split(path.sep).join("/");
  const adminCss = await build({ absWorkingDir:root,entryPoints:["src/styles/student-dashboard.css"],bundle:true,minify:true,
    outdir:path.join(out,"app"),assetNames:"[name]-[hash]",entryNames:"admin-[hash]",metafile:true,
    loader:{ ".woff2":"file", ".woff":"file", ".ttf":"file", ".svg":"file", ".webp":"file", ".png":"file" },
  });
  const adminScript = Object.entries(output.metafile.outputs).find(([,info]) => info.entryPoint === "src/ui/student-dashboard.js")[0];
  const adminStyle = Object.keys(adminCss.metafile.outputs).find(file => file.endsWith(".css"));
  await writeFile(path.join(out,"admin.html"),rewrite(studentDashboardPage({script:`/${relative(adminScript)}`,style:`/${relative(adminStyle)}`})));
  html = html.replace(/<link\b[^>]*href="src\/styles\/[^>]+>\s*/g, "")
    .replace(/<script\b[^>]*src="src\/bootstrap\.js[^>]*><\/script>/, `<script type="module" src="${relative(jsEntry)}"></script>`)
    .replace(/<meta name="learn-account-mode" content="[^"]+"\s*\/>/, `<meta name="learn-account-mode" content="${mode}" />`)
    .replace(/<meta name="learn-release"[^>]*>/g, "")
    .replace("</head>", `<link rel="stylesheet" href="${relative(cssEntry)}" data-app-style />\n<meta name="khutwa-catalog" content="${catalogPath}" />\n</head>`);
  html = rewrite(html);
  if (mode !== "http") analyticsToken = null;
  if (analyticsToken) {
    if (!/^[a-f0-9]{32}$/i.test(analyticsToken)) throw new Error("Invalid public Cloudflare analytics token.");
    html = html.replace("</head>",`<meta name="khutwa-analytics" content="${analyticsToken}" />\n</head>`);
  }
  const version = digest(html + JSON.stringify(output.metafile.outputs) + catalogPath);
  html = html.replace("</head>", `<meta name="learn-release" content="${version}" />\n</head>`);
  await writeFile(path.join(out, "index.html"), html);
  await writeFile(path.join(out, "release.json"), JSON.stringify({ version }));
  const security = [];
  applySecurityHeaders({ setHeader:(key,value) => security.push(`  ${key}: ${value}`) },{ analytics:Boolean(analyticsToken) });
  await writeFile(path.join(out,"_headers"),`/*\n${security.join("\n")}\n\n/\n  Cache-Control: no-cache\n/index.html\n  Cache-Control: no-cache\n/admin.html\n  Cache-Control: no-store\n/release.json\n  Cache-Control: no-store\n/content/*\n  Cache-Control: public, max-age=31536000, immutable\n/app/*\n  Cache-Control: public, max-age=31536000, immutable\n/assets/*\n  Cache-Control: public, max-age=3600, must-revalidate\n`);
  await writeFile(path.join(out, ".nojekyll"), "\n");
  await mkdir(path.join(out, "licenses"), { recursive:true });
  for (const dependency of ["dompurify", "marked", "awesome-phonenumber", "@highlightjs/cdn-assets", "katex"]) {
    const folder = path.join(root, "node_modules", dependency);
    for (const file of await readdir(folder)) if (/^(LICENSE|LICENCE|NOTICE|COPYING)/i.test(file)) {
      await cp(path.join(folder, file), path.join(out, "licenses", dependency.replaceAll("/", "-") + "-" + file));
    }
  }
  const files = (await readdir(out, { recursive:true, withFileTypes:true })).filter(entry => entry.isFile());
  let bytes = 0;
  for (const file of files) bytes += (await stat(path.join(file.parentPath, file.name))).size;
  const report = { version, mode, files:files.length, bytes, canonicalQuestions:seenQuestions.size, placements:questionCount, lessons:lessons.length, largestQuestion, htmlGzip:gzipSync(html).length };
  await mkdir(path.join(root, "artifacts"), { recursive:true });
  await writeFile(path.join(root, "artifacts/build-web.json"), JSON.stringify(report, null, 2));
  await writeFile(path.join(root, "artifacts/build-web-metafile.json"), JSON.stringify(output.metafile));
  console.log(JSON.stringify(report, null, 2));
  return out;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await buildWeb({ mode:process.argv.includes("--production") ? "http" : "fixture" });
