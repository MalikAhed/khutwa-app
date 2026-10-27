import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `:::exam-question
id: math-book-p091-activity1-q1
title: الكتاب، ص ٨٩ · نشاط أو تمرين
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩١](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=91)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يسير رجل على طريق منحني، بحيث يكون ميل المماس عند أية نقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على الطريق يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`. الاقتران الذي يمثل معادلة الطريق هو اقتران تربيعي قاعدته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo></mrow></math>\` ...
solution:
ميل المماس عند النقطة يساوي المشتقة الأولى عندها. لذلك المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


المطلوب معادلة الطريق؛ نكامل المشتقة لأن التكامل يعكس الاشتقاق.
قاعدة القوة تزيد الأس واحدًا وتقسم على الأس الجديد، وتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نختصر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، مع إبقاء ثابت التكامل لأننا لم نُعط نقطة تحدده.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p091-activity1-q2
title: الكتاب، ص ٨٩ · نشاط أو تمرين
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩١](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=91)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ميل المماس لطريق عند أي نقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`. إذا كانت النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تقع على هذا الطريق، فما قاعدة الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؟

solution:
المعطى ميل المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، ومرور المنحنى بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
المطلوب معادلة الطريق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.
ميل المماس هو المشتقة الأولى؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نعكس الاشتقاق بالتكامل؛ تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`، وتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


مرور المنحنى بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` يعني أن تعويض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ نستخدمه لتحديد الثابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><msup><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٠</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


نعيد الثابت إلى القاعدة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


**الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`**.
:::


:::exam-question
id: math-book-p091-ex1
title: الكتاب، ص ٨٩ · مثال ١ · متقدم
question: تطبيقات التكامل غير المحدود
reference: [السؤال، النسخة المصورة، ص ٩١](assets/lessons/mathematics/source-crops/math-book-p091-ex1-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p091-ex1-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` يمس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، جد قاعدة الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، والمماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`. المطلوب قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

المشتقة الثانية هي مشتقة الأولى؛ نكامل أولًا لنجد الأولى، ونضيف ثابتًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>∫</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`



ميل المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. المشتقة عند نقطة التماس تساوي ميل المماس، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نكامل المشتقة الأولى. نحتاج ثابتًا جديدًا لأننا نعيد عملية التكامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`



نقطة التماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` تقع على المستقيم، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><msup><mn dir="ltr">٠</mn><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٠</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p092-ex2
title: الكتاب، ص ٩٠ · مثال ٢ · متقدم
question: تطبيقات التكامل غير المحدود
reference: [السؤال، النسخة المصورة، ص ٩٢](assets/lessons/mathematics/source-crops/math-book-p092-ex2-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p092-ex2-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، فجد معادلة منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` علمًا بأنه يمر بالنقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.
solution:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`


نكامل القوة بزيادة أسّها واحدًا والقسمة عليه؛ ولكل تكامل ثابت مستقل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">١</mn></msub></mrow></mrow></math>
\`\`\`


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">١</mn></msub><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msub></mrow></mrow></math>
\`\`\`


نعوّض بإحداثيات النقطتين في قاعدة الاقتران.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">١</mn></msub><mo>+</mo><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msub></mrow></mrow></math>
\`\`\`


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">١</mn></msub><mo>+</mo><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msub></mrow></mrow></math>
\`\`\`


نجمع المعادلتين فيُحذف الثابت الأول؛ ثم نعوّض لإيجاده.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msub><mo>→</mo><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">ج</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نضع الثابتين في القاعدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p092-ex3
title: الكتاب، ص ٩٠ · مثال محلول
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٢](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=92)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">أ</mi></mrow></math>\` جسم التحرك في خط مستقيم من نقطة الأصل ومبتعدًا عنها، فإذا كانت سرعته في أي لحظة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>\`، فما بعد الجسم عن نقطة الأصل بعد ثانيتين من بدء الحركة؟
solution:
السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`، والموقع الابتدائي نقطة الأصل. المطلوب البعد بعد ثانيتين. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` للزمن و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` للسرعة و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` للموقع.

السرعة مشتقة الموقع؛ نكاملها حدًا حدًا. قاعدة القوة تزيد الأس واحدًا وتقسم على الأس الجديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



البدء من الأصل يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><msup><mn dir="ltr">٠</mn><mn dir="ltr">٣</mn></msup><mo>+</mo><msup><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نعوض الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msup><mo>+</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">١٢</mn><mtext> </mtext><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`



السرعة غير سالبة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">ن</mi></mrow><mo>≤</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ لذلك البعد عن الأصل والمسافة المقطوعة هنا يساويان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-book-p093-ex4
title: الكتاب، ص ٩١ · مثال محلول
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=93)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذفت كرة للأعلى بسرعة ابتدائية قدرها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٤</mn><mrow><mfrac><mtext dir="rtl">قدم</mtext><mtext dir="rtl">ث</mtext></mfrac></mrow></mrow></math>\` من قمة برج ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨٠</mn></math>\` قدمًا. جد أقصى ارتفاع عن سطح الأرض تصله الكرة، علمًا بأن تسارعها يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٣٢</mn><mtext dir="rtl">قدم</mtext></mrow></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.

![قذف الكرة من برج ارتفاعه ٨٠ قدمًا](assets/lessons/mathematics/source-crops/math-book-p093-ex4-figure.webp)
solution:
![قذف الكرة من برج ارتفاعه ٨٠ قدمًا](assets/lessons/mathematics/source-crops/math-book-p093-ex4-figure.webp)

المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">التسارع</mtext><mo>−</mo><mfrac><mrow><mn dir="ltr">٣٢</mn><mtext dir="rtl">قدم</mtext></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`، والسرعة الابتدائية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٤</mn><mrow><mfrac><mtext dir="rtl">قدم</mtext><mtext dir="rtl">ث</mtext></mfrac></mrow></mrow></math>\`، وارتفاع البداية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨٠</mn></math>\` قدمًا. المطلوب أقصى ارتفاع عن الأرض.

نختار الأعلى موجبًا، ونكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` للزمن و السرعة للسرعة و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` للارتفاع. التسارع مشتقة السرعة، فنكامل ونحدد الثابت من السرعة الابتدائية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">السرعة</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">السرعة</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٤</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



عند القمة تنعدم السرعة قبل أن تتحول من صعود إلى نزول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦٤</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn><mtext> </mtext><mi mathvariant="normal">ف</mi></mrow></math>
\`\`\`



السرعة مشتقة الارتفاع؛ نكاملها ونحدد ثابتًا آخر من الارتفاع الابتدائي.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨٠</mn><mo>=</mo><mn dir="ltr">٦٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></math>
\`\`\`



نعوض زمن القمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٨</mn><mo>−</mo><mn dir="ltr">٦٤</mn><mo>+</mo><mn dir="ltr">٨٠</mn><mo>=</mo><mn dir="ltr">١٤٤</mn><mtext> </mtext><mrow><mi mathvariant="normal">ق</mi><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`



أقصى ارتفاع عن الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٤٤</mn></math>\` قدمًا.
:::


:::exam-question
id: math-book-p093-q1
title: الكتاب، ص ٩١ · نشاط أو تمرين
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=93)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان ميل المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند أي نقطة عليه يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فجد قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.
solution:
المعطى أن ميل المماس هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.
المشتقة عند النقطة تساوي ميل المماس عندها، لذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


نوزّع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` على الحدّين لتظهر قوى يسهل تكاملها.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


التكامل يعكس الاشتقاق. نزيد أس كل قوة واحدًا ثم نقسم عليه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نعوّض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` لتحديد الثابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


إذن:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p093-q2
title: الكتاب، ص ٩١ · نشاط أو تمرين
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=93)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، فجد قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، علمًا بأن المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` مماس لمنحناه عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
solution:
 معادلة المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ فميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، وقيمته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
المشتقة عند نقطة التماس تساوي ميل المماس؛ والنقطة نفسها تقع على المنحنى. لذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


نستخدم المشتقة المعطاة لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></mrow></math>\`. نكاملها لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ التكامل يعكس الاشتقاق وتكامل القوة يزيد الأس ويقسم عليه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` لتحديد الثابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


إذن:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p093-q3
title: الكتاب، ص ٩١ · نشاط أو تمرين
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=93)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فجد قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
المطلوب قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

لدينا المشتقة الثانية، فنكامل مرة للحصول على الأولى.
تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`


نعوض بشرط المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`، ونعلم أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


نكامل مرة ثانية. تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">جتا</mi></mrow></math>\`، وتكامل الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


نعوض بشرط الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ومع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` نحصل على:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mi>π</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mi>π</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow></mrow></math>\` من الطرفين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi>π</mi></mrow></math>
\`\`\`


إذن:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi>π</mi></mrow></math>
\`\`\`


نختبر الشرطين: قيمة الاقتران عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ومشتقته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
**الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mo>−</mo><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow></mrow></mrow></math>\`**.
:::


:::exam-question
id: math-book-p093-q4
title: الكتاب، ص ٩١ · نشاط أو تمرين
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=93)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تحرك جسم في خط مستقيم من نقطة الأصل ومبتعدًا عنها، بسرعة ابتدائية مقدارها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`. إذا كان تسارعه في أي لحظة يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`، فما سرعته بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` ثوان من بدء الحركة، وما المسافة التي قطعها خلال هذه الثواني؟
solution:
المعطى التسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ن</mi><mtext dir="rtl">متر</mtext></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`، والسرعة الابتدائية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`، والموقع الابتدائي صفر.

التسارع مشتقة السرعة، فنكامله بزيادة الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` والقسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>=</mo><mfrac><msup><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نعوض الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` لحساب السرعة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><msup><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mfrac><mn dir="ltr">٢٥</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٦</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣١</mn><mn dir="ltr">٢</mn></mfrac><mtext> </mtext><mrow><mfrac><mi mathvariant="normal">م</mi><mi mathvariant="normal">ف</mi></mfrac></mrow></mrow></math>
\`\`\`



لإيجاد الموقع نكامل السرعة، ونستعمل البدء من الأصل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` موجبة على الفترة، فلا ينعكس الاتجاه؛ المسافة تساوي تغير الموقع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><msup><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></msup><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٢٥</mn><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٩٠</mn><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢١٥</mn><mn dir="ltr">٦</mn></mfrac><mtext> </mtext><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`



السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mfrac><mn dir="ltr">٣١</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow></mfrac><mi mathvariant="normal">ث</mi></mfrac></math>\`، والمسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢١٥</mn><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">م</mi></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-book-p125-unit-q3
title: الكتاب، ص ١٢٣ · اختبار الوحدة
question: تطبيقات التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ١٢٥](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=125)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
لدينا المشتقة الثانية، فنكاملها للحصول على الأولى. قاعدة القوة تزيد الأس واحدًا وتقسم عليه، وتكامل الجيب هو سالب جيب التمام.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`


نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


نكامل مرة ثانية. لكل عملية تكامل ثابت؛ وتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mn dir="ltr">٢٠</mn></mfrac><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


نعوّض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


إذن:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mn dir="ltr">٢٠</mn></mfrac><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u4-p021-r1
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٢١
question: تطبيقات التكامل غير المحدود
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٢١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`، وكان ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فجد معادلة منحنى الاقتران.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`، وقيمة صغرى محلية مقدارها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
التكامل يعكس الاشتقاق؛ نكامل الثانية للحصول على الأولى، بزيادة الأس والقسمة عليه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`


عند قيمة صغرى داخلية لاقتران قابل للاشتقاق تكون المشتقة صفرًا؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نكامل المشتقة الأولى مع ثابت جديد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


مقدار القيمة الصغرى هو قيمة الاقتران عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


إذن:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


للتحقق، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ فالتقعر للأعلى عند النقطة الساكنة يؤكد أنها صغرى محلية.
:::


:::exam-question
id: math-kamel-u4-p021-r3
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٢١
question: تطبيقات التكامل غير المحدود
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٢١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان ميل المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٨</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` الواقعة عليه يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، أوجد معادلة هذا المنحنى، علمًا أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>\`، ومرور المنحنى بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٨</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وميل المماس عندها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
المشتقة عند النقطة تساوي ميل المماس، ومرور المنحنى بالنقطة يحدد قيمته؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.
التكامل يعكس الاشتقاق؛ نكامل المشتقة الثانية لنجد الأولى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`


نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`


نكامل مرة ثانية مع ثابت جديد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٥</mn><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


إذن:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u4-p021-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٢١
question: تطبيقات التكامل غير المحدود
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٢١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت سرعة جسم في اللحظة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` تعطى بالقاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، وكان الجسم على بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">م</mi></mrow></math>\` عند بدء الحركة، جد بعد هذا الجسم عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، والبعد الابتدائي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">م</mi></mrow></math>\`. نرمز للزمن بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ولـف بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`.

نستخدم اصطلاح الكتاب الذي يرمز للبعد بـف ويجعل مشتقته السرعة؛ وفق هذه القراءة نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.

السرعة مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`؛ نكاملها. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، لذلك نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



عند البداية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فنحدد الثابت.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نعوض الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\`؛ جيب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ف</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ف</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mtext> </mtext><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`



الإجابة المنهجية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٩</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow></mfrac></math>\` وفق اصطلاح البعد المذكور. إن أريد بالبعد مقدار الموقع المطلق دون تحديد جهته، فالموقع الابتدائي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\` ممكن أيضًا؛ وعندئذ:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ف</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac><mtext> </mtext><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`



في هذه القراءة البديلة يكون البعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow></mfrac></math>\`؛ لذا لا نعرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></math>\` كجواب وحيد لجميع قراءات الموقع الموقّع.
:::


:::exam-question
id: math-kamel-u4-p027-r5
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٢٧
question: تطبيقات التكامل غير المحدود
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٢٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أسقطت كرة من ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` عن سطح الأرض بتسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`. جد سرعة الكرة وهي على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` عن سطح الأرض.
solution:
الكرة أسقطت من السكون على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`، والتسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`. المطلوب سرعتها عند ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.

نختار السقوط موجبًا، ونكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` للزمن و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` للسرعة و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` للمسافة الساقطة من موضع البداية. تكامل التسارع الثابت يعطي السرعة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نكامل السرعة، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` لأن المسافة الساقطة تبدأ من صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">جـ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الانخفاض من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠٠</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` يعني سقوط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠٠</mn><mo>−</mo><mn dir="ltr">٨٠</mn><mo>=</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` لا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` لأن الحركة تبدأ عند الزمن صفر.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">١٠</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn><mtext> </mtext><mrow><mfrac><mi mathvariant="normal">م</mi><mi mathvariant="normal">ف</mi></mfrac></mrow></mrow></math>
\`\`\`



السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` إلى أسفل.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "تطبيقات التكامل غير المحدود",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة تطبيقات التكامل غير المحدود من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "60 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
