import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const command = fileURLToPath(new URL('../scripts/deploy.mjs', import.meta.url));
const sha = 'a'.repeat(40);

async function runDeploy(t, { args = [], env = {} } = {}) {
  const directory = await mkdtemp(path.join(tmpdir(), 'khutwa-deploy-'));
  t.after(() => rm(directory, { recursive:true, force:true }));
  const log = path.join(directory, 'commands.jsonl');
  const stub = `#!${process.execPath}
import { appendFileSync, readFileSync } from 'node:fs';
import path from 'node:path';
const tool = path.basename(process.argv[1]);
const args = process.argv.slice(2);
appendFileSync(process.env.COMMAND_LOG, JSON.stringify([tool, ...args]) + '\\n');
const key = tool + ' ' + args.slice(0, 2).join(' ');
const sha = 'a'.repeat(40);
if (key === 'git branch --show-current') console.log('main');
else if (key === 'git remote get-url') console.log('https://github.com/MalikAhed/khutwa-app.git');
else if (key === 'git status --porcelain') console.log(process.env.DIRTY || '');
else if (key === 'git rev-list --count') console.log(process.env.BEHIND || '0');
else if (key === 'git rev-parse HEAD') console.log(sha);
else if (key === 'git diff --stat') console.log('1 file changed');
else if (key === 'gh run list') {
  const dispatched = readFileSync(process.env.COMMAND_LOG, 'utf8').includes('["gh","workflow","run"');
  const ids = dispatched ? [101, 102] : [101];
  console.log(JSON.stringify(ids.map(databaseId => ({ databaseId, displayTitle:'Deploy ' + sha,
    url:'https://github.com/MalikAhed/khutwa-app/actions/runs/' + databaseId }))));
} else if (key === 'gh workflow run') {
  if (process.env.RETURN_URL) console.log('https://github.com/MalikAhed/khutwa-app/actions/runs/102');
} else if (key === 'gh run watch') process.exit(Number(process.env.WATCH_EXIT || 0));
else if (!['git fetch origin', 'git push origin', 'gh auth status'].includes(key)) {
  console.error('Unexpected command:', key); process.exit(2);
}
`;
  await writeFile(path.join(directory, 'package.json'), '{"type":"module"}');
  for (const tool of ['git', 'gh']) await writeFile(path.join(directory, tool), stub, { mode:0o755 });
  const result = spawnSync(process.execPath, [command, ...args], {
    encoding:'utf8', env:{ ...process.env, ...env, PATH:`${directory}:${process.env.PATH}`, COMMAND_LOG:log },
  });
  const calls = (await readFile(log, 'utf8')).trim().split('\n').map(line => JSON.parse(line));
  return { ...result, calls };
}

test('preflight checks the source without pushing or dispatching', async t => {
  const result = await runDeploy(t, { args:['--check'] });
  assert.equal(result.status, 0, result.stderr);
  assert.ok(result.calls.every(call => !['push', 'workflow'].includes(call[1])));
});

test('deployment dispatches the exact approved source and ignores older successful runs', async t => {
  const result = await runDeploy(t);
  assert.equal(result.status, 0, result.stderr);
  assert.ok(result.calls.some(call => call[0] === 'git' && call[1] === 'push'));
  const dispatch = result.calls.find(call => call[1] === 'workflow');
  assert.ok(dispatch.includes(`commit=${sha}`));
  assert.deepEqual(result.calls.find(call => call[1] === 'run' && call[2] === 'watch').slice(0, 4),
    ['gh', 'run', 'watch', '102']);
  assert.ok(result.calls.every(call => call[1] !== 'api'), 'deploy never modifies the retired Pages configuration');
});

test('deployment watches the URL returned by gh and reports a failed run', async t => {
  const result = await runDeploy(t, { env:{ RETURN_URL:'1', WATCH_EXIT:'1' } });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Deployment failed/);
  assert.equal(result.calls.filter(call => call[1] === 'run' && call[2] === 'list').length, 1);
});

test('dirty or outdated source cannot be pushed or deployed', async t => {
  for (const env of [{ DIRTY:' M src/main.js' }, { BEHIND:'1' }]) {
    const result = await runDeploy(t, { env });
    assert.notEqual(result.status, 0);
    assert.ok(result.calls.every(call => !['push', 'workflow'].includes(call[1])));
  }
});
