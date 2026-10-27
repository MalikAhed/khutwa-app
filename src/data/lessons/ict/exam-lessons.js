import{defineMarkdownLesson as I}from"../../../markdown/lesson-model.js?v=7388f68cc0f433fd";import{ICT_EXAM_QUESTIONS as c}from"./exam-bank.js?v=7388f68cc0f433fd";import{ICT_BOOK_PRACTICE as p}from"./book-practice.js?v=7388f68cc0f433fd";import{ICT_PAST_PAPER_QUESTIONS as a}from"./past-paper-bank.js?v=7388f68cc0f433fd";import{ICT_CLASSIFIED_UNIT1_QUESTIONS as S}from"./classified-unit1-bank.js?v=7388f68cc0f433fd";import{ICT_CLASSIFIED_UNIT2_QUESTIONS as i}from"./classified-unit2-bank.js?v=7388f68cc0f433fd";import{ICT_CLASSIFIED_OSI_QUESTIONS as s}from"./classified-osi-bank.js?v=7388f68cc0f433fd";import{ICT_VISUAL_TRANSCRIPTION_QUESTIONS as T}from"./visual-transcription-bank.js?v=7388f68cc0f433fd";const _=[...c,...p,...a,...S,...i,...s,...T];export function getIctPartQuestions(n){return _.filter(r=>r.partId===n).sort((r,o)=>r.partOrder-o.partOrder)}function f(n){const r=`id: ${n.id}
title: ${n.title}
question: ${n.type==="mcq"?n.question:n.prompt}
reference: ${n.reference}`;if(n.type==="mcq"){const o=n.choices.map((e,t)=>`- [${t===n.correctChoiceIndex?"x":" "}] ${n.choiceIds[t]} | ${e}`).join(`
`);return`:::mcq
${r}
kicker: ${n.kicker}
${o}
explanation:
${n.explanation}
hint: ${n.hint}
${n.example?`example:
${n.example}
`:""}:::`}return`:::exam-question
${r}
answer-label: ${n.answerLabel}
body:
${n.question}
solution:
${n.answer}
:::`}export function prepareIctExamLesson(n,r){if(!r?.length||!getIctPartQuestions(r[0].id).length)return n;const o=r.flatMap(e=>getIctPartQuestions(e.id));return I(n,o.map(f).join(`

`))}
