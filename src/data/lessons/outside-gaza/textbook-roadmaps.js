import { createTextbookRoadmap } from "./textbook-practice.js";
import { OUTSIDE_GAZA_MATH_ROADMAPS } from "./math-roadmaps.js";
import { biologySections, chemistrySections, physicsSections } from "./science-book-sections.js";
import { arabicLiteratureSections, cultureSections, geographySections, historySections } from "./literary-book-sections.js";
import { arabicReadingSections, christianSections, islamicSections, literaryIctSections, scientificIctSections } from "./common-book-sections.js";
import { englishSections, readingPlusSections } from "./english-book-sections.js";
import { getTextbookSharedPractice } from "./textbook-supplements.js";

const common = { "arabic-1":arabicReadingSections, "islamic-education":islamicSections, "christian-education":christianSections, english:englishSections };
const addedArabicTopics = {
  1:[["التعبير", "24"]], 3:[["التعبير", "44"]],
  7:[["التعبير", "88"], ["البومة في غرفة بعيدة · تدريب إضافي", ""]],
};
const literaryArabic = arabicReadingSections.map(([title, review, topics], index) =>
  [title, review, [...topics, ...(addedArabicTopics[index] || [])]]);
const books = {
  scientific:{ ...common, physics:physicsSections, biology:biologySections, chemistry:chemistrySections, "information-technology":scientificIctSections },
  literary:{ ...common, "arabic-1":literaryArabic, "arabic-2":arabicLiteratureSections, geography:geographySections, history:historySections,
    "scientific-culture":cultureSections, "information-technology":literaryIctSections, "english-reading-plus":readingPlusSections },
};

function within(page, range) {
  if (!range) return false;
  const [first, last = first] = range.split("–").map(Number);
  return page >= first && page <= last;
}

function classifyQuestion(slug, stepId, unit, topics) {
  if (stepId.includes("-book-progress-") || /-map\d*-/.test(stepId)) return -1;
  const page = Number(/-p(\d+)-/.exec(stepId)?.[1]);
  if (stepId.includes("-book-")) {
    const printed = slug.startsWith("english") ? page : page - 4;
    return topics.findIndex(([, range]) => within(printed, range));
  }
  if (slug === "biology") {
    if (unit === 1 && page === 39 && /-qresp/.test(stepId)) return 0;
    if (unit === 4 && page === 158) return /-qvirus/.test(stepId) ? 1 : 0;
  }
  if (slug === "geography") {
    const choice = /-mcq\d+$/.test(stepId);
    if (unit === 1 && page === 17 && choice) return 2;
    if (unit === 1 && page === 20 && (choice || /-q2[1-3]$/.test(stepId))) return 4;
    if (unit === 2 && page === 46 && choice) return 1;
    if (unit === 2 && page === 48 && !choice) return 1;
    if (unit === 2 && page === 50 && choice) return 3;
    if (unit === 3 && page === 82 && !/-q4[45]$/.test(stepId)) return 3;
    if (unit === 4 && page === 98 && /-q0[1-3]$/.test(stepId)) return 1;
  }
  return topics.findIndex(([, , first, last]) => first instanceof RegExp ? first.test(stepId) : page >= first && page <= last);
}

export const OUTSIDE_GAZA_TEXTBOOK_ROADMAPS = {
  ...OUTSIDE_GAZA_MATH_ROADMAPS,
  ...Object.fromEntries(Object.entries(books).flatMap(([track, titles]) => Object.entries(titles).map(([slug, sections]) => {
    const subjectId = `outside-gaza-${track}-${slug}`;
    const importedSections = sections === literaryArabic ? arabicReadingSections : sections;
    return [subjectId, createTextbookRoadmap(subjectId, sections, (id, unit) => classifyQuestion(slug, id, unit, importedSections[unit - 1][2]),
      undefined, getTextbookSharedPractice(subjectId))];
  }))),
};
