import{defineMarkdownLesson as m}from"../../../markdown/lesson-model.js?v=7388f68cc0f433fd";export const lessonSource=`:::exam-question
id: math-book-p017-ex1
title: الكتاب، ص ١٥ · مثال ١ · سهل
question: قاعدة لوبيتال، ومشتقة الاقتران الأسي واللوغاريتمي
reference: [السؤال، النسخة المصورة، ص ١٧](assets/lessons/mathematics/source-crops/math-book-p017-ex1-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p017-ex1-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` بالراديان، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">١</mn></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p017-ex2
title: الكتاب، ص ١٥ · مثال ٢ · سهل
question: قاعدة لوبيتال، ومشتقة الاقتران الأسي واللوغاريتمي
reference: [السؤال، النسخة المصورة، ص ١٧](assets/lessons/mathematics/source-crops/math-book-p017-ex2-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p017-ex2-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٢</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٢</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٢</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">١</mn></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p018-ex3
title: الكتاب، ص ١٦ · مثال ٣ · متوسط
question: قاعدة لوبيتال، ومشتقة الاقتران الأسي واللوغاريتمي
reference: [السؤال، النسخة المصورة، ص ١٨](assets/lessons/mathematics/source-crops/math-book-p018-ex3-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p018-ex3-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`؛ ونستخدم قاعدة القوة للمقام.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



ما زالت النسبة السابقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` عند التعويض، فنكرر القاعدة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p019-ex4
title: الكتاب، ص ١٧ · مثال ٤
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ١٩، مثال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>+</mo><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>+</mo><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

نشتق حاصل الضرب، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي نفسها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mo>+</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></mrow></math>
\`\`\`

نضيف مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قتا</mi></math>\`، وهي سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قتا</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظتا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mo>+</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mo>−</mo><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p020-ex5
title: الكتاب، ص ١٨ · مثال ٥ · متوسط
question: قاعدة لوبيتال، ومشتقة الاقتران الأسي واللوغاريتمي
reference: [السؤال، النسخة المصورة، ص ٢٠](assets/lessons/mathematics/source-crops/math-book-p020-ex5-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p020-ex5-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">١٠</mn></msup><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">١٠</mn></msup><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.

لوغاريتم قوة موجبة المدخل يساوي الأس في لوغاريتم المدخل قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٠</mn><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

مشتقة اللوغاريتم الطبيعي هي مقلوب مدخله؛ نعوّض بخمسة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٠</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
:::


:::exam-question
id: math-book-p020-ex6-a
title: الكتاب، ص ١٨ · مثال ٦، الفرع ١
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢٠، مثال ٦، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بيّن باستخدام قاعدة لوبيتال أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">س</mi></mfrac></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\`، ومشتقة الثابت صفر.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mn dir="ltr">١</mn></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p020-ex6-b
title: الكتاب، ص ١٨ · مثال ٦، الفرع ٢
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢٠، مثال ٦، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بيّن باستخدام قاعدة لوبيتال أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة اللوغاريتم الطبيعي هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p021-exercise1-a
title: الكتاب، ص ١٩ · تمارين ١-٤، السؤال ١ أ
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢١، تمارين ١-٤، السؤال ١ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></mrow></math>\`؛ هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p021-exercise1-b
title: الكتاب، ص ١٩ · تمارين ١-٤، السؤال ١ ب
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢١، تمارين ١-٤، السؤال ١ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mn dir="ltr">٤</mn><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p021-exercise2-a
title: الكتاب، ص ١٩ · تمارين ١-٤، السؤال ٢ أ
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢١، تمارين ١-٤، السؤال ٢ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.
solution:
لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نضعهما في قاعدة الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>−</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` عاملًا مشتركًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>(</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p021-exercise2-b
title: الكتاب، ص ١٩ · تمارين ١-٤، السؤال ٢ ب
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢١، تمارين ١-٤، السؤال ٢ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
نكتب الجذر قوة نصف؛ لوغاريتم القوة يسحب الأس أمامه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

مشتقة اللوغاريتم الطبيعي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">لو</mi></mrow><mrow><mi mathvariant="normal">هـ</mi></mrow></msub></mrow><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ نبقي معامل النصف عند الاشتقاق.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p021-exercise2-c
title: الكتاب، ص ١٩ · تمارين ١-٤، السؤال ٢ ج
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢١، تمارين ١-٤، السؤال ٢ ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.
solution:
العاملان على صورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، وحاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`. هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نشتق الأسّي بقاعدة السلسلة؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثابت</mtext><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></msup></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p021-exercise3
title: الكتاب، ص ١٩ · تمارين ١-٤، السؤال ٣
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢١، تمارين ١-٤، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mfrac></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، والمقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. المطلوب النهاية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></math>\`.

نعكس ترتيب فرق قيم الاقتران مع وضع إشارة سالبة، ونحلل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` فرقَ مربعين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\` نعيد ترتيب الكسر ليظهر تعريف المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`: نهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mfrac><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mo stretchy="false">]</mo></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></mfrac></mrow></math>
\`\`\`



نهاية المقام هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، وهي غير صفرية؛ لذلك يجوز أخذ نهاية النسبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p021-exercise4
title: الكتاب، ص ١٩ · تمارين ١-٤، السؤال ٤
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٢١، تمارين ١-٤، السؤال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، فجد قيمة/قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي تجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي نفسها، ومشتقة الثابت صفر. نساوي المشتقة ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؛ فيلغى الحد الأسّي من الطرفين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

ننقل الحدود ونحلل المربع الكامل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mo>=</mo><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p035-test4-a
title: الكتاب، ص ٣٣ · اختبار الوحدة، السؤال ٤ أ
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٣٥، اختبار الوحدة، السؤال ٤ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></mrow></math>\`؛ المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\` مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p035-test4-b
title: الكتاب، ص ٣٣ · اختبار الوحدة، السؤال ٤ ب
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٣٥، اختبار الوحدة، السؤال ٤ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mtext dir="rtl">هـ</mtext><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></msup><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. قاعدة السلسلة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي نفسها.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></msup><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></msup><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p035-test4-c
title: الكتاب، ص ٣٣ · اختبار الوحدة، السؤال ٤ ج
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكتاب، النسخة المصورة، ص ٣٥، اختبار الوحدة، السؤال ٤ ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. نستخدم مشتقتي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`، وقاعدة الضرب: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



ما زالت النسبة السابقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` عند التعويض، فنكرر القاعدة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::

:::mcq
id: math-kamel-u1-p027-r4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ٤ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ٤ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r4-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r4-key.webp)
question: جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></munder><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`.
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></munder><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></munder><mfrac><mrow><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p027-r5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ٥ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ٥ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r5-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r5-key.webp)
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>−</mo><mtext dir="rtl">هـ</mtext></mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">−هـ</mtext></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">هـ</mtext></math>\`
explanation:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري ثابت ومشتقته صفر؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي نفسها، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p027-r1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ١ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ١ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r1-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r1-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo></mrow></math>\` صفر، فإن العبارة الصحيحة فيما يلي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ص</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ص</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ص</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo></mrow></math>\` صفر.

بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` موجبة، نقسم مشتقتها على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؛ وهذا مشتق لوغاريتمها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">ص</mi></mrow><mo>)</mo></mrow><mo>)</mo><mi mathvariant="normal">َ</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`؛ الفرق بين الاقترانين ثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">ص</mi></mrow><mo>)</mo></mrow><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p027-r2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ٢ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ٢ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r2-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r2-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">هـ</mtext></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mtext dir="rtl">هـ</mtext></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.

مشتقة لوغاريتم مدخل هي مشتقة المدخل مقسومة عليه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نعوّض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`؛ لوغاريتمه يساوي واحدًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">هـ</mi></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p027-r3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ٣ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · البند ٣ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r3-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p027-r3-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mtext dir="rtl">هـ</mtext><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`.

نوسع مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` ثم نطرح؛ الثابت يُلغى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">هـ</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` غير الصفرية ثم نحسب النهاية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">هـ</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">هـ</mtext></mrow></mrow></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p026-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٦ · السؤال ١
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٦، السؤال ١
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٣</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٢</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\`.

نقلب ترتيب فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ليصبح تعريف المشتقة، مع إبقاء السالب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٣</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mo>−</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

نعوّض ثلاثة في قاعدة المشتقة المعطاة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mo>(</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٢</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p026-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٦ · السؤال ٢
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٦، السؤال ٢
question: أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
تغير المدخل هو سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`؛ نضعه في المقام لتظهر المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mfrac><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>−</mo><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></math>
\`\`\`

ننظر إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` بوصفه اقترانًا في المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ثابتة في هذه النهاية ومتغيرها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، فالنهاية سالب هذه المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ لذلك لا يظهر عامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p026-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٦ · السؤال ٣
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٦، السؤال ٣
question: أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">ظا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">قا</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><msup><mtext dir="rtl">قا</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">قا</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">قا</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
تغير المدخل هو سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`؛ نضعه في المقام لتظهر المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>−</mo><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ثابتة ومتغير النهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`. ننظر إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` بوصفه اقترانًا في المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`؛ مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ع</mi></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. النهاية سالب هذه المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، دون عامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` إضافي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mo>−</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p026-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٦ · السؤال ٤
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٦، السؤال ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`.

النهاية المعطاة هي تعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

قاعدة القسمة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>×</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac></math>\`؛ لأن مشتقة البسط صفر ومشتقة المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`. ثم نعوض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p026-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٦ · السؤال ٥
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٦، السؤال ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>)</mo></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>)</mo></mrow></mrow></math>\`.

نشتق الأسّي، ثم لوغاريتم المدخل بقسمة مشتقته عليه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض بالصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p026-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٦ · السؤال ٦
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٦، السؤال ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`.

نهاية فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` هي المشتقة الثانية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mi mathvariant="normal">قً</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

قاعدة القوة تضرب المعامل في الأس ثم تنقصه واحدًا؛ نشتق كثير الحدود مرتين ثم نعوض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p026-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٦ · السؤال ٧
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٦، السؤال ٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>)</mo></mrow><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>)</mo></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>)</mo></mrow><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>)</mo></mrow></mrow></math>\`.

لوغاريتم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mi mathvariant="normal">ع</mi></mfrac></math>\`؛ نستخدمها مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><mrow><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض بالصفر ثم نطرح الكسر.

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></msup><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p027-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٧ · السؤال ٦
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٧، السؤال ٦
question: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>،</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين قابلين للاشتقاق فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo stretchy="true">(</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>∆</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>∆</mo><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo stretchy="true">(</mo><mfrac><mrow><mo>∆</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>∆</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>،</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين قابلين للاشتقاق.

المشتقة الثانية هي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`؛ ونكتب تعريف المشتقة ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p028-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٨ · السؤال ٢
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٨، السؤال ٢
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
explanation:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي نفسها، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ونستخدم قاعدة القوة للمقام.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



ما زالت النسبة السابقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` عند التعويض، فنكرر القاعدة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p028-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٨ · السؤال ٣
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٨، السؤال ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٢</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | غير موجودة
explanation:
المشتقة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\` تعني نهاية فرق القيم مقسومًا على فرق المدخلين قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. نرتب الكسر ليظهر هذا التعريف.

مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، فيقترب إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٢</mn></mrow></math>\`، ويكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ومع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></math>\` نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` في العامل الثاني؛ لا نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` أثناء الاختصار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>⋅</mo><mfrac><mtext dir="rtl">س</mtext><mrow><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`



العامل الأول يقترب إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، والثاني إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">النهاية</mtext><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p028-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٨ · السؤال ٤
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٨، السؤال ٤
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.

في الاقتران المركب نضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` في مشتقة المدخل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow><mo>)</mo><mo>×</mo><mo>(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow><mo>)</mo><mi mathvariant="normal">َ</mi></mrow></mrow></math>
\`\`\`

مشتقة اللوغاريتم هي مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow><mo>)</mo></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p028-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٨ · السؤال ٥
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٨، السؤال ٥
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></math>\`، فما ناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">ظا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">قتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></math>\`.

مشتقة اللوغاريتم هي مشتقة المدخل مقسومة عليه. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`؛ نستخدمهما لاشتقاق المدخل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow></mrow></math>
\`\`\`

نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` عاملًا مشتركًا ونختصر؛ مدخل اللوغاريتم موجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p028-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٨ · السؤال ٦
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٨، السؤال ٦
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">ظا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">ظا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.

قاعدة لوبيتال مناسبة هنا بعد التحقق من الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`: نستبدل الكسر بكسر مشتقة البسط على مشتقة المقام، ثم نحسب النهاية. لا نستخدم قاعدة مشتقة القسمة في هذه الخطوة.

نشتق بقاعدة لوبيتال بعد صورة صفر على صفر؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ليس واحدًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ب</mi><mo>)</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نحل المعادلة للثابت.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ب</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p028-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٨ · السؤال ٧
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٨، السؤال ٧
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">−٠٫٥</mn></math>\`
- [ ] option-2 | صفر
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠٫٥</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
نضرب البسط والمقام في المرافق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`؛ حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



من المتطابقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext></mrow><mrow><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` القريب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ هذا كاف لحساب النهاية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mtext dir="rtl">س</mtext><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mo>−</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p029-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٩ · السؤال ١
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٩، السؤال ١
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\` علماً بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:
المعطى يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` يتغير بمقدار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">قً</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الكسر</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>×</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`. هكذا يظهر تعريف المشتقة الثانية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ عامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يعوض أن تغير المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">قً</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p029-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٩ · السؤال ٢
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٩، السؤال ٢
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`؟
- [x] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p029-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٩ · السؤال ٣
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٩، السؤال ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري، ما قيمة/قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي تجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>±</mo><msqrt><mn dir="ltr">٥</mn></msqrt></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>±</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري، ما قيمة/قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي تجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`؟.

قاعدة القوة ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` تعطينا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`. نساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ فيلغى الحد الأسّي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

نعزل مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ثم نأخذ الجذرين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>±</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>±</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p029-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٩ · السؤال ٤
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٩، السؤال ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>،</mo><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين متصلين وقابلين للاشتقاق عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٤</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٨</mn></mrow></mfrac></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٧</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>،</mo><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين متصلين وقابلين للاشتقاق عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mfrac><mi mathvariant="normal">م</mi><mi mathvariant="normal">س</mi></mfrac></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi></mrow></mrow></math>\`؛ نشتق حاصل الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">مَ</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٨</mn></mrow><mrow><mo>=</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

النهاية هي ثلاثة أنصاف مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٤</mn></mrow></mrow></munder><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٨</mn></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">مَ</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٧</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p029-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٩ · السؤال ٥
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٩، السؤال ٥
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. بقاعدة الضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p029-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٩ · السؤال ٦
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٩، السؤال ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` غير الصفرية؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` سالب مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\`، وتبقى الإشارة سالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mo>−</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p029-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٩ · السؤال ٧
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٩، السؤال ٧
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | صفر
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`. وبالسلسلة مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`، لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة المدخل</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mrow><mo>−</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mrow></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p030-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٠ · السؤال ١
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٠، السؤال ١
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتران كثير حدود وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow></math>\`؟
- [ ] option-1 | صفر
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتران كثير حدود وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.

قاعدة لوبيتال مناسبة هنا بعد التحقق من الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`: نستبدل الكسر بكسر مشتقة البسط على مشتقة المقام، ثم نحسب النهاية. لا نستخدم قاعدة مشتقة القسمة في هذه الخطوة.

وجود النهاية المعطاة يقتضي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؛ ثم إنها تعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

البسط والمقام الجديدان يقتربان من الصفر؛ نستخدم لوبيتال.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p030-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٠ · السؤال ٢
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٠، السؤال ٢
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>)</mo></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | صفر
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`
explanation:
قاعدة لوبيتال مناسبة هنا بعد التحقق من الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`: نستبدل الكسر بكسر مشتقة البسط على مشتقة المقام، ثم نحسب النهاية. لا نستخدم قاعدة مشتقة القسمة في هذه الخطوة.

نكتب نسبة المربعين مربعًا لنسبة واحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><msup><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><msup><mrow><mo>(</mo><mfrac><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نحسب نهاية النسبة بلوبيتال ثم نربّع الناتج.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p030-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٠ · السؤال ٣
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٠، السؤال ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mo>)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، فإن قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` هي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mo>)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.

نشتق لوغاريتم المدخل بقسمة مشتقته عليه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض بالواحد ثم نحل؛ المدخل الناتج موجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p030-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٠ · السؤال ٤
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٠، السؤال ٤
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mo>)</mo></mrow></msup><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></msup></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mo>)</mo></mrow></msup><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></msup></mrow></math>\`.

الأسّي واللوغاريتم متعاكسان حيث مدخل اللوغاريتم موجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ج</mi><mo>−</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></msup></mrow></mrow></math>
\`\`\`

قاعدة القوة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وبالسلسلة مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\` لأن مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. نستخدمهما ثم نعوض عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، بشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٩</mn><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p030-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٠ · السؤال ٥
kicker: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٠، السؤال ٥
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mn dir="ltr">٧</mn><mi mathvariant="normal">س</mi></msup></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٧</mn><mi mathvariant="normal">س</mi></msup><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mn dir="ltr">٧</mn><mo>)</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mn dir="ltr">٧</mn><mo>)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٧</mn><mi mathvariant="normal">س</mi></msup><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٧</mn></mfrac><mo>)</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></math>\`
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mn dir="ltr">٧</mn><mi mathvariant="normal">س</mi></msup></mrow></math>\`.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">س</mi></mrow></math>\` كأسّي طبيعي؛ لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أس لوغاريتم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">٧</mn></mrow><mo>)</mo></mrow></mrow></msup></mrow></math>
\`\`\`

نضرب مشتقة الأسّي في مشتقة الأس، وهي ثابتة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">٧</mn></mrow><mo>)</mo></mrow></mrow></msup><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">٧</mn></mrow><mo>)</mo></mrow></mrow><mrow><mo>=</mo><msup><mrow><mn dir="ltr">٧</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">٧</mn></mrow><mo>)</mo></mrow></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٧</mn><mi mathvariant="normal">س</mi></msup><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mn dir="ltr">٧</mn></mrow></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::exam-question
id: math-kamel-u1-p031-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣١ · السؤال ١
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣١، السؤال ١ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` قابلًا للاشتقاق عند \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، وكان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، فاحسب \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mstyle scriptlevel="0" displaystyle="true"><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mstyle></mrow></math>\`.
solution:
النهاية تشبه تعريف المشتقة، لكن في البسط حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` ونطرحها حتى نفصلها إلى جزء يحتوي تعريف المشتقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



قابلية الاشتقاق عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` تضمن الاتصال هناك، فيؤول الجزء الأول إلى قيمة الاقتران؛ والجزء الثاني هو تعريف مشتقته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">النهاية</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p031-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣١ · السؤال ٢
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣١، السؤال ٢ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mstyle scriptlevel="0" displaystyle="true"><mfrac><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mfrac></mstyle></mrow></math>\`، حيث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">س</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كان متوسط تغيره على الفترة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٥</mn><mo stretchy="false">]</mo></mrow></math>\` يساوي \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn dir="ltr">٢</mn></mrow></math>\`، وكان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، فجد الثابتين \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
نستخدم تعريف متوسط التغير لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`. أما المعلومة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\` فستحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بعد ذلك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mi mathvariant="normal">ب</mi><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mi mathvariant="normal">ب</mi><mn dir="ltr">٥</mn></mfrac></mrow><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



تلغى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` لأنها تظهر بالإشارة نفسها في قيمتي الاقتران، ويصبح فرق الكسرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi></mrow></mrow><mn dir="ltr">٥</mn></mfrac></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi></mrow></mrow><mn dir="ltr">٥</mn></mfrac></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mi mathvariant="normal">ب</mi><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



نعوّض في القيمة المعطاة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦</mn><mo separator="true">,</mo><mspace width="1em"/><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`



التحقق: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`، فيكون متوسط التغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p031-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣١ · السؤال ٣
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣١، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></munder><mfrac><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`.
solution:
الهوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">جا</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جتا</mi><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`.

فرق المربعين في البسط يساوي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. الاختصار جائز قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\` مع استثناء النقطة نفسها، وهذا كافٍ لحساب النهاية.

نستعمل فرق المربعين لأن البسط فرق بين مربعين: مربع الأول ناقص مربع الثاني يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">الأول</mtext><mo>−</mo><mtext dir="rtl">الثاني</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">الأول</mtext><mo>+</mo><mtext dir="rtl">الثاني</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. لا نختصر العامل المشترك إلا بعد التأكد أنه غير صفري. ونختصر العامل الذي يقترب من الصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mo>(</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>(</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نعوّض ربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\` في التعبير المبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></munder><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p031-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣١ · السؤال ٤
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣١، السؤال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فجد كلاً من الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` بحيث نهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

المقام يقترب من صفر. لكي تكون النهاية عددًا منتهيًا يجب أن يقترب البسط أيضًا من صفر؛ وإلا لا يبقى الكسر محدودًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الآن الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`؛ البسط والمقام كثيرتا حدود قابلتان للاشتقاق قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. نستخدم لوبيتال باشتقاق البسط والمقام كلًا على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi></mrow><mn dir="ltr">١</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نطرح المعادلة الأولى من الثانية حتى يلغى حد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نعوّض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` في المعادلة الأولى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p031-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣١ · السؤال ٥
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣١، السؤال ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mrow><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

قاعدة لوبيتال مناسبة هنا بعد التحقق من الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`: نستبدل الكسر بكسر مشتقة البسط على مشتقة المقام، ثم نحسب النهاية. لا نستخدم قاعدة مشتقة القسمة في هذه الخطوة.

خاصية لوغاريتم القوة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`، إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`. نكتب حاصل الضرب ككسر واحد؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ل</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mfrac></mrow></mrow></mrow></math>
\`\`\`

الصورة صفر على صفر؛ نشتق بقاعدة لوبيتال.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p031-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣١ · السؤال ٧
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣١، السؤال ٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>\`؟
solution:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.

نجمع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فيصبح الطرف الآخر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. لو احتوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` حدًا أعلى من الثانية، كـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ك</mi></msup></math>\`، لأصبح معامله في هذا المجموع مضروبًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وهو غير صفر؛ فلا يختفي. لذلك درجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` لا تتجاوز الثانية، ونكتب:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`

نعوّض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` ونجمع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ثم نقارن المعاملات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">أ</mi><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi></mrow><mrow><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

نعوّض بالقاعدة ونختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mo>(</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٥</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p031-q8
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣١ · السؤال ٨
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣١، السؤال ٨
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>″</mo></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>″</mo></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` مضروبة في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`. هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\`؛ لذلك يظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` في كل اشتقاق.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صً</mi><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ص</mi></mrow></mrow></math>
\`\`\`

نعوّض في المعادلة ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` الموجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p031-q9
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣١ · السؤال ٩
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣١، السؤال ٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">قا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


التعويض يعطي الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`. قاعدة لوبيتال تستبدل الكسر بكسر مشتقة البسط على مشتقة المقام عند وجود النهاية؛ لا نشتق القسمة. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">ع</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></mrow></mrow><mo>×</mo><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ع</mi></mrow><mo>×</mo><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`؛ هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



نشتق البسط والمقام كلًا على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">قا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



نختصر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` غير الصفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>
\`\`\`



ما زالت الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`، فنكرر لوبيتال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mn dir="ltr">٢</mn><mi mathvariant="normal">قا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٣</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` في التعبير الأخير.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u1-p032-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٢ · السؤال ١
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٢، السؤال ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>\` باستخدام قاعدة لوبيتال.
solution:


التعويض يعطي الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`. قاعدة لوبيتال تستبدل الكسر بكسر مشتقة البسط على مشتقة المقام عند وجود النهاية؛ لا نشتق القسمة. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`. في الاشتقاق الثاني نشتق حاصل الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow><mo>+</mo><mrow><mtext dir="rtl">الأول</mtext><mo>×</mo><mtext dir="rtl">مشتقة الثاني</mtext></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



نشتق البسط والمقام كلًا على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



ما زالت الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`، فنكرر لوبيتال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٣</mn></msup><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نعوض في الكسر الأخير؛ المقام غير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u1-p032-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٢ · السؤال ٣
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٢، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٢</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">م</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`؟
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٢</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">م</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.

قاعدة لوبيتال مناسبة هنا بعد التحقق من الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`: نستبدل الكسر بكسر مشتقة البسط على مشتقة المقام، ثم نحسب النهاية. لا نستخدم قاعدة مشتقة القسمة في هذه الخطوة.

البسط عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">م</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ نستخدم لوبيتال. قاعدة القوة تعطي مشتقة البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo>+</mo><mi mathvariant="normal">م</mi></mrow></math>\` ومشتقة المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٢</mn></mrow></mrow></munder><mrow><mfrac><mrow><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mo>(</mo><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">م</mi><mo>)</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">م</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">م</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p032-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٢ · السؤال ٤
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٢، السؤال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فما قيمة الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` علماً بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`؟
solution:
 متوسط التغير هو فرق قيم الاقتران على طول الفترة؛ نستخدمه على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>,</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">أ</mi></mrow><mo>+</mo><mfrac><mi mathvariant="normal">ب</mi><mn dir="ltr">٥</mn></mfrac></mrow><mo>−</mo><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mfrac><mi mathvariant="normal">ب</mi><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



النهاية المعطاة تشبه تعريف المشتقة: نقسم فرق القيم على تغير المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow></math>\`، ونعوض ذلك بعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` خارج الكسر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">هـ</mi></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo mathvariant="normal">′</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mfrac><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mfrac></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mfrac><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`؛ نكتب المقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` ونطبق قاعدة القوة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نطرح المعادلة الثانية من الأولى.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mfrac><mi mathvariant="normal">ب</mi><mn dir="ltr">٥</mn></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi></mrow><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn><mo>⟹</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>⟹</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u1-p032-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٢ · السؤال ٥
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٢، السؤال ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`، فما قيمة كل من الثوابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\`؟
solution:
المقام\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` يقترب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`. حتى تكون النهاية المنتهية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`، يجب أن ينعدم البسط عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">ج</mtext><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



بعد تحقق هذا الشرط تصبح الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`؛ نستخدم لوبيتال. المقام المشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` يقترب أيضًا إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، فيلزم انعدام البسط المشتق عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نشتق مرة ثانية؛ المقام يصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، ويجب أن تساوي النهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٦</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` في معادلة المشتقة الأولى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١٤</mn></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` في معادلة البسط الأصلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">١٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p032-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٢ · السؤال ٦
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٢، السؤال ٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mroot><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mi mathvariant="normal">ن</mi></mroot><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٠</mn></mfrac></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؟
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أس في السؤال. قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` موجبًا، فتجوز قاعدة القوة الكسرية. التعويض يعطي الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`، فنستخدم لوبيتال.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` تضرب في الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\`، ثم في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mtext dir="rtl">س</mtext><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">١</mn><mtext dir="rtl">ن</mtext></mfrac></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٥</mn></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mtext dir="rtl">س</mtext><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mfrac><mn dir="ltr">٣</mn><mtext dir="rtl">ن</mtext></mfrac><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mrow><mfrac><mn dir="ltr">١</mn><mtext dir="rtl">ن</mtext></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></msup></mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>=</mo><mfrac><mrow><mfrac><mn dir="ltr">٣</mn><mtext dir="rtl">ن</mtext></mfrac></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ن</mtext></mrow></mfrac></mrow></math>
\`\`\`



نساوي بالقيمة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٠</mn></mfrac></math>\`، ثم نضرب بالمقامين غير الصفريين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ن</mtext></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٠</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p032-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٢ · السؤال ٧
question: قاعدة لوبيتال ومشتقة الاقتران الأسي واللوغاريتمي
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٣٢، السؤال ٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">ج</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow></mfrac></mrow><mo>=</mo><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٣٢</mn></msup><mo>)</mo></mrow></mrow></math>\`؟
solution:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">ج</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

قاعدة القوة تضرب المعامل في الأس ثم تنقص الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ نشتق ثلاث مرات لأن النهاية فرق المشتقة الثانية. أولًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mi mathvariant="normal">ج</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ج</mi><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>
\`\`\`

نضرب الكسر في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٤</mn></mfrac></math>\` فيظهر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow><mo>×</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">هـ</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`. نهاية الكسر هي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`‴\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`. و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msub><mrow><mi mathvariant="normal">لو</mi></mrow><mrow><mi mathvariant="normal">هـ</mi></mrow></msub></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٣٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>\` لأن اللوغاريتم والأس بالأساس نفسه متعاكسان.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>(</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ج</mi><mo>−</mo><mn dir="ltr">١٢</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`

نحل المعادلة الخطية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ج</mi><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
:::



:::mcq
id: math-kamel-u1-p028-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٢٨ · البند ١
kicker: الكامل، الوحدة الأولى · الصورة، ص ٢٨ · البند ١ · ٢٠١٩ دور ثاني
reference: السؤال، الصورة، · المفتاح / الحل
question: ما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></mrow></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext></mrow></math>\` العدد النيبيري؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
explanation:


التعويض يعطي الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`. قاعدة لوبيتال تستبدل الكسر بكسر مشتقة البسط على مشتقة المقام عند وجود النهاية؛ لا نشتق القسمة. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وقاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



نشتق البسط والمقام كلًا على حدة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



نعوض في الكسر الأخير؛ المقام غير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


`;export default m({status:"published",language:"ar",title:"قاعدة لوبيتال، ومشتقة الاقتران الأسي واللوغاريتمي",summary:"أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",outcome:"مراجعة قاعدة لوبيتال، ومشتقة الاقتران الأسي واللوغاريتمي من الأسئلة الأصلية.",mode:"أسئلة وبطاقات",duration:"62 أسئلة",level:"الثاني عشر · العلمي",reward:10},lessonSource);
