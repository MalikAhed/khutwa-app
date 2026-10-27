import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { createAppServer } from "./src/server/app-server.mjs";
import { readRuntimeConfig } from "./src/server/runtime-config.mjs";
import { Worker } from "node:worker_threads";
import { createCloudflareDevelopmentBackend } from './src/server/cloudflare-development.mjs';

const root=path.dirname(fileURLToPath(import.meta.url));
// Browser reloads alone leave Node's imported lesson catalog cached. Native
// watch mode restarts the API too, keeping validation in sync with the page.
if (process.env.LIVE_RELOAD !== "0" && process.env.LEARN_PREVIEW_WATCH_CHILD !== "1") {
  const child = spawn(process.execPath, ["--watch", "--watch-preserve-output", fileURLToPath(import.meta.url)], {
    cwd:root, stdio:"inherit", env:{...process.env, LEARN_PREVIEW_WATCH_CHILD:"1"},
  });
  process.on("SIGINT", () => child.kill("SIGINT"));
  process.on("SIGTERM", () => child.kill("SIGTERM"));
  child.on("error", error => { console.error(error); process.exitCode = 1; });
  child.on("exit", code => { process.exitCode = code ?? 0; });
} else {
  // The browser requests its catalog after startup; compile off the API thread.
  let catalogWorker, catalog;
  const contentManifest = () => catalog ||= new Promise(resolve => {
    catalogWorker = new Worker(new URL("./scripts/content-manifest.mjs", import.meta.url), { workerData:{root} });
    const receiveCatalog = message => {
      // Node watch mode also sends internal `watch:import` messages through
      // worker ports. Only the generated catalog may answer this HTTP request.
      if (!message?.version || !Array.isArray(message.onboarding) || !Array.isArray(message.lessons)) return;
      catalogWorker.off("message", receiveCatalog);
      resolve(message);
    };
    catalogWorker.on("message", receiveCatalog);
    catalogWorker.once("error", error => { console.warn("Content preload catalog unavailable:", error.message); resolve(null); });
  });
  const remoteBackend = process.env.LEARN_BACKEND === 'cloudflare'
    ? await createCloudflareDevelopmentBackend({ cachePath:path.join(root,'data/cloudflare-offline-profiles.json') }) : null;
  const environment = remoteBackend ? { ...process.env, ACCOUNTS_DATABASE_PATH:':memory:', DEV_AUTO_LOGIN:'0' } : process.env;
  const app=await createAppServer({root,config:readRuntimeConfig(environment,{root}),contentManifest,remoteBackend});
  const port=await app.listen();
  console.log(`Live preview: http://${remoteBackend ? '127.0.0.1' : 'localhost'}:${port}/`);
  if(remoteBackend)console.log('Real Cloudflare accounts; offline study uses the last verified account.');
  if(process.env.LIVE_RELOAD!=='0')console.log('Watching source files and preserving scroll position on reload.');
  const shutdown=()=>{ void catalogWorker?.terminate(); void app.close(); };
  process.on('SIGINT',shutdown);
  process.on('SIGTERM',shutdown);
}
