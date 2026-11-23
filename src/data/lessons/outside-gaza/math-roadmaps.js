import { ADABI_LESSONS } from "../adabi/mathematics/course.js";
import { MATHEMATICS_LESSONS, PARTIAL_FRACTION_QUESTION_IDS } from "../mathematics/math-course.js";
import { createTextbookRoadmap, resolveLegacyTextbookLink, sharedPracticeParts } from "./textbook-practice.js";

export const OUTSIDE_GAZA_MATH_1 = "outside-gaza-scientific-math";
export const OUTSIDE_GAZA_MATH_2 = "outside-gaza-scientific-math-2";
const LITERARY_MATH = "outside-gaza-literary-math";
export const isOutsideGazaMath2Lesson = lessonId => /^unit-[345]-/.test(lessonId || "");
export const isOutsideGazaMath = subjectId => [OUTSIDE_GAZA_MATH_1, OUTSIDE_GAZA_MATH_2, LITERARY_MATH].includes(subjectId);

// Titles and lesson order from the Ministry textbook (2025 edition, contents).
// The ranges are PDF pages of the corresponding 2026 Al-Kamel collection.
// Standalone textbook exercises and mixed papers are part of the unit review.
const scientificUnits = [
  ["حساب التفاضل", "48–51", [
    ["متوسط التغير", "4–8", 5, 17],
    ["قواعد الاشتقاق", "9–18", 20, 30],
    ["مشتقات الاقترانات المثلثية", "19–21", 32, 34],
    ["قاعدة لوبيتال، ومشتقة الاقتران الأسي واللوغاريتمي", "22–29", 35, 41],
    ["تطبيقات هندسية وفيزيائية", "30–36", 43, 65],
    ["قاعدة السلسلة", "37–41", 67, 93],
    ["الاشتقاق الضمني", "42–47", 95, 107],
  ]],
  ["تطبيقات التفاضل", "82–85", [
    ["الاقترانات المتزايدة والمتناقصة", "54–58", 5, 12],
    ["القيم القصوى", "59–68", 13, 31],
    ["التقعر ونقط الانعطاف", "69–77", 32, 63],
    ["تطبيقات عملية على القيم القصوى", "78–81", 64, 71],
  ]],
  ["المصفوفات والمحددات", "119–121", [
    ["المصفوفة", "88–92", 5, 9],
    ["العمليات على المصفوفات", "93–101", 10, 21],
    ["المحددات", "102–106", 22, 29],
    ["النظير الضربي للمصفوفة المربعة", "107–112", 30, 47],
    ["حل أنظمة المعادلات الخطية باستخدام المصفوفات", "113–118", 48, 54],
  ]],
  ["التكامل غير المحدود وتطبيقاته", "153–154", [
    ["التكامل غير المحدود", "125–129", 56, 56],
    ["قواعد التكامل غير المحدود", "130–133", 5, 24],
    ["تطبيقات التكامل غير المحدود", "134–138", 25, 36],
    ["طرق التكامل", "139–152", 37, 55],
  ]],
  ["التكامل المحدود وتطبيقاته", "188–191", [
    ["التجزئة ومجموع ريمان", "157–163", 4, 15],
    ["التكامل المحدود", "164–168", 16, 28],
    ["العلاقة بين التفاضل والتكامل", "169–173", 29, 49],
    ["خصائص التكامل المحدود", "174–181", 50, 73],
    ["تطبيقات التكامل المحدود", "182–187", 74, 85],
  ]],
];

// Literary textbook (2025 edition) and the 2023 classified collection.
const literaryUnits = [
  ["التفاضل والتكامل", "38–40", [
    ["متوسط التغير", "4–9", 6, 8],
    ["المشتقة الأولى", "10–13", 0, 0],
    ["قواعد الاشتقاق", "14–19", 9, 14],
    ["القيم القصوى للاقتران", "20–24", 15, 20],
    ["التكامل غير المحدود", "25–30", 21, 22],
    ["التكامل المحدود", "31–37", 23, 29],
  ]],
  ["المصفوفات", "73–74", [
    ["المصفوفة", "43–48", 31, 32],
    ["العمليات على المصفوفات", "49–57", 33, 35],
    ["ضرب المصفوفات", "58–62", 36, 37],
    ["النظير الضربي للمصفوفة المربعة من الرتبة الثانية", "63–68", 38, 41],
    ["حل نظام من معادلتين خطيتين باستخدام قاعدة كريمر", "69–72", 42, 42],
  ]],
  ["المعادلات والمتسلسلات", "93–94", [
    ["المعادلات الأسية", "77–79", 44, 45],
    ["المعادلات اللوغاريتمية", "80–82", 46, 47],
    ["المتسلسلات", "83–86", 51, 51],
    ["المتسلسلة الحسابية", "87–92", 48, 50],
  ]],
  ["الإحصاء", "108–109", [
    ["العلامة المعيارية", "97–101", 53, 54],
    ["التوزيع الطبيعي المعياري", "102–107", 55, 56],
  ]],
];

// The classification combines the first two lessons of Unit 4. These prompts
// deal specifically with properties of antiderivatives, the focus of Lesson 4-1.
const antiderivativeConcepts = new Set([
  "005-q01", "006-q05", "009-q03", "016-q01", "016-q03", "018-q02", "019-q04", "020-q03", "023-q05",
]);
const firstDerivative = new Set(["009-qmcq-08", "009-qmcq-09", "010-qmcq-05", "010-qmcq-06", "010-qmcq-10", "011-qmcq-01"]);

function textbookRoadmap(track, units, sourcePattern) {
  const subjectId = `outside-gaza-${track}-math`;
  return createTextbookRoadmap(subjectId, units, (stepId, unitNumber, topics) => {
    const match = sourcePattern.exec(stepId);
    const page = Number(match?.[1]);
    const sourceItem = match ? `${match[1]}-${match[2]}` : "";
    if (track === "scientific" && unitNumber === 4 && antiderivativeConcepts.has(sourceItem)) return 0;
    if (track === "literary" && unitNumber === 1 && firstDerivative.has(sourceItem)) return 1;
    return topics.findIndex(([, , firstPage, lastPage]) => page >= firstPage && page <= lastPage);
  }, unitNumber => subjectId === OUTSIDE_GAZA_MATH_1 && unitNumber > 2 ? OUTSIDE_GAZA_MATH_2 : subjectId);
}

const scientificArchive = textbookRoadmap("scientific", scientificUnits, /-kamel-2026-u\d+-p(\d+)-(.+)$/);
const literaryArchive = textbookRoadmap("literary", literaryUnits, /-tasnif-p(\d+)-(.+)$/);

// Source IDs are the published Gaza locations. Display lesson IDs and printed
// page ranges come from the full textbook. Supplemental questions retain their
// published import locations, too.
const scientificSources = [
  ["average-change", "differentiation-rules", "trigonometric-derivatives", "lhopital-exponential-logarithmic",
    "geometric-physical-applications", "chain-rule", "implicit-differentiation"],
  ["increasing-decreasing", "extreme-values", "concavity-inflection", "extrema-applications"],
  ["matrices", "matrix-operations", "determinants", "matrix-inverse", "linear-systems"],
  ["indefinite-integral", "indefinite-integral-rules", "indefinite-integral-applications", "integration-methods"],
  ["riemann-sums", "definite-integral", "fundamental-theorem", "definite-integral-properties", "integral-area"],
];
const literarySources = [
  ["average-change", "first-derivative", "differentiation-rules", "extreme-values", "indefinite-integral", "definite-integral"],
  ["matrix", "matrix-operations", "matrix-multiplication", "matrix-inverse", "linear-systems"],
  ["exponential-equations", "logarithmic-equations", null, "arithmetic-series"],
  ["standard-score", "standard-normal-distribution"],
];

function reusedParts(lessons, lessonId, include = () => true) {
  const lesson = lessons.find(item => item.id === lessonId);
  return sharedPracticeParts(lesson.subjectId || "adabi-mathematics", lesson, include);
}

function practice(id, label, pages, parts) {
  return { id, label, pages, xp:0, parts:parts.map(part => ({ ...part, label, pages })) };
}

function fromArchive(lesson, include) {
  return lesson.parts.flatMap(part => {
    const questionIds = part.questionIds.filter(include);
    return questionIds.length ? [{ ...part, questionIds, startStepId:questionIds[0] }] : [];
  });
}

const partialFractions = id => PARTIAL_FRACTION_QUESTION_IDS.has(id);
const repeatedUnderIntegralRules = new Set(["math-kamel-u4-p005-r3", "math-kamel-u4-p006-r1"]);
const scientific = scientificArchive.units.map((unit, unitIndex) => {
  const lessons = scientificUnits[unitIndex][2].map(([label, pages], index) => {
    const source = scientificSources[unitIndex][index];
    const methods = source === "integration-methods";
    return practice(`${unit.id}-lesson-${index + 1}`, label, methods ? "139–147" : pages,
      reusedParts(MATHEMATICS_LESSONS, source, id => (!methods || !partialFractions(id))
        && (source !== "indefinite-integral" || !repeatedUnderIntegralRules.has(id))));
  });
  if (unitIndex === 1) {
    const review = unit.lessons.find(lesson => lesson.id === "unit-2-review");
    lessons.push(practice("unit-2-rolles-and-mean-value", "نظريتا رول والقيمة المتوسطة", "82–84", fromArchive(review,
      id => /-book-2022-(?:p086-q01-06|p087-q01-10|p088-q04)$/.test(id))));
  }
  if (unitIndex === 3) {
    lessons.push(practice("unit-4-partial-fractions", "التكامل بالكسور الجزئية", "148–152",
      reusedParts(MATHEMATICS_LESSONS, "integration-methods", partialFractions)));
  }
  if (unitIndex === 4) {
    const review = unit.lessons.find(lesson => lesson.id === "unit-5-review");
    lessons.push(practice("unit-5-solids-of-revolution", "حجوم الأجسام الدورانية", "191",
      fromArchive(review, id => /-book-2022-p195-q(?:18|19|20)$/.test(id))));
  }
  return { ...unit, lessons };
});

const literary = literaryArchive.units.map((unit, unitIndex) => {
  const lessons = literaryUnits[unitIndex][2].map(([label, pages], index) => {
    const id = `${unit.id}-lesson-${index + 1}`;
    const source = literarySources[unitIndex][index];
    return practice(id, label, pages, source ? reusedParts(ADABI_LESSONS, source)
      : fromArchive(unit.lessons.find(lesson => lesson.id === id), () => true));
  });
  if (unitIndex === 2) {
    lessons.push(practice("unit-3-geometric-series", "المتسلسلة الهندسية ومجموعها · تدريب إضافي", "",
      reusedParts(ADABI_LESSONS, "geometric-series")));
  }
  return { ...unit, lessons };
});

export const OUTSIDE_GAZA_MATH_ROADMAPS = {
  [OUTSIDE_GAZA_MATH_1]:{ subjectId:OUTSIDE_GAZA_MATH_1, questionsOnly:true, units:scientific.slice(0, 2) },
  [OUTSIDE_GAZA_MATH_2]:{ subjectId:OUTSIDE_GAZA_MATH_2, questionsOnly:true, units:scientific.slice(2) },
  [LITERARY_MATH]:{ subjectId:LITERARY_MATH, questionsOnly:true, units:literary },
};

export function sharedMathSubject({ subjectId, lessonId }) {
  if (subjectId === "adabi-mathematics") return LITERARY_MATH;
  if (subjectId !== "mathematics" && subjectId !== "mathematics-2") return null;
  const lesson = MATHEMATICS_LESSONS.find(item => item.id === lessonId);
  if (!lesson) return null;
  return lesson.subjectId === "mathematics-2" ? OUTSIDE_GAZA_MATH_2 : OUTSIDE_GAZA_MATH_1;
}

export function resolveMovedMathLink({ subjectId, lessonId, partId, stepId }) {
  if (!isOutsideGazaMath(subjectId)) return null;
  const scientificPaper = subjectId !== LITERARY_MATH;
  const displaySubject = scientificPaper && isOutsideGazaMath2Lesson(lessonId) ? OUTSIDE_GAZA_MATH_2 : subjectId;
  const unit = OUTSIDE_GAZA_MATH_ROADMAPS[displaySubject].units.find(unit => unit.lessons.some(lesson => lesson.id === lessonId));
  const active = unit?.lessons.find(lesson => lesson.id === lessonId)?.parts.find(part => part.id === partId);
  if (active && (!stepId || active.questionIds.includes(stepId)))
    return subjectId === displaySubject ? null : { subjectId:displaySubject, lessonId, partId };
  const archive = scientificPaper ? scientificArchive : literaryArchive;
  const oldLesson = archive.units.flatMap(unit => unit.lessons).find(lesson => lesson.id === lessonId);
  const oldPart = oldLesson?.parts.find(part => part.id === partId);
  if (oldPart) return oldPart.source;
  const published = resolveLegacyTextbookLink({ subjectId:archive.subjectId, lessonId, partId, stepId });
  return published && subjectId !== archive.subjectId ? { subjectId:archive.subjectId, lessonId, partId } : null;
}
