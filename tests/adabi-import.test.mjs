import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { parseLessonMarkdown } from '../src/markdown/lesson-authoring.js';
import { parseAdabiDocument, renderAdabiRecord, buildAdabiSubject, normalizeArabicMath, normalizeTextbookQuotes, displayAdabiChoiceLabel, extractMcqGroups, publicAdabiMarkdown } from '../scripts/import-adabi-bank.mjs';

const marker = meta => `<!-- khutwa ${JSON.stringify({ source:'textbook', file:'01_Textbooks/book.pdf', pdf_page:3, question:'1', answer_status:'textbook_derived', ...meta })} -->`;

test('shared reading context follows its questions without swallowing the next passage into an answer', () => {
  const source = `# Book\n\n## Unit 1\n\n### Reading\n\nMahmoud hears English around him.\n\n### Choose:\n\n${marker({ id:'reading-1', type:'mcq' })}\n#### Question 1\n\nWhere is he?\n\n- a. Home\n- **b. Abroad**\n\n**Answer:** b. Abroad\n\n${marker({ id:'reading-2', type:'open' })}\n#### Question 2\n\nWhat does he hear?\n\n**Answer:** English\n\n### Another reading\n\nSalma studies French.\n\n${marker({ id:'reading-3', type:'open' })}\n#### Question 3\n\nWhat does she study?\n\n**Answer:** French\n`;
  const records = parseAdabiDocument(source);
  assert.equal(records.length, 3);
  assert.match(records[0].context, /Mahmoud hears English/);
  assert.match(records[1].context, /Mahmoud hears English/);
  assert.equal(records[1].answer, 'English');
  assert.match(records[2].context, /Salma studies French/);
  assert.doesNotMatch(records[2].context, /Mahmoud/);
});

test('MCQ option correctness is encoded in the answer key without bold answer leakage', () => {
  const [record] = parseAdabiDocument(`${marker({ id:'mcq-1', type:'mcq' })}\n#### Question\n\nWhich?\n\n- a. First\n- **b. Second**\n\n**Answer:** b. Second`);
  const [step] = renderAdabiRecord(record, { markdown:'The source names Second.', kind:'direct-answer' }, 'history');
  const parsed = parseLessonMarkdown(step.markdown, { published:true });
  assert.deepEqual(parsed.issues, []);
  assert.equal(parsed.steps[0].content.answers[1].correct, true);
  assert.equal(parsed.steps[0].content.answers[1].text, 'Second');
  assert.equal(parsed.steps[0].content.answers[1].id, 'option-2');
  assert.equal(extractMcqGroups(record.prompt, record.id).groups[0].choices[1].text, 'b. Second');
  assert.match(record.prompt, /- \*\*b\. Second\*\*/);
  assert.doesNotMatch(step.markdown.split('explanation:')[0], /\*\*Second\*\*/);
});

test('display enumeration is removed once without changing real choice content', () => {
  assert.equal(displayAdabiChoiceLabel('أ. <u>التدرج</u>'), '<u>التدرج</u>');
  assert.equal(displayAdabiChoiceLabel('B. `Access`'), '`Access`');
  assert.equal(displayAdabiChoiceLabel('١. ٣٫٥'), '٣٫٥');
  assert.equal(displayAdabiChoiceLabel('1. a. A literal source value'), 'a. A literal source value');
  for (const value of ['1.5', 'a.txt', 'A- blood group', 'SQL statement']) assert.equal(displayAdabiChoiceLabel(value), value);
});

test('public lessons keep book citations and exact quotations without private textbook links', () => {
  const quotation = 'يقول الكتاب:\n\n> يسمى تنسيق الرسالة **إطارًا**.';
  const privateMarkdown = `${quotation}\n\n[الكتاب، ص ٣](assets/books/adabi/book.pdf#page=5)\n\n[Book p. 8](/assets/books/adabi/book.pdf#page=10)`;
  assert.equal(publicAdabiMarkdown(privateMarkdown), `${quotation}\n\nالكتاب، ص ٣\n\nBook p. 8`);
  assert.equal(publicAdabiMarkdown('<assets/books/adabi/book.pdf#page=5>'), 'الكتاب، PDF ص 5');
  assert.equal(publicAdabiMarkdown('![Required map](assets/lessons/adabi/geography/assets/map.webp)'), '![Required map](assets/lessons/adabi/geography/assets/map.webp)');
  const [record] = parseAdabiDocument(`${marker({ id:'private-book-1', type:'open' })}\n#### Question\n\nIdentify the term.\n\n**Answer:** The term.`);
  const explanation = { markdown:privateMarkdown, kind:'direct-answer' };
  const [step] = renderAdabiRecord(record, explanation, 'information-technology');
  assert.doesNotMatch(step.markdown, /assets\/books\/adabi\//);
  assert.match(step.markdown, /reference: الكتاب · PDF 3 · السؤال 1/);
  assert.ok(step.markdown.includes(quotation));
  assert.ok(step.markdown.includes('الكتاب، ص ٣'));
  assert.equal(explanation.markdown, privateMarkdown);
});

test('explicit context markers never enter the previous answer and multiline metadata retains its ID', () => {
  const source = `${marker({ id:'before-context', type:'open' })}\n#### Question\n\nFirst question\n\n**Answer:** First answer\n\n<!-- khutwa-context {"id":"context-1"} -->\nA shared poem.\n\n<!-- khutwa {\n"id":"after-context", "type":"open"\n} -->\n#### Question\n\nSecond question\n\n**Answer:** Second answer`;
  const [first, second] = parseAdabiDocument(source);
  assert.equal(first.answer, 'First answer');
  assert.equal(second.id, 'after-context');
  assert.equal(second.context, 'A shared poem.');
});

test('word banks do not leak into later sibling question groups', () => {
  const source = `## Unit\n\n### Vocabulary · Match prefixes\n\nco-; mis-\n\n${marker({ id:'wordbank-1', type:'open' })}\n#### Question\n\nMatch operation.\n\n**Answer:** cooperation\n\n### Language · Complete using past tense\n\n${marker({ id:'grammar-1', type:'open' })}\n#### Question\n\nHe ____ a car last month.\n\n**Answer:** bought`;
  const [first, second] = parseAdabiDocument(source);
  assert.match(first.context, /co-; mis-/);
  assert.doesNotMatch(second.context, /co-; mis-/);
});

test('Arabic LaTeX compiles to native RTL MathML while existing MathML and Latin formulas stay intact', () => {
  const source = 'The derivative is $2\\text{س}+1$.\n\n$$\\int 2\\text{س}\\,\\text{دس}$$\n\n`mathml: <math><mn>2</mn></math>` and $x+1$.';
  const result = normalizeArabicMath(source);
  assert.match(result, /`mathml: <math dir="rtl"/);
  assert.match(result, /```mathml\n<math dir="rtl"/);
  assert.match(result, /<mtext>س<\/mtext>/);
  assert.doesNotMatch(result, /<annotation|<semantics>/);
  assert.match(result, /`mathml: <math><mn>2<\/mn><\/math>`/);
  assert.match(result, /\$x\+1\$/);
});

test('book quotes require exact highlights, both page identities and the source hash', () => {
  const options = { id:'quote-1', slug:'fixture', verifySource:false };
  assert.throws(() => normalizeTextbookQuotes({ markdown:'يقول الكتاب:\n> قول الكتاب', kind:'textbook-quote' }, options), /requires its evidence record/);
  const evidence = { markdown:'يقول الكتاب:\n> هذا **نص** الكتاب.', kind:'textbook-quote', textbookQuotes:[{ text:'هذا نص الكتاب.', highlights:['نص'], printedPage:2, pdfPage:4, sourceHash:'a'.repeat(64), source:'01_Textbooks/book.pdf' }] };
  const normalized = normalizeTextbookQuotes(evidence, options);
  assert.equal(normalized.textbookQuotes[0].sourceSha256, 'a'.repeat(64));
  assert.throws(() => normalizeTextbookQuotes({ ...evidence, textbookQuotes:[{ ...evidence.textbookQuotes[0], highlights:['not in quote'] }] }, options), /highlights must occur/);
  assert.throws(() => normalizeTextbookQuotes({ ...evidence, textbookQuotes:[{ ...evidence.textbookQuotes[0], pdfPage:undefined }] }, options), /missing its PDF/);
});

test('independent blanks retain original MCQ choices and stable source identity', () => {
  const record = { id:'en-item-1', meta:{ type:'mcq', source:'exam', pdf_page:4 }, context:'', prompt:'I ____ now but normally I ____.\n\n**Blank 1**\n\n- a. work\n- **b. am working**\n\n**Blank 2**\n\n- **a. work**\n- b. am working', answer:'am working; work' };
  const combined = { markdown:'Use am working for now and work for a habit.', kind:'worked-solution' };
  assert.throws(() => renderAdabiRecord(record, combined, 'english'), /require exactly 2 authored groupExplanations/);
  const steps = renderAdabiRecord(record, { ...combined, groupExplanations:[{ markdown:'For the first blank use **am working**, describing now.', kind:'worked-solution' }, { markdown:'For the second blank use **work**, describing a habit.', kind:'worked-solution' }] }, 'english');
  assert.deepEqual(steps.map(step => step.id), ['en-item-1', 'en-item-1-blank-2']);
  assert.ok(steps.every(step => step.type === 'mcq' && step.sourceId === 'en-item-1'));
  for (const step of steps) assert.deepEqual(parseLessonMarkdown(step.markdown, { published:true }).issues, []);
  assert.match(steps[0].markdown, /describing now/);
  assert.doesNotMatch(steps[0].markdown, /describing a habit|For the second blank/);
  assert.doesNotMatch(steps[1].markdown.split('explanation:')[1], /am working/);
  assert.equal(steps[1].explanationEvidence.kind, 'worked-solution');
});

test('flashcards keep answer figures on the back and never replace missing explanations with invented prose', () => {
  const record = { id:'map-1', meta:{ type:'open', source:'textbook', pdf_page:4 }, prompt:'Identify the map.\n\n![Map](assets/prompt.webp)', answer:'![Answer](assets/answer.webp)', context:'' };
  assert.throws(() => renderAdabiRecord(record, null, 'geography'), /missing authored explanation/);
  assert.throws(() => renderAdabiRecord(record, { markdown:{ text:'Not Markdown' }, kind:'direct-answer' }, 'geography'), /Markdown string/);
  assert.throws(() => renderAdabiRecord(record, { markdown:'Read the source.', kind:'direct-answer' }, 'geography', { context:{ context:'Lost passage' } }), /override.context must be a Markdown string/);
  assert.throws(() => renderAdabiRecord(record, { markdown:'Read the source.', kind:'direct-answer' }, 'geography', { context:'[object Object]' }), /context contains a stringified object/);
  const [step] = renderAdabiRecord(record, { markdown:'Read the map key.', kind:'worked-solution' }, 'geography');
  const [front, back] = step.markdown.split('final-answer:');
  assert.match(front, /assets\/lessons\/adabi\/geography\/assets\/prompt.webp/);
  assert.doesNotMatch(front, /answer.webp/);
  assert.match(back, /assets\/lessons\/adabi\/geography\/assets\/answer.webp/);
  const [withContext] = renderAdabiRecord(record, { markdown:'Read the source.', kind:'direct-answer' }, 'geography', { context:'![Source](assets/lessons/adabi/geography/source-context/page.webp)' });
  assert.match(withContext.markdown, /!\[Source\]\(assets\/lessons\/adabi\/geography\/source-context\/page.webp\)/);
  assert.doesNotMatch(withContext.markdown, /geography\/assets\/lessons/);
  const [withHeading] = renderAdabiRecord(record, { markdown:'Read the source.', kind:'direct-answer' }, 'geography', { context:'### Source heading\n\nShared passage.' });
  assert.match(withHeading.markdown, /body:\nIdentify the map\.\n\n### Source heading\n\nShared passage\./);
  assert.match(withHeading.markdown, /Shared passage\.\n\n!\[Map\]/);
  const [subparts] = renderAdabiRecord(record, { markdown:'Read the source.', kind:'direct-answer' }, 'geography', { prompt:'- أ. First task.\n- ب. Second task.', context:'### Source heading' });
  assert.match(subparts.markdown, /body:\nأ\. First task\.\n\n### Source heading\n\n- ب\. Second task\./);
  const [corrected] = renderAdabiRecord(record, { markdown:'Book evidence resolves the key conflict.', kind:'direct-answer' }, 'geography', { answer:'Corrected result.', meta:{ answer_status:'key_error_corrected' } });
  assert.match(corrected.markdown, /answer-label: إجابة المفتاح بعد التصحيح الموثق/);
  assert.match(corrected.markdown, /final-answer:\nCorrected result\./);
  assert.throws(() => renderAdabiRecord(record, { markdown:'Evidence.', kind:'direct-answer' }, 'geography', { meta:{ id:'changed-id' } }), /preserve original id/);
});

test('import refuses missing assignments and emits exact source-to-runtime reconciliation', () => {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'khutwa-adabi-import-'));
  try {
    const sourceDirectory = path.join(directory, 'source');
    const outputDirectory = path.join(directory, 'output');
    mkdirSync(sourceDirectory);
    mkdirSync(outputDirectory);
    writeFileSync(path.join(sourceDirectory, 'textbook.md'), `${marker({ id:'written-1', type:'open' })}\n#### Question\n\nExplain the cause.\n\n**Answer:** The supplied cause.`);
    const authoring = { units:[{ id:'unit-1', label:'Unit 1' }], lessons:[{ id:'lesson-1', unitId:'unit-1', label:'Lesson 1', pdfPages:[1, 5] }], assignments:{}, review:{ evidencePages:[3] }, explanations:{ 'written-1':{ markdown:'The source describes this cause.', kind:'direct-answer', evidence:{ pdfPage:3 } } } };
    const authoringPath = path.join(outputDirectory, 'authoring.json');
    writeFileSync(authoringPath, JSON.stringify(authoring));
    const options = { slug:'fixture', sourceDirectory, outputDirectory, assetDirectory:path.join(directory, 'assets'), expectedCount:1 };
    assert.throws(() => buildAdabiSubject(options), /no valid lesson assignment/);
    authoring.assignments['written-1'] = 'lesson-1';
    writeFileSync(authoringPath, JSON.stringify(authoring));
    const result = buildAdabiSubject(options);
    assert.equal(result.counts.sourceRecords, 1);
    assert.equal(result.counts.questions, 1);
    assert.equal(result.counts.flashcards, 1);
    const coverage = JSON.parse(readFileSync(path.join(outputDirectory, 'source-coverage.json')));
    assert.deepEqual(coverage.records[0].questionIds, ['written-1']);
    assert.equal(coverage.records[0].lessonId, 'lesson-1');
    assert.deepEqual(coverage.review.evidencePages, [3]);
    assert.equal(coverage.records[0].evidence.pdfPage, 3);
  } finally {
    rmSync(directory, { recursive:true, force:true });
  }
});
