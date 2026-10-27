# Development and deployment

## Sources of truth

| Item | Value |
| --- | --- |
| Source | `MalikAhed/khutwa-app`, branch `main` |
| Local checkout | `/home/malikabuallatta/experiment-app/khutwa-app` |
| Production | `https://khutwaa.pages.dev` |
| Pages project / account | `khutwaa` / `f6200f8f16ec1abc5f7fb7768f2ffd7f` |
| Deployment owner | `.github/workflows/cloudflare-pages.yml`, explicitly dispatched |
| Account backend | `khutwa-app` Worker; preview uses `khutwa-app-staging` |

The sibling `learn/` contains unpublished legacy work and local data. Preserve it; do not reset, delete or deploy it. Recovery snapshots under ignored `.production/` and the local `production-baseline-2026-10-27` tag are historical, not current release targets.

## Local development

Use Node 24. Run `npm ci` only initially or after the lockfile changes, then `npm run dev` at `http://127.0.0.1:4173`. Use `npm run map -- <topic>` to find owners and focused tests. `npm run check` parses changed JS and checks existing types; `CHECK_BASE=<commit>` changes the comparison baseline. `npm run check:syntax -- --all` parses every module without executing it.

Default local development proxies real account/API/Students requests to Cloudflare while serving frontend files from disk. Local study/admin actions can affect live data. Localhost redirects to the numeric loopback address to isolate former test-account storage. The proxy uses its own HttpOnly cookie and rejects cross-site requests.

During an outage, an account verified within 30 days can resume study. The ignored `data/cloudflare-offline-profiles.json` stores minimal profiles keyed by session-token hashes, not passwords/raw tokens/student lists. The browser's account-bound outbox retains answers for retry. New sign-in and admin access require internet; sign-out or an online expired-session response removes fallback access.

`npm run dev:local` selects the preserved SQLite test database. Automated tests use isolated databases/mocked upstreams, never real accounts. Do not run a fixture server on the real-account preview address in a normal browser profile. Install Chromium only when a relevant browser check needs it.

To inspect the packaged frontend, run `npm run package:cloudflare` then `npm run preview:cloudflare` at port 4174. Ordinary local edits do not need packaging.

## Approval → push; deploy → publish

1. Review the scoped diff and run relevant local checks. Stage explicit approved paths and commit. **Approved/push** authorizes `git push origin main`; it does not publish.
2. **Deploy/publish** authorizes `npm run deploy`. It requires the correct repo, `main`, and a clean tree, fetches remote main, refuses to overwrite newer work, pushes, explicitly dispatches the full approved commit SHA, and follows that run. `-- --check` performs preflight without pushing or dispatching. Use an isolated checkout when unrelated edits prevent a clean release.
3. GitHub checks out that commit, parses syntax, checks types and deployment behavior, then builds `_site/` once. It verifies the staging account connection before publishing the same build. Final checks verify production's release, lesson catalog, runtime samples, browser libraries, anonymous account API and protected Students route.
4. Report the commit and successful run only after live checks pass. Use `npm run deploy:status` or `gh run view <id> --log-failed`; fix the failed step without restarting unrelated suites.

Pushes never trigger a release, including docs/tests-only pushes. PRs run fast checks. Full Node/content/browser/compatibility suites remain opt-in through `check:full`, `verify:full`, `release:full`. The deployment parses all JS once so earlier approved commits cannot escape syntax checking; it does not download test browsers.

Git pushes changed objects. Pages uploads a complete file manifest and [reuses assets already stored by Cloudflare](https://developers.cloudflare.com/api/resources/pages/subresources/assets/methods/check_missing/). Keep coherent module versioning: a frontend change may rewrite import URLs in several modules so browsers cannot mix releases. Do not replace this with partial directory uploads. Docs, skills, tests, tooling, authoring ledgers and private account data are excluded from the package; required licenses remain.

The old GitHub Pages address already serves the redirect in `docs/index.html` from `main:/docs`. Keep that URL working. Routine Cloudflare deployment does not touch its configuration.

Lesson images are packaged when referenced by the generated content catalog or application source, including hidden/legacy lessons. Unreferenced source crops remain local authoring evidence. Use literal image filenames in authored content; when changing media/loading or packaging, run the focused static-artifact test in `tests/package-app.test.mjs` to check catalog completeness.

## Confirm local and live versions

Fetch `origin/main`, inspect `git status --short` and `git rev-parse HEAD origin/main`. A clean checkout may be fast-forwarded with `git pull --ff-only`; never reset unpublished work. Approved GitHub commits may intentionally be ahead of production.

When exact production alignment matters, read the Pages project's `canonical_deployment.deployment_trigger.metadata.commit_hash` through the connected Cloudflare tools and compare it with local HEAD. Use an isolated checkout of that SHA if local work must be preserved. For byte-level release checking, package that commit with `npm run package:cloudflare`, then run `npm run verify:live`; it compares the local release/catalog and representative runtime bytes to production. Do not do this rebuild on every small edit.

## Backend and access boundaries

Production HTML uses `learn-account-mode=http`. `.github/cloudflare/worker.mjs` forwards both `/api/*` and `/students` to `BACKEND`, preserving requests and access decisions. `_redirects` preserves `/node_modules/*` URLs through `/assets/browser-libraries/*`. Accounts/progress live in the existing Worker with D1 (`ACCOUNTS`) and Durable Objects (`AUTH`, `STUDENTS`); frontend publication never recreates them.

`src/server/cloudflare-development.mjs` connects local work to the live API. Other `src/server/` modules implement the isolated Node/SQLite backend, **not the deployed Worker source**. The Worker bundle is preserved under ignored `.production/backend/`; its editable original is not yet in this repo. Backend changes require recovering that source, staging verification and an explicit backend deployment. Never run generic `wrangler deploy` against production from this frontend repo. The obsolete duplicate Workers Builds trigger is disconnected; Pages Actions owns frontend publication.

GitHub CLI and Cloudflare MCP are configured. Routine deployment uses existing GitHub secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Do not request new access or print credentials unless an actual authentication failure requires action.

## Recovery

Staging failures stop before production. If production is broken, inspect the failed checks and roll Pages back to the last known-good production deployment through Cloudflare MCP, then fix forward. Preserve backend bindings, databases and browser progress; do not force-push or clear student storage.

These commands apply only to local SQLite, never Cloudflare D1:

```sh
npm run database:backup -- /absolute/accounts.sqlite /absolute/backups/new-copy.sqlite
npm run database:restore-check -- /absolute/backups/new-copy.sqlite
npm run database:migrate-check -- /absolute/accounts.sqlite
npm run owner -- grant USERNAME /absolute/accounts.sqlite
```

`owner -- create USERNAME /absolute/accounts.sqlite` reads the password from stdin. `database:reset -- /absolute/disposable.sqlite --confirm` requires explicit authorization for that disposable database. Back up before real schema/data changes and preserve the database/WAL together.
