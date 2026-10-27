import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `:::exam-question
id: math-book-p022-ex1-a
title: الكتاب، ص ٢٠ · مثال ١، ميل المنحنى · متوسط
question: تطبيقات هندسية وفيزيائية
reference: [السؤال، النسخة المصورة، ص ٢٢](assets/lessons/mathematics/source-crops/math-book-p022-ex1-a-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p022-ex1-a-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد ميل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
ميل منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` هو ميل مماسه هناك، وتساويه المشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. لذلك نحسب المشتقة أولًا.

قاعدة القوة تضرب في الأس ثم تنقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



إذن الميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.
:::


:::exam-question
id: math-book-p022-ex1-b
title: الكتاب، ص ٢٠ · مثال ١، معادلة المماس · متوسط
question: تطبيقات هندسية وفيزيائية
reference: [السؤال، النسخة المصورة، ص ٢٢](assets/lessons/mathematics/source-crops/math-book-p022-ex1-b-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p022-ex1-b-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`؛ ميل المنحنى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يساوي قيمة المشتقة هناك.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٣</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نحسب نقطة التماس ونستخدم معادلة المستقيم بنقطة وميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٨</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

نرتب المعادلة الناتجة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p022-ex1-c
title: الكتاب، ص ٢٠ · مثال ١، معادلة العمودي · متوسط
question: تطبيقات هندسية وفيزيائية
reference: [السؤال، النسخة المصورة، ص ٢٢](assets/lessons/mathematics/source-crops/math-book-p022-ex1-c-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p022-ex1-c-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة العمودي على المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`؛ ميل المنحنى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يساوي قيمة المشتقة هناك.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٣</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نحسب نقطة التماس ونستخدم معادلة المستقيم بنقطة وميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

نضرب المعادلة كلها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ص</mi></mrow><mo>−</mo><mn dir="ltr">٤٨</mn></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`. ثم ننقل الحدود للطرف الأيسر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤٩</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ص</mi></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤٩</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p023-ex2
title: الكتاب، ص ٢١ · مثال ٢
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٣، مثال ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، يصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\` مع الاتجاه الموجب لمحور السينات، أثبت أن العمودي على المماس عند نقطة المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.
solution:
المعطى: المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، يصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\` مع الاتجاه الموجب لمحور السينات، أثبت أن العمودي على المماس عند نقطة المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

ميل المستقيم هو ظل زاوية ميله، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`؛ قاعدة القوة تعطي مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`، ثم نساويها بميل المماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

من المعادلة السابقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>±</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`. نستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` لأن السؤال يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. العمودي ميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ نكتب معادلته ونعوّض بالأصل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: العمودي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` يمر بالأصل.
:::


:::exam-question
id: math-book-p023-ex3
title: الكتاب، ص ٢١ · مثال ٣ · متقدم
question: تطبيقات هندسية وفيزيائية
reference: [السؤال، النسخة المصورة، ص ٢٣](assets/lessons/mathematics/source-crops/math-book-p023-ex3-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p023-ex3-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mfrac></mrow></math>\` عند النقطة التي إحداثيها السيني يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mfrac><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`، نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`. قاعدة الضرب تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow><mo>+</mo><mrow><mtext dir="rtl">الأول</mtext><mo>×</mo><mtext dir="rtl">مشتقة الثاني</mtext></mrow></mrow></math>\`؛ ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup><mo>=</mo><mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\` بالسلسلة. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></mrow></math>\`، ثم نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` عاملًا مشتركًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo></mrow></mrow></math>
\`\`\`

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` تتساوى قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ومشتقتها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></math>
\`\`\`

نكتب المماس ثم نبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`.
:::


:::exam-question
id: math-book-p024-ex4
title: الكتاب، ص ٢٢ · مثال ٤
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٤، مثال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\` يمس منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، جد نقطة/نقط التماس.
solution:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\` يمس منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

المشتقة عند نقطة التماس تساوي ميل المماس؛ نختارها لأن المستقيم المعطى مماس. قاعدة القوة تعطي المشتقة بضرب المعامل في الأس ثم إنقاص الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

ميل المستقيم سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ نساويه بمشتقة المنحنى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` ثم المقطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` من المستقيم.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`

النتيجة: نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p024-ex5-a
title: الكتاب، ص ٢٢ · مثال ٥، الفرع ١
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٤، مثال ٥، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تحرك جسم على خط مستقيم بحيث إن بعده عن نقطة ثابتة يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالمتر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني. جد السرعة المتوسطة للجسم في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
solution:
المعطى: تحرك جسم على خط مستقيم بحيث إن بعده عن نقطة ثابتة يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالمتر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني.

المطلوب سرعة متوسطة؛ نحسب تغير الموقع خلال الفترة ولا نحتاج الاشتقاق. الإشارة السالبة تعني تناقص الموقع في الاتجاه المختار.

السرعة المتوسطة فرق الإزاحتين مقسومًا على فرق الزمنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">٨١</mn><mo>+</mo><mn dir="ltr">٧</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٤٧</mn></mrow></mrow></math>
\`\`\`

نطرح بالترتيب نفسه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤٧</mn><mo>−</mo><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢٣</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-book-p024-ex5-b
title: الكتاب، ص ٢٢ · مثال ٥، الفرع ٢
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٤، مثال ٥، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تحرك جسم على خط مستقيم بحيث إن بعده عن نقطة ثابتة يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالمتر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني. جد تسارع الجسم عندما يعكس اتجاه حركته.
solution:
المعطى: تحرك جسم على خط مستقيم بحيث إن بعده عن نقطة ثابتة يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالمتر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

تنعكس الحركة حين تتغير إشارة السرعة؛ نساوي مشتقة الإزاحة بالصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

الصفر لحظة بدء الحركة؛ حول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` تتبدل الإشارة، فنحسب التسارع هناك.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ت</mi><mo>(</mo><mn dir="ltr">٦</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٨</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p025-ex6-a
title: الكتاب، ص ٢٣ · مثال ٦، الفرع ١
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٥، مثال ٦، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسيًا إلى أعلى من نقطة على سطح الأرض، حيث إن بعده عن سطح الأرض يتحدد بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`: ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`: الزمن بالثواني.

![الجسم المقذوف رأسيًا من سطح الأرض وعلامة الارتفاع ١٥ م](assets/lessons/mathematics/source-crops/u1-book-p025-ex6-figure.webp)

جد أقصى ارتفاع يصله الجسم.
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/u1-book-p025-ex6-figure.webp)

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

عند أعلى نقطة تنعدم السرعة؛ نشتق الارتفاع ونحل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نعوّض بالزمن؛ ونضيف ارتفاع البداية إذا طلب الارتفاع عن الأرض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٢٠</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>×</mo><msup><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠٫٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-book-p025-ex6-b
title: الكتاب، ص ٢٣ · مثال ٦، الفرع ٢
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٥، مثال ٦، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسيًا إلى أعلى من نقطة على سطح الأرض، حيث إن بعده عن سطح الأرض يتحدد بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`: ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`: الزمن بالثواني.

![الجسم المقذوف رأسيًا من سطح الأرض وعلامة الارتفاع ١٥ م](assets/lessons/mathematics/source-crops/u1-book-p025-ex6-figure.webp)

جد سرعة الجسم وهو على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٥</mn><mi mathvariant="normal">م</mi></mrow></math>\` من سطح الأرض.
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/u1-book-p025-ex6-figure.webp)

السرعة هي مشتقة الارتفاع؛ نأخذ الأعلى موجبًا. يصل الجسم إلى الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\` أثناء الصعود ثم أثناء النزول. نساوي الارتفاع بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`، ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` لنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نحللها بعاملين حاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ومجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">١٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

نشتق الارتفاع ونعوّض بالزمنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` صعودًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` نزولًا.
:::


:::exam-question
id: math-book-p025-ex6-c
title: الكتاب، ص ٢٣ · مثال ٦، الفرع ٣
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٥، مثال ٦، الفرع ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسيًا إلى أعلى من نقطة على سطح الأرض، حيث إن بعده عن سطح الأرض يتحدد بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`: ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`: الزمن بالثواني.

![الجسم المقذوف رأسيًا من سطح الأرض وعلامة الارتفاع ١٥ م](assets/lessons/mathematics/source-crops/u1-book-p025-ex6-figure.webp)

جد المسافة التي قطعها الجسم خلال الثواني الأربعة الأولى.
solution:
![الجسم المقذوف رأسيًا من سطح الأرض وعلامة الارتفاع ١٥ م](assets/lessons/mathematics/source-crops/u1-book-p025-ex6-figure.webp)

نحسب المسافة الكلية بجمع طول الصعود وطول الهبوط. لا نكتفي بفرق الموقع النهائي والابتدائي؛ لأن الحركة تغير اتجاهها.

السرعة مشتقة الارتفاع، وتنعدم عند القمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نعوض في الارتفاع عند البداية والقمة والنهاية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٨٠</mn><mo>−</mo><mn dir="ltr">٨٠</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



طول الصعود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></math>\`، وطول الهبوط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></math>\`. كلاهما مسافة موجبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">المسافة</mtext><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`



إذن المسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-book-p026-ex7-a
title: الكتاب، ص ٢٤ · مثال ٧، الفرع ١
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٦، مثال ٧، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسيًا إلى أعلى من قمة برج بحيث إن ارتفاعه عن البرج بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`.

![الجسم المقذوف من قمة برج وأقصى ارتفاع ١٨٠ م عن الأرض](assets/lessons/mathematics/source-crops/u1-book-p026-ex7-figure.webp)

جد ارتفاع البرج علمًا بأن أقصى ارتفاع للجسم عن سطح الأرض يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
solution:
![الجسم المقذوف من قمة برج وأقصى ارتفاع ١٨٠ م عن الأرض](assets/lessons/mathematics/source-crops/u1-book-p026-ex7-figure.webp)

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يقيس الارتفاع فوق البرج بالمتر، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثانية. المشتقة تعطي معدل تغير الارتفاع مع الزمن، أي السرعة بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mtext dir="rtl">متر</mtext><mtext dir="rtl">ثانية</mtext></mfrac></math>\`. عند أعلى نقطة تتوقف الحركة الصاعدة لحظة قبل الهبوط؛ لذلك تكون السرعة صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` سالب؛ فالارتفاع يزيد قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` ثم ينقص بعدها، فتكون هذه القمة. نعوض لإيجاد الارتفاع فوق البرج عندها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٩٠</mn><mo>−</mo><mn dir="ltr">٤٥</mn><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></math>
\`\`\`



من الرسم أقصى ارتفاع عن الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`. وهو ارتفاع البرج مضافًا إليه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ارتفاع البرج</mtext><mo>=</mo><mn dir="ltr">١٨٠</mn><mo>−</mo><mn dir="ltr">٤٥</mn><mo>=</mo><mn dir="ltr">١٣٥</mn></mrow></math>
\`\`\`



ارتفاع البرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-book-p026-ex7-b
title: الكتاب، ص ٢٤ · مثال ٧، الفرع ٢
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٦، مثال ٧، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسيًا إلى أعلى من قمة برج بحيث إن ارتفاعه عن البرج بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`.

![الجسم المقذوف من قمة برج وأقصى ارتفاع ١٨٠ م عن الأرض](assets/lessons/mathematics/source-crops/u1-book-p026-ex7-figure.webp)

جد سرعة ارتطام الجسم بسطح الأرض.
solution:
![الجسم المقذوف من قمة برج وأقصى ارتفاع ١٨٠ م عن الأرض](assets/lessons/mathematics/source-crops/u1-book-p026-ex7-figure.webp)

نحتاج ارتفاع البرج لتحديد موضع الأرض. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يقيس الإزاحة من قمة البرج، وتكون السرعة مشتقته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`



عند القمة تنعدم السرعة؛ نعوض زمنها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٩٠</mn><mo>−</mo><mn dir="ltr">٤٥</mn><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></math>
\`\`\`



من الرسم أقصى ارتفاع عن الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ لذا ارتفاع البرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٨٠</mn><mo>−</mo><mn dir="ltr">٤٥</mn></mrow><mo>=</mo><mrow><mn dir="ltr">١٣٥</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`. عند الأرض تكون الإزاحة من قمة البرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">١٣٥</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٠</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">١٣٥</mn></mrow></math>
\`\`\`



ننقل للطرف نفسه ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`، ثم نحلل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٢٧</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٩</mn><mtext dir="rtl"> أو ن</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نستبعد الزمن السالب، ونحسب السرعة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` ثوانٍ.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٩٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٦٠</mn></mrow></math>
\`\`\`



سرعة الارتطام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`؛ مقدارها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` واتجاهها إلى الأسفل.
:::


:::exam-question
id: math-book-p026-exercise1
title: الكتاب، ص ٢٤ · تمارين ١-٥، السؤال ١
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٦، تمارين ١-٥، السؤال ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد النقطة/النقط على منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` التي يكون عندها المماس للمنحنى عموديًا على المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
نرتب معادلة المستقيم المعطى لنقرأ ميله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



ميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`؛ المماس العمودي عليه ميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لأن حاصل ضرب الميلين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. وميل المماس يساوي مشتقة المنحنى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نحسب الإحداثي الصادي من الاقتران الأصلي، لا من المستقيم المعطى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p026-exercise2
title: الكتاب، ص ٢٤ · تمارين ١-٥، السؤال ٢
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٦، تمارين ١-٥، السؤال ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><msup><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`. مشتقة مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`؛ نستخدمها مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ثم نحسب النقطة والميل. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نكتب المماس بنقطة وميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">π</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mi mathvariant="normal">π</mi></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p026-exercise3
title: الكتاب، ص ٢٤ · تمارين ١-٥، السؤال ٣
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٦، تمارين ١-٥، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ص</mi></mrow></mrow></math>\` يمس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.
solution:
نكتب المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٦</mn></mfrac></mrow></mrow></math>\`، فميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٦</mn></mfrac></math>\`. عند التماس يساوي هذا الميل مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بقاعدة القسمة: مشتقة البسط في المقام ناقص البسط في مشتقة المقام، على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٦</mn><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mn dir="ltr">٦</mn><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



نضرب بالمقامين غير الصفريين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>±</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٨</mn><mtext dir="rtl"> أو س</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` وفي معادلة المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ص</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>⇒</mo><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٨</mn><mo>⇒</mo><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mn dir="ltr">٢٤</mn><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\`.
:::


:::exam-question
id: math-book-p026-exercise4
title: الكتاب، ص ٢٤ · تمارين ١-٥، السؤال ٤
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٢٦، تمارين ١-٥، السؤال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسيًا إلى أعلى وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` ارتفاعه بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني. جد سرعة الجسم عندما تكون المسافة الكلية المقطوعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
solution:
المعطى: قذف جسم رأسيًا إلى أعلى وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` ارتفاعه بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني.

نرمز للارتفاع بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` وللزمن بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`. السرعة اللحظية هي مشتقة الارتفاع بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

نحسب القمة ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ل</mi></mrow></math>\` افتراض ارتفاعها. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` للزمن و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` للارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">السرعة</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mn dir="ltr">٤٠</mn><mn dir="ltr">١٠</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦٠</mn><mo>−</mo><mn dir="ltr">٨٠</mn><mo>=</mo><mn dir="ltr">٨٠</mn><mtext> </mtext><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`



بعد قطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` يكون الجسم قد صعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` وهبط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ لذلك ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.

نحل للزمن: نقسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٦٠</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`، فينتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">١٢</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` لأنه زمن الهبوط بعد زمن القمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٦٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

نشتق ثم نعوّض؛ الإشارة السالبة تعني الهبوط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>×</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-book-p033-worksheet2-q2-a
title: الكتاب، ص ٣١ · ورقة عمل ٢، السؤال ٢ أ
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٣٣، ورقة عمل ٢، السؤال ٢ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من نقطة على سطح الأرض قذف جسم رأسيًا إلى أعلى، وكان ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الثواني يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`. جد أقصى ارتفاع يصله الجسم.
solution:
المعطى: من نقطة على سطح الأرض قذف جسم رأسيًا إلى أعلى، وكان ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الثواني يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

عند أعلى نقطة تنعدم السرعة؛ نشتق الارتفاع ونحل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نعوّض بالزمن؛ ونضيف ارتفاع البداية إذا طلب الارتفاع عن الأرض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٣٠</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>×</mo><msup><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥٫٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-book-p033-worksheet2-q2-b
title: الكتاب، ص ٣١ · ورقة عمل ٢، السؤال ٢ ب
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٣٣، ورقة عمل ٢، السؤال ٢ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من نقطة على سطح الأرض قذف جسم رأسيًا إلى أعلى، وكان ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الثواني يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`. جد سرعة الجسم وهو نازل عندما يكون ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
solution:
المعطى: من نقطة على سطح الأرض قذف جسم رأسيًا إلى أعلى، وكان ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الثواني يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`؛ تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ث</mi></mrow></math>\`، وهي لحظة القمة. الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\` يعطي زمنين: بعد القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٨</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نختار زمن الهبوط الأكبر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ث</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نعوّض في مشتقة الارتفاع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-book-p033-worksheet2-q4
title: الكتاب، ص ٣١ · ورقة عمل ٢، السؤال ٤
question: تطبيقات هندسية وفيزيائية
reference: الكتاب، النسخة المصورة، ص ٣٣، ورقة عمل ٢، السؤال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد النقطة/النقط التي يكون عندها المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، موازيًا للقاطع الواصل بين النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow></math>\`.
solution:
ميل القاطع بين النقطتين هو فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` على فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mtext dir="rtl">الميل</mtext><mo>=</mo><mfrac><mrow><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



التوازي يعني تساوي الميلين، وميل المماس هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ قاعدة القوة تضرب في الأس ثم تنقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فتكون مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mo>±</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>
\`\`\`



نستعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`. عند الجذر الموجب:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo>+</mo><mfrac><mn dir="ltr">١</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mfrac></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><msqrt><mn dir="ltr">٢</mn></msqrt></mfrac></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac></math>\`، لذلك المجموع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٢</mn></mfrac></math>\`. وعند الجذر السالب تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` سالبة لأن الحدين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\` سالبان.

النقطتان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo>،</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mo>،</mo><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::mcq
id: math-book-p034-test1-2
title: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٢
kicker: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٢
reference: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٢
question: إذا كان المماس المرسوم لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` يصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\` مع الاتجاه الموجب لمحور السينات، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٢</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
explanation:
المعطى: المماس المرسوم لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` يصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></math>\` مع الاتجاه الموجب لمحور السينات.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

النهاية نصف تعريف المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ والمشتقة ظل زاوية المماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">١٣٥</mn><mo>°</mo><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

نخرج معامل المقام من النهاية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٢</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-book-p034-test1-6
title: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٦
kicker: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٦
reference: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٦
question: يتحرك جسم على خط مستقيم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`: المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`: الزمن بالثواني، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`: السرعة، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></mrow></math>\`، فما قيمة التسارع عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` ثانية؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">م</mi></mrow></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">م</mi></mrow></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
explanation:
المعطى: يتحرك جسم على خط مستقيم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`: المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`: الزمن بالثواني، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`: السرعة، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

عند الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` نحسب الإزاحة من حاصل الضرب المعطى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`

السرعة مشتقة الإزاحة والتسارع مشتقة السرعة. نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mi mathvariant="normal">ع</mi></mrow></math>\` بقاعدة الضرب، فتكون مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>×</mo><mi mathvariant="normal">ع</mi></mrow><mo>+</mo><mrow><mi mathvariant="normal">ف</mi><mo>×</mo><mi mathvariant="normal">ت</mi></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ف</mi><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٩</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ت</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>
\`\`\`

نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ت</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow></math>\`، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">م</mi></mrow></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p033-r5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٥ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٥ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r5-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r5-key.webp)
question: إذا كانت معادلة العمودي على مماس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">أ</mi></mfrac><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`
explanation:
المعطى: معادلة العمودي على مماس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">أ</mi></mfrac><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نكتب المستقيم بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لنقرأ ميل العمودي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p033-r1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ١ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ١ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r1-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r1-key.webp)
question: إذا تحرك جسم على خط مستقيم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>\`، فإن سرعة هذا الجسم وتسارعه يتساويان عدديًا عندما:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | عند بدء الحركة
explanation:
المعطى: إذا تحرك جسم على خط مستقيم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>\`.

السرعة مشتقة الإزاحة، والتسارع مشتقة السرعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p033-r2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٢ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٢ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r2-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r2-key.webp)
question: إذا كانت معادلة العمودي على منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`
explanation:
المعطى: معادلة العمودي على منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نكتب المستقيم بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لنقرأ ميل العمودي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p033-r3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٣ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٣ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r3-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r3-key.webp)
question: يتحرك جسم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٦</mn><msqrt><mi mathvariant="normal">ف</mi></msqrt></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` هما السرعة والإزاحة على الترتيب، فإن تسارع هذا الجسم يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦</mn></math>\`
explanation:
المعطى يصف جسمًا يتحرك، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٦</mn><msqrt><mi mathvariant="normal">ف</mi></msqrt></mrow></mrow></math>\`؛ ندرس فرع الحركة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. التسارع هو مشتقة السرعة بالنسبة إلى الزمن، ومشتقة الإزاحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` هي السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">ف</mi></msqrt></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ف</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`. نضرب في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالنسبة إلى الزمن بقاعدة السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo>=</mo><mfrac><mn dir="ltr">٣</mn><msqrt><mtext dir="rtl">ف</mtext></msqrt></mfrac><mfrac><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">ف</mtext></mrow><mrow><mi mathvariant="normal">د</mi><mtext dir="rtl">ن</mtext></mrow></mfrac></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ف</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow></mfrac><mo>=</mo><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><msqrt><mi mathvariant="normal">ف</mi></msqrt></mrow></mrow></math>\`. الجذر غير صفري على فرع الحركة، فيجوز اختصاره.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><msqrt><mtext dir="rtl">ف</mtext></msqrt><mo stretchy="false">)</mo></mrow><msqrt><mtext dir="rtl">ف</mtext></msqrt></mfrac><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`



الإجابة:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\` على فرع الحركة، وهو الخيار الثالث.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p033-r4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٤ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٤ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r4-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r4-key.webp)
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` مماسًا للمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`، فإن قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-4 | صفر
explanation:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` مماسًا للمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`.

المشتقة عند نقطة التماس تساوي ميل المماس؛ نختارها لأن المستقيم المعطى مماس. قاعدة القوة تعطي المشتقة بضرب المعامل في الأس ثم إنقاص الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

ميل المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ نساويه بمشتقة المنحنى عند التماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نستعمل وقوع نقطة التماس على المنحنى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p033-r6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٦ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٣٣ · البند ٦ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r6-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p033-r6-key.webp)
question: إذا كانت معادلة العمودي على مماس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١٢</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فإن قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
explanation:
المعطى: معادلة العمودي على مماس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١٢</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نكتب المستقيم بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لنقرأ ميل العمودي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-kamel-u1-p045-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٥ · البند-٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٤٥، البند-٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسيًا إلى أعلى من نقطة على سطح الأرض بحيث يتحدد بعده عن سطح الأرض بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`: ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`: الزمن بالثواني. جد أقصى ارتفاع يصله الجسم.
solution:
المعطى: قذف جسم رأسيًا إلى أعلى من نقطة على سطح الأرض بحيث يتحدد بعده عن سطح الأرض بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`: ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`: الزمن بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

عند أعلى نقطة تنعدم السرعة؛ نشتق الارتفاع ونحل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نعوّض بالزمن؛ ونضيف ارتفاع البداية إذا طلب الارتفاع عن الأرض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٤٠</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>×</mo><msup><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠٫٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p045-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٥ · البند-٤
question: تطبيقات هندسية وفيزيائية
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٤٥، البند-٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسم في خط مستقيم بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٨</mn><msqrt><mrow><mi mathvariant="normal">ف</mi><mo>+</mo><mi mathvariant="normal">ن</mi></mrow></msqrt></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار. فجد تسارع الجسم عندما تكون سرعته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
solution:
المعطى: يتحرك جسم في خط مستقيم بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٨</mn><msqrt><mrow><mi mathvariant="normal">ف</mi><mo>+</mo><mi mathvariant="normal">ن</mi></mrow></msqrt></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

نجد الجذر من قيمة السرعة أولًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٥</mn><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٨</mn><msqrt><mrow><mi mathvariant="normal">ف</mi><mo>+</mo><mi mathvariant="normal">ن</mi></mrow></msqrt></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msqrt><mrow><mi mathvariant="normal">ف</mi><mo>+</mo><mi mathvariant="normal">ن</mi></mrow></msqrt><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

قاعدة السلسلة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mi mathvariant="normal">ت</mi></mrow></math>\`. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ف</mi><mo>+</mo><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٤</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ف</mi><mo>+</mo><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mfrac></math>\`، لأن مشتقة الجذر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mtext dir="rtl">المدخل</mtext></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>+</mo><mi mathvariant="normal">ن</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ت</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>(</mo><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><msqrt><mrow><mi mathvariant="normal">ف</mi><mo>+</mo><mi mathvariant="normal">ن</mi></mrow></msqrt></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mfrac><mn dir="ltr">٤</mn><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">م</mi></mrow></mfrac><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p045-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٥ · البند-٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٤٥، البند-٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mfrac><mn dir="ltr">٩</mn><mi mathvariant="normal">ف</mi></mfrac></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\` تربط إزاحة الجسم (بالأمتار) مع سرعته (بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mtext dir="rtl">متر</mtext><mtext dir="rtl">دقيقة</mtext></mfrac></math>\`)، فما تسارع الجسم عندما يكون قد قطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` أمتار؟
solution:
المعطى: العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mfrac><mn dir="ltr">٩</mn><mi mathvariant="normal">ف</mi></mfrac></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\` تربط إزاحة الجسم (بالأمتار) مع سرعته (بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mtext dir="rtl">متر</mtext><mtext dir="rtl">دقيقة</mtext></mfrac></math>\`).

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

عند إزاحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` نجد السرعة من العلاقة الأصلية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">ت</mi></mrow></math>\` بالسلسلة، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow><mi mathvariant="normal">ع</mi></mrow></mrow></math>\` لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`. نستخدم القاعدتين ثم نعزل التسارع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ت</mi></mrow><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">ع</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ت</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٦</mn></mrow><mrow><mi mathvariant="normal">ع</mi><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mn dir="ltr">٦</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow><mo>=</mo><mfrac><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi></mrow></mfrac><mrow><msup><mi mathvariant="normal">دقيقة</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`؛ وحدة الزمن هنا الدقيقة كما في السؤال.
:::


:::exam-question
id: math-kamel-u1-p045-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٥ · البند-٦
question: تطبيقات هندسية وفيزيائية
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٤٥، البند-٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أطلقت كرة رأسيًا إلى أعلى من نقطة على سطح الأرض من أمام بناية ارتفاعها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥٥</mn></math>\` مترًا، بحيث إن ارتفاع الكرة (بالأمتار) عن سطح الأرض بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يتحدد بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`. ما سرعة الكرة عندما تصل إلى مستوى سطح البناية؟
solution:
السرعة هي مشتقة الارتفاع؛ نختار الأعلى موجبًا. عند مستوى السطح يكون الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥٥</mn></math>\`. بعد القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` ونقل الحدود تصبح معادلة الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">١١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نحللها لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>\` وحاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٥٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

نشتق الارتفاع ثم نعوّض بالزمنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٦٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">١١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٥٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` صعودًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٥٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` نزولًا.
:::


:::exam-question
id: math-kamel-u1-p045-r6-b
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٥ · البند ٦، الفرع ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٤٥، البند ٦، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أطلقت كرة رأسيًا إلى أعلى من نقطة على سطح الأرض من أمام بناية ارتفاعها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥٥</mn></math>\` مترًا، بحيث إن ارتفاع الكرة (بالأمتار) عن سطح الأرض بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يتحدد بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`. ما أقصى ارتفاع للكرة عن مستوى سطح البناية؟
solution:
السرعة هي مشتقة الارتفاع. عند القمة تنعدم، فيعطي اشتقاق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">ن</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



نعوض الزمن في الارتفاع عن الأرض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٦٠</mn><mo>−</mo><mn dir="ltr">١٨٠</mn><mo>=</mo><mn dir="ltr">١٨٠</mn></mrow></math>
\`\`\`



المطلوب الارتفاع فوق سطح بناية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`، فنطرح ارتفاعها من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٨٠</mn><mo>−</mo><mn dir="ltr">٥٥</mn><mo>=</mo><mn dir="ltr">١٢٥</mn></mrow></math>
\`\`\`



أقصى ارتفاع فوق البناية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::mcq
id: math-kamel-u1-p034-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ١
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٤ · البند ١ · تفريغ مستعاد من المستخدم
question: إذا كانت معادلة العمودي على منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
المعطى: معادلة العمودي على منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نكتب المستقيم بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لنقرأ ميل العمودي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p034-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٤ · البند ٢ · تفريغ مستعاد من المستخدم
question: إذا تحرك جسم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني، فإن التسارع المتوسط للجسم في الثواني الثلاث الأولى يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`
explanation:
التسارع المتوسط هو تغير السرعة مقسومًا على المدة، وليس تغير الموقع. لذلك نشتق الإزاحة أولًا؛ مشتقتها هي السرعة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الثواني الثلاث الأولى تعني من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢٧</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">التسارع المتوسط</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٩</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



الوحدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">م</mi><mi mathvariant="normal">ث</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ث</mi></mfrac><mo>=</mo><mfrac><mi mathvariant="normal">م</mi><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`؛ إذن المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p034-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٤ · البند ٣ · تفريغ مستعاد من المستخدم
question: إذا تحرك جسيم على خط مستقيم بحيث كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` تمثل إزاحته عند زمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن سرعته اللحظية تساوي
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ف</mi></mrow></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ف</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow></mfrac></math>\`
explanation:
الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ف</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`، أي مشتقة الإزاحة بالنسبة إلى الزمن.

**المصدر:** صفحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٢</mn></math>\` من الكتاب.

«السرعة اللحظية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\` عند الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ف</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`».

![التعريف من الكتاب](assets/lessons/curriculum-evidence/d342ca231df69730889c.webp)
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p034-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٤ · البند ٤ · تفريغ مستعاد من المستخدم
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` مماساً لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، فإن قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` هي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` مماساً لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`.

المشتقة عند نقطة التماس تساوي ميل المماس؛ نختارها لأن المستقيم المعطى مماس. قاعدة القوة تعطي المشتقة بضرب المعامل في الأس ثم إنقاص الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

نساوي مشتقة المنحنى بميل المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نعوّض بنقطة التماس في المنحنى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p034-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٤ · البند ٥ · تفريغ مستعاد من المستخدم
question: إذا كانت معادلة العمودي على المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٨</mn></mrow></math>\`
explanation:
المعطى: معادلة العمودي على المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نكتب المستقيم بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لنقرأ ميل العمودي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p034-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٦
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٤ · البند ٦ · تفريغ مستعاد من المستخدم
question: إذا كانت معادلة العمودي على المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`، فإن قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac></math>\`
explanation:


النقطة المعطاة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
المشتقة عند النقطة تساوي ميل المماس هناك. المعطى معادلة العمودي عليه؛ نرتبها بالشكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo></mrow></math>\` ميل\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`ثابت لقراءة ميله.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


ميل العمودي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></math>\`. حاصل ضرب ميلي مستقيمين متعامدين يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` عندما يكون الميلان منتهيين؛ لذا ميل المماس سالب المقلوب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


نضيف قيمة الاقتران التي تعطيها النقطة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p034-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٧
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٧
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٤ · البند ٧ · تفريغ مستعاد من المستخدم
question: إذا كان ميل العمودي على المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\` فإن معادلة المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند تلك النقطة هي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:
المعطى: ميل العمودي على المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نستخدم الميل المعطى وعلاقة التعامد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p034-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٨
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٤ · البند ٨
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٤ · البند ٨ · تفريغ مستعاد من المستخدم
question: قذف جسم رأسياً إلى أعلى بحيث يقاس ارتفاعه حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كان أقصى ارتفاع وصله الجسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\` متراً، فإن قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` هي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\`
explanation:
المعطى: قذف جسم رأسياً إلى أعلى بحيث يقاس ارتفاعه حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذا كان أقصى ارتفاع وصله الجسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\` متراً.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

نساوي السرعة بالصفر لإيجاد زمن القمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`

نعوّض في الارتفاع الأقصى ونأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` الموجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣٢</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p035-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ١
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٥ · البند ١ · تفريغ مستعاد من المستخدم
question: ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo>|</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>|</mo></mrow></mrow></math>\`، فإن ميل العمودي على المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` هو:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
المعطى: ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo>|</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>|</mo></mrow></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` موجبًا، ويظل موجبًا قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ فالقيمة المطلقة تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` في هذا الجوار، ومشتقتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p035-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٥ · البند ٢ · تفريغ مستعاد من المستخدم
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></math>\` مماساً لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٩</mn></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٥</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`
explanation:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></math>\` مماساً لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.

المشتقة عند نقطة التماس هي ميل المماس؛ نقرأ الميل من معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في معادلة المستقيم.

من المماس نقرأ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وميلها؛ النهاية ثلاثة أمثال تعريف المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

سبب العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`: نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الكسر</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>×</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>+</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`، فتظهر نهاية فرق القيم على تغير المدخل، أي تعريف المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>+</mo><mn dir="ltr">٩</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٥</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p035-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٥ · البند ٣ · تفريغ مستعاد من المستخدم
question: تحرك جسم على خط مستقيم مبتدئاً من النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">و</mi></math>\` بحيث يكون بعده عنها في أي لحظة يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، فإن تسارع الجسم عندما يغير من اتجاه حركته يساوي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨٠</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٢</mn></mrow></math>\`
explanation:
المعطى: تحرك جسم على خط مستقيم مبتدئاً من النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">و</mi></math>\` بحيث يكون بعده عنها في أي لحظة يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

نعكس الحركة عند صفر السرعة الموجب الذي تتبدل حوله إشارتها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mo>=</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mi mathvariant="normal">ن</mi><mo>(</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٦</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

التسارع مشتقة السرعة؛ نعوّض بزمن الانعكاس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ت</mi><mo>(</mo><mfrac><mrow><mn dir="ltr">١٦</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٦</mn><mi mathvariant="normal">م</mi></mrow></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p035-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٥ · البند ٤ · تفريغ مستعاد من المستخدم
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مماساً لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` الثابت:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مماساً لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

المشتقة عند نقطة التماس تساوي ميل المماس؛ نختارها لأن المستقيم المعطى مماس. قاعدة القوة تعطي المشتقة بضرب المعامل في الأس ثم إنقاص الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

ميل المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`؛ نساويه بمشتقة المنحنى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نعوّض بالنقطة في المستقيم.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٥</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p035-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٥ · البند ٦
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٥ · البند ٦ · تفريغ مستعاد من المستخدم
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` مماساً لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">هـ</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٥</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
explanation:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` مماساً لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`.

المشتقة عند نقطة التماس هي ميل المماس؛ نقرأ الميل من معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في معادلة المستقيم.

المماس يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` وميلها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ النهاية خمسة أمثال المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

سبب العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`: نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الكسر</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>×</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">هـ</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`، فتظهر نهاية فرق القيم على تغير المدخل، أي تعريف المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٥</mn><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p036-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ١
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٦ · البند ١ · تفريغ مستعاد من المستخدم
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></msup></mrow></math>\` فما معادلة المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></msup></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` مضروبة في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`؛ هنا المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فنستخدم قاعدة السلسلة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><msup><mi mathvariant="normal">هـ</mi><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`



نكتب المماس بنقطة وميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">هـ</mtext></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p036-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٦ · البند ٢ · تفريغ مستعاد من المستخدم
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi></mrow></math>\` عمودياً على منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi></mrow></math>\` عمودياً على منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

المشتقة عند نقطة التماس هي ميل المماس، وميلا المستقيمين المتعامدين حاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`؛ نقرأ ميل العمودي من معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p036-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٦ · البند ٣ · تفريغ مستعاد من المستخدم
question: قذف جسم رأسياً للأعلى وكان ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأقدام بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية معطى بالمعادلة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩٦</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، فما الزمن الذي يحتاجه الجسم وهو صاعد لتكون سرعته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\` السرعة التي قذف بها؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`
explanation:
المعطى: قذف جسم رأسياً للأعلى وكان ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأقدام بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية معطى بالمعادلة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩٦</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

السرعة مشتقة الإزاحة؛ نشتق ثم نستخدم الشرط المطلوب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٩٦</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٩٦</mn></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٩٦</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٩٦</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ث</mi></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p036-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٦ · البند ٤ · تفريغ مستعاد من المستخدم
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` عمودياً على منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٣</mn></msup><mo stretchy="true">)</mo></mrow><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
العمودي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` يمر بنقطة التماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`. وميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، فيكون ميل المماس المقلوب السالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



مشتقة مكعب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بقاعدة السلسلة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow></math>\`، وليست المشتقة الثالثة ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">ق</mtext><mn dir="ltr">٣</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p036-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٦ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٦ · البند ٥ · تفريغ مستعاد من المستخدم
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>≠</mo><mn dir="ltr">٢</mn></mrow></math>\`، وكان لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` مماساً أفقياً عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>≠</mo><mn dir="ltr">٢</mn></mrow></math>\`، وكان لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` مماساً أفقياً عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.

المشتقة تمثل ميل المماس؛ الأفقي ميله صفر. المماس الأفقي يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` صفرًا، والنقطة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

قاعدة القسمة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. هنا مشتقة المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`؛ نعوض بالقيم عند نقطة التماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p037-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٧ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٧ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٧ · البند ٢ · تفريغ مستعاد من المستخدم
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، وكان المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` أفقياً، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٩</mn></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٩</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٩</mn></mfrac></math>\`
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، وكان المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` أفقياً.

المشتقة تمثل ميل المماس؛ الأفقي ميله صفر. المماس الأفقي يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` صفرًا؛ و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

قاعدة القسمة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. هنا مشتقة المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`؛ نعوض بالقيم عند نقطة التماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٠</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٩</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p037-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٧ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٧ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٧ · البند ٣ · تفريغ مستعاد من المستخدم
question: يتحرك جسم على خط مستقيم، بحيث أن بعده \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار عن النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">و</mi></math>\` بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الثواني يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` وكانت السرعة المتوسطة في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`
explanation:
السرعة المتوسطة هي تغير الموقع خلال الفترة مقسومًا على مدتها. نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`كن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٥</mn><mo>+</mo><mn dir="ltr">٥</mn><mtext dir="rtl">ك</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢٨</mn><mo>+</mo><mn dir="ltr">٥</mn><mtext dir="rtl">ك</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ك</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٧</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ك</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢٨</mn><mo>+</mo><mn dir="ltr">٥</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`



نوزع الطرح ثم نجمع الحدود المتشابهة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢١</mn><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ك</mtext></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧</mn><mo>+</mo><mtext dir="rtl">ك</mtext><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ك</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p037-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٧ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٧ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٧ · البند ٤ · تفريغ مستعاد من المستخدم
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` التي تجعل المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` أفقياً؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

المماس الأفقي ميله صفر؛ نجد المشتقة لنساويها بصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>)</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p037-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٧ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٧ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٧ · البند ٥ · تفريغ مستعاد من المستخدم
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، عمودياً على المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما العبارة الصحيحة دائماً من العبارات الآتية؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` موجبان
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` مختلفان في الإشارة
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` سالبان
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>\`
explanation:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، عمودياً على المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

نكتب المستقيم بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لنقرأ ميل العمودي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ب</mi></mrow></mfrac><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` مختلفان في الإشارة.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p038-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ١
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٨ · البند ١ · تفريغ مستعاد من المستخدم
question: إذا كانت معادلة العمودي على المماس عند نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></math>\`
explanation:
المعطى: معادلة العمودي على المماس عند نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نكتب المستقيم بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لنقرأ ميل العمودي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p038-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٨ · البند ٢ · تفريغ مستعاد من المستخدم
question: ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما ميل المماس عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | صفر
explanation:
المعطى: ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\`، ومشتقة اللوغاريتم الطبيعي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. نطرح المشتقتين ثم نعوض عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p038-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٨ · البند ٣ · تفريغ مستعاد من المستخدم
question: إذا كان لمنحنى الاقترانين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>\` مماساً مشتركاً عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ما قيمة كل من الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` على الترتيب؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow></math>\`
explanation:
المعطى: لمنحنى الاقترانين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>\` مماساً مشتركاً عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ما قيمة كل من الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` على الترتيب؟.

اشتراك المماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يقتضي تساوي القيم والميلين. قاعدة القوة تعطي المشتقتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>
\`\`\`

نطرح معادلة القيم من معادلة الميلين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، فينتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. ثم نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p038-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٨ · البند ٤ · تفريغ مستعاد من المستخدم
question: يتحرك جسم في خط مستقيم، بحيث أن بعده \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` عن نقطة الأصل بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يعطى بالقاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ن</mi></mrow></math>\`، ما تسارع الجسم بعد مرور ثانيتين من بدء الحركة؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">٦</mn></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">٧</mn></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">١٢</mn></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">١٣</mn></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
explanation:
السرعة مشتقة الإزاحة، والتسارع مشتقة السرعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ت</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p038-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٨ · البند ٥ · تفريغ مستعاد من المستخدم
question: ما ميل العمودي على مماس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mrow><mo>|</mo><mi mathvariant="normal">س</mi><mo>|</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`
explanation:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سالبة، ولذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. يصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`؛ نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` ثم نأخذ المقلوب السالب للميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ق</mi><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p038-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٦
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٨ · البند ٦ · تفريغ مستعاد من المستخدم
question: يتحرك جسم على خط مستقيم بحيث أن المسافة التي يقطعها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار التي يقطعها بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` فإن التسارع عندما يقطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` أمتار هو:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">٤</mn></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">١٢</mn></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
explanation:
المعطى: يتحرك جسم على خط مستقيم بحيث أن المسافة التي يقطعها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار التي يقطعها بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.

كما في استعمال الكتاب، نقرأ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` موضعًا موجهًا؛ إذ لا تكون المسافة الكلية دالة جيب تمام متناقصة أحيانًا. السرعة مشتقة الموضع والتسارع مشتقة السرعة. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></mrow><mo>×</mo><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow><mo>×</mo><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`؛ هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>\` فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` مرتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ف</mi></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ت</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢٤</mn><mi mathvariant="normal">م</mi></mrow></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p038-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٧
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٨ · البند ٧
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٨ · البند ٧ · تفريغ مستعاد من المستخدم
question: إذا كانت المسافة التي يقطعها جسم بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية تعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني، فإن سرعة الجسم عندما ينعدم التسارع تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">١٢</mn></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">٣</mn></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`
explanation:
المعطى: المسافة التي يقطعها جسم بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية تعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة مشتقة الإزاحة، والتسارع مشتقة السرعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.

نتعامل مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` هنا كموقع موجه على خط الحركة؛ فالإشارة السالبة للسرعة تعني تناقص هذا الموقع. المسافة الكلية المقطوعة لا تنقص.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p039-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٩ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٩ · البند ١
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٩ · البند ١ · تفريغ مستعاد من المستخدم
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ف</mi></mfrac></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني فإن التسارع يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">ف</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>\`
- [ ] option-2 | صفر
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">ف</mi><mn dir="ltr">٣</mn></msup></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ف</mi></mfrac></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ف</mi></mfrac></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف المقلوب. التسارع مشتقة السرعة بالنسبة إلى الزمن، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msup><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`؛ قاعدة القوة والسلسلة تعطي مشتقتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup><msup><mi mathvariant="normal">ف</mi><mo>′</mo></msup></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">فَ</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نستبدل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` بمقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mi mathvariant="normal">ف</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p039-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٩ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٩ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٩ · البند ٢ · تفريغ مستعاد من المستخدم
question: إذا كان منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` وكان المماس المرسوم لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند هذه النقطة يصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥</mn><mo>°</mo></mrow></math>\` مع الاتجاه الموجب لمحور السينات فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٢</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
explanation:
المعطى: منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` وكان المماس المرسوم لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند هذه النقطة يصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥</mn><mo>°</mo></mrow></math>\` مع الاتجاه الموجب لمحور السينات.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

ميل المماس ظل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">٤٥</mn><mo>°</mo></msup></math>\` وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ المقام سالب ضعفي فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

النهاية سالب نصف المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٢</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p039-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٩ · البند ٣
kicker: صياغة تعليمية معدّلة
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٩ · البند ٣ · تفريغ مستعاد من المستخدم · صياغة تعليمية معدّلة
question: إذا كان المستقيم \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">م</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، حيث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">م</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، مماسًا للقطع المكافئ \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></math>\`، حيث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما الصيغة التي تعبّر دائمًا عن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` بدلالة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">م</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">م</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">م</mi><mi mathvariant="normal">أ</mi></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">م</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">أ</mi><mi mathvariant="normal">م</mi></mfrac></mrow></math>\`
explanation:
لنسمّ نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow><mo>،</mo><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`. المشتقة عندها تساوي ميل المستقيم المماس، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`. نشتق العلاقة ضمنيًا لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` مرتبطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>\` داخل معادلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٠</mn></msub></mfrac></mrow></math>
\`\`\`



بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` موجبة والميل معلوم وغير صفري، نستطيع العزل والقسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٠</mn></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">م</mi></mfrac></mrow></math>
\`\`\`



نقطة التماس تقع على القطع؛ نعوّض بقيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></math>\` لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">ص</mi><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٠</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup></mrow><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٠</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٠</mn></msub><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



وتقع النقطة أيضًا على المماس، فنوجد الجزء المقطوع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٠</mn></msub><mo>−</mo><mi mathvariant="normal">م</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٠</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">م</mi></mfrac><mo>−</mo><mi mathvariant="normal">م</mi><mfrac><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mi mathvariant="normal">م</mi></mfrac></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p039-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٩ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٣٩ · البند ٤
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٣٩ · البند ٤ · تفريغ مستعاد من المستخدم
question: ما ميل العمودي على مماس الدائرة التي معادلتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>\`
explanation:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

نشتق ضمنيًا: نعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` اقترانًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، فتكون مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></math>\` بالسلسلة. نحل للميل ثم نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، ونأخذ مقلوبه السالب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-kamel-u1-p040-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ١
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ١ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسيم في خط مستقيم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني، أوجد سرعة وتسارع الجسم بعد ثانيتين من بدء الحركة.
solution:
المعطى: يتحرك جسيم في خط مستقيم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة مشتقة الإزاحة، والتسارع مشتقة السرعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p040-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسيم في خط مستقيم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني، أوجد سرعة الجسم عندما يكون تسارعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">٤٠</mn></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
solution:
المعطى: يتحرك جسيم في خط مستقيم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة مشتقة الإزاحة، والتسارع مشتقة السرعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المطلوبة ونبسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١٤٧</mn><mo>−</mo><mn dir="ltr">١٤</mn><mo>=</mo><mn dir="ltr">١٣٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٣٣</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p040-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ٣ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد معادلة المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\` من النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة خارجه، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ قاعدة القوة تضرب في الأس ثم تنقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فتكون مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`. نفرض إحداثي التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؛ نقطة المنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">أ</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` وميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لأنه إحداثي على المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. نمرر المماس بالنقطة الخارجية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` غير الصفرية: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`. إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في معادلة المماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p040-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ٤
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ٤ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بين وجود مماسين من النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، ثم جد معادلتيهما.
solution:
المعطى: بين وجود مماسين من النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، ثم.

المشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` تعطي ميل المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` عند نقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`. معادلة المستقيم بنقطة وميل هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، وبالتوزيع تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>
\`\`\`

مروره بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. إذا كان حاصل ضرب عاملين صفرًا فإن أحدهما صفر؛ نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نعوّض بالقيمتين في معادلة المماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p040-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ٥ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم الواصل بين النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></math>\` مماساً لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>\`، جد قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
solution:
المستقيم يمر بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`، فمقطعه الصادي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. وميله من النقطتين يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac><mo>=</mo><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نفرض نقطة التماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`. المشتقة تعطي ميل المماس، وقيمة الاقتران تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



في معادلة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`المقطع، نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mi mathvariant="normal">أ</mi></mrow></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` عند التماس لنحسب المقطع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٧</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



يجب أن يساوي هذا المقطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>±</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



ونساوي الميلين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p040-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ٦
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ٦ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى فكانت العلاقة بين ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار عن نقطة قذفه وزمن حركته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`. جد المسافة التي قطعها الجسم في الثواني الست الأولى.
solution:
المعطى: قذف جسم رأسياً للأعلى فكانت العلاقة بين ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار عن نقطة قذفه وزمن حركته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` للزمن. مشتقة الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>\`، وتساوي صفرًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`. نكمل تعويض الارتفاعين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢٥٠</mn><mo>−</mo><mn dir="ltr">١٢٥</mn><mo>=</mo><mn dir="ltr">١٢٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣٠٠</mn><mo>−</mo><mn dir="ltr">١٨٠</mn><mo>=</mo><mn dir="ltr">١٢٠</mn></mrow></math>
\`\`\`



اختيار الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` للقمة يأتي من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ بإضافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></math>\` والقسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` ثوانٍ.

المسافة هي الصعود حتى القمة ثم مقدار الهبوط منها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mo>=</mo><mn dir="ltr">١٢٥</mn><mo>+</mo><mo>(</mo><mn dir="ltr">١٢٥</mn><mo>−</mo><mn dir="ltr">١٢٠</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١٣٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p040-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ٧
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ٧ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسم في خط مستقيم تبعاً للعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` إزاحة الجسم بالأمتار عن نقطة ثابتة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">و</mi></math>\` على خط الحركة، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. جد السرعة المتوسطة والتسارع المتوسط لهذا الجسم في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
solution:
السرعة المتوسطة تغير الإزاحة على المدة. والتسارع المتوسط تغير السرعة على المدة؛ لذلك نحتاج الإزاحة والسرعة عند الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



السرعة اللحظية مشتقة الإزاحة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٥٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` ثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">السرعة المتوسطة</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٨٠</mn><mo>−</mo><mn dir="ltr">١٦</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">التسارع المتوسط</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٥٢</mn><mo>−</mo><mn dir="ltr">١٦</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`



السرعة المتوسطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`، والتسارع المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٨</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p040-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ٨
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ٨ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد الميل لجميع المماسات المرسومة لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` من النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

ميل المماس هو مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` عند نقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`. من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`. نفرض مروره بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`، ثم ننقل الحدود إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ نحللها بعاملين حاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` ومجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

نحسب الميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` عند القيمتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">م</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p040-r9
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٠ · البند ٩
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٠ · البند ٩ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\` مماساً لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>×</mo><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\` مماساً لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>×</mo><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

عند نقطة التماس تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` على المستقيم، وتساوي مشتقتها ميل المماس؛ لذا نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\` ونقرأ الميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ل</mi></mrow></mrow></math>\` بقاعدة الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mi mathvariant="normal">ل</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">لَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p041-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤١ · البند ١
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤١ · البند ١ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً لأعلى فكانت العلاقة بين ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار عن نقطة قذفه وزمن حركته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`. جد الزمن اللازم لتكون المسافة التي قطعها الجسم تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٣٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`.
solution:
نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` للزمن و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` للارتفاع. السرعة مشتقة الارتفاع، وتساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>\`؛ عند القمة تنعدم وتتغير من موجبة إلى سالبة. من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ث</mi></mrow></mrow></math>\`، وارتفاعها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٥٠</mn><mo>×</mo><mn dir="ltr">٥</mn></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٢٥</mn></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١٢٥</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`. قطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` يعني هبوط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٣٠</mn><mo>−</mo><mn dir="ltr">١٢٥</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\` بعد القمة.

لحل ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` ننقل الحدود ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٢٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢٤</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الجذران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`. الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` قبل القمة، فنختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ث</mi></mrow></math>\` لأنه زمن الهبوط.
:::


:::exam-question
id: math-kamel-u1-p041-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤١ · البند ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤١ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ك</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` علماً بأن للمنحنيين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>،</mo><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` مماساً أفقياً مشتركاً عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة على كليهما.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

وقوع النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` على المنحنيين يعطي قيمتيهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`؛ والمشتقة هي ميل المماس. لأن المماس أفقي، فمشتقتاهما صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

نشتق حاصل الضرب ونعوّض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi></mrow><mrow><mo>=</mo><mo>(</mo><mi mathvariant="normal">قَ</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo><mtext dir="rtl">هـ</mtext><mo>+</mo><mo>(</mo><mi mathvariant="normal">ق</mi><mo>+</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">كَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p041-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤١ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤١ · البند ٣ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أطلق جسم رأسياً للأعلى من قمة برج بحيث أن ارتفاعه بالأمتار عن سطح الأرض بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يعطى بالقاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٢٤</mn><mo>+</mo><mn dir="ltr">٦٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`. جد أقصى ارتفاع عن قمة البرج يصل إليه الجسم.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يقيس الارتفاع عن الأرض، والمطلوب الارتفاع فوق قمة البرج. ارتفاع البرج هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢٤</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`.

نشتق الارتفاع لإيجاد السرعة؛ عند القمة تنعدم وتتحول من موجبة إلى سالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٤</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦٤</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نعوض في الارتفاع عن الأرض، ثم نطرح ارتفاع البرج.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mo>+</mo><mn dir="ltr">٦٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mo>+</mo><mn dir="ltr">١٢٨</mn><mo>−</mo><mn dir="ltr">٦٤</mn><mo>=</mo><mn dir="ltr">٨٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">فوق البرج</mtext><mo>=</mo><mn dir="ltr">٨٨</mn><mo>−</mo><mn dir="ltr">٢٤</mn><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></math>
\`\`\`



أقصى ارتفاع فوق البرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٤</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p041-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤١ · البند ٤
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤١ · البند ٤ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسمان معاً رأسياً لأعلى، الأول يتحرك وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` والثاني وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني. أوجد ارتفاع الجسم الثاني عندما يصل الأول لأقصى ارتفاع له.
solution:
المعطى: قذف جسمان معاً رأسياً لأعلى، الأول يتحرك وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` والثاني وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني.

السرعة مشتقة الارتفاع؛ للأول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`، وتنعدم عند قمته ويتحول بعدها إلى الهبوط. لأن الجسمين قذفا معًا نستخدم الزمن نفسه لكليهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نعوّض بالزمن نفسه في ارتفاع الجسم الثاني.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p041-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤١ · البند ٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤١ · البند ٥ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، وكان لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` مماساً أفقياً عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، وكان لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` مماساً أفقياً عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.

قاعدة القسمة تعطي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. نستخدمها هنا لأن البسط أو المقام يعتمد على المتغير، ونحافظ على شرط المقام غير الصفري.

المشتقة تساوي ميل المماس؛ الأفقي ميله صفر. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ك</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، والنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` فيجوز استعمال قاعدة القسمة هنا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نشتق القسمة ثم نعوّض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p041-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤١ · البند ٦
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤١ · البند ٦ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى من نقطة على سطح الأرض وكان ارتفاعه يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني. جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` أقصى ارتفاع يصل إليه الجسم. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` السرعة المتوسطة للجسم في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
solution:
المعطى: قذف جسم رأسياً للأعلى من نقطة على سطح الأرض وكان ارتفاعه يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

نساوي السرعة بالصفر لنجد زمن القمة ثم ارتفاعها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

نحسب فرق الإزاحتين خلال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">١</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: أقصى ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ السرعة المتوسطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p041-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤١ · البند ٧
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤١ · البند ٧ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسيم رأسياً إلى أعلى وفقاً للعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` أقصى ارتفاع يصل إليه الجسيم. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` التسارع المتوسط للجسيم في الفترة الزمنية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></math>\`.
solution:
المعطى: قذف جسيم رأسياً إلى أعلى وفقاً للعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

نجد القمة من السرعة الصفرية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٥٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٢٥</mn></mrow></mrow></math>
\`\`\`

التسارع المتوسط فرق السرعتين مقسومًا على الزمن.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ت</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٤٠</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: أقصى ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ التسارع المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p041-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤١ · البند ٨
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤١ · البند ٨ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً إلى أعلى بحيث أن ارتفاعه عن نقطة القذف معطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٢٨</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` الارتفاع بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` أقصى ارتفاع يصل إليه الجسم. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` سرعة الجسم عندما يكون قد قطع مسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٧٢</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`.
solution:
المعطى: قذف جسم رأسياً إلى أعلى بحيث أن ارتفاعه عن نقطة القذف معطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٢٨</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` الارتفاع بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

عند القمة تنعدم السرعة؛ المسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٧٢</mn></math>\` تعني هبوط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn><mi mathvariant="normal">م</mi></mrow></math>\` من القمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢٨</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٥٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٢٤٠</mn></mrow></mrow></math>
\`\`\`

المسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٧٢</mn><mo>=</mo><mn dir="ltr">٢٥٦</mn></mrow></math>\` صعودًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>+</mo><mn dir="ltr">١٦</mn></mrow></math>\` هبوطًا، لذلك الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤٠</mn></math>\`. نقسم معادلة الارتفاع على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\` فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">١٥</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نختار الزمن الأكبر من زمن القمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢٨</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٦</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٢٤٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

نعوّض في السرعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٢٨</mn><mo>−</mo><mn dir="ltr">١٦٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`

النتيجة: أقصى ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٥٦</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p042-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٢ · البند ١
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٢ · البند ١ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من قمة برج يرتفع عن سطح الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\` أطلق جسم رأسياً إلى أعلى فكانت إزاحته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار عن قمة البرج بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية تعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٥</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`. جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` الزمن اللازم ليكون الجسم على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\` من سطح الأرض. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` أقصى ارتفاع عن الأرض يصل إليه الجسم.
solution:
المعطى: من قمة برج يرتفع عن سطح الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\` أطلق جسم رأسياً إلى أعلى فكانت إزاحته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار عن قمة البرج بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية تعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٥</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠</mn></math>\` يعني إزاحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٠</mn><mo>−</mo><mn dir="ltr">٥٠</mn></mrow><mo>=</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\` فوق البرج. بقسمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٥</mn><mi mathvariant="normal">ن</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٥</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

القمة عند السرعة الصفرية؛ نضيف ارتفاع البرج.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٥</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١٫٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>=</mo><mn dir="ltr">٥٠</mn><mo>+</mo><mn dir="ltr">٢٢٫٥</mn><mo>−</mo><mn dir="ltr">١١٫٢٥</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٦١٫٢٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mrow><mn dir="ltr">١</mn><mi mathvariant="normal">ث</mi></mrow></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ث</mi></mrow></math>\`؛ أقصى ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦١٫٢٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p042-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٢ · البند ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٢ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد معادلة المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></math>\` والذي يوازي المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

المستقيمان المتوازيان لهما الميل نفسه؛ نساوي المشتقة بخمسة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

نكتب معادلة المماس بنقطة وميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٥</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p042-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٢ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٢ · البند ٣ · تفريغ مستعاد من المستخدم · الرسم الأصلي من المصدر
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>،</mo><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين قابلين للاشتقاق بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>×</mo><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>\`، بالاعتماد على الشكل المجاور أوجد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>″</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.

![مماس منحنى ق(س) عند النقطة (١،٢) وزاوية ميل ٤٥°](assets/lessons/curriculum-evidence/76532e111810f80527c3.webp)
solution:
![الشكل الأصلي](assets/lessons/curriculum-evidence/76532e111810f80527c3.webp)

المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>،</mo><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين قابلين للاشتقاق بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>×</mo><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>\`، بالاعتماد على الشكل المجاور.

من الرسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وميله سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` لأن المماس يتجه نزولًا بزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">٤٥</mn><mo>°</mo></msup></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٠</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

نشتق حاصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\` الثابت، ثم نعوّض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>+</mo><mi mathvariant="normal">ق</mi><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ً</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ً</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ً</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p042-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٢ · البند ٤
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٢ · البند ٤ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً إلى أعلى من نقطة على سطح أرض أفقية حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. ما أقصى ارتفاع يصل إليه الجسم؟
solution:
ارتفاع الجسم عن سطح الأرض هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٦٤</mn><mi mathvariant="normal">ن</mi></mrow><mo>−</mo><mrow><mn dir="ltr">١٦</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></mrow></math>\` مترًا. المطلوب أقصى ارتفاع.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` للارتفاع و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` للزمن. نختار الأعلى موجبًا؛ السرعة مشتقة الارتفاع. عند القمة تصبح السرعة صفرًا ثم تنقلب من موجبة إلى سالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">السرعة</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٤</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦٤</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi></mrow></math>\` للطرفين ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٣٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mtext> </mtext><mi mathvariant="normal">ف</mi></mrow></math>
\`\`\`



قبل ثانيتين تكون السرعة موجبة وبعدهما سالبة؛ إذن هذا الزمن لقمة المسار. نعوضه في الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٨</mn><mo>−</mo><mn dir="ltr">١٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٨</mn><mo>−</mo><mn dir="ltr">٦٤</mn><mo>=</mo><mn dir="ltr">٦٤</mn><mtext> </mtext><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`



أقصى ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٤</mn></math>\` مترًا.
:::


:::exam-question
id: math-kamel-u1-p042-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٢ · البند ٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٢ · البند ٥ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسيم في خط مستقيم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` إزاحة الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` جد السرعة بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثوان من بدء الحركة. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` متى تبدأ سرعة الجسم بالتزايد؟
solution:
المعطى: يتحرك جسيم في خط مستقيم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` إزاحة الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

نوسع الإزاحة ونشتق للسرعة والتسارع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٦</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١٨</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

نحسب السرعة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ ازدياد السرعة الجبرية يكون حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ت</mi></math>\` موجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>&gt;</mo><mn dir="ltr">١٫٥</mn></mrow></mrow></math>
\`\`\`

المقصود هنا ازدياد السرعة الجبرية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`، فيكون الشرط التسارع\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>&gt;</mo></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` والزمن\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>&gt;</mo></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٫٥</mn><mi mathvariant="normal">ث</mi></mrow></math>\`. إذا كان المقصود مقدار السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">|</mo></mrow></math>\`، فهو يتزايد أيضًا على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ن</mi></mrow><mo>&lt;</mo><mn dir="ltr">١٫٥</mn></mrow></math>\` ثم بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\`؛ يحتاج هذا اللفظ إلى توضيح قبل اعتباره جوابًا وحيدًا.

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ السرعة الجبرية تبدأ التزايد بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٫٥</mn><mi mathvariant="normal">ث</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p042-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٢ · البند ٦
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٢ · البند ٦ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
رسم مماس وعمودي على المماس للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه، فقطعا محور السينات في النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`. جد طول القطعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
المعطى: رسم مماس وعمودي على المماس للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه، فقطعا محور السينات في النقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

قاعدة القوة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` الميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، والعمودي ميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></math>\`. معادلة المستقيم بنقطة وميل هي فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` في المماس:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، ومنه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.

وفي العمودي:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>\`؛ نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٤</mn><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢٦</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mn dir="ltr">٢٦</mn></mrow></mrow></math>
\`\`\`

طول القطعة هو الفرق الموجب بين الإحداثيين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢٦</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٥١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥١</mn><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p042-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٢ · البند ٧
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٢ · البند ٧ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد معادلة العمودي على المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

قيمة الجذر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mn dir="ltr">٩</mn></msqrt><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` والمدخل موجب قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">ع</mi></msqrt></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`؛ نستخدمها مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>\`. بعدها نأخذ المقلوب السالب للميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نكتب العمودي بالنقطة والميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">١٨</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow><mn dir="ltr">٥</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">١٨</mn><mn dir="ltr">٥</mn></mfrac></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p043-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٣ · البند ١
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٣ · البند ١ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mi mathvariant="normal">ك</mi></msup></mrow></math>\`، فإذا كانت سرعة الجسم بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` ثوان تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` أمثال سرعته بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثوان، أوجد تسارع الجسم بعد ثانيتين من بدء الحركة.
solution:
نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` للزمن و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` للثابت. المعطى يصف جسمًا يتحرك، فيستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` الذي يجعل الإزاحة ثابتة. السرعة مشتقة الإزاحة والتسارع مشتقة السرعة. قاعدة القوة تضرب في الأس ثم تنقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ك</mi><msup><mi mathvariant="normal">ن</mi><mrow><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`



نعوض شرط السرعتين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثوانٍ.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><msup><mn dir="ltr">٦</mn><mrow><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ك</mi><msup><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`



لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، نقسم الطرفين على حاصل ضربهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤</mn><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>⟹</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



تصبح السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، والتسارع مشتقتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><mtext> </mtext><mrow><mfrac><mi mathvariant="normal">م</mi><msup><mi mathvariant="normal">ف</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></mrow></math>
\`\`\`



إذن التسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`؛ نستخدم الثانية المربعة لأن التسارع تغير سرعة في وحدة الزمن.
:::


:::exam-question
id: math-kamel-u1-p043-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٣ · البند ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٣ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، وكانت معادلة المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، وكانت معادلة المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

من المماس نقرأ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` ومشتقتها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

قاعدة السلسلة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، لأن مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. قاعدة القسمة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام؛ هنا مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٦</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p043-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٣ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٣ · البند ٣ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` أوجد معادلة المماس المرسوم لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` والذي يوازي المستقيم المار بالنقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

التوازي يعني تساوي الميلين. ميل المستقيم بين نقطتين هو فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` على فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالترتيب نفسه. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mfrac></mrow></mrow></math>\`، فقاعدة القوة للمقلوب تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>−</mo><mo>(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٩</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. الجذران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>±</mo><mn dir="ltr">١</mn></mrow></math>\`، ونستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

نكتب المماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">١٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p043-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٣ · البند ٤
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٣ · البند ٤ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ف</mi></mfrac><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ف</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` إزاحة الجسم بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الدقائق، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` السرعة اللحظية للجسم. احسب تسارع الجسم عندما تكون سرعته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">٣</mn></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">د</mi></mfrac></math>\`.
solution:
المعطى: يتحرك جسم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ف</mi></mfrac><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ف</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` إزاحة الجسم بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الدقائق، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` السرعة اللحظية للجسم.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

نضرب العلاقة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` لنكتب السرعة بدلالتها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ف</mi></mrow></math>
\`\`\`

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ف</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ف</mi></mrow></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، وتحليلها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ف</mi></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ف</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ جذراها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٥</mn></mfrac></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. نستبعد السالب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ف</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

قاعدة السلسلة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ف</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ف</mi></mrow></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ف</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><msup><mi mathvariant="normal">ف</mi><mo>′</mo></msup></mrow></math>\`؛ ولأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ف</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant="normal">ع</mi></mrow></math>\` نستبدلها بالسرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. وحدة الزمن دقيقة، فتكون وحدة التسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">م</mi><mrow><msup><mi mathvariant="normal">دقيقة</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ف</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mi mathvariant="normal">فَ</mi></mrow><mrow><mo>=</mo><mo>(</mo><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٣</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢٤</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">دقيقة</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p043-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٣ · البند ٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٣ · البند ٥ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow><mo>)</mo></mrow></mrow></math>\` أوجد معادلة العمودي على المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow><mo>)</mo></mrow></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msub><mrow><mi mathvariant="normal">لو</mi></mrow><mrow><mi mathvariant="normal">هـ</mi></mrow></msub></mrow><mi mathvariant="normal">هـ</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فنقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mi mathvariant="normal">ع</mi></mfrac></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، وقيمته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></math>
\`\`\`

ميل العمودي المقلوب السالب، ثم معادلته.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mfrac><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mrow><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p043-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٣ · البند ٦
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٣ · البند ٦ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا رسم لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>\` مماساً عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه، فقطع المماس من محور الصادات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وحدات موجبة، وكان قياس زاوية ميل المماس تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`، فما قيمة الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
المعطى: إذا رسم لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>\` مماساً عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه، فقطع المماس من محور الصادات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وحدات موجبة، وكان قياس زاوية ميل المماس تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

ميل المماس ظل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\` سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ومقطعه الصادي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` تساوي قيمة المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\` عندها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نطرح المعادلتين ثم نعوّض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p043-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٣ · البند ٧
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٣ · البند ٧ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى من قمة برج ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠</mn></math>\` متر بحيث أن إزاحته من قمة البرج تعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية. فإذا كان ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\` متر عن سطح الأرض بعد مرور \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` ثوان، فما أقصى ارتفاع يصل إليه الجسم عن سطح الأرض؟
solution:
المعطى: قذف جسم رأسياً للأعلى من قمة برج ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠</mn></math>\` متر بحيث أن إزاحته من قمة البرج تعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية. فإذا كان ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\` متر عن سطح الأرض بعد مرور \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` ثوان.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">ث</mi></mrow></math>\` الارتفاع عن الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`؛ نستعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٠</mn><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٤٠٥</mn><mo>=</mo><mn dir="ltr">١٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></mrow></math>
\`\`\`

نحسب القمة من انعدام السرعة ثم نضيف ارتفاع البرج.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>=</mo><mn dir="ltr">٦٠</mn><mo>+</mo><mn dir="ltr">١٦٠</mn><mo>−</mo><mn dir="ltr">٨٠</mn><mo>=</mo><mn dir="ltr">١٤٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p043-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٣ · البند ٨
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٣ · البند ٨ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم الذي معادلته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` يمس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mfrac></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow></math>\`، فما قيمة الثوابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\`؟
solution:
المعطى: المستقيم الذي معادلته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` يمس منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mfrac></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow></math>\`.

النقطة تقع على المستقيم؛ نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ثم ميله.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

المشتقة عند التماس تساوي ميل المماس. قاعدة القسمة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ب</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`. نستخدم قيمة النقطة وميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ج</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نقسم العلاقتين لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">ج</mi></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p044-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٤ · البند ١، الفرع ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٤ · البند ١ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى من قمة برج ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`، بحيث تتحدد إزاحته عن قمة البرج بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` إزاحة الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. أوجد سرعة الجسم وهو على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٥</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\` من سطح الأرض.
solution:
المعطى: قذف جسم رأسياً للأعلى من قمة برج ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`، بحيث تتحدد إزاحته عن قمة البرج بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` إزاحة الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\` يعني إزاحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٥</mn><mo>−</mo><mn dir="ltr">١٢٠</mn></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mn dir="ltr">١٠٥</mn><mi mathvariant="normal">م</mi></mrow></mrow></mrow></math>\` عن البرج. ننقل الحدود ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` فينتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>−</mo><mn dir="ltr">٢١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. الجذران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`؛ نستبعد الزمن السالب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢٠</mn><mo>+</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">١٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

نشتق الارتفاع ونعوّض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٧</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٥٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p044-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٤ · البند ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٤ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد معادلة المماس المرسوم لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mi mathvariant="normal">ع</mi></mfrac></math>\`. هنا مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`. نستعمل القاعدتين ثم نعوض الصفر؛ مدخل اللوغاريتم هناك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` موجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></msup></mrow><mrow><mo>+</mo><mfrac><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow></mrow></math>
\`\`\`

عند الصفر الميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ نكتب معادلة المماس.

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٠</mn></msup><mo>+</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p044-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٤ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٤ · البند ٣ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى من سطح الأرض وكانت إزاحته عن سطح الأرض تعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` الإزاحة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. أوجد سرعة الجسم عندما يقطع مسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٥</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`.
solution:
المعطى: قذف جسم رأسياً للأعلى من سطح الأرض وكانت إزاحته عن سطح الأرض تعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` الإزاحة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`؛ عند القمة تنعدم، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ث</mi></mrow></mrow></math>\`. ارتفاع القمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣٠</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٩</mn></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤٥</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`. المسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٥</mn></math>\` تعني هبوط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٥</mn><mo>−</mo><mn dir="ltr">٤٥</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\` بعد الصعود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٤٥</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></math>
\`\`\`

نقسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` فينتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نختار زمن النزول الأكبر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ث</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

نحسب السرعة من المشتقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٥٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p044-r4-b
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٤ · البند ٤، الفرع ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٤ · البند ٤ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى من نقطة على سطح الأرض بحيث يتحدد بعده عن سطح الأرض بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. جد سرعة الجسم عندما يكون قد قطع مسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٥</mn></math>\` متراً.
solution:
المعطى: قذف جسم رأسياً للأعلى من نقطة على سطح الأرض بحيث يتحدد بعده عن سطح الأرض بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`؛ تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ث</mi></mrow></mrow></math>\`. ارتفاع القمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢٠</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٤</mn></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`. المسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٥</mn></math>\` تعني هبوط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٥</mn><mo>−</mo><mn dir="ltr">٢٠</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\` بعد الصعود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`

نقسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نختار الزمن الأكبر من زمن القمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ث</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">١٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نحسب السرعة الموقعة؛ السالب يعني النزول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٣٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p044-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٤ · البند ٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٤ · البند ٥ · تفريغ مستعاد من المستخدم · الرسم الأصلي من المصدر
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` والمماس له عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فإذا كان المثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">و</mi><mi mathvariant="normal">ب</mi></mrow></math>\` قائم الزاوية في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">و</mi></math>\` ومتساوي الساقين، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="true">)</mo></mrow></mrow></math>\`.

![المماس عند النقطة (١،٣) والمثلث أ و ب القائم والمتساوي الساقين](assets/lessons/curriculum-evidence/9f989fe616151b52dc2b.webp)
solution:
![الشكل الأصلي](assets/lessons/curriculum-evidence/9f989fe616151b52dc2b.webp)

المعطى: الشكل المجاور يمثل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` والمماس له عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فإذا كان المثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">و</mi><mi mathvariant="normal">ب</mi></mrow></math>\` قائم الزاوية في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">و</mi></math>\` ومتساوي الساقين.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

من الرسم النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`؛ والمثلث القائم المتساوي الساقين يجعل ميل المماس سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

مشتقة مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi></mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow></math>\` بالسلسلة. وفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` نضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`. نطرح النتيجتين ثم نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mi mathvariant="normal">قَ</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">قَ</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">لَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p046-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٦ · البند ١
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٦ · البند ١ · تفريغ مستعاد من المستخدم · الرسم الأصلي من المصدر
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` والمماس المرسوم له عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فإذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>+</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، جد معادلة العمودي على المماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

![المماس عند س=٢ ومقطعه مع محور السينات ٥/٣](assets/lessons/curriculum-evidence/ddc9ba11f4a7eaa485a3.webp)
solution:
![الشكل الأصلي](assets/lessons/curriculum-evidence/ddc9ba11f4a7eaa485a3.webp)

المعطى: يبين الشكل المجاور منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` والمماس المرسوم له عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فإذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>+</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

لنسمّ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mi mathvariant="normal">ع</mi></mrow></math>\`؛ من الرسم المماس يقطع محور السينات عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ع</mi></mrow></mrow></math>
\`\`\`

نستخدم مجموع القيمة والميل المعطى لنجد كليهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نكتب العمودي بنقطة وميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p046-r2-b
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٦ · البند ٢، الفرع ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٦ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً إلى أعلى من نقطة على سطح الأرض بحيث أن بعده عن سطح الأرض يتحدد بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. متى يكون الجسم على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\` متراً من سطح الأرض؟
solution:
السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

نساوي الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\`، ونقسم المعادلة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` وننقل الحدود: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٨</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نحللها بعاملين مجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\` وحاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

مشتقة الارتفاع هي السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`؛ نعوض بالزمنين. الموجب يعني صعودًا والسالب يعني هبوطًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ث</mi></mrow></math>\` صعودًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ث</mi></mrow></math>\` هبوطًا.
:::


:::exam-question
id: math-kamel-u1-p046-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٦ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٦ · البند ٣ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما معادلة المماس لمنحنى العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></math>\` الواقعة عليه؟
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\` نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` من العلاقة الأصلية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` اقترانًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ بالسلسلة مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></math>\`. قاعدة الضرب تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>×</mo><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></mrow></math>\`. نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\` ثم نعوض؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` غير صفرية فيجوز الاختصار.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><msup><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نكتب المماس بنقطة وميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow><mn dir="ltr">٩</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p046-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٦ · البند ٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٦ · البند ٥ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً إلى أعلى من قمة برج بحيث تعين العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` ارتفاع الجسم عن سطح البرج بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية. إذا كانت المسافة التي قطعها الجسم لحظة وصوله إلى الأرض تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٠٥</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`، فجد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` ارتفاع البرج. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` سرعة الجسم لحظة وصوله إلى سطح الأرض.
solution:
السرعة مشتقة الإزاحة من قمة البرج. عند القمة تنعدم، فنحسب زمنها وارتفاعها فوق البرج.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦٠</mn><mo>−</mo><mn dir="ltr">٨٠</mn><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></math>
\`\`\`



المسافة إلى الأرض تجمع صعود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` وهبوط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` أخرى إلى مستوى البرج، ثم ارتفاع البرج نفسه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٠٥</mn><mo>=</mo><mn dir="ltr">٨٠</mn><mo>+</mo><mn dir="ltr">٨٠</mn><mo>+</mo><mtext dir="rtl">ارتفاع البرج</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ارتفاع البرج</mtext><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></math>
\`\`\`



عند الأرض تكون الإزاحة من قمة البرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤٥</mn></mrow></math>\`. نحل للزمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٤٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` لأنه زمن سالب، فيبقى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` ثوانٍ.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٩٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></math>
\`\`\`



ارتفاع البرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`. سرعة الارتطام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٥٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`، أي مقدارها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٥٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` نحو الأسفل.
:::


:::exam-question
id: math-kamel-u1-p047-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٧ · البند ١
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٧ · البند ١ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسم في خط مستقيم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` الإزاحة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. جد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` سرعة الجسم بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثوان من بدء الحركة. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تسارع الجسم عندما يعكس الجسم اتجاه حركته.
solution:
المعطى: يتحرك جسم في خط مستقيم حسب العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` الإزاحة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

نشتق الإزاحة ونحسب السرعة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٦</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١٨</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

السرعة تتبدل حول الصفر الموجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ نعوّض في مشتقتها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ت</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٤</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></mrow></math>\`؛ التسارع عند الانعكاس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٨</mn><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p047-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٧ · البند ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٧ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فجد معادلة المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

من المعطيات نقرأ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` ومشتقتيهما عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

العلاقة الأصلية تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. لوجود حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>×</mo><mi mathvariant="normal">ل</mi></mrow></math>\` نستخدم مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mi mathvariant="normal">ل</mi></mrow><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></mrow></mrow></math>\`؛ ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`. هكذا نحصل على نقطة التماس وميلها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

نكتب المماس بالنقطة والميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p047-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٧ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٧ · البند ٣ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة العمودي على المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` مضروبة في مشتقة المدخل؛ لذلك مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`. نستخدم هذه القيم للنقطة والميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

ميل العمودي نصف؛ نكتب معادلته.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>−</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p047-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٧ · البند ٤
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٧ · البند ٤ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تحرك جسم في خط مستقيم وفق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` تمثل بعد الجسم عن نقطة ثابتة بالأمتار. فإذا كان تسارعه عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow><mi mathvariant="normal">ث</mi></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mn dir="ltr">١٨</mn></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`، ويعكس من اتجاه حركته في تلك اللحظة، جد قيمة كل من الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
نوسع الإزاحة، ثم نشتقها للسرعة ونشتق السرعة للتسارع. عند عكس الاتجاه تكون السرعة صفرًا، مع تغير إشارتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mtext dir="rtl">ب</mtext><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">بن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أن</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، شرطي السرعة والتسارع يعطيان:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`



نقسم الأولى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` لنجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، ثم نعوض في الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١٨</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٨</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



الفحص: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` وموجبة بعدها، فتتحقق عودة الاتجاه.
:::


:::exam-question
id: math-kamel-u1-p047-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٧ · البند ٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٧ · البند ٥ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` يوازي المستقيم المار بالنقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٢٤</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، جد قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
solution:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` يوازي المستقيم المار بالنقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٢٤</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

نساوي ميل المماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` بميل المستقيم من النقطتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">٨</mn></mrow><mrow><mo>(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">أ</mi><mo>)</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١٦</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

التوازي يعني تساوي الميلين. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` يجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ نضرب فيه: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`. بالتوزيع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦</mn><mo>−</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ونحلل؛ الجذران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، ونختار السالب حسب الشرط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mrow><mo>=</mo><mo>(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p047-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٧ · البند ٦
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٧ · البند ٦ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى من نقطة على سطح الأرض بحيث يتحدد ارتفاعه عن سطح الأرض بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. جد المسافة التي قطعها الجسم خلال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` ثوان من بدء الحركة؟
solution:
المعطى: قذف جسم رأسياً للأعلى من نقطة على سطح الأرض بحيث يتحدد ارتفاعه عن سطح الأرض بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` ارتفاع الجسم بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

القمة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ث</mi></mrow></math>\` وارتفاعها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ث</mi></mrow></math>\` الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></mrow></math>
\`\`\`

نجمع مسافة الصعود والهبوط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٤٥</mn><mo>+</mo><mo>(</mo><mn dir="ltr">٤٥</mn><mo>−</mo><mn dir="ltr">٢٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦٥</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p048-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٨ · البند ١
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٨ · البند ١ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>\` عند النقطة التي إحداثيها السيني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

قاعدة الضرب تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>×</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></mrow></math>\`؛ لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي نفسها. نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` عاملًا مشتركًا، ثم نحسب النقطة والميل عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></msup><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`



نكتب المماس بالنقطة والميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p048-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٨ · البند ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٨ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` يصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣٥</mn><mo>°</mo></mrow></math>\` مع الاتجاه الموجب لمحور السينات، جد معادلة المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: المماس لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` يصنع زاوية قياسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣٥</mn><mo>°</mo></mrow></math>\` مع الاتجاه الموجب لمحور السينات.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

من النقطة نعرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`. ميل المماس هو ظل زاوية ميله؛ و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><msup><mn dir="ltr">١٣٥</mn><mo>°</mo></msup></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

قاعدة الضرب تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`؛ في الحد الثاني نستخدم السلسلة ومشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. ثم نحسب النقطة والميل عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`

نكتب المماس.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٩</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p048-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٨ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٨ · البند ٣ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً لأعلى من قمة برج ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٠٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\` بحيث أن ارتفاعه عن قمة البرج بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`. إذا كان ارتفاع الجسم عن سطح الأرض بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` ثوان يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٣٥</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` أقصى ارتفاع يصله الجسم عن سطح البرج. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` سرعة ارتطام الجسم بالأرض.
solution:
المعطى: قذف جسم رأسياً لأعلى من قمة برج ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٠٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\` بحيث أن ارتفاعه عن قمة البرج بالأمتار بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ثانية يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`. إذا كان ارتفاع الجسم عن سطح الأرض بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` ثوان يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٣٥</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

الارتفاع عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">ث</mi></mrow></math>\` يعطينا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٠٠</mn><mo>+</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٢٤٥</mn><mo>=</mo><mn dir="ltr">١٣٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></mrow></math>
\`\`\`

القمة عند السرعة الصفرية؛ نحسب الإزاحة من البرج.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></mrow></math>
\`\`\`

عند الأرض الارتفاع صفر؛ بقسمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٠٠</mn><mo>+</mo><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، وتحليلها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` ونستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` لأنه زمن سالب، ثم نحسب السرعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٠٠</mn><mo>+</mo><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">١٠</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>\`؛ أقصى ارتفاع فوق البرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ الارتطام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p048-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٨ · البند ٤
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٨ · البند ٤ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من نقطة على سطح الأرض قذف جسم رأساً لأعلى بحيث يتحدد بعده عن سطح الأرض بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`. إذا علمت أن الجسم سقط على سطح عمارة ترتفع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\` عن سطح الأرض، جد سرعة ارتطام الجسم بسطح العمارة علماً بأن أقصى ارتفاع وصله الجسم عن سطح الأرض هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٨٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`؟
solution:
وجود أقصى ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` يقتضي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≤</mo><mn dir="ltr">٠</mn></mrow></math>\` فلن يصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi></mrow><mo>−</mo><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\` إلى قمة للزمن غير السالب.

السرعة مشتقة الارتفاع، وعند القمة تنعدم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mtext dir="rtl">ن</mtext><mtext dir="rtl">قمة</mtext></msub><mo>=</mo><mfrac><mn dir="ltr">٢٠</mn><mtext dir="rtl">أ</mtext></mfrac></mrow></math>
\`\`\`



نعوض زمن القمة في الارتفاع ونساويه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨٠</mn><mo>=</mo><mn dir="ltr">٤٠</mn><mfrac><mn dir="ltr">٢٠</mn><mtext dir="rtl">أ</mtext></mfrac><mo>−</mo><mtext dir="rtl">أ</mtext><msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٢٠</mn><mtext dir="rtl">أ</mtext></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨٠</mn><mo>=</mo><mfrac><mn dir="ltr">٨٠٠</mn><mtext dir="rtl">أ</mtext></mfrac><mo>−</mo><mfrac><mn dir="ltr">٤٠٠</mn><mtext dir="rtl">أ</mtext></mfrac><mo>=</mo><mfrac><mn dir="ltr">٤٠٠</mn><mtext dir="rtl">أ</mtext></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



إذن زمن القمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثوان. نساوي الارتفاع بارتفاع سطح العمارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٦٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mtext dir="rtl">ن</mtext><mo>+</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الهبوط بعد القمة، فنختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` ثوانٍ. ثم نحسب السرعة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`



سرعة الارتطام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`؛ الإشارة تعني الهبوط.
:::


:::exam-question
id: math-kamel-u1-p049-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٩ · البند ٢
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٩ · البند ٢ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى من سطح عمارة بحيث أن بعده عن سطح الأرض يعطى بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٠٠</mn><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` الإزاحة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` حيث أن أقصى ارتفاع وصله الجسم عن سطح العمارة هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٨٠</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` سرعة الجسم عندما يكون تحت مستوى سطح العمارة بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤٥</mn></mrow><mi mathvariant="normal">م</mi></mrow></math>\`.
solution:
ارتفاع سطح العمارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`، والمطلوب في الشرط الأول أقصى ارتفاع فوق هذا السطح، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.

السرعة مشتقة الارتفاع. عند القمة تنعدم، والسرعة الابتدائية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` موجبة لأن القذف إلى الأعلى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mtext dir="rtl">ن</mtext><mtext dir="rtl">قمة</mtext></msub><mo>=</mo><mfrac><mtext dir="rtl">أ</mtext><mn dir="ltr">١٠</mn></mfrac></mrow></math>
\`\`\`



الارتفاع فوق العمارة عند القمة يساوي الإزاحة أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨٠</mn><mo>=</mo><mtext dir="rtl">أ</mtext><mfrac><mtext dir="rtl">أ</mtext><mn dir="ltr">١٠</mn></mfrac><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mo fence="true">(</mo><mfrac><mtext dir="rtl">أ</mtext><mn dir="ltr">١٠</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢٠</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦٠٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`



تحت سطح العمارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥</mn><mi mathvariant="normal">م</mi></mrow></math>\` يعني ارتفاعًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٥</mn><mi mathvariant="normal">م</mi></mrow></math>\` عن الأرض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠٠</mn><mo>+</mo><mn dir="ltr">٤٠</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٥٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` ثوانٍ لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الزمن</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` غير مقبول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٩٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>\`، والسرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٥٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` نحو الأسفل.
:::


:::exam-question
id: math-kamel-u1-p049-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٩ · البند ٣
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٩ · البند ٣ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان العمودي على المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` يقطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` وحدات موجبة من محور السينات وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، جد معادلة المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؟
solution:
المعطى: العمودي على المماس لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` يقطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` وحدات موجبة من محور السينات وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

لنسمّ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>=</mo><mi mathvariant="normal">ع</mi></mrow></math>\`؛ المعطى يجعل ميل المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` أيضًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mi mathvariant="normal">ع</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

ميل العمودي من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٧</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\` يساوي سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">ع</mi><mn dir="ltr">٤</mn></mfrac></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mfrac><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نكتب المماس بالنقطة والميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p049-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٩ · البند ٤
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٩ · البند ٤ · تفريغ مستعاد من المستخدم · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمس المستقيم \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\` منحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` عند \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>\`، ويكون المستقيم \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` عموديًا على المماس لمنحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ℓ</mi></mrow></math>\` عند \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>\`. إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mstyle scriptlevel="0" displaystyle="true"><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ℓ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac></mstyle></mrow></math>\`، فجد \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>\`.
solution:
من نقطة التماس الأولى نعرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. والمشتقة عند نقطة التماس هي ميل المماس؛ نحول المستقيم إلى صورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mi mathvariant="normal">م</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\` لقراءة ميله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn><mo>⟹</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المستقيم الثاني عمودي على المماس؛ لذلك حاصل ضرب ميله في ميل المماس يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><msup><mi mathvariant="normal">ℓ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ℓ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نسمي البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` والمقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` لتطبيق قاعدة قسمة اقترانين؛ المقام عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` غير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ℓ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ن</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



مشتقة المقام تحتاج قاعدة الضرب: نشتق العامل الأول ونبقي الثاني، ثم نعكس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">د</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ℓ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msup><mi mathvariant="normal">ℓ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">د</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">ن</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mi mathvariant="normal">د</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">د</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">د</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٨١</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤٥</mn><mo>−</mo><mn dir="ltr">٢٣١</mn></mrow><mn dir="ltr">٨١</mn></mfrac><mo>=</mo><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mo>−</mo><mfrac><mn dir="ltr">٩٢</mn><mn dir="ltr">٢٧</mn></mfrac></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p049-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٩ · البند ٥
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٩ · البند ٥ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` يقطع منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` ولهما نفس المماس عند تلك النقطة، ما قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\`؟
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` يقطع منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi></mrow></math>\` عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` ولهما نفس المماس عند تلك النقطة، ما قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\`؟.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

النقطة المشتركة تعطي قيمتي الاقترانين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

المماس المشترك يفرض تساوي المشتقتين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p049-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٤٩ · البند ٦
question: تطبيقات هندسية وفيزيائية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥ · النسخة المصورة، ص ٤٩ · البند ٦ · تفريغ مستعاد من المستخدم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المثلث المكون من المماس المرسوم من النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\` لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` والعمودي على المماس عند نقطة التماس والمستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؟
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

مماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`؛ مروره بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mo>(</mo><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>(</mo><mo>−</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></mrow></mrow></math>\` ننقل الحدود: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وميل العمودي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></math>
\`\`\`

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، فنضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` لنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`. قاعدة المثلث على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` طولها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`، والارتفاع العمودي من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>×</mo><mn dir="ltr">١٠</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\` وحدة مربعة.
:::


:::mcq
id: math-kamel-u1-p037-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٣٧ · البند ١
kicker: الكامل، الوحدة الأولى · الصورة، ص ٣٧ · البند ١ · ٢٠٢٠ الاستكمالية
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كانت معادلة العمودي على منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
explanation:
المعطى: معادلة العمودي على منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

نكتب المستقيم بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لنقرأ ميل العمودي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

ميلا المماس والعمودي متعاكسا المقلوب؛ نستخدم هذه العلاقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::exam-question
id: math-kamel-u1-p044-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٤٤ · البند ٤
question: التطبيقات الهندسية والفيزيائية للمشتقة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً للأعلى من نقطة على سطح الأرض بحيث يتحدد بعده عن سطح الأرض بالعلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi></mrow></math>\` ارتفاع الجسم بالأمتار و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\` الزمن بالثواني. جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` أقصى ارتفاع يصله الجسم. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` سرعة الجسم عندما يكون قد قطع مسافة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٥</mn></mrow></math>\` متراً.
solution:
المعطى: قذف جسم رأسياً للأعلى من نقطة على سطح الأرض بحيث يتحدد بعده عن سطح الأرض بالعلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi></mrow></math>\` ارتفاع الجسم بالأمتار و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\` الزمن بالثواني.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

عند القمة تنعدم السرعة؛ وبعدمسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٥</mn></math>\` يكون الجسم هبط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١٥</mn></mrow></mrow></math>
\`\`\`

نقسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi></mrow><mo>−</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` فينتج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. الجذران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` لأنه بعد زمن القمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، ثم نحسب السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">١٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: أقصى ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ السرعة بعدمسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٥</mn><mi mathvariant="normal">م</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p046-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٤٦ · البند ٢
question: التطبيقات الهندسية والفيزيائية للمشتقة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً إلى أعلى من نقطة على سطح الأرض بحيث أن بعده عن سطح الأرض يتحدد بالعلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi></mrow></math>\` ارتفاع الجسم بالأمتار و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\` الزمن بالثواني. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` احسب أقصى ارتفاع يصله الجسم. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` متى يكون الجسم على ارتفاع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn></mrow></math>\` متراً من سطح الأرض؟
solution:
السرعة مشتقة الارتفاع. عند أقصى ارتفاع تنعدم، وتتحول بعدها من موجبة إلى سالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نعوض زمن القمة في الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٩٠</mn><mo>−</mo><mn dir="ltr">٤٥</mn><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></math>
\`\`\`



أقصى ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥</mn><mi mathvariant="normal">م</mi></mrow></math>\`. لإيجاد زمن الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` نساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` بهذه القيمة، ثم نقسم المعادلة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٠</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mtext dir="rtl">ن</mtext><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



العددان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` حاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\` ومجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`، فنحلل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl"> أو ن</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نحدد اتجاه الحركة بإشارة السرعة، مع اختيار الأعلى موجبًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٤٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



يصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">م</mi></mrow></math>\` بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ث</mi></mrow></math>\` صعودًا، وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ث</mi></mrow></math>\` هبوطًا.
:::


:::exam-question
id: math-kamel-u1-p049-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٤٩ · البند ١
question: التطبيقات الهندسية والفيزيائية للمشتقة
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">٢</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">٢</mn></mrow></mrow></munder><mrow><mfrac><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` متصلين على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، جد معادلة المماس لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؟
solution:
المماس يحتاج نقطة تماس وميلًا. ميله عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. نستخرج أولًا قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` ومشتقتيهما من النهايتين.

النسبة الأولى لها نهاية منتهية ومقامها يقترب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`؛ لذلك يقترب بسطها من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>→</mo><mn dir="ltr">٢</mn></mrow></math>\`. وبما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` متصل، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. وبالطريقة نفسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

تصبح كل نهاية تعريفًا للمشتقة؛ فرق القيم مقسومًا على فرق المدخلين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">ل</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مشتقة حاصل الضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mi mathvariant="normal">ل</mi></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mi mathvariant="normal">ل</mi></mrow><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></mrow></mrow></math>\`؛ ومشتقة الطرف الآخر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mtext dir="rtl">ل</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` والميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`. نستخدم فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٥</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`


:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "تطبيقات هندسية وفيزيائية",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة تطبيقات هندسية وفيزيائية من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "123 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
