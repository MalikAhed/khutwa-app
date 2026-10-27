# Khutwa · Tawjihi Learning App

> **Khotwa is my current startup:** an Arabic-first learning and exam-preparation platform for Palestinian Tawjihi students.

Khutwa turns the official study scope into a focused, RTL study experience with source-grounded questions, worked solutions, review cards, progress tracking and a responsive learner path. This repository owns the app's source and Cloudflare release tooling. The older Tawjihi repository is retained for history until its data and deployment are retired deliberately.

## Current product

- Nine published question paths: ICT, Mathematics 1, Mathematics 2, Physics, Chemistry, Biology, English, Arabic and Islamic Education.
- Arabic-first interface with a phone-sized layout that also works on tablets and desktop.
- Original exam and textbook wording retained beside answer keys, page references and lightweight figure crops.
- Guest study, account-backed progress, IndexedDB caching and a Node/SQLite server adapter.
- Native MathML and local KaTeX rendering for Arabic mathematics, plus installable web-app metadata.
- Plain JavaScript, native MathML and build-time lesson compilation; no framework or AI service required for learning.
- Cloudflare Pages at `https://khutwaa.pages.dev`, a private Worker backend, D1 accounts and SQLite Durable Objects for student progress, with a local IndexedDB outbox for interrupted saves.
- An owner-only Arabic student dashboard at `/students`, with full-app subscriptions, optional expiry, suspension and confirmed deletion.

Arabic follows the six Gaza units with 414 supplied questions across 16 lessons. The product boundary and source decisions are recorded in [PRODUCT.md](docs/PRODUCT.md).

## Run it

Use Node 24.22.1 (see `.nvmrc`) and npm:

```sh
npm ci
npm run dev
```

Open `http://localhost:4173`. Development stores local accounts and progress in the ignored `data/` directory. For the shipping build and local Cloudflare runtime, use `npm run build:cloud && npm run dev:cloud`, then open `http://localhost:8787`. Local and production databases are separate.

## Verify it

```sh
npm run check           # syntax, types, unit tests, build and manageability
npm run test:browser    # Chromium learner journeys
npm run verify          # Chromium release gate and accessibility checks
npm run release         # verify, package, preview and compatibility checks
```

Install Firefox and WebKit once for compatibility checks with `npx playwright install --with-deps firefox webkit`. Browser evidence is written to ignored `artifacts/` or `/tmp/learn-browser-failures`. The accessibility gate records the retained bright-palette contrast exceptions; other violations fail the gate.

## Repository map

```text
src/       learner UI, curriculum, domain rules, browser services and Node server
assets/    runtime media, question figures, fonts and icons
scripts/   validation, packaging, release and maintenance tools
tests/     Node behavior tests plus browser journeys
docs/      architecture, product scope, authoring, coverage and operations
```

Start with [ARCHITECTURE.md](docs/ARCHITECTURE.md) for ownership and import boundaries. Use [LESSON_AUTHORING.md](docs/LESSON_AUTHORING.md) for new question content, then check the relevant coverage guide: [ICT](docs/ICT_COVERAGE.md) or [Islamic Education](docs/ISLAMIC_EDUCATION_COVERAGE.md), plus the subject source manifests under `src/data/lessons/` for mathematics, physics, chemistry and biology.

`npm run --silent map -- progress` prints the files and checks that own a feature. Keep source archives, student data, generated packages and scratch work outside the public artifact.

## Package and host

```sh
npm run build           # validates the source tree
npm run package:preview # creates the fixture-only _site/ artifact
npm run test:preview    # verifies that artifact under a URL prefix
npm run package:server  # creates the standalone _server/ artifact
```

The static package contains browser code, runtime media and dependency licenses only. Original PDFs and audit ledgers stay in the local source archive; the app ships lightweight, traceable page images where learners need them. The server package runs with Node built-ins and SQLite, negotiates compressed text responses and requires `PUBLIC_ORIGIN`, durable `ACCOUNTS_DATABASE_PATH` and the trusted-proxy settings documented in [OPERATIONS.md](docs/OPERATIONS.md).

The Cloudflare build precompiles lessons into individually hashed question files. The current question loads first; one idle download queue warms the selected lesson and then lessons across subjects. Slow connections, cellular connections reported by the browser, Save Data, hidden tabs and limited storage pause speculative downloads. This is caching for faster use, not a guarantee of offline operation.

`npm run build:pages && npm run test:pages` checks the Pages frontend through its backend service binding. `npm run deploy:staging` and `npm run deploy:production` build fresh artifacts, apply pending additive D1 migrations, deploy the existing backend and then upload Pages. Production includes Cloudflare Web Analytics after startup; staging and admin pages do not. GitHub owns source/history and runs verification; publishing is an explicit release command. See [OPERATIONS.md](docs/OPERATIONS.md) for resource identities, credentials, recovery and release safeguards. Never commit student data, secrets, exports or generated screenshots.

## Third-party notices

Third-party code, source material, fonts and assets retain their own notices and licenses.
