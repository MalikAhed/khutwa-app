import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { access } from 'node:fs/promises';
import { createAppServer } from '../src/server/app-server.mjs';
import { readRuntimeConfig } from '../src/server/runtime-config.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = path.join(root, '_site');
await access(path.join(site, '_worker.js'));
const config = readRuntimeConfig({ ...process.env, PORT:process.env.PORT || '4174', LIVE_RELOAD:'0',
  ACCOUNTS_DATABASE_PATH:process.env.ACCOUNTS_DATABASE_PATH || path.join(root, 'data/preview.sqlite') }, { root });
// Exact packaged frontend, with disposable local Node accounts. Cloudflare's
// actual D1/Durable Object backend is exercised by the deployment preview.
const app = await createAppServer({ root:site, config });
app.server.prependListener('request', request => {
  if (request.url?.startsWith('/node_modules/')) {
    request.url = request.url.replace('/node_modules/', '/assets/browser-libraries/');
  }
});
console.log(`Packaged preview: http://localhost:${await app.listen()}/ (local test accounts)`);
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => { void app.close(); });
