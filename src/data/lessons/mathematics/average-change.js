import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `:::exam-question
id: math-book-p005-activity1
title: الكتاب، ص ٣ · نشاط ١
question: متوسط التغير
reference: [الكتاب، النسخة المصورة، ص ٥](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=5)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عائلة فلسطينية مكوّنة من: أم أحمد وولديها التوأمين محمد وخالد. كانت كتلة محمد قبل عشر سنوات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\` كغم، وأصبحت اليوم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٢</mn></math>\` كغم، أما كتلة خالد فكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٩</mn></math>\` كغم، ولكنها اليوم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥٢</mn></math>\` كغم. ارتاحت أم أحمد للتغير في كتلة محمد، بينما ذهبت بابنها خالد إلى الطبيب… برأيك لماذا؟
final-answer:
**متوسط زيادة كتلة خالد أقل من متوسط زيادة كتلة محمد.**

- **محمد:** ٣ كغم/سنة.
- **خالد:** ٢٫٣ كغم/سنة.
solution:
المعطيات: المدة نفسها للتوأمين، وهي عشر سنوات. كتلة محمد تغيرت من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٢</mn></math>\` كغم، وكتلة خالد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٩</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥٢</mn></math>\` كغم.

نقارن متوسط زيادة الكتلة في السنة؛ المتوسط هو الزيادة الكلية مقسومة على عدد السنوات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">ك</mi><mrow><mtext dir="rtl">محمد</mtext></mrow></msub><mo>=</mo><mn dir="ltr">٦٢</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mo>=</mo><mn dir="ltr">٣٠</mn><mtext> </mtext><mrow><mtext dir="rtl">كغم</mtext></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">م</mi><mo stretchy="true">‾</mo></mover><mrow><mtext dir="rtl">محمد</mtext></mrow></msub><mo>=</mo><mfrac><mn dir="ltr">٣٠</mn><mn dir="ltr">١٠</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn><mtext> </mtext><mrow><mfrac><mtext dir="rtl">كغم</mtext><mtext dir="rtl">سنة</mtext></mfrac></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">ك</mi><mrow><mtext dir="rtl">خالد</mtext></mrow></msub><mo>=</mo><mn dir="ltr">٥٢</mn><mo>−</mo><mn dir="ltr">٢٩</mn><mo>=</mo><mn dir="ltr">٢٣</mn><mtext> </mtext><mrow><mtext dir="rtl">كغم</mtext></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">م</mi><mo stretchy="true">‾</mo></mover><mrow><mtext dir="rtl">خالد</mtext></mrow></msub><mo>=</mo><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">١٠</mn></mfrac><mo>=</mo><mn dir="ltr">٢٫٣</mn><mtext> </mtext><mrow><mfrac><mtext dir="rtl">كغم</mtext><mtext dir="rtl">سنة</mtext></mfrac></mrow></mrow></math>
\`\`\`



متوسط زيادة خالد أقل من متوسط زيادة توأمه؛ وهذا يفسر قلق الأم في سياق النشاط. المقارنة وحدها لا تشخّص مشكلة صحية.
:::


:::exam-question
id: math-book-p005-ex1-a
title: الكتاب، ص ٣ · مثال ١، الفرع ١
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٥، مثال ١، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، جد:

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∆</mo><mi mathvariant="normal">س</mi></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
final-answer:
**التغير في س:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`.
solution:
المطلوب هو التغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` فقط، من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ لا نحتاج قاعدة الاقتران.

التغير يعني القيمة النهائية ناقص الابتدائية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



طرح عدد سالب يعادل جمع مقابله الموجب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



إذن التغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
:::


:::exam-question
id: math-book-p005-ex1-b
title: الكتاب، ص ٣ · مثال ١، الفرع ٢
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٥، مثال ١، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، جد:

التغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
final-answer:
**التغير في قيمة الاقتران:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، ويتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. المطلوب تغير قيمة الاقتران.

 نحسب قيمته النهائية والابتدائية بالتعويض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



التغير هو النهائي ناقص الابتدائي؛ نلتزم بالترتيب المعطى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



التغير يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`؛ أي إن قيمة الاقتران نقصت بمقدار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` بين الطرفين.
:::


:::exam-question
id: math-book-p005-ex1-c
title: الكتاب، ص ٣ · مثال ١، الفرع ٣
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٥، مثال ١، الفرع ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، جد:

متوسط التغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. المطلوب متوسط التغير.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ لذا نقسم فرق القيم على فرق المدخلين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



إذن متوسط التغير يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p006-ex2-a
title: الكتاب، ص ٤ · مثال ٢، الفرع ١ · متوسط
question: متوسط التغير
reference: [السؤال، النسخة المصورة، ص ٦](assets/lessons/mathematics/source-crops/math-book-p006-ex2-a-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p006-ex2-a-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا قطع المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` في النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow><mo>،</mo><mrow><mo stretchy="true">(</mo><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، احسب ميل المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\`.
final-answer:
**ميل المستقيم:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المستقيم قاطع يمر بنقطتين من منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`، عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`. المطلوب ميله.

ميل القاطع يساوي فرق الإحداثيين الصاديين مقسومًا على فرق الإحداثيين السينيين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mrow><mo stretchy="false">(</mo><mi>π</mi><mo stretchy="false">)</mo></mrow></mrow></mrow></mrow></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` صفر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow></math>\` يساويان صفرًا، والزوايا هنا بالراديان.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mrow><mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٠</mn></mrow></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٠</mn></mrow></mrow><mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٠</mn></mrow></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المقام غير صفري، لذا اختصرنا الكمية نفسها في البسط والمقام. الميل يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
:::


:::exam-question
id: math-book-p006-ex2-b
title: الكتاب، ص ٤ · مثال ٢، الفرع ٢ · متوسط
question: متوسط التغير
reference: [السؤال، النسخة المصورة، ص ٦](assets/lessons/mathematics/source-crops/math-book-p006-ex2-b-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p006-ex2-b-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا قطع المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` في النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow><mo>،</mo><mrow><mo stretchy="true">(</mo><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد قياس زاوية ميل المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\`.
final-answer:
**زاوية الميل:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo>=</mo><msup><mn dir="ltr">٤٥</mn><mo>°</mo></msup></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`، ونقطتا القاطع عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`. المطلوب زاوية ميل المستقيم.

نحسب الميل أولًا لأنه يساوي ظل زاوية الميل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mi>π</mi></mrow></mrow></mrow><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٠</mn></mrow></mrow><mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٠</mn></mrow></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



زاوية الميل تقاس من الاتجاه الموجب لمحور السينات، وتؤخذ بين صفر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`. نبحث عن زاوية ظلها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` ضمن هذا المجال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo>=</mo><msup><mn dir="ltr">٤٥</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



إذن زاوية الميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\`، أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">٤٥</mn><mo>°</mo></msup></math>\`.
:::


:::exam-question
id: math-book-p007-activity2-worked
title: الكتاب، ص ٥ · نشاط ٢، المثال المحلول
question: متوسط التغير
reference: [الكتاب، النسخة المصورة، ص ٧](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=7)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` في الشكل المجاور مبيع شركة سيارات؛ حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`: المبيع بالملايين خلال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` شهرًا. أوجد من الرسم متوسط التغير في المبيع عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

![الرسم الأصلي لمبيع الشركة بالملايين خلال الأشهر](assets/lessons/mathematics/source-crops/u1-book-p007-activity2-figure.webp)
final-answer:
**متوسط التغير:** ١٫٥ مليون في الشهر.
solution:
المطلوب متوسط تغير المبيع بين الشهرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، والمبيع مقاس بالملايين.

![منحنى المبيع الأصلي](assets/lessons/mathematics/source-crops/u1-book-p007-activity2-figure.webp)

نقرأ الإحداثي الصادي عند كل شهر؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



متوسط التغير هو تغير المبيع مقسومًا على المدة؛ لذلك وحدته مليون في الشهر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١٫٥</mn></mrow></math>
\`\`\`



المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٫٥</mn></math>\` مليون في الشهر.
:::


:::exam-question
id: math-book-p007-activity2-a
title: الكتاب، ص ٥ · نشاط ٢، الفرع ١
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٧، نشاط ٢، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` في الشكل مبيع شركة سيارات، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`: المبيع بالملايين خلال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` شهرًا. أكمل متوسط التغير في المبيع عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`.

![منحنى المبيع بالملايين حسب الزمن بالأشهر](assets/lessons/mathematics/source-crops/u1-book-p007-activity2-figure.webp)
final-answer:
**متوسط التغير:** صفر مليون في الشهر.
solution:
المطلوب متوسط تغير المبيع بين الشهرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`، والمبيع مقاس بالملايين.

![منحنى المبيع الأصلي](assets/lessons/mathematics/source-crops/u1-book-p007-activity2-figure.webp)

نقرأ الإحداثي الصادي عند كل شهر؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



متوسط التغير هو تغير المبيع مقسومًا على المدة؛ لذلك وحدته مليون في الشهر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



المتوسط صفر؛ لأن مبيع الشهرين متساوٍ. لا يعني هذا أن المبيع ثابت بينهما.
:::


:::exam-question
id: math-book-p007-activity2-b
title: الكتاب، ص ٥ · نشاط ٢، الفرع ٢
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٧، نشاط ٢، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` في الشكل مبيع شركة سيارات، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`: المبيع بالملايين خلال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` شهرًا. أكمل متوسط التغير في المبيع عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.

![منحنى المبيع بالملايين حسب الزمن بالأشهر](assets/lessons/mathematics/source-crops/u1-book-p007-activity2-figure.webp)
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow></math>\` مليون في الشهر.
solution:
المطلوب متوسط تغير المبيع بين الشهرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، والمبيع مقاس بالملايين.

![منحنى المبيع الأصلي](assets/lessons/mathematics/source-crops/u1-book-p007-activity2-figure.webp)

نقرأ الإحداثي الصادي عند كل شهر؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



متوسط التغير هو تغير المبيع مقسومًا على المدة؛ لذلك وحدته مليون في الشهر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\` مليون في الشهر؛ الإشارة السالبة تعني انخفاض المبيع بين الشهرين.
:::


:::exam-question
id: math-book-p007-exercise1-a
title: الكتاب، ص ٥ · تمارين ١-١، السؤال ١ أ
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٧، تمارين ١-١، السؤال ١ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، جد التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
final-answer:
**التغير في قيمة الاقتران:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٧٨</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`، من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`. المطلوب التغير في قيمة الاقتران، دون قسمته على تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

 كلا الطرفين غير صفر، فتكون الكسور معرفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٥</mn></mfrac><mo>+</mo><msup><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٥</mn></mfrac><mo>+</mo><mn dir="ltr">٢٥</mn><mo>=</mo><mfrac><mn dir="ltr">١٢٨</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



نطرح القيمة الابتدائية من النهائية. نوحد المقام بكتابة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` على صورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥٠</mn><mn dir="ltr">٥</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٢٨</mn><mn dir="ltr">٥</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٥٠</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٧٨</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`



إذن التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧٨</mn><mn dir="ltr">٥</mn></mfrac></math>\`.
:::


:::exam-question
id: math-book-p007-exercise1-b
title: الكتاب، ص ٥ · تمارين ١-١، السؤال ١ ب
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٧، تمارين ١-١، السؤال ١ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، جد متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`، من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. المطلوب متوسط التغير؛ نلتزم بهذا الترتيب في البسط والمقام.

 لا يساوي أي طرف صفرًا، لذا يمكن التعويض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">١</mn></mfrac><mo>+</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo>+</mo><msup><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٦٧</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



المتوسط هو فرق القيم مقسومًا على فرق المدخلين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mn dir="ltr">٦٧</mn><mn dir="ltr">٤</mn></mfrac></mrow></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mn dir="ltr">٦٧</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٦٧</mn></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` تعني الضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`؛ السالبان يعطيان موجبًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥١</mn><mn dir="ltr">٤</mn></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



متوسط التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٤</mn></mfrac></math>\`.
:::


:::exam-question
id: math-book-p007-exercise2
title: الكتاب، ص ٥ · تمارين ١-١، السؤال ٢
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٧، تمارين ١-١، السؤال ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mi>π</mi></mrow><mo stretchy="true">]</mo></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mfrac></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`، على الفترة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`. المطلوب متوسط التغير.

 الزوايا بالراديان؛ نستخدم قيم الجيب وجيب التمام المعروفة عند الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi>π</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi>π</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi>π</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



متوسط التغير هو فرق القيم على طول الفترة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow><mrow><mrow><mi>π</mi><mo>−</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi>π</mi></mfrac></mrow></math>
\`\`\`



متوسط التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mfrac></math>\`.
:::


:::exam-question
id: math-book-p007-exercise3
title: الكتاب، ص ٥ · تمارين ١-١، السؤال ٣
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٧، تمارين ١-١، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في نفس الفترة.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`.
solution:
المعطى: متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`. المطلوب متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.

 نستعيد أولًا فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بضرب المتوسط في طول الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نطرح قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` عند الطرفين؛ نوزع الطرح، ثم نجمع حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` في فرق واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">[</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>−</mo><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`



نقسم التغير على طول الفترة نفسها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mi mathvariant="normal">ك</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٣٢</mn><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`.
:::


:::exam-question
id: math-book-p007-exercise4
title: الكتاب، ص ٥ · تمارين ١-١، السؤال ٤
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٧، تمارين ١-١، السؤال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا قطع المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></math>\` وصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\` مع الاتجاه الموجب لمحور السينات، احسب متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المطلوب متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`. زاوية ميل القاطع لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\`.

متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي ميل القاطع، والميل يساوي ظل زاوية الميل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mi mathvariant="normal">ق</mi></msub><mo>=</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><msup><mn dir="ltr">١٣٥</mn><mo>∘</mo></msup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



إذن فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي المتوسط مضروبًا في طول الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



عند طرح قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يختفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`؛ لأنه موجود بالقيمة نفسها عند الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mi mathvariant="normal">هـ</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
:::


:::exam-question
id: math-book-p021-worksheet1-q3
title: الكتاب، ص ١٩ · ورقة عمل ١، السؤال ٣
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٢١، ورقة عمل ١، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` (\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري)، جد متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`، من صفر إلى واحد، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` هو العدد النيبيري \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.

المطلوب متوسط التغير، أي فرق قيم الاقتران مقسومًا على فرق المدخلين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`



إذن المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`.
:::


:::mcq
id: math-book-p034-test1-1
title: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-١
kicker: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-١
reference: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-١
question: إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وكان متوسط تغير نفس الاقتران في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`، فما متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
المتوسط على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، وعلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`. المطلوب المتوسط على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

لا نجمع المتوسطين مباشرة؛ لأن الفترتين مختلفتا الطول. نستعيد التغير في كل فترة بضرب المتوسط في مدتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`



نجمع التغيرين؛ تلغى قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` لأنها تظهر مرة موجبة ومرة سالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نقسم التغير الكلي على طول الفترة الكلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mrow><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المتوسط المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-book-p035-test2
title: الكتاب، ص ٣٣ · اختبار الوحدة، السؤال ٢
question: متوسط التغير
reference: الكتاب، النسخة المصورة، ص ٣٥، اختبار الوحدة، السؤال ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mtext dir="rtl">هـ</mtext><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`، من صفر إلى واحد. المطلوب متوسط التغير.

 عند كلا الطرفين يساوي الأس صفرًا؛ وكل عدد غير صفري أسه صفر يساوي واحدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mrow><msup><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٠</mn></mrow></msup><mo>=</mo><mn dir="ltr">١</mn><mo>⋅</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mrow><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><mo>⋅</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نقسم فرق قيم الاقتران على فرق المدخلين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



متوسط التغير يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
:::


:::mcq
id: math-kamel-u1-p004-r1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٤ · البند ١ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٤ · البند ١ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p004-r1-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p004-r1-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، فإن قيمة متوسط التغير عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` هي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٫٥</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
explanation:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`. المطلوب متوسط التغير.

 نحتاج قيمتي الاقتران لأن المتوسط يقارن قيم الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



تربيع السالب موجب. نحسب فرق القيم ثم فرق المدخلين بالترتيب نفسه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المتوسط يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p004-r4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٤ · البند ٤ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٤ · البند ٤ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p004-r4-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p004-r4-key.webp)
question: متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٨</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`
explanation:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`. المطلوب متوسط التغير.





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">١٦</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mn dir="ltr">١٥</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٨</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



المتوسط يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p004-r2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٤ · البند ٢ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٤ · البند ٢ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p004-r2-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p004-r2-key.webp)
question: إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-3 | صفر
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
explanation:
المعطى متوسط التغير على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، وقيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`. المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

 نستخدم تعريف المتوسط لربط القيمة المعلومة بالقيمة المطلوبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نضرب الطرفين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لإزالة المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\` من الطرفين، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo></mrow></math>\` صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p004-r6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٤ · البند ٦ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٤ · البند ٦ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p004-r6-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p004-r6-key.webp)
question: إذا علمت أن متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، وأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٥</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٣</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`
explanation:
المعطى متوسط التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. المتوسط هو فرق قيم الاقتران مقسومًا على فرق المدخلين بالترتيب نفسه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نضرب الطرفين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، ثم نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٣</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` لعزل القيمة المطلوبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٣</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p005-r1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥ · البند ١ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٥ · البند ١ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p005-r1-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p005-r1-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\` معرفًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` بحيث كان متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في تلك الفترة يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، فإن قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` هي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٫٥</mn></math>\`
explanation:
متوسط التغير هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`. يجب أن يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\` حتى لا يكون المقام صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><msup><mtext dir="rtl">ب</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mtext dir="rtl">ب</mtext><mn dir="ltr">٢</mn></msup></mrow><mrow><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نحلل فرق المربعين؛ سالب البسط يأتي من عكس ترتيب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mtext dir="rtl">ب</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo>−</mo><mo stretchy="false">(</mo><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نختصر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` لأنه غير صفري، ثم نحل المعادلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mo stretchy="false">(</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p004-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\`، فإن قيمة متوسط التغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` هي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` هو أكبر عدد صحيح لا يتجاوز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">[</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mtext dir="rtl">ق</mtext><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٠</mn><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نحسب متوسط التغير بقسمة فرق القيم على فرق المدخلين.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mfrac></mrow></math>
\`\`\`



القسمة على كسر تعني الضرب في مقلوبه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p004-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٥
question: إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١٦</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، فإن متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` هو:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٥</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`
explanation:
المعطى متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`. نضربه في طول الفترة لنستعيد فرق القيم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">١٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٣٥</mn></mrow></math>
\`\`\`



في الاقتران الجديد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، يتحول الطرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mn mathvariant="normal">١</mn><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، والطرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mn mathvariant="normal">٤</mn><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`. لذلك فرق القيم نفسه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٣٥</mn></math>\`، لكن طول الفترة الجديدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><msup><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٣٥</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p004-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٧
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٧
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٧
question: إذا كان متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٫٥</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
explanation:
متوسط التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`. نستخدم تعريف المتوسط لربط القيمة المعطاة بالقيمة المطلوبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثم نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` من الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p004-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٨
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٨
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤ · البند ٨
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` اقترانًا بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\` وكان متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`، فإن قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` هي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>\`
explanation:
نضرب متوسط التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` في طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` لاستعادة فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`



من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`، نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` لتحديد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الفرق المطلوب عكس الفرق المحسوب، فتنعكس إشارته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p005-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٢
question: إذا علمت أن متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١٧</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، فإن متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٩</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٥</mn></math>\`
explanation:
متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`. المتوسط يساوي فرق قيم الاقتران مقسومًا على طول الفترة؛ لذلك نضربه في طول الفترة لاستعادة فرق القيم:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١٧</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">١٧</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٣٥</mn></mrow></math>
\`\`\`



الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` يأخذ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١٧</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، لأن:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١٧</mn></mrow></math>
\`\`\`



إذن متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` هو:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١٧</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٣٥</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p005-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٣
question: إذا كان متوسط تغير الاقتران عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\` مساويًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، فإن متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤٠</mn></mrow></math>\`
explanation:
متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٩</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`. نستعيد فرق قيمه بضرب المتوسط في طول الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`



عند طرفي الفترة الجديدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>±</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، بينما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ل</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ل</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` ونقسم على طول فترته، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٤٠</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p005-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٤
question: إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، فإن قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` هي:
- [ ] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
explanation:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`. طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، ويجب أن يكون غير صفري حتى يعرف متوسط التغير.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">]</mo><mo>−</mo><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">]</mo></mrow><mtext dir="rtl">أ</mtext></mfrac><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نوسع المربع، ثم نجمع الحدود المتشابهة في البسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mtext dir="rtl">أ</mtext></mfrac><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` لأنها غير صفرية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` من الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p005-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥ · البند ٦
question: إذا قطع المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi>π</mi><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi>π</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`، فما قياس زاوية ميل المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` علمًا بأن التغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi>π</mi></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi>π</mi></mrow></math>\`؟
- [ ] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`
explanation:
المعطى: إذا قطع المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi>π</mi><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi>π</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`.

نقسم تغير الاقتران على تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` لنجد ميل القاطع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow><mrow><mi mathvariant="normal">π</mi><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

ظل الزاوية يساوي الميل؛ زاوية الميل تقع بين صفر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">ي</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ي</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p006-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ١
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، ومتوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`. نحسب قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند الطرف المعلوم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



عند الطرف الآخر يجب الاحتفاظ بعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوض في تعريف متوسط التغير. طرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` يعادل إضافتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٩</mn><mo>−</mo><mo stretchy="false">[</mo><mo>−</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٩</mn><mo>+</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، ثم نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٩</mn><mo>+</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p006-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٢
question: إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mtext dir="rtl">هـ</mtext><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mtext dir="rtl">هـ</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
explanation:
لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن اللوغاريتم معرف. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msub><mrow><mi mathvariant="normal">لو</mi></mrow><mrow><mi mathvariant="normal">هـ</mi></mrow></msub></mrow><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msub><mrow><mi mathvariant="normal">لو</mi></mrow><mrow><mi mathvariant="normal">هـ</mi></mrow></msub></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`



نكتب متوسط التغير ثم نساويه بالمعطى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">هـ</mi><mo>+</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` غير صفري؛ نضرب الطرفين فيه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo>+</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` ثم نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p006-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٣
question: إذا كان متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٤</mn><mn dir="ltr">٩</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢٢</mn><mn dir="ltr">٩</mn></mfrac></math>\`
explanation:
متوسط التغير على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`، وطول الفترة هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`. الشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` يجيز القسمة عليها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo></mrow><mtext dir="rtl">أ</mtext></mfrac><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



نربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` أولًا، ثم نوزع السالب على جميع حدود القوس المطروح.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٩</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mtext dir="rtl">أ</mtext></mfrac><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` غير الصفرية، ثم نحل المعادلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p006-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري، فما متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mtext dir="rtl">هـ</mtext><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mtext dir="rtl">هـ</mtext></mrow><mn dir="ltr">٣</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

فرق اللوغاريتمين يساوي لوغاريتم نسبة القيمتين؛ يجب أن تكونا موجبتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">لو</mtext><mo>(</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>)</mo><mo>−</mo><mtext dir="rtl">لو</mtext><mo>(</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>)</mo></mrow><mrow><mo>=</mo><mtext dir="rtl">لو</mtext><mo>(</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mfrac><mo>)</mo></mrow><mrow><mo>=</mo><mtext dir="rtl">لو</mtext><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نقسم تغير اللوغاريتم على طول الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p006-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٥
question: إذا كان متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`، فما قيمة التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">ج</mi></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المعطى: متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نكتب متوسط التغير: فرق القيم مقسومًا على فرق الطرفين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>∆</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></mfrac><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`

نضرب في المقام ثم نعزل المطلوب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∆</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p006-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٦ · البند ٦
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>\`، فما متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نعوّض عند طرفي الفترة لنجد قيم الاقتران.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٥</mn><mo>−</mo><mn dir="ltr">٤٠</mn><mo>+</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mo>+</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نطرح القيمة الابتدائية من النهائية، ثم نقسم على فرق المدخلين بالترتيب نفسه لأن المطلوب متوسط التغير.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p007-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ١
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></math>\`
explanation:
الاقتران معرّف بفرعين؛ نستخدم لكل طرف الفرع الذي يحقق شرطه. الطرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` أصغر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، والطرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` أكبر منها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`



متوسط التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، أي فرق القيم مقسومًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، ثم نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



لا نحتاج قيمة الاقتران عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ متوسط التغير هنا يعتمد على قيمتي طرفي الفترة.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p007-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٢
question: ما متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mtext dir="rtl">هـ</mtext></mrow><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mtext dir="rtl">هـ</mtext><mn dir="ltr">٤</mn></mfrac></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
explanation:
متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

فرق اللوغاريتمين يساوي لوغاريتم نسبة القيمتين؛ يجب أن تكونا موجبتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">لو</mtext><mo>(</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>)</mo><mo>−</mo><mtext dir="rtl">لو</mtext><mo>(</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>)</mo></mrow><mrow><mo>=</mo><mtext dir="rtl">لو</mtext><mo>(</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mfrac><mo>)</mo></mrow><mrow><mo>=</mo><mtext dir="rtl">لو</mtext><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نقسم تغير اللوغاريتم على طول الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p007-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٣
question: إذا كان متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فما قيمة التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على نفس الفترة؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`
explanation:
المعطى: متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نكتب متوسط التغير: فرق القيم مقسومًا على فرق الطرفين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>∆</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

نضرب في المقام ثم نعزل المطلوب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∆</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p007-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٤
question: أوجد متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | صفر
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:
القيمة المطلقة هي بُعد العدد عن الصفر، ولذلك تكون غير سالبة؛ مثلًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نعوّض عند طرفي الفترة لنجد قيم الاقتران.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>|</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>|</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mo>|</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>|</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

نطرح القيمة الابتدائية من النهائية، ثم نقسم على فرق المدخلين بالترتيب نفسه لأن المطلوب متوسط التغير.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p007-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` وكان مقدار التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، فما متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` وكان مقدار التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نختار فرع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` عند كل طرف، ونستخدم تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` المعطى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo>+</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

نطرح قيمتي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` ونقسم على طول الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٩</mn><mo>+</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٦</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p007-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٧ · البند ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٩</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤٤</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٩</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٩</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

 نضرب تعريف المتوسط في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` ثم نعزل القيمة المطلوبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٨</mn><mo>−</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`



نقسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` على الجذر الموافق له.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٤</mn></mrow></msqrt><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p008-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ١
question: إذا كان متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">ب</mi><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`، فإن قيمة/قيم الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` هي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`
explanation:
المعطى: متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">ب</mi><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نعوّض طرفي الفترة في تعريف متوسط التغير.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mo>(</mo><mn dir="ltr">١٢</mn><mo>+</mo><mi mathvariant="normal">أ</mi><mo>)</mo><mo>−</mo><mo>(</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

نستعمل فرق المربعين لأن البسط فرق بين مربعين: مربع الأول ناقص مربع الثاني يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">الأول</mtext><mo>−</mo><mtext dir="rtl">الثاني</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">الأول</mtext><mo>+</mo><mtext dir="rtl">الثاني</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. لا نختصر العامل المشترك إلا بعد التأكد أنه غير صفري. ونختصر العامل المشترك؛ طول الفترة لا يساوي صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo>(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">ب</mi><mo>)</mo><mo>(</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نحل المعادلة الخطية الناتجة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mo>(</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

نجمع الحدود المتشابهة، ثم ننقل الحد الثابت إلى الطرف الآخر بتطبيق العملية نفسها على الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نقسم الطرفين على معامل المجهول غير الصفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p008-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٢
question: إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٢</mn></math>\`
explanation:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`. طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`، وهو غير صفري حتى يعرف المتوسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>−</mo><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">]</mo></mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></mfrac><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`



نوسع البسط ونوزع الطرح على القوس الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٨</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">١٦</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></mfrac><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` غير الصفري، ثم نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p008-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٣
question: إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>\`، فإن متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\` في الفترة نفسها يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`
explanation:
 من تعريف المتوسط نستعيد فرق القيم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></math>
\`\`\`



نوحد مقام الكسرين؛ حاصل ضرب المقامين معطى ويساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`، فلا يساوي أي منهما صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٩</mn><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٩</mn><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣٠</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">١٥</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`



نقسم هذا التغير على طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، فيكون المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p008-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٤

question: إذا كان متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، جد متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على نفس الفترة.
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">١٦</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">١٦</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٨</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٨</mn></mfrac></math>\`
explanation:
من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` غير الصفرية، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow></mfrac></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٨</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mi mathvariant="normal">هـ</mi></msub><mo>=</mo><mfrac><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٨</mn></mfrac></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">١٦</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p008-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٨ · البند ٥
question: إذا كان متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">١٢</mn></mfrac></math>\` على الترتيب، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، لذلك قيمتا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند الطرفين غير صفريتين. نشتق علاقة المتوسطين بتوحيد المقامين.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mrow><mfrac><mn dir="ltr">١</mn><mrow><mtext dir="rtl">ق</mtext><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mrow></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mrow><mtext dir="rtl">ق</mtext><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mrow></mfrac></mrow></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mtext dir="rtl">ق</mtext><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mo>−</mo><mtext dir="rtl">ق</mtext><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ق</mtext><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mtext dir="rtl">ق</mtext><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mrow></mfrac></mrow></math>
\`\`\`



فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بالعكس يساوي سالب فرقه الأصلي. ومتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">متوسط هـ</mtext><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نساوي هذا بمتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` المعطى، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">١٢</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">١٢</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">البسط</mtext><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` غير صفري، تتساوى المقامات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p009-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ١
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في نفس الفترة يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، فما قيمة/قيم الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٥٫٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٥٫٥</mn></mrow><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٥٫٥</mn></mrow><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٥٫٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`
explanation:
الرمز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">]</mo></mrow></math>\` يعني أكبر عدد صحيح لا يتجاوز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` تكون القيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نستخدم متوسط التغير المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



إذا كان أكبر عدد صحيح لمقدار هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`، فالمقدار لا يقل عن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` ويكون أصغر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧</mn><mo>≤</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo>&lt;</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` لجميع الأطراف ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` الموجبة؛ فلا تنعكس الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠</mn><mo>≤</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>&lt;</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>≤</mo><mtext dir="rtl">ب</mtext><mo>&lt;</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p009-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٢
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>∆</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>∆</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٨</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
explanation:
نعوض عند طرفي الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٠</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ن</mtext></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نكتب متوسط التغير؛ الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` يختفي من فرق القيم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ن</mtext></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٨</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثم نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ن</mtext></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٨</mn></msup></mrow></math>
\`\`\`



الاقتران الأسي للأساس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` متباين؛ تساوي القيم يفرض تساوي الأسين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p009-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٣
question: ما قاعدة كثير الحدود من الدرجة الأولى الذي متوسط تغيره في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>،</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></mrow><mo stretchy="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ويمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`
explanation:
لكثير الحدود الخطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>\` يكون متوسط التغير على أي فترة مساويًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؛ لأن فرق القيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo>−</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يختصر مع طول الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



مرور المنحنى بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` إلى الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p009-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٤
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود من الدرجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` وكان متوسط تغيره عند أي فترة دائمًا يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mroot><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mroot></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` تساوي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود من الدرجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` وكان متوسط تغيره عند أي فترة دائمًا يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mroot><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mroot></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

ثبات متوسط التغير على كل فترة يعني ثبات ميل القاطع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mo>(</mo><mi mathvariant="normal">ب</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">ك</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow><mrow><mo>=</mo><mroot><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot><mo>(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

إذن الاقتران خطي ومعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` غير صفر؛ درجته واحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mroot><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p009-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٩ · البند ٥
question: ما متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">ك</mi></mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">ك</mi><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">ك</mi><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>−</mo><mi mathvariant="normal">ك</mi></mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نطرح القيمتين؛ الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` يُلغى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">ب</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ك</mi></mrow><mrow><mi mathvariant="normal">ب</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi mathvariant="normal">ك</mi></mrow><mrow><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ك</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>)</mo></mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؛ العاملان المتعاكسان يعطيان إشارة سالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">ب</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mi mathvariant="normal">ك</mi></mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`، بشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mi mathvariant="normal">ب</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-kamel-u1-p010-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ١
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم القاطع لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` يصنع زاوية مقدارها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\` مع محور السينات الموجب، احسب متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣٥</mn></mfrac></mrow></math>\`.
solution:
ميل القاطع يساوي ظل زاوية ميله، وظل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` من الإحداثيين المعطيين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac></mrow></math>\`. نعوض بقيمتي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` غير الصفريتين، ونوحد المقامين.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٥</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٧</mn></mfrac></mrow></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mfrac><mn dir="ltr">١٤</mn><mn dir="ltr">٣٥</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣٥</mn></mfrac></mrow></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>=</mo><mfrac><mrow><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣٥</mn></mfrac></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣٥</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p010-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٢
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فيعطي تعريف المتوسط:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msqrt><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow><mtext dir="rtl">ب</mtext></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نضرب في المرافق، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`؛ حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` فيزيل الجذر من البسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msqrt><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow><mtext dir="rtl">ب</mtext></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext></mrow><mrow><mtext dir="rtl">ب</mtext><mo stretchy="false">(</mo><msqrt><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` غير الصفرية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٤</mn><mrow><msqrt><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



الطرفان غير سالبين، فنربع ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الفحص: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، فيكون المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p010-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٣
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، جد متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` على نفس الفترة.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣</mn></mrow></math>\`.
solution:
متوسط التغير هو فرق قيم الاقتران مقسومًا على فرق المدخلين. نستخدم تعريف المتوسط ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ل</mi></mrow></math>\` حفظ قاعدة جديدة. طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، ومتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mn dir="ltr">٥</mn></mrow></math>\`، لذلك:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`. نحسب فرق قيمه مع توزيع السالب على كامل القوس المطروح.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">[</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">]</mo><mo>−</mo><mo stretchy="false">[</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٥٢</mn></mrow></math>
\`\`\`



نقسم على طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">متوسط هـ</mtext><mo>=</mo><mfrac><mn dir="ltr">٥٢</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">١٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p010-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٤
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، ومتوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`، فما متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`؟
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn></mrow></math>\`.
solution:
المعطى: متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، ومتوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

كل متوسط يساوي التغير مقسومًا على طول فترته؛ لذلك نستعيد التغير بضربه في طول الفترة، قبل جمع التغيرات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

نجمع التغيرين ونقسم على طول الفترة الكاملة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢٤</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p010-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٥
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، وكان متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، أوجد متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></mfrac></mrow></math>\`.

**الشروط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>≠</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
solution:
 الفترة تبدأ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وتنتهي عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`، وطولها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.

متوسط التغير هو فرق القيم مقسومًا على فرق المدخلين؛ لذلك نضرب متوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` لاستعادة فرق قيمه. يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` حتى يعرف المتوسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` نحصل عند الطرفين، بشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></mfrac></mrow></math>
\`\`\`



نحسب متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ نوحد مقام القيمتين ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">هـ</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نوزع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` على القوس، ثم نجمع الحدود المتشابهة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` عاملًا مشتركًا ونختصره لأنه غير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></mfrac></mrow></math>
\`\`\`



هذا هو المتوسط المطلوب للقيم التي تسمح بها المعطيات؛ لا يلزم افتراض أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` هو العدد النيبيري أو أنه موجب.
:::


:::exam-question
id: math-kamel-u1-p010-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٦
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، وكان كل من الاقترانين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، أوجد متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`، علمًا أن متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على الفترة نفسها يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٤</mn><mn dir="ltr">٣</mn></mfrac></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٤٨</mn></mfrac></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac></mrow></math>\`. القيم موجبة فلا تساوي صفرًا. المطلوب متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` تنطبق عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، فتعطي حاصل الضرب المطلوب في توحيد المقامين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`



متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هو فرق قيمه مقسومًا على طول الفترة؛ نضربه في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` لاستعادة الفرق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٤</mn></mrow></math>
\`\`\`



نطرح مقلوبي القيمتين بتوحيد المقامين؛ فيظهر الفرق بترتيب عكسي فتنعكس إشارته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow><mn dir="ltr">٣٢</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">١٦</mn></mfrac></mrow></math>
\`\`\`



نقسم فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` على طول الفترة نفسها.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mi mathvariant="normal">هـ</mi></msub><mo>=</mo><mfrac><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">١٦</mn></mfrac></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٤٨</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p010-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٧
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٠ · البند ٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></math>\`، يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></math>\`، لذلك نستخدم الفرع الثاني عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، والفرع الأول عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نعوض في متوسط التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، ثم نضرب في طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` غير الصفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn></mrow><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نحلل إلى عاملين؛ لأن حاصل ضربهما يعطي المعاملات نفسها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl"> أو أ</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\` لأنه لا يحقق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></math>\`، فيبقى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p011-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ١
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\` وكان متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، ومتوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في نفس الفترة يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
solution:
متوسط التغير هو فرق قيم الاقتران مقسومًا على طول الفترة؛ لذلك نستعيد التغير بضرب المتوسط في طول الفترة.

طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`. نضرب كل متوسط في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` لنحسب تغير الاقتران الموافق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٠</mn></mrow></math>
\`\`\`



نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`. عندئذ يكون فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ل</mtext><mo>−</mo><mtext dir="rtl">ر</mtext><mo>=</mo><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



ومن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\` يكون فرق مربعي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ر</mi><mn dir="ltr">١٢٠</mn></mrow></math>\`. نستخدم فرق المربعين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ل</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ر</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ل</mi><mo>−</mo><mi mathvariant="normal">ر</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ل</mi><mo>+</mo><mi mathvariant="normal">ر</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. نختاره لأن فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` معلوم، ومنه نستخرج مجموعهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ل</mtext><mo>−</mo><mtext dir="rtl">ر</mtext><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ل</mtext><mo>+</mo><mtext dir="rtl">ر</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">ل</mtext><mo>+</mo><mtext dir="rtl">ر</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ل</mtext><mo>+</mo><mtext dir="rtl">ر</mtext><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



لكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mo>+</mo><mi mathvariant="normal">ر</mi></mrow><mo>=</mo><mrow><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، فنطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` لاستعادة المطلوب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p011-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٢
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`، فما قيمة/قيم الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
final-answer:
- **للفترة المرتبة، حيث ب > ٢:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
- **عند حساب علاقة الطرفين فقط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>\`.
solution:
المعطى: متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نطرح القيمتين ونختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ مع استبعاد أصفار المقام.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mo>(</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نضرب في المقامات ونحلل المعادلة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

الفترة المرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` تقتضي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` أكبر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ أما حساب الطرفين وحده فيقبل الجذرين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\` يحقق علاقة الطرفين أيضًا.
:::


:::exam-question
id: math-kamel-u1-p011-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٤
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، فما متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` في الفترة نفسها؟
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>\`.
solution:
المطلوب متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، ومتوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.

متوسط التغير هو فرق القيم مقسومًا على طول الفترة؛ لذلك فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي المتوسط مضروبًا في طولها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نطرح قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` عند الطرفين، مع توزيع السالب على جميع حدود القوس المطروح.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>−</mo><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٨</mn><mo>−</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



نقسم على طول الفترة، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mi mathvariant="normal">هـ</mi></msub><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p011-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٥
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">ج</mi><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، جد قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`.
solution:
نستخدم تعريف متوسط التغير على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">ج</mi><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`؛ ويجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></math>\` حتى لا يكون المقام صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo>−</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">ج</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ج</mtext></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></math>\` يختفي عند الطرح. نحلل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` بوصفه فرق مربعين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><msup><mtext dir="rtl">ج</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ج</mtext></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ج</mtext><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mtext dir="rtl">ج</mtext><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ج</mtext></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">ج</mi></mrow></math>\` غير الصفري، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mtext dir="rtl">ج</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p011-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٦
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان مقدار التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\`، فما متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`؟
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٩</mn></mrow></math>\`.
solution:
المعطى: مقدار التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نعوّض تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` مباشرة؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>\` يُلغى عند الطرح.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٦</mn><mo>+</mo><mo>(</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣٨</mn></mrow></mrow></math>
\`\`\`

نقسم على طول الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mtext dir="rtl">هـ</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٣٨</mn></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١٩</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٩</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p011-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٧
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، جد قيمة كل من الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
final-answer:
- **الثابت أ:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`.
- **الثابت ب:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
متوسط تغير الاقتران الخطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؛ لأن فرق قيمه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo>−</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo>−</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\`. إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\` من الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p011-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٨
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١١ · البند ٨
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، احسب متوسط التغير في الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` في نفس الفترة، علمًا بأن منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">١٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`.
solution:
مرور \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">١٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`. نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٩</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٩</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



متوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mn dir="ltr">٤</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يعطي فرقًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` ثم نقسم فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` على طول الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">متوسط هـ</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢٠</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p012-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ١
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، جد متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`.

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نطرح قيمتي الاقتران؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` يُلغى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><msup><mrow><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo>+</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></math>
\`\`\`

نقسم كل حد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` غير الصفرية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo>+</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mtext dir="rtl">هـ</mtext></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p012-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٢
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`، وكان مقدار التغير في قيمة الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`، وكان مقدار التغير في قيمة الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`.

نضيف قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى مقدار التغير لاستعادة قيمة الطرف الثاني.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نضرب تبادليًا ثم نحل المعادلة التربيعية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>(</mo><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>+</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

شرط الطرف الثاني الموجب يستبعد سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p012-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٣
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`، أوجد متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١١</mn></mrow></math>\`.
solution:
المطلوب متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، ومتوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` على الفترة نفسها يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.

متوسط التغير هو فرق القيم مقسومًا على طول الفترة؛ لذلك:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`



المعطى يكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. للوصول إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، وللوصول إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



نطرح القيمتين؛ الثابتان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` يعطيان فرقًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">[</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">٢٢</mn><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mn dir="ltr">١٨</mn><mo>+</mo><mn dir="ltr">١٥</mn><mo>=</mo><mn dir="ltr">٣٣</mn></mrow></math>
\`\`\`



نقسم على طول الفترة المطلوبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mi mathvariant="normal">ق</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٣٣</mn><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣٣</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p012-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٤
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٥</mn><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، ومتوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، والتغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في نفس الفترة يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mrow></math>\`.
solution:
متوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mn dir="ltr">٩</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، لذلك فرق قيمه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٩</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>\`. والتغير في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` على الفترة نفسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`



نعوض في الجزء الكسري: عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac><mo>=</mo><mrow><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٧</mn><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mtext dir="rtl">أ</mtext><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٧</mn><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext></mrow><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٨</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p012-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٥
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٧</mn><mo>)</mo><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
solution:
لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، نحل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` فنجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. ولإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، نحل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` فنجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



متوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فنكتب:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، ثم نجمع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p012-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٦
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٦ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، حيث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ن</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\`، وكان متوسط تغيره على الفترة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">]</mo></mrow></math>\` يساوي \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mstyle scriptlevel="0" displaystyle="true"><mfrac><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mstyle></mrow></math>\`، فجد قيمة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
المعطى متوسط التغير بين طرفي الفترة. وهو فرق قيمتي الاقتران مقسومًا على طول الفترة؛ لذلك نحسب القيمتين أولًا.

بما أن الأس موجب، فإن قيمة الصفر مرفوعًا لهذا الأس تساوي صفرًا. هذا يضمن تعريف الاقتران عند الطرف الأول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><msup><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



نضرب في المقام غير الصفري، ثم نقسم على العامل الموجب المشترك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><msup><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">١</mn></msup></mrow></math>
\`\`\`



لتساوي قوتين لهما الأساس نفسه، وهو عدد موجب لا يساوي واحدًا، تتساوى الأسس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`



وهذه القيمة تحقق الشرط المعطى، لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` أكبر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p012-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٧
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٢ · البند ٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، وكان منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`، جد متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\` في الفترة نفسها.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><mn dir="ltr">٤٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></mrow></math>\`.
solution:
المعطى: متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، وكان منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نستخدم خاصية الضرب مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، ثم فرق القيم المعطى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo>×</mo><mn dir="ltr">٧</mn><mo>=</mo><mn dir="ltr">٦٣</mn></mrow></mrow></math>
\`\`\`

بسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` عند الطرفين؛ نطرح المقلوبين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١٠</mn><mo>(</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow></mfrac><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mfrac><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٦٣٠</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نقسم على طول الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٦٣٠</mn></mrow><mrow><mn dir="ltr">٨</mn><mo>×</mo><mn dir="ltr">٧</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٤٥</mn></mrow><mn dir="ltr">٤</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p013-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٢
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧٢</mn></mrow></math>\`.
solution:
المعطى: متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نستعيد فرق قيمتي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، ومجموعهما معطى في السؤال.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

نستعمل فرق المربعين لأن البسط فرق بين مربعين: مربع الأول ناقص مربع الثاني يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">الأول</mtext><mo>−</mo><mtext dir="rtl">الثاني</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">الأول</mtext><mo>+</mo><mtext dir="rtl">الثاني</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. نطبقه على فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` في تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٨</mn><mo>(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>+</mo><mo>(</mo><mn dir="ltr">٢٤</mn><mo>)</mo><mo>(</mo><mn dir="ltr">٨</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢١٦</mn></mrow></mrow></math>
\`\`\`

نقسم على طول الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mtext dir="rtl">هـ</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٢١٦</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٧٢</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧٢</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p013-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٣
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mfrac><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`، فما متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">]</mo></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`؟
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`.

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mfrac><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وهو غير صفري في التعريف الأصلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>(</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>(</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

حدا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ق</mi></mrow></math>\` يتلاشيان؛ نعزل مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` خطي؛ متوسط تغيره يساوي معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` على أي فترة غير منعدمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، بشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p013-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٤
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msqrt><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></msqrt><mo>+</mo><msqrt><mi mathvariant="normal">ب</mi></msqrt></mrow></mrow></math>\` للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mrow><msqrt><mn dir="ltr">١١</mn></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">ب</mi></msqrt></math>\` ثابت بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، فيلغى من فرق القيم. وجوده يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، ومن ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` غير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msqrt><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><msqrt><mn dir="ltr">١١</mn></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



نضرب كسر المتوسط في المرافق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` لإزالة الجذر من البسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msqrt><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٢</mn></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msqrt><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></msqrt><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في البسط ونختصر العامل غير الصفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٢</mn><mrow><msqrt><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><msqrt><mn dir="ltr">١١</mn></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



البسطان متساويان وغير صفريين، فتتساوى المقامات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></msqrt><mo>=</mo><msqrt><mn dir="ltr">١١</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



القيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` تحقق شرط المجال، ويكون طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p013-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٥
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`، فأوجد متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في نفس الفترة، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`.
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.
solution:
المعطى متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وفرق مكعبي قيمتيه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`. المطلوب متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mi mathvariant="normal">ق</mi></mfrac></math>\` على الفترة نفسها.
نسمي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. متوسط التغير هو فرق القيم مقسومًا على طول الفترة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo>−</mo><mi mathvariant="normal">ق</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


نحلل فرق المكعبين لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>−</mo><mi mathvariant="normal">ق</mi></mrow></math>\` معلوم وغير صفري.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ق</mi><mi mathvariant="normal">ق</mi><mo>+</mo><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ق</mi><mi mathvariant="normal">ق</mi><mo>+</mo><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


مربع الفرق هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi></mrow><mi mathvariant="normal">ق</mi></mrow></mrow><mo>+</mo><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`. نطرحه من العلاقة السابقة لإيجاد حاصل الضرب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>−</mo><mi mathvariant="normal">ق</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mi mathvariant="normal">ق</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mi mathvariant="normal">ق</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


إذن القيمتان غير صفريتين. نوحد مقامي قيمتي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mi mathvariant="normal">ق</mi></mfrac></math>\`، ثم نقسم فرق القيم على طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mrow><mfrac><mn dir="ltr">٧</mn><mi mathvariant="normal">ق</mi></mfrac><mo>−</mo><mfrac><mn dir="ltr">٧</mn><mi mathvariant="normal">ق</mi></mfrac></mrow></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">)</mo></mrow></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mi mathvariant="normal">ق</mi></mrow></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi mathvariant="normal">ر</mi><mo stretchy="true">‾</mo></mover><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p013-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٦
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكانت زاوية ميل القاطع لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في نفس الفترة يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكانت زاوية ميل القاطع لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في نفس الفترة يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

لنسمّ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">ع</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>\`؛ متوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يعطي فرقًا يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><msup><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`

من ميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` سالب واحد، وعلاقة الضرب، نجد حاصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ب</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>(</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ب</mi></mrow></mfrac><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ب</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`

نربّع فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ثم نعوّض مجموع المربعين وحاصل الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٤</mn></mrow><mrow><mo>=</mo><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><msup><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ب</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p013-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٧
question: متوسط التغير
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٣ · البند ٧ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mroot><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٣</mn></mroot></mrow></math>\`، وكان متوسط تغير \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">هـ</mi></mrow></math>\` على \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo></mrow></math>\` يساوي \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn dir="ltr">٢</mn></mrow></math>\`، و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>\`، و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، فما متوسط تغير \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>\` على \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow></math>\`؟
final-answer:
**متوسط التغير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣٢</mn></mrow></math>\`.
solution:
نحتاج فرق قيمتي الاقتران المركب عند طرفي الفترة. التعويض في المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` يحوّل الطرفين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



ومن متوسط تغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` نحصل على فرق قيمتيه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نزيل الجذر التكعيبي بتكعيب الطرفين، ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نستخدم فرق مكعبين؛ لأن المعطيات تحدد فرق القيمتين ومربع مجموعهما وحاصل ضربهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">ل</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>−</mo><mi mathvariant="normal">ل</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ل</mi><mo>+</mo><msup><mi mathvariant="normal">ل</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



توسيع مربع المجموع يعطي مجموع المربعين ومعهما ضعفا حاصل الضرب. ولأننا نريد نسخة واحدة من حاصل الضرب، نطرح حاصل الضرب مرة واحدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>+</mo><mi mathvariant="normal">ل</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ل</mi><mo>+</mo><msup><mi mathvariant="normal">ل</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>+</mo><mi mathvariant="normal">ل</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ل</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ل</mi><mo>+</mo><msup><mi mathvariant="normal">ل</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣٦</mn><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٤</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">١٣٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">متوسط التغير</mtext><mo>=</mo><mn dir="ltr">١٣٢</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "متوسط التغير",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة متوسط التغير من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "80 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
