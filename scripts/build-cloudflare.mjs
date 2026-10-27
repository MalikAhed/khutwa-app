import path from "node:path";
import { mkdir, readFile, readdir, copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { loadAndParseConfig } from "@cloudflare/config";
import { cleanBuildOutputDir, getWorkerBundleDir, getWorkerAssetsDir, writeWorkerConfig, writeRootConfig, readBuildOutput } from "@cloudflare/build-output-utils";
const webDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../_site");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
export async function buildCloudflare({ mode = "staging", rebuildWeb = true } = {}) {
  if (!["staging","production"].includes(mode)) throw new Error("Choose staging or production.");
  if (rebuildWeb) {
    const { buildWeb } = await import("./build-web.mjs");
    await buildWeb({ mode:"http",analyticsToken:mode === "production" ? "c20a760662544cff96a7ab44dff11e8e" : null });
  }
  const html = await readFile(path.join(webDirectory,"index.html"),"utf8");
  if (!html.includes('name="learn-account-mode" content="http"')) throw new Error("Cloud hosting requires real account mode.");
  const catalog = /name="khutwa-catalog" content="([^"]+)"/.exec(html)?.[1];
  if (!catalog) throw new Error("Missing packaged lessons.");
  const context = { mode,isPreview:false };
  const { result } = await loadAndParseConfig(path.join(root,"cloudflare.config.ts"),context);
  if (!result.success) throw result.error;
  const { worker,containers,...settings } = result.data;
  await cleanBuildOutputDir(root);
  const bundle = getWorkerBundleDir(root);
  await mkdir(bundle,{ recursive:true });
  await build({
    absWorkingDir:root, entryPoints:[worker.entrypoint],outfile:path.join(bundle,"index.mjs"),
    bundle:true,format:"esm",platform:"node",target:"es2022",minify:true,
    external:["cloudflare:workers","node:*"],define:{ KHUTWA_CATALOG:JSON.stringify(catalog) },
    plugins:[{
      name:"cloud-content-provider",
      setup(builder) {
        // API factories receive the packaged content provider. Never embed the
        // complete question banks or Markdown compiler in the Worker bundle.
        builder.onResolve({filter:/subject-lesson-registry\.js$|question-explanations\.mjs$/},() => ({path:"source-content",namespace:"cloud-content"}));
        builder.onLoad({filter:/.*/,namespace:"cloud-content"},() => ({contents:'const missing=()=>{throw new Error("Packaged content provider required.")}; export { missing as loadSubjectLessonPart, missing as readQuestionExplanation };',loader:"js"}));
      },
    }],
  });
  // Bounded parallel copies avoid thousands of serial filesystem round trips.
  const assetsDirectory = getWorkerAssetsDir(root);
  const entries = await readdir(webDirectory,{recursive:true,withFileTypes:true});
  await mkdir(assetsDirectory,{recursive:true});
  const target = entry => path.join(assetsDirectory,path.relative(webDirectory,path.join(entry.parentPath,entry.name)));
  await Promise.all(entries.filter(entry=>entry.isDirectory()).map(entry=>mkdir(target(entry),{recursive:true})));
  const files = entries.filter(entry=>entry.isFile());
  for (let index=0;index<files.length;index+=32) await Promise.all(files.slice(index,index+32).map(entry=>copyFile(path.join(entry.parentPath,entry.name),target(entry))));
  await writeWorkerConfig({ root,config:worker,manifest:{type:"complete",mainModule:"index.mjs",modules:{"index.mjs":{type:"esm"}}} });
  await writeRootConfig(root,settings,context);
  await readBuildOutput(root);
  console.log(`Cloudflare ${mode} build validated: ${worker.name}.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await buildCloudflare({ mode:process.argv.includes("--production") ? "production" : "staging",rebuildWeb:!process.argv.includes("--reuse-web") });
}
