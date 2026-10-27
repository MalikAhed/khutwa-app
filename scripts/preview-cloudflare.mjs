import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { access } from 'node:fs/promises';
import { createAppServer } from '../src/server/app-server.mjs';
import { readRuntimeConfig } from '../src/server/runtime-config.mjs';
import { createCloudflareDevelopmentBackend } from '../src/server/cloudflare-development.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = path.join(root, '_site');
await access(path.join(site, '_worker.js'));
const config = readRuntimeConfig({ ...process.env, PORT:process.env.PORT || '4174', LIVE_RELOAD:'0',
  ACCOUNTS_DATABASE_PATH:':memory:', DEV_AUTO_LOGIN:'0' }, { root });
const remoteBackend = await createCloudflareDevelopmentBackend({ cachePath:path.join(root,'data/cloudflare-offline-profiles.json') });
const app = await createAppServer({ root:site, config, remoteBackend });
app.server.prependListener('request', request => {
  if (request.url?.startsWith('/node_modules/')) {
    request.url = request.url.replace('/node_modules/', '/assets/browser-libraries/');
  }
});
console.log(`Packaged preview: http://127.0.0.1:${await app.listen()}/ (real Cloudflare accounts)`);
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => { void app.close(); });
