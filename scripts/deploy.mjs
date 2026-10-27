import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { setTimeout } from 'node:timers/promises';

// Run only after the user says deploy. Commit the approved files first; this
// command deliberately cannot stage files, commit, reset, merge, or force-push.
const repo = 'MalikAhed/khutwa-app';
const workflow = 'cloudflare-pages.yml';
const args = process.argv.slice(2);
assert.ok(args.every(arg => arg === '--check'), 'Usage: npm run deploy [-- --check]');
const git = (...args) => execFileSync('git', args, { encoding:'utf8' }).trim();
const gh = (...args) => execFileSync('gh', args, { encoding:'utf8' }).trim();
assert.equal(git('branch', '--show-current'), 'main', 'Deploy from main after reviewing the approved changes');
assert.match(git('remote', 'get-url', 'origin'), /^(?:https:\/\/github\.com\/|git@github\.com:)MalikAhed\/khutwa-app(?:\.git)?$/, 'Wrong deployment repository');
assert.equal(git('status', '--porcelain'), '', 'Commit only the approved files; preserve unrelated work in its checkout');
gh('auth', 'status');
git('fetch', 'origin', 'main');
assert.equal(git('rev-list', '--count', 'HEAD..origin/main'), '0', 'Remote main changed; reconcile it before deploying');
const sha = git('rev-parse', 'HEAD');
assert.match(sha, /^[a-f0-9]{40}$/, 'Deploy requires a full commit SHA');
console.log(`Approved commit: ${sha}\n${git('diff', '--stat', 'origin/main..HEAD') || 'Already pushed; ready to deploy this commit.'}`);
if (!args.includes('--check')) {
  git('push', 'origin', 'HEAD:main');
  const listRuns = () => JSON.parse(gh('run', 'list', '--repo', repo, '--workflow', workflow,
    '--event', 'workflow_dispatch', '--limit', '20', '--json', 'databaseId,url,displayTitle'));
  const existingIds = new Set(listRuns().map(run => run.databaseId));
  const dispatched = gh('workflow', 'run', workflow, '--repo', repo, '--ref', 'main', '-f', `commit=${sha}`);
  const returnedUrl = dispatched.match(/https:\/\/github\.com\/MalikAhed\/khutwa-app\/actions\/runs\/(\d+)/);
  let run = returnedUrl && { url:returnedUrl[0], databaseId:returnedUrl[1] };
  // Older gh versions return no URL. Never mistake an earlier successful run
  // for this dispatch; match its immutable source and exclude existing runs.
  for (let attempt = 0; !run && attempt < 20; attempt++) {
    run = listRuns().find(candidate => !existingIds.has(candidate.databaseId) && candidate.displayTitle === `Deploy ${sha}`);
    if (!run) await setTimeout(2000);
  }
  if (!run) throw new Error('Deployment dispatched but its run was not found. Inspect GitHub Actions before retrying.');
  console.log(run.url);
  const result = spawnSync('gh', ['run', 'watch', String(run.databaseId), '--repo', repo, '--exit-status'], { stdio:'inherit' });
  assert.equal(result.status, 0, 'Deployment failed; inspect the failed step before retrying');
  console.log('Cloudflare workflow completed. Production routing and release checks passed.');
} else console.log('Preflight passed. Nothing pushed or deployed.');
