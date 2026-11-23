import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access } from "node:fs/promises";
import test from "node:test";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";

// Source records, original MCQs, written questions, extra independent blanks.
// Public verification depends only on compiled navigation and question modules.
const manifest = {
  "arabic-1":[648,176,472,0], "arabic-2":[396,138,258,0], english:[1358,252,1106,9],
  geography:[492,253,239,0], history:[292,122,170,0], "information-technology":[257,99,158,0],
  "islamic-education":[689,257,432,0], mathematics:[521,263,258,0], "scientific-culture":[376,179,197,0],
};
// Reviewed corpus after source corrections and explanation improvements.
// The question surfaces have separate fingerprints below.
const fingerprints = {
  "arabic-1": "579cdb51e04e185dddd1ffc4f2a1597b89268448c565a303c1a55f18148400d2",
  "arabic-2": "8bad0b1ebafe9a1f67e92fd87e94dabe87c27bde4032fddec2b2b21a8304e9d3",
  "english": "7e11bd8d560f943810108d2e7433f5007d88ae2e970f18a1a742395c1eadbcfd",
  "geography": "a53c03a0424ed8c5f1dc2223942773a8f77ed035ae94fb8d11e317edd773097e",
  "history": "faa9ecb898d83056d67d72bfba0b2819afa5fc3bc236f7b45b2e8d730df27ec3",
  "information-technology": "0c0122a7847131b160a8a86cf2f622808b482fd973c511ccdc8a9c00ab69fa8a",
  "islamic-education": "d23cebe7d16e61f543ba7dc40a493912569e5b28677372a7d575708ecfe1af31",
  "mathematics": "cbd65b41a7ed4fd822627df7cdf31780557af8d1eef8b89ae66b6fdf1318b68c",
  "scientific-culture": "b1b7f04b52febf891897752898fb8d370826669bb4d2d722190af17d45ac4b99"
};
// Question fingerprints pin audited prompts, choices, keys, citations and progress
// identities independently of teaching prose and answer layout.
const questionFingerprints = {
  "arabic-1":"6d4d5b53abd2c75a46b83f1d100b5b272b505ecc7a38914de07d1b59d6f34859",
  "arabic-2":"27b3c2137048adc8fea85b78f347b4b20ec2f6bc247e984779ee2e6921cdcd80",
  english:"0976f7b8772aee12a1b483b34494bec0db9560ece35b7eae6d118016e338ab70",
  geography:"46eed4f7047ba323b7212acdfdae4c1f98d8dcdb668f8d065028d1f34079248d",
  history:"fa3902cdc169dabb1a2323c01338e08570f31deebb6e927f978afe7a87bac1ac",
  "information-technology":"a2762e37801465593cc04334552f0277d2237c1eb141ee25f33d5fe5fd271a36",
  "islamic-education":"ff36dd900abe83f609ecb6dd016fae498445ed796bfda8d3fc3774052436dd98",
  mathematics:"8ed3bfe56dc41bdb24a7d7e40cc69e00a5a4d7f15fc7610de7b6f97cc904cce0",
  "scientific-culture":"68f19e4a7ec434c19abb8d2764b91a23e7c7e2cec19007a940ed10133969b6b1",
};
const pairedIds = new Set([
  "en-t-p009-q03","en-t-p009-q04","en-t-p009-q05","en-t-p009-q10","en-t-p012-q18",
  "en-t-p012-q22","en-e1-p012-q06","en-e1-p012-q08","en-e1-p031-q14",
]);
const root = new URL("../", import.meta.url);
const contentStrings = value => typeof value === "string" ? [value]
  : value && typeof value === "object" ? Object.values(value).flatMap(contentStrings) : [];
const canonical = value => typeof value === "string" ? value.trim()
  : Array.isArray(value) ? value.map(canonical)
  : value && typeof value === "object" ? Object.fromEntries(Object.keys(value).sort().map(key => [key,canonical(value[key])])) : value;
const digits = text => text.replace(/[٠-٩]/g, character => String("٠١٢٣٤٥٦٧٨٩".indexOf(character)));
const subjects = new Map();
async function subject(slug) {
  if (!subjects.has(slug)) subjects.set(slug, (async () => {
    const base = `src/data/lessons/adabi/${slug}/`;
    const course = await import(new URL(`${base}course.js`, root));
    const hash = createHash("sha256");
    const questionHash = createHash("sha256");
    hash.update(JSON.stringify(canonical({ units:course.ADABI_UNITS,
      lessons:course.ADABI_LESSONS.map(({id,unitId,label,pages,pdfPages,questionCount,parts}) => ({id,unitId,label,pages,pdfPages,questionCount,parts})) })));
    const steps = new Map();
    for (const catalog of course.ADABI_LESSONS) {
      const { default:lesson } = await import(new URL(`${base}${catalog.id}.js`, root));
      assert.doesNotMatch(lesson.authoringSource, /assets\/books\/adabi\/|authoring\.json|source-coverage\.json/);
      const parsed = parseLessonMarkdown(lesson.authoringSource, { published:true });
      assert.deepEqual(parsed.issues, [], `${slug}/${catalog.id}`);
      assert.deepEqual(parsed.steps.map(step => step.id), catalog.questionIds, `${slug}/${catalog.id}`);
      for (const step of parsed.steps) {
        assert.equal(steps.has(step.id), false, `Repeated question ${slug}/${step.id}`);
        for (const value of contentStrings(step.content)) {
          assert.doesNotMatch(value, /\[object (?:Object|Array)\]|\{\{[^}]+\}\}|\b(?:TODO|FIXME|TBD)\b/i, `${slug}/${step.id}`);
          assert.doesNotMatch(value, /assets\/books\/adabi\//, `${slug}/${step.id}: private document dependency`);
        }
        hash.update(JSON.stringify(canonical({lessonId:catalog.id,id:step.id,type:step.type,content:step.content})));
        const questionContent = { ...step.content };
        for (const field of ["correctFeedback", "incorrectFeedback", "solution", "finalAnswer"]) delete questionContent[field];
        questionHash.update(JSON.stringify(canonical({lessonId:catalog.id,id:step.id,type:step.type,content:questionContent})));
        steps.set(step.id, { ...step, lessonId:catalog.id });
      }
    }
    return { course, steps, fingerprint:hash.digest("hex"), questionFingerprint:questionHash.digest("hex") };
  })());
  return subjects.get(slug);
}

test("compiled Adabi preserves all source identities and MCQ/written formats", async () => {
  const totals = { records:0, mcq:0, written:0, runtime:0, lessons:0 };
  for (const [slug,[records,mcq,written,extra]] of Object.entries(manifest)) {
    const { course,steps } = await subject(slug);
    assert.equal(steps.size, records + extra, slug);
    assert.equal([...steps.values()].filter(step => step.type === "mcq").length, mcq + extra, slug);
    assert.equal([...steps.values()].filter(step => step.type === "exam-question").length, written, slug);
    const sourceIds = new Set();
    let additional = 0;
    for (const step of steps.values()) {
      assert.ok(["mcq","exam-question"].includes(step.type), step.id);
      if (step.id.endsWith("-blank-2")) {
        const sourceId = step.id.slice(0,-8);
        assert.equal(slug,"english");
        assert.ok(pairedIds.has(sourceId),step.id);
        assert.equal(step.type,"mcq");
        assert.equal(steps.get(sourceId)?.type,"mcq");
        assert.equal(steps.get(sourceId)?.lessonId,step.lessonId);
        sourceIds.add(sourceId); additional++;
      } else sourceIds.add(step.id);
    }
    assert.equal(additional,extra,slug);
    assert.equal(sourceIds.size,records,slug);
    totals.records += records; totals.mcq += mcq; totals.written += written;
    totals.runtime += steps.size; totals.lessons += course.ADABI_LESSONS.length;
  }
  assert.deepEqual(totals,{records:5029,mcq:1739,written:3290,runtime:5038,lessons:143});
});

test("explanation and answer-layout edits preserve every published question and correct key", async () => {
  for (const slug of Object.keys(manifest)) {
    const { questionFingerprint } = await subject(slug);
    assert.equal(questionFingerprint,questionFingerprints[slug],`${slug}: published prompt, key, reference or identity changed`);
  }
});

test("compiled prompts, keys, answers, per-step feedback and page citations match the audited bank", async () => {
  for (const slug of Object.keys(manifest)) {
    const { steps,fingerprint } = await subject(slug);
    assert.equal(fingerprint,fingerprints[slug],`${slug}: audited question semantics changed`);
    for (const step of steps.values()) {
      const content = step.content;
      assert.match(digits(content.reference),/PDF\s*\d+/,step.id);
      const explanation = step.type === "mcq" ? content.correctFeedback : content.solution;
      assert.ok(explanation.trim(),step.id);
      if (/يقول\s+الكتاب\s*:/.test(explanation)) {
        assert.match(explanation,/^> /m,step.id);
        assert.match(explanation,/\*\*[^*]+\*\*/,step.id);
        assert.match(digits(explanation),/(?:ص|صفحة|صفحات|pp?\.?)\s*\d/i,`${step.id}: printed citation missing`);
      }
      if (step.type === "mcq") {
        assert.equal(content.answers.filter(answer => answer.correct).length,1,step.id);
        assert.ok(content.answers.length >= 2,step.id);
        assert.equal(new Set(content.answers.map(answer => answer.id)).size,content.answers.length,step.id);
        const labels = content.answers.map(answer => answer.text.normalize("NFC").replace(/\s+/g," ").trim());
        assert.equal(new Set(labels).size,labels.length,`${step.id}: duplicate displayed options`);
      } else {
        assert.ok(content.body.trim() && content.finalAnswer.trim() && content.answerLabel.trim(),step.id);
        assert.doesNotMatch(content.body.trim().split("\n")[0],/^(?:#{1,6}\s|>\s|[-*+]\s)/,step.id);
      }
    }
  }
});

test("Adabi lesson navigation and progress boundaries match the compiled catalog", async () => {
  const { getSubjectRoadmap } = await import("../src/data/subject-roadmaps.js");
  const { loadSubjectLessonPart } = await import("../src/data/lessons/subject-lesson-registry.js");
  for (const slug of Object.keys(manifest)) {
    const subjectId = `adabi-${slug}`;
    const { course, steps } = await subject(slug);
    const roadmap = getSubjectRoadmap(subjectId);
    assert.ok(roadmap?.questionsOnly, subjectId);
    assert.deepEqual(roadmap.units.map(unit => unit.id), course.ADABI_UNITS.map(unit => unit.id), subjectId);
    const roadLessons = roadmap.units.flatMap(unit => unit.lessons);
    assert.equal(roadLessons.length, course.ADABI_LESSONS.length, subjectId);
    for (const lesson of course.ADABI_LESSONS) {
      const roadLesson = roadLessons.find(item => item.id === lesson.id);
      assert.ok(roadLesson, `${subjectId}/${lesson.id}`);
      assert.deepEqual(roadLesson.parts.flatMap(part => part.questionIds), lesson.questionIds);
      assert.equal(lesson.questionCount, lesson.questionIds.length);
      assert.ok(lesson.questionCount > 0);
      const unit = roadmap.units.find(unit => unit.lessons.includes(roadLesson));
      assert.equal(unit.id, lesson.unitId);
      for (const part of roadLesson.parts) {
        assert.equal(part.startStepId, part.questionIds[0]);
        const loaded = await loadSubjectLessonPart(subjectId, lesson.id, part.id);
        assert.deepEqual(loaded.steps.map(step => step.id), part.questionIds, part.id);
        for (const id of part.questionIds) assert.equal(steps.get(id).lessonId, lesson.id);
      }
    }
  }
});

test("all 63 required question images resolve without private textbook dependencies", async () => {
  const images = new Set();
  for (const slug of Object.keys(manifest)) {
    const { steps } = await subject(slug);
    for (const step of steps.values()) for (const value of contentStrings(step.content)) {
      assert.doesNotMatch(value,/\]\([^)]*assets\/books\/adabi\//,step.id);
      for (const match of value.matchAll(/!?\[[^\]]*\]\((assets\/[^)]+)\)/g)) {
        const resource = match[1].split("#")[0];
        assert.match(resource,/^assets\/lessons\/adabi\//,step.id);
        assert.equal(resource.includes(".."),false,resource);
        assert.ok(match[0].startsWith("!"),`${step.id}: unexpected local document dependency`);
        if (!images.has(resource)) await access(new URL(resource,root));
        images.add(resource);
      }
    }
  }
  assert.equal(images.size,63);
});

test("English reading passages and word banks stay with their own question groups", async () => {
  const { steps } = await subject("english");
  const reading = steps.get("en-e1-p006-q01");
  assert.match(reading.content.example, /Lectures don’t start till next week/);
  assert.match(reading.content.example, /<u>It<\/u>/);
  const bank = steps.get("en-t-p030-q16");
  assert.match(bank.content.body, /Word bank:\*\* operation – understood – leading – behave – writer/);
  for (const id of ["en-t-p031-q01", "en-t-p031-q13"]) {
    const grammar = steps.get(id);
    assert.match(grammar.content.body, /correct tense of the verbs in brackets/);
    assert.doesNotMatch(grammar.content.body, /Word bank|Match the prefixes|co- \/ mis-/);
  }
});

test("split English MCQs explain the selected blank without revealing the next answer", async () => {
  const { steps } = await subject("english");
  const paired = [...steps.keys()].filter(id => id.endsWith("-blank-2")).map(id => ({ id:id.slice(0,-8), questionIds:[id.slice(0,-8),id] }));
  assert.equal(paired.length, 9);
  for (const record of paired) {
    const [first, second] = record.questionIds.map(id => steps.get(id));
    assert.notEqual(first.content.correctFeedback, second.content.correctFeedback, record.id);
  }
  const first = steps.get("en-t-p009-q03");
  const second = steps.get("en-t-p009-q03-blank-2");
  assert.match(first.content.correctFeedback, /don[’']t enjoy/);
  assert.doesNotMatch(first.content.correctFeedback, /\bam enjoying\b/i);
  assert.match(second.content.correctFeedback, /am enjoying/);
});

test("Arabic shared assessment passages belong to their named source groups", async () => {
  const { steps } = await subject("arabic-1");
  const previous = steps.get("ar1-t-p026-q07");
  assert.doesNotMatch(previous.content.correctFeedback, /نص السؤال 2|وَشَرَوْهُ/);
  const quran = steps.get("ar1-t-p027-q01");
  assert.match(quran.content.example, /وَشَرَوْهُ/);
  assert.match(quran.content.example, /<u>مِصْرَ<\/u>/);
  const poetry = steps.get("ar1-t-p027-q09");
  assert.match(poetry.content.body, /أنا أبكي على أيام قريتنا/);
  assert.doesNotMatch(poetry.content.body, /وَشَرَوْهُ/);
  const extraction = steps.get("ar1-t-p036-q10");
  const withoutVowels = text => text.replace(/[\u0610-\u061a\u064b-\u065f\u0670]/g, "");
  assert.match(withoutVowels(extraction.content.body), /ممزق أنا/);
  const ending = steps.get("ar1-t-p055-q13");
  assert.match(withoutVowels(ending.content.body), /عادت الحافلة أدراجها/,
    "The story-ending question needs the conclusion above the next page's comprehension questions");
});

test("qualified Islamic responses are visibly labelled as model answers", async () => {
  const { steps } = await subject("islamic-education");
  for (const id of ["islamic-e-p119-q8-open", "islamic-e-p119-q16-open"]) {
    assert.equal(steps.get(id).content.answerLabel, "إجابة نموذجية للتدريب", id);
    assert.match(steps.get(id).content.finalAnswer, /بافتراض|إذا/, id);
  }
});

test("Adabi question identities receive rewards and resolve without claiming Elmi identities", async () => {
  const { getQuestionXp, questionRewardKey, resolveQuestionLocation, QUESTION_REWARDS } = await import("../src/domain/question-rewards.js");
  const { MAX_LEVEL_XP } = await import("../src/domain/progression.js");
  const expected = new Set();
  for (const slug of Object.keys(manifest)) {
    const subjectId = `adabi-${slug}`;
    const { course } = await subject(slug);
    for (const lesson of course.ADABI_LESSONS) for (const part of lesson.parts) for (const stepId of part.questionIds) {
      const key = { subjectId, lessonId:lesson.id, partId:part.id, stepId };
      assert.deepEqual(resolveQuestionLocation(key), key);
      assert.ok(getQuestionXp(key) > 0, `${subjectId}/${stepId}`);
      expected.add(questionRewardKey(key));
    }
  }
  const rewards = QUESTION_REWARDS.filter(question => question.subjectId.startsWith("adabi-"));
  assert.deepEqual(new Set(rewards.map(questionRewardKey)), expected);
  assert.equal(rewards.reduce((total, reward) => total + reward.xp, 0), MAX_LEVEL_XP);
  assert.equal(new Set([...expected].map(key => JSON.parse(key)[0])).size, 9);
});
