import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Explicit opt-in sandbox. Keep its origin and durable data separate from the
// real-account preview, so neither browser outboxes nor account IDs cross over.
const root=fileURLToPath(new URL('../',import.meta.url));
const port=Number(process.env.LESSON_PREVIEW_PORT || 4175);
if(!Number.isInteger(port)||port<1||port>65535||port===4173)
  throw new Error('Choose a lesson preview port other than the real-account port 4173.');
Object.assign(process.env,{
  PORT:String(port),
  LISTEN_HOST:'127.0.0.1',
  LEARN_BACKEND:'local',
  DEV_AUTO_LOGIN:'1',
  ACCOUNTS_DATABASE_PATH:path.join(root,'data','lesson-preview.sqlite'),
});
console.log('Isolated lesson testing: local test account, current lesson API, no Cloudflare writes.');
await import('../dev-server.mjs');
