import{defineMarkdownLesson as m}from"../../../markdown/lesson-model.js?v=7388f68cc0f433fd";export const lessonSource=`:::exam-question
id: math-book-p072-ex1
title: الكتاب، ص ٧٠ · مثال١
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٠، مثال١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">١</mn></mtd><mtd><mn dir="ltr">٢</mn></mtd></mtr><mtr><mtd><mn dir="ltr">١</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mn dir="ltr">١</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، فبين أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين.
المصفوفة ونظيرها تعطيان الوحدة في ترتيبي الضرب؛ نحسب الطرفين.

نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`



نتحقق من ترتيب الضرب الآخر أيضًا.


نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`




كلا الناتجين هو مصفوفة الوحدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p072-ex2
title: الكتاب، ص ٧٠ · مثال٢
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٠، مثال٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أي المصفوفات الآتية منفردة وأيها غير منفردة؟ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mn dir="ltr">٨</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">١</mn></mtd><mtd><mn dir="ltr">٢</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٦</mn></mtd><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٥</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.
نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn><mo>+</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٣٢</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` نوسع على الصف الأول، بإشارات\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`، بعد حذف صف كل مدخلة وعمودها.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">[</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`


نحسب المحددات الصغيرة والمنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢٦</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤٢</mn><mo>+</mo><mn dir="ltr">٢٦</mn><mo>+</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` غير منفردة، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` منفردة.
:::


:::exam-question
id: math-book-p073-ex3
title: الكتاب، ص ٧١ · مثال ٣
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧١، مثال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي تجعل المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٨</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\` منفردة.
solution:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

المصفوفة المنفردة محددها صفر؛ نوجد المحدد من المدخلات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نجمع الحدود، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢٢</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p073-ex4
title: الكتاب، ص ٧١ · مثال٤
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧١، مثال٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد النظير الضربي للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٥</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٦</mn></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\` إن وجد.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.




نحسب المحدد؛ وجود نظير ضربي يتطلب ألا يكون صفرًا.





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نبدّل مدخلتي القطر ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.


المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p074-ex5
title: الكتاب، ص ٧٢ · مثال ٥
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٢، مثال ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٢</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` (إن أمكن).
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.




نحسب المحدد؛ وجود نظير ضربي يتطلب ألا يكون صفرًا.





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نبدّل مدخلتي القطر ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.


المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٨</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p075-exercise-1
title: الكتاب، ص ٧٣ · تمرين-١
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٣، تمرين-١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بين أي من المصفوفات الآتية لها نظير ضربي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٦</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٦</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mn dir="ltr">٩</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٨</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المصفوفة المربعة لها نظير ضربي إذا كان محددها غير صفري. نحسب محدد كل مصفوفة لنختبر هذا الشرط.

محدد المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` هو حاصل ضرب مدخلتي القطر الرئيسي ناقص حاصل ضرب المدخلتين الأخريين:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mo>+</mo><mn dir="ltr">٢٤</mn><mo>=</mo><mn dir="ltr">٤٨</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


لحساب محددج، نوسع على الصف الأول. نحذف صف كل مدخلة وعمودها لنحصل على المحدد الصغير، وتكون الإشارات\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">[</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٧٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">١٨</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤٨</mn><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٣٨</mn><mo>−</mo><mn dir="ltr">٢٤</mn><mo>+</mo><mn dir="ltr">١٦٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


إذن **\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` وحدها لها نظير ضربي**؛ لأن محددها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٨</mn></math>\`، بينما محددا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` يساويان صفرًا.

**المصدر:** الصفحات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٧</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧٠</mn></math>\` من الكتاب.
:::


:::exam-question
id: math-book-p075-exercise-2-a
title: الكتاب، ص ٧٣ · تمرين-٢-أ
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٣، تمرين-٢-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` التي تجعل المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mi mathvariant="normal">ك</mi></mtd><mtd><mi mathvariant="normal">ك</mi></mtd></mtr><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\` منفردة؟
solution:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

المصفوفة المنفردة محددها صفر؛ نوجد المحدد من المدخلات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ك</mi><mn dir="ltr">٢</mn></msup><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi></mrow></math>\` عاملًا مشتركًا؛ أحد العاملين يساوي صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mo stretchy="true">(</mo><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٠</mn><mtext dir="rtl">أو</mtext><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p075-exercise-2-b
title: الكتاب، ص ٧٣ · تمرين-٢-ب
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٣، تمرين-٢-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` التي تجعل المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mi mathvariant="normal">ك</mi></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr><mtr><mtd><mn dir="ltr">١</mn></mtd><mtd><mi mathvariant="normal">ك</mi></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\` منفردة؟
solution:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

المصفوفة المنفردة محددها صفر؛ نوجد المحدد من المدخلات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ك</mi><mn dir="ltr">٢</mn></msup><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نفكك فرق المربعين؛ أحد العاملين يساوي صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo>±</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p075-exercise-3-a
title: الكتاب، ص ٧٣ · تمرين-٣-أ
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٣، تمرين-٣-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mn dir="ltr">٥</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`. فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` إن أمكن.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.




نحسب المحدد؛ وجود نظير ضربي يتطلب ألا يكون صفرًا.





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نبدّل مدخلتي القطر ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.


المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p075-exercise-3-b
title: الكتاب، ص ٧٣ · تمرين-٣-ب
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٣، تمرين-٣-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mn dir="ltr">٥</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`. فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` أيضًا نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؛ لهذا نظير النظير يعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.
نثبت أولًا وجود النظير داخل هذا السؤال.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٢</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نطبق خاصية نظير النظير.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><msup><mo stretchy="false">)</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p075-exercise-4
title: الكتاب، ص ٧٣ · تمرين-٤
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٣، تمرين-٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mi mathvariant="normal">س</mi></mtd><mtd><mn dir="ltr">٥</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؟
solution:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

محدد النظير مقلوب المحدد، فنحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` أولًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`

نساوي المقامين غير الصفريين ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mo>=</mo><mn dir="ltr">٥</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p075-exercise-5
title: الكتاب، ص ٧٣ · تمرين-٥
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٣، تمرين-٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">١</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mn dir="ltr">٢</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">جـ</mi></mrow><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mrow><msup><mi mathvariant="normal">ـ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. نظير حاصل الضرب يعكس الترتيب حتى تتجاور كل مصفوفة ونظيرها. نتحقق من وجود النظيرين أولًا.
نحسب المحددين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mspace width="2em"/><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ج</mi></mrow><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>\` من اليسار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` ثم نأخذ النظير.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ب</mi><mo>⇒</mo><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`


نبدل قطري \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ونغير الإشارتين الأخريين، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نضرب كل صف في كل عمود.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::mcq
id: math-book-p081-test-9
title: الكتاب، ص ٧٩ · اختبار-٩
kicker: الكتاب، ص ٧٩ · اختبار-٩
reference: الكتاب، ص ٧٩، اختبار-٩
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٥</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما المصفوفة التي تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` النظير الضربي للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [ ] option-1 | و
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mn dir="ltr">٦</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٦</mn></mtd><mtd><mn dir="ltr">١٠</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mn dir="ltr">٠</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٠</mn></mtd><mtd><mn dir="ltr">١٠</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٥</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المحدد غير صفري، لذلك يوجد النظير الضربي. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل عنصري القطر ونغيّر إشارتي العنصرين الآخرين، ثم نقسم على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نجمع المدخلات المتناظرة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`




إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الناتج</mtext><mo>=</mo><mrow><mn dir="ltr">٧</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></mrow></math>\`؛ جميع المدخلات القطرية بهذا العدد، والباقي صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-book-p081-test-13-c
title: الكتاب، ص ٧٩ · اختبار-١٣-ج
question: النظير الضربي للمصفوفة المربعة
reference: الكتاب، ص ٧٩، اختبار-١٣-ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`. فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.
نظير مضاعف غير صفري يساوي نظير المصفوفة مضروبًا في مقلوب المعامل؛ هنا نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المحدد غير صفري، لذلك يوجد النظير الضربي. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل عنصري القطر ونغيّر إشارتي العنصرين الآخرين، ثم نقسم على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p033-r3
title: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٣ · البند-٣
question: النظير الضربي للمصفوفة المربعة
reference: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٣، البند-٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mn dir="ltr">٢</mn></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd><mtd><mn dir="ltr">٢</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نحسب المصفوفة داخل القوس أولًا.

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`



نحسب المحدد ونكوّن النظير بتبديل القطر وتغيير إشارات المدخلتين الأخريين.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo>|</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>|</mo><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mtd><mtd><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p033-r4
title: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٣ · البند-٤
question: النظير الضربي للمصفوفة المربعة
reference: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٣، البند-٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">١</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٥</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري. نظير النظير يعيد المصفوفة الأصلية.
محدد الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ومحدد الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`؛ إذن نعكس كلتيهما.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mspace width="2em"/><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ق</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نستعيد الفرق والمجموع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نجمع المعادلتين لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\`، ونطرح الأولى من الثانية لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بقاعدة صف في عمود، محافظين على الترتيب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">١</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٠</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>+</mo><mn dir="ltr">٠</mn><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p033-r5
title: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٣ · البند-٥
question: النظير الضربي للمصفوفة المربعة
reference: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٣، البند-٥ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` مصفوفتين حقيقيتين من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` وتحققان:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo fence="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



فأوجد \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`.
solution:
 إذا كان معكوس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">م</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`



نحسب المحدد أولاً للتأكد من وجود المعكوس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">م</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



معكوس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` ينتج بقلب مدخلتي القطر الرئيسي وتغيير إشارة المدخلتين الأخريين، ثم القسمة على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">م</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ضرب المصفوفات لا يتبادل عموماً، لذلك نحتفظ بالحدين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow></math>\` عند توسيع المربع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi><mo>+</mo><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`



نربع المصفوفة باستعمال ضرب الصفوف في الأعمدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٨</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نجمع حاصلَي الضرب المعطيين ثم نطرح المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٨</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>−</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u3-p033-r6
title: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٣ · البند-٦
question: سؤال من المصدر
reference: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٣ · البند-٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٦</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٥</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` مصفوفة مربعة ثانية، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><msqrt><mn dir="ltr">٦</mn></msqrt><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ج</mi><mo stretchy="true" fence="true">|</mo></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري.

المطلوب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`، والمعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></msqrt></mrow></math>\`.

نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بقاعدة القطرين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn mathvariant="normal">٣</mn><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


محدد حاصل الضرب يساوي حاصل ضرب المحددين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


نأخذ محدد طرفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></msqrt></mrow></math>\`. رتبة الطرفين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\`، لذلك معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٦</mn></msqrt></math>\` يتربع داخل المحدد، ومحدد النظير مقلوب المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo>=</mo><mo stretchy="false">(</mo><msqrt><mn dir="ltr">٦</mn></msqrt><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ج</mi></mrow></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo>=</mo><mfrac><mn dir="ltr">٦</mn><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ج</mi></mrow></mfrac></mrow></math>
\`\`\`


محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` غير صفر لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` موجود؛ نضرب فيه ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::mcq
id: math-kamel-u3-p024-r1
title: الكامل، الوحدة الثالثة · ص ٢٣ · البند ١
kicker: الكامل، الوحدة الثالثة · ص ٢٣ · البند ١
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٤.زهـبن · الصورة ٢٤ من ٤٧ · الصفحة المطبوعة ٢٣ · البند ١ · ٢٠١٩
question: ما قيمة / قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` الموجبة التي تجعل المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\` منفردة؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
explanation:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

المصفوفة المنفردة محددها صفر؛ نوجد المحدد من المدخلات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نفكك ثم نختار الجذر الموجب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p024-r2
title: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٢
kicker: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٤.زهـبن · الصورة ٢٤ من ٤٧ · الصفحة المطبوعة ٢٣ · البند ٢ · ٢٠١٩ دور ثانٍ
question: ما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi></mrow></math>\` الموجبة التي تجعل المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\` منفردة؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

المصفوفة المنفردة محددها صفر؛ نوجد المحدد من المدخلات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نفكك ثم نختار الجذر الموجب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` موجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ك</mi><mo>&gt;</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p024-r3
title: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٣
kicker: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٤.زهـبن · الصورة ٢٤ من ٤٧ · الصفحة المطبوعة ٢٣ · البند ٣ · ٢٠١٩ دور ثانٍ
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فماذا يساوي المقدار \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
explanation:
نظير حاصل ضرب يعكس الترتيب؛ في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تتجاور \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` فتعطيان الوحدة ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><msup><mo stretchy="false">)</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`










نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p024-r4
title: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٤
kicker: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٤.زهـبن · الصورة ٢٤ من ٤٧ · الصفحة المطبوعة ٢٣ · البند ٤ · ٢٠٢٠
question: ما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي تجعل من المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\` مصفوفة منفردة، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٧</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٧</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٥</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`
explanation:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

المصفوفة منفردة عندما يكون محددها صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mtext dir="rtl">جا</mtext><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

في الفترة المعطاة الزاوية الوحيدة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٦</mn></mfrac></math>\`؛ فالحل الآخر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١١</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٦</mn></mfrac></math>\` خارجها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo>[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo>]</mo><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٧</mn><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p024-r5
title: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٥
kicker: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٤.زهـبن · الصورة ٢٤ من ٤٧ · الصفحة المطبوعة ٢٣ · البند ٥ · ٢٠٢٠
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ج</mi></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري.

نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في نظيرها؛ الناتج يجب أن يكون الوحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn><mrow><mo>−</mo><mi mathvariant="normal">ج</mi></mrow></mrow></mtd><mtd><mrow><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></mrow></math>
\`\`\`

تتساوى مصفوفتان عندما تتساوى رتبتهما وكل مدخلتين تقعان في الصف والعمود نفسيهما؛ لذلك يجب تحقيق المعادلات الناتجة جميعًا.

نساوي المدخلات المتناظرة؛ الشرطان يعطيان القيمة نفسها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p024-r7
title: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٧
kicker: الكامل، الوحدة الثالثة · ص ٢٣ · البند ٧
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٤.زهـبن · الصورة ٢٤ من ٤٧ · الصفحة المطبوعة ٢٣ · البند ٧ · ٢٠٢٠
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` مصفوفة من الرتبة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.

مضاعفة مصفوفة من ثلاثة صفوف تضرب محددها في مكعب المعامل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></mrow></mrow></math>
\`\`\`

محدد النظير هو مقلوب المحدد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>|</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>|</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></mrow></mfrac><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p025-r1
title: الكامل، الوحدة الثالثة · ص ٢٤ · البند ١
kicker: الكامل، الوحدة الثالثة · ص ٢٤ · البند ١
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٥.زهـبن · الصورة ٢٥ من ٤٧ · الصفحة المطبوعة ٢٤ · البند ١ · ٢٠٢٠
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\` ثلاث مصفوفات غير منفردة وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>×</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، فأي المصفوفات التالية تمثل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>×</mo><mi mathvariant="normal">أ</mi></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>×</mo><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>×</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>×</mo><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري.

نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\` من اليسار بنظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`؛ ترتيب الضرب مهم.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`

نضرب الطرفين من اليمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ فتُستبدل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` بمصفوفة الوحدة، ويبقى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">أ</mi></mrow></math>\` في الطرف الأيسر:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p025-r2
title: الكامل، الوحدة الثالثة · ص ٢٤ · البند ٢
kicker: الكامل، الوحدة الثالثة · ص ٢٤ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٥.زهـبن · الصورة ٢٥ من ٤٧ · الصفحة المطبوعة ٢٤ · البند ٢ · ٢٠٢٠ دور ثانٍ
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\` مصفوفتان غير منفردتان من الرتبة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>×</mo><mi mathvariant="normal">ن</mi></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٢</mn></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.

نستخدم قواعد محدد المضاعف والضرب والنظير.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">١٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`

نضرب في أربعة، ثم نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\` قوة للعدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></msup><mo>=</mo><mn dir="ltr">٣٢</mn><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٥</mn></msup><mo>⇒</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p025-r3
title: الكامل، الوحدة الثالثة · ص ٢٤ · البند ٣
kicker: الكامل، الوحدة الثالثة · ص ٢٤ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٥.زهـبن · الصورة ٢٥ من ٤٧ · الصفحة المطبوعة ٢٤ · البند ٣ · ٢٠٢٠ دور ثانٍ
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما هي قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري.

نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في نظيرها؛ مدخلة أسفل اليمين يجب أن تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mfrac><mrow><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نعوّض للتحقق من المدخلات الأربع.


نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٦</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٦</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p025-r4
title: الكامل، الوحدة الثالثة · ص ٢٤ · البند ٤
kicker: الكامل، الوحدة الثالثة · ص ٢٤ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٥.زهـبن · الصورة ٢٥ من ٤٧ · الصفحة المطبوعة ٢٤ · البند ٤ · ٢٠٢١
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما المصفوفة التي تساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">و</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٨</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المحدد غير صفري، لذلك يوجد النظير الضربي. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل عنصري القطر ونغيّر إشارتي العنصرين الآخرين، ثم نقسم على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نجمع المدخلات المتناظرة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٧</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`




إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الناتج</mtext><mo>=</mo><mrow><mn dir="ltr">٦</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></mrow></math>\`؛ جميع المدخلات القطرية بهذا العدد، والباقي صفر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p025-r5
title: الكامل، الوحدة الثالثة · ص ٢٤ · البند ٥
kicker: الكامل، الوحدة الثالثة · ص ٢٤ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٥.زهـبن · الصورة ٢٥ من ٤٧ · الصفحة المطبوعة ٢٤ · البند ٥ · ٢٠٢١
question: ما العبارة الصحيحة من العبارات الآتية حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\` مصفوفات؟
- [ ] option-1 | إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\` فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` فقط
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`
- [ ] option-3 | إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>⋅</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mo>⋅</mo><mi mathvariant="normal">ج</mi></mrow></math>\` فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\` مصفوفة الوحدة
explanation:
**الإجابة: الخيار الرابع.**

مصفوفة الوحدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></math>\` لها آحاد على القطر وأصفار خارجه، ولا تغير المصفوفة عند الضرب؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></math>\`.

الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يعني ضرب المصفوفة في نفسها. نضرب المعاملين العدديين:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


إذن الناتج هو:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


**المصدر:** الصفحات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥٧</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٤</mn></math>\` من الكتاب.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p026-r1
title: الكامل، الوحدة الثالثة · ص ٢٥ · البند ١
kicker: الكامل، الوحدة الثالثة · ص ٢٥ · البند ١
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٦.زهـبن · الصورة ٢٦ من ٤٧ · الصفحة المطبوعة ٢٥ · البند ١ · ٢٠٢١
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` مصفوفة غير منفردة من الرتبة الثانية بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><msub><mi mathvariant="normal">و</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`، فما المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` من الآتية؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري.

نضرب المعادلة من اليسار بنظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` الموجود، فيختصر عامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>=</mo><mi mathvariant="normal">و</mi></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mi mathvariant="normal">و</mi></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

ننقل مصفوفة الوحدة المضاعفة إلى الطرف الآخر.


المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p026-r2
title: الكامل، الوحدة الثالثة · ص ٢٥ · البند ٢
kicker: الكامل، الوحدة الثالثة · ص ٢٥ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٦.زهـبن · الصورة ٢٦ من ٤٧ · الصفحة المطبوعة ٢٥ · البند ٢ · ٢٠٢١ دور ثانٍ
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` مصفوفة مربعة منفردة، فما هي المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` من الآتية؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
explanation:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نختبر الانفراد بالمحدد؛ المصفوفة المعروضة لها عمود صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٠</mn><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mtext dir="rtl">منفردة</mtext></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p026-r4
title: الكامل، الوحدة الثالثة · ص ٢٥ · البند ٤
kicker: الكامل، الوحدة الثالثة · ص ٢٥ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٦.زهـبن · الصورة ٢٦ من ٤٧ · الصفحة المطبوعة ٢٥ · البند ٤ · ٢٠٢٢
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\` مصفوفتين مربعتين غير منفردتين من الرتبة الثانية، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`، فما هي المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري.

نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` من اليمين ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؛ يتكون حاصل ضرب النظير والمصفوفة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`

نقسم المعامل العددي على اثنين.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`


إذن الجواب هو الخيار الرابع. ملاحظة على المصدر: وُضحت الرتبة الثانية في صياغة السؤال لأن جميع خيارات المصدر تستعمل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></math>\`، مع أن نصه لا يذكر الرتبة صراحة.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p026-r5
title: الكامل، الوحدة الثالثة · ص ٢٥ · البند ٥
kicker: الكامل، الوحدة الثالثة · ص ٢٥ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٦.زهـبن · الصورة ٢٦ من ٤٧ · الصفحة المطبوعة ٢٥ · البند ٥ · ٢٠٢٣ دور أول
question: ما مجموعة قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي تجعل المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\` منفردة؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mn dir="ltr">٠</mn></mrow><mo>،</mo><mrow><mn dir="ltr">٤</mn></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mn dir="ltr">٠</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mn dir="ltr">٤</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mn dir="ltr">٠</mn></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
explanation:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نوسع المحدد على الصف الثالث لأن فيه صفرين. نحذف صف المدخلة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وعمودها الثالث، وإشارتها موجبة لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` زوجي؛ فيبقى المحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` للصفين والعمودين الأولين:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` عاملًا مشتركًا؛ أحد العاملين يساوي صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mtext dir="rtl">أو</mtext><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p026-r6
title: الكامل، الوحدة الثالثة · ص ٢٥ · البند ٦
kicker: الكامل، الوحدة الثالثة · ص ٢٥ · البند ٦
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٦.زهـبن · الصورة ٢٦ من ٤٧ · الصفحة المطبوعة ٢٥ · البند ٦ · ٢٠٢٤ دور أول
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` مصفوفة مربعة من الرتبة الثالثة وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٢٧</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٢٧</mn></mrow></mfrac></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.

نستخدم مكعب المعامل لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` من ثلاثة صفوف، ثم نأخذ المقلوب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">ب</mi><mo>|</mo><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢٧</mn></mrow><mn dir="ltr">٤</mn></mfrac></mrow></mrow></math>
\`\`\`

المحدد غير صفري، فيوجد النظير ومحددُه مقلوب هذه القيمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>|</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>|</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mn dir="ltr">٢٧</mn></mfrac></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p027-r1
title: الكامل، الوحدة الثالثة · ص ٢٦ · البند ١
kicker: الكامل، الوحدة الثالثة · ص ٢٦ · البند ١
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٧.زهـبن · الصورة ٢٧ من ٤٧ · الصفحة المطبوعة ٢٦ · البند ١ · ٢٠٢٤ دور أول
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` مصفوفة مربعة غير منفردة وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">و</mi></mrow></math>\`، فما المصفوفة التي تساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">م</mi></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">م</mi></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري.

نضرب المعادلة في نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؛ فتختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` والوحدة إلى النظير.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mo>−</mo><mi mathvariant="normal">م</mi></mrow><mo>=</mo><mi mathvariant="normal">و</mi></mrow></math>
\`\`\`

نعزل النظير بنقل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">م</mi><mrow><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p027-r2
title: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٢
kicker: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٧.زهـبن · الصورة ٢٧ من ٤٧ · الصفحة المطبوعة ٢٦ · البند ٢ · ٢٠٢٤ دور ثانٍ
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` مصفوفة مربعة من الرتبة الثانية وغير منفردة، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٦</mn><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.

نسمي محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">د</mi></mrow></math>\`؛ نستخدم قواعد المضاعف والقوة والنظير.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٧٢</mn><mi mathvariant="normal">د</mi></mfrac></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` غير صفري؛ نضرب فيه ثم نأخذ الجذر التكعيبي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٨</mn><mo>⇒</mo><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p027-r3
title: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٣
kicker: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٧.زهـبن · الصورة ٢٧ من ٤٧ · الصفحة المطبوعة ٢٦ · البند ٣ · تجريبي ٢٠١٩
question: إذا علمت أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` مصفوفة من الرتبة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.

المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></mrow></math>\`، ومحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\`.
المطلوب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`.

محدد مضاعف مصفوفة ثنائية يضرب في مربع المعامل؛ ومحدد النظير مقلوب المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`


نعوض محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`


نضرب في محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` غير الصفري، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


محدد حاصل الضرب يساوي حاصل ضرب المحددات، ومحدد القوة يساوي قوة المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ص</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p027-r4
title: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٤
kicker: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٧.زهـبن · الصورة ٢٧ من ٤٧ · الصفحة المطبوعة ٢٦ · البند ٤ · تجريبي غرب غزة ٢٠١٩
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>⋅</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mo>⋅</mo><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فما العبارة الآتية صحيحة بحيث أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\` مصفوفتين مربعتين؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">ص</mi></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi></mrow></math>\` مصفوفة منفردة
explanation:
**الإجابة: الخيار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`**.


تأكيد الكتاب: بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`؛ وهذه هي العلاقة المطلوبة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></math>
\`\`\`


**المصدر:** صفحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧٠</mn></math>\` من الكتاب.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p027-r5
title: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٥
kicker: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٧.زهـبن · الصورة ٢٧ من ٤٧ · الصفحة المطبوعة ٢٦ · البند ٥ · تجريبي القدس الشريف ٢٠١٩
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mtd><mtd><mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mtd><mtd><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>،</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true">[</mo></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.





نحسب المحدد، ونستخدم صيغة جيب تمام ضعف الزاوية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mo>−</mo><mtext dir="rtl">جتا</mtext><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

محدد النظير مقلوب المحدد؛ و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هي مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>|</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac><mo>=</mo><mo>−</mo><mtext dir="rtl">قا</mtext><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo>&lt;</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>&lt;</mo><mi mathvariant="normal">π</mi></mrow></math>\`؛ وفي هذه الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` لا تساوي صفرًا، فيوجد النظير الضربي.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p027-r6
title: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٦
kicker: الكامل، الوحدة الثالثة · ص ٢٦ · البند ٦
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٧.زهـبن · الصورة ٢٧ من ٤٧ · الصفحة المطبوعة ٢٦ · البند ٦ · تجريبي غرب غزة ٢٠١٩
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\` مصفوفتان ثنائيتان غير منفردتان، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>×</mo><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>×</mo><mi mathvariant="normal">س</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري.



لإيجاد نظير حاصل ضرب نأخذ نظيري العاملين بترتيب معكوس؛ لأن هذا الترتيب يجعل العوامل المتجاورة تُنتج مصفوفة الوحدة عند التحقق.

نظير حاصل الضرب يعكس ترتيب العوامل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

حاصل ضرب النظير بمصفوفته هو الوحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">م</mi><mo>=</mo><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p028-r1
title: الكامل، الوحدة الثالثة · ص ٢٧ · البند ١
kicker: الكامل، الوحدة الثالثة · ص ٢٧ · البند ١
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٨.زهـبن · الصورة ٢٨ من ٤٧ · الصفحة المطبوعة ٢٧ · البند ١ · تجريبي الخليل ٢٠١٩
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>⋅</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` هي
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
explanation:
نظير حاصل الضرب يعكس الترتيب، ونظير النظير يعيد المصفوفة؛ لذلك المعطى يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">أ</mi></mrow></math>\`. نضرب من اليسار ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">ك</mi><mo>⇒</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ك</mi><mo>⇒</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mi mathvariant="normal">ك</mi></mrow></math>
\`\`\`


نضاعف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ثم نضرب الصفوف في الأعمدة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p028-r2
title: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٢
kicker: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٨.زهـبن · الصورة ٢٨ من ٤٧ · الصفحة المطبوعة ٢٧ · البند ٢ · تجريبي نابلس ٢٠١٩
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٩</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mrow></msub><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:
لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نظير ثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` يساوي ثلاثة أمثال نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٩</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نحسب نظير المصفوفة المعطاة لاستعادة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`. محددها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، ولذلك نقسم المصفوفة المرافقة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`:


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><msub><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p028-r3
title: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٣
kicker: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٨.زهـبن · الصورة ٢٨ من ٤٧ · الصفحة المطبوعة ٢٧ · البند ٣ · تجريبي قلقيلية ٢٠١٩
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` مصفوفة مربعة من الرتبة الثانية وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، فإن قيمة / قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi></mrow></math>\` هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>±</mo><msqrt><mrow><mn dir="ltr">٨</mn></mrow></msqrt></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.

محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مقلوب محدد نظيرها، ثم نستخدم مربع المعامل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

للمربع جذران؛ نطرح واحدًا في الحالتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mo>±</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أو</mtext><mi mathvariant="normal">ك</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p028-r4
title: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٤
kicker: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٨.زهـبن · الصورة ٢٨ من ٤٧ · الصفحة المطبوعة ٢٧ · البند ٤ · تجريبي نابلس ٢٠١٩
question: قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي تجعل المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mn dir="ltr">١٠</mn></mrow></msub><mrow><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msup></mrow></msqrt></mrow></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\` منفردة هي
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">١٠</mn><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">١٠</mn><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">١٠</mn><mrow><mn dir="ltr">٦</mn></mrow></msup></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">١٠</mn><mrow><mn dir="ltr">٨</mn></mrow></msup></mrow></math>\`
explanation:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

المحدد الصفري يعطي قيمة اللوغاريتم؛ مجاله يتطلب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mn dir="ltr">١٠</mn></mrow></msub><mo stretchy="true">(</mo><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup></mrow></msqrt><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

تعريف اللوغاريتم يحول المعادلة إلى قوة للعدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup></mrow></msqrt><mo>=</mo><msup><mn dir="ltr">١٠</mn><mrow><mn dir="ltr">٢٠</mn></mrow></msup></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>=</mo><msup><mn dir="ltr">١٠</mn><mrow><mn dir="ltr">٤٠</mn></mrow></msup></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نأخذ الجذر الخامس الموجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mn dir="ltr">١٠</mn><mn dir="ltr">٨</mn></msup></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p028-r5
title: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٥
kicker: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٨.زهـبن · الصورة ٢٨ من ٤٧ · الصفحة المطبوعة ٢٧ · البند ٥ · تجريبي القدس ٢٠١٩
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ك</mi></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
explanation:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. مصفوفة الوحدة فيها آحاد على القطر وأصفار خارجه. نحسب مدخلة الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` والعمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ لأنها خارج القطر يجب أن تساوي صفرًا.
نضرب صف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` الأول في عمود النظير الثالث.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


نتحقق من بقية المدخلات باستخدام القيمة نفسها.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١١</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١١</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٨</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢٢</mn><mo>+</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٣</mn></msub></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p028-r6
title: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٦
kicker: الكامل، الوحدة الثالثة · ص ٢٧ · البند ٦
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٨.زهـبن · الصورة ٢٨ من ٤٧ · الصفحة المطبوعة ٢٧ · البند ٦ · تجريبي أريحا ٢٠٢٠
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

محدد النظير مقلوب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`

نساوي المقامين غير الصفريين ونعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p029-r1
title: الكامل، الوحدة الثالثة · ص ٢٨ · البند ١
kicker: الكامل، الوحدة الثالثة · ص ٢٨ · البند ١
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٩.زهـبن · الصورة ٢٩ من ٤٧ · الصفحة المطبوعة ٢٨ · البند ١ · تجريبي شمال غزة ٢٠٢١
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` مصفوفة من الرتبة الثانية وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></mrow></msub><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mrow><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></mrow></msub></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\`
explanation:
لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

في نظير المصفوفة الثنائية، المدخلة أسفل اليسار تغير إشارتها وتُقسم على المحدد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mfrac><mrow><mo>−</mo><msub><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn><mn dir="ltr">١</mn></mrow></msub></mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p029-r2
title: الكامل، الوحدة الثالثة · ص ٢٨ · البند ٢
kicker: الكامل، الوحدة الثالثة · ص ٢٨ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٩.زهـبن · الصورة ٢٩ من ٤٧ · الصفحة المطبوعة ٢٨ · البند ٢ · تجريبي سلفيت ٢٠٢١
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، فإن إحدى قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` الممكنة
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

نسمي محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">د</mi></mrow></math>\`. نضرب مساواته بمقلوبه في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` غير الصفري، فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">د</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؛ ولذا توجد قيمتان:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">د</mi></mfrac><mo>⇒</mo><mi mathvariant="normal">د</mi><mo>=</mo><mo>±</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نحسب المحدد ثم نحل الحالتين؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` إحدى القيمتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mo>±</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أو</mtext><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p029-r6
title: الكامل، الوحدة الثالثة · ص ٢٨ · البند ٦
kicker: الكامل، الوحدة الثالثة · ص ٢٨ · البند ٦
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٢٩.زهـبن · الصورة ٢٩ من ٤٧ · الصفحة المطبوعة ٢٨ · البند ٦ · تجريبي قباطية ٢٠٢٤
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مصفوفتين مربعتين وغير منفردتين، ما العبارة الصحيحة دائمًا فيما يلي؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>+</mo><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>⋅</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mi mathvariant="normal">ب</mi><mo>⋅</mo><mi mathvariant="normal">أ</mi></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ب</mi><mo>⋅</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mfrac><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow></mrow><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></mfrac></mrow></math>\`
explanation:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.

نستخدم محدد حاصل الضرب، ثم مقلوب المحدد للنظير.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>|</mo><mo>=</mo><mo>|</mo><mi mathvariant="normal">ب</mi><mo>|</mo><mo>|</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>|</mo><mo>=</mo><mfrac><mrow><mo>|</mo><mi mathvariant="normal">ب</mi><mo>|</mo></mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo></mrow></mfrac></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p030-r2
title: الكامل، الوحدة الثالثة · ص ٢٩ · البند ٢
kicker: الكامل، الوحدة الثالثة · ص ٢٩ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٠.زهـبن · الصورة ٣٠ من ٤٧ · الصفحة المطبوعة ٢٩ · البند ٢ · خارجي
question: قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي تجعل المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\` منفردة هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mn dir="ltr">٥</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mn dir="ltr">١٠</mn></mrow><mo>،</mo><mrow><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mn dir="ltr">١٠</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
explanation:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

المصفوفة المنفردة محددها صفر؛ نوجد المحدد من المدخلات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

نفكك المقدار؛ كل عامل يعطي جذرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mtext dir="rtl">أو</mtext><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p030-r3
title: الكامل، الوحدة الثالثة · ص ٢٩ · البند ٣
kicker: الكامل، الوحدة الثالثة · ص ٢٩ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٠.زهـبن · الصورة ٣٠ من ٤٧ · الصفحة المطبوعة ٢٩ · البند ٣ · خارجي
question: المصفوفة التي لها نظير ضربي من بين المصفوفات الآتية هي:
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
explanation:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

وجود النظير يحتاج محددًا غير صفري؛ نحسب محدد المصفوفة المعروضة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="true">(</mo><mn dir="ltr">٧</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٣</mn><mo>≠</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p030-r4
title: الكامل، الوحدة الثالثة · ص ٢٩ · البند ٤
kicker: الكامل، الوحدة الثالثة · ص ٢٩ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٠.زهـبن · الصورة ٣٠ من ٤٧ · الصفحة المطبوعة ٢٩ · البند ٤ · خارجي
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` مصفوفة ثنائية، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\` هو النظير للمصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`
explanation:
**الإجابة: الخيار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`**.
تأكيد الكتاب: ويكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">أ</mi></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`؛ وهذه هي العلاقة المطلوبة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


**المصدر:** صفحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧٠</mn></math>\` من الكتاب.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p030-r5
title: الكامل، الوحدة الثالثة · ص ٢٩ · البند ٥
kicker: الكامل، الوحدة الثالثة · ص ٢٩ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٠.زهـبن · الصورة ٣٠ من ٤٧ · الصفحة المطبوعة ٢٩ · البند ٥ · خارجي
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مصفوفتان مربعتان غير منفردتان، فإن إحدى العبارات الآتية صحيحة:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>+</mo><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>×</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mi mathvariant="normal">ب</mi><mo>×</mo><mi mathvariant="normal">أ</mi></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`
explanation:
**الإجابة: الخيار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`**.
تأكيد الكتاب: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` مصفوفتين مربعتين من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فإن؛ وهذه هي العلاقة المطلوبة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi><mo>×</mo><mi mathvariant="normal">∣</mi><mi mathvariant="normal">ب</mi><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`


**المصدر:** صفحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٨</mn></math>\` من الكتاب.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::exam-question
id: math-kamel-u3-p031-r1-1
title: الكامل، الوحدة الثالثة · ص ٣٠ · البند ١-١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣١.زهـبن · الصورة ٣١ من ٤٧ · الصفحة المطبوعة ٣٠ · البند ١-١ · ٢٠١٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٩</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>⋅</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٢٤</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.
نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`، ثم نضربه في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` بقاعدة صف في عمود ونطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٤</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المحدد غير صفري، لذلك يوجد النظير الضربي. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل عنصري القطر ونغيّر إشارتي العنصرين الآخرين، ثم نقسم على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٩</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٩</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣٧</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`



المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢٤</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢٤</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢٤</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢٤</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣٧</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٥</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢٣</mn><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣٧</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p031-r1-2
title: الكامل، الوحدة الثالثة · ص ٣٠ · البند ١-٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣١.زهـبن · الصورة ٣١ من ٤٧ · الصفحة المطبوعة ٣٠ · البند ١-٢ · ٢٠١٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٩</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`.
solution:
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين. إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف. محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.
نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` مباشرة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٧</mn><mo>+</mo><mn dir="ltr">٢٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هو مربع محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؛ ومعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\` يتربع لأن الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p031-r2-1
title: الكامل، الوحدة الثالثة · ص ٣٠ · البند ٢-١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣١.زهـبن · الصورة ٣١ من ٤٧ · الصفحة المطبوعة ٣٠ · البند ٢-١ · ٢٠١٩ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ع</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٥٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mtd><mtd><mrow><msqrt><mrow><mi mathvariant="normal">ع</mi></mrow></msqrt></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>⋅</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد قيمة كل من \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo>،</mo><mi mathvariant="normal">ع</mi></mrow></math>\`.
solution:


المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` من تساوي المصفوفتين.
نحسب حاصل الضرب أولًا، بضرب كل صف في كل عمود، ثم نضاعف المدخلات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


تساوي المصفوفتين يفرض تساوي كل مدخلتين متناظرتين.

من المدخلة السفلى اليمنى:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mi mathvariant="normal">ع</mi></msqrt><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


نربع الطرفين؛ الجذر الرئيس غير سالب، فالقيمة الناتجة تحقق المعادلة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


من المدخلة السفلى اليسرى:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`


من المدخلة العليا اليسرى، وبعد تعويض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`


**الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`**.
:::


:::exam-question
id: math-kamel-u3-p031-r2-2
title: الكامل، الوحدة الثالثة · ص ٣٠ · البند ٢-٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣١.زهـبن · الصورة ٣١ من ٤٧ · الصفحة المطبوعة ٣٠ · البند ٢-٢ · ٢٠١٩ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ع</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٥٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mtd><mtd><mrow><msqrt><mrow><mi mathvariant="normal">ع</mi></mrow></msqrt></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>⋅</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">ج</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`، ثم نستعمل أن نظير نصف المصفوفة ضعف نظيرها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo>|</mo><mi mathvariant="normal">ج</mi><mo>|</mo><mo>=</mo><mn dir="ltr">٤٨٠</mn><mo>−</mo><mn dir="ltr">٥٧٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٩٦</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نكوّن النظير بتبديل مدخلتي القطر وتغيير الإشارتين الأخريين.


المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤٨</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤٨</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤٨</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤٨</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤٨</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٣٠</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٨</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤٨</mn></mfrac><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١٦</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٤٨</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٣٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></mtd><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٨</mn></mfrac></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p031-r3
title: الكامل، الوحدة الثالثة · ص ٣٠ · البند ٣
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣١.زهـبن · الصورة ٣١ من ٤٧ · الصفحة المطبوعة ٣٠ · البند ٣ · ٢٠٢٠
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٩</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` بحيث أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>⋅</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">ج</mi></mrow></math>\`.
solution:
نجمع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` في الطرفين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ج</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`. الوحدة ضرورية لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ر</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٥</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٥</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٥</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p031-r4
title: الكامل، الوحدة الثالثة · ص ٣٠ · البند ٤
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣١.زهـبن · الصورة ٣١ من ٤٧ · الصفحة المطبوعة ٣٠ · البند ٤ · ٢٠٢٠
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل المعادلة المصفوفية التالية \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>×</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>×</mo><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`.
solution:
نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` عاملًا من اليمين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo></mrow></math>\` عمود الثوابت. نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مدخلة مدخلة.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ر</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p031-r5
title: الكامل، الوحدة الثالثة · ص ٣٠ · البند ٥
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣١.زهـبن · الصورة ٣١ من ٤٧ · الصفحة المطبوعة ٣٠ · البند ٥ · ٢٠٢١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل المعادلة المصفوفية \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، لذلك بعد إخراج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من اليمين يصبح معاملها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\`المصفوفة المعطاة.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ر</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p032-r1
title: الكامل، الوحدة الثالثة · ص ٣١ · البند ١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٢.زهـبن · الصورة ٣٢ من ٤٧ · الصفحة المطبوعة ٣١ · البند ١ · ٢٠٢٠ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>⋅</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\`.
solution:
لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري. نظير حاصل الضرب يعكس الترتيب؛ في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` تتجاور \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ونظيرها ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ونظيرها.
نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ونظيرها.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mspace width="2em"/><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` بهذا الترتيب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><msup><mo stretchy="false">)</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` مدخلة مدخلة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><msup><mo stretchy="false">)</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٨</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٦</mn><mo>+</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p032-r2
title: الكامل، الوحدة الثالثة · ص ٣١ · البند ٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٢.زهـبن · الصورة ٣٢ من ٤٧ · الصفحة المطبوعة ٣١ · البند ٢ · ٢٠٢١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فجد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\`.
solution:
نظير حاصل الضرب يعكس الترتيب، ونظير النظير يعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`. إذن المعطى يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">أ</mi></mrow></math>\`، فنضرب من اليسار ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
نسمّي المصفوفة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`، ونعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">ك</mi><mo>⇒</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mi mathvariant="normal">ك</mi></mrow></math>
\`\`\`


نضاعف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ثم نضرب الصفوف في الأعمدة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p032-r3
title: الكامل، الوحدة الثالثة · ص ٣١ · البند ٣
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٢.زهـبن · الصورة ٣٢ من ٤٧ · الصفحة المطبوعة ٣١ · البند ٣ · ٢٠٢١ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">أ</mi><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">ج</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`، فجد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نأخذ نظير الطرفين؛ نظير نصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` يساوي ضعفي نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

محدد المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` هو حاصل ضرب عنصري القطر الرئيس ناقص حاصل ضرب العنصرين الآخرين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١٠</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



المحدد غير صفري، لذلك يوجد النظير الضربي. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل عنصري القطر ونغيّر إشارتي العنصرين الآخرين، ثم نقسم على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mi mathvariant="normal">ج</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`





نحسب نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ثم ننقل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.


نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p032-r4
title: الكامل، الوحدة الثالثة · ص ٣١ · البند ٤
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٢.زهـبن · الصورة ٣٢ من ٤٧ · الصفحة المطبوعة ٣١ · البند ٤ · ٢٠٢١ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ب</mi></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>=</mo><mi mathvariant="normal">و</mi><mo>+</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`، فجد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` التي تجعل المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` منفردة.
solution:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نطرح المصفوفة من الطرفين؛ و هي المصفوفة الصفرية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn><mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` صفر؛ ومضاعفتها لا تغير كونه صفرًا.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">١٤</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٧</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p032-r5
title: الكامل، الوحدة الثالثة · ص ٣١ · البند ٥
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٢.زهـبن · الصورة ٣٢ من ٤٧ · الصفحة المطبوعة ٣١ · البند ٥ · ٢٠٢١ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` بحيث يكون \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>⋅</mo><mi mathvariant="normal">أ</mi><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نضرب المعادلة من اليمين بنظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، مع المحافظة على الترتيب.

محدد المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` هو حاصل ضرب عنصري القطر الرئيس ناقص حاصل ضرب العنصرين الآخرين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المحدد غير صفري، لذلك يوجد النظير الضربي. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل عنصري القطر ونغيّر إشارتي العنصرين الآخرين، ثم نقسم على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`





نحسب نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ثم نطرح المدخلات.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١٥</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p032-r6
title: الكامل، الوحدة الثالثة · ص ٣١ · البند ٦
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٢.زهـبن · الصورة ٣٢ من ٤٧ · الصفحة المطبوعة ٣١ · البند ٦ · ٢٠٢١ دور ثالث
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نأخذ نظير المصفوفة المعطاة لاستعادة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، ومحددها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نجمع مضاعف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ثم نطرح ثلاثة من القطر.


المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نجمع المدخلات المتناظرة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٣</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١٣</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p032-r7
title: الكامل، الوحدة الثالثة · ص ٣١ · البند ٧
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٢.زهـبن · الصورة ٣٢ من ٤٧ · الصفحة المطبوعة ٣١ · البند ٧ · ٢٠٢١ دور ثالث
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\`؟
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

المدخلة أسفل اليسار في النظير تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` مقسومة على المحدد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١٥</mn></mrow></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>⇒</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٥</mn><mo>=</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

المدخلة أعلى اليمين هي سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` مقسومًا على المحدد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">١</mn></mfrac><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p033-r1
title: الكامل، الوحدة الثالثة · ص ٣٢ · البند ١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٣.زهـبن · الصورة ٣٣ من ٤٧ · الصفحة المطبوعة ٣٢ · البند ١ · ٢٠٢٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فجد المصفوفة غير المنفردة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ج</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`.
solution:
نظير حاصل الضرب يعكس الترتيب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">ج</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\`. نجمع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow><mo>+</mo><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` لنجد معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ر</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٧</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٧</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٧</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


السؤال يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` غير منفردة؛ نتحقق من ذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p033-r2
title: الكامل، الوحدة الثالثة · ص ٣٢ · البند ٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٣.زهـبن · الصورة ٣٣ من ٤٧ · الصفحة المطبوعة ٣٢ · البند ٢ · ٢٠٢٢ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">أ</mi></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ب</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">ج</mi></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">د</mi></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ع</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">س</mi><mo>⋅</mo><mi mathvariant="normal">ص</mi></mrow></math>\`، فجد كل من \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi><mo>،</mo><mi mathvariant="normal">د</mi></mrow></math>\`؟
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></mrow></math>\`.

محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٤</mn></mrow><mo>−</mo><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وهو غير صفري؛ لذلك يوجد نظيرها.
قاعدة نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` تبدل مدخلتي القطر وتغير إشارتي المدخلتين الأخريين، ثم تقسم على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ع</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نضرب صفوف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في أعمدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="normal">أ</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="normal">ب</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="normal">ج</mi></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="normal">د</mi></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نساوي المدخلات المتناظرة؛ العمود الأول يعطي:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` في المدخلة العليا اليمنى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">د</mi><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` في المدخلة السفلى اليمنى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


**الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`**.
:::


:::exam-question
id: math-kamel-u3-p034-r1
title: الكامل، الوحدة الثالثة · ص ٣٣ · البند ١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٤.زهـبن · الصورة ٣٤ من ٤٧ · الصفحة المطبوعة ٣٣ · البند ١ · ٢٠٢٣ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>⋅</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٨</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>=</mo><mi mathvariant="normal">و</mi><mo>−</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مصفوفتين، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نستخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` من المعادلة الثانية.

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ نضرب من اليمين ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.


نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٨</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٩</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٨</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢٩</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p034-r2
title: الكامل، الوحدة الثالثة · ص ٣٣ · البند ٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٤.زهـبن · الصورة ٣٤ من ٤٧ · الصفحة المطبوعة ٣٣ · البند ٢ · ٢٠٢٣ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ك</mi></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mi mathvariant="normal">ك</mi></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة / قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi></mrow></math>\` الممكنة؟
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نظير نصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ضعف نظيرها؛ نستخدم مدخلة أسفل اليسار.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٢</mn><mrow><mn dir="ltr">٤</mn><mo>+</mo><mi mathvariant="normal">ك</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نتحقق من أن المحدد غير صفري، ثم من النظير كله.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p034-r3
title: الكامل، الوحدة الثالثة · ص ٣٣ · البند ٣
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٤.زهـبن · الصورة ٣٤ من ٤٧ · الصفحة المطبوعة ٣٣ · البند ٣ · ٢٠٢٤ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>⋅</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ج</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr></mtable><mo stretchy="true">|</mo></mrow></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\`؟
solution:
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين. لحساب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow></math>\` نختار صفًا أو عمودًا: لكل مدخلة نحذف صفها وعمودها، ثم نضربها في محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` الباقي. الإشارة موجبة إذا كان مجموع رقمي الصف والعمود زوجيًا، وسالبة إذا كان فرديًا؛ لذلك إشارات الصف الأول\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`.

نضرب الصف في العمود؛ محدد المدخلة الواحدة هو قيمتها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٢٧</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣٣</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mo>|</mo><mi mathvariant="normal">ج</mi><mo>|</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣٣</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نوسع المحدد الثلاثي، ثم نساويه بالقيمة المحسوبة.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٢</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p034-r4
title: الكامل، الوحدة الثالثة · ص ٣٣ · البند ٤
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٤.زهـبن · الصورة ٣٤ من ٤٧ · الصفحة المطبوعة ٣٣ · البند ٤ · ٢٠٢٤ دور أول
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\`، علمًا بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>⋅</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`؟
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نأخذ نظير الطرفين، ثم نضرب من اليسار بنظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

محدد المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` هو حاصل ضرب عنصري القطر الرئيس ناقص حاصل ضرب العنصرين الآخرين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المحدد غير صفري، لذلك يوجد النظير الضربي. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل عنصري القطر ونغيّر إشارتي العنصرين الآخرين، ثم نقسم على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نحسب محدد المصفوفة الثانية بالطريقة نفسها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` غير صفري؛ نطبّق قاعدة النظير نفسها، مع القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٠</mn><mo>×</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><msup><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`

نحسب النظيرين ونضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.


نجمع المدخلات المتناظرة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>×</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

:::


:::exam-question
id: math-kamel-u3-p034-r5
title: الكامل، الوحدة الثالثة · ص ٣٣ · البند ٥
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٤.زهـبن · الصورة ٣٤ من ٤٧ · الصفحة المطبوعة ٣٣ · البند ٥ · ٢٠٢٤ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>⋅</mo><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\`؟
solution:
نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من الطرفين، ونكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ فيكون معاملها المصفوفة المعطاة ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></math>\`.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ر</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p034-r6
title: الكامل، الوحدة الثالثة · ص ٣٣ · البند ٦
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٤.زهـبن · الصورة ٣٤ من ٤٧ · الصفحة المطبوعة ٣٣ · البند ٦ · تجريبي يطا ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>×</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mo>×</mo><mi mathvariant="normal">ب</mi></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\`؟
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

ننقل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\`، ثم نضرب من اليمين بنظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` لعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`.

نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`

نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



ثم نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` من الناتج، مدخلةً بمدخلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



محدد المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` هو حاصل ضرب عنصري القطر الرئيس ناقص حاصل ضرب العنصرين الآخرين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المحدد غير صفري، لذلك يوجد النظير الضربي. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل عنصري القطر ونغيّر إشارتي العنصرين الآخرين، ثم نقسم على المحدد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`





نأخذ نظير الناتج لاستعادةج. محدده \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، وهو غير صفري:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`




\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

:::


:::exam-question
id: math-kamel-u3-p034-r7
title: الكامل، الوحدة الثالثة · ص ٣٣ · البند ٧
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٤.زهـبن · الصورة ٣٤ من ٤٧ · الصفحة المطبوعة ٣٣ · البند ٧ · تجريبي قلقيلية ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>⋅</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\`؟
solution:
نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">ب</mi></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\` لأن النظير يعكس ترتيب الضرب. محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٥</mn><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\`. معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ر</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٤</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٧</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٦</mn><mn dir="ltr">٧</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجود كما يفترض النص؛ فمحددها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٧</mn></mfrac></math>\` غير صفري.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mrow><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo></mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٧</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mrow><mo>−</mo><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٦</mn><mn dir="ltr">٧</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٧</mn></mfrac></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p035-r1
title: الكامل، الوحدة الثالثة · ص ٣٤ · البند ١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٥.زهـبن · الصورة ٣٥ من ٤٧ · الصفحة المطبوعة ٣٤ · البند ١ · تجريبي قباطية ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\` مصفوفة منفردة، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ج</mi><mo>−</mo><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`؟
solution:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

انفراد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` يجعل حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نوسع المحدد الثاني ونستخدم حاصل الضرب المحسوب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

مربع المجموع يحوي ضعفي حاصل الضرب؛ نطرحهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٦٤</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٤٤</mn></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p035-r2
title: الكامل، الوحدة الثالثة · ص ٣٤ · البند ٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٥.زهـبن · الصورة ٣٥ من ٤٧ · الصفحة المطبوعة ٣٤ · البند ٢ · تجريبي قباطية ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي تجعل المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` منفردة؟
solution:
المصفوفة المنفردة لا يوجد لها نظير ضربي؛ يحدث ذلك بالضبط عندما يكون محددها صفرًا. المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نجمع المصفوفتين، ثم نساوي المحدد بالصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نجمع الحدود ونفكك.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٧</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mtext dir="rtl">أو</mtext><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p035-r3
title: الكامل، الوحدة الثالثة · ص ٣٤ · البند ٣
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٥.زهـبن · الصورة ٣٥ من ٤٧ · الصفحة المطبوعة ٣٤ · البند ٣ · تجريبي طولكرم ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` إن أمكن علمًا بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>⋅</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٩</mn></mrow></msup></mrow></math>\`؟
solution:
نظير حاصل الضرب يعكس الترتيب، فيصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نضرب من اليسار ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، فينتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">١٠</mn></mrow></msup></mrow></mrow></math>\`.
المصفوفة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` محددها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. نبادل القطر ونغير الإشارتين الأخريين لاستعادة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نثبت نمط القوى: الضرب التالي يضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` إلى المدخلة السفلى اليسرى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ر</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نبدأ بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ويستمر النمط لكل قوة صحيحة موجبة؛ نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">١٠</mn></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p035-r4
title: الكامل، الوحدة الثالثة · ص ٣٤ · البند ٤
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٥.زهـبن · الصورة ٣٥ من ٤٧ · الصفحة المطبوعة ٣٤ · البند ٤ · تجريبي ضواحي القدس ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٨</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></mrow></math>\`. نأخذ نظير المصفوفة المعطاة ثم نضرب من اليسار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`.
نحسب محدد المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` ونظيرها بتبديل القطر وتغيير الإشارتين الأخريين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mspace width="2em"/><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` مع المحافظة على الترتيب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>⇒</mo><mi mathvariant="normal">ب</mi><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>−</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


نضرب الصفوف في الأعمدة ثم نطرح الوحدة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p035-r5
title: الكامل، الوحدة الثالثة · ص ٣٤ · البند ٥
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٥.زهـبن · الصورة ٣٥ من ٤٧ · الصفحة المطبوعة ٣٤ · البند ٥ · تجريبي شمال الخليل ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></math>\`؟
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نأخذ نظير الطرفين، ثم نضرب من اليمين بنظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mi mathvariant="normal">س</mi><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

مربع مصفوفة التبديل المعطاة هو الوحدة فعلًا:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`


المصفوفة المعطاة نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` ومربعها الوحدة؛ نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.


نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

:::


:::exam-question
id: math-kamel-u3-p035-r6
title: الكامل، الوحدة الثالثة · ص ٣٤ · البند ٦
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٥.زهـبن · الصورة ٣٥ من ٤٧ · الصفحة المطبوعة ٣٤ · البند ٦ · تجريبي سلفيت ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mo>⋅</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
نظير النظير يعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`. محدد المصفوفة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، لذا بقاعدة النظير:


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٦</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نضرب من اليمين ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` لعكس ضرب نظيرها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mi mathvariant="normal">أ</mi></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo stretchy="true">(</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>−</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo stretchy="true">)</mo><mi mathvariant="normal">أ</mi></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بأخذ نظير المصفوفة المعطاة، ثم نضرب.


نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>×</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo>×</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>×</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>×</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>×</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mtd><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٦</mn></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p035-r7
title: الكامل، الوحدة الثالثة · ص ٣٤ · البند ٧
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٥.زهـبن · الصورة ٣٥ من ٤٧ · الصفحة المطبوعة ٣٤ · البند ٧ · تجريبي جنوب الخليل ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل المعادلة المصفوفية الآتية: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>×</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>+</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>×</mo><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`.
solution:
نسمي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\`. محددها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ونظيرها:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></math>\`، وهي المصفوفة الأخرى نفسها. عكس ترتيب النظير يجعل الطرف الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">س</mi></mrow></math>\`. الطرف الأيمن حاصل ضرب صف في عمود يساوي\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></math>\`.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
نحسب الطرف الأيمن فعلًا بضرب الصفوف في الأعمدة:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٩</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٦</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نتحقق من شرط وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٦</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٢</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p036-r1
title: الكامل، الوحدة الثالثة · ص ٣٥ · البند ١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٦.زهـبن · الصورة ٣٦ من ٤٧ · الصفحة المطبوعة ٣٥ · البند ١ · تجريبي جنوب الخليل ٢٠٢٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، جد المصفوفتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري. لأن المحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` لا تتغير المدخلات بعد القسمة عليه. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">ن</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">ك</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ل</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">ع</mi></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\` ثم نساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></mrow></math>\` بالمصفوفة المعطاة.
من المدخلتين خارج القطر نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">١</mn><mspace width="2em"/><mo>−</mo><mi mathvariant="normal">ل</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>⇒</mo><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


المدخلتان القطريتان تعطيان نظامًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٧</mn><mspace width="2em"/><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`


نضاعف المعادلة الثانية ثم نطرح الأولى؛ فيختفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٢</mn><mo>−</mo><mn dir="ltr">٧</mn><mo>⇒</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١٥</mn><mo>⇒</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


نعوض في الثانية لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١١</mn><mo>⇒</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نستعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ونطرحها من المجموع المعطى لنجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نتحقق من شرط المحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p036-r2-1
title: الكامل، الوحدة الثالثة · ص ٣٥ · البند ٢-١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٦.زهـبن · الصورة ٣٦ من ٤٧ · الصفحة المطبوعة ٣٥ · البند ٢-١ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مصفوفتين مربعتين من الرتبة الثانية بحيث أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow><mo>+</mo><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>+</mo><mrow><mo stretchy="true">|</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`؟
solution:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف. محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.





المصفوفتان من صفين؛ نحسب المحددين بقواعد المضاعف والضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">١٦</mn><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>|</mo><mi mathvariant="normal">ب</mi><mo>|</mo><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mn dir="ltr">١٦</mn><mo>⇒</mo><mo>|</mo><mi mathvariant="normal">ب</mi><mo>|</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نضرب كل محدد في مربع معامله، ثم نجمع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>|</mo><mo>+</mo><mo>|</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mo>|</mo><mo>+</mo><mo>|</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>|</mo><mo>=</mo><mn dir="ltr">١٦</mn><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="true">(</mo><mn dir="ltr">٨</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٦٦</mn></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p036-r2-2
title: الكامل، الوحدة الثالثة · ص ٣٥ · البند ٢-٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٦.زهـبن · الصورة ٣٦ من ٤٧ · الصفحة المطبوعة ٣٥ · البند ٢-٢ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مصفوفتين مربعتين من الرتبة الثانية بحيث أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`؟
solution:
محدد النظير الضربي هو مقلوب المحدد: لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

محدد حاصل الضرب المعطى غير صفري؛ محدد نظيره مقلوبه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>|</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>|</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mo>|</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi><mo>|</mo></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٦</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p036-r3
title: الكامل، الوحدة الثالثة · ص ٣٥ · البند ٣
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٦.زهـبن · الصورة ٣٦ من ٤٧ · الصفحة المطبوعة ٣٥ · البند ٣ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أحل المعادلة المصفوفية الآتية: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>⋅</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>⋅</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`.
solution:
لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري. نأخذ نظير الطرفين ثم نضرب من اليسار بنصف نظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`؛ لا نبدل ترتيب العوامل.
نحسب حاصل الضرب الأيمن.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير صفري، فنحسب نظيرها.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٨</mn><mspace width="2em"/><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢٨</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ونظيرها\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">ج</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٥٦</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب المدخلات.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٥٦</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">١٤</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٥٦</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٧</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٥٦</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p036-r4
title: الكامل، الوحدة الثالثة · ص ٣٥ · البند ٤
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٦.زهـبن · الصورة ٣٦ من ٤٧ · الصفحة المطبوعة ٣٥ · البند ٤ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي تحقق المعادلة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`.
solution:
نجمع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، والطرف الآخر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`. بحساب الصف في العمود نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\`؛ ومحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mn dir="ltr">١</mn></mrow></math>\` فنظيرها\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></math>\`.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
حساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` المستخدم:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ر</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



:::


:::exam-question
id: math-kamel-u3-p036-r5-1
title: الكامل، الوحدة الثالثة · ص ٣٥ · البند ٥-١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٦.زهـبن · الصورة ٣٦ من ٤٧ · الصفحة المطبوعة ٣٥ · البند ٥-١ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
لجمع مصفوفتين أو طرحهما نطبق العملية على المدخلات في الصف والعمود نفسيهما، والضرب بعدد حقيقي يضرب كل مدخلة.

نضرب مدخلات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، ثم نطرح مدخلات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` المناظرة. مثلًا نحسب المدخل الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٦</mn></mrow><mo>=</mo><mrow><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

نحسب بقية المدخلات بالطريقة نفسها.


المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١٥</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١٨</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p036-r5-2
title: الكامل، الوحدة الثالثة · ص ٣٥ · البند ٥-٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٦.زهـبن · الصورة ٣٦ من ٤٧ · الصفحة المطبوعة ٣٥ · البند ٥-٢ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.





نحسب المحدد؛ وجود نظير ضربي يتطلب ألا يكون صفرًا.

محدد المصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` هو حاصل ضرب عنصري القطر الرئيس ناقص حاصل ضرب العنصرين الآخرين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">ب</mi><mo>|</mo><mo>=</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>≠</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

نبدّل مدخلتي القطر ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.


المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mtd><mtd><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p036-r6
title: الكامل، الوحدة الثالثة · ص ٣٥ · البند ٦
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٦.زهـبن · الصورة ٣٦ من ٤٧ · الصفحة المطبوعة ٣٥ · البند ٦ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل المعادلة المصفوفية \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>×</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>×</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`.
solution:
نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ثم نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من اليمين. المعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></mrow><mo>+</mo><mrow><mn dir="ltr">٣</mn><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></mrow></math>\` يساوي\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo>(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></math>\`.  ننقل حدودها ونجمع معاملها مع المحافظة على ترتيب الضرب.
بعد ترتيب المعادلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ر</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mspace width="2em"/><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير منفردة لأن المحدد لا يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نبدل مدخلتي القطر ونغير إشارتي الأخريين، ثم نقسم على المحدد. نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من اليسار لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣٠</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب كل مدخلة بضرب صف في عمود وجمع المنتجات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣٠</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب القيم ونقسم كل مدخلة على المحدد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٥٩</mn><mn dir="ltr">٣٠</mn></mfrac></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p037-r1
title: الكامل، الوحدة الثالثة · ص ٣٦ · البند ١
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٧.زهـبن · الصورة ٣٧ من ٤٧ · الصفحة المطبوعة ٣٦ · البند ١ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` مصفوفة مربعة من الرتبة الثانية بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>\`، حل المعادلة المصفوفية \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تساوي نظيرها؛ ضرب الطرفين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نطرح ثلاثة أمثال الوحدة، ثم نقسم على اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p037-r2
title: الكامل، الوحدة الثالثة · ص ٣٦ · البند ٢
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٧.زهـبن · الصورة ٣٧ من ٤٧ · الصفحة المطبوعة ٣٦ · البند ٢ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل المعادلة المصفوفية الآتية: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`.
solution:
نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` عاملًا من اليسار؛ ثم نضرب من اليمين بنظير معاملها.

نجمع المدخلات المتناظرة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo stretchy="true">(</mo><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>+</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

محدد المعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، لذلك يوجد نظيره. نبدل مدخلتي القطر ونغير إشارتي المدخلتين الأخريين، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نضرب من اليمين بهذا النظير مع المحافظة على الترتيب.


نضرب كل صف من المصفوفة الأولى في كل عمود من الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



ثم نحسب عمليات الضرب والجمع داخل كل مدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>×</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p037-r3
title: الكامل، الوحدة الثالثة · ص ٣٦ · البند ٣
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٧.زهـبن · الصورة ٣٧ من ٤٧ · الصفحة المطبوعة ٣٦ · البند ٣ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد المصفوفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري. نسمّي المعطاة\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo>(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` بالرمز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`. بأخذ النظير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ نضرب من اليسار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` لعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
نحسب المحددين والنظيرين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn><mspace width="2em"/><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٧</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">محدد</mi><mo>⁡</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mspace width="2em"/><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نضرب الصفوف في الأعمدة؛ نضرب المعاملين العدديين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٧</mn></mfrac></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><msup><mi mathvariant="normal">ك</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢٨</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحسب المدخلات.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢٨</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢٨</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٤</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٤</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٧</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p037-r4
title: الكامل، الوحدة الثالثة · ص ٣٦ · البند ٤
question: النظير الضربي
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٧.زهـبن · الصورة ٣٧ من ٤٧ · الصفحة المطبوعة ٣٦ · البند ٤ · خارجي
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، حل المعادلة المصفوفية \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>×</mo><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
النظير الضربي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` هو المصفوفة التي تعطي مصفوفة الوحدة عند ضربها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بالترتيبين. يوجد للمصفوفة المربعة إذا وفقط إذا كان محددها غير صفري. لنظير مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نبادل مدخلتي القطر الرئيسي، ونغير إشارتي المدخلتين الأخريين، ثم نقسم كل المدخلات على المحدد غير الصفري.

نوزع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\`؛ فيُختصر حاصل ضربها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">أ</mi></mrow></math>\` إلى الوحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`

نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` مدخلةً بمدخلة.

نطرح كل مدخل في المصفوفة الثانية من نظيره في الأولى؛ طرح العدد السالب يضيف مقابله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٧</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٧</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٩</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p044-r7
title: الكامل، الوحدة الثالثة · ص ٤٣ · البند ٧
question: أسئلة للمهتمين بالوحدة الثالثة
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٤.زهـبن · الصورة ٤٤ من ٤٧ · الصفحة المطبوعة ٤٣ · البند ٧ · أسئلة للمهتمين · السؤال ٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi></mrow></math>\` بحيث يكون \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` أحد عوامل المحدد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ك</mi></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">ك</mi></mrow></mtd></mtr></mtable><mo stretchy="true">|</mo></mrow></mrow></math>\`.
solution:
المحدد كثير حدود في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` يعني أن قيمته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` تساوي صفرًا، لأن العامل نفسه ينعدم هناك.
نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` ثم نوسع على الصف الأول بإشارات\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`؛ نحذف صف وعمود كل مدخلة لحساب محددها الصغير.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">ك</mi><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١٦</mn><mo stretchy="false">]</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نفك الأقواس ونجمع الحدود.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ك</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">٢٤</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mo>−</mo><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ك</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">٢٤</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\` ثم نحلل؛ العددان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` مجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ك</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


أحد العاملين يجب أن يساوي صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl"> أو </mtext><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::`;export default m({status:"published",language:"ar",title:"النظير الضربي للمصفوفة المربعة",summary:"أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",outcome:"مراجعة النظير الضربي للمصفوفة المربعة من الأسئلة الأصلية.",mode:"أسئلة وبطاقات",duration:"18 أسئلة",level:"الثاني عشر · العلمي",reward:10},lessonSource);
