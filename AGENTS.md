# Working on Khutwa

## Start here

- Main repo: `https://github.com/MalikAhed/khutwa-app`; live site: `https://khutwaa.pages.dev`.
- Canonical checkout on this machine: `/home/malikabuallatta/experiment-app/khutwa-app`. The sibling `learn/` is a preserved legacy checkout, not the deployment source. Never reset or delete its unpublished work.
- Before reusing `localhost:4173`, confirm its server runs from this checkout. Keep one active development server and its `data/accounts.sqlite`; separate localhost ports share session cookies and must not silently switch account databases.
- Read only the relevant row in `docs/ARCHITECTURE.md`: `npm run --silent map -- <topic>`. Read product/authoring docs only when the task needs them. Do not inventory all lessons, archives or generated files.
- English chat; preserve Arabic/RTL in the app. Do not use or create skills unless requested. Keep updates brief and act without repeated permission questions for already authorized work.

## Default loop

1. Check scoped Git status/diffs. Preserve other sessions' edits and local account data.
2. Make the smallest useful change in its existing owner. Run locally with `npm run dev` (Node 24).
3. For code, run `npm run check` and the relevant focused behavior test. For a small visual change, check the affected view at desktop/mobile widths. For docs only, review links/commands; no build or browser suite.
4. Let Malik review locally. Do not push or deploy a feature until he says **deploy/publish**. That instruction authorizes committing the approved files, pushing and completing the deployment; do not ask again at each step.
5. Stage explicit paths only, review the staged diff, and commit. Run `npm run deploy`; follow the existing GitHub workflow through its live checks. Report the commit/run and any real failure. Do not claim the site is live from a push alone.

## Keep verification proportional

- `npm run check`: changed JS syntax + existing type checks. `npm run map` lists relevant test choices, not a mandatory checklist.
- `npm run release`: fast checks, the small deployment regression test, one Cloudflare package. It does not publish. The workflow runs this once; don't rebuild/retest the same unchanged result repeatedly locally.
- Auth/progress/schema changes need their matching persistence and access tests. Deploy routing changes need `npm run test:deployment`; pipeline previews verify the real backend connection.
- Full Node/browser/content/compatibility audits are opt-in: `check:full`, `verify:full`, `release:full`. Use them only for broad changes or a concrete unresolved risk. Keep useful tests; don't delete assertions or hide failures to make a run green.
- Stop after relevant checks pass. If a deployment fails, inspect the exact failed step; don't start every test suite or guess new access setup.

## Hosting facts — preserve these

- `main` → `.github/workflows/cloudflare-pages.yml` → Cloudflare Pages project **khutwaa**. This is GitHub Actions Direct Upload, not a native Pages Git build. Never replace it with the old GitHub Pages fixture workflow.
- Production is **HTTP account mode**. `.github/cloudflare/worker.mjs` forwards **both `/api/*` and `/students`** to `BACKEND`. Production binding: `khutwa-app`; staging: `khutwa-app-staging`. Preserve cookies and access decisions.
- Live backend Workers use D1/Durable Objects. `src/server/` is the local Node/SQLite adapter, not a deployed Worker source. Do not pretend a frontend push ships server changes. Consult `docs/OPERATIONS.md` when a feature needs a backend change.
- Build `_site/` with `npm run package:cloudflare`. It relocates browser libraries while preserving `/node_modules/` URLs. Never commit `_site`, `node_modules`, credentials, real student data, browser profiles or `.production` recovery snapshots.
- Cloudflare MCP is already configured as `cloudflare`; discover/use its tools first. Routine deployment uses existing GitHub secrets and needs no MCP login. Reauthenticate only on an actual expired/revoked-access error; never print secrets.
- Preserve storage keys, account IDs, published content IDs, old URLs, and the existing backend bindings/database. Refreshing content must not erase progress.

## Code ownership

`data/` is curriculum, `domain/` pure rules, `services/` browser IO/state, `ui/` rendering, `server/` local HTTP/SQLite. Share root session/progress stores. Cancel stale work via `app/view-lifecycle.js`. Reuse media/motion owners, focus and reduced-motion behavior. Edit CSS in its owning stylesheet, not appended overrides.

Use the rod-free `assets/mascot/rocky-wave.svg` identity. Keep hidden features behind one flag without deleting their data. Check imports and runtime references before removing files. Avoid speculative frameworks, duplicate helpers, new handoff documents and task-history clutter; update these existing guides.
