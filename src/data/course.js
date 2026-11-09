export const SCIENTIFIC_SUBJECTS = Object.freeze([
  { id:"mathematics", name:"الرياضيات 1", status:"available", artwork:"mathematics" },
  { id:"mathematics-2", name:"الرياضيات 2", status:"available", artwork:"mathematics" },
  { id:"physics", name:"الفيزياء", status:"available" },
  { id:"chemistry", name:"الكيمياء", status:"available", artwork:"chemistry" },
  { id:"biology", name:"الأحياء", status:"available" },
  { id:"ict", name:"تكنولوجيا المعلومات", status:"available" },
  { id:"english", name:"اللغة الإنجليزية", status:"available" },
  { id:"arabic", name:"اللغة العربية", status:"available" },
  { id:"islamic-education", name:"التربية الإسلامية", status:"available" },
]);

export const ADABI_SUBJECTS = Object.freeze([
  { id:"adabi-islamic-education", name:"التربية الإسلامية", status:"available", path:"literary", artwork:"islamic-education" },
  { id:"adabi-arabic-1", name:"اللغة العربية 1", status:"available", path:"literary", artwork:"arabic" },
  { id:"adabi-arabic-2", name:"اللغة العربية 2", status:"available", path:"literary", artwork:"arabic" },
  { id:"adabi-english", name:"اللغة الإنجليزية", status:"available", path:"literary", artwork:"english" },
  { id:"adabi-mathematics", name:"الرياضيات", status:"available", path:"literary", artwork:"mathematics" },
  { id:"adabi-history", name:"الدراسات التاريخية", status:"available", path:"literary", artwork:"history" },
  { id:"adabi-geography", name:"الدراسات الجغرافية", status:"available", path:"literary", artwork:"geography" },
  { id:"adabi-scientific-culture", name:"الثقافة العلمية", status:"available", path:"literary", artwork:"scientific-culture" },
  { id:"adabi-information-technology", name:"تكنولوجيا المعلومات", status:"available", path:"literary", artwork:"ict" },
]);

// Both catalogs remain addressable for existing links and saved progress.
export const COURSE_SUBJECTS = Object.freeze([...SCIENTIFIC_SUBJECTS, ...ADABI_SUBJECTS]);
export const TOTAL_SUBJECTS = COURSE_SUBJECTS.length;

/** @param {{path?:string}|null} [selection] */
export function getCourseSubjects(selection = undefined) {
  return selection?.path === "literary" ? ADABI_SUBJECTS : SCIENTIFIC_SUBJECTS;
}

export function getCourseSubject(subjectId) {
  return COURSE_SUBJECTS.find(({ id }) => id === subjectId) || null;
}

// Compatibility scale used by existing learner ranks; independent of the ICT catalog.
export const TOTAL_DAYS = 112;
