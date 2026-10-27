# Development and deployment

## One active project

| Item | Value |
| --- | --- |
| Main source repo | `MalikAhed/khutwa-app`, branch `main` |
| Local checkout | `/home/malikabuallatta/experiment-app/khutwa-app` |
| Production URL | `https://khutwaa.pages.dev` |
| Pages project / account | `khutwaa` / `f6200f8f16ec1abc5f7fb7768f2ffd7f` |
| Deploy owner | `.github/workflows/cloudflare-pages.yml` |
| Real backend | `khutwa-app` Worker, through the Pages `BACKEND` service binding |
| Preview backend | `khutwa-app-staging`, through preview `BACKEND` |

The old `tawjihi-learning-app` GitHub repository and sibling `learn/` checkout are history/reference, not deployment targets. Prefer archiving the old repo after all needed history/work is retained; do not delete it or its local data as routine cleanup.

The migration baseline is commit `845f57932c58cbb7933b156cddaaa3560ccb1936`, runtime release `acff67f262f3c107`, Cloudflare deployment `07642155-26ff-4fa5-9b05-461a627adcec`. The local tag `production-baseline-2026-10-27` retains the published artifact. `.production/` holds ignored recovery evidence. Baseline values are historical, not hardcoded targets for future deployments.

## Daily development

Use Node 24, run `npm ci` once, then `npm run dev` at port 4173. Dependencies need reinstalling only when the lockfile changes. `npm run map -- <topic>` identifies the owner and focused tests. `npm run check` covers changed JS syntax and types; `CHECK_BASE=<commit>` compares against another commit, and `npm run check:syntax -- --all` explicitly scans every module.

Local accounts live in ignored `data/accounts.sqlite`. Packaged previews use separate `data/preview.sqlite`:

```sh
npm run package:cloudflare
npm run preview:cloudflare
```

The packaged frontend is served at port 4174 with the same public library URLs. Both local modes use the Node/SQLite API adapter; they never sign into or copy live student accounts. The actual Cloudflare backend is tested by the staging deployment. To run a focused browser test, install Chromium once with `npx playwright install chromium`; do not reinstall browsers or run the full matrix for every task.

## After Malik says deploy

1. Review only the approved changes; preserve unrelated work. Stage explicit files and commit on `main`.
2. Run `npm run deploy`. It checks the repo, branch and clean tree, fetches remote main, refuses to overwrite newer remote work, pushes, then follows the exact commit's workflow. `npm run deploy -- --check` performs preflight without pushing.
3. The workflow runs quick checks and builds `_site/` once. It verifies a staging deployment before publishing the same files to production. Final checks use the production URL.
4. Report success only after the workflow finishes and live checks pass. Use `npm run deploy:status` for status; use `gh run view <id> --log-failed` for a failed step. Do not rerun unrelated suites.

Documentation/test-only pushes skip deployment. Full suites remain optional through `check:full`, `verify:full`, `release:full`. No browser download, cross-browser matrix or repository-size audit runs in the normal release pipeline. Source and developer docs are pushed to GitHub; only packaged runtime assets go to Cloudflare. Git sends changed Git objects; asset versioning remains intact so updated files cannot mix with stale cached modules.

GitHub Pages was a fixture-only mirror. On the first approved deployment, `npm run deploy` sets that repository's Pages source to `main:/docs`; `docs/index.html` redirects the old mirror URL to Cloudflare. Do not serve the editable root as a fixture app or remove the old URL. This is a one-time setting, separate from production deployment.

## Accounts and hosting boundary

Production HTML must contain `learn-account-mode=http`. The Pages Worker forwards `/api/*` **and `/students`** to the existing `BACKEND`, preserving the request/cookies. Assets come from Pages. `_redirects` maps `/node_modules/*` to `/assets/browser-libraries/:splat` because Wrangler omits node_modules directories.

Real accounts and progress live in the backend Worker, using the `ACCOUNTS` D1 binding and `AUTH` / `STUDENTS` Durable Objects. Frontend publication does not recreate or migrate those stores. Browser progress/outbox storage is separate from the public lesson cache. Never reset accounts to fix a login or cache issue.

`src/server/` implements local Node/SQLite behavior. The deployed Worker bundle was preserved locally under `.production/backend/` for recovery; its editable original is not yet part of this repo. A backend feature requires locating/reconstructing that source and testing against the staging Worker before an explicit backend deployment. Never run a generic `wrangler deploy` against production from this frontend repo. The duplicate “Workers Builds: khutwa-app” auto-build trigger was disconnected on 2026-10-27; its configuration is saved in `.production/worker-build-trigger.json`. The Worker itself remains deployed. Pages Actions is the sole frontend deployment owner.

## Access is already set up

- Normal deployment uses `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in GitHub Actions secrets. No token files or manual dashboard login are needed per release.
- Cloudflare MCP is configured globally as `cloudflare` and was verified connected. Discover its `execute`, `search`, `docs`, `whoami` tools when account inspection is needed. New sessions should reuse it. Only an actual expired/revoked login needs `codex mcp login cloudflare`.
- GitHub CLI is authenticated. Use `gh auth status` for a read-only check; never dump credentials.
- Saved access can expire or be revoked. A permanent, unrevocable connection is neither available nor required for this workflow.

## Recovery

Preview failures stop before production. If a production deployment is broken, inspect the failed checks and use Cloudflare Pages rollback to the last known-good production deployment through the already-connected MCP. Preserve `BACKEND` and the D1/Durable Object bindings. Record the rollback commit and then fix forward; do not force-push or clear student storage.

Local SQLite maintenance commands below apply only to a local Node database, not Cloudflare D1:

```sh
npm run database:backup -- /absolute/accounts.sqlite /absolute/backups/new-copy.sqlite
npm run database:restore-check -- /absolute/backups/new-copy.sqlite
npm run database:migrate-check -- /absolute/accounts.sqlite
npm run owner -- grant USERNAME /absolute/accounts.sqlite
```

`owner -- create USERNAME /absolute/accounts.sqlite` reads a password from stdin. `database:reset -- /absolute/disposable.sqlite --confirm` is destructive and only for a specifically authorized disposable test database. Never repurpose it for live accounts. Back up before any real schema/data change; keep the original database/WAL together.
