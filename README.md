# Khutwa · خطوة

Arabic Tawjihi study app. **Live:** [khutwaa.pages.dev](https://khutwaa.pages.dev/) · **Main repo:** [MalikAhed/khutwa-app](https://github.com/MalikAhed/khutwa-app)

This repository contains the editable app and its deployment workflow. Generated website files stay in ignored `_site/`; dependencies, private accounts and scratch files stay out of Git.

## Daily work

Use Node 24 (`nvm use` if installed).

```sh
npm ci                   # once, or after package-lock.json changes
npm run dev              # http://localhost:4173, with live reload
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
npm run preview:cloudflare # http://localhost:4174, separate local test accounts
```

Real student accounts and progress live in the existing Cloudflare backend. Local development uses Node/SQLite test accounts; your live password is not expected to work locally. Frontend releases preserve the backend and its data. See [OPERATIONS.md](docs/OPERATIONS.md) for the exact hosting boundary and recovery steps.

## Find your way

- [AGENTS.md](AGENTS.md): short instructions for every coding session.
- [ARCHITECTURE.md](docs/ARCHITECTURE.md): feature owners and focused checks.
- [OPERATIONS.md](docs/OPERATIONS.md): deploy, access, accounts and recovery.
- [LESSON_AUTHORING.md](docs/LESSON_AUTHORING.md): curriculum work and stable content IDs.
- [PRODUCT.md](docs/PRODUCT.md): product scope; subject evidence remains beside its content.

`src/` owns application code, `assets/` runtime media, `scripts/` development/packaging, `tests/` behavior tests, and `.github/` the Cloudflare workflow. Original books, archives and production databases are not public deployment files. Third-party notices remain with their libraries/assets.
