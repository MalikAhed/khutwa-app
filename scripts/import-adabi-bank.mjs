import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { parseLessonMarkdown } from '../src/markdown/lesson-authoring.js';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const ADABI_SUBJECTS = ['arabic-1', 'arabic-2', 'english', 'geography', 'history', 'information-technology', 'islamic-education', 'mathematics', 'scientific-culture'];
const EXPECTED = { 'arabic-1':648, 'arabic-2':396, english:1358, geography:492, history:292, 'information-technology':257, 'islamic-education':689, mathematics:521, 'scientific-culture':376 };
const TEXTBOOKS = { 'arabic-1':'02_Arabic_1_Reading_Grammar.pdf', 'arabic-2':'03_Arabic_2_Literature_Rhetoric.pdf', english:'04_English.pdf', geography:'07_Geography.pdf', history:'06_History.pdf', 'information-technology':'09_Information_Technology_Literary.pdf', 'islamic-education':'01_Islamic_Education.pdf', mathematics:'05_Mathematics_Literary.pdf', 'scientific-culture':'08_Scientific_Culture.pdf' };
const sha256 = source => createHash('sha256').update(source).digest('hex');
const json = value => JSON.stringify(value, null, 2);
const line = value => String(value || '').replace(/\s*\n\s*/g, ' ').trim();
const textbookHashes = new Map();

export function normalizeTextbookQuotes(explanation, { id, slug, verifySource = true }) {
  if (explanation.kind === 'textbook-quote' || /يقول الكتاب\s*:/u.test(explanation.markdown)) {
    assert.ok(Array.isArray(explanation.textbookQuotes) && explanation.textbookQuotes.length, `${id}: a textbook quotation requires its evidence record`);
  }
  if (!explanation.textbookQuotes) return explanation;
  const textbookQuotes = explanation.textbookQuotes.map(quote => {
    assert.ok(typeof quote.text === 'string' && quote.text.trim(), `${id}: quote text is empty`);
    const highlights = quote.highlights || quote.highlightedSubstrings;
    assert.ok(Array.isArray(highlights) && highlights.length && highlights.every(value => typeof value === 'string' && value && quote.text.includes(value)), `${id}: quote highlights must occur in the exact quoted text`);
    const printedPage = quote.printedPage ?? quote.printed_page;
    const pdfPage = quote.pdfPage ?? quote.pdf_page;
    const printedPages = quote.printedPages ?? quote.printed_pages;
    const pdfPages = quote.pdfPages ?? quote.pdf_pages;
    const validPages = (single, multiple) => Number.isInteger(single) && single > 0 || Array.isArray(multiple) && multiple.length && multiple.every(value => Number.isInteger(value) && value > 0);
    assert.ok(validPages(printedPage, printedPages), `${id}: quote is missing its printed page(s)`);
    assert.ok(validPages(pdfPage, pdfPages), `${id}: quote is missing its PDF page(s)`);
    const sourceSha256 = quote.sourceSha256 || quote.sourceHash || quote.source_sha256;
    assert.match(sourceSha256 || '', /^[a-f0-9]{64}$/i, `${id}: quote requires the source SHA-256`);
    const source = quote.source || `01_Textbooks/${TEXTBOOKS[slug] || ''}`;
    const textbookPath = path.join(ROOT, 'assets/books/adabi', TEXTBOOKS[slug] || path.basename(source));
    if (verifySource && existsSync(textbookPath)) {
      if (!textbookHashes.has(textbookPath)) textbookHashes.set(textbookPath, sha256(readFileSync(textbookPath)));
      assert.equal(sourceSha256.toLowerCase(), textbookHashes.get(textbookPath), `${id}: quote hash does not match the supplied textbook`);
    }
    return { ...quote, text:quote.text, highlights, ...(printedPage !== undefined ? { printedPage } : { printedPages }), ...(pdfPage !== undefined ? { pdfPage } : { pdfPages }), source, sourceSha256:sourceSha256.toLowerCase() };
  });
  return { ...explanation, textbookQuotes };
}

function updateContext(prefix, state) {
  const chunks = prefix.split(/^(?=#{1,3} )/m);
  for (const chunk of chunks) {
    const heading = /^(#{1,3}) +(.+)\n?/.exec(chunk);
    if (!heading) continue;
    const level = heading[1].length;
    const title = heading[2].trim();
    const body = chunk.slice(heading[0].length).trim();
    if (level === 1) continue;
    if (level === 2) {
      state.unit = title;
      state.section = '';
      state.passage = body;
      state.instruction = '';
      state.passageScope = /reading|comprehension|نص|أبيات|مقطع/i.test(title) ? 'reading' : 'group';
      continue;
    }
    state.section = title;
    if (body) {
      state.passage = `### ${title}\n\n${body}`;
      state.instruction = '';
      state.passageScope = /reading|comprehension|نص|أبيات|مقطع/i.test(title) ? 'reading' : 'group';
    } else {
      // Word banks apply to one group. Reading passages also serve the following
      // comprehension subsections, until a new language/skill section begins.
      if (state.passageScope !== 'reading' || /vocabulary|language|grammar|writing|worksheet|progress test|قواعد|تدريب|إملاء/i.test(title)) state.passage = '';
      state.instruction = `### ${title}`;
    }
  }
}

/** Read supplied records without guessing lesson placement or explanations. */
export function parseAdabiDocument(source, sourceFile = '') {
  const markers = [...source.matchAll(/<!--\s*(khutwa|khutwa-context)\s+(\{.*?\})\s*-->/gs)];
  const state = { unit:'', section:'', passage:'', instruction:'', passageScope:'' };
  const records = [];
  updateContext(source.slice(0, markers[0]?.index ?? source.length), state);
  for (let index = 0; index < markers.length; index += 1) {
    const marker = markers[index];
    const meta = JSON.parse(marker[2]);
    const segment = source.slice(marker.index + marker[0].length, markers[index + 1]?.index ?? source.length);
    if (marker[1] === 'khutwa-context') {
      state.passage = segment.trim();
      state.passageScope = 'reading';
      state.instruction = '';
      continue;
    }
    const body = segment.replace(/^\s*####[^\n]*\n/, '').trim();
    const answerMarker = /\*\*(?:الإجابة|Answer):\*\*/.exec(body);
    assert.ok(answerMarker, `${sourceFile}: ${meta.id} has no explicit answer marker`);
    const prompt = body.slice(0, answerMarker.index).trim();
    const afterAnswer = body.slice(answerMarker.index + answerMarker[0].length);
    const nextHeading = /^#{1,3} /m.exec(afterAnswer);
    const answer = afterAnswer.slice(0, nextHeading?.index ?? afterAnswer.length).trim();
    assert.ok(prompt && answer, `${sourceFile}: ${meta.id} has an empty prompt or answer`);
    records.push({
      id:meta.id, meta, sourceFile, unit:state.unit, section:state.section,
      context:[state.passage, state.instruction].filter(Boolean).join('\n\n'),
      prompt, answer,
    });
    if (nextHeading) updateContext(afterAnswer.slice(nextHeading.index), state);
  }
  return records;
}

export function readAdabiSubject(directory) {
  const files = readdirSync(directory).filter(name => /^(?:textbook|exam).*\.md$/.test(name)).sort((a, b) => Number(!a.startsWith('textbook')) - Number(!b.startsWith('textbook')) || a.localeCompare(b));
  const records = files.flatMap(name => parseAdabiDocument(readFileSync(path.join(directory, name), 'utf8'), name));
  assert.equal(new Set(records.map(record => record.id)).size, records.length, `${directory}: duplicate source IDs`);
  return { files, records };
}

function relocateImages(markdown, slug) {
  assert.equal(typeof markdown, 'string', 'Image references require a Markdown string');
  return markdown.replace(/(!\[[^\]]*\]\()((?:\.\/)?(?:assets|evidence)\/[^)]+)(\))/g, (_, start, relative, end) => {
    const clean = relative.replace(/^\.\//, '');
    return `${start}${/^assets\/(?:lessons|books)\//.test(clean) ? clean : `assets/lessons/adabi/${slug}/${clean}`}${end}`;
  });
}

// Textbooks remain private authoring evidence. Public lessons retain the exact
// readable citation/quotation without a link to an unpublished source file.
export function publicAdabiMarkdown(markdown) {
  assert.equal(typeof markdown, 'string', 'Public lesson content requires a Markdown string');
  const withoutLinks = markdown.replace(/!?\[([^\]\n]*)\]\((?:\.\/|\/)?assets\/books\/adabi\/[^\s)]+\.pdf(?:[?#][^\s)]*)?\)/gi, '$1');
  return withoutLinks.replace(/<?(?:\.\/|\/)?assets\/books\/adabi\/[A-Za-z0-9_.%~-]+\.pdf(?:#page=(\d+))?>?/gi, (_, page) => page ? `الكتاب، PDF ص ${page}` : 'الكتاب');
}

/** Compile Arabic formula tokens once; runtime KaTeX remains strict. */
export function normalizeArabicMath(markdown) {
  assert.equal(typeof markdown, 'string', 'Math authoring requires a Markdown string');
  const protectedCode = [];
  let source = markdown.replace(/```[\s\S]*?```|`[^`\n]*`/g, code => {
    protectedCode.push(code);
    return `\u0000CODE${protectedCode.length - 1}\u0000`;
  });
  function compile(tex, display, original) {
    if (!/[\u0600-\u06ff]/u.test(tex)) return original;
    const output = katex.renderToString(tex, {
      output:'mathml', displayMode:display, throwOnError:true, trust:false,
      strict:code => ['unknownSymbol', 'symbolNotInFont'].includes(code) ? 'ignore' : 'error',
      maxExpand:1000, maxSize:20,
    });
    const math = /<math\b[\s\S]*?<\/math>/.exec(output)?.[0];
    assert.ok(math, 'Arabic LaTeX produced no MathML');
    const formula = math.replace(/<annotation\b[\s\S]*?<\/annotation>/g, '').replace(/<\/?semantics>/g, '').replace('<math', '<math dir="rtl"');
    return display ? `\n\n\`\`\`mathml\n${formula}\n\`\`\`\n\n` : `\`mathml: ${formula}\``;
  }
  source = source.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]|(?<![\\$])\$([^\n$]+?)\$(?!\$)|\\\(([^\n]*?)\\\)/g, (original, dollarsDisplay, bracketDisplay, dollarsInline, parenInline) => compile(dollarsDisplay ?? bracketDisplay ?? dollarsInline ?? parenInline, dollarsDisplay !== undefined || bracketDisplay !== undefined, original));
  return source.replace(/\u0000CODE(\d+)\u0000/g, (_, index) => protectedCode[Number(index)]);
}

function normalizedChoice(choice) {
  return choice.replace(/\*\*/g, '').trim();
}

// The native choice controller owns the displayed enumeration. Preserve source
// labels in extraction/provenance and remove one known decoration at emission.
export function displayAdabiChoiceLabel(text) {
  assert.equal(typeof text, 'string', 'Choice labels require a Markdown string');
  return text.replace(/^(?:[أبجدA-Da-d]|[1-4١-٤])\.[ \t]+/u, '');
}

/** Preserve independent choice groups rather than inventing combined options. */
export function extractMcqGroups(prompt, id) {
  const lines = prompt.split('\n');
  const first = lines.findIndex(text => /^\s*-\s+/.test(text));
  assert.ok(first >= 0, `${id}: MCQ has no original choices`);
  const blankHeading = /^\*\*Blank (\d+)\*\*$/i;
  let frontEnd = first;
  if (blankHeading.test(lines[first - 2]?.trim() || '')) frontEnd = first - 2;
  else if (blankHeading.test(lines[first - 1]?.trim() || '')) frontEnd = first - 1;
  const question = lines.slice(0, frontEnd).join('\n').trim();
  const groups = [];
  let current = { label:'', choices:[] };
  for (const text of lines.slice(frontEnd)) {
    const blank = blankHeading.exec(text.trim());
    if (blank) {
      if (current.choices.length) groups.push(current);
      current = { label:`Blank ${blank[1]}`, choices:[] };
      continue;
    }
    const choice = /^\s*-\s+(.+)$/.exec(text);
    if (choice) current.choices.push({ text:normalizedChoice(choice[1]), correct:/\*\*/.test(choice[1]) });
    else if (text.trim()) {
      assert.ok(!current.choices.length, `${id}: unparsed content after MCQ choices: ${text}`);
    }
  }
  if (current.choices.length) groups.push(current);
  assert.ok(question, `${id}: MCQ has no question text`);
  for (const group of groups) {
    assert.ok(group.choices.length >= 2, `${id}: fewer than two choices`);
    assert.equal(group.choices.filter(choice => choice.correct).length, 1, `${id}: each MCQ group needs one verified correct choice`);
  }
  return { question, groups };
}

function reference(record) {
  const meta = record.meta;
  const source = meta.source === 'textbook' ? 'الكتاب' : 'مجموعة الامتحانات';
  const printed = meta.printed_page ? ` · ص ${meta.printed_page}` : '';
  const exam = meta.exam_label ? ` · ${meta.exam_label}` : '';
  const label = `${source}${printed} · PDF ${meta.pdf_page} · السؤال ${meta.question || ''}${exam}`;
  return label;
}

function answerLabel(meta) {
  return meta.answer_status === 'key_error_corrected' ? 'إجابة المفتاح بعد التصحيح الموثق'
    : meta.answer_status === 'keyed' ? 'إجابة المفتاح المرفق'
      : meta.answer_status === 'textbook_derived' ? 'إجابة مستندة إلى الكتاب' : 'إجابة نموذجية للتدريب';
}

function assertAuthoredExplanation(explanation, id) {
  assert.ok(typeof explanation?.markdown === 'string' && explanation.markdown.trim(), `${id}: missing authored explanation Markdown string`);
  assert.ok(!explanation.markdown.includes('[object Object]'), `${id}: explanation contains a stringified object`);
  assert.ok(['textbook-quote', 'direct-answer', 'worked-solution', 'reasoning', 'mixed'].includes(explanation.kind), `${id}: missing explanation kind`);
}

export function renderAdabiRecord(record, explanation, slug, override = {}) {
  assertAuthoredExplanation(explanation, record.id);
  assert.ok(override && typeof override === 'object' && !Array.isArray(override), `${record.id}: source override must be an object`);
  for (const field of ['prompt', 'answer', 'context']) {
    assert.ok(!Object.hasOwn(override, field) || typeof override[field] === 'string', `${record.id}: override.${field} must be a Markdown string`);
    assert.ok(typeof record[field] === 'string', `${record.id}: source ${field} must be a Markdown string`);
    assert.ok(!record[field].includes('[object Object]') && !override[field]?.includes('[object Object]'), `${record.id}: ${field} contains a stringified object`);
  }
  if (override.meta) {
    for (const field of ['id', 'type', 'source', 'file', 'pdf_page']) {
      assert.ok(override.meta[field] === undefined || override.meta[field] === record.meta[field], `${record.id}: correction must preserve original ${field}`);
    }
    record = { ...record, meta:{ ...record.meta, ...override.meta } };
  }
  const format = text => normalizeArabicMath(relocateImages(publicAdabiMarkdown(text), slug));
  const prompt = format(override.prompt ?? record.prompt);
  const answer = format(override.answer ?? record.answer);
  const context = format(override.context ?? record.context);
  const solution = format(explanation.markdown);
  const title = reference(record);
  const sourceReference = reference(record);
  if (record.meta.type === 'mcq') {
    const { question, groups } = extractMcqGroups(prompt, record.id);
    const grouped = groups.length > 1 || explanation.groupExplanations !== undefined;
    if (grouped) assert.ok(Array.isArray(explanation.groupExplanations) && explanation.groupExplanations.length === groups.length, `${record.id}: independent MCQ groups require exactly ${groups.length} authored groupExplanations`);
    return groups.map((group, index) => {
      const id = index ? `${record.id}-blank-${index + 1}` : record.id;
      const authoredGroup = grouped ? explanation.groupExplanations[index] : explanation;
      assertAuthoredExplanation(authoredGroup, id);
      const stepExplanation = grouped ? normalizeTextbookQuotes(authoredGroup, { id, slug }) : explanation;
      const stepSolution = grouped ? format(stepExplanation.markdown) : solution;
      const simpleQuestion = question.split('\n').find(text => text.trim() && !/^(?:!\[|\|)/.test(text)) || record.section;
      const heading = groups.length > 1 ? `${simpleQuestion} · ${group.label}` : simpleQuestion;
      const richQuestion = question.includes('\n') || /!\[|\|/.test(question);
      const supportingContent = [context, richQuestion ? question : ''].filter(Boolean).join('\n\n');
      const example = supportingContent ? `\nexample:\n${supportingContent}` : '';
      return { id, sourceId:record.id, type:'mcq', ...(grouped ? { explanationEvidence:stepExplanation } : {}), markdown:`:::mcq\nid: ${id}\ntitle: ${line(title)}\nkicker: ${line(title)}\nreference: ${line(sourceReference)}\nquestion: ${line(heading)}\n${group.choices.map((choice, option) => `- [${choice.correct ? 'x' : ' '}] option-${option + 1} | ${line(displayAdabiChoiceLabel(choice.text))}`).join('\n')}\nexplanation:\n${stepSolution}\nhint: ${slug === 'english' ? 'Read the question and its context carefully.' : 'اقرأ السؤال والسياق المرفق قبل اختيار الإجابة.'}${example}\n:::` };
    });
  }
  assert.equal(record.meta.type, 'open', `${record.id}: unsupported source type`);
  // The shared flashcard renders the first body line as an inline h1. Keep the
  // source question there; passages/headings need the Markdown body below it.
  const promptLines = prompt.trim().split('\n');
  const heading = promptLines.shift().replace(/^(?:#{1,6}\s+|>\s*|[-*+]\s+)/, '').trim();
  const front = [heading, context, promptLines.join('\n').trim()].filter(Boolean).join('\n\n');
  return [{ id:record.id, sourceId:record.id, type:'exam-question', markdown:`:::exam-question\nid: ${record.id}\ntitle: ${line(title)}\nquestion: ${line(heading)}\nreference: ${line(sourceReference)}\nanswer-label: ${answerLabel(record.meta)}\nbody:\n${front}\nfinal-answer:\n${answer}\nsolution:\n${solution}\n:::` }];
}

export function buildAdabiSubject({ slug, sourceDirectory, outputDirectory, assetDirectory, expectedCount = EXPECTED[slug] }) {
  const authoringPath = path.join(outputDirectory, 'authoring.json');
  assert.ok(existsSync(authoringPath), `${slug}: missing subject authoring.json`);
  const authoring = JSON.parse(readFileSync(authoringPath, 'utf8'));
  assert.ok(!authoring.blockers || Array.isArray(authoring.blockers) && authoring.blockers.length === 0, `${slug}: unresolved subject blockers prevent publication`);
  assert.ok(!authoring.review?.blockers || Array.isArray(authoring.review.blockers) && authoring.review.blockers.length === 0, `${slug}: unresolved source review blockers prevent publication`);
  const { files, records } = readAdabiSubject(sourceDirectory);
  if (expectedCount !== undefined) assert.equal(records.length, expectedCount, `${slug}: source record count differs from release manifest`);
  const lessonMap = new Map(authoring.lessons.map(lesson => [lesson.id, lesson]));
  assert.equal(lessonMap.size, authoring.lessons.length, `${slug}: duplicate lesson ID`);
  const units = authoring.units;
  const unitIds = new Set(units.map(unit => unit.id));
  const byLesson = new Map(authoring.lessons.map(lesson => [lesson.id, []]));
  const coverage = [];
  for (const record of records) {
    const lessonId = authoring.assignments[record.id];
    assert.ok(lessonMap.has(lessonId), `${slug}: ${record.id} has no valid lesson assignment`);
    const authoredExplanation = authoring.explanations[record.id];
    assert.ok(authoredExplanation, `${record.id}: missing authored explanation`);
    assert.ok(!authoredExplanation.blocked && authoredExplanation.status !== 'blocked', `${record.id}: unresolved answer blocker prevents publication`);
    const explanation = normalizeTextbookQuotes(authoredExplanation, { id:record.id, slug });
    const override = authoring.overrides?.[record.id];
    const steps = renderAdabiRecord(record, explanation, slug, override);
    byLesson.get(lessonId).push(...steps);
    const { markdown:explanationMarkdown, kind:explanationKind, ...explanationEvidence } = explanation;
    coverage.push({ id:record.id, lessonId, questionIds:steps.map(step => step.id), sourceFile:record.sourceFile, ...record.meta, ...(override?.meta ? { ...override.meta, originalMetadata:record.meta } : {}), explanationKind, ...explanationEvidence, ...(steps.length > 1 ? { stepExplanations:steps.map(step => ({ questionId:step.id, ...step.explanationEvidence })) } : {}) });
  }
  const runtimeIds = [...byLesson.values()].flat().map(step => step.id);
  assert.equal(new Set(runtimeIds).size, runtimeIds.length, `${slug}: duplicate runtime question IDs`);
  const lessons = authoring.lessons.map(lesson => {
    assert.ok(unitIds.has(lesson.unitId), `${slug}: ${lesson.id} has invalid unit`);
    const steps = byLesson.get(lesson.id);
    assert.ok(steps.length, `${slug}: ${lesson.id} has no questions`);
    const source = steps.map(step => step.markdown).join('\n\n');
    const parsed = parseLessonMarkdown(source, { published:true });
    assert.deepEqual(parsed.issues, [], `${slug}/${lesson.id}: invalid published Markdown`);
    assert.deepEqual(parsed.steps.map(step => step.id), steps.map(step => step.id), `${slug}/${lesson.id}: parser changed question identity/order`);
    const pages = lesson.pages || (lesson.pdfPages ? `${lesson.pdfPages[0]}–${lesson.pdfPages.at(-1)}` : 'رزمة غزة ٢٠٢٤');
    const questionIds = steps.map(step => step.id);
    const meta = { ...lesson, pages, questionCount:steps.length, questionIds, parts:[{ id:`${lesson.id}-practice`, label:lesson.label, pages, startStepId:questionIds[0], questionIds }] };
    writeFileSync(path.join(outputDirectory, `${lesson.id}.js`), `import { createAdabiLesson } from "../shared.js";\n\nexport const source = ${JSON.stringify(source)};\n\nexport default createAdabiLesson(${json({ id:meta.id, label:meta.label, questionCount:meta.questionCount, ...(slug === 'english' ? { language:'en' } : {}) })}, source);\n`);
    return meta;
  });
  writeFileSync(path.join(outputDirectory, 'course.js'), `// Navigation metadata only; question bodies remain lazy.\nexport const ADABI_UNITS = Object.freeze(${json(units)});\n\nexport const ADABI_LESSONS = Object.freeze(${json(lessons)});\n`);
  const sourceFiles = Object.fromEntries(files.map(file => [file, sha256(readFileSync(path.join(sourceDirectory, file)))]));
  const counts = { sourceRecords:records.length, mcqSourceRecords:records.filter(record => record.meta.type === 'mcq').length, openSourceRecords:records.filter(record => record.meta.type === 'open').length, questions:runtimeIds.length, mcqSteps:[...byLesson.values()].flat().filter(step => step.type === 'mcq').length, flashcards:[...byLesson.values()].flat().filter(step => step.type === 'exam-question').length };
  const { units:authoringUnits, lessons:authoringLessons, assignments, explanations, ...authoringEvidence } = authoring;
  writeFileSync(path.join(outputDirectory, 'source-coverage.json'), json({ ...authoringEvidence, sourceFiles, counts, units, lessons:lessons.map(({ id, unitId, label, pdfPages }) => ({ id, unitId, label, pdfPages })), records:coverage }) + '\n');
  for (const folder of ['assets', 'evidence']) {
    const sourceAssets = path.join(sourceDirectory, folder);
    if (!existsSync(sourceAssets)) continue;
    function copy(directory, relative = '') {
      for (const entry of readdirSync(directory, { withFileTypes:true })) {
        const next = path.join(relative, entry.name);
        if (entry.isDirectory()) copy(path.join(directory, entry.name), next);
        else {
          const destination = path.join(assetDirectory, folder, next);
          mkdirSync(path.dirname(destination), { recursive:true });
          copyFileSync(path.join(directory, entry.name), destination);
        }
      }
    }
    copy(sourceAssets);
  }
  return { slug, units, lessons, counts };
}

export function writeAdabiCatalog(subjects, directory) {
  const imports = subjects.map(({ slug }, index) => `import { ADABI_UNITS as units${index}, ADABI_LESSONS as lessons${index} } from "./${slug}/course.js";`).join('\n');
  writeFileSync(path.join(directory, 'catalog.js'), `${imports}\n\nexport const ADABI_COURSES = Object.freeze([\n${subjects.map(({ slug }, index) => `  { subjectId:"adabi-${slug}", units:units${index}, lessons:lessons${index} },`).join('\n')}\n]);\n`);
  writeFileSync(path.join(directory, 'registry.js'), `// Literal import paths let the offline manifest discover every lesson module.\nexport const ADABI_LESSON_LOADERS = new Map([\n${subjects.flatMap(({ slug, lessons }) => lessons.map(lesson => `  ["adabi-${slug}:${lesson.id}", () => import("./${slug}/${lesson.id}.js")],`)).join('\n')}\n]);\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const subjectArg = args.indexOf('--subject');
  const sourceArg = args.indexOf('--source');
  const sourceRoot = sourceArg >= 0 ? path.resolve(args[sourceArg + 1]) : path.join(ROOT, 'tmp/adabi-release');
  const slugs = subjectArg >= 0 ? [args[subjectArg + 1]] : ADABI_SUBJECTS;
  for (const slug of slugs) assert.ok(ADABI_SUBJECTS.includes(slug), `Unknown subject ${slug}`);
  const out = path.join(ROOT, 'src/data/lessons/adabi');
  const subjects = slugs.map(slug => buildAdabiSubject({ slug, sourceDirectory:path.join(sourceRoot, slug), outputDirectory:path.join(out, slug), assetDirectory:path.join(ROOT, 'assets/lessons/adabi', slug) }));
  if (slugs.length === ADABI_SUBJECTS.length) writeAdabiCatalog(subjects, out);
  console.log(json(subjects.map(({ slug, counts, lessons }) => ({ slug, lessons:lessons.length, ...counts }))));
}
