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

## Live student data contract

This is a live app used by real students. The non-negotiable rules in [AGENTS.md](../AGENTS.md#live-student-data--non-negotiable) apply to every feature, cleanup, push, release and rollback. A deployment updates frontend assets and routing; it must never reset/reseed accounts or progress, replace a database/namespace, clear browser storage, or discard unacknowledged answers. A frontend rollback restores code, never an older student-data snapshot.

The following production identities were verified read-only on 2026-10-27. Preserve them; staging is a separate service.

| Binding | Existing production resource |
| --- | --- |
| Pages `BACKEND` | `khutwa-app` (preview: `khutwa-app-staging`) |
| Worker `ACCOUNTS` | D1 `khutwa-app-accounts`, `5de0d401-a288-484f-868a-cd5333e7df06` |
| Worker `AUTH` | SQLite Durable Object `Authentication`, namespace `66ab926401ff4a3aa86c03a8c7151725` |
| Worker `STUDENTS` | SQLite Durable Object `StudentProgress`, namespace `e3623f185cdd41b4925dd2a379dc8a90` |

Keep the `tawjihi-subject-progress` IndexedDB database (including `parts`, `imports`, `outbox`), existing `tawjihi:` storage keys, account identities and published content IDs stable. The legacy `applyServerDataReset` entry point now checks continuity only: it records the first baseline without clearing data, and stops startup on a changed marker while preserving the original baseline and saved work. Do not clear that marker to bypass a mismatch; restore/investigate the expected backend first. This detects reset-marker changes, not every possible server-side mutation.

`npm run test:deployment` includes fast preservation checks: unchanged releases keep stored work, reset/rollback/invalid responses never erase it, and historical progress/retry behavior remains intact. Existing release/PR workflows already run this command; no extra browser suite is added to routine publishing. For persistence, storage or identity changes, additionally run `node tests/browser/browser-student-dashboard.mjs` and `node tests/browser/browser-progress-sync.mjs`; for auth changes, run `node tests/browser/browser-session-restore.mjs`. Use disposable accounts/databases. Never test resets against production.

Before any actual backend/schema/data migration: recover the editable Worker source, record the current resource identities, take recoverable snapshots/bookmarks of **both D1 and relevant Durable Objects**, and rehearse restoration and the migration in an isolated staging environment. Verify existing accounts, saved answers/rewards, pending-write retries, old open clients and rollback compatibility. Keep migrations additive and content aliases available; retiring a lesson/question never deletes its historical answer records. A successful frontend build or anonymous API check does not prove a backend migration preserves data.

Cloudflare provides [D1 Time Travel](https://developers.cloudflare.com/d1/reference/time-travel/) (7 days Free / 30 days Paid) and [SQLite Durable Object recovery](https://developers.cloudflare.com/durable-objects/api/sqlite-storage-api/#pitr-point-in-time-recovery-api) (30 days). These are recovery windows, not permission to overwrite current student work. D1 recovery alone does not restore the `STUDENTS` namespace. No production restore or end-to-end Cloudflare recovery rehearsal was performed here; the local SQLite recovery test covers only the local adapter. Verify the live plan/window and an isolated recovery procedure before backend changes. Keep exports private and outside the repo/site; never restore over live students to test a backup.

## Local development

Use Node 24. Run `npm ci` only initially or after the lockfile changes, then `npm run dev` at `http://127.0.0.1:4173`. Use `npm run map -- <topic>` to find owners and focused tests. `npm run check` parses changed JS and checks existing types; `CHECK_BASE=<commit>` changes the comparison baseline. `npm run check:syntax -- --all` parses every module without executing it.

This workstation keeps the preview running with the enabled user service `~/.config/systemd/user/khutwa-dev.service`, using Node 24 and `npm run dev`. User lingering is enabled, so the service starts at boot and survives closed terminals and chat sessions; systemd restarts it if it exits. Use `systemctl --user status khutwa-dev`, `systemctl --user restart khutwa-dev`, and `journalctl --user -u khutwa-dev -n 40` to inspect or restart it. Do not start a second preview on port 4173 while the service is active.

Default local development proxies real account/API requests and the Students access check to Cloudflare while serving frontend files from disk. After Cloudflare authorizes the owner, `/students` uses the local dashboard HTML, styles and module. The student table loads more records as you scroll, keeping earlier rows visible; filters and search restart the list. Subscription/access changes use the existing backend version checks; student progress loads only when opening a detail view. Local study/admin actions can affect live data. Localhost redirects to the numeric loopback address to isolate former test-account storage. The proxy uses its own HttpOnly cookie and rejects cross-site requests.

After a successful online account check, the browser can resume the same account offline for up to seven days, including after closing Chrome or an installed PWA. The public app shell must finish downloading first; Home shows a green circular progress card with two text rows in the sky banner. Each file is saved as it finishes; reopening restores the count from the cache and queues only missing files. Core preparation continues with data saver enabled, while optional bulk lesson downloads wait for a suitable connection. Subject navigation renders immediately without waiting for artwork to load or decode. Missing startup files are retried ahead of lesson downloads every five seconds while preparation is incomplete; a lost worker confirmation is retried after a bounded timeout. The card reaches 100% only after the offline shell is confirmed, and survives dashboard rerenders. Only downloaded lessons/assets work offline. Authored explanations and their images are included with those lessons: confirmed explanation purchases and currently active Super access can read them locally without an API request. New gem purchases still require server confirmation; offline Super reading does not create a permanent purchase. Cached HTML is normalized before offline navigation because Cloudflare redirects `index.html` to `/`; an existing service-worker registration remains usable when its update request fails offline. The reconnect button performs real requests even if the browser’s online flag is stale, and displays verification progress or a retry message. The lease uses the authentication response’s server Date plus elapsed time, with a monotonic clock while open and a persisted wall-clock high-water mark across restarts. A backward jump exceeding two minutes, or expiry, requires reconnection; correcting the clock alone does not unlock access. Timezone changes do not affect epoch time. This detects ordinary clock rollback, but a browser has no tamper-proof clock across process shutdown and device storage can be modified; this is not cryptographic offline licensing.

The new `tawjihi:offline-access:v1` key stores a minimal profile and timing metadata only. It does not migrate or erase account progress, resources, IndexedDB, or the outbox. Super benefits use this same effective time; the current product still allows ordinary free study when Super expires. Known account access/subscription expiry dates, when supplied by the server, shorten the offline window. Reconnection checks backend continuity and identity, retries pending answers, and checks releases; reloads wait until Home and local saves. Rejected sessions/sign-out revoke offline access. New sign-in and admin access require internet.

The development proxy’s ignored `data/cloudflare-offline-profiles.json` retains its existing 30-day fallback profiles, keyed by session-token hashes. Its `offline:true` responses cannot create or renew the browser’s seven-day lease. Production uses the same existing backend, bindings, cookies, and student storage.

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

Production HTML uses `learn-account-mode=http`. `.github/cloudflare/worker.mjs` forwards `/api/*` unchanged and asks `BACKEND` to authorize `/students`. Only an authorized HTML response is replaced with the shared dashboard layout embedded during packaging, with release-versioned styles/modules. Redirects, denied access and backend failures pass through unchanged; no student records enter the static artifact. `_redirects` preserves `/node_modules/*` URLs through `/assets/browser-libraries/*`. Accounts/progress live in the existing Worker with D1 (`ACCOUNTS`) and Durable Objects (`AUTH`, `STUDENTS`); frontend publication never recreates them.

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
