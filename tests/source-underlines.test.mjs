import assert from "node:assert/strict";
import test from "node:test";
import { parseLessonMarkdown } from "../src/markdown/lesson-authoring.js";

function mcq(source = "ما إعراب <u>الكلمة</u>؟") {
  return `:::mcq
id: source-underlined-mcq
title: كلمة تحتها خط
question: ${source}
- [x] first | <u>فاعل</u>
- [ ] second | مفعول به
explanation: لأن <u>الكلمة</u> تدل على من قام بالفعل.
hint: اقرأ الجملة.
example:
كتب <u>الطالب</u> الدرس.
:::`;
}

test("original underlines survive all MCQ and flashcard content fields", () => {
  const result = parseLessonMarkdown(`${mcq()}

:::exam-question
id: source-underlined-flashcard
title: إعراب
question: أعرب ما تحته خط.
reference: الكتاب، ص ١
answer-label: إجابة الكتاب
body:
كتب <u>الطالب</u> الدرس.
final-answer:
<u>فاعل</u> مرفوع.
solution:
تدل كلمة <u>الطالب</u> على من قام بالفعل.
:::`, { published:true });
  assert.deepEqual(result.issues, []);
  const [choice, card] = result.steps.map(step => step.content);
  for (const field of [choice.prompt, choice.answers[0].text, choice.correctFeedback, choice.example,
    card.body, card.finalAnswer, card.solution]) {
    assert.match(field, /<u>[^<>]+<\/u>/);
  }
});

test("source underlines do not authorize attributes, other HTML, or malformed wrappers", () => {
  for (const invalid of [
    '<u class="custom">word</u>', '<u onclick="alert(1)">word</u>',
    '<u style="color:red">word</u>', "<u >word</u>", "<U>word</U>",
    "<u/>word", "<u>word", "word</u>", "</u>word<u>",
    "<u><u>word</u></u>", "<u><span>word</span></u>",
  ]) {
    assert.ok(parseLessonMarkdown(mcq(invalid), { published:true }).issues
      .some(issue => issue.includes("must not contain raw HTML")), invalid);
  }
});

test("underlines support ordinary Markdown and leave code examples literal", () => {
  const result = parseLessonMarkdown(`<!-- step-id: source-underline-explanation -->
# ما تحته خط

الكلمة <u>المطلوبة</u>.

\`<u>\` هو وسم بداية.

\`\`\`html
<u class="example">literal code</u>
\`\`\``, { published:true });
  assert.deepEqual(result.issues, []);
  assert.match(result.steps[0].source, /<u>المطلوبة<\/u>/);
});
