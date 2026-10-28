# Working on Khutwa

## Start here

- Main repo: `https://github.com/MalikAhed/khutwa-app`; live site: `https://khutwaa.pages.dev`.
- Canonical checkout on this machine: `/home/malikabuallatta/experiment-app/khutwa-app`. The sibling `learn/` is a preserved legacy checkout, not the deployment source. Never reset or delete its unpublished work.
- `npm run dev` serves this checkout at `127.0.0.1:4173` using real Cloudflare accounts, as explicitly requested by Malik. `localhost:4173` redirects there to isolate old test progress. Do not switch back to fake/local accounts unless requested. Use `dev:local` or isolated databases for automated tests; never use live student accounts in test suites.
- Read only the relevant row in `docs/ARCHITECTURE.md`: `npm run --silent map -- <topic>`. Read product/authoring docs only when the task needs them. Do not inventory all lessons, archives or generated files.
- English chat; preserve Arabic/RTL in the app. Do not use or create skills unless requested. Keep updates brief and act without repeated permission questions for already authorized work.

## Default loop

1. Check scoped Git status/diffs and fetch `origin/main`. Preserve other sessions' edits and local account data. Fast-forward a clean checkout if needed; never reset local work to match production. GitHub may contain approved changes not yet deployed.
2. Make the smallest useful change in its existing owner. Run locally with `npm run dev` (Node 24).
3. For code, run `npm run check` and the relevant focused behavior test. For a small visual change, check the affected view at desktop/mobile widths. For docs only, review links/commands; no build or browser suite.
4. **Approved / push:** stage explicit approved paths, review the staged diff, commit and `git push origin main`. This saves the work to GitHub without publishing. **Deploy / publish:** also run `npm run deploy`, which pushes and explicitly publishes the committed version. Existing authorization covers the whole action; do not ask again at each step.
5. Follow the exact deployment run through its live checks. Report the commit/run and any real failure. A push alone is not a deployment. If unrelated work prevents a clean release, use an isolated checkout of the approved commit instead of stashing or committing someone else's files.

## Live student data — non-negotiable

This app is in active use by real students. Every feature, cleanup, push, deployment and rollback must preserve their existing accounts, answers, progress, rewards and unsynced work. Speed never overrides this requirement.

- **Deploy means publish code, never reset data.** Never wipe/reseed production, recreate its databases or Durable Object namespaces, point production at staging/an empty backend, or restore an older database as a frontend rollback. Keep the production resource identities in `docs/OPERATIONS.md`.
- Never clear IndexedDB, local/session progress or pending writes to fix a bug, refresh content, migrate storage or resolve a version mismatch. Preserve the original data and show recovery/retry instead. Do not recommend reinstalling or clearing site data while answers may be unsynced.
- Keep account ownership, storage keys and published subject/lesson/part/question IDs stable. Never reuse an old ID for different content. Renames/moves require backward-compatible aliases or a tested, lossless migration; hidden/retired content must retain its historical progress.
- Persist answers before acknowledging a save. Keep each pending update until its server acknowledgement; retries/restarts/account switches must not drop, duplicate or transfer it. Old open tabs and newly deployed clients must both remain compatible with the backend.
- Changes that migrate/rewrite student storage or alter the live backend require a recoverable snapshot and a restore rehearsal in an isolated environment **before** touching production. Cover D1 and Durable Object progress, not just account rows. Prefer additive migrations; never discard unreadable/unknown-version data or catch an error by creating an empty replacement.
- Run the fast student-data regressions included in `npm run test:deployment` for releases. For persistence/migration changes, also run the focused restart/offline/reconnect browser checks. Do not remove these protections or assertions to make a release pass. Tests use disposable data only.
- If preservation cannot be demonstrated, stop the risky change and explain the specific gap. Approval to fix, push or deploy is not permission to delete student data. No production reset is part of this workflow.

## Keep verification proportional

- `npm run check`: changed JS syntax + existing type checks. `npm run map` lists relevant test choices, not a mandatory checklist.
- `npm run release`: syntax parsing of all JS (so earlier approved commits are covered), types, deployment regression tests, one Cloudflare package. It does not publish. The workflow runs this once; don't repeat the same build locally unless packaging is the change being checked.
- Auth/progress/schema changes need their matching persistence and access tests. Deploy routing changes need `npm run test:deployment`; pipeline previews verify the real backend connection.
- Full Node/browser/content/compatibility audits are opt-in: `check:full`, `verify:full`, `release:full`. Use them only for broad changes or a concrete unresolved risk. Keep useful tests; don't delete assertions or hide failures to make a run green.
- Stop after relevant checks pass. If a deployment fails, inspect the exact failed step; don't start every test suite or guess new access setup.

## Hosting facts — preserve these

- Explicit `npm run deploy` → `.github/workflows/cloudflare-pages.yml` → Cloudflare Pages project **khutwaa**. Pushes do not deploy. The workflow checks out the approved full commit SHA, builds once, tests staging, then publishes that build. This is GitHub Actions Direct Upload, not a native Pages Git build.
- Production is **HTTP account mode**. `.github/cloudflare/worker.mjs` forwards `/api/*` unchanged to `BACKEND`; `/students` uses the same backend access check before returning the packaged dashboard layout. Production binding: `khutwa-app`; staging: `khutwa-app-staging`. Preserve cookies and access decisions.
- Live backend Workers use D1/Durable Objects. Local development forwards account/API/Students requests through `src/server/cloudflare-development.mjs`; public frontend files stay local. Offline fallback resumes only a previously verified account and relies on the existing browser outbox; admin access/new sign-in stay online. Other `src/server/` adapters are for isolated tests, not the deployed Worker source.
- Build `_site/` with `npm run package:cloudflare`. It relocates browser libraries while preserving `/node_modules/` URLs. Never commit `_site`, `node_modules`, credentials, real student data, browser profiles or `.production` recovery snapshots.
- Cloudflare MCP is already configured as `cloudflare`; discover/use its tools first. Routine deployment uses existing GitHub secrets and needs no MCP login. Reauthenticate only on an actual expired/revoked-access error; never print secrets.
- Preserve storage keys, account IDs, published content IDs, old URLs, and the existing backend bindings/database. Refreshing content must not erase progress.

## Code ownership

`data/` is curriculum, `domain/` pure rules, `services/` browser IO/state, `ui/` rendering, `server/` local HTTP/SQLite. Share root session/progress stores. Cancel stale work via `app/view-lifecycle.js`. Reuse media/motion owners, focus and reduced-motion behavior. Edit CSS in its owning stylesheet, not appended overrides.

Use the rod-free `assets/mascot/rocky-wave.svg` identity. Keep hidden features behind one flag without deleting their data. Check imports and runtime references before removing files. Avoid speculative frameworks, duplicate helpers, new handoff documents and task-history clutter; update these existing guides.

Keep test fixtures/helpers in `tests/`, scratch work in ignored `tmp/` or `/tmp`, and developer commands in `scripts/`. Remove temporary logs, globals, diagnostic UI, bypasses and unused imports before committing. Do not add production branches just to satisfy a test. Keep behavior tests that protect real failures; remove obsolete tests only when their behavior has actually been retired. Record task evidence in commits/PRs, not new reports or duplicated guides. Docs, skills, tests and private data never belong in `_site/`.
