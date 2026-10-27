# Runtime and recovery

The shipping target is Cloudflare Workers static assets, D1 for accounts/sessions and one SQLite Durable Object per permanent student ID for progress. The Node/SQLite runtime remains available for development and self-hosting. Browser libraries are installed by npm; build and test tooling never ships to browsers.

## Cloudflare releases

Use Node 24.22.1 and the pinned `cf` CLI in this repository. Sign in with `npx cf auth login`, then run `npm run build:cloud && npm run test:cloud` for the staging artifact. `npm run dev:cloud` previews it on port 8787 with isolated local state. The CLI, configuration and Build Output packages are beta and pinned: upgrade them together and rerun the full release gate and a staging deployment.

`cloudflare.config.ts` owns stable resource identities:

| Environment | Worker | D1 accounts database |
| --- | --- | --- |
| Staging | `khutwa-app-staging` | `fb38d157-5217-4fec-8a35-8e7ddcec8059` |
| Production | `khutwa-app` | `5de0d401-a288-484f-868a-cd5333e7df06` |

Both are in account `f6200f8f16ec1abc5f7fb7768f2ffd7f`. The planned production URL is `https://khutwa-app.malikahed.workers.dev`. Account/database IDs and the Web Analytics beacon token are public configuration; authentication tokens and account passwords are not.

Run `npm run release` before publishing. `npm run deploy:staging` and `npm run deploy:production` rebuild, apply unapplied migrations in `migrations/`, then deploy with automatic database provisioning disabled. Keep schema changes additive and compatible with the previous Worker version. Never rename `StudentProgress`, its Worker, its binding, the D1 database or the `account:<id>` object keys as part of an ordinary release. Never reset production or replace it with local state. `/api/app-state` always returns a null reset ID in Cloudflare.

Rollback the Worker version without deleting its database or object namespaces. Cloudflare D1 Time Travel is always enabled; review the current [retention limits](https://developers.cloudflare.com/d1/platform/limits/) before relying on it. SQLite Durable Objects have [point-in-time recovery](https://developers.cloudflare.com/durable-objects/api/sqlite-storage-api/#point-in-time-recovery-api). Database recovery is an operator task, not an app release; preserve both account IDs and matching progress objects. Local restart tests do not constitute a tested production recovery procedure.

Cloudflare's [Workers](https://developers.cloudflare.com/workers/platform/pricing/), [D1](https://developers.cloudflare.com/d1/platform/pricing/) and [SQLite Durable Objects](https://developers.cloudflare.com/durable-objects/platform/pricing/) have free allowances. Static assets bypass Worker execution; API requests consume allowances. Monitor usage in the Cloudflare dashboard. This configuration does not purchase a paid plan or promise unlimited free accounts/traffic.

Cloudflare Web Analytics is enabled only by the production build. It starts after the app is ready, respects browser DNT/GPC preferences and is absent from the admin page. The dashboard provides visits, page views, browsers, countries and performance; the app does not send custom answers, passwords or student identifiers to analytics. The public beacon token is configured in `scripts/build-cloudflare.mjs`.

## Loading and progress

`build:cloud` compiles content once and creates hashed question JSON plus small lesson indexes. A visible question is fetched before the rest of its lesson. A single preemptible idle queue warms selected lessons, then first questions across subjects in lesson order, followed by the remaining questions and shared assets. Browser-reported cellular/slow connections, Save Data, hidden tabs and low storage pause speculative downloads. Browser caching can be denied or evicted; the app remains usable with foreground requests and visible retry controls. It is not a complete offline installation.

Student progress is separate from release assets: cloud storage owns confirmed records, and an account-bound IndexedDB outbox preserves interrupted saves. Retries reuse update IDs to avoid double rewards. Background refresh checks entitlement changes while leaving an authenticated session intact during transient network failures. Changing domains does not transfer browser-only data; audit any old real accounts and export/import them before retiring the previous site. Never delete the older repository or its data as a release step.

## Server

Use Node 24. `npm run dev` enables local watching; `npm start` disables live reload. Experimental reset, code-preview and answer-review endpoints have been removed. Production requires:

```sh
PUBLIC_ORIGIN=https://your-app.example \
ACCOUNTS_DATABASE_PATH=/absolute/durable/accounts.sqlite \
npm start
```

`PORT` defaults to 4173. Terminate TLS at the host/proxy. `TRUSTED_PROXY_ADDRESSES` accepts exact proxy IPs; only those peers may supply forwarded headers, and the current parser expects a single forwarded client IP. Public origin controls secure cookies. `/healthz` and `/readyz` report process readiness. SIGINT/SIGTERM stop new work, close SQLite after active requests finish.

Keep data on durable storage. SQLite is currently one server's source of truth; adding replicas or multiple writer instances requires a separate design backed by measured workload needs. Do not introduce a distributed stack speculatively.

## Owner dashboard and test resets

`/students` shows a searchable, paginated table and an edit panel with full-app access grants: permanent, week, month, year or a custom future expiry. It also supports revocation, suspension/restoration and deletion requiring the exact username. Subscription editing uses a version check to avoid overwriting another admin edit. Owner accounts cannot be edited through this student API. Expiry/revocation returns a student to the existing free plan; it does not introduce a new subject paywall. Suspension invalidates sessions. Deletion removes account identifiers and sessions, then erases its progress object; failed cleanup is retried by an hourly job. Minimal admin audit entries retain IDs/actions without credentials.

The page and API require an authenticated owner. Public registration cannot grant owner access. The owner sees a **الطلاب** link after signing in. For the Node development server, `npm run owner -- grant USERNAME /absolute/accounts.sqlite` promotes an existing account; `npm run owner -- create USERNAME /absolute/accounts.sqlite` reads a password from standard input. For Cloudflare, `npm run owner:cloud -- grant USERNAME --production` promotes an existing account. `npm run owner:cloud -- create USERNAME --production` reads a new password from a pipe; use a hidden shell prompt or secret manager, never a command-line literal. Omit `--production` to target staging. Provisioning is a CLI operation, never a public HTTP endpoint.

For an explicitly disposable test database, `npm run database:reset -- /absolute/accounts.sqlite --confirm` deletes all accounts (including owners), sessions, progress and update receipts. It preserves the account ID sequence so old browser caches cannot attach to new accounts. A reset marker clears this app's browser storage and progress outbox on the next load, once per browser/tab; unrelated origin storage is retained. The marker also disables development auto-login. Recreate the owner after resetting. There is no public HTTP reset endpoint.

HTTP mode saves student accounts and progress on the server, with an IndexedDB cache/outbox for interrupted saves. Static fixture previews remain local test fixtures and must not be used to collect real student data.

## Backups

Run maintenance commands from the source checkout, with access to the database volume; the minimal `_server/` artifact excludes maintenance/test scripts. Use absolute paths and a new destination:

```sh
npm run database:backup -- /absolute/accounts.sqlite /absolute/backups/accounts-copy.sqlite
npm run database:restore-check -- /absolute/backups/accounts-copy.sqlite
npm run database:migrate-check -- /absolute/accounts.sqlite
```

Backup uses SQLite `VACUUM INTO`, includes committed WAL data and refuses to overwrite a destination. Recovery checks work on temporary copies, verify integrity/account/progress counts and check that the source remains unchanged. Future database schemas are rejected before alteration; legacy migrations can invalidate old sessions and report that count.

Before changing a real database, test its backup. To roll back: stop the server, restore a verified backup to a new path, configure that path and restart a compatible app version. Preserve the original database and WAL together; do not copy a running database file alone.

`npm run test:recovery` checks disposable recovery cases. `npm run test:capacity` measures disposable account/progress workloads; `npm run package:preview && npm run measure:browser` measures the packaged browser. Evidence goes to ignored `artifacts/`. Local results do not establish hosting capacity, live-provider latency, scheduled backup guarantees or physical-device accessibility.

## Static preview and installation

`npm run package:preview` creates `_site/` with fixture mode. It excludes server files, tests, unused source maps and authoring metadata, and includes only selected dependency runtime files with their license notices. `npm run test:preview` exercises the artifact under `/learn-preview/` with no API fallback.

GitHub Actions verifies source, browser compatibility and the Cloudflare build. Publishing is an explicit release operation; keep production accounts out of fixture previews. Blocking accessibility failures stop the gate; retained palette contrast failures remain reported.

See [INSTALL_WEB_APP.md](INSTALL_WEB_APP.md) for standalone-window installation. The manifest adds an app window, not offline support.

Reference PDFs are excluded from deployment and kept in a separate source archive. Serve text assets through the Node handler or a CDN with Brotli/gzip support; image formats are already compressed. Guest/Home startup avoids question banks, future onboarding artwork and optional prefetch on constrained connections.
