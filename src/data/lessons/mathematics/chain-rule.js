import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `:::exam-question
id: math-book-p027-ex1-a
title: الكتاب، ص ٢٥ · مثال ١، الفرع ١ · متوسط
question: قاعدة السلسلة
reference: [السؤال، النسخة المصورة، ص ٢٧](assets/lessons/mathematics/source-crops/math-book-p027-ex1-a-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p027-ex1-a-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow><mo>َ</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`.

التركيب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` يعني تعويض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`. قاعدة القوة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><msup><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٥</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msup></mrow></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p027-ex1-b
title: الكتاب، ص ٢٥ · مثال ١، الفرع ٢ · متوسط
question: قاعدة السلسلة
reference: [السؤال، النسخة المصورة، ص ٢٧](assets/lessons/mathematics/source-crops/math-book-p027-ex1-b-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p027-ex1-b-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow><mo>َ</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، فمشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` بقاعدة القوة. في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` نفسه هو الداخلي والخارجي. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\`.
:::


:::exam-question
id: math-book-p028-ex2
title: الكتاب، ص ٢٦ · مثال ٢ · متوسط
question: قاعدة السلسلة
reference: [السؤال، النسخة المصورة، ص ٢٨](assets/lessons/mathematics/source-crops/math-book-p028-ex2-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p028-ex2-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`؛ قاعدة القوة والسلسلة تعطي مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\` لأن مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>)</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
:::


:::exam-question
id: math-book-p028-ex3
title: الكتاب، ص ٢٦ · مثال ٣
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٨، مثال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة المماس لمنحنى العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابل للاشتقاق، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

قاعدة الضرب تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow><mo>+</mo><mrow><mtext dir="rtl">الأول</mtext><mo>×</mo><mtext dir="rtl">مشتقة الثاني</mtext></mrow></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` بالسلسلة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ لذلك يصبح الحد الثاني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">س</mi><mo>×</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>×</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>+</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">قَ</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` نحسب نقطة التماس وميله.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢٣</mn></mrow></mrow></math>
\`\`\`

نكتب معادلة المستقيم بنقطة وميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢٣</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤٨</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٢٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤٨</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p028-ex4
title: الكتاب، ص ٢٦ · مثال ٤
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٨، مثال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mfrac><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo stretchy="true">)</mo></mrow><mn dir="ltr">٥</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هو القوة الخامسة لكسر. نشتق القوة أولًا، ثم نضرب بمشتقة الكسر الداخلي.

قاعدة مشتقة الكسر: مشتقة البسط في المقام ناقص البسط في مشتقة المقام، مقسومًا على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نضرب بهذه المشتقة بعد اشتقاق القوة الخامسة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٤</mn></msup><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يكون المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` غير صفري، والمدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٨١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٨١٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p029-ex5-a
title: الكتاب، ص ٢٧ · مثال ٥، الفرع ١
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، مثال ٥، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></msup></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></msup></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup><mo>×</mo><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></msup><mo>(</mo><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn><mo>×</mo><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p029-ex5-b
title: الكتاب، ص ٢٧ · مثال ٥، الفرع ٢
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، مثال ٥، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فبيّن أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ص</mi></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فبيّن أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ص</mi></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

نشتق اللوغاريتم بقسمة مشتقة المدخل عليه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

الأسّي يلغي اللوغاريتم؛ نضرب ثم نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` غير الصفرية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msup><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msup></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ص</mi></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p029-exercise1-a
title: الكتاب، ص ٢٧ · تمارين ١-٦، السؤال ١ أ
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، تمارين ١-٦، السؤال ١ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`.
solution:
قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`؛ هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn><msup><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>×</mo><msup><mrow><mn dir="ltr">٣</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup><mo>×</mo><mn dir="ltr">٣</mn></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٩</mn></mfrac></math>\`.
:::


:::exam-question
id: math-book-p029-exercise1-b
title: الكتاب، ص ٢٧ · تمارين ١-٦، السؤال ١ ب
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، تمارين ١-٦، السؤال ١ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
التعبير حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فنشتق كل عامل مرة مع إبقاء الآخر. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هي مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`، ومشتقتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>×</mo><mi mathvariant="normal">ظا</mi></mrow></math>\`.

داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` يوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mfrac></math>\`، ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`؛ لذلك نضرب بهذا العامل وفق قاعدة السلسلة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mtext dir="rtl">س</mtext></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mtext dir="rtl">س</mtext></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mtext dir="rtl">س</mtext></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` في الحد الثاني لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mtext dir="rtl">س</mtext></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mi>π</mi><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mtext dir="rtl">س</mtext></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mtext dir="rtl">س</mtext></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`



يشترط أيضًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يتحقق ذلك؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi>π</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p029-exercise1-c
title: الكتاب، ص ٢٧ · تمارين ١-٦، السؤال ١ ج
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، تمارين ١-٦، السؤال ١ ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`.
solution:
مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ع</mi></mrow></math>\`. ونكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`، فمشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow><mo>×</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` بالسلسلة. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ع</mi><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٥</mn><mo>×</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-book-p029-exercise1-d
title: الكتاب، ص ٢٧ · تمارين ١-٦، السؤال ١ د
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، تمارين ١-٦، السؤال ١ د
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mi>π</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ع</mi></mrow><mo>×</mo><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`. مشتقة مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>×</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow><mo>×</mo><mi mathvariant="normal">π</mi></mrow></math>\`. يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ الشرطان متحققان عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">π</mi><mo>×</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn><mo>=</mo><mo>−</mo><mi mathvariant="normal">π</mi></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow></math>\`.
:::


:::exam-question
id: math-book-p029-exercise1-e
title: الكتاب، ص ٢٧ · تمارين ١-٦، السؤال ١ هـ
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، تمارين ١-٦، السؤال ١ هـ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
مشتقة مكعب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، ومشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">لو</mi></mrow><mrow><mi mathvariant="normal">هـ</mi></mrow></msub></mrow><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msup><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">١</mn></mrow><mo>)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
:::


:::exam-question
id: math-book-p029-exercise2
title: الكتاب، ص ٢٧ · تمارين ١-٦، السؤال ٢
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، تمارين ١-٦، السؤال ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">مَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext></mrow></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نحتاج قاعدة القسمة لأن البسط والمقام يتغيران مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac></math>\`، بقاعدة السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mfrac><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>−</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mo stretchy="false">(</mo><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` عاملًا مشتركًا في البسط ونختصره مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` في المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mtext dir="rtl">س</mtext><mfrac><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></mfrac><mo>−</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mo stretchy="false">(</mo><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` موجبة، فيعرف اللوغاريتم، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>=</mo><mfrac><mrow><mrow><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mfrac><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">هـ</mi></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p029-exercise3
title: الكتاب، ص ٢٧ · تمارين ١-٦، السؤال ٣
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، تمارين ١-٦، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msup><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، اعتمد على الجدول في إيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.

| \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">مَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">مََ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` |
| --- | --- | --- |
| \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` |
solution:
عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يكون المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ لذلك نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` من الجدول.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` ومربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`. مشتقة مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup></mrow></math>\` مضروبة في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">[</mo><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo fence="false" stretchy="true" minsize="1.2em" maxsize="1.2em">[</mo><mn dir="ltr">٢</mn><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo fence="false" stretchy="true" minsize="1.2em" maxsize="1.2em">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥٠</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p029-exercise4
title: الكتاب، ص ٢٧ · تمارين ١-٦، السؤال ٤
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٢٩، تمارين ١-٦، السؤال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٨</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">قَ</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">١</mn><mo>×</mo><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p033-worksheet2-q3-a
title: الكتاب، ص ٣١ · ورقة عمل ٢، السؤال ٣ أ
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٣٣، ورقة عمل ٢، السؤال ٣ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mtext dir="rtl">هـ</mtext><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mtext dir="rtl">هـ</mtext></mfrac></mrow></math>\`.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ثابتة في هذه النهاية، ومتغيرها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`؛ لذلك تغير زاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، وهو نفسه المقام. نسبة فرق القيم إلى فرق المدخلين تقترب إلى المشتقة عند الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`؛ لا نضرب بعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لأننا لا نشتق بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هنا. يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mo>(</mo><mtext dir="rtl">ظا</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` هي مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">ظا</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p033-worksheet2-q3-b
title: الكتاب، ص ٣١ · ورقة عمل ٢، السؤال ٣ ب
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٣٣، ورقة عمل ٢، السؤال ٣ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mtext dir="rtl">هـ</mtext><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mrow><mn dir="ltr">١٠</mn><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
solution:
نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` ونطرحها؛ للفرق الأول يكون تغير المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">١٠</mn><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">١٠</mn></mrow></mfrac><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

في الفرق الثاني ترتيب الطرح معكوس، فيلغي سالب تغير المدخل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">هـ</mtext><mo>)</mo></mrow><mrow><mn dir="ltr">١٠</mn><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">١٠</mn></mrow></mfrac><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

نجمع النهايتين ونعوّض بقيمة المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٦</mn></mrow><mrow><mn dir="ltr">١٠</mn></mrow></mfrac><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٥</mn></mfrac></math>\`.
:::


:::exam-question
id: math-book-p033-worksheet2-q3-c
title: الكتاب، ص ٣١ · ورقة عمل ٢، السؤال ٣ ج
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٣٣، ورقة عمل ٢، السؤال ٣ ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.
solution:
نعرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`؛ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، فالنسبة المعطاة هي تعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ك</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. قاعدة المربع والسلسلة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ العامل الأخير مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mi mathvariant="normal">قً</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نعوّض بقيم المشتقتين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٦٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠</mn></math>\`.
:::


:::exam-question
id: math-book-p033-worksheet2-q5
title: الكتاب، ص ٣١ · ورقة عمل ٢، السؤال ٥
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٣٣، ورقة عمل ٢، السؤال ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، فجد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بحيث مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mi>∘</mi><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></math>\` تساوي صفرًا، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
مشتقة المركب تضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` بقاعدة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">أ</mtext><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">هـ</mtext><mo>∘</mo><mtext dir="rtl">ق</mtext><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mtext> </mtext><mtext dir="rtl">أ</mtext><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٦</mn></mfrac></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><msqrt><mn dir="ltr">٣</mn></msqrt><mn dir="ltr">٢</mn></mfrac></mrow></math>\` غير صفرية. المقام موجب، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ إذن لا ينعدم الجداء إلا بانعدام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl"> أو أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



القيمتان تحققان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p033-worksheet2-q6
title: الكتاب، ص ٣١ · ورقة عمل ٢، السؤال ٦
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٣٣، ورقة عمل ٢، السؤال ٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نشتق كل مكعب بقاعدة السلسلة:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mo>×</mo><mrow><mtext dir="rtl">مربع</mtext><mtext dir="rtl">المدخل</mtext></mrow></mrow><mo>×</mo><mtext dir="rtl">مشتقة المدخل</mtext></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">جا</mi></mrow></math>\`؛ فيصبح الحد الثاني موجبًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\` تتساوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`، وقيمتهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mo fence="true">(</mo><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn><msup><mrow><mo fence="true">(</mo><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::


:::mcq
id: math-book-p034-test1-7
title: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٧
kicker: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٧
reference: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">)</mo></mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></msup></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">١٨</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٩</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٥</mn><mn dir="ltr">١٨</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
explanation:
نشتق القوة المركبة أولًا: نضرب بالأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\` وننقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ثم نضرب بمشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext></mrow><mn dir="ltr">٣</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></math>
\`\`\`



الناتج حاصل ضرب، فنشتق كل عامل مرة. مشتقة القوة الثانية تستلزم أيضًا عامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext></mrow><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><msup><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo>−</mo><mfrac><mrow><mn dir="ltr">٨</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٩</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`؛ جذره التكعيبي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، ولذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٨</mn><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٨</mn><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٦</mn></mfrac></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٩</mn></mfrac><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٦</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٨</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">١٨</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">١٨</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-book-p035-test1-8
title: الكتاب، النسخة المصورة، ص ٣٥ · اختبار الوحدة، السؤال ١-٨
kicker: الكتاب، النسخة المصورة، ص ٣٥ · اختبار الوحدة، السؤال ١-٨
reference: الكتاب، النسخة المصورة، ص ٣٥ · اختبار الوحدة، السؤال ١-٨
question: إذا كانت مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mi>∘</mi><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٫٥</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
المعطى: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mi>∘</mi><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٥</mn><mo>=</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-book-p035-test3
title: الكتاب، ص ٣٣ · اختبار الوحدة، السؤال ٣
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٣٥، اختبار الوحدة، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`.
solution:
نرتب النهاية لتصبح مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` يقترب إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></math>\`، ويكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` القريب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\` نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`؛ المقامان الآخران غير صفريين قرب النقطة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow><mrow><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



العامل الأول يقترب إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` بتعريف المشتقة، والثاني إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">النهاية</mtext><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p035-test5
title: الكتاب، ص ٣٣ · اختبار الوحدة، السؤال ٥
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٣٥، اختبار الوحدة، السؤال ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متصلًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متصلًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

المقام يقترب من صفر والنهاية منتهية، فيلزم أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` يقترب من صفر. الاتصال يجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ وعندها تصبح النهاية فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على فرق المدخلين، أي تعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النهاية الجديدة مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mi mathvariant="normal">ق</mi></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ نستخدم قاعدة الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>+</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`.
:::


:::exam-question
id: math-book-p035-test8
title: الكتاب، ص ٣٣ · اختبار الوحدة، السؤال ٨
question: قاعدة السلسلة
reference: الكتاب، النسخة المصورة، ص ٣٥، اختبار الوحدة، السؤال ٨
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

نشتق البسط بقاعدة الضرب؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>\` تحوي العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">س</mi><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`. قاعدة القسمة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. نضع المشتقات فيها ثم نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` عاملًا مشتركًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>(</mo><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">س</mi><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow><mrow><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`.
:::


:::mcq
id: math-kamel-u1-p051-r2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٢ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٢ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r2-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r2-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow><mo>َ</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow><mo>َ</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p051-r1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ١ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ١ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r1-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r1-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٧</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٢١</mn></mfrac></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٤</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">قَ</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٧</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">١٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p051-r3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٣ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٣ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r3-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r3-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn></mrow></mfrac></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn></mrow></mfrac></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٩</mn></mrow><mo>=</mo><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` لأنه مربع كامل. يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٣</mn></mrow></math>\`؛ والمقلوب يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\`. قاعدة القوة تضرب في الأس وتنقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ومشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نشتق مرة ثانية ونربط القوة بمربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p051-r4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٤ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٤ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r4-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r4-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٠</mn></mrow></msqrt></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow><mo>َ</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٤</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٠</mn></mrow></msqrt></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">ع</mi></msqrt></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mfrac></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msqrt><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">١٠</mn></mrow></msqrt></mrow></mfrac><mo>×</mo><mo>(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٤</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p051-r6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٦ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٦ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r6-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r6-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>≠</mo></math>\` صفر، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>≠</mo></math>\` صفر.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">قَ</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p051-r7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٧ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٧ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r7-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r7-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٤</mn><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac><mo>=</mo><mrow><mn dir="ltr">٤</mn><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`. مشتقة المقلوب هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow><mtext dir="rtl">مربعه</mtext></mfrac></math>\`؛ ومشتقة المقام بالسلسلة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` والمقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` غير صفري. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><msup><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٦</mn><mo>×</mo><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p051-r8
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٨ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · البند ٨ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r8-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p051-r8-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`. نقسم حدي البسط على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، فيصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></mrow></math>\`؛ مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\` بقاعدة القوة. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>×</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-kamel-u1-p057-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥٧ · البند-٦
question: قاعدة السلسلة
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٥٧، البند-٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>+</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo></mrow></math>\` صفر.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>+</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` ونضرب في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٦</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p057-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥٧ · البند-٨
question: قاعدة السلسلة
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٥٧، البند-٨
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` قابلًا للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`، فجد قيم الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
solution:
كل فرع قابل للاشتقاق داخل مجاله. عند نقطة الفصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` نحتاج الاتصال وتساوي المشتقتين من الجهتين.

الاتصال يساوي قيمة الفرع الأيمن بنهاية الأيسر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`؛ السالب من القوة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` يضرب السالب من مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`. مشتقة الفرع الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">أ</mtext><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نطرح شرط الاتصال من شرط المشتقتين لإزالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p057-r9
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥٧ · البند-٩
question: قاعدة السلسلة
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٥٧، البند-٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، وكانت مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mi>∘</mi><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٢</mn></msqrt></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، وكانت مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mi>∘</mi><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٢</mn></msqrt></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يصبح المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mtext dir="rtl">جتا</mtext><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>×</mo><mfrac><mrow><mo>−</mo><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow><mrow><mi mathvariant="normal">π</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow><mi mathvariant="normal">π</mi></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p057-r8-b
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٥٧ · البند ٨، الفرع ٢
question: قاعدة السلسلة
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٥٧، البند ٨، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` قابلًا للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`، فجد مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mi>∘</mi><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
نحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` من قابلية الاشتقاق عند نقطة الفصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. يلزم الاتصال ثم تساوي مشتقتي الجهتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



مشتقة الفرع الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`، ومشتقة الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



بطرح معادلة الاتصال نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يستخدم الفرع الأول لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></math>\`، أما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\` فيستخدم الثاني لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



مشتقة المركب تساوي مشتقة الخارج عند ناتج الداخل مضروبة في مشتقة الداخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ق</mtext><mo>∘</mo><mtext dir="rtl">ق</mtext><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::

:::mcq
id: math-kamel-u1-p050-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٠ · السؤال ١
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٠، السؤال ١
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mo>|</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>|</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></msub></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`.

قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p050-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٠ · السؤال ٢
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٠، السؤال ٢
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ ومدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p050-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٠ · السؤال ٣
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٠، السؤال ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`؛ قاعدة القوة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` غير صفري، فيعرف المقلوب. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p050-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٠ · السؤال ٤
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٠، السؤال ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` قابلاً للاشتقاق وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٩</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | صفر
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٣</mn></math>\`
explanation:
لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٩</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. نستخدم قاعدة السلسلة: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند مدخلها تضرب في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٢</mn></mfrac></mrow></math>
\`\`\`



نحسب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، حيث مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` ومشتقة المدخل تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` ولا تساوي صفرًا.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p050-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٠ · السؤال ٥
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٠، السؤال ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">قَ</mi><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p050-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٠ · السؤال ٦
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٠، السؤال ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></math>\` فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
explanation:
مشتقة المركب تساوي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` مضروبة في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`. هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، ومشتقة الجذر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ق</mtext><mo>∘</mo><mtext dir="rtl">هـ</mtext><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msqrt><mtext dir="rtl">س</mtext></msqrt><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><msqrt><mtext dir="rtl">س</mtext></msqrt></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`؛ نعوض هذه القيمة في العاملين.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ق</mtext><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo stretchy="false">)</mo></mrow><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>⋅</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p050-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٠ · السؤال ٧
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٠، السؤال ٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٩</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، فإن قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><msqrt><mi mathvariant="normal">س</mi></msqrt><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٩</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.

مشتقة الجذر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">س</mi></msqrt></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` يكون الجذر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، فتستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mo>)</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p050-q8
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٠ · السؤال ٨
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٠، السؤال ٨
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`
explanation:
المشتقة المعطاة تخص المركب؛ لذلك نضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ق</mtext><mo>∘</mo><mtext dir="rtl">هـ</mtext><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">]</mo><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٧</mn><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثم نجمع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٤</mn><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p051-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥١ · السؤال ٥
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥١، السؤال ٥
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">ع</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>.</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠٠</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠٠</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">ع</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>.</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow></math>\`.

نقسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` فينتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mfrac></mrow></mrow></math>\`. قاعدة القوة للمقلوب تعطي مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ع</mi></mrow></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">٨</mn><mo>)</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mo>(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٠٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠٠</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p052-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٢ · السؤال ١
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٢، السؤال ١
question: ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">قتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
مشتقة المركب هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` مضروبة في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ق</mtext><mo>∘</mo><mtext dir="rtl">هـ</mtext><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext></mrow></mfrac></mrow></math>
\`\`\`



المتطابقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تحول المقام إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`. يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، لأن المقام الأصلي لا يجوز أن يساوي صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow><mrow><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></mfrac><mo>=</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



إذن المشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` على مجال المركب حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p052-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٢ · السؤال ٢
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٢، السؤال ٢
question: إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | صفر
explanation:
المعطى: إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`.

نفتح المربع؛ مجموع مربعي الجيب وجيب التمام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وضعف حاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ ونضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، مشتقة الزاوية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p052-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٢ · السؤال ٤
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٢، السؤال ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`؛ نستخدم مشتقة الأول في الثاني زائد الأول في مشتقة الثاني. مشتقة اللوغاريتم الطبيعي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mfrac><mn dir="ltr">١</mn><mtext dir="rtl">س</mtext></mfrac></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mfrac></math>\`؛ ثم نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">هـ</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">هـ</mi><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p052-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٢ · السؤال ٥
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٢، السؤال ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>″</mo></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ص</mi></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>″</mo></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ص</mi></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup><mo>×</mo><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`. هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في كل اشتقاق.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صً</mi><mo>=</mo><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ص</mi></mrow></mrow></math>
\`\`\`

نقسم المعادلة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` الموجبة ثم نحلل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mrow><mo>=</mo><mo>(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p052-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٢ · السؤال ٦
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٢، السؤال ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤٨</mn></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤٨</mn></mrow></math>\`.

قاعدة القوة تعطي مشتقة المكعب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>=</mo><mrow><mi mathvariant="normal">ب</mi><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`؛ مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\` لأن مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٤٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p052-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٢ · السؤال ٧
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٢، السؤال ٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">ن</mi></mrow></math>\`، أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">ن</mi></mrow></math>\`.

نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` ضعف الزاوية لكتابة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` مباشرة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">ن</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نشتق التربيعي بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p053-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٣ · السؤال ١
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٣، السؤال ١
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><mn dir="ltr">٢</mn><mo>+</mo><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow><mo>+</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">π</mi></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
explanation:
نشتق كل حد. في الأسّي نضرب في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`، وفي اللوغاريتم نقسم مشتقة المدخل على المدخل. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow></math>\` ثابت، فمشتقته صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></msup><mo>+</mo><mfrac><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext></mrow><mrow><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٠</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mfrac><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٠</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p053-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٣ · السؤال ٢
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٣، السؤال ٢
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٦</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">قَ</mi><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">١١</mn><mo>×</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٦٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٦</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p053-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٣ · السؤال ٣
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٣، السؤال ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٥</mn></msqrt></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٥</mn></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\` موجب. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">ع</mi></mrow></msqrt></mrow></mfrac><mo>×</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p053-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٣ · السؤال ٤
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٣، السؤال ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mtext dir="rtl">جا</mtext><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | صفر
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mtext dir="rtl">جا</mtext><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`.

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` باعتبارها اقترانًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>)</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">صَ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">صَ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p053-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٣ · السؤال ٥
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٣، السؤال ٥
question: إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | صفر
explanation:
نفتح مربع الفرق: مربع الأول ناقص ضعف حاصل الضرب زائد مربع الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



مجموع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مشتقة الثابت صفر. عند اشتقاق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` في مشتقة الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p053-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٣ · السؤال ٦
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٣، السؤال ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></msqrt></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠٫٨</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٫٦</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٫٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٫٨</mn></math>\`
explanation:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`. المطلوب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

 \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`؛ لذلك نستخدم قاعدة السلسلة: نضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow></math>
\`\`\`



الجذر قوة أسها نصف؛ نشتقه ونضرب في مشتقة مدخله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></msqrt></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`



نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` أولًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



نحسب الجذر الذي سيظهر في المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></msqrt><mo>=</mo><msqrt><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٤</mn></mrow></msqrt><mo>=</mo><msqrt><mn dir="ltr">٢٥</mn></msqrt><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نُعوّض القيمتين في حاصل المشتقتين؛ المقام يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` وليس صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo fence="true">∣</mo></mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>⋅</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo fence="true">∣</mo></mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">١٠</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٢٤</mn><mn dir="ltr">١٠</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٢</mn><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٢٫٤</mn></mrow></math>
\`\`\`



إذن المشتقة المطلوبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٢</mn><mn dir="ltr">٥</mn></mfrac></math>\`، أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٫٤</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p053-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٣ · السؤال ٧
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٣، السؤال ٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mroot><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٣</mn></mroot></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mroot><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٣</mn></mroot></mrow></math>\`.

المعطى هنا هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` نفسه، فلا نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>\` مرة أخرى. نكتب الجذر التكعيبي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\`؛ قاعدة القوة والسلسلة تعطي مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">[</mo><mrow><mn dir="ltr">٣</mn><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow><mo stretchy="true" fence="true">]</mo></mrow></mfrac></math>\`، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون المدخل موجبًا. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mo>(</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٧</mn><mo>)</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn><mo>)</mo></mrow><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">هـ</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mfrac><mrow><mn dir="ltr">١٥</mn></mrow><mrow><mn dir="ltr">١٢</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p053-q8
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٥٣ · السؤال ٨
kicker: قاعدة السلسلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٥٣، السؤال ٨
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`.

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\` ضمنيًا: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mo>×</mo><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` غير الصفرية يجوز القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::



:::mcq
id: math-kamel-u1-p052-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٥٢ · البند ٣
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٢ · البند ٣ · ٢٠١٩ دور ثاني
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`.

نفتح المربع؛ مجموع مربعي الجيب وجيب التمام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وضعف حاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ ونضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، مشتقة الزاوية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p054-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ١
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ١ · ٢٠٢٣ الدورة الثالثة
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، لذلك نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` المعطاة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٥</mn><mo>)</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>(</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٤</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p054-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٢
kicker: صياغة تعليمية معدّلة
reference: السؤال، الصورة، · المفتاح / الحل · صياغة تعليمية معدّلة
question: ليكن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` اقترانًا موجبًا وقابلًا للاشتقاق على \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>\`، بحيث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` لكل \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. فما قيمة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢٤</mn></mfrac></mrow></math>\`
explanation:
مدخل الاقتران هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`. نريد المشتقة عند المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، فنوجد أولًا قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` الموافقة له.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٨</mn><mo>⟹</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نعوّض بهذه القيمة في العلاقة. نختار الجذر الموجب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` موجب كما نص السؤال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نستخدم قاعدة السلسلة مرتين: نشتق التربيع الخارجي، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، ثم مدخله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mtext> </mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>⋅</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٨</mn><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢٤</mn></mfrac></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p054-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٣
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٣ · ٢٠٢٤ دور ثاني
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msqrt><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn></mrow></msqrt></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msqrt><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn></mrow></msqrt></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ص</mi></mrow><mrow><mo stretchy="true" fence="true">[</mo><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow><mo stretchy="true" fence="true">]</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi></mrow><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mfrac></mrow></math>\`، لأن مشتقة الجذر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mtext dir="rtl">المدخل</mtext></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi></mrow><mrow><msqrt><mrow><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn></mrow></msqrt></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p054-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٤
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٤ · تجريبي نابلس ٢٠٢٠
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ك</mi><mi mathvariant="normal">م</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">م</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٨٥</mn></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فإن قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi></mrow></math>\` تساوي:
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ك</mi><mi mathvariant="normal">م</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">م</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٨٥</mn></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`؛ مشتقتها بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mo>+</mo><msup><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`، لأن السالبين يتلاشيان. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`، ومشتقة كم بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`. نضرب المشتقات الثلاث حسب مسار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ص</mi><mo>←</mo><mi mathvariant="normal">ع</mi></mrow><mo>←</mo><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mi mathvariant="normal">م</mi></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">م</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>)</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ك</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٨٥</mn></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٤</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ك</mi></mrow><mrow><mo>=</mo><mn dir="ltr">١٧</mn><mi mathvariant="normal">ك</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p054-r5
title: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٥
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٥ · تجريبي بيت لحم ٢٠٢٠
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p054-r6
title: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٦
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٦ · تجريبي شرق غزة ٢٠٢٠
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow><mrow><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`، وقسمة قوتين للأساس نفسه تطرح أسّيهما. لذلك نحول مدخل اللوغاريتم أولًا، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><msqrt><mtext dir="rtl">س</mtext></msqrt><mrow><mn dir="ltr">٨</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac><msup><mtext dir="rtl">س</mtext><mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac><msup><mtext dir="rtl">س</mtext><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></math>
\`\`\`



لو حاصل الضرب مجموع اللوغاريتمين، ولو القوة يخرج الأس معاملًا. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mn dir="ltr">٨</mn></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mn dir="ltr">٨</mn></mrow></math>\` ثابت، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p054-r7
title: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٧
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٤ · البند ٧ · تجريبي الوسطى ٢٠١٩
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ص</mi><mo>−</mo><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، فماذا تساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، لذلك نشتق العلاقة ضمنيًا. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ص</mi></mrow></math>\` تستخدم قاعدة الضرب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ص</mtext><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نجمع حدي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\` بأخذها عاملًا مشتركًا، ثم ننقل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi></mrow></math>\` للطرف الآخر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ص</mtext></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يكون المعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\` غير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mo>−</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ص</mi></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؛ مشتقتها بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mrow></math>\`. نضرب في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">ع</mtext></mrow><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">س</mtext></mrow></mfrac><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p055-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ١
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ١ · تجريبي الوسطى ٢٠١٩
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\`
- [x] option-3 | صفر
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؛ مجال الظل متحقق لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msup><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow></mfrac><mo>×</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">π</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p055-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ٢
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ٢ · تجريبي قباطية ٢٠١٩
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تساوي:
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p055-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ٣
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ٣ · تجريبي الخليل ٢٠١٩
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ع</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><msup><mi mathvariant="normal">د</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">١٢٨</mn></mrow></math>\`، فإن قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` تساوي:
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢٨</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٢</mn></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ع</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><msup><mi mathvariant="normal">د</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">١٢٨</mn></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ بقاعدة السلسلة نضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\`، في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` الثابتة. عند الاشتقاق الثاني تتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` فقط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">٤</mn><mo>)</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صً</mi><mo>=</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نساويها بالقيمة المعطاة ونأخذ الجذر الموجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">١٢٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p055-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ٤
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ٤ · خارجي
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></msup><mo>+</mo><mn dir="ltr">٩</mn><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` مضروبة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، بقاعدة السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٥</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`



عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`؛ لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وتصبح القوتان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mi mathvariant="normal">ع</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">ع</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ع</mtext><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">ع</mtext><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



إذن الخيار الثاني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` على المدخلات الموجبة التي تحددها العلاقة. لا تحدد المعطيات قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على المدخلات السالبة.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p055-r5
title: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ٥
kicker: الكامل، الوحدة الأولى · الصورة، ص ٥٥ · البند ٥ · خارجي
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">π</mi><mi mathvariant="normal">ع</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">π</mi></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">π</mi><mi mathvariant="normal">ع</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mi mathvariant="normal">π</mi><mi mathvariant="normal">ع</mi></mrow></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">π</mi></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`؛ نستخدم هذه القيم في قاعدة السلسلة. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">π</mi><mi mathvariant="normal">ع</mi><mo>)</mo><mo>)</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">π</mi><mi mathvariant="normal">ع</mi><mo>)</mo><mi mathvariant="normal">π</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">π</mi><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::exam-question
id: math-kamel-u1-p056-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ١
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>×</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فأوجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ل</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` واقتران مركب. نستخدم مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`؛ والأخيرة تضرب في مشتقة مدخلها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">س</mtext><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` يكون المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">١٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p056-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ٢
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، فأوجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`.

قاعدة القوة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` مكان مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٣</mn><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><msup><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p056-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ٣
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ل</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، جد معادلة المماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
المماس يحتاج نقطة وميلًا، وميله يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند نقطة التماس. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يكون المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">ل</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مشتقة المركب تساوي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` عند المدخل مضروبة في مشتقة المدخل، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نستخدم النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` والميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p056-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ٤
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. ومن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>×</mo><mn dir="ltr">٣</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p056-r5
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ٥
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`. في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` توجد ثلاث طبقات: مكعب، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. نشتقها بالترتيب من الخارج إلى الداخل. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>(</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p056-r6
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ٦
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، وجذراها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>±</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`. في المركب نشتق الخارجي عند قيمة المدخل الداخلي، ثم نضرب في مشتقة الداخلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>)</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p056-r7
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ٧
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١٣</mn></mrow></msqrt></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
solution:
نقسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، ثم نشتق بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">ع</mtext></mrow><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">س</mtext></mrow></mfrac><mo>=</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow></math>\`؛ مشتقتها بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`. نضربها بمشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` وفق قاعدة السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">ص</mtext></mrow><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">س</mtext></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mtext dir="rtl">ع</mtext><mo>+</mo><mn dir="ltr">١٣</mn></mrow></msqrt></mrow></mfrac><mfrac><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">ع</mtext></mrow><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">س</mtext></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` أولًا، ثم الجذر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢٧</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mtext dir="rtl">ع</mtext><mo>+</mo><mn dir="ltr">١٣</mn></mrow></msqrt><mo>=</mo><msqrt><mrow><mn dir="ltr">٣٦</mn><mo>+</mo><mn dir="ltr">١٣</mn></mrow></msqrt><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">ص</mtext></mrow><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">س</mtext></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>⋅</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mn dir="ltr">٣٦</mn><mn dir="ltr">١٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٨</mn><mn dir="ltr">٧</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p056-r9
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ٩
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`. المطلوب المشتقة الثانية للمركب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

المركب يعني وضع قيمة الاقتران الداخلي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` داخل الاقتران الخارجي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



قاعدة السلسلة: نشتق القوة الخارجية، ثم نضرب بمشتقة ما داخل القوس؛ لأن القوس نفسه يتغير مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



لإيجاد المشتقة الثانية نشتق حاصل الضرب: مشتقة الأول في الثاني، ثم الأول في مشتقة الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>⋅</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>⋅</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` في كل موضع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٤٩</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٩٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٩٤</mn><mo>+</mo><mn dir="ltr">٦٧٢</mn><mo>=</mo><mn dir="ltr">٩٦٦</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩٦٦</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p056-r10
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ١٠
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المماس لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يمر بالنقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فاحسب قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`.
solution:
المطلوب قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بحيث تقع النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` على المماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

نحتاج نقطة التماس وميل المماس. المشتقة عند النقطة تساوي ميل المماس هناك.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup><mspace width="2em" /><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup><mo>=</mo><msup><mn dir="ltr">٣</mn><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`



نستخدم السلسلة لأن المقدار داخل القوة ليس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` وحده. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٧</mn><mo>⋅</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mrow></math>
\`\`\`



معادلة مستقيم ذي ميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` ويمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow><mo>,</mo><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٢٧</mn><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٢</mn></mfrac></mstyle><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



النقطة المطلوبة تقع على المماس، ولذلك نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢٧</mn><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٢</mn></mfrac></mstyle><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نضرب الطرفين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٢٧</mn></mfrac></math>\`، ثم نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p056-r11
title: الكامل، الوحدة الأولى · الصورة، ص ٥٦ · البند ١١
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mroot><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فاحسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>→</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٧</mn><mo>+</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٧</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mn dir="ltr">٦</mn><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow></math>\`.
solution:
المطلوب نهاية فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` قرب العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`.

تعريف المشتقة هو نهاية فرق القيم مقسومًا على الزيادة؛ لذا فصل العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` في المقام يحوّل المطلوب إلى مشتقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mstyle><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">هـ</mi></mfrac><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mstyle><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحدد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي تجعل مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. نكتب الجذر التكعيبي في صورة قوة لتسهيل الاشتقاق.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></math>
\`\`\`



بقاعدة السلسلة، مشتقة الطرف الأيسر هي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند المدخل مضروبة في مشتقة المدخل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mo>⋅</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mstyle><msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mstyle><mroot><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mroot><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mrow></math>
\`\`\`



نقسم الطرفين على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`، ثم نرجع إلى النهاية المطلوبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mstyle><mo>⋅</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mstyle><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٨</mn></mfrac></mstyle></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٨</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p057-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٥٧ · البند ١
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
المطلوب الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، معطى أن مشتقة المركب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



في المركب، الاقتران الداخلي هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` والخارجي هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ لذا بقاعدة السلسلة:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` والقيمة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦٤</mn><mo>+</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p057-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٥٧ · البند ٤
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">ظا</mtext><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ن</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>×</mo><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` ثابت، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mrow><msup><mi mathvariant="normal">π</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`، أوجد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٤</mn><mrow><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">ن</mi></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. نريد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` من قيمة المشتقة المعطاة.

لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، نستخدم السلسلة. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ع</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`



نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\` ضمنيًا؛ مشتقة ثابت تساوي صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>+</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mi mathvariant="normal">ع</mi><mi mathvariant="normal">س</mi></mfrac></mrow></math>
\`\`\`



عند النقطة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\` والمشتقة محددة، يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ ومن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">ج</mi><mi mathvariant="normal">ع</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ج</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ع</mi></mrow><mi mathvariant="normal">ج</mi></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٨</mn><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><msup><mi>π</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">١٦</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow><mi mathvariant="normal">ج</mi></mfrac><mo>=</mo><mo>−</mo><mfrac><msup><mi>π</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><msup><mi>π</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ج</mi></mfrac><mo>=</mo><mo>−</mo><mfrac><msup><mi>π</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">π</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` غير صفر، فينتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p057-r5
title: الكامل، الوحدة الأولى · الصورة، ص ٥٧ · البند ٥
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد معادلة المماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\` عند النقطة الواقعة عليه وإحداثيها السيني يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`.
solution:
نحتاج نقطة التماس وميله عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`.

قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` تأتي بالتعويض في الاقتران نفسه، أما ميل المماس فيأتي بالتعويض في المشتقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ص</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mrow><msqrt><mn dir="ltr">٢</mn></msqrt><mo>⋅</mo></mrow><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ص</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mi mathvariant="normal">ع</mi></mfrac></math>\`؛ نستخدمها لأن داخل اللوغاريتم اقتران في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، ويجب أن يكون موجبًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ع</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mrow><msqrt><mn dir="ltr">٢</mn></msqrt><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نستخدم صيغة المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">١</mn><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow></mrow></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p058-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٥٨ · البند ١
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mtable columnalign="right right" columnspacing="1em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` قابلاً للاشتقاق عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` ما قيم الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`؟ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ثم مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

وجود المشتقة عند نقطة الفصل يقتضي اتصال الاقتران هناك وتساوي المشتقتين الجانبيتين.

أولًا نساوي قيمتي الفرعين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لتحقيق الاتصال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



مشتقة الفرع الأول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الثاني</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`. نساويهما عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في معادلة الاتصال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



في المركب نقيّم الاقتران الداخلي أولًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` موجبة؛ إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة المقام</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` تلغي إشارة اشتقاق المقلوب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



المدخل الناتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يقع في الفرع الأول من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



بقاعدة السلسلة نضرب مشتقة الخارجي عند المدخل في مشتقة الداخلي.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>⋅</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`، والمشتقة المطلوبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p058-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٥٨ · البند ٢
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت معادلة المماس لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، ومعادلة العمودي على المماس لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mo>∘</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
solution:
نريد مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">هـ</mi><mo>∘</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.

المشتقة تساوي ميل المماس. نكتب معادلة مماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mi mathvariant="normal">م</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>\` لقراءة الميل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نقطة التماس تقع على المستقيم وعلى المنحنى، لذلك نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` لنجد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



ميل العمودي المعطى لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`. حاصل ضرب ميل المماس وميل العمودي عليه يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



نستخدم السلسلة لأن المطلوب مشتقة مركب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>∘</mo><mi mathvariant="normal">ق</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>∘</mo><mi mathvariant="normal">ق</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>⋅</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p058-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٥٨ · البند ٤
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
نريد الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` من مشتقة المركب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` مضروبة في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`؛ لذلك:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



بقاعدة السلسلة نقيم مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi>π</mi></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi>π</mi></mrow><mn dir="ltr">١٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



نساويها بالقيمة المعطاة ونضرب الطرفين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٦</mn><mi mathvariant="normal">π</mi></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">أ</mi><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p058-r5
title: الكامل، الوحدة الأولى · الصورة، ص ٥٨ · البند ٥
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` دالة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` دالة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

نستخدم السلسلة: نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mspace width="2em"/><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نشتق الكسر بقاعدة القسمة: مشتقة البسط في المقام، ناقص البسط في مشتقة المقام، على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نشتق القوة الخارجية ثم نضرب في مشتقة الكسر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mfrac><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، وهي لا تخالف الشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><msub><mo fence="false" stretchy="true" minsize="2.4em" maxsize="2.4em">∣</mo><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup></mrow></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><msub><mo fence="false" stretchy="true" minsize="2.4em" maxsize="2.4em">∣</mo><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٨</mn></mfrac><mo>⋅</mo><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p058-r6
title: الكامل، الوحدة الأولى · الصورة، ص ٥٨ · البند ٦
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، فجد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`.
solution:
نريد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`.

وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` في المقام يفرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">أ</mi></mfrac></mrow></math>
\`\`\`



بقاعدة السلسلة:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mfrac><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">أ</mi><mo fence="true">)</mo></mrow><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>+</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></math>\` ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`، وهو غير صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



للمربع القيمة نفسها عند العدد ومقابله؛ لذلك نأخذ الإشارتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>±</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، وكلاهما مسموح.
:::


:::exam-question
id: math-kamel-u1-p059-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٥٩ · البند ١
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mroot><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></mrow></math>\`.
solution:
 المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`.

نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mroot><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mroot><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، فإن النهاية المطلوبة هي سالب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وفق تعريف المشتقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mo>−</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نكتب الجذر على صورة قوة ثم نشتق بقاعدة السلسلة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><mn dir="ltr">٣</mn><mrow><mo stretchy="false">(</mo><msup><mn dir="ltr">٨</mn><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo stretchy="false">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



نشتق مربع المركب من الخارج إلى الداخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p059-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٥٩ · البند ٢
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، جد قيمة/قيم الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mo>∘</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` بحيث تكون مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">هـ</mi><mo>∘</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٦</mn></mfrac></math>\` صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



نشتق الكسر بقاعدة القسمة؛ المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` موجب دائمًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نحسب قيمة الاقتران الداخلي ومشتقته عند النقطة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><msqrt><mn dir="ltr">٣</mn></msqrt></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`



الأخير غير صفر لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. وبقاعدة السلسلة لا يصبح حاصل الضرب صفرًا إلا إذا كانت مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac></math>\` صفرًا.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mrow><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mfrac><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الكسر يساوي صفرًا إذا كان بسطه صفرًا ومقامه غير صفر.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>±</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p059-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٥٩ · البند ٣
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`.
solution:
المطلوب المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.  المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` يمنع القسمة على صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



نستخدم قاعدة القسمة لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` كسر؛ ونستخدم قاعدة الضرب في بسطه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></msup><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، والأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mi>π</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mo>−</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mrow><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mi>π</mi><mo stretchy="false">)</mo></mrow></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p059-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٥٩ · البند ٤
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msqrt><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\`، ما قيمة/قيم الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` من مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



قاعدة السلسلة هنا تشتق الاقتران الخارجي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، فتنتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></math>
\`\`\`



لوجود مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` الحقيقية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` نحتاج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ أما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` فيجعل المركب ثابتًا ومشتقته صفرًا فلا يحقق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msqrt><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msqrt><mo>⋅</mo><mfrac><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></mfrac></mrow></math>
\`\`\`



نختصر الجذر لأنه غير صفر في الحالة المقبولة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، وهي تحقق شرط الجذر.
:::


:::exam-question
id: math-kamel-u1-p059-r5
title: الكامل، الوحدة الأولى · الصورة، ص ٥٩ · البند ٥
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></msup><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mn dir="ltr">٢</mn><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`، والمطلوب النهاية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></math>\`.

بالتعويض يصبح البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` والمقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`. نستخدم لوبيتال: في صورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`، نشتق البسط والمقام كلًا على حدة، لا نشتق الكسر بقاعدة القسمة.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">{</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">}</mo></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">{</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">}</mo></mrow></msup><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mrow></msup><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow><mrow><mrow><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` كثير حدود، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` متصلان، والمقام الجديد يقترب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` غير الصفر؛ يجوز التعويض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٠</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٠</mn></msup></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">١</mn></mfrac><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p059-r6
title: الكامل، الوحدة الأولى · الصورة، ص ٥٩ · البند ٦
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mtable columnalign="right right" columnspacing="1em"><mtr><mtd><mrow><mn dir="ltr">١١</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ل</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
solution:
المطلوب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ل</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



يجب فحص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`؛ لأنها نقطة تبدل الفرعين. أولًا نتحقق من الاتصال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١١</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٢٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><msup><mn dir="ltr">٤</mn><mo>+</mo></msup></mrow></munder><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٨</mn></mrow></math>
\`\`\`



مشتقتا الفرعين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` متساويتان، لذلك المشتقة موجودة هناك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">هـ</mi><mo>−</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">هـ</mi><mo>+</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`



نحسب مشتقة الداخلي ثم نطبق السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١١</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٦</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٦</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p059-r7
title: الكامل، الوحدة الأولى · الصورة، ص ٥٩ · البند ٧
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>→</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٧</mn><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>−</mo><mn dir="ltr">٧</mn><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mn dir="ltr">٥</mn><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow></math>\`؟
solution:
نرمز الزيادة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، ونضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`. المطلوب نهاية فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` على جانبي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi></mrow></math>\` ونطرحها في البسط؛ بذلك تتكون نسبتان تشبهان تعريف المشتقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mrow><mo fence="true">[</mo><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">هـ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">هـ</mi></mrow></mfrac><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نخرج العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٥</mn></mfrac></math>\` لجعل مقام النسبة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">هـ</mi></mrow></math>\`، ونبدل إشارتَي البسط والمقام في الثانية لجعل مقامها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">هـ</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٥</mn></mfrac><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">هـ</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mrow><mo fence="true">[</mo><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">هـ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi></mrow><mrow><mo>−</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">هـ</mi></mrow></mfrac><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



كل نسبة تؤول إلى مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">أ</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٥</mn></mfrac><mrow><mo fence="true">[</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">أ</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">أ</mi><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٥</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٢٨</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢٨</mn><mn dir="ltr">٥</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p059-r8
title: الكامل، الوحدة الأولى · الصورة، ص ٥٩ · البند ٨
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>+</mo><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، والمعطى علاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بحيث يصبح مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` مساويًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">المدخل</mtext><mo>×</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\` بقاعدة السلسلة. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` هي نفسها لأن مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، خاصية لوغاريتم القوة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></mrow></math>\`، ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">هـ</mi><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٠</mn></msup><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نقسم الطرفين على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٦</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p060-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٦٠ · البند ١
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">٣</mn></mrow></mrow></munder><mrow><mfrac><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></mfrac></mrow></mrow></mrow></math>\`، علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow><mrow><mi mathvariant="normal">π</mi></mrow></mfrac></mrow></math>\`.
solution:
 المطلوب نهاية مربع المركب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٣</mn></mrow></math>\`.

نحسب قيمة الداخلي ثم قيمة الخارجي.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



إذن البسط والمقام يقتربان من الصفر. نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، ونحلل المقام إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٣</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>⋅</mo><mfrac><mn dir="ltr">١</mn><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`



النسبة الأولى هي تعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، والعامل الثاني يؤول إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` بالسلسلة؛ الإشارتان السالبتان تتلاشيان.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mi>π</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٩</mn></mfrac><mo>⋅</mo><mfrac><msqrt><mn dir="ltr">٣</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mrow><mi>π</mi><msqrt><mn dir="ltr">٣</mn></msqrt></mrow><mn dir="ltr">١٨</mn></mfrac></mrow></math>
\`\`\`



نشتق مربع المركب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mfrac><msqrt><mn dir="ltr">٣</mn></msqrt><mi>π</mi></mfrac><mfrac><mrow><mi>π</mi><msqrt><mn dir="ltr">٣</mn></msqrt></mrow><mn dir="ltr">١٨</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٨</mn><mn dir="ltr">١٨</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p060-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٦٠ · البند ٢
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>،</mo><mtext dir="rtl">هـ</mtext></mrow></math>\` اقترانين قابلين للاشتقاق، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mroot><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، جد الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` من علاقة المركب ومشتقاته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

بقاعدة السلسلة، مشتقة المركب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` هي مشتقة الخارجي عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، مضروبة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mroot><mrow><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٣</mn></mroot><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نشتق التعبير الآخر للمركب بقاعدة القسمة، أما الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\` فمشتقته صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢٧</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p060-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٦٠ · البند ٣
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، فجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mo>∘</mo><mi mathvariant="normal">ل</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

![الرسم الأصلي لمنحنى ق′(س) ومماسه عند س=١؛ يقطع المماس محور السينات عند −٣ ويصنع زاوية ٤٥°.](assets/lessons/curriculum-evidence/8839b6a33a51e96e848b.webp)
solution:
المطلوب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>∘</mo><mi mathvariant="normal">ل</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

الرسم ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` وليس ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`. ميل مماس هذا الرسم يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\`. زاوية المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">٤٥</mn><mo>°</mo></msup></math>\`، لذلك ميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

![الرسم الأصلي لق′ ومماسها](assets/lessons/curriculum-evidence/8839b6a33a51e96e848b.webp)



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><msup><mn dir="ltr">٤٥</mn><mo>∘</mo></msup><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المماس يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، فتكون معادلته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` نحصل على ارتفاع رسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` من تعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` بالسلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



مشتقة المركب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>∘</mo><mi mathvariant="normal">ل</mi></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` عند مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\`، مضروبة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p060-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٦٠ · البند ٤
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٧</mn><msup><mi mathvariant="normal">ك</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؟
solution:
المطلوب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٧</mn><mrow><msup><mi mathvariant="normal">ك</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

نضرب العلاقة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`، وهو غير صفر على مجالها، ونستخدم فرق المربعين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ك</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ك</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mspace width="2em" /><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يتساوى المدخلان، ولذلك نحصل على قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نشتق الطرفين بالسلسلة. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`، فتجعل الحد الثاني موجبًا.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ك</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>+</mo><mfrac><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><msup><mi mathvariant="normal">ك</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ك</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">ك</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ك</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٧</mn></mfrac></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">١٤</mn><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><msup><mi mathvariant="normal">ك</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٧</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p060-r5
title: الكامل، الوحدة الأولى · الصورة، ص ٦٠ · البند ٥
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">ك</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">٢</mn></mrow></mrow></munder><mrow><mfrac><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup><mo>×</mo><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></mrow></math>\`.
solution:
المطلوب نهاية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` تجمع اقترانًا أسيًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

نستخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` من العلاقة باستخدام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">{</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true" fence="true">}</mo></mrow></msup><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يكون العامل الأسي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، والنهاية هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup></mrow></math>
\`\`\`



قاعدة الضرب: نشتق الأول ونترك الثاني، ثم نترك الأول ونشتق الثاني. مشتقة الأس تضرب الاقتران الأسي.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p060-r6
title: الكامل، الوحدة الأولى · الصورة، ص ٦٠ · البند ٦
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابلين للاشتقاق وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`. المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

نشتق الهوية بالسلسلة؛ مشتقة الطرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



صيغة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` معطاة لأي مدخل؛ نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ل</mi></mrow></math>\` مدخلها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



لكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` بحسب المعطى، لذلك:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` موجب دائمًا، فيجوز قسمة الطرفين عليه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p061-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٦١ · البند ٢
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقترانان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابلين للاشتقاق، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mroot><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` من علاقة المركب ومشتقاته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

بقاعدة السلسلة، مشتقة المركب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` هي مشتقة الخارجي عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، مضروبة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mroot><mrow><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٣</mn></mroot><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



قاعدة القسمة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` على مربع المقام. نطبقها على التعبير الآخر للمركب، أما الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\` فمشتقته صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mi mathvariant="normal">هـ</mi><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo></mrow><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢٧</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p061-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٦١ · البند ٣
question: قاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ع</mi></mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، جد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؟
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` تعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، لذلك نستخدم السلسلة مع قاعدة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ع</mi></mrow><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



نساويها بالمشتقة المعطاة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p072-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٧٢ · البند ١
question: المثلثيات مع الاشتقاق الضمني وقاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فأوجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`.
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` من علاقة تجمع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، دون عزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` أولًا.

نستخدم الاشتقاق الضمني: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` تتغير مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، فمشتقتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\`. داخل الجيب حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>\`، فتكون مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نوزع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` ثم نجمع حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\` في جهة واحدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mi mathvariant="normal">ص</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mi mathvariant="normal">ص</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\` عاملًا مشتركًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><mo stretchy="false">]</mo><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mi mathvariant="normal">ص</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نقسم بشرط ألا يكون معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\` صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ص</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



هذه الصيغة للمشتقة المنتهية عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p072-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٧٢ · البند ٣
question: المثلثيات مع الاشتقاق الضمني وقاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة المماس لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\` عند النقطة أو النقاط التي يكون المماس عندها أفقياً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\`.
solution:
المطلوب معادلات المماسات الأفقية في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mfrac><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

المماس الأفقي ميله صفر، والمشتقة هي الميل؛ لذلك نحل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></mrow></math>\` لإخراج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` عاملًا مشتركًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



في الفترة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، ولذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` ولا يمكن أن يساوي صفرًا. يلزم:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نحسب ارتفاع نقطة التماس من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` نفسها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mn dir="ltr">٠</mn><mo>+</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mn dir="ltr">٠</mn><mo>=</mo><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mrow></math>
\`\`\`



المماس الأفقي عند ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\` معادلته:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p072-r6
title: الكامل، الوحدة الأولى · الصورة، ص ٧٢ · البند ٦
question: المثلثيات مع الاشتقاق الضمني وقاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، فاحسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.

نستخدم قاعدة الضرب. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></mrow></mrow></mrow></math>\`، لأن الزاوية تتغير مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mo>−</mo><mfrac><mi>π</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mi>π</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mi>π</mi><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`



يشترط أيضًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mi mathvariant="normal">س</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi>π</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p072-r7
title: الكامل، الوحدة الأولى · الصورة، ص ٧٢ · البند ٧
question: المثلثيات مع الاشتقاق الضمني وقاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فما قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي تجعل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؟
solution:
المطلوب قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` التي تجعل المشتقة الثانية صفرًا.

نشتق مرتين؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



ضمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` تتحقق هذه القيمة عند زاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٣</mn></mfrac></math>\` فقط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p072-r9
title: الكامل، الوحدة الأولى · الصورة، ص ٧٢ · البند ٩
question: المثلثيات مع الاشتقاق الضمني وقاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mrow><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">د</mi></mrow></mfrac></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">د</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`، والمشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

المقام عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`، فيلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`. نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ص</mi></mrow></math>\` ضمنيًا؛ فتظهر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\` مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ص</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ص</mi><mtext> </mtext><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">د</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ج</mi><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">د</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الحدان أجس متعاكسان فيحذفان.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ص</mi><mtext> </mtext><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">د</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mfrac><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. نستعمل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ص</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>+</mo><mfrac><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">د</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` غير الصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi><mo>=</mo><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi></mrow><mo>−</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">د</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p073-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٧٣ · البند ٢
question: المثلثيات مع الاشتقاق الضمني وقاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد النقط الواقعة على منحنى العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mo>+</mo><msqrt><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، بحيث يكون المماس عندها عمودياً على المستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.
solution:
المطلوب نقاط المنحنى التي يكون مماسها عموديًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi></mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.

نكتب المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>\`، فميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`. ميل أي مستقيم عمودي عليه هو المقلوب السالب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.

نبحث عن مماس ذي ميل منتهٍ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، لذلك نستعمل مشتقات الجذور حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">ص</mi></msqrt></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ص</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` بالسلسلة؛ نشتق العلاقة ضمنيًا ثم نفحص النقطة الناتجة في الأصل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></mfrac><mo>+</mo><mfrac><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ص</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mo>−</mo><mfrac><msqrt><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><msqrt><mi mathvariant="normal">س</mi></msqrt></mfrac></mrow></math>
\`\`\`



نساوي ميل المماس بالقيمة المطلوبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><msqrt><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><msqrt><mi mathvariant="normal">س</mi></msqrt></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>=</mo><mn dir="ltr">٤</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></math>
\`\`\`



نعوض ذلك في العلاقة الأصلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>+</mo><mn dir="ltr">٤</mn><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><msqrt><mi mathvariant="normal">س</mi></msqrt><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



ثم نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`



الإجابة: النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١٥</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p073-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٧٣ · البند ٣
question: المثلثيات مع الاشتقاق الضمني وقاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت المسافة التي يقطعها جسم يتحرك في خط مستقيم بعد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\` ثانية من بدء الحركة تعطى بالقانون \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><msup><mtext dir="rtl">جا</mtext><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>∈</mo><mo stretchy="true" fence="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">[</mo></mrow></math>\`، جد السرعة والتسارع عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٠٫٣٦</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ن</mi></mrow><mo>&lt;</mo><mi mathvariant="normal">π</mi></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٠٫٣٦</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`. المطلوب السرعة والتسارع.

لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></math>\` في الربع الأول، نأخذ قيمتي الجيب وجيب التمام الموجبتين.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠٫٣٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠٫٦</mn></mrow></math>
\`\`\`



من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">θ</mi></mrow><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">θ</mi></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠٫٣٦</mn></mrow></msqrt><mo>=</mo><mn dir="ltr">٠٫٨</mn></mrow></math>
\`\`\`



السرعة هي مشتقة الإزاحة بالنسبة إلى الزمن. نشتق مربع الجيب بالسلسلة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>⋅</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠٫٦</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠٫٨</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٠٫٤٨</mn><mtext> </mtext><mrow><mfrac><mi mathvariant="normal">م</mi><mi mathvariant="normal">ف</mi></mfrac></mrow></mrow></math>
\`\`\`



التسارع هو مشتقة السرعة؛ نطبق قاعدة الضرب.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٠٫٦٤</mn><mo>−</mo><mn dir="ltr">٠٫٣٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠٫١٤</mn><mtext> </mtext><mrow><mfrac><mi mathvariant="normal">م</mi><msup><mi mathvariant="normal">ف</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٠٫٤٨</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٠٫١٤</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`. الإشارة الموجبة هنا توافق الاتجاه الموجب للحركة.
:::


:::exam-question
id: math-kamel-u1-p073-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٧٣ · البند ٤
question: المثلثيات مع الاشتقاق الضمني وقاعدة السلسلة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">أ</mi><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo stretchy="false">′′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فما قيمة أو قيم الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">م</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

نشتق مرتين، مع ضرب مشتقة الزاوية في كل اشتقاق للحد ذي الزاوية أس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٣</mn></msup><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بسالب الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٣</mn></msup><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحذف الحد المشترك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؛ السؤال يضمن أنها غير صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` عاملًا مشتركًا، ثم نحلل فرق المربعين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



حاصل الضرب صفر إذا كان أحد عوامله صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>∈</mo><mo stretchy="false">{</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">}</mo></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "قاعدة السلسلة",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة قاعدة السلسلة من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "60 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
