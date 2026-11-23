import { ADABI_COURSES } from "../adabi/catalog.js";
import { BIOLOGY_LESSONS } from "../biology/biology-course.js";
import { CHEMISTRY_LESSONS, FULL_BOOK_HYDROGEN_QUESTIONS } from "../chemistry/chemistry-course.js";
import { PHYSICS_LESSONS } from "../physics/physics-course.js";
import { sharedPracticeParts } from "./textbook-practice.js";
import { SHARED_DUPLICATE_QUESTIONS } from "./shared-duplicate-questions.js";

const sourceLessons = {
  biology:BIOLOGY_LESSONS,
  chemistry:CHEMISTRY_LESSONS,
  physics:PHYSICS_LESSONS,
  ...Object.fromEntries(ADABI_COURSES.map(course => [course.subjectId, course.lessons])),
};

const practiceBySubject = new Map();
const subjectBySourceLesson = new Map();

function add(subjectId, unit, topic, sourceId, lessonId, include = () => true) {
  const lesson = sourceLessons[sourceId].find(item => item.id === lessonId);
  const parts = sharedPracticeParts(sourceId, lesson, id => include(id) && !SHARED_DUPLICATE_QUESTIONS.has(id));
  if (!parts.length) return;
  const displayId = topic === "review" ? `unit-${unit}-review` : `unit-${unit}-lesson-${topic}`;
  if (!practiceBySubject.has(subjectId)) practiceBySubject.set(subjectId, new Map());
  const lessons = practiceBySubject.get(subjectId);
  if (!lessons.has(displayId)) lessons.set(displayId, []);
  lessons.get(displayId).push(...parts);
  subjectBySourceLesson.set(`${sourceId}:${lessonId}`, subjectId);
}

function addGroups(subjectId, sourceId, units) {
  units.forEach((topics, unitIndex) => topics.forEach((lessonId, topicIndex) => {
    if (lessonId) add(subjectId, unitIndex + 1, topicIndex + 1, sourceId, lessonId);
  }));
}

const chemistry = "outside-gaza-scientific-chemistry";
addGroups(chemistry, "chemistry", [
  [null, null, null, null, "u01-l02-electron-configuration", "u01-l03-atomic-number-valence"],
  ["u01-l04-periodic-table", "u01-l05-periodic-properties", "u01-l06-transition-elements"],
  ["u02-l01-general-properties", "u02-l02-acid-base-concepts", "u02-l03-water-ionization-ph", "u02-l04-weak-acid-base-equilibrium",
    "u02-l05-salt-solutions", "u02-l06-common-ion-buffers", "u02-l07-titration"],
  [],
  ["u03-l01-organic-compounds", "u03-l02-alkyl-halides", "u03-l03-alcohols", "u03-l04-aldehydes-ketones", "u03-l05-carboxylic-acids"],
  ["u03-l06-galvanic-cells", null, "u03-l07-standard-electrode-potential", "u03-l08-cell-potential-calculations"],
]);
FULL_BOOK_HYDROGEN_QUESTIONS.forEach((ids, index) => {
  add(chemistry, 1, index + 1, "chemistry", "u01-l01-quantum-model", id => ids.includes(id));
});
add(chemistry, 1, 4, "chemistry", "u01-l01-quantum-model", id => !FULL_BOOK_HYDROGEN_QUESTIONS.some(ids => ids.includes(id)));

addGroups("outside-gaza-scientific-physics", "physics", [
  ["momentum-impulse", "collisions"],
  ["electric-current-resistance", "dc-circuits"],
  ["magnetic-field", "magnetic-force", "electromagnetic-induction"],
]);

addGroups("outside-gaza-scientific-biology", "biology", [
  ["energy-flow", "gene-to-protein"],
  ["mendelian-inheritance", "non-mendelian-inheritance"],
  ["skeletal-system", "circulatory-system", "immune-system"],
  ["bacteria", "viruses"],
]);

const arabic1 = "outside-gaza-literary-arabic-1";
addGroups(arabic1, "adabi-arabic-1", [
  ["ar1-u01-yusuf", "ar1-u01-diptotes", "ar1-u01-wafir"],
  ["ar1-u02-andalus", "ar1-u02-friend", "ar1-u02-diptotes", "ar1-u02-expression"],
  [],
  ["ar1-u03-jerusalem", null, "ar1-u03-expression"],
  [null, null, "ar1-u06-basit"],
  ["ar1-u03-layla", "ar1-u03-waw-fa"],
  ["ar1-u04-hadith", null, "ar1-u04-ma-man"],
  ["ar1-u05-pleadings", "ar1-u05-refugee", "ar1-u05-la-lam", null, null, "ar1-u06-expression", "ar1-u06-owl"],
]);

const arabic2 = "outside-gaza-literary-arabic-2";
addGroups(arabic2, "adabi-arabic-2", [
  ["modern-schools", "revival-school", null, "free-verse"],
  ["national-poetry", "pan-arab-poetry", "zarqa-yamama"],
  [],
  ["palestinian-poetry", "sabbar"],
  ["simple-simile", "representative-simile"],
  ["short-story", "tyre-inflater", null, null, "drama", "mamluk-jaber"],
  ["literal-figurative", "implicit-metaphor", "explicit-metaphor"],
]);
for (const [fullUnit, gazaUnit] of [[1, 1], [2, 2], [6, 3]]) {
  add(arabic2, fullUnit, "review", "adabi-arabic-2", `unit${gazaUnit}-review`);
}

// Gaza combines the two English books. Match by unit title and skill.
const english = "outside-gaza-literary-english";
const readingPlus = "outside-gaza-literary-english-reading-plus";
for (const [gazaUnit, subjectId, fullUnit] of [
  [1, english, 1], [2, readingPlus, 1], [3, english, 3], [4, english, 5],
  [5, english, 6], [6, english, 7], [7, readingPlus, 3],
]) {
  const sourceId = "adabi-english";
  const prefix = `adabi-en-u0${gazaUnit}-`;
  const topics = { "reading-1":1, "reading-2":1, language:2, writing:4 };
  for (const { id } of sourceLessons[sourceId].filter(lesson => lesson.id.startsWith(prefix))) {
    add(subjectId, fullUnit, topics[id.slice(prefix.length)] || "review", sourceId, id);
  }
}

export const getTextbookSharedPractice = subjectId => practiceBySubject.get(subjectId);
export const sharedTextbookSubject = ({ subjectId, lessonId }) => subjectBySourceLesson.get(`${subjectId}:${lessonId}`);
