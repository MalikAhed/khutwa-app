const subjects = {
  "arabic-1":["اللغة العربية 1", "arabic"],
  "arabic-2":["اللغة العربية 2", "arabic"],
  biology:["الأحياء", "biology"],
  chemistry:["الكيمياء", "chemistry"],
  "christian-education":["التربية المسيحية", "arabic"],
  english:["اللغة الإنجليزية", "english", "en"],
  "english-reading-plus":["اللغة الإنجليزية · المطالعة الإضافية", "english", "en"],
  geography:["الدراسات الجغرافية", "geography"],
  history:["الدراسات التاريخية", "history"],
  "information-technology":["تكنولوجيا المعلومات", "ict"],
  "islamic-education":["التربية الإسلامية", "islamic-education"],
  math:["الرياضيات", "mathematics"],
  "math-2":["الرياضيات 2", "mathematics"],
  physics:["الفيزياء", "physics"],
  "scientific-culture":["الثقافة العلمية", "scientific-culture"],
};

export const OUTSIDE_GAZA_CURRICULUM = "full-palestinian";

function makeSubjects(path, slugs) {
  return Object.freeze(slugs.map(slug => {
    const [name, artwork, locale = "ar"] = subjects[slug];
    const label = slug === "math" && path === "scientific" ? "الرياضيات 1" : name;
    return Object.freeze({ id:`outside-gaza-${path}-${slug}`, name:label, artwork, locale, slug, path,
      curriculum:OUTSIDE_GAZA_CURRICULUM, status:"available", hiddenFromCurriculum:slug === "christian-education" });
  }));
}

const religious = ["islamic-education", "christian-education"];
export const OUTSIDE_GAZA_SUBJECTS = Object.freeze({
  scientific:makeSubjects("scientific", [
    "math", "math-2", "physics", "chemistry", "biology", "information-technology", "english", "arabic-1", ...religious,
  ]),
  literary:makeSubjects("literary", [
    "arabic-1", "arabic-2", "english", "english-reading-plus", "math", "history", "geography",
    "scientific-culture", "information-technology", ...religious,
  ]),
});
