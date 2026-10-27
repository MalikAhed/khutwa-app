import assert from 'node:assert/strict';
import { cp, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { packageApp } from './package-app.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export async function prepareCloudflare(directory) {
  const htmlPath = path.join(directory, 'index.html');
  const html = (await readFile(htmlPath, 'utf8'))
    .replace('name="learn-account-mode" content="fixture"', 'name="learn-account-mode" content="http"');
  assert.match(html, /name="learn-account-mode" content="http"/, 'Cloudflare requires real accounts');
  await writeFile(htmlPath, html);
  // Wrangler omits node_modules; preserve the existing browser import URLs.
  await rename(path.join(directory, 'node_modules'), path.join(directory, 'assets/browser-libraries'));
  await writeFile(path.join(directory, '_redirects'), '/node_modules/* /assets/browser-libraries/:splat 200\n');
  await cp(path.join(root, '.github/cloudflare/worker.mjs'), path.join(directory, '_worker.js'));
  await cp(path.join(root, '.github/cloudflare/routes.json'), path.join(directory, '_routes.json'));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  // Keep the existing release hash algorithm; only hosting/account routing differs.
  const directory = await packageApp();
  await prepareCloudflare(directory);
  console.log('Cloudflare package ready: HTTP accounts, API and Students routes preserved.');
}
