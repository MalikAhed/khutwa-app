# Khutwa · خطوة

Arabic Tawjihi study app. **Live:** [khutwaa.pages.dev](https://khutwaa.pages.dev/) · **Source:** [MalikAhed/khutwa-app](https://github.com/MalikAhed/khutwa-app)

Work in `experiment-app/khutwa-app/`. The sibling `learn/` is a preserved legacy checkout, not the deployment source.

## Daily work

Use Node 24 (`.nvmrc`). Install dependencies once, or when the lockfile changes.

```sh
npm ci
npm run dev              # http://127.0.0.1:4173, real Cloudflare accounts
npm run map -- progress  # feature owners and focused test choices
npm run check            # changed JavaScript syntax + types
```

Run the relevant behavior test. Small visual changes need an affected-view check at desktop/mobile widths; docs need link/command review. Full suites are optional, not routine release requirements.

## Approval and deployment

| Malik says | Action |
| --- | --- |
| Make a change | Edit and verify locally |
| Approved / push | Commit the approved paths and `git push origin main`; the live site stays unchanged |
| Deploy / publish | Commit approved paths, then `npm run deploy`; follow the run until live verification passes |

```sh
npm run deploy -- --check # optional preflight; no push or deployment
npm run deploy           # push, explicitly publish this commit, follow its run
npm run deploy:status    # status without rebuilding
```

Deployment uses existing GitHub secrets. The workflow checks out the approved commit, runs fast checks, builds once, verifies staging, then publishes the same build. It does not install test browsers or run the full test matrix. Only runtime files and required third-party notices go to Cloudflare; docs, tests, tools and private data stay out.

For packaged frontend inspection, run `npm run package:cloudflare` then `npm run preview:cloudflare` (port 4174). Packaging is unnecessary for ordinary local edits.

Local development uses real accounts and can update live progress. `localhost:4173` redirects to `127.0.0.1:4173` to isolate old test data. Previously verified accounts can study during an outage; answers sync after reconnecting. New sign-in/admin access require internet. Automated tests use isolated accounts; `npm run dev:local` explicitly selects the separate local test backend.

## Project map

- [AGENTS.md](AGENTS.md): session rules and proportionate checks.
- [ARCHITECTURE.md](docs/ARCHITECTURE.md): code owners and focused tests.
- [OPERATIONS.md](docs/OPERATIONS.md): deployment, synchronization, accounts and recovery.
- [LESSON_AUTHORING.md](docs/LESSON_AUTHORING.md): curriculum and stable identities.
- [PRODUCT.md](docs/PRODUCT.md): current product boundaries.

`src/` owns app code, `assets/` runtime media, `scripts/` tooling, `tests/` regression tests, `.github/` deployment. `_site/`, dependencies, account databases, recovery archives and scratch work are ignored. Keep original books outside the active app.
