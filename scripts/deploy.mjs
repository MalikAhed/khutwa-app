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
const changed = git('diff', '--name-only', 'origin/main..HEAD').split('\n').filter(Boolean);
const docsOnly = changed.length > 0 && changed.every(file => /^(?:docs\/|tests\/)|\.md$/.test(file));
console.log(`Approved commit: ${sha}\n${git('diff', '--stat', 'origin/main..HEAD') || 'Already pushed; checking its deployment.'}`);
if (!args.includes('--check')) {
  git('push', 'origin', 'HEAD:main');
  // One-time source migration: preserve the old mirror URL with a redirect.
  // Subsequent releases leave this setting alone.
  const pages = JSON.parse(gh('api', `repos/${repo}/pages`));
  if (pages.source?.branch !== 'main' || pages.source?.path !== '/docs') {
    gh('api', '--method', 'PUT', `repos/${repo}/pages`,
      '-f', 'source[branch]=main', '-f', 'source[path]=/docs');
    console.log('GitHub Pages mirror now points to the Cloudflare redirect.');
  }
  if (docsOnly) {
    console.log('Documentation/tests pushed. No website deployment is needed.');
    process.exit(0);
  }
  let run;
  for (let attempt = 0; attempt < 20; attempt++) {
    [run] = JSON.parse(gh('run', 'list', '--repo', repo, '--workflow', workflow, '--commit', sha,
      '--limit', '1', '--json', 'databaseId,url,status,conclusion'));
    if (run) break;
    await setTimeout(2000);
  }
  if (!run) throw new Error('No deployment run found. Documentation-only pushes intentionally skip deployment; otherwise inspect GitHub Actions.');
  console.log(run.url);
  const result = spawnSync('gh', ['run', 'watch', String(run.databaseId), '--repo', repo, '--exit-status'], { stdio:'inherit' });
  assert.equal(result.status, 0, 'Deployment failed; inspect the failed step before retrying');
  console.log('Cloudflare workflow completed. Production routing and release checks passed.');
} else console.log('Preflight passed. Nothing pushed or deployed.');
