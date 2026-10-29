import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `:::exam-question
id: math-book-p088-activity1-table
title: الكتاب، ص ٨٦ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٨٨](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=88)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أكمل الجدول حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`.

![الجدول الأصلي بجميع المعطيات والخانات المطلوب إكمالها](assets/lessons/mathematics/source-crops/math-book-p088-activity1-table.webp)
final-answer:
**الصفوف بالترتيب — المشتقة، ثم التكامل:**

**الصف 1:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٠</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الصف 2:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">أ</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الصف 3:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الصف 4:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ن</mi><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">ن</mi><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الصف 5:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**في الصف الأخير:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
![الجدول الأصلي بجميع المعطيات والخانات المطلوب إكمالها](assets/lessons/mathematics/source-crops/math-book-p088-activity1-table.webp)

المطلوب إكمال عمود المشتقات، ثم تكامل هذه المشتقات، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` عدد ثابت.


نرمز ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالرمز \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">س</mi></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mi mathvariant="normal">أ</mi></mrow></math>\` بالرمز \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`، ولثابت التكامل بالرمز \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">جـ</mi></mrow></math>\`.
مشتقة الثابت صفر، وتكامل الصفر ثابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٠</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؛ لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ثابت، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`


بعكس الاشتقاق نكمل خانة التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">أ</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


قاعدة القوة تضرب في الأس ثم تنقصه واحدًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


للأس العام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` نطبق القاعدة نفسها.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ن</mi><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">ن</mi><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فالمشتقة صفر، وتبقى الصيغة صحيحة لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\` يمكن استبداله بثابت آخر.
في الصف الأخير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` كما في الجدول، ومشتقة اللوغاريتم الطبيعي تساوي مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


هذا يكمل الصفوف الخمسة بالترتيب.
:::


:::exam-question
id: math-book-p088-activity1-q1
title: الكتاب، ص ٨٦ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٨٨](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=88)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما العلاقة بين نواتج العمود الثاني ونواتج العمود الثالث؟

![الجدول الأصلي بجميع المعطيات والخانات المطلوب إكمالها](assets/lessons/mathematics/source-crops/math-book-p088-activity1-table.webp)
final-answer:
**نواتج العمود الثالث اقترانات أصلية لنواتج العمود الثاني، وتختلف عن نواتج العمود الأول بثابت تكامل.**
solution:
![الجدول الأصلي](assets/lessons/mathematics/source-crops/math-book-p088-activity1-table.webp)

العمود الثاني يعرض مشتقة اقتران العمود الأول. العمود الثالث يكامل هذه المشتقة، فيعيد الاقتران نفسه مع ثابت؛ لأن مشتقة أي ثابت صفر.



مثلًا صف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></math>\` يعطي المشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، ثم:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



إذن نواتج العمود الثالث اقترانات أصلية لنواتج العمود الثاني، وتختلف عن نواتج العمود الأول بثابت تكامل.
:::


:::exam-question
id: math-book-p088-activity1-q2
title: الكتاب، ص ٨٦ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٨٨](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=88)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بالاعتماد على النتائج التي توصلت إليها، وأن التكامل عملية عكسية للتفاضل، كيف يمكنك التحقق من صحة قواعد التكامل؟

![الجدول الأصلي بجميع المعطيات والخانات المطلوب إكمالها](assets/lessons/mathematics/source-crops/math-book-p088-activity1-table.webp)
final-answer:
**باشتقاق ناتج التكامل؛ يجب أن تساوي مشتقته الاقتران تحت إشارة التكامل.**
solution:
![الجدول الأصلي](assets/lessons/mathematics/source-crops/math-book-p088-activity1-table.webp)

للتحقق من قاعدة تكامل نشتق ناتجها؛ إذا رجعنا إلى الاقتران تحت إشارة التكامل فالقاعدة صحيحة. هذا هو معنى أن التكامل عكس الاشتقاق.

مثلًا نختبر نتيجة الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\` للمكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



رجعنا إلى المكامل نفسه، فهذه النتيجة صحيحة. وبهذه الطريقة نفحص بقية القواعد.
:::


:::exam-question
id: math-book-p089-ex1-a
title: الكتاب، ص ٨٧ · مثال ١، الفرع ١ · متوسط
question: قواعد التكامل غير المحدود
reference: [السؤال، النسخة المصورة، ص ٨٩](assets/lessons/mathematics/source-crops/math-book-p089-ex1-a-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p089-ex1-a-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
 التكامل يحسب اقترانًا تعيد مشتقته المكامل. نكامل المجموع حدًا حدًا؛ تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، وتكامل الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>∫</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>+</mo><mo>∫</mo><mn dir="ltr">٣</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نجمع الناتجين ونضيف ثابت تكامل واحدًا؛ مجموع ثوابت التكامل ثابت آخر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



النتيجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow><mo>+</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، على كل فترة لا تمر بالصفر.
:::


:::exam-question
id: math-book-p089-ex1-b
title: الكتاب، ص ٨٧ · مثال محلول
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٨٩](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=89)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">ظا</mtext><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mtext dir="rtl">ظا</mtext><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:

نوزّع القاطع على ما داخل القوس؛ حتى يظهر حدّان نعرف تكاملهما.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


التكامل يعكس الاشتقاق. مشتقة الظل هي مربع القاطع، ومشتقة القاطع هي حاصل ضرب القاطع والظل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نكامل الحدّين ثم نضيف ثابت التكامل، لأن مشتقة أي ثابت صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، على أي فترة لا تساوي فيها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` صفرًا.
:::


:::exam-question
id: math-book-p089-ex1-c
title: الكتاب، ص ٨٧ · مثال محلول
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٨٩](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=89)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`
solution:
 نكامل حدّي الجمع كلًّا على حدة.
قاعدة تكامل القوة تزيد الأس واحدًا وتقسم على الأس الجديد؛ لذا:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


أما \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>\` فمشتقته تساوي نفسه، ولذلك تكامله هو \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`


نجمع النتيجتين ونضيف ثابتًا واحدًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p089-ex1-d
title: الكتاب، ص ٨٧ · مثال محلول
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٨٩](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=89)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><msup><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><msup><mrow><mtext dir="rtl">ظا</mtext><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">ظا</mtext><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:

المتطابقة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>\` تسمح بتحويل مربع الظل إلى مربع القاطع؛ ونختار ذلك لأن مربع القاطع هو مشتقة الظل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


تكامل الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وتكامل مربع القاطع هو الظل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` لا تساوي صفرًا.
:::


:::exam-question
id: math-book-p089-ex2
title: الكتاب، ص ٨٧ · مثال محلول
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٨٩](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=89)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><msup><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المطلوب إيجاد ناتج التكامل المعطى.


قاعدة تكامل القوة تعكس قاعدة الاشتقاق: نزيد الأس واحدًا، ثم نقسم على الأس الجديد؛ ويشترط ألا يكون الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo mathvariant="normal">≠</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نبسّط التعبير المعطى بالتوزيع أو قسمة الحدود قبل التكامل، حتى تظهر القوى منفصلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msup><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



التكامل يحافظ على الجمع والطرح؛ لذلك نكامل الحدود واحدًا واحدًا.
لهذا الحد، الأس الجديد هو:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نبقي المعامل خارج التكامل، ثم نقسمه على الأس الجديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mo>⋅</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



نبسّط المعامل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mfrac><mn dir="ltr">١</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



هذا الحد ثابت، وتكامله هو الثابت مضروبًا في المتغير.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٢</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



لهذا الحد، الأس الجديد هو:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نبقي المعامل خارج التكامل، ثم نقسمه على الأس الجديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mo>⋅</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



نبسّط المعامل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mfrac><mn dir="ltr">١</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mfrac><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>
\`\`\`



نجمع النواتج، ونضيف ثابتًا واحدًا لأن مشتقة أي ثابت صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><msup><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



يجب استبعاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` من المجال لأن التعبير الأصلي يحتوي قوى سالبة أو مقامًا يساوي صفرًا عندها.
:::


:::exam-question
id: math-book-p090-think1
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
المثال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` المشار إليه:

جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.

هل يمكنك إيجاد ناتج التكامل في المثال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` بطريقة أخرى؟
final-answer:
**نعم؛ بإعادة كتابة المكامل على صورة مربع مجموع.**

**الناتج:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المثال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` المقصود في الكتاب هو التكامل الآتي؛


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نعم، يمكن التبسيط بطريقة أخرى. بما أن المقام مربع أيضًا، نقسم داخل المربع على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ ويلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">س</mi></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`


نستخدم مربع مجموع: مربع الأول، ثم ضعف حاصل الضرب، ثم مربع الثاني.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`


نكامل الحدود بالقوة: نزيد الأس واحدًا ونقسم على الأس الجديد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup><mo fence="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


هذه النتيجة صالحة على فترات المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p090-activity2
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
final-answer:
**الإجابة:**

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣٥</mn></mrow></math>\`
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، والمطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
التكامل يعكس الاشتقاق، لذلك نكامل المشتقة لإيجاد قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`. نزيد أس القوة واحدًا ونقسم عليه، وتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mn dir="ltr">٥</mn></mfrac><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نستخدم قيمة الاقتران المعطاة لتحديد الثابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>=</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


الآن نعوّض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` في القاعدة المكتملة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٥</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٣٥</mn></mrow></math>
\`\`\`


إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣٥</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p090-think2
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما الفرق بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mrow><mo>∫</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` و\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` اقتران متصل؟
final-answer:
1. **اشتقاق التكامل:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>\`
2. **تكامل المشتقة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>\`.
solution:


التكامل غير المحدود يعطي جميع الاقترانات التي مشتقتها تساوي المكامل؛ وتختلف هذه الاقترانات بثابت.
إذا سمّينا أحد أصول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بالرمز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`، فلدينا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ف</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
في التعبير الأول نشتق الأصل وثابته؛ مشتقة الثابت صفر، فنعود إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` وحدها.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>∫</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


في التعبير الثاني نبحث عن اقتران مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` نفسها تحقق ذلك، وكذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` مضافًا إليها أي ثابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الفرق أن اشتقاق التكامل يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، بينما تكامل المشتقة يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`.
:::


:::exam-question
id: math-book-p090-q1-a
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٨</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`
solution:
المطلوب تكامل الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

تكامل الثابت يساوي الثابت مضروبًا في المتغير؛ لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٨</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mi mathvariant="normal">جـ</mi></mrow></math>\` ثابت التكامل؛ إضافته لا تغير المشتقة.
:::


:::exam-question
id: math-book-p090-q1-b
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow><mn dir="ltr">٥</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**المجال الحقيقي:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المطلوب إيجاد ناتج التكامل المعطى.


قاعدة تكامل القوة تعكس قاعدة الاشتقاق: نزيد الأس واحدًا، ثم نقسم على الأس الجديد؛ ويشترط ألا يكون الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo mathvariant="normal">≠</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نبسّط التعبير المعطى بالتوزيع أو قسمة الحدود قبل التكامل، حتى تظهر القوى منفصلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup><mo>+</mo><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></math>
\`\`\`



التكامل يحافظ على الجمع والطرح؛ لذلك نكامل الحدود واحدًا واحدًا.
لهذا الحد، الأس الجديد هو:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نبقي المعامل خارج التكامل، ثم نقسمه على الأس الجديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mo>⋅</mo><mfrac><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></msup><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mfrac></mrow></math>
\`\`\`



نبسّط المعامل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mfrac><mn dir="ltr">١</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٥</mn></mfrac></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`



لهذا الحد، الأس الجديد هو:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نبقي المعامل خارج التكامل، ثم نقسمه على الأس الجديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">س</mi></msqrt><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>⋅</mo><mfrac><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mfrac></mrow></math>
\`\`\`



نبسّط المعامل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mfrac><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">س</mi></msqrt><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow></math>
\`\`\`



نجمع النواتج، ونضيف ثابتًا واحدًا لأن مشتقة أي ثابت صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow><mn dir="ltr">٥</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



في الأعداد الحقيقية نراعي شروط الجذور في السؤال؛ يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، وتصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` إذا وقع الجذر في المقام.
:::


:::exam-question
id: math-book-p090-q1-c
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext dir="rtl">ظا</mtext><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
 نكامل حدّي الجمع كلًّا على حدة.
قاعدة القوة تزيد الأس واحدًا وتقسم على الأس الجديد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`


مشتقة القاطع هي القاطع مضروبًا في الظل، لذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نجمع النتيجتين ونضيف ثابت التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p090-q1-d
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المطلوب إيجاد ناتج التكامل المعطى.


قاعدة تكامل القوة تعكس قاعدة الاشتقاق: نزيد الأس واحدًا، ثم نقسم على الأس الجديد؛ ويشترط ألا يكون الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo mathvariant="normal">≠</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نبسّط التعبير المعطى بالتوزيع أو قسمة الحدود قبل التكامل، حتى تظهر القوى منفصلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



التكامل يحافظ على الجمع والطرح؛ لذلك نكامل الحدود واحدًا واحدًا.
لهذا الحد، الأس الجديد هو:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نبقي المعامل خارج التكامل، ثم نقسمه على الأس الجديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نبسّط المعامل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mfrac><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



هذا الحد ثابت، وتكامله هو الثابت مضروبًا في المتغير.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٥</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



لهذا الحد، الأس الجديد هو:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نبقي المعامل خارج التكامل، ثم نقسمه على الأس الجديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>⋅</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



نبسّط المعامل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>
\`\`\`



نجمع النواتج، ونضيف ثابتًا واحدًا لأن مشتقة أي ثابت صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



يجب استبعاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` من المجال لأن التعبير الأصلي يحتوي قوى سالبة أو مقامًا يساوي صفرًا عندها.
:::


:::exam-question
id: math-book-p090-q1-e
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
القاطع هو مقلوب جيب التمام؛ لذلك مقلوب مربع جيب التمام يساوي مربع القاطع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نختار هذه الصورة لأن مشتقة الظل هي مربع القاطع؛ والتكامل يعكس الاشتقاق.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>∫</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، على فترات لا تساوي فيها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` صفرًا.
:::


:::exam-question
id: math-book-p090-q1-f
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac><mo fence="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`

**الشرط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
 يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لأن المكامل يحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac></math>\`.
نكامل حدّي الجمع مع إبقاء المعاملين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` خارج التكامل.
الأسّي \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>\` مشتقته تساوي نفسه؛ لذلك تكامله هو نفسه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`


مشتقة اللوغاريتم الطبيعي للقيمة المطلقة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ لذا نستخدم القيمة المطلقة لتشمل جانبي الصفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`


نجمع النتيجتين ونضيف ثابتًا واحدًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac><mo fence="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p090-q2
title: الكتاب، ص ٨٨ · نشاط أو تمرين
question: قواعد التكامل غير المحدود
reference: [الكتاب، النسخة المصورة، ص ٩٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=90)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mo>=</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
final-answer:
**الإجابة:**

\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، والمطلوب قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.
نطرح الأسّي من الطرفين لعزل المشتقة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`


التكامل يعكس الاشتقاق. مشتقة الجيب هي جيب التمام، ومشتقة الأسّي هي نفسه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نستخدم الشرط عند صفر، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٠</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى الطرفين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


إذن القاعدة المطلوبة هي:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`


أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></mrow></mrow></math>\`.
:::


:::mcq
id: math-book-p124-unit-q1-c
title: الكتاب، ص ١٢٢ · اختبار الوحدة
kicker: اختبار الوحدة
reference: [الكتاب، النسخة المصورة، ص ١٢٤](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=124)
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><msup><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٥</mn></mfrac><msup><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac><msup><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac><msup><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><msup><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:

نستخدم التعويض، أي نعطي التعبير الداخلي اسمًا جديدًا؛ ونختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` لأن مشتقتها تظهر ضمن المكامل بإشارة سالبة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نفصل عامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` من القوة الرابعة، ليقترن مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` والتفاضل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٣</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`


قاعدة القوة تزيد الأس واحدًا وتقسم على الأس الجديد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mo>∫</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نعيد المتغير الأصلي.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><msup><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الثاني صحيح، على فترات لا يساوي فيها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` صفرًا.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-book-p125-unit-q1-h
title: الكتاب، ص ١٢٣ · اختبار الوحدة
kicker: اختبار الوحدة
reference: [الكتاب، النسخة المصورة، ص ١٢٥](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=125)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، فما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
explanation:
المعطى المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
لإيجاد المشتقة الأولى نكامل المشتقة الثانية. قاعدة القوة تزيد الأس واحدًا وتقسم على الأس الجديد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نحسب القيمتين المطلوبتين مع إبقاء الثابت نفسه؛ لأنهما للاقتران نفسه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>=</mo><mfrac><mn dir="ltr">١٥</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نطرح؛ فيختصر الثابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٥</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>−</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


إذن الخيار الثالث صحيح.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p004-r5
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٤
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٤
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المطلوب تكامل لوغاريتم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

اللوغاريتم الطبيعي يعكس الأسّي؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. إذن المكامل ثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



تكامل الثابت هو الثابت مضروبًا في المتغير، مع ثابت تكامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>∫</mo><mn dir="ltr">٢</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



إذن النتيجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p005-r2
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٥
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٥
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></msup><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 المطلوب التكامل.

عند قسمة قوتين للأساس نفسه نطرح الأسين؛ مقامنا قوة للعدد الموجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، فلا يساوي صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></msup><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup></mfrac><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></msup><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`



بعد طرح الأسين يختفي المتغير من المكامل، فيصبح ثابتًا. تكامل الثابت يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>×</mo><mtext dir="rtl">المتغير</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">هـ</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\` يمثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`؛ مشتقته صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p009-r3
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٩
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٩
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` و\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>×</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`.
نضرب الاقترانين أولًا؛ نضرب المعاملين، ونجمع الأسين لأن أساس القوة في العاملين هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`


قاعدة تكامل القوة تزيد الأس واحدًا وتقسم على الأس الجديد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الرابع صحيح.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p009-r5
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٩
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٩
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 القاطع مقلوب جيب التمام، والظل يساوي الجيب مقسومًا على جيب التمام؛ لذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


هذه الصورة هي مشتقة القاطع، ولذلك تكاملها هو القاطع مع ثابت التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، وهو الخيار الأول. يبقى شرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p005-r3
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٥ · البند ٣ · متوسط
kicker: الكامل، الوحدة ٤ · النسخة المصورة، ص ٥ · البند ٣ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u4-p005-r3-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u4-p005-r3-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`؟
- [ ] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٨</mn></math>\`
explanation:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، والمطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
التكامل يعكس الاشتقاق؛ نزيد أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ونقسم عليه، وتكامل الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نحسب القيمتين بالثابت نفسه؛ لأنهما للاقتران نفسه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">١٠</mn><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">١٤</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نطرح القيمتين مع وضع الثانية بين قوسين؛ يختصر ثابت التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٤</mn><mo>+</mo><mi mathvariant="normal">جـ</mi><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">جـ</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٤</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`


إذن الخيار الثالث صحيح.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p006-r3
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٦
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٦
question: إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>∫</mo><mfrac><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`، فما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 الكسران معرفان حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
التكامل غير المحدود هو اقتران مشتقته تساوي المكامل. لذلك نشتق العلاقة المعطاة، ومشتقة ثابت التكامل صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


نجمع الكسرين لأن لهما المقام نفسه؛ فيصبح مجموع البسطين مساويًا للمقام.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نطرح الكسر الأول الذي يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` مع ثابت تكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">الناتج</mtext><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، وهو الخيار الثالث.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p009-r1
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٩
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٩
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٥</mn></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٦</mn></msup><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٦</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٠</mn><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٤</mn></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٥</mn></msup><mn dir="ltr">١٠</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المطلوب تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٥</mn></mrow></msup></math>\`.

نستخدم التعويض لأن الداخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` خطي، ومشتقته ثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ فيتحول التكامل إلى قوة مباشرة ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ل</mi></mrow></math>\` فتح القوة الخامسة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نغير التعبير والتفاضل معًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٥</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>∫</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٥</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`



قاعدة القوة تزيد الأس واحدًا وتقسم على الأس الجديد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>∫</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٥</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٦</mn></msup><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٦</mn></msup><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٦</mn></msup><mn dir="ltr">١٢</mn></mfrac></mrow></math>
\`\`\`



نعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٥</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٦</mn></msup></mrow><mn dir="ltr">١٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



النتيجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٦</mn></mrow></msup></mrow><mn dir="ltr">١٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p003-r3
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٣
kicker: الكامل، الوحدة ٤
reference: الكامل، النسخة المصورة، ص ٣
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٥</mn></msup></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٦</mn></msup><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٦</mn></msup><mn dir="ltr">٣٦</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٦</mn></msup><mn dir="ltr">٣٠</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٦</mn></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المطلوب تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msup></mrow><mrow><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mn dir="ltr">٥</mn></mrow></msup></mrow></mrow></math>\`.

للعاملين الأس نفسه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`؛ لذا نجمعهما داخل قوة واحدة باستخدام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٥</mn></mrow></msup></mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٥</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">أب</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٥</mn></mrow></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></msup><mo>=</mo><msup><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">س</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="false">]</mo></mrow><mn dir="ltr">٥</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">س</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



إذن المكامل\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo>(</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٥</mn></mrow></msup></math>\`. نختار التعويض لأن مشتقة الداخل ثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٦</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٥</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mo>∫</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٥</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`



نزيد الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></math>\` الناتجة من التفاضل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mo>∫</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٥</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٦</mn></msup><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٦</mn></msup><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٦</mn></msup><mn dir="ltr">٣٦</mn></mfrac></mrow></math>
\`\`\`



نعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٦</mn></msup></mrow><mn dir="ltr">٣٦</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



نحافظ على شرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` من السؤال الأصلي.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p003-r5
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٣
kicker: الكامل، الوحدة ٤
reference: الكامل، النسخة المصورة، ص ٣
question: جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">س</mi><msqrt><mi mathvariant="normal">س</mi></msqrt></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المطلوب إيجاد ناتج التكامل المعطى.


قاعدة تكامل القوة تعكس قاعدة الاشتقاق: نزيد الأس واحدًا، ثم نقسم على الأس الجديد؛ ويشترط ألا يكون الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo mathvariant="normal">≠</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>×</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></mrow></math>\`، ثم نختصر عامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">س</mi></msqrt></math>\` من البسط والمقام؛ وهذا جائز لأن المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` يجعل هذا العامل غير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



لهذا الحد، الأس الجديد هو:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نبقي المعامل خارج التكامل، ثم نقسمه على الأس الجديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mn dir="ltr">٢</mn></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>⋅</mo><mfrac><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mfrac></mrow></math>
\`\`\`



نبسّط المعامل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mfrac><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mn dir="ltr">٢</mn></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow></math>
\`\`\`



نجمع النواتج، ونضيف ثابتًا واحدًا لأن مشتقة أي ثابت صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



المجال هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ فالجذر يتطلب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، ووجوده في المقام يستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. ولأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup><mo>=</mo><mrow><mi mathvariant="normal">س</mi><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></mrow></math>\`، فالنتيجة تطابق الخيار الثالث.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p004-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٤
kicker: الكامل، الوحدة ٤
reference: الكامل، النسخة المصورة، ص ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`، فما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
explanation:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`.
نضيف الأسّي إلى الطرفين لعزل المشتقة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`


التكامل يعكس الاشتقاق؛ تكامل الثابت هو الثابت مضروبًا في المتغير، وتكامل الأسّي هو نفسه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نعوّض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` ونستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` من الطرفين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جـ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


نحسب القيمة المطلوبة عند صفر، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٠</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٠</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، وهو الخيار الثالث.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p005-r1
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٥
kicker: الكامل، الوحدة ٤
reference: الكامل، النسخة المصورة، ص ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>∫</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">أ</mi><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow></mrow></math>\`، فما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi>π</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mi>π</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi>π</mi></mrow></math>\`
explanation:

بما أن العلاقة تعطينا ناتج تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، فإن اشتقاق طرفيها يعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ فالتكامل والاشتقاق عمليتان عكسيتان.
نستخدم قاعدة السلسلة في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`: نشتق الجيب التمام ثم نضرب في مشتقة الداخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mrow><mo fence="true">[</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`


السالبان يعطيان إشارة موجبة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نعوّض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">π</mi></mrow></math>\`؛ حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، والمعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi>π</mi><mo>=</mo><mn dir="ltr">٢</mn><mi>π</mi><mo>+</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow></math>\`، ثم نضرب الطرفين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>π</mi><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn><mi>π</mi></mrow></math>
\`\`\`


إذن الخيار الرابع صحيح.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p005-r5
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٥
kicker: الكامل، الوحدة ٤
reference: الكامل، النسخة المصورة، ص ٥
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 المطلوب التكامل.

عند قسمة قوتين للأساس نفسه نطرح الأسين؛ مقامنا قوة للعدد الموجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، فلا يساوي صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mfrac><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></msup><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`



بعد طرح الأسين يختفي المتغير من المكامل، فيصبح ثابتًا. تكامل الثابت يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>×</mo><mtext dir="rtl">المتغير</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">هـ</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\` يمثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`؛ مشتقته صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p007-r1
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٧
kicker: الكامل، الوحدة ٤
reference: الكامل، النسخة المصورة، ص ٧
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><mrow><mi mathvariant="normal">س</mi><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المطلوب تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`.  في الأعداد الحقيقية يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، والمقام يقتضي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\`.

لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><msup><mrow><mo>(</mo><mo>√</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">س</mi></msqrt></math>\` عاملًا مشتركًا من البسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>=</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo stretchy="false">(</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">س</mi><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo stretchy="false">(</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



نختصر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` لأنه غير صفري على المجال الأصلي.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">س</mi><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></math>
\`\`\`



نكامل بزيادة الأس إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\` والقسمة عليه.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



النتيجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، مع بقاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p007-r2
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٧
kicker: الكامل، الوحدة ٤
reference: الكامل، النسخة المصورة، ص ٧
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup><mo>−</mo><msup><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:

نحلل فرق مربعين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. نستخدمه لأن القوتين الرابعة هما مربعا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


المتطابقة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تختصر العامل الأول، وتعطي أيضًا \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


مشتقة الظل هي مربع القاطع، وتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الرابع صحيح، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p007-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٧
kicker: الكامل، الوحدة ٤
reference: الكامل، النسخة المصورة، ص ٧
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">٤</mn><mi>π</mi></mfrac><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">٤</mn><mi>π</mi></mfrac><mi mathvariant="normal">س</mi><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:
الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\` ثابتة، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عدد ثابت لا يعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

قاطع الزاوية مقلوب جيب تمامها، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mrow><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac></mrow></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="false">(</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



تكامل الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` مع ثابت تكامل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>∫</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



النتيجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p006-r1
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٦
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٦
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
التكامل يعكس الاشتقاق، فيعيد الاقتران مع ثابت.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>∫</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>
\`\`\`


ندمج الواحد في ثابت التكامل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo>−</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>
\`\`\`



في الأعداد الحقيقية نعمل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">س</mi></msqrt></math>\` تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">س</mi></msqrt></math>\` في المقام ولا تُعرّف عند صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p007-r3
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٧
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٧
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup><mo>−</mo><msup><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 نستخدم فرق مربعين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، لأن القوتين الرابعة هما مربعا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


مجموع مربعي الجيب وجيب التمام يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وفرق المربعين يساوي جيب تمام الزاوية المضاعفة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>⋅</mo><mn dir="ltr">١</mn><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` بقاعدة السلسلة؛ لذلك نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` كي نعوّض هذا العامل عند التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، وهو الخيار الثاني.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p009-r2
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٩
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٩
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mn dir="ltr">٥</mn><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mn dir="ltr">٥</mn></mfrac></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 نستخدم فرق المربعين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`؛ فتختصر الضربات قبل التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>
\`\`\`


إذن المكامل يساوي:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>
\`\`\`


نكامل الحدّين؛ تكامل الثابت هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>×</mo><mtext dir="rtl">المتغير</mtext></mrow></math>\`، وقاعدة القوة تزيد الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` وتقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mn dir="ltr">٥</mn></mfrac><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الأول صحيح.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p009-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ٩
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ٩
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><msup><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><msup><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 قاطع التمام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قتا</mi></math>\` هو مقلوب الجيب؛ لذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mrow><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><msup><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


مشتقة ظل التمام هي سالب مربع قاطع التمام؛ لذا مشتقة سالب ظل التمام تعطي المكامل الموجب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


والتكامل يعكس الاشتقاق.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">الناتج</mtext><mo>−</mo><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، وهو الخيار الأول. يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p010-r1
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٠
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٠
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mfrac><mn dir="ltr">١</mn><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mfrac></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` عدد ثابت؛ فالأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لا يحتوي المتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.
أما مقلوب مربع جيب التمام فيساوي مربع القاطع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


تكامل الثابت هو الثابت مضروبًا في المتغير، وتكامل مربع القاطع هو الظل لأن مشتقة الظل تساوي مربع القاطع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نجمع الحدّين ونضيف ثابتًا واحدًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac><mo fence="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الثالث صحيح، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p010-r3
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٠
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٠
question: أي الاقترانات التالية يمثل اقترانًا أصليًا للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mfrac><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mfrac><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
explanation:
الاقتران الأصلي هو اقتران تعطي مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` هو اللوغاريتم الطبيعي ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ لا نحتاج قيمة مطلقة على هذا المجال.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\` بقاعدة السلسلة. لذا نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\` حتى تصبح مشتقتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


نجمع الحدّين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


المطلوب أحد الاقترانات الأصلية؛ نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فنحصل على الخيار الرابع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p010-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٠
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٠
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٩</mn></mfrac><mo>−</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٩</mn></mfrac><mo>+</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المطلوب تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`.

نفصل الفرق إلى تكاملين، ثم نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` في الأول لأن مشتقة الداخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mn dir="ltr">٣</mn></mfrac></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>∫</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`



قاعدة القوة تزيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وتقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>∫</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٩</mn></mfrac></mrow></math>
\`\`\`



تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>×</mo><mi mathvariant="normal">ظا</mi></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\`؛ لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>×</mo><mi mathvariant="normal">ظا</mi></mrow></math>\`. نحافظ على السالب أمام التكامل الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">]</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٩</mn></mfrac><mo>−</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



النتيجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mn dir="ltr">٩</mn></mfrac><mo>−</mo><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، على كل فترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` فيها غير صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p011-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١١
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١١
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></msup><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 المطلوب التكامل.

عند قسمة قوتين للأساس نفسه نطرح الأسين؛ مقامنا قوة للعدد الموجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، فلا يساوي صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></msup><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mfrac><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



بعد طرح الأسين يختفي المتغير من المكامل، فيصبح ثابتًا. تكامل الثابت يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>×</mo><mtext dir="rtl">المتغير</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\` يمثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`؛ مشتقته صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p012-r2
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٢
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٢
question: جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mrow><mo>∫</mo><mrow><mo stretchy="true">(</mo><mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
explanation:
 اشتقاق أصل الاقتران يعيد الاقتران نفسه، ومشتقة ثابت التكامل صفر؛ لذلك نحتاج تبسيط ما تحت التكامل فقط.
نستخدم متطابقة الزاوية المضاعفة لأنها تحتوي مربع جيب التمام الموجود في السؤال.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نعوّض، ثم نختصر الحدّين المتعاكسين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


إذن:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>∫</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


الخيار الثاني صحيح.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p012-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٢
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٢
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo>∫</mo><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\` و\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mrow><mo>∫</mo><msup><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، فما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">ن</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المطلوب الفرق بين تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` وتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

يمكن جمع الفرق في تكامل واحد، مع السماح بثابت ناتج عن فرق ثابتي التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">م</mi><mo>=</mo><mo>∫</mo><mrow><mo fence="true">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


فرق مربعين يساوي حاصل ضرب فرق العددين في مجموعهما؛ نستخدمه لأن الحدين مربعان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mrow><mo fence="true">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>+</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


مجموع مربعي الجيب وجيب التمام للزاوية نفسها يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. أما فرق مربعيهما فيساوي جيب تمام الزاوية المضاعفة، ومضاعفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac></math>\` تعطينا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>+</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نعوض بالهويتين في حاصل الضرب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٤</mn></msup><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>⋅</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، لأن مشتقة الجيب جيب التمام.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">م</mi><mo>=</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">ن</mi></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`، وهو الخيار الأول.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p014-r1
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٤
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٤
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mfrac><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 المطلوب التكامل.

عند قسمة قوتين للأساس نفسه نطرح الأسين؛ مقامنا قوة للعدد الموجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، فلا يساوي صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mfrac><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



بعد طرح الأسين يختفي المتغير من المكامل، فيصبح ثابتًا. تكامل الثابت يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>×</mo><mtext dir="rtl">المتغير</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`



الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\` يمثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`؛ مشتقته صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p014-r2
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٤
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٤
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><msup><mtext dir="rtl">هـ</mtext><mrow><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">س</mi><mtext dir="rtl">هـ</mtext></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 المتطابقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تجعل الأس ثابتًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`


إذن المكامل هو العدد الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، وتكامل الثابت يساوي الثابت مضروبًا في المتغير.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">هـ</mi><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الثالث صحيح. يبقى شرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ لأن القاطع والظل في التعبير الأصلي غير معرّفين عند أصفارها.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p014-r3
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٤
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٤
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 ظل التمام يساوي جيب التمام مقسومًا على الجيب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`


نستخدم التعويض: نسمّي المقام \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ع</mi></mrow></math>\`، لأن مشتقته جيب التمام الموجود في البسط.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


يتحول التكامل إلى مقلوب متغير. تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ع</mi></mfrac></math>\` هو اللوغاريتم الطبيعي لقيمته المطلقة؛ لأن مشتقة هذا اللوغاريتم تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ع</mi></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mi mathvariant="normal">ع</mi></mfrac><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">ع</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


نعيد التعويض.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الثالث صحيح، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p014-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٤
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٤
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 القاطع هو مقلوب جيب التمام؛ لذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`


نستخدم التعويض بالمقام لأن مشتقته هي سالب الجيب؛ وهذا السالب هو سبب سالب الجواب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نحوّل البسط والتفاضل إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mo>∫</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mi mathvariant="normal">ع</mi></mfrac></mrow></math>
\`\`\`


تكامل المقلوب هو اللوغاريتم الطبيعي للقيمة المطلقة؛ نعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الثاني صحيح، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p015-r2
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٥
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٥
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
 نكامل حدّي الفرق كلًّا على حدة، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` بسبب المقام.
تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` هو اللوغاريتم الطبيعي للقيمة المطلقة؛ لذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`


باستعمال قاعدة السلسلة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`؛ وهي الإشارة الموجودة في المكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>
\`\`\`


إذن تكامل الحد السالب هو الأسّي الموجب نفسه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>
\`\`\`


نجمع النتيجتين ونضيف ثابتًا واحدًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo fence="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


إذن الخيار الثاني صحيح.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u4-p015-r4
title: الكامل، الوحدة ٤ · النسخة المصورة، ص ١٥
kicker: الكامل، الوحدة ٤
reference: الكامل، الوحدة ٤، النسخة المصورة، ص ١٥
question: ما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∫</mo><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
explanation:
المطلوب تكامل مجموع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac></math>\` والأسّي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\`.

يمكن فصل تكامل المجموع إلى مجموع التكاملين؛ لأن التكامل يحافظ على الجمع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo fence="true">)</mo></mrow><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>∫</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>+</mo><mo>∫</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


تكامل مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هو اللوغاريتم الطبيعي للقيمة المطلقة؛ لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` على المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>∫</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`


لتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\`، نلاحظ أن مشتقة الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
لذلك نضع معاملًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` أمام الأسّي حتى يعوض هذه الإشارة عند الاشتقاق.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>
\`\`\`


إذن:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>
\`\`\`


نجمع النتيجتين، ونضيف ثابت تكامل واحدًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo fence="true">)</mo></mrow><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">س</mi><mi mathvariant="normal">∣</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mi mathvariant="normal">جـ</mi></mrow></math>
\`\`\`


**يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`**؛ لأن المكامل الأصلي يحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "قواعد التكامل غير المحدود",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة قواعد التكامل غير المحدود من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "65 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
