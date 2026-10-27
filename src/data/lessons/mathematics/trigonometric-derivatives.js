import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `:::exam-question
id: math-book-p015-ex1
title: الكتاب، ص ١٣ · مثال ١ · متوسط
question: مشتقات الاقترانات المثلثية
reference: [السؤال، النسخة المصورة، ص ١٥](assets/lessons/mathematics/source-crops/math-book-p015-ex1-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p015-ex1-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` بالراديان؛ نضعهما في قاعدة الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mi mathvariant="normal">س</mi><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

عند الزاوية المطلوبة تكون قيمة الجيب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وجيب التمام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`؛ لذلك يساوي الحد الأول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` والحد الثاني صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>×</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

إذن قيمة المشتقة المطلوبة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

:::


:::exam-question
id: math-book-p015-ex2
title: الكتاب، ص ١٣ · مثال ٢ · متوسط
question: مشتقات الاقترانات المثلثية
reference: [السؤال، النسخة المصورة، ص ١٥](assets/lessons/mathematics/source-crops/math-book-p015-ex2-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p015-ex2-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`.

قاعدة القسمة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` على مربع المقام. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ نستخدمهما في الكسر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>(</mo><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow><mrow><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

طرح الحد السالب يحوّله إلى جمع؛ يبقى المقام غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>≠</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-book-p016-discussion
title: الكتاب، ص ١٤ · فكّر وناقش
question: مشتقات الاقترانات المثلثية
reference: الكتاب، النسخة المصورة، ص ١٦، فكّر وناقش
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استنتج قواعد الاشتقاق الآتية بكتابة كل اقتران بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` وجتاس، ثم باستخدام قواعد الاشتقاق: مشتقات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`.

solution:
المعطى: تحقق من صحة القواعد السابقة بالتعويض بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، ثم باستخدام قواعد الاشتقاق: مشتقات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`.

قاعدة القسمة تعطي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. نستخدمها هنا لأن البسط أو المقام يعتمد على المتغير، ونحافظ على شرط المقام غير الصفري.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نستخدم الهوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` لتبسيط البسط. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>=</mo><mfrac><mi mathvariant="normal">جا</mi><mi mathvariant="normal">جتا</mi></mfrac></mrow></math>\` ثم نشتق القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نعكس النسبة ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظتا</mi></math>\`؛ ترتيب الطرح يعطي الإشارة السالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">ظتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><msup><mrow><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`؛ سالب مشتقة المقام يلغي السالب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قتا</mi></math>\` مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\`؛ مشتقة المقام موجبة فتبقى الإشارة سالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ظا</mi><mo>′</mo></msup><mo>=</mo><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ظتا</mi><mo>′</mo></msup><mo>=</mo><mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">قتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">قا</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">ظا</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">قتا</mi><mo>′</mo></msup><mo>=</mo><mrow><mo>−</mo><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">ظتا</mi></mrow></mrow></mrow></math>\`.

يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظتا</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قتا</mi></math>\`؛ كل مشتقة على مجال الاقتران الأصلي.
:::


:::exam-question
id: math-book-p016-ex3
title: الكتاب، ص ١٤ · مثال ٣ · متوسط
question: مشتقات الاقترانات المثلثية
reference: [السؤال، النسخة المصورة، ص ١٦](assets/lessons/mathematics/source-crops/math-book-p016-ex3-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p016-ex3-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.  مشتقة المجموع هي مجموع المشتقتين؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">ظا</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">قا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`، تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="false">(</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mo>+</mo><msup><mrow><mo stretchy="false">(</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p016-ex4
title: الكتاب، ص ١٤ · مثال ٤
question: مشتقات الاقترانات المثلثية
reference: الكتاب، النسخة المصورة، ص ١٦، مثال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، أثبت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mrow><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، أثبت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mrow><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">قتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نضعهما في قاعدة الضرب؛ لذلك يحمل الحدّان إشارة سالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><msup><mrow><mtext dir="rtl">ظتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>−</mo><msup><mrow><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نعوّض مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظتا</mi></math>\` بمربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قتا</mi></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` ثم نوزع السالب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>(</mo><msup><mrow><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>−</mo><msup><mrow><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mrow><mo>=</mo><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">قتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">قتا</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p016-exercise1-a
title: الكتاب، ص ١٤ · تمارين ١-٣، السؤال ١ أ
question: مشتقات الاقترانات المثلثية
reference: الكتاب، النسخة المصورة، ص ١٦، تمارين ١-٣، السؤال ١ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.
solution:
مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`؛ ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">َ</mi><mo>=</mo><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نضرب كل مشتقة في معاملها مع الحفاظ على إشارتها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p016-exercise1-b
title: الكتاب، ص ١٤ · تمارين ١-٣، السؤال ١ ب
question: مشتقات الاقترانات المثلثية
reference: الكتاب، النسخة المصورة، ص ١٦، تمارين ١-٣، السؤال ١ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mfrac></mrow></math>\`.
solution:
قاعدة القسمة تعطي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. نستخدمها هنا لأن البسط أو المقام يعتمد على المتغير، ونحافظ على شرط المقام غير الصفري.

يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف الكسر. نكتب البسط سالب المقام زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فيقصر حساب القسمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow></math>
\`\`\`

البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ثابت؛ مشتقته صفر، فنستخدم قاعدة القسمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></mrow></mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac></math>\`.
:::


:::exam-question
id: math-book-p016-exercise1-c
title: الكتاب، ص ١٤ · تمارين ١-٣، السؤال ١ ج
question: مشتقات الاقترانات المثلثية
reference: الكتاب، النسخة المصورة، ص ١٦، تمارين ١-٣، السؤال ١ ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`.
solution:
لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`، ومشتقة مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`. نستخدمهما مع قاعدة الضرب بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ومربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>+</mo><mi mathvariant="normal">س</mi><mo>×</mo><mn dir="ltr">٢</mn><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>×</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نجمع عاملي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` في قوة واحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p016-exercise2
title: الكتاب، ص ١٤ · تمارين ١-٣، السؤال ٢
question: مشتقات الاقترانات المثلثية
reference: الكتاب، النسخة المصورة، ص ١٦، تمارين ١-٣، السؤال ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mtext dir="rtl">−٢π</mtext><mo>،</mo><mtext dir="rtl">٢π</mtext></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد مجموعة قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي تجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mtext dir="rtl">−٢π</mtext><mo>،</mo><mtext dir="rtl">٢π</mtext></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.

قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mn dir="ltr">٢</mn></mfrac></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، فيكون طرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>+</mo><mi mathvariant="normal">جا</mi></mrow></math>\`. نشتق ثم نساوي المشتقة بالصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

قيمة الجيب بين سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، لذلك أي حل يقع بينهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>|</mo><mi mathvariant="normal">س</mi><mo>|</mo><mo>≤</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

في هذه الفترة إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` توافق إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ فلا يكون مجموعهما صفرًا إلا عند الصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">{</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">}</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p021-worksheet1-q1
title: الكتاب، ص ١٩ · ورقة عمل ١، السؤال ١
question: مشتقات الاقترانات المثلثية
reference: الكتاب، النسخة المصورة، ص ٢١، ورقة عمل ١، السؤال ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، أثبت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">صََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، أثبت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">صََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` مقسومًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` لتسهيل الاشتقاق.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نشتق حاصل الضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>\` مرة ثم مرة أخرى بقاعدة الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">صَ</mi><mo>=</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">صَ</mi><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">صً</mi><mo>=</mo><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نستبدل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ص</mi></mrow></mrow></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` غير الصفرية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">صً</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">صَ</mi><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صً</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><mi mathvariant="normal">صَ</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
:::


:::mcq
id: math-book-p034-test1-3
title: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٣
kicker: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٣
reference: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٦</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">جا</mi></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`. نشتق مرتين بالسلسلة، ونضرب في مشتقة الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، في كل مرة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نجمع المضاعفات المتشابهة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p024-r1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ١ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ١ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r1-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r1-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٥</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` تساوي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">جا</mi></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`. نضرب في مشتقة الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، في كل مرة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نجمع الحدود المتشابهة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mo>(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>)</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p024-r2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٢ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٢ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r2-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r2-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ص</mi><mo>َ</mo></msup><mi mathvariant="normal">ص</mi></mfrac></math>\` تساوي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">ظا</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` هي مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>(</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow></mrow></math>
\`\`\`

نختصر العامل المشترك مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؛ حيث النسبة معرّفة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></mfrac><mo>=</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p024-r3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٣ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٣ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r3-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r3-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">ظتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">قتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قتا</mi></math>\` هي سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mi mathvariant="normal">ظتا</mi></mrow></math>\`، ونضرب في مشتقة الزاوية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mo>−</mo><mtext dir="rtl">قتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نضع العامل العددي أولًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">قتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">قتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p024-r6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٦ · سهل
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٦ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r6-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r6-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><msup><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mtext dir="rtl">قا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`. مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هو حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` في نفسها؛ نطبق قاعدة الضرب: نشتق العامل الأول ونترك الثاني، ثم نترك الأول ونشتق الثاني، ونجمع الناتجين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>+</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نجمع الحدين المتساويين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p024-r4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٤ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٤ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r4-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r4-key.webp)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`:
- [ ] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠٫٥</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`. نستخدم الضرب والسلسلة، فنضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

عند ربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` واحدًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn><mo>×</mo><mn dir="ltr">٠</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p024-r5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٥ · متوسط
kicker: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · البند ٥ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r5-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u1-p024-r5-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><msup><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><msup><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><msup><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`. بالسلسلة نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` في مربع الجيب وفي مشتقة الجيب، ثم يختصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` مع المعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` عاملًا مشتركًا؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` ناقص مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` هو مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p024-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٤ · السؤال ٧
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٤، السؤال ٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` تساوي:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`.

قاعدة القسمة تعطي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. نستخدمها هنا لأن البسط أو المقام يعتمد على المتغير، ونحافظ على شرط المقام غير الصفري.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نضعهما في قاعدة القسمة ونوزع إشارات البسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mo>+</mo><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

مجموع مربعي الجيب وجيب التمام واحد؛ نختصر عاملًا من المقام.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p025-q1
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٥ · السؤال ١
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٥، السؤال ١
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>×</mo><mtext dir="rtl">ظا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><msup><mtext dir="rtl">قا</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">جا</mtext><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>×</mo><mtext dir="rtl">ظا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` بضعف الزاوية، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` كنسبة جيب إلى جيب تمام.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow></mrow></math>
\`\`\`

يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لتعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؛ لذلك يجوز اختصاره على المجال الأصلي. مشتقة مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\` بالسلسلة؛ نستخدمهما بعد التبسيط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٨</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نرجع إلى صيغة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` ضعف الزاوية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p025-q2
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٥ · السؤال ٢
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٥، السؤال ٢
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>)</mo></mrow><mrow><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | غير موجودة
explanation:


عند التعويض يقترب البسط والمقام إلى الصفر؛ الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\` غير محددة وليست قيمة النهاية.

قاعدة لوبيتال تستبدل كسرًا من هذه الصورة بكسر مشتقة البسط على مشتقة المقام إذا وجدت نهايته. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mi mathvariant="normal">ع</mi></mfrac></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`.

نشتق البسط والمقام كلًا على حدة؛ لا نستخدم مشتقة القسمة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><mrow><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



أصبحت نسبة التعويض محددة، فنحسب قيمتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p025-q3
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٥ · السؤال ٣
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٥، السؤال ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` مقسومة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هي مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mfrac><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow></mfrac></mrow><mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`؛ نستخدمها بعد التبسيط مع إبقاء مجال التعبير الأصلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>≠</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p025-q4
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٥ · السؤال ٤
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٥، السؤال ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نشتق مرتين بالسلسلة، ونضرب كل مرة في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نجمع معاملي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p025-q5
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٥ · السؤال ٥
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٥، السؤال ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">جتا</mtext><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><msqrt><mn dir="ltr">٢</mn></msqrt></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٢</mn></msqrt></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">جتا</mtext><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.

نستخدم فرق المربعين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`، لأن العوامل تظهر بهذا الشكل بعد التعويض. نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ لأن بقية العوامل مكتوبة بقوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`. عندئذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، والعوامل تصبح:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٤</mn></msup></mrow></math>
\`\`\`



ثم نعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، فيصبح الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٨</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

قاعدة القوة والسلسلة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٨</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٨</mn><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٧</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>×</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ فيتحول السالبان إلى موجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٨</mn><msup><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٧</mn></mrow></msup><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

عند ربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\` يتساوى الجيب وجيب التمام.

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٨</mn></msup></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٤</mn></msup></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">١٦</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p025-q6
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٥ · السؤال ٦
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٥، السؤال ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mtext dir="rtl">جتا</mtext><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٤</mn></msup><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فماذا يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></math>\`
explanation:
نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\`.

نحلل فرق القوتين الرابعة بوصفه فرق مربعين؛ فيظهر مجموع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>+</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">جا</mi></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`. المطلوب المشتقة الثانية؛ نشتق مرتين بالسلسلة، ونضرب في مشتقة الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، كل مرة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`


hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p025-q7
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٥ · السؤال ٧
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٥، السؤال ٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">π</mi></mrow><mrow><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">قا</mtext><mi mathvariant="normal">س</mi><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">π</mi></mrow><mrow><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow></math>\` يساوي سالب واحد؛ البسط ثابت يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قا</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\`، ويبقى المعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::


:::mcq
id: math-kamel-u1-p025-q8
title: الكامل، الوحدة ١ · النسخة المصورة، ص ٢٥ · السؤال ٨
kicker: مشتقات الاقترانات المثلثية
reference: الكامل في الرياضيات توجيهي علمي، الوحدة الأولى، ٢٠٢٥، النسخة المصورة، ص ٢٥، السؤال ٨
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo>[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo>]</mo></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true">(</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><msqrt><mn dir="ltr">٢</mn></msqrt></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo>[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo>]</mo></mrow></mrow></math>\`.

نختار الزاوية التي تجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` يساوي جذر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ضمن الفترة المعطاة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نشتق طرفي العلاقة؛ مشتقة المدخل تضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نعوّض بالزاوية المختارة ونقسم على جتاها غير الصفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt><mo>)</mo></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mfrac><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: حدّد المعطيات والمطلوب، ثم طبّق القاعدة المناسبة.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "مشتقات الاقترانات المثلثية",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة مشتقات الاقترانات المثلثية من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "27 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
