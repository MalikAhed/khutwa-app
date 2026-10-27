import { MATHEMATICS_LESSONS } from "./mathematics/math-course.js?v=acff67f262f3c107";
import { CHEMISTRY_LESSONS } from "./chemistry/chemistry-course.js?v=acff67f262f3c107";
import { ISLAMIC_LESSONS, createIslamicLesson } from "./islamic-education/islamic-bank.js?v=acff67f262f3c107";
import { getSubjectRoadmapLesson } from "../subject-roadmaps.js?v=acff67f262f3c107";

function lessonKey(subjectId, lessonId) {
  return `${subjectId}:${lessonId}`;
}

export const subjectLessonRegistry = new Map([
  [lessonKey("physics", "momentum-impulse"), () => import("./physics/momentum-impulse.js?v=acff67f262f3c107")],
  [lessonKey("physics", "collisions"), () => import("./physics/collisions.js?v=acff67f262f3c107")],
  [lessonKey("physics", "electric-current-resistance"), () => import("./physics/electric-current-resistance.js?v=acff67f262f3c107")],
  [lessonKey("physics", "dc-circuits"), () => import("./physics/dc-circuits.js?v=acff67f262f3c107")],
  [lessonKey("physics", "magnetic-field"), () => import("./physics/magnetic-field.js?v=acff67f262f3c107")],
  [lessonKey("physics", "magnetic-force"), () => import("./physics/magnetic-force.js?v=acff67f262f3c107")],
  [lessonKey("physics", "electromagnetic-induction"), () => import("./physics/electromagnetic-induction.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u01-l01-quantum-model"), () => import("./chemistry/u01-l01-quantum-model.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u01-l02-electron-configuration"), () => import("./chemistry/u01-l02-electron-configuration.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u01-l03-atomic-number-valence"), () => import("./chemistry/u01-l03-atomic-number-valence.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u01-l04-periodic-table"), () => import("./chemistry/u01-l04-periodic-table.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u01-l05-periodic-properties"), () => import("./chemistry/u01-l05-periodic-properties.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u01-l06-transition-elements"), () => import("./chemistry/u01-l06-transition-elements.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u02-l01-general-properties"), () => import("./chemistry/u02-l01-general-properties.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u02-l02-acid-base-concepts"), () => import("./chemistry/u02-l02-acid-base-concepts.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u02-l03-water-ionization-ph"), () => import("./chemistry/u02-l03-water-ionization-ph.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u02-l04-weak-acid-base-equilibrium"), () => import("./chemistry/u02-l04-weak-acid-base-equilibrium.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u02-l05-salt-solutions"), () => import("./chemistry/u02-l05-salt-solutions.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u02-l06-common-ion-buffers"), () => import("./chemistry/u02-l06-common-ion-buffers.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u02-l07-titration"), () => import("./chemistry/u02-l07-titration.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u03-l01-organic-compounds"), () => import("./chemistry/u03-l01-organic-compounds.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u03-l02-alkyl-halides"), () => import("./chemistry/u03-l02-alkyl-halides.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u03-l03-alcohols"), () => import("./chemistry/u03-l03-alcohols.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u03-l04-aldehydes-ketones"), () => import("./chemistry/u03-l04-aldehydes-ketones.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u03-l05-carboxylic-acids"), () => import("./chemistry/u03-l05-carboxylic-acids.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u03-l06-galvanic-cells"), () => import("./chemistry/u03-l06-galvanic-cells.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u03-l07-standard-electrode-potential"), () => import("./chemistry/u03-l07-standard-electrode-potential.js?v=acff67f262f3c107")],
  [lessonKey("chemistry", "u03-l08-cell-potential-calculations"), () => import("./chemistry/u03-l08-cell-potential-calculations.js?v=acff67f262f3c107")],
  [lessonKey("biology", "energy-flow"), () => import("./biology/energy-flow.js?v=acff67f262f3c107")],
  [lessonKey("biology", "gene-to-protein"), () => import("./biology/gene-to-protein.js?v=acff67f262f3c107")],
  [lessonKey("biology", "mendelian-inheritance"), () => import("./biology/mendelian-inheritance.js?v=acff67f262f3c107")],
  [lessonKey("biology", "non-mendelian-inheritance"), () => import("./biology/non-mendelian-inheritance.js?v=acff67f262f3c107")],
  [lessonKey("biology", "skeletal-system"), () => import("./biology/skeletal-system.js?v=acff67f262f3c107")],
  [lessonKey("biology", "circulatory-system"), () => import("./biology/circulatory-system.js?v=acff67f262f3c107")],
  [lessonKey("biology", "immune-system"), () => import("./biology/immune-system.js?v=acff67f262f3c107")],
  [lessonKey("biology", "bacteria"), () => import("./biology/bacteria.js?v=acff67f262f3c107")],
  [lessonKey("biology", "viruses"), () => import("./biology/viruses.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "average-change"), () => import("./mathematics/average-change.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "differentiation-rules"), () => import("./mathematics/differentiation-rules.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "trigonometric-derivatives"), () => import("./mathematics/trigonometric-derivatives.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "lhopital-exponential-logarithmic"), () => import("./mathematics/lhopital-exponential-logarithmic.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "geometric-physical-applications"), () => import("./mathematics/geometric-physical-applications.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "chain-rule"), () => import("./mathematics/chain-rule.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "implicit-differentiation"), () => import("./mathematics/implicit-differentiation.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "increasing-decreasing"), () => import("./mathematics/increasing-decreasing.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "extreme-values"), () => import("./mathematics/extreme-values.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "concavity-inflection"), () => import("./mathematics/concavity-inflection.js?v=acff67f262f3c107")],
  [lessonKey("mathematics", "extrema-applications"), () => import("./mathematics/extrema-applications.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "matrices"), () => import("./mathematics/matrices.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "matrix-operations"), () => import("./mathematics/matrix-operations.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "determinants"), () => import("./mathematics/determinants.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "matrix-inverse"), () => import("./mathematics/matrix-inverse.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "linear-systems"), () => import("./mathematics/linear-systems.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "indefinite-integral"), () => import("./mathematics/indefinite-integral.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "indefinite-integral-rules"), () => import("./mathematics/indefinite-integral-rules.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "indefinite-integral-applications"), () => import("./mathematics/indefinite-integral-applications.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "integration-methods"), () => import("./mathematics/integration-methods.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "riemann-sums"), () => import("./mathematics/riemann-sums.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "definite-integral"), () => import("./mathematics/definite-integral.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "fundamental-theorem"), () => import("./mathematics/fundamental-theorem.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "definite-integral-properties"), () => import("./mathematics/definite-integral-properties.js?v=acff67f262f3c107")],
  [lessonKey("mathematics-2", "integral-area"), () => import("./mathematics/integral-area.js?v=acff67f262f3c107")],
  [lessonKey("ict", "course-introduction"), () => import("./ict/course-introduction.js?v=acff67f262f3c107")],
  [lessonKey("ict", "database-management"), () => import("./ict/database-management.js?v=acff67f262f3c107")],
  [lessonKey("ict", "sql-queries"), () => import("./ict/sql-queries.js?v=acff67f262f3c107")],
  [lessonKey("ict", "smartphone-operating-systems"), () => import("./ict/smartphone-operating-systems.js?v=acff67f262f3c107")],
  [lessonKey("ict", "my-mobile-app"), () => import("./ict/my-mobile-app.js?v=acff67f262f3c107")],
  [lessonKey("ict", "osi-model-layers"), () => import("./ict/osi-model-layers.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u01-reading"), () => import("./english/english-u01-reading.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u01-vocabulary"), () => import("./english/english-u01-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u01-grammar"), () => import("./english/english-u01-grammar.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u02-vocabulary"), () => import("./english/english-u02-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u02-grammar"), () => import("./english/english-u02-grammar.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u03-reading"), () => import("./english/english-u03-reading.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u03-vocabulary"), () => import("./english/english-u03-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u03-grammar"), () => import("./english/english-u03-grammar.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u04-vocabulary"), () => import("./english/english-u04-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u04-grammar"), () => import("./english/english-u04-grammar.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u07-reading"), () => import("./english/english-u07-reading.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u07-vocabulary"), () => import("./english/english-u07-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u07-grammar"), () => import("./english/english-u07-grammar.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u08-reading"), () => import("./english/english-u08-reading.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u08-vocabulary"), () => import("./english/english-u08-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u08-grammar"), () => import("./english/english-u08-grammar.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u09-reading"), () => import("./english/english-u09-reading.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u09-vocabulary"), () => import("./english/english-u09-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u09-grammar"), () => import("./english/english-u09-grammar.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u10-vocabulary"), () => import("./english/english-u10-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u11-vocabulary"), () => import("./english/english-u11-vocabulary.js?v=acff67f262f3c107")],
  [lessonKey("english", "english-u11-grammar"), () => import("./english/english-u11-grammar.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u01-l01"), () => import("./arabic/arabic-u01-l01.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u01-l02"), () => import("./arabic/arabic-u01-l02.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u01-l03"), () => import("./arabic/arabic-u01-l03.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u02-l01"), () => import("./arabic/arabic-u02-l01.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u02-l02"), () => import("./arabic/arabic-u02-l02.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u02-l03"), () => import("./arabic/arabic-u02-l03.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u03-l01"), () => import("./arabic/arabic-u03-l01.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u03-l02"), () => import("./arabic/arabic-u03-l02.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u03-l03"), () => import("./arabic/arabic-u03-l03.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u04-l01"), () => import("./arabic/arabic-u04-l01.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u04-l02"), () => import("./arabic/arabic-u04-l02.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u05-l01"), () => import("./arabic/arabic-u05-l01.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u05-l02"), () => import("./arabic/arabic-u05-l02.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u05-l03"), () => import("./arabic/arabic-u05-l03.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u06-l01"), () => import("./arabic/arabic-u06-l01.js?v=acff67f262f3c107")],
  [lessonKey("arabic", "arabic-u06-l02"), () => import("./arabic/arabic-u06-l02.js?v=acff67f262f3c107")],
]);

// Register each canonical book lesson once. Legacy routes resolve below.
for (const lesson of ISLAMIC_LESSONS) {
  subjectLessonRegistry.set(lessonKey("islamic-education", lesson.id), () => ({
    default:createIslamicLesson(lesson.id),
  }));
}

function roadmapLesson(subjectId, lessonId) {
  return getSubjectRoadmapLesson(subjectId, lessonId)
    || (subjectId === "mathematics" ? getSubjectRoadmapLesson("mathematics-2", lessonId) : null);
}

export function createSubjectLessonLoader({ registry = subjectLessonRegistry } = {}) {
  const lessonCache = new Map();

  return async function loadRegisteredSubjectLesson(subjectId, lessonId) {
    const canonicalSubject = registry === subjectLessonRegistry && subjectId === "mathematics"
      && MATHEMATICS_LESSONS.some(lesson => lesson.id === lessonId && lesson.subjectId === "mathematics-2")
      ? "mathematics-2" : subjectId;
    const key = lessonKey(canonicalSubject, lessonId);
    if (lessonCache.has(key)) return lessonCache.get(key);

    let load = registry.get(key);
    if (!load && registry === subjectLessonRegistry && subjectId === "islamic-education"
        && roadmapLesson(subjectId, lessonId)?.hidden) {
      load = () => ({ default:createIslamicLesson(lessonId.replace(/^islamic-/, "")) });
    }
    if (!load) return null;

    const pendingLesson = Promise.resolve()
      .then(() => load())
      .then(async ({ default:lesson }) => {
        if (registry === subjectLessonRegistry && subjectId === "ict") {
          const { prepareIctExamLesson } = await import("./ict/exam-lessons.js?v=acff67f262f3c107");
          return prepareIctExamLesson(lesson, roadmapLesson(subjectId, lessonId)?.parts);
        }
        const { defineLesson } = await import("../../domain/lesson.js?v=acff67f262f3c107");
        return defineLesson(lesson);
      });
    lessonCache.set(key, pendingLesson);

    try {
      const lesson = await pendingLesson;
      lessonCache.set(key, lesson);
      return lesson;
    } catch (error) {
      lessonCache.delete(key);
      throw error;
    }
  };
}

// Keep the catalog import explicit so build-time checks see every chemistry lesson.
for (const lesson of CHEMISTRY_LESSONS) {
  if (!subjectLessonRegistry.has(lessonKey("chemistry", lesson.id))) {
    throw new Error(`Missing chemistry lesson registration: ${lesson.id}`);
  }
}

export const loadSubjectLesson = createSubjectLessonLoader();

// Boundaries refer to existing published step IDs; splitting never renames learner records.
function stepBoundary(source, id) {
  const explanation = source.indexOf(`<!-- step-id: ${id} -->`);
  if (explanation >= 0) return explanation;
  for (const match of source.matchAll(/^:::(?:mcq|exam-question)\s*\n([\s\S]*?)^:::\s*$/gm)) {
    if (new RegExp(`^id:[ \\t]*${id}[ \\t]*$`, "m").test(match[1])) return match.index;
  }
  return -1;
}

export async function loadSubjectLessonPart(subjectId, lessonId, partId) {
  const parts = roadmapLesson(subjectId, lessonId)?.parts || [];
  const index = parts.findIndex((part) => part.id === partId);
  const part = parts[index];
  if (!part?.startStepId) return null;
  const lesson = await loadSubjectLesson(subjectId, lessonId);
  if (!lesson?.authoringSource) return null;
  if (subjectId === "ict" && lessonId !== "course-introduction") {
    const { prepareIctExamLesson } = await import("./ict/exam-lessons.js?v=acff67f262f3c107");
    return prepareIctExamLesson({ ...lesson, title:part.label, reward:0 }, [part]);
  }
  const source = lesson.authoringSource;
  const start = stepBoundary(source, part.startStepId);
  const next = parts[index + 1];
  const end = next ? stepBoundary(source, next.startStepId) : source.length;
  if (start < 0 || end <= start) throw new Error("Invalid subject lesson part boundaries");
  const { defineMarkdownLesson } = await import("../../markdown/lesson-model.js?v=acff67f262f3c107");
  return defineMarkdownLesson({
    ...lesson, title:part.label, summary:`${lesson.title} · ${part.label}`, reward:0,
  }, source.slice(start, end).replace(/<!-- lesson-step -->\s*$/, "").trim());
}
