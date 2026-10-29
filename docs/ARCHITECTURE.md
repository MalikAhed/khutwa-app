# Code map

Read the row for the feature you are changing. [AGENTS.md](../AGENTS.md) contains working rules; [PRODUCT.md](PRODUCT.md) contains current product boundaries. Paths below are relative to the repository root.

## Find a task or file

```sh
npm run --silent map                              # list task areas
npm run --silent map -- progress                  # owners and focused checks
npm run --silent map -- subject-progress-store.js # exports, imports and direct importers
```

The command reads this table and current source, without an index or cache. Unique JavaScript filenames work directly; ambiguous names list exact paths. File results include exports, imports and direct test importers with line numbers (`L` refers to the selected file). It scans only `src/`, `scripts/`, `tests/` and the two server entrypoints. Literal JavaScript imports/re-exports (including lazy imports) are indexed; CSS/HTML references, computed imports and runtime URLs still need a targeted search before moving or deleting files. No arguments or `--help` show usage. `--silent` removes npm's command banner, not errors or results.

`npm run build` validates the owner paths and focused commands in this table. The checks listed are choices: run only the ones relevant to the change. Update the existing row when moving its files or changing a check. This is a task map, not an exhaustive file inventory.

## Owners

| Task | Start here | Focused check |
| --- | --- | --- |
| Startup/splash | `index.html`, `src/bootstrap.js`, `src/ui/splash-screen.js`, `src/services/preview-updates.js` | `npm run test:splash` |
| Background content downloads | `src/app/background-loading.js`, `src/services/download-queue.js`, `content-worker.js`, `scripts/content-manifest.mjs` | `node --test tests/download-queue.test.mjs tests/content-worker.test.mjs`; `node tests/browser/browser-content-updates.mjs`; `npm run package:preview`; `node tests/browser/browser-content-loading.mjs` |
| Routes/navigation | `src/main.js`, `src/app/route.js`, `src/app/view-lifecycle.js` | `node --test tests/route.test.mjs tests/view-lifecycle.test.mjs`; `npm run test:ui-fixes` |
| Accounts/onboarding | `src/services/learner-session.js`, `src/services/auth-client.js`, `src/ui/visitor-flow.js`, `src/ui/visitor-flow-markup.js` | `npm run test:accounts`; `node --test tests/auth-client.test.mjs tests/learner-session.test.mjs`; restart/reconnect: `node tests/browser/browser-session-restore.mjs`; packaged offline/clock/outbox: `node tests/browser/browser-offline-access.mjs` (also set OFFLINE_BROWSER=webkit for WebKit with all origin connections denied); lease: `node --test tests/offline-access.test.mjs` |
| Rocky first-run tour/demo | `src/ui/rocky-tour.js`, `src/ui/rocky-tour-spotlight.js`, `src/ui/rocky-coach.js`, `src/services/first-run-tour.js`, `src/domain/lesson-demo.js` | `node --test tests/first-run-tour.test.mjs tests/lesson-demo.test.mjs`; `node tests/browser/browser-rocky-tour.mjs` |
| Question ratings/reports/hiding | `src/ui/question-feedback.js`, `src/ui/lesson/question-navigation.js`, `src/domain/question-ratings.js`, `src/ui/rated-questions.js`, `src/services/question-feedback.js`, `src/server/question-feedback-api.mjs`, `src/server/question-feedback-store.mjs` | `node --test tests/question-feedback.test.mjs tests/question-rating-defaults.test.mjs`; `node tests/browser/browser-rated-navigation.mjs`; `node tests/browser/browser-question-hiding.mjs`; `node tests/browser/browser-rocky-tour.mjs` |
| Question explanation unlocks | `src/ui/lesson/question-explanation.js`, `src/styles/lesson/explanation.css`, `src/domain/question-explanations.js`, `src/server/question-explanations.mjs`, `src/services/learner-resources.js`, `src/server/progress-api.mjs`, `src/server/progress-store.mjs` | `node --test tests/learner-resources.test.mjs tests/progress-api.test.mjs`; `node tests/browser/browser-question-explanations.mjs` |
| Question/explanation formatting | `src/markdown/renderer.js`, `src/styles/lesson/markdown.css`, `src/ui/lesson/english-text.js` | `npm run test:explanations`; `npm run test:question-surfaces` (all published content, tables/math/media, mixed direction, desktop/mobile) |
| Subjects/Home | `src/data/course.js`, `src/ui/course-map.js`, `src/ui/learner-dashboard.js`, `src/ui/auth-header.js` | `node --test tests/course-map.test.mjs tests/learner-dashboard.test.mjs`; `npm run test:ui-fixes` |
| Roadmap/access | `src/data/subject-roadmaps.js`, `src/domain/subject-access.js`, `src/ui/subject-learning.js`, `src/ui/subject-roadmap.js` | `node --test tests/subject-access.test.mjs tests/subject-learning.test.mjs`; `npm run test:progress` |
| Hearts/gems/Super trial | `src/domain/learner-resources.js`, `src/services/learner-resources.js`, `src/server/progress-store.mjs`, `src/server/progress-api.mjs`, `src/ui/auth-header.js`, `src/ui/heart-depletion.js`, `src/ui/super-trial-countdown.js`, `src/styles/heart-depletion.css` | `node --test tests/learner-resources.test.mjs tests/progress-api.test.mjs`; `node tests/browser/browser-resources.mjs`; `node tests/browser/browser-heart-depletion.mjs` |
| Progress/review/rewards | `src/services/subject-progress-store.js`, `src/domain/subject-progress.js`, `src/domain/question-rewards.js`, `src/domain/progression.js`, `src/ui/subject-review.js`, `src/ui/subject-completion.js`, `src/ui/xp-level.js`, `src/ui/level-up.js`, `src/lib/hairline-spring.js`, `src/ui/progress-feedback.js` | `node --test tests/subject-progress.test.mjs tests/subject-completion.test.mjs tests/question-rewards.test.mjs tests/progression.test.mjs`; `node tests/browser/browser-session-summary.mjs`; `node tests/browser/browser-xp-transfer.mjs`; `node tests/browser/browser-question-xp.mjs`; `npm run test:progress-storage` |
| ICT lessons | `src/data/lessons/ict/`, `src/data/lessons/subject-lesson-registry.js`, `src/data/subject-roadmaps.js`, `src/domain/subject-question-progress.js` | `node --test tests/subject-lesson.test.mjs tests/lesson-authoring.test.mjs`; `node tests/browser/browser-question-course.mjs` |
| Lesson rendering | `src/ui/lesson-view.js`, `src/ui/lesson/` | `node --test tests/lesson-authoring.test.mjs tests/flashcard-answers.test.mjs`; `node tests/browser/browser-exam-question.mjs`; `npm run test:browser` |
| Lesson syntax/parser | `src/markdown/lesson-authoring.js`, `src/markdown/lesson-model.js`, `src/markdown/renderer.js` | `node --test tests/lesson-authoring.test.mjs` |
| Arabic math | `src/markdown/math.js`, `src/styles/lesson/math.css`, `src/data/lessons/mathematics/` | `node tests/browser/browser-math.mjs`; root visibility/integral direction: `node tests/browser/browser-math-glyphs.mjs`; `node tests/browser/browser-math-course.mjs` |
| Gaza chemistry lessons | `src/data/lessons/chemistry/`, `src/data/lessons/subject-lesson-registry.js`, `src/data/subject-roadmaps.js` | `node --test tests/chemistry-course.test.mjs`; `node tests/browser/browser-chemistry-course.mjs` |
| Gaza biology lessons | `src/data/lessons/biology/`, `src/data/lessons/subject-lesson-registry.js`, `src/data/subject-roadmaps.js` | `node --test tests/biology-course.test.mjs`; `node tests/browser/browser-biology-course.mjs` |
| Shared UI/media | `src/ui/template-shell.js`, `src/ui/media-ready.js`, `src/ui/view-motion.js` | `npm run test:render`; `npm run test:assets` |
| Gaza English lessons | `src/data/lessons/english/`, `src/data/lessons/subject-lesson-registry.js`, `src/data/subject-roadmaps.js` | `node --test tests/english-course.test.mjs`; `node tests/browser/browser-english-course.mjs` |
| Gaza Arabic lessons | `src/data/lessons/arabic/`, `src/data/lessons/subject-lesson-registry.js`, `src/data/subject-roadmaps.js` | `node --test tests/arabic-course.test.mjs`; `node tests/browser/browser-arabic-course.mjs` |
| App shell/navigation | `src/ui/app-shell.js`, `src/ui/coming-soon.js`, `src/styles/system.css` | `npm run test:ui-fixes`; `npm run test:browser` |
| Styles/layout | `src/styles/base.css`, `src/styles/course-map.css`, `src/styles/visitor-flow.css`, `src/styles/lesson.css`, `src/styles/lesson/`, `src/styles/responsive.css` | `npm run test:layout`; `npm run test:ui-fixes`; `npm run test:a11y` |
| Server/auth | `server.mjs`, `dev-server.mjs`, `src/server/app-server.mjs`, `src/server/runtime-config.mjs`, `src/server/auth-api.mjs`, `src/server/account-store.mjs` | `node --test tests/production-runtime.test.mjs tests/auth-api.test.mjs tests/account-store.test.mjs` |
| Durable progress | `src/server/progress-api.mjs`, `src/server/progress-store.mjs`, `src/services/server-progress.js`, `src/services/indexeddb-progress.js`, `src/services/session-progress.js` | `node --test tests/progress-api.test.mjs`; `npm run test:progress-storage` |
| Database schema/backups | `src/server/account-schema.mjs`, `src/server/account-store.mjs`, `scripts/database-maintenance.mjs` | `node --test tests/database-recovery.test.mjs` |
| Owner/student records and reset | `src/server/student-directory.mjs`, `src/server/student-dashboard.mjs`, `src/ui/student-dashboard.js`, `src/styles/student-dashboard.css`, `src/services/server-data-reset.js`, `scripts/owner-account.mjs` | `node --test tests/student-dashboard.test.mjs`; `node tests/browser/browser-student-dashboard.mjs`; `node tests/browser/browser-student-dashboard-actions.mjs`; `node tests/browser/browser-progress-continuity.mjs`; `node --test tests/server-data-reset.test.mjs` |
| Serving/packaging | `src/server/static-files.mjs`, `scripts/package-app.mjs`, `scripts/version-preview.mjs`, `scripts/preview-server.mjs` | `node --test tests/static-files.test.mjs tests/package-app.test.mjs`; `npm run test:preview` |
| Real-account local preview/offline fallback | `src/server/cloudflare-development.mjs`, `src/server/app-server.mjs`, `dev-server.mjs`, `scripts/preview-cloudflare.mjs` | `node --test tests/cloudflare-development.test.mjs tests/dev-server.test.mjs` |
| Cloudflare deploy | `.github/workflows/cloudflare-pages.yml`, `.github/cloudflare/worker.mjs`, `.github/cloudflare/routes.json`, `.github/cloudflare/verify-deployment.mjs`, `scripts/package-cloudflare.mjs`, `scripts/deploy.mjs` | `npm run test:deployment`; `npm run package:cloudflare` |
| Test tooling/project map | `tests/browser/browser-session.mjs`, `tests/browser/browser-page.mjs`, `scripts/run-gate.mjs`, `scripts/project-map.mjs`, `scripts/validate-app.mjs` | `node --test tests/browser-session.test.mjs tests/project-map.test.mjs`; `npm run build` |

## Runtime boundaries

`main.js` creates one learner session and one subject progress store. UI calls these shared services; domain modules contain pure rules. Keep storage keys and published subject/lesson/part/question IDs stable. Historical aliases and retired IDs still resolve to the canonical questions so updates preserve progress and paid unlocks.

HTTP progress uses `server-progress.js` with an account-bound IndexedDB cache/outbox. Guest and fixture progress use separate adapters. Local transactions complete before acknowledging saves; unacknowledged HTTP operations retry on reconnect and focus. Never clear progress to refresh content. Each view owns its cancellation and cleanup through `app/view-lifecycle.js`; stale work must not attach to a different view or account.

`background-loading.js` and one cancellable download queue warm onboarding, shared assets, first questions, then lessons in rounds across subjects. Opening a lesson takes priority. Offline installation includes every catalogued lesson, explanation and image, including on data-saving connections; 100% and the new offline HTML shell require all those files to be saved. The content worker never caches API responses or the Students page. Packaged file fingerprints allow reuse across releases: versioned imports are adjusted locally, and the result must match the new file's exact SHA-256 before reuse. Changed, missing or invalid files download normally. Old tabs retain their release, and the last complete offline shell remains available during interrupted updates.

Browser offline identity is owned by `services/offline-access.js`: seven days from a successful server-dated account check, with a sticky clock-rollback gate and no progress deletion. `ui/offline-access.js` blocks interaction until reconnection; downloaded lessons and the existing IndexedDB outbox survive browser restarts. Production update checks apply new releases on Home after local saves. Rated-question counts update in place without restarting entrance animations.

The browser runtime is built from this repository. Cloudflare Pages forwards `/api/*` unchanged through the existing `BACKEND` binding and uses that backend to authorize `/students` before returning the packaged dashboard layout. Production is `khutwa-app`; staging is `khutwa-app-staging`. Those Workers use D1 and Durable Objects. `src/server/cloudflare-development.mjs` proxies the default local preview to that real backend, with offline profile fallback. The other `src/server/` modules provide the isolated Node/SQLite test backend, **not** the source deployed to the Worker. See [OPERATIONS.md](OPERATIONS.md) before changing server behavior; frontend deployment must not replace the live account backend.

## Adding features

- Extend the existing owner from the table. Keep browser IO in `services/`, rendering in `ui/`, pure rules in `domain/`, curriculum in `data/`, local HTTP adapters in `server/`.
- Add lessons through the shared registry and roadmap. Follow [LESSON_AUTHORING.md](LESSON_AUTHORING.md); keep subject-specific source evidence in its coverage files. Run `node scripts/update-ict-question-index.mjs` when changing indexed ICT questions.
- Use `base.css` for shared tokens, feature stylesheets for internals, and `ui/media-ready.js` / `ui/view-motion.js` for media and motion. Preserve RTL, focus, reduced motion and the approved Rocky artwork.
- Temporary hidden features keep their existing data and URLs; use one flag. More remains unfinished. Do not add a framework or new persistence system without a concrete feature requirement.

## Checks

`npm run check` checks changed JavaScript syntax and the existing type-checked modules. Run the relevant behavior test or local browser journey for the feature. Documentation-only changes need link/command review, not an app build.

`npm run release` parses all JS, checks types and deployment behavior, then builds `_site/`; it does not deploy. Approval authorizes committing and pushing; pushes alone never publish. `npm run deploy` pushes and explicitly dispatches the approved commit to the Cloudflare workflow. Production checks cover HTTP account mode, the account API, protected Students routing, the release version and required browser libraries.

Full Node, browser, accessibility, compatibility and content audits remain available through `check:full`, `verify:full` and `release:full`. Use them for broad changes or a specific unresolved concern, not routine releases. See [AGENTS.md](../AGENTS.md) for the default workflow.
