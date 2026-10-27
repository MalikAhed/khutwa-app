# ICT question coverage

The student course contains questions from the supplied 2024 Gaza Scientific/Industrial textbook scope. Five lessons follow book topics: database management, SQL queries, smartphone operating systems, My mobile app, and the upper OSI layers. Within each retained topic part, question order comes from the canonical bank. Videos, summaries and the historical introduction are not shown in the student course.

## Current owners

- [exam-lessons.js](../src/data/lessons/ict/exam-lessons.js) assembles the active banks and maps questions into the published part sequence.
- [question-index.js](../src/data/lessons/ict/question-index.js) supplies Home's lightweight IDs/counts. Regenerate with `node scripts/update-ict-question-index.mjs` when the bank changes; do not duplicate changing counts in documentation.
- [subject-roadmaps.js](../src/data/subject-roadmaps.js) owns part boundaries. Original lesson/part/question IDs remain storage and review identities; old introduction links redirect to the first question lesson.
- [source-documents.json](../src/data/lessons/ict/source-documents.json) records source identities. Crop metadata beside the lesson assets retains page locations, coordinates and hashes.

Questions use the shared MCQ/written-card renderer and explanation controls. A question counts as solved only after a correct answer or an explicit correct self-check; visits, card flips, wrong attempts and retired teaching IDs do not fill the lesson ring. See [PRODUCT.md](PRODUCT.md) for shared learning behavior.

## Source boundaries

The supplied textbook defines assessed scope. Lower OSI layers, router/home-network configuration, robotics, 3-D design and additional Access forms/report procedures remain excluded. The textbook's networking divider and table of contents disagree on the unit number; preserve the established Unit 4 identity.

The bank combines textbook exercises, supplied first-semester 2024–25 directorate mock papers, selected earlier past papers, the classified collection and checked visual transcriptions. Mock papers must not be relabelled national finals. The classified collection includes national sessions from 2019–2022 and labelled mocks; its web-page title is not evidence of a 2023 final.

Original PDFs and transcription archives remain reference material outside the deployed website. Runtime figures retain original pixels or optimized derivatives with provenance; do not invent missing diagrams. Repeated prompts, cancelled topics and unreadable or answer-marked source figures are excluded. Existing source ledgers retain the detailed evidence; historical teaching/video inventories remain in Git history.

## Answer corrections

Preserve checked corrections beside their questions rather than copying a conflicting printed key. Existing examples include SQL INSERT syntax requiring `VALUES`, `floor(55/4) = 13`, the triangle-area boundary at 20, and App Inventor's programmer/browser correction. OSI uses the source's RPC spelling despite RCP in some key tables. Cascade-delete behavior is conditional unless the question specifies the setting.

Retained teaching content is historical source, not authority to reopen excluded topics or add assessed questions. Extend the existing banks and use [LESSON_AUTHORING.md](LESSON_AUTHORING.md); preserve published identities, original answer evidence and curriculum boundaries.

For bank changes, run `node --test tests/ict-course.test.mjs tests/question-index.test.mjs`. Use `node tests/browser/browser-question-course.mjs` when changing the student question flow. These are task-specific checks, not required for unrelated edits.
