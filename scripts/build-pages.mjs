import path from "node:path";
import { copyFile, cp, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { buildCloudflare } from "./build-cloudflare.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const pagesRoutes = { version:1, include:["/api/*", "/students*", "/admin*"], exclude:[] };

export async function buildPages({ mode="staging" } = {}) {
  await buildCloudflare({ mode });
  const output = path.join(root, "_pages");
  await rm(output, { recursive:true, force:true });
  await cp(path.join(root, "_site"), output, { recursive:true });
  // The backend keeps its protected admin document. Never expose a static copy
  // on Pages, including if the provider's Function allowance is exhausted.
  await rm(path.join(output, "admin.html"));
  await copyFile(path.join(root, "src/server/cloudflare/pages.mjs"), path.join(output, "_worker.js"));
  await writeFile(path.join(output, "_routes.json"), JSON.stringify(pagesRoutes));
  // Avoid Pages' automatic SPA fallback returning HTML for missing JSON/assets.
  await writeFile(path.join(output, "404.html"), '<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><title>الصفحة غير موجودة</title><p>الصفحة غير موجودة. <a href="/">العودة إلى خطوة</a></p></html>');
  console.log(`Pages ${mode} frontend ready in _pages; backend remains in .cloudflare/output.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await buildPages({ mode:process.argv.includes("--production") ? "production" : "staging" });
}
