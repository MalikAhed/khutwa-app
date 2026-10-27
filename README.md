# Khutwa · خطوة

Arabic Tawjihi study app. **Live:** [khutwaa.pages.dev](https://khutwaa.pages.dev/) · **Main repo:** [MalikAhed/khutwa-app](https://github.com/MalikAhed/khutwa-app)

This repository contains the editable app and its deployment workflow. Generated website files stay in ignored `_site/`; dependencies, private accounts and scratch files stay out of Git.

## Daily work

Use Node 24 (`nvm use` if installed).

```sh
npm ci                   # once, or after package-lock.json changes
npm run dev              # http://127.0.0.1:4173, real Cloudflare accounts
npm run map -- progress  # find the owner and relevant tests
npm run check            # changed JavaScript syntax + types
```

Develop locally, run the focused test for the change, and show the result to Malik. **Publish only when he says “deploy”.** A small visual change needs a local desktop/mobile check, not every course/browser audit. Documentation edits do not need a build. Full suites remain available on demand.

## Deploy after approval

Commit only the approved changes, then:

```sh
npm run deploy -- --check # optional read-only preflight
npm run deploy           # push to main, follow Cloudflare, report the result
npm run deploy:status    # inspect the latest runs without rebuilding
```

GitHub Actions installs locked dependencies, runs fast checks, builds once, checks a staging deployment, and publishes that same build. It verifies the live account API, Students route, release and browser libraries. Documentation/test-only pushes skip deployment. Deployment credentials already live in GitHub secrets; ordinary releases do not require a new Cloudflare login.

To inspect the packaged frontend locally:

```sh
npm run package:cloudflare
npm run preview:cloudflare # http://127.0.0.1:4174, real Cloudflare accounts
```

Local development uses your real Cloudflare sign-in, admin permissions and saved progress. `localhost:4173` redirects to `127.0.0.1:4173` to keep old test data separate. Sign in once using your normal account; local study can change live progress.

If internet is unavailable, a previously verified account can continue studying locally. Answers stay in the browser outbox and sync after reconnecting. New sign-in and the admin dashboard require internet. `npm run dev:local` explicitly selects the separate SQLite test database; automated tests use isolated accounts. See [OPERATIONS.md](docs/OPERATIONS.md).

## Find your way

- [AGENTS.md](AGENTS.md): short instructions for every coding session.
- [ARCHITECTURE.md](docs/ARCHITECTURE.md): feature owners and focused checks.
- [OPERATIONS.md](docs/OPERATIONS.md): deploy, access, accounts and recovery.
- [LESSON_AUTHORING.md](docs/LESSON_AUTHORING.md): curriculum work and stable content IDs.
- [PRODUCT.md](docs/PRODUCT.md): product scope; subject evidence remains beside its content.

`src/` owns application code, `assets/` runtime media, `scripts/` development/packaging, `tests/` behavior tests, and `.github/` the Cloudflare workflow. Original books, archives and production databases are not public deployment files. Third-party notices remain with their libraries/assets.
