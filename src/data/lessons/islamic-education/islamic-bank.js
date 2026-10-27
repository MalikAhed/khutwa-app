import{ISLAMIC_BOOK_LESSONS as n,ISLAMIC_UNITS as c}from"./book-lessons.js?v=7388f68cc0f433fd";import{ISLAMIC_2022_MCQS as a}from"./islamic-2022-bank.js?v=7388f68cc0f433fd";import{ISLAMIC_2025_QUESTIONS as u}from"./islamic-2025-bank.js?v=7388f68cc0f433fd";import{defineMarkdownLesson as p}from"../../../markdown/lesson-model.js?v=7388f68cc0f433fd";const d="https://moe.edu.ps/m/4064",S="islamic-required-mcq-405.zip";function O(e){if(e.type==="exam-question")return`:::exam-question
id: ${e.id}
title: ${e.title}
question: ${e.question}
reference: ${e.reference}
answer-label: ${e.answerLabel}
body:
${e.body}
solution:
${e.solution}${e.guidance?`
guidance:
${e.guidance}`:""}
:::`;const t=e.choices.map((r,o)=>`- [${o===e.answer?"x":" "}] ${r[0]} | ${r[1]}`).join(`
`);return`:::mcq
id: ${e.id}
title: ${e.title}
kicker: ${e.kicker}
reference: ${e.reference}
question: ${e.question}
${t}
explanation:
${e.explanation}
hint: ${e.hint}
:::`}const s=new Map(n.map(e=>[e.sourceLesson,e])),f=Object.freeze([...a.filter(e=>s.has(e.sourceLesson)),...u.filter(e=>s.has(e.sourceLesson))]),i=new Map(n.map(e=>[e.id,[]]));for(const e of f)i.get(s.get(e.sourceLesson).id).push(e);export const ISLAMIC_LESSON_BANK=Object.freeze(Object.fromEntries(n.map(e=>{const t=Object.freeze(i.get(e.id));return[e.id,Object.freeze({...e,title:e.label,summary:t.length?`أسئلة المراجعة المطابقة لموضوع الدرس في الرزمة التعليمية الرسمية، الصفحات ${e.pages}.`:`هذا الدرس موجود في الرزمة التعليمية الرسمية، الصفحات ${e.pages}، ولا يحتوي مصدر الأسئلة المرفق على أسئلة مطابقة له.`,questions:t})]}))),ISLAMIC_UNIT_BANK=Object.freeze(Object.fromEntries(Object.entries(c).map(([e,t])=>[e,Object.freeze({...t,questions:Object.freeze(n.filter(r=>r.unitKey===e).flatMap(r=>ISLAMIC_LESSON_BANK[r.id].questions))})]))),ISLAMIC_LESSONS=Object.freeze(n.map(e=>{const t=ISLAMIC_LESSON_BANK[e.id].questions;return Object.freeze({...e,questionIds:t.map(r=>r.id),parts:[Object.freeze({id:`${e.id}-practice`,label:e.label,pages:e.pages,startStepId:t[0]?.id,questionIds:t.map(r=>r.id)})]})}));function l(e){return`<!-- step-id: ${e.id}-empty -->
# ${e.label}

لا توجد أسئلة مطابقة لهذا الدرس في ملف الأسئلة المرفق؛ أُبقي الدرس ظاهراً لأنّه جزء من الرزمة التعليمية الرسمية.`}export function createIslamicLesson(e){const t=ISLAMIC_LESSON_BANK[e]||ISLAMIC_UNIT_BANK[e];if(!t)throw new Error(`Unknown Islamic lesson: ${e}`);const r=t.questions.length?t.questions.map(O).join(`

`):l(t);return p({status:"published",language:"ar",subjectId:"islamic-education",id:t.id.startsWith("islamic-")?t.id:`islamic-${t.id}`,title:t.title,summary:t.summary,outcome:"إتقان أسئلة الدرس المطابقة للرزمة التعليمية الرسمية.",mode:"تدريب وزاري",mission:"حل السؤال ثم مراجعة تفسير الإجابة من المصدر.",duration:"مراجعة مركزة",level:"توجيهي",reward:10,passingScore:80},r)}export{d as SOURCE_BOOK,S as SOURCE_QUESTIONS};
